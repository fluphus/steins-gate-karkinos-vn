(() => {
  "use strict";
  const D = window.KARKINOS_DATA,
    engine = KarkinosEngine.create(D),
    $ = (id) => document.getElementById(id);
  let language = window.KarkinosLanguage.current,
    muted = false,
    epoch = 0,
    timers = new Set(),
    boxCleanup = null,
    history = [],
    customMessage = "",
    audioError = false;
  let interactionId = 0;
  const saveKey = "karkinos-offline-full-checkpoint-v1";
  const workPreview = window.parent !== window && window.name === "karkinos-work-preview";
  const modePreferenceKey = "karkinos-new-game-mode-v1";
  let newGameMode = "story";
  try {
    if (localStorage.getItem(modePreferenceKey) === "puzzle") newGameMode = "puzzle";
  } catch {}
  const firstScene = KarkinosFlow.order[0];
  const lastScene = KarkinosFlow.order[KarkinosFlow.order.length - 1];
  const unlocked = new Set([firstScene]);
  let replay = false;
  let checkpoint = null;
  let campaignStarting = false;
  const sceneEndModes = ["end", "clear", "chapter-end"];
  let automaticSceneTimer = null, automaticSceneKey = "", automaticSceneRemaining = 0;
  let automaticSceneTick = 0, automaticSceneRunning = false, pageInactive = false;
  let sceneInputGuardUntil = 0;
  const transitionHeldKeys = new Set(), transitionPointers = new Set(), transitionClicks = new Set();
  function includeProgress(state) {
    for (const id of [state.scene, ...(state.completed || []), ...(state.journal || []).map(entry => entry.scene)])
      if (D.scenes[id]) unlocked.add(id);
    if (["clear", "end", "chapter-end"].includes(state.mode) && D.scenes[state.nextScene])
      unlocked.add(state.nextScene);
    if (state.completed?.includes(lastScene) || (state.scene === lastScene && state.mode === "clear"))
      KarkinosEngine.sceneIds.forEach(id => unlocked.add(id));
  }
  function loadCheckpoint() {
    if (workPreview) return;
    try {
      const s = JSON.parse(
        localStorage.getItem(saveKey) ||
          localStorage.getItem("karkinos-offline-demo-checkpoint-v1"),
      );
      if (s?.version !== 1) return;
      const verified = KarkinosEngine.create(D).restore(s.state);
      for (const id of s.unlocked || []) if (D.scenes[id]) unlocked.add(id);
      includeProgress(verified);
      checkpoint = s;
      $("resume-button").hidden = false;
    } catch {}
  }
  function saveCheckpoint() {
    if (workPreview || replay) return;
    const s = engine.state;
    if (
      ![
        "dialogue",
        "branch",
        "info",
        "guide",
        "answer",
        "correct",
        "memory",
        "box",
        "interaction",
        "puzzle",
        "puzzle-success",
        "action",
        "chapter-end",
        "end",
        "clear",
      ].includes(s.mode)
    )
      return;
    includeProgress(s);
    const saved = {
      version: 1,
      state: s,
      history: history.map((h) => ({ ...h })),
      language,
      unlocked: [...unlocked],
    };
    checkpoint = saved;
    try {
      localStorage.setItem(saveKey, JSON.stringify(saved));
    } catch {}
    $("resume-button").hidden = false;
  }
  class SegmentPlayer {
    constructor(onStop) {
      this.onStop = onStop;
      this.audio = new Audio();
      this.audio.preload = "metadata";
      this.serial = 0;
      this.end = null;
      this.loopStart = null;
      if (onStop) this.audio.addEventListener("ended", () => this.stop());
      this.audio.addEventListener("timeupdate", () => this.check());
      this.ticker = setInterval(() => this.check(), 35);
    }
    check() {
      if (this.end != null && this.audio.currentTime >= this.end) {
        if (this.loopStart != null) this.audio.currentTime = this.loopStart;
        else this.stop();
      }
    }
    stop() {
      this.serial++;
      this.audio.pause();
      this.end = null;
      this.loopStart = null;
      this.onStop?.();
    }
    play(src, start = 0, end = null, loop = false, volume = 1) {
      this.stop();
      if (!src || muted) return;
      const token = this.serial;
      const a = this.audio;
      this.end = end;
      this.loopStart = loop && end != null ? start : null;
      a.volume = volume;
      a.loop = loop && end == null;
      if (a.getAttribute("src") !== src) {
        a.src = src;
        a.load();
      }
      const seek = () => {
        if (token !== this.serial) return;
        try {
          a.currentTime = start;
        } catch {}
        a.play().catch(() => {
          if (token === this.serial) { audioError = true; this.stop(); }
        });
      };
      if (a.readyState >= 1) seek();
      else a.addEventListener("loadedmetadata", seek, { once: true });
    }
  }
  const voice = new SegmentPlayer(),
    se = new SegmentPlayer(),
    bgm = new SegmentPlayer(),
    memorySound = new SegmentPlayer();
  let logVoiceRow = null;
  const logVoice = new SegmentPlayer(() => {
    logVoiceRow?.classList.remove("playing");
    logVoiceRow?.querySelector(".log-entry-play")?.setAttribute("aria-pressed", "false");
    logVoiceRow = null;
    const status = $("log-playback-status");
    if (status) status.textContent = "";
  });
  logVoice.audio.addEventListener("error", () => {
    if (!logVoiceRow) return;
    logVoice.stop();
    $("log-playback-status").textContent = tr("语音加载失败，请重试。", "音声を読み込めませんでした。もう一度お試しください。");
  });
  const reader = KarkinosReader.create({
    getState: () => ({...engine.state, muted}), getRow: () => engine.row,
    getLanguage: () => language, advance, openLog, voicePlaying: () => !voice.audio.paused,
    transitionBlocked: () => sceneInputBlocked(),
  });
  let currentBgm = "",
    currentSe = "";
  function later(fn, ms) {
    const token = epoch;
    let id = setTimeout(() => {
      timers.delete(id);
      if (token !== epoch) return;
      if (reader.moreOpen || $("log-modal").open || $("image-modal").open || $("chapter-dialog").open) {
        later(fn, 100);
        return;
      }
      fn();
    }, ms);
    timers.add(id);
    return id;
  }
  function cleanup() {
    cancelAutomaticScene();
    window.KarkinosChapterTitles?.cancel();
    reader.closeTools();
    reader.stop();
    logVoice.stop();
    $("answer-input").value = "";
    $("password-reveal").hidden = true;
    $("demo-help").open = false;
    window.KarkinosOriginalStage?.clean();
    epoch++;
    timers.forEach(clearTimeout);
    timers.clear();
    [voice, se, bgm, memorySound].forEach((a) => a.stop());
    currentBgm = "";
    currentSe = "";
    customMessage = "";
    if (boxCleanup) {
      boxCleanup();
      boxCleanup = null;
    }
    $("box-host").replaceChildren();
    for (const id of [
      "box-host",
      "puzzle-host",
      "feedback",
      "wrong-poster",
      "meter",
      "reopen-box",
    ])
      $(id).hidden = true;
    const v = $("appear-video");
    v.pause();
    v.removeAttribute("src");
    v.load();
    v.hidden = true;
    $("scene-video").pause();
    $("scene-video").onended = null;
    $("scene-video").hidden = true;
    $("stage-art").hidden = true;
    $("game").classList.remove("fade-white", "fade-black");
    for (const id of ["image-modal", "log-modal", "chapter-dialog", "new-game-confirm"])
      if ($(id).open) $(id).close();
  }
  const tr = (zh, ja) => language === "ja" ? ja : zh;
  function sceneTitle(scene) {
    return language === "ja" ? scene.title.replace(/最终章/g, "最終章").replace(/尾声/g, "エピローグ").replace(/结局/g, "エンディング").replace(/独立试玩/g, "体験版") : scene.title;
  }
  function applyUiLanguage() {
    document.documentElement.lang = language === "ja" ? "ja" : "zh-CN";
    document.title = tr("STEINS;GATE 不可侵领域的 Karkinos", "STEINS;GATE 不可侵領域のカルキノス");
    const labels = {
      "#resume-button": ["继续游戏", "つづきから"], "#new-game": ["新游戏", "はじめから"],
      "#mode-title": ["选择模式", "モード選択"],
      '#play-mode-select option[value="story"]': ["剧情模式", "ストーリーモード"],
      '#play-mode-select option[value="puzzle"]': ["解谜模式", "謎解きモード"],
      '#new-game-mode-select option[value="story"]': ["剧情模式", "ストーリーモード"],
      '#new-game-mode-select option[value="puzzle"]': ["解谜模式", "謎解きモード"],
      "#new-game-confirm-heading": ["开始新游戏？", "はじめから遊びますか？"],
      "#new-game-replace": ["开始新游戏", "はじめから"], "#new-game-cancel": ["取消", "キャンセル"],
      "#preview-opening": ["预览片头", "オープニングをプレビュー"],
      "#home-button": ["章节", "チャプター"], "#log-button": ["回看", "履歴"],
      "#reader-more-toggle": ["设置", "設定"], "#guide-link": ["地图与提示", "地図とヒント"],
      "#reader-settings-heading": ["设置", "設定"], "#reader-settings-close": ["关闭", "閉じる"],
      "#reader-settings-reading": ["阅读", "読み進める"], "#reader-settings-navigation": ["导航", "ナビゲーション"],
      "#reader-settings-preferences": ["偏好", "表示・音声"],
      "#memory-object span": ["读取记忆数据", "記憶データを読み取る"],
      "#replay-button": ["↻ 语音", "↻ 音声"], '#answer-form > label': ["输入日文口令", "日本語でパスワードを入力"],
      "#answer-submit": ["决定", "決定"], "#demo-help > summary": ["提示", "ヒント"],
      "#show-password": ["显示答案", "答えを表示"], "#puzzle-tools": ["操作记忆碎片", "記憶の断片を操作"],
      "#poster-close": ["返回输入", "入力に戻る"], "#end-home": ["返回标题", "タイトルへ"],
      "#end-restart": ["重新观测本场", "この場面をもう一度"], "#reopen-box": ["重新打开盒子", "選択パネルを開く"],
      "#chapter-heading": ["章节", "チャプター"], "#chapter-close": ["返回游戏", "ゲームに戻る"],
      "#chapter-dialog > p": ["回看不会覆盖主线进度。", "読み返しても本編の進行状況は変わりません。"],
      "#chapter-resume": ["继续主线", "本編のつづきへ"], "#chapter-home": ["返回标题", "タイトルへ"],
      "#log-modal h2": ["观测记录", "観測記録"], "#log-close": ["关闭", "閉じる"], "#image-close": ["关闭谜面", "問題画像を閉じる"],
    };
    for (const [selector, values] of Object.entries(labels)) {
      const node = document.querySelector(selector);
      if (node) node.textContent = tr(...values);
    }
    const attributes = [
      ["home-button", "title", "章节菜单", "チャプターメニュー"],
      ["dialogue", "aria-label", "推进对话", "会話を進める"],
      ["memory-object", "aria-label", "读取记忆数据", "記憶データを読み取る"],
      ["answer-input", "aria-label", "输入日文口令", "日本語でパスワードを入力"],
      ["replay-button", "title", "重播本句语音", "この台詞の音声を再生"],
      ["stage-art", "alt", "场景画面", "シーン画像"], ["large-puzzle", "alt", "谜面", "問題画像"],
      ["key-visual", "alt", "宣传图", "キービジュアル"],
    ];
    for (const [id, attribute, zh, ja] of attributes) $(id).setAttribute(attribute, tr(zh, ja));
    document.querySelector(".title-key-visual").alt = tr("STEINS;GATE 不可侵领域的 Karkinos 主视觉", "STEINS;GATE 不可侵領域のカルキノス キービジュアル");
    document.querySelector(".memory-core").alt = tr("发光记忆物件", "光る記憶データ");
    document.querySelector("#meter img").alt = tr("分歧仪与数列", "ダイバージェンスメーターと数列");
    $("language-button").textContent = tr("简中", "日本語");
    $("language-button").lang = language === "ja" ? "ja" : "zh-CN";
    $("language-button").setAttribute("aria-label", tr("阅读语言：简体中文。切换为日语", "表示言語：日本語。簡体字中国語に切り替える"));
    $("language-button").title = tr("切换为日语", "簡体字中国語に切り替える");
    $("sound-button").textContent = tr("声音 " + (muted ? "关" : "开"), "音声 " + (muted ? "OFF" : "ON"));
    for (const image of document.querySelectorAll('#puzzles img')) image.alt = tr("谜面 ", "問題画像 ") + image.parentElement.dataset.puzzle;
    for (const button of document.querySelectorAll('#puzzles button')) button.setAttribute("aria-label", tr("放大谜面 ", "問題画像を拡大 ") + button.dataset.puzzle);
    if (workPreview) {
      $("mode-title").textContent = tr("工作版 · 场景预览", "作業版 · シーンプレビュー");
      $("home-button").textContent = tr("场景预览", "シーンプレビュー");
      $("home-button").title = tr("返回工作版场景预览", "作業版のシーンプレビューへ戻る");
      $("end-home").textContent = tr("返回场景预览", "シーンプレビューへ戻る");
    }
    for (const id of ["guide-link", "end-guide"]) $(id).href = window.KarkinosLanguage.guideUrl($(id).href, language);
    updateSettingsContext();
  }
  function modeDescription(mode) {
    return mode === "story"
      ? tr("保留角色选择，谜题以旁白衔接。", "選択肢は残し、謎解きはナレーションで進めます。")
      : tr("亲手解谜并输入日文口令。", "謎を解いて日本語のパスワードを入力します。");
  }
  function updateSettingsContext() {
    const playing = !$("game").hidden;
    $("toolbar").hidden = false;
    $("scene-title").hidden = !playing;
    for (const id of ["reader-settings-reading", "reader-settings-navigation"])
      $(id).closest(".reader-settings-section").hidden = !playing;
    $("reader-settings-newgame-section").hidden = workPreview;
    $("reader-settings-newgame").textContent = playing
      ? tr("新游戏模式（下次生效）", "新規ゲームのモード（次回に適用）")
      : tr("新游戏模式", "新規ゲームのモード");
    $("new-game-mode-select").value = newGameMode;
    $("new-game-mode-summary").textContent = modeDescription(newGameMode);
  }
  function txt(row, sid = engine.scene?.id) {
    if (row.storyBridge) return language === "zh" ? row.body : row.bodyJa;
    if (row.extraIntro) return language === "zh" ? row.bodyZh : row.body;
    return language === "zh"
      ? (window.KarkinosZh?.linesByScene?.[sid]?.[row.id] ??
          window.KarkinosZh?.lines[row.id] ??
          row.body)
      : row.body;
  }
  function name(row) {
    if (row.storyBridge)
      return language === "zh"
        ? row.name
        : "ナレーション";
    return language === "zh"
      ? (window.KarkinosZh?.names[row.name] ?? row.name)
      : row.name;
  }
  function ui(name) {
    const original = engine.scene?.ui[name] || "";
    if (!original || language !== "zh") return original;
    // Localized image assets keep the source button outline; source PNGs stay Japanese.
    if (name === "branch_yes" || name === "branch_yes_right") return "assets/ui/choice-yes-zh.png";
    if (name === "branch_no") return "assets/ui/choice-no-zh.png";
    return original;
  }
  function art(id, n) {
    const p = ui(n);
    $(id).style.backgroundImage = p ? `url("${p}")` : "";
  }
  function setBgm(n) {
    if (n === currentBgm) return;
    currentBgm = n;
    bgm.play(engine.scene.audio[n], 0, null, true, 0.1);
  }
  function playVoice() {
    const cue = engine.row?.voice;
    if (cue) voice.play(cue.track, cue.start, cue.end);
  }
  function playSe(id) {
    const cue = D.se[id];
    if (cue)
      se.play(
        engine.scene.audio.SE_all,
        cue.start,
        cue.end,
        cue.loop === "true",
      );
  }
  function start(sid, selectedMode = $("play-mode-select").value, asReplay = false) {
    if (!workPreview && !unlocked.has(sid)) return;
    cleanup();
    replay = asReplay;
    window.KarkinosPuzzles?.reset?.(sid);
    history = [];
    engine.start(sid, selectedMode);
    $("play-mode-select").value = engine.state.playMode;
    $("home").hidden = true;
    $("toolbar").hidden = false;
    $("game").hidden = false;
    if (sid === firstScene) saveCheckpoint();
    if (
      sid === "b7f11f61526a7f98" &&
      window.KarkinosOriginalStage?.showTrialIntro
    ) {
      engine.mark("trial-intro");
      paint();
      const token = epoch;
      window.KarkinosOriginalStage.showTrialIntro(
        {
          state: engine.state,
          scene: engine.scene,
          row: engine.row,
          container: $("game"),
          lang: language,
          data: D,
        },
        () => {
          if (token !== epoch) return;
          engine.mark("dialogue");
          enter();
        },
      );
      return;
    }
    enter();
  }
  function goHome() {
    cleanup();
    history = [];
    engine.home();
    replay = false;
    $("home").hidden = false;
    $("game").hidden = true;
    $("toolbar").hidden = true;
    showMenu(workPreview);
    $("scene-title").textContent = "KARKINOS";
  }
  function resume() {
    if (!checkpoint) return;
    cleanup();
    replay = false;
    try {
      engine.restore(checkpoint.state);
    } catch {
      checkpoint = null;
      $("resume-button").hidden = true;
      return;
    }
    $("play-mode-select").value = engine.state.playMode;
    const ids = new Set(engine.state.journal.map((x) => x.scene + ":" + x.id));
    history = (checkpoint.history || [])
      .map((h) => ({ ...h, scene: h.scene || engine.scene.id }))
      .filter((h) => ids.has(h.scene + ":" + h.id));
    $("home").hidden = true;
    $("toolbar").hidden = false;
    $("game").hidden = false;
    if (engine.state.record !== checkpoint.state.record ||
        (engine.state.playMode === "story" && engine.state.directive.kind === "timer")) {
      enter();
      return;
    }
    if (engine.state.mode === "correct") {
      engine.answerContinue();
      enter();
      return;
    }
    if (engine.state.mode === "puzzle-success") {
      finishPuzzle();
      return;
    }
    const r = engine.row;
    if (openStorySwitch()) return;
    applyMusic();
    paint();
    if (engine.state.mode === "memory")
      memorySound.play(engine.scene.audio.SE_memory, 0, null, true, 0.35);
    if (["dialogue", "memory", "branch"].includes(engine.state.mode))
      playVoice();
    $("meter").hidden = !["AR2_4_02", "AR2_4_03"].includes(r.id);
    if (engine.state.mode !== checkpoint.state.mode) saveCheckpoint();
  }
  function remember(row) {
    if (row.body)
      history.push({
        id: row.id,
        scene: engine.scene.id,
        body: customMessage || null,
        name: row.name,
      });
  }
  function offlineDirections(id) {
    const directions = {
      AR2_1_27: ["查阅地图上的❶❷和册子第 11、12 页的线索，找出记忆数据Ⅳ的位置。", "地図の❶❷と冊子11・12ページのヒントから、記憶データⅣの場所を探してください。"],
      AR2_2_32: ["查阅地图上的♣♠和册子第 13、14 页的线索，求出记忆数据Ⅳ的口令。", "地図の♣♠と冊子13・14ページのヒントから、記憶データⅣのパスワードを求めてください。"],
      AR2_3_19: ["解读册子第 15、16 页的暗号。", "冊子15・16ページの暗号を解いてください。"],
      AR3_1_75: ["按册子第 21、22 页的线索解读暗号，再进入 EX1 组合部首。", "冊子21・22ページの手掛かりで暗号を読み解き、次の EX1 で部首を組み合わせてください。"],
    };
    if (!directions[id]) return "";
    return directions[id][language === "zh" ? 0 : 1];
  }
  function showDirections(container, original, directions) {
    const note = document.createElement("p");
    note.textContent = directions;
    container.replaceChildren(note);
  }
  function arrivalContext(scene, record, state) {
    if (state.playMode !== "puzzle") return null;
    if (scene.id === "pk95ywe" && record.id === "AR2_2_01")
      return { text: offlineDirections("AR2_1_27"), guide: "2-1" };
    if (scene.id === "5ey3se2" && record.id === "AR2_3_01_ent")
      return { text: offlineDirections("AR2_2_32"), guide: "2-2" };
    if (scene.id === "fryi3j5" && ["AR2_4_0_1", "AR2_4_0_2"].includes(record.id))
      return { text: offlineDirections("AR2_3_19"), guide: "2-3" };
    if (scene.id === "bkucguk" && record.id === "EX_bkucguk")
      return { text: tr("按册子第 21、22 页的线索解读暗号，再组合部首。", "冊子21・22ページの手掛かりで暗号を読み解き、部首を組み合わせてください。"), guide: "3-1" };
    return null;
  }
  function paintArrivalContext(scene, record, state) {
    const context = arrivalContext(scene, record, state);
    for (const [id, visible] of [["answer-context", state.mode === "answer"], ["info-context", !$("info-panel").hidden]]) {
      const panel = $(id);
      panel.hidden = !context || !visible;
      if (panel.hidden) continue;
      panel.querySelector("p").textContent = context.text;
      const link = panel.querySelector("a");
      link.textContent = tr("地图与提示", "地図とヒント");
      link.href = window.KarkinosLanguage.guideUrl("field-guide/index.html#" + context.guide, language);
    }
  }
  function isContinuousEnding(state = engine.state) {
    return !workPreview && !replay && !engine.spec.trial && !$("game").hidden &&
      !!state.nextScene && sceneEndModes.includes(state.mode);
  }
  function cancelAutomaticScene() {
    clearTimeout(automaticSceneTimer);
    automaticSceneTimer = null; automaticSceneKey = "";
    $("game").removeAttribute("data-auto-transition");
  }
  function automaticSceneCanRun() {
    return !pageInactive && !document.hidden && document.hasFocus() && !reader.moreOpen &&
      !document.querySelector("dialog[open]") && voice.audio.paused &&
      [...$("end-content").querySelectorAll("img")].every(image => image.complete);
  }
  function updateAutomaticScene() {
    const state = engine.state;
    if (!isContinuousEnding(state) || pageInactive) { cancelAutomaticScene(); return; }
    const key = [epoch, state.scene, state.record, state.mode, state.nextScene].join(":");
    if (key === automaticSceneKey) return;
    cancelAutomaticScene(); automaticSceneKey = key;
    automaticSceneRemaining = state.mode === "clear" ? 2200 : 600;
    automaticSceneTick = performance.now(); automaticSceneRunning = automaticSceneCanRun();
    $("game").dataset.autoTransition = "pending";
    function tick() {
      if (automaticSceneKey !== key) return;
      if (!isContinuousEnding() || pageInactive) { cancelAutomaticScene(); return; }
      const now = performance.now(), running = automaticSceneCanRun();
      if (running && automaticSceneRunning) automaticSceneRemaining -= now - automaticSceneTick;
      automaticSceneTick = now; automaticSceneRunning = running;
      if (automaticSceneRemaining <= 0) {
        automaticSceneTimer = null;
        nextScene({ automatic: true, expectedScene: state.scene, expectedRecord: state.record });
        if (automaticSceneKey === key && !chapterTransitionPending)
          automaticSceneTimer = setTimeout(tick, 80);
      } else automaticSceneTimer = setTimeout(tick, 80);
    }
    automaticSceneTimer = setTimeout(tick, 80);
  }
  // Contain the ending gesture and a quick second tap across the scene boundary.
  function sceneInputBlocked() {
    return !!automaticSceneKey || chapterTransitionPending || performance.now() < sceneInputGuardUntil;
  }
  for (const type of ["pointerdown", "pointerup", "pointercancel", "click", "dblclick"])
    document.addEventListener(type, event => {
      if (!$("game").contains(event.target) || event.target.closest("#end-home,#end-restart")) return;
      const blocked = sceneInputBlocked(), pointer = event.pointerId;
      if (type === "pointerdown") {
        transitionClicks.delete(pointer);
        if (!blocked) return;
        transitionPointers.add(pointer);
      }
      if (type === "pointerup" || type === "pointercancel") {
        const beganBlocked = transitionPointers.delete(pointer);
        if (!blocked && !beganBlocked) return;
        if (type === "pointerup" && beganBlocked) transitionClicks.add(pointer);
      }
      if (type === "click" && !transitionClicks.delete(pointer) && !blocked) return;
      if (type === "dblclick" && !blocked) return;
      event.preventDefault(); event.stopImmediatePropagation();
    }, true);
  document.addEventListener("keydown", event => {
    if (![" ", "Enter", "ArrowRight", "Control"].includes(event.key)) return;
    if (event.target.closest("#toolbar,dialog,input,select,textarea")) return;
    if (!sceneInputBlocked() && !transitionHeldKeys.has(event.key)) return;
    transitionHeldKeys.add(event.key); event.preventDefault(); event.stopImmediatePropagation();
  }, true);
  document.addEventListener("keyup", event => {
    if (!transitionHeldKeys.delete(event.key)) return;
    event.preventDefault(); event.stopImmediatePropagation();
  }, true);
  addEventListener("pagehide", () => {
    pageInactive = true; cancelAutomaticScene(); window.KarkinosChapterTitles?.cancel();
    transitionHeldKeys.clear(); transitionPointers.clear(); transitionClicks.clear();
  });
  addEventListener("pageshow", () => { pageInactive = false; updateAutomaticScene(); });
  function resetAutomaticSceneClock() {
    automaticSceneTick = performance.now();
    automaticSceneRunning = false;
  }
  addEventListener("blur", resetAutomaticSceneClock);
  addEventListener("focus", resetAutomaticSceneClock);
  document.addEventListener("visibilitychange", resetAutomaticSceneClock);
  // A pending img request can still paint the previous character at the new
  // camera position. Reveal only the image that belongs to this shot.
  function revealPortrait(image) {
    if (image.complete && image.naturalWidth && image.currentSrc === image.src)
      image.removeAttribute("data-loading-portrait");
  }
  for (const id of ["character", "wipe-character", "phone-character"]) {
    const image = $(id);
    image.addEventListener("load", () => revealPortrait(image));
  }
  function setPortrait(image, src) {
    if (!src || image.getAttribute("src") === src) return;
    image.setAttribute("data-loading-portrait", "");
    image.src = src;
    revealPortrait(image);
  }
  const nextPortraits = { image: new Image(), wipe_image: new Image() };
  function warmNextPortraits(scene, row) {
    const index = scene.rows.indexOf(row);
    if (index < 0) return;
    const next = scene.rows[index + 1];
    if (!next) return;
    for (const [field, image] of Object.entries(nextPortraits)) {
      if (!next[field] || next[field] === row[field]) continue;
      const src = scene.portraits?.[next[field]] || D.portraits[next[field]];
      if (src && image.getAttribute("src") !== src) image.src = src;
    }
  }
  function paint() {
    const s = engine.state,
      r = engine.row,
      scene = engine.scene;
    if (!scene) return;
    applyUiLanguage();
    $("game").dataset.scene = scene.id;
    $("game").dataset.record = r.id;
    $("game").dataset.mode = s.mode;
    $("game").dataset.playMode = s.playMode;
    $("game").dataset.bridge = r.storyBridge ? "true" : "false";
    $("game").dataset.showType = r.show_type;
    $("scene-title").textContent = sceneTitle(scene);
    $("scene-label").textContent = "";
    $("scene-label").hidden = true;
    $("language-button").textContent = language === "zh" ? "简中" : "日本語";
    const body = customMessage
      ? language === "zh"
        ? (window.KarkinosZh?.messages[customMessage] ?? customMessage)
        : customMessage
      : txt(r, scene.id);
    $("body").textContent = body;
    $("speaker").textContent =
      r.storyBridge || /ナレーション|心の声/.test(r.name) ? "" : name(r);
    $("speaker").hidden = !$("speaker").textContent;
    const dialogue =
      [
        "dialogue",
        "branch",
        "failure",
        "memory",
        "interaction",
        "action",
      ].includes(s.mode) && !!body;
    $("dialogue-wrap").hidden = !dialogue;
    $("dialogue").disabled = !["dialogue", "interaction", "action"].includes(
      s.mode,
    );
    $("next-mark").hidden = !["dialogue", "interaction", "action"].includes(
      s.mode,
    );
    $("replay-button").hidden = !r.voice || !dialogue;
    art("dialogue", "log-area");
    art("speaker", "log-area-name");
    $("scene-backdrop").style.backgroundImage =
      r.show_type === "fix_digital" && ui("digital_bg")
        ? `url("${ui("digital_bg")}")`
        : "";
    const portrait = scene.portraits?.[r.image] || D.portraits[r.image];
    // Ordinary Okabe planes share a physical frame. Use fixed family padding
    // anchors, never the current expression, pose or dialogue mode, to size it.
    // Cropped/phone/fixed-camera images and other characters retain their layout.
    const fullOkabe = r.show_type === "ar" && /^okabe_(?:[1-9]|1[0-2]|64|6[7-9]|7\d|8[0-2])$/.test(r.image || "");
    if (fullOkabe) {
      const number = Number(r.image.slice(6));
      const family = number === 1 ? "outline" : number >= 67 ? "dark" : "light";
      const [height, foot] = family === "outline" ? [1652 / 1647, 3 / 1647]
        : family === "dark" ? [1000 / 893, 53 / 893] : [1, 0];
      $("character").dataset.stagePortrait = family;
      $("character").style.setProperty("--portrait-height-factor", height);
      $("character").style.setProperty("--portrait-foot-factor", foot);
    } else {
      $("character").removeAttribute("data-stage-portrait");
      $("character").style.removeProperty("--portrait-height-factor");
      $("character").style.removeProperty("--portrait-foot-factor");
    }
    $("character").hidden =
      !portrait ||
      r.show_type === "phone" ||
      ["answer", "correct", "poster", "box", "clear", "end"].includes(s.mode);
    setPortrait($("character"), portrait);
    const wp = scene.portraits?.[r.wipe_image] || D.portraits[r.wipe_image];
    $("wipe").hidden = !wp || !dialogue;
    if (wp) {
      setPortrait($("wipe-character"), wp);
      $("wipe-frame").src = ui("wipe_bg");
    }
    const phone =
      r.show_type === "phone" || ["AR2_4_18", "AR2_4_19"].includes(r.id);
    $("phone").hidden = !phone;
    if (phone) {
      $("phone-frame").src = ui("wipe_phone");
      $("phone-character").hidden = !portrait;
      setPortrait($("phone-character"), portrait);
    }
    warmNextPortraits(scene, r);
    $("branches").hidden = s.mode !== "branch";
    $("branch-no").disabled = r.id === "AR3_3_15_EXbtn";

    for (const [id, n] of [
      ["branch-yes", "branch_yes"],
      ["branch-no", "branch_no"],
    ]) {
      art(id, n);
      $(id).classList.toggle("has-art", !!ui(n));
      const label = id === "branch-yes" ? tr("是", "はい") : tr("否", "いいえ");
      $(id).textContent = label;
      $(id).setAttribute("aria-label", label);
    }
    $("info-panel").hidden = !(
      ["info", "guide"].includes(s.mode) ||
      (s.mode === "interaction" && r.wipe_show_type === "info")
    );
    if (!$("info-panel").hidden) $("dialogue-wrap").hidden = true;
    $("info-text").textContent = body;
    const directions = offlineDirections(r.id);
    if (directions && !$("info-panel").hidden)
      showDirections($("info-text"), body, directions);
    $("info-close").textContent =
      s.mode === "interaction"
        ? tr("打开互动", "操作画面を開く")
        : engine.spec.jump?.[r.id]
          ? tr("DELETE OFF · 确认", "DELETE OFF · 確認")
          : tr("确认", "確認");
    $("answer-form").hidden = s.mode !== "answer";
    paintArrivalContext(scene, r, s);
    if (s.mode === "answer") {
      $("answer-input").maxLength = engine.spec.input.max || 20;
      $("answer-message").hidden = !ui("message");
      if (ui("message")) $("answer-message").src = ui("message");
      $("password-reveal").textContent =
        engine.question()?.answer.correct[0] || "";
    }
    $("memory-object").hidden = s.mode !== "memory";
    $("memory-object").style.left = scene.id === "pk95ywe" ? "68%" : "65%";
    const hasPuzzles =
      s.playMode === "puzzle" &&
      ["zbwe9e4", "fjzef86", "b7f11f61526a7f98"].includes(scene.id) &&
      s.memory &&
      !["failure", "correct", "end"].includes(s.mode);
    $("puzzles").hidden = !hasPuzzles;
    if (s.mode === "answer" && hasPuzzles) {
      $("answer-form").insertBefore($("puzzles"), $("demo-help"));
    } else if ($("puzzles").parentElement !== $("game")) {
      $("game").insertBefore($("puzzles"), $("memory-object"));
    }
    if ($("puzzles").dataset.scene !== scene.id) {
      $("puzzles").replaceChildren();
      $("puzzles").dataset.scene = scene.id;
    }
    if (
      ["zbwe9e4", "fjzef86", "b7f11f61526a7f98"].includes(scene.id) &&
      !$("puzzles").children.length
    )
      for (let n = 1; n <= 6; n++) {
        const p = scene.assets["nazo_" + n]?.path;
        if (!p) continue;
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", tr("放大谜面 ", "問題画像を拡大 ") + n);
        b.dataset.puzzle = n;
        const im = new Image();
        im.src = p;
        im.alt = tr("谜面 ", "問題画像 ") + n;
        b.append(im);
        b.addEventListener("click", () => {
          $("large-puzzle").src = p;
          $("image-modal").showModal();
        });
        $("puzzles").append(b);
      }
    $("reopen-box").hidden = true;
    $("puzzle-launch").hidden =
      !["interaction", "puzzle"].includes(s.mode) ||
      !$("puzzle-host").hidden ||
      !$("box-host").hidden;
    if (!$("info-panel").hidden) $("puzzle-launch").hidden = true;
    $("puzzle-launch").textContent = tr("展开互动", "操作画面を開く");
    $("action-button").hidden = s.mode !== "action";
    if (s.mode === "action") {
      $("action-label").textContent = s.directive.ui === "search" ? tr("搜索", "検索") : s.directive.label || tr("操作", "操作");
      const path = ui(s.directive.ui);
      $("action-image").hidden = !path;
      if (path) $("action-image").src = path;
    }
    $("puzzle-tools").hidden = s.mode !== "answer" || !engine.spec.tools;
    $("guide-link").href = window.KarkinosLanguage.guideUrl("field-guide/index.html#" + scene.step, language);
    const needsMap = ["2-1", "2-2"].includes(scene.step);
    $("end-guide").href = window.KarkinosLanguage.guideUrl("field-guide/index.html#" + (needsMap ? "map" : scene.step), language);
    $("end-guide").textContent = language === "zh" ? "地图与提示" : "地図・ヒントを開く";
    $("end-guide").hidden = !engine.spec.map;
    const continuousEnding = isContinuousEnding(s);
    $("end-panel").hidden = !sceneEndModes.includes(s.mode) || (continuousEnding && s.mode !== "clear");
    if (!$("end-panel").hidden) {
      $("end-home").hidden = continuousEnding;
      $("end-restart").hidden = continuousEnding;
      const c = $("end-content");
      c.replaceChildren();
      if (s.mode === "clear")
        for (const n of ["clear", "clear_info", "clear_end"])
          if (ui(n)) {
            const im = new Image();
            im.src = ui(n);
            im.alt = sceneTitle(scene) + " CLEAR";
            c.append(im);
          }
      if (engine.spec.trial && ui("key_visual")) {
        const im = new Image();
        im.src = ui("key_visual");
        im.alt = tr("试玩结束画面", "体験版終了画面");
        c.append(im);
      }
      if (!ui("clear")) {
        const p = document.createElement("p");
        p.textContent = tr("观测完成", "観測完了");
        c.append(p);
      }
      if (directions && s.playMode !== "story") {
        const detail = document.createElement("div");
        showDirections(detail, body, directions);
        c.append(detail);
      }
      $("end-next").hidden = continuousEnding || !s.nextScene || (replay && !unlocked.has(s.nextScene));
      $("end-next").textContent = s.nextScene
        ? (language === "zh" ? "继续 · " : "次へ · ") + sceneTitle(D.scenes[s.nextScene])
        : "";
    }
    window.KarkinosOriginalStage?.render({
      state: s,
      scene,
      row: r,
      container: $("game"),
      lang: language,
      choiceArt: ui,
      data: D,
    });
    if (sceneEndModes.includes(s.mode) && offlineDirections(r.id) &&
        !history.some(entry => entry.scene === scene.id && entry.id === r.id)) remember(r);
    window.KarkinosPortraitLayout?.update(r);
    reader.update();
    updateAutomaticScene();
  }

  function applyMusic() {
    if (!engine.scene) return;
    const track =
      window.KarkinosMusic?.at(
        engine.scene.id,
        engine.row.id,
        engine.state.visits,
      ) || null;
    if (!track) {
      bgm.stop();
      currentBgm = "";
    } else setBgm(track);
  }
  function sceneVideo(path, onEnd) {
    const v = $("scene-video");
    v.onended = onEnd || null;
    if (!path) {
      feedback(tr("视频无法播放，请重新打开游戏。", "動画を再生できません。ゲームを開き直してください。"));
      return;
    }
    v.src = path;
    v.muted = muted;
    v.hidden = false;
    v.controls = true;
    v.play().catch(() => {
      v.controls = true;
    });
  }
  function enter() {
    reader.closeTools();
    const r = engine.row,
      id = r.id,
      s = engine.state,
      dir = s.directive;
    customMessage = "";
    voice.stop();
    remember(r);
    paint();
    applyMusic();
    window.KarkinosOriginalStage?.enter({
      state: engine.state,
      scene: engine.scene,
      row: r,
      container: $("game"),
      lang: language,
      choiceArt: ui,
      data: D,
    });
    const seId = id === "AR3_4_10" ? "SE3_4_04" : r.se_id;
    if (seId && seId !== currentSe) {
      playSe(seId);
      currentSe = seId;
    } else if (!seId) {
      se.stop();
      currentSe = "";
    }
    if (id !== "AR1_1_01") {
      if (!reader.fast) playVoice();
    }
    else {
      engine.mark("waiting");
      paint();
      $("dialogue-wrap").hidden = true;
      later(() => {
        engine.mark("dialogue");
        paint();
        playVoice();
        saveCheckpoint();
      }, 3000);
    }
    if (s.mode === "memory")
      memorySound.play(engine.scene.audio.SE_memory, 0, null, true, 0.35);
    if (["AR2_2_08", "AR2_3_16"].includes(id)) {
      $("dialogue-wrap").hidden = true;
      $("character").hidden = true;
    }
    $("meter").hidden = !["AR2_4_02", "AR2_4_03"].includes(id);
    if (dir.kind === "timer") {
      engine.mark("waiting");
      paint();
      $("dialogue-wrap").hidden = true;
      if (id === "AR2_4_18") {
        const v = $("appear-video"),
          path = engine.scene.assets["scr_amadeus_appear.mp4"]?.path;
        if (path) {
          v.src = path;
          v.hidden = false;
          v.muted = muted;
          v.currentTime = 0;
          v.play().catch(() => {});
        }
      }
      if (id === "AR2_4_19") {
        $("appear-video").pause();
        $("appear-video").hidden = true;
      }
      if (["AR3_1_41", "AR3_2_30"].includes(id))
        sceneVideo(engine.scene.assets.meter?.path);

      if (id === "AR2_4_23_0") $("game").classList.add("fade-white");
      if (id === "AR2_4_23") {
        $("game").classList.remove("fade-white");
        $("game").classList.add("fade-black");
      }
      later(() => {
        $("scene-video").pause();
        $("scene-video").hidden = true;
        $("game").classList.remove("scene-blur");
        engine.set(dir.target);
        enter();
      }, dir.delay);
    }
    if (id === "AR2_4_24") {
      engine.mark("waiting");
      paint();
      $("dialogue-wrap").hidden = true;
      later(() => {
        engine.mark("dialogue");
        paint();
        saveCheckpoint();
      }, 3000);
    }
    if (engine.spec.holdEnd && engine.spec.endAfter === id) {
      engine.mark("waiting");
      paint();
      $("dialogue-wrap").hidden = false;
      $("dialogue").disabled = true;
      later(() => {
        engine.finish();
        paint();
        applyMusic();
        saveCheckpoint();
      }, engine.spec.holdEnd);
    }
    if (dir.kind === "credits") {
      engine.mark("waiting");
      paint();
      voice.stop();
      se.stop();
      sceneVideo(engine.scene.assets["endroll.mp4"]?.path, () => {
        if (!engine.scene || engine.scene.id !== "82ezfsx") return;
        $("scene-video").hidden = true;
        engine.set("AR3_4_23");
        engine.finish();
        paint();
        applyMusic();
        saveCheckpoint();
      });
    }
    openStorySwitch();
    saveCheckpoint();
  }
  function advance() {
    if (
      !["dialogue", "info", "guide", "interaction", "action"].includes(
        engine.state.mode,
      )
    )
      return;
    engine.advance();
    if (engine.state.mode === "puzzle") {
      paint();
      saveCheckpoint();
      openPuzzle();
    } else if (["clear", "end", "chapter-end"].includes(engine.state.mode)) {
      voice.stop();
      paint();
      applyMusic();
      saveCheckpoint();
    } else enter();
  }

  function choose(yes) {
    if (engine.state.mode !== "branch") return;
    engine.choose(yes);
    enter();
  }
  function feedback(text, ms = 0) {
    $("feedback").textContent = text;
    $("feedback").hidden = false;
    if (ms) later(() => ($("feedback").hidden = true), ms);
  }
  function submitAnswer(value) {
    if (engine.state.mode !== "answer") return;
    const result = engine.answer(value);
    $("answer-input").value = "";
    if (result.correct) {
      saveCheckpoint();
      voice.stop();
      paint();
      playSe(
        engine.getRow(engine.spec.input.success)?.se_id ||
          {
            zbwe9e4: "SE1_1_52",
            fjzef86: "SE1_2_29_CORa",
            pk95ywe: "SE2_2_01",
            "5ey3se2": "SE2_3_01_ent",
          }[engine.scene.id],
      );
      feedback(tr("认证成功", "認証成功"), 3000);
      later(() => {
        engine.answerContinue();
        enter();
      }, 3000);
    } else {
      enter();
      customMessage = result.message || "";
      paint();
      if (customMessage) {
        history[history.length - 1].body = customMessage;
      }
      playSe(
        {
          zbwe9e4: "SE1_1_51",
          fjzef86: "SE1_2_29_FAI",
          pk95ywe: "SE2_2_01-outsider",
          "5ey3se2": "SE2_3_01_1",
        }[engine.scene.id],
      );
      later(
        () => {
          if (engine.scene.id === "pk95ywe") {
            engine.mark("poster");
            paint();
            $("wrong-poster").hidden = false;
            $("key-visual").src = ui("key_visual");
          } else {
            engine.answerReturn();
            enter();
            $("answer-input").focus();
          }
        },
        result.warning ? 5000 : engine.scene.id === "pk95ywe" ? 4000 : 3000,
      );
    }
    return result;
  }

  function closePuzzle() {
    interactionId++;
    if (boxCleanup) {
      boxCleanup();
      boxCleanup = null;
    }
    $("puzzle-host").hidden = true;
    $("box-host").hidden = true;
  }
  function finishPuzzle() {
    closePuzzle();
    engine.puzzleComplete();
    if (["end", "clear"].includes(engine.state.mode)) {
      paint();
      applyMusic();
      saveCheckpoint();
    } else enter();
  }
  function openStorySwitch() {
    const state = engine.state;
    if (state.playMode !== "story" || state.directive.event !== "ending-switch" ||
        !["interaction", "puzzle"].includes(state.mode)) return false;
    engine.mark("puzzle");
    applyMusic();
    paint();
    openPuzzle();
    saveCheckpoint();
    return true;
  }
  function openPuzzle(tool = false) {
    const state = engine.state,
      dir = state.directive;
    const eventId = tool ? engine.spec.tools : dir.event;
    if (!eventId || (!tool && state.mode !== "puzzle")) return;
    voice.stop();
    memorySound.stop();
    const host = eventId === "marker-box" ? $("box-host") : $("puzzle-host");
    host.hidden = false;
    const token = epoch;
    const openId = ++interactionId;
    const component =
      eventId === "marker-box" ? window.KarkinosBox : window.KarkinosPuzzles;
    if (!component) {
      host.hidden = true;
      feedback(tr("无法打开互动，请重新打开游戏。", "操作画面を開けません。ゲームを開き直してください。"));
      return;
    }
    const options = {
      sceneId: engine.scene.id,
      recordId: dir.switchIndex === 0 ? "AR3_4_02" : engine.row.id,
      eventId,
      data: {
        ...engine.scene,
        muted,
        language,
        questions: engine.scene.questions,
        allQuestions: D.questions,
        switchIndex: dir.switchIndex || 0,
        inventory: engine.state.inventory,
      },
      onSolved: () => {
        if (token !== epoch || openId !== interactionId) return;
        if (tool) {
          closePuzzle();
          paint();
          return;
        }
        engine.mark("puzzle-success");
        saveCheckpoint();
        const delay = dir.delay ?? (eventId === "marker-box" ? 3000 : 0);
        later(() => {
          if (openId === interactionId) finishPuzzle();
        }, delay);
      },
      onClose: () => {
        if (token !== epoch || openId !== interactionId) return;
        if (engine.state.mode === "puzzle-success") {
          finishPuzzle();
          return;
        }
        closePuzzle();
        if (!tool) engine.mark("interaction");
        paint();
        saveCheckpoint();
      },
      onAction: (action) => {
        if (token !== epoch || openId !== interactionId) return;
        engine.recordEvent(action);
        if (action.type === "record") {
          const feedbackRow = engine.getRow(action.recordId);
          if (feedbackRow?.body)
            history.push({
              id: feedbackRow.id,
              scene: engine.scene.id,
              body: null,
              name: feedbackRow.name,
            });
        }
        saveCheckpoint();
      },
    };
    boxCleanup = component.open(host, options);
    if (!tool && state.playMode === "story" && eventId === "ending-switch") {
      const instruction = host.querySelector(".kp-intro");
      if (instruction) {
        const source = dir.switchIndex === 0 ? engine.getRow("AR3_4_01") : engine.row;
        instruction.textContent = txt(source, engine.scene.id);
        instruction.hidden = false;
      }
    }
  }
  let chapterTransitionPending = false;
  async function nextScene({ automatic = false, expectedScene, expectedRecord } = {}) {
    const state = engine.state;
    if (chapterTransitionPending || !state.nextScene || !["end","clear","chapter-end"].includes(state.mode)) return;
    if (automatic && (!isContinuousEnding(state) || !automaticSceneCanRun() ||
        state.scene !== expectedScene || state.record !== expectedRecord)) return;
    if (replay && !unlocked.has(state.nextScene)) return;
    const boundary = { "fjalg332:ppgn4ri": 2, "fryi3j5:r7xnwci": 3 }[state.scene + ":" + state.nextScene];
    chapterTransitionPending = true;
    cleanup();
    const token = epoch;
    try {
      if (boundary && !replay && !workPreview) {
        const completed = await window.KarkinosChapterTitles?.show({ chapter: boundary, language });
        if (completed === false || token !== epoch) return;
      }
      // The previous stable checkpoint remains valid throughout the temporary card.
      engine.nextScene();
      window.KarkinosPuzzles?.reset?.(engine.scene.id);
      $("play-mode-select").value = engine.state.playMode;
      sceneInputGuardUntil = performance.now() + 500;
      enter();
    } finally { chapterTransitionPending = false; }
  }
  function buildSceneMenu(grid) {
    grid.replaceChildren();
    for (const id of KarkinosEngine.sceneIds) {
      const scene = D.scenes[id];
      if (!scene || (!workPreview && !unlocked.has(id))) continue;
      const b = document.createElement("button");
      b.dataset.scene = id;
      const strong = document.createElement("strong");
      strong.textContent = sceneTitle(scene);
      b.append(strong);
      b.addEventListener("click", () =>
        start(id, workPreview ? $("play-mode-select").value : engine.state.playMode, !workPreview));
      grid.append(b);
    }
  }
  function updateModeSummary() {
    $("mode-summary").textContent = modeDescription($("play-mode-select").value)
      + (workPreview ? tr(" EX1、EX2 仅支持解谜模式。", " EX1・EX2は謎解きモード専用です。") : "");
  }
  function showMenu(chooseMode) {
    chooseMode = workPreview && chooseMode;
    applyUiLanguage();
    $("title-screen").hidden = chooseMode;
    $("mode-panel").hidden = !chooseMode;
    $("preview-grid").hidden = !workPreview;
    $("preview-opening").hidden = !workPreview;
    if (workPreview) {
      buildSceneMenu($("preview-grid"));
    }
    updateModeSummary();
  }
  $("play-mode-select").addEventListener("change", updateModeSummary);
  $("new-game-mode-select").addEventListener("change", () => {
    if (workPreview) return;
    newGameMode = $("new-game-mode-select").value === "puzzle" ? "puzzle" : "story";
    try { localStorage.setItem(modePreferenceKey, newGameMode); } catch {}
    updateSettingsContext();
  });
  addEventListener("storage", event => {
    if (!workPreview && event.key === modePreferenceKey && ["story", "puzzle"].includes(event.newValue)) {
      newGameMode = event.newValue;
      updateSettingsContext();
    }
  });
  $("new-game").addEventListener("click", () => {
    if (workPreview || campaignStarting) return;
    if (checkpoint) {
      const mode = newGameMode === "story" ? tr("剧情模式", "ストーリーモード") : tr("解谜模式", "謎解きモード");
      $("new-game-confirm-text").textContent = tr(
        "将以" + mode + "开始并覆盖主线进度，保留已解锁章节。",
        mode + "で本編の進行状況を上書きします。解放済みチャプターは保持します。",
      );
      $("new-game-confirm").showModal();
      $("new-game-cancel").focus();
    } else startCampaign();
  });
  $("new-game-cancel").addEventListener("click", () => $("new-game-confirm").close());
  $("new-game-replace").addEventListener("click", () => {
    $("new-game-confirm").close();
    startCampaign();
  });
  $("new-game-confirm").addEventListener("close", () => {
    if (!campaignStarting && !$("title-screen").hidden) $("new-game").focus();
  });
  $("home-button").addEventListener("click", () => {
    if (workPreview) { goHome(); return; }
    buildSceneMenu($("chapter-grid"));
    $("chapter-resume").hidden = !replay || !checkpoint;
    $("chapter-dialog").showModal();
  });
  $("chapter-close").addEventListener("click", () => $("chapter-dialog").close());
  $("chapter-home").addEventListener("click", goHome);
  $("chapter-resume").addEventListener("click", resume);
  async function startCampaign(previewOpening = false) {
    if (campaignStarting || (workPreview && !previewOpening)) return;
    campaignStarting = true;
    const selectedMode = workPreview ? $("play-mode-select").value : newGameMode;
    $("new-game").disabled = true;
    $("preview-opening").disabled = true;
    cleanup();
    const token = epoch;
    try {
      // Every explicit new-game confirmation plays the PV, including with an old save.
      // Resume and chapter replay call their existing routes and never enter here.
      try { await window.KarkinosOpening?.play({ language, muted }); }
      catch {} // An unavailable or blocked video must not block the game.
      if (token === epoch) start(firstScene, selectedMode);
    } finally {
      campaignStarting = false;
      $("new-game").disabled = false;
      $("preview-opening").disabled = false;
    }
  }
  $("preview-opening").addEventListener("click", () => { if (workPreview) startCampaign(true); });
  $("end-next").addEventListener("click", nextScene);
  $("puzzle-launch").addEventListener("click", () => {
    if (engine.state.mode === "interaction") advance();
    else openPuzzle();
  });
  $("action-button").addEventListener("click", advance);
  $("puzzle-tools").addEventListener("click", () => openPuzzle(true));
  $("end-home").addEventListener("click", goHome);
  $("end-restart").addEventListener("click", () =>
    start(engine.scene.id, engine.state.playMode, replay),
  );
  $("info-close").addEventListener("click", advance);
  $("branch-yes").addEventListener("click", () => choose(true));
  $("branch-no").addEventListener("click", () => choose(false));
  $("memory-object").addEventListener("click", () => {
    if (engine.state.mode !== "memory") return;
    memorySound.stop();
    engine.collect();
    enter();
  });
  $("reopen-box").addEventListener("click", () => {
    engine.mark("puzzle");
    openPuzzle();
  });
  $("answer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    submitAnswer($("answer-input").value);
  });
  $("poster-close").addEventListener("click", () => {
    $("wrong-poster").hidden = true;
    engine.answerReturn();
    enter();
    $("answer-input").focus();
  });
  $("show-password").addEventListener(
    "click",
    () => ($("password-reveal").hidden = false),
  );
  $("replay-button").addEventListener("click", playVoice);
  addEventListener("karkinoslanguagechange", event => {
    language = event.detail;
    applyUiLanguage();
    if (engine.scene) paint();
    updateModeSummary();
    if (workPreview) buildSceneMenu($("preview-grid"));
    if ($("chapter-dialog").open) buildSceneMenu($("chapter-grid"));
  });
  $("language-button").addEventListener("click", () => {
    window.KarkinosLanguage.select(language === "zh" ? "ja" : "zh", {persist:!workPreview});
    saveCheckpoint();
  });
  $("sound-button").addEventListener("click", () => {
    muted = !muted;
    $("scene-video").muted = muted;
    $("appear-video").muted = muted;
    window.KarkinosPuzzles?.setMuted?.(muted);
    $("sound-button").textContent = tr("声音 " + (muted ? "关" : "开"), "音声 " + (muted ? "OFF" : "ON"));
    $("sound-button").setAttribute("aria-pressed", String(muted));
    if (muted) {
      [voice, se, bgm, memorySound].forEach((a) => a.stop());
    } else if (engine.scene) {
      if (currentBgm)
        bgm.play(engine.scene.audio[currentBgm], 0, null, true, 0.1);
      if (engine.state.mode === "memory")
        memorySound.play(engine.scene.audio.SE_memory, 0, null, true, 0.35);
      if (["dialogue", "branch", "memory", "interaction", "action", "failure"].includes(engine.state.mode))
        playVoice();
    }
  });
  function openLog() {
    if (document.querySelector("dialog[open]") || $("game").hidden) return;
    reader.stop();
    voice.stop();
    logVoice.stop();
    const list = $("log-list"), tools = document.createElement("div");
    tools.id = "log-tools";
    tools.innerHTML = '<label id="log-filter-label"><span></span><select id="log-chapter-filter"></select></label><label class="log-search-label"><span></span><input id="log-search" type="search" autocomplete="off"></label><p id="log-result-count" aria-live="polite"></p><p id="log-playback-status" class="log-sr-only" role="status" aria-live="polite"></p>';
    $("log-tools")?.remove();
    list.before(tools);
    const filter = $("log-chapter-filter"), search = $("log-search");
    $("log-filter-label").firstElementChild.textContent = tr("章节", "チャプター");
    tools.querySelector(".log-search-label span").textContent = tr("搜索", "検索");
    filter.setAttribute("aria-label", tr("筛选已读章节", "既読チャプターを選択"));
    search.placeholder = tr("姓名或对白", "名前・本文");
    search.setAttribute("aria-label", tr("搜索姓名或对白", "名前・本文を検索"));
    list.setAttribute("role", "region");
    list.tabIndex = 0;
    list.setAttribute("aria-label", tr("实际已读的对白", "既読の会話"));
    list.lang = language === "ja" ? "ja" : "zh-CN";
    // Use only the actual journal-backed history. Never expand scene rows or branches.
    const entries = history.flatMap(h => {
      const sid = h.scene || engine.scene.id, r = engine.getRow(h.id, sid);
      if (!r) return [];
      const body = h.body
        ? language === "zh" ? (window.KarkinosZh?.messages[h.body] ?? h.body) : h.body
        : txt(r, sid);
      const displayBody = offlineDirections(r.id) || body;
      if (!displayBody.trim()) return [];
      return [{ sid, row: r, speaker: name(r), body: displayBody }];
    });
    const scenes = [...new Set(entries.map(entry => entry.sid))];
    filter.add(new Option(tr("全部已读", "すべての既読"), ""));
    for (const sid of scenes) filter.add(new Option(sceneTitle(D.scenes[sid]), sid));
    $("log-filter-label").hidden = scenes.length < 2;
    let browsing = false;
    const browse = () => { browsing = true; };
    list.onpointerdown = list.onkeydown = list.onwheel = list.ontouchstart = browse;
    tools.onpointerdown = tools.onkeydown = browse;
    function draw() {
      logVoice.stop();
      list.replaceChildren();
      const query = search.value.trim().toLocaleLowerCase();
      let lastScene = "", count = 0;
      for (const entry of entries) {
        const { sid, row: r, speaker, body } = entry;
        if (filter.value && sid !== filter.value) continue;
        if (query && !(speaker + " " + body).toLocaleLowerCase().includes(query)) continue;
        if (lastScene !== sid) {
          const heading = document.createElement("h3");
          heading.className = "log-chapter-heading";
          heading.textContent = sceneTitle(D.scenes[sid]);
          list.append(heading); lastScene = sid;
        }
        const article = document.createElement("article");
        article.dataset.record = r.id; article.dataset.scene = sid;
        if (sid === engine.scene.id && r.id === engine.row.id) {
          article.dataset.current = "true"; article.setAttribute("aria-current", "true");
        }
        const block = document.createElement(r.voice ? "button" : "div");
        block.className = "log-entry-body " + (r.voice ? "log-entry-play" : "log-entry-static");
        const strong = document.createElement("strong"), text = document.createElement("span");
        strong.textContent = speaker; text.className = "log-entry-text"; text.textContent = body;
        block.append(strong, text);
        if (r.voice) {
          block.type = "button"; block.disabled = muted;
          block.setAttribute("aria-pressed", "false");
          block.setAttribute("aria-label", tr("从头重听", "音声を最初から再生：") + speaker + (language === "zh" ? "的台词：" : "：") + body);
          block.title = muted ? tr("声音已关闭", "消音中") : tr("从头重听", "最初から再生");
          block.addEventListener("click", () => {
            if (muted || window.getSelection?.()?.toString()) return;
            // As in SGXR, clicking even the same entry starts its voice from the beginning.
            logVoice.play(r.voice.track, r.voice.start, r.voice.end);
            logVoiceRow = article; article.classList.add("playing");
            block.setAttribute("aria-pressed", "true");
            $("log-playback-status").textContent = tr("正在重听：", "再生中：") + speaker;
          });
        }
        article.append(block); list.append(article); count++;
      }
      $("log-result-count").textContent = count + tr(" 条", "件");
      $("log-result-count").hidden = !query && !filter.value;
      if (!count) {
        const empty = document.createElement("p"); empty.className = "log-empty";
        empty.textContent = entries.length ? tr("没有匹配的记录。", "一致する履歴はありません。")
          : tr("暂无记录。", "履歴はありません。");
        list.append(empty);
      }
      list.scrollTop = 0;
    }
    filter.addEventListener("change", () => { browse(); draw(); });
    search.addEventListener("input", () => { browse(); draw(); });
    draw(); updateLogMute();
    $("log-modal").showModal();
    const alignLatest = () => {
      if (!browsing && $("log-modal").open && $("log-tools") === tools) list.scrollTop = list.scrollHeight;
    };
    alignLatest(); requestAnimationFrame(alignLatest);
    document.fonts?.ready?.then(alignLatest);
  }
  function updateLogMute() {
    if (!$("log-tools")) return;
    for (const block of $("log-list").querySelectorAll(".log-entry-play")) {
      block.disabled = muted;
      block.title = muted ? tr("声音已关闭", "消音中") : tr("从头重听", "最初から再生");
    }
  }
  $("sound-button").addEventListener("click", () => { logVoice.stop(); updateLogMute(); });
  $("log-modal").addEventListener("close", () => logVoice.stop());
  window.addEventListener("blur", () => logVoice.stop());
  $("log-button").addEventListener("click", openLog);
  $("log-close").addEventListener("click", () => $("log-modal").close());
  $("image-close").addEventListener("click", () => $("image-modal").close());
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      logVoice.stop();
      [voice, se, bgm, memorySound].forEach((a) => a.audio.pause());
      $("appear-video").pause();
    } else if (engine.scene && !muted) {
      if (currentBgm)
        bgm.play(engine.scene.audio[currentBgm], 0, null, true, 0.1);
    }
  });
  $("resume-button").addEventListener("click", resume);
  loadCheckpoint();
  showMenu(workPreview);
  window.KarkinosDemo = {
    get state() {
      return {
        ...engine.state,
        language,
        muted,
        readingMode: reader.mode,
        pendingTimers: timers.size,
        autoScenePending: !!automaticSceneKey || chapterTransitionPending,
        audioError,
        voice: {
          src: voice.audio.getAttribute("src"),
          time: voice.audio.currentTime,
          paused: voice.audio.paused,
        },
        history: history.map((h) => h.id),
      };
    },
    start,
    advance,
    choose,
    submitAnswer,
    nextScene,
    resume,
  };
})();
