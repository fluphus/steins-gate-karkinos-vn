(function (root) {
  "use strict";
  const flow =
    typeof module !== "undefined" && module.exports
      ? require("./full-flow.js")
      : root.KarkinosFlow;
  const stableModes = [
    "dialogue",
    "branch",
    "info",
    "answer",
    "correct",
    "memory",
    "interaction",
    "puzzle",
    "puzzle-success",
    "action",
    "end",
    "clear",
    "chapter-end",
    "guide",
    "box",
  ];
  function create(data) {
    let scene = null,
      row = null,
      mode = "home",
      playMode = "puzzle",
      visits = [],
      answered = false,
      memory = false,
      solved = false;
    let completed = [],
      inventory = {},
      eventLog = [],
      journal = [],
      returnInput = null;
    const branches = new Set([...flow.branch1, ...flow.branch3]);
    const spec = () => flow.scenes[scene?.id] || {};
    function getRow(id, sid = scene?.id) {
      const candidate = data.scenes[sid];
      if (!candidate) return null;
      const original = candidate.rows.find((r) => r.id === id);
      if (original) return original;
      if (id === `EX_${sid}`)
        return {
          id,
          name: "",
          body:
            sid === "bkucguk"
              ? "部首を組み合わせ、二つの手掛かりを探せ。"
              : "漢字2文字の記憶データⅥパスワードを入力せよ",
          bodyZh:
            sid === "bkucguk"
              ? "组合部首，找出两半线索。"
              : "输入两个汉字的记忆数据Ⅵ口令。",
          extraIntro: true,
          wipe_show_type: "info",
        };
      const texts = flow.bridgeText[id];
      if (!texts) return null;
      const owner = Object.entries(flow.scenes).find(
        ([key, s]) =>
          s.bridge === id ||
          Object.values(s.puzzles || {}).some((p) => p.story === id),
      );
      if (owner?.[0] !== sid) return null;
      return {
        id,
        storyBridge: true,
        name: "旁白",
        body: texts[0],
        bodyJa: texts[1],
        show_type: "",
        wipe_show_type: "",
      };
    }
    function rule() {
      const s = spec(),
        id = row?.id;
      if (!row) return {};
      if (s.input?.id === id) return { kind: "input", ...s.input };
      if (s.memory?.[id]) return { kind: "memory", target: s.memory[id] };
      if (s.puzzles?.[id]) return { kind: "puzzle", ...s.puzzles[id] };
      if (s.extra)
        return {
          kind: "puzzle",
          event: s.extra,
          end: true,
          delay: s.extra === "ex2" ? 3000 : 0,
        };
      if (s.actions?.[id]) return { kind: "action", ...s.actions[id] };
      if (s.timers?.[id])
        return {
          kind: "timer",
          target: s.timers[id][0],
          delay: s.timers[id][1],
        };
      if (s.credits === id) return { kind: "credits" };
      return {};
    }
    const nextSceneId = () =>
      playMode === "story" && spec().storyNext
        ? spec().storyNext
        : spec().next || null;
    function snapshot() {
      const directive = rule();
      return {
        scene: scene?.id ?? null,
        record: row?.id ?? null,
        mode,
        playMode,
        visits: [...visits],
        answered,
        memory,
        solved,
        completed: [...completed],
        inventory: { ...inventory },
        eventLog: eventLog.map((x) => ({ ...x })),
        journal: journal.map((x) => ({ ...x })),
        returnInput,
        directive: playMode === "story" && mode === "dialogue" &&
          directive.kind === "puzzle" && directive.event !== "ending-switch"
          ? {} : directive,
        nextScene: nextSceneId(),
      };
    }
    function classify() {
      const s = spec(),
        r = rule();
      if (branches.has(row.id)) mode = "branch";
      else if (s.end === row.id) mode = s.clear ? "clear" : "end";
      else if (r.kind === "input") mode = "answer";
      else if (r.kind === "memory") mode = "memory";
      else if (r.kind === "puzzle")
        mode = playMode === "story" && r.event !== "ending-switch"
          ? "dialogue" : "interaction";
      else if (r.kind === "action") mode = "action";
      else mode = row.wipe_show_type === "info" ? "info" : "dialogue";
    }
    function storyRecord(id) {
      if (playMode !== "story" || spec().extra) return id;
      const s = spec(), original = getRow(id);
      // Story entries bypass the password/marker instructions preceding them.
      if (s.storyStart && scene.rows.indexOf(original) >= 0 &&
          scene.rows.indexOf(original) < scene.rows.findIndex(r => r.id === s.storyStart))
        return s.storyStart;
      if (s.input?.id === id && s.bridge) return s.bridge;
      const puzzle = s.puzzles?.[id];
      // Keep the spoken howling setup as ordinary dialogue. Instruction-only
      // puzzle rows lead directly to the existing, user-paced story narration.
      if (puzzle?.story && !original?.name) return puzzle.story;
      return ({ AR1_3_81: "AR1_3_82", AR1_3_86: "AR1_3_87",
        AR3_4_01: "AR3_4_02" })[id] || id;
    }
    function set(id, m) {
      let loops = 0;
      while (spec().skip?.[id]) {
        visits.push(id);
        journal.push({ scene: scene.id, id });
        id = spec().skip[id];
        if (++loops > 12) throw Error("Cyclic source transition");
      }
      id = storyRecord(id);
      row = getRow(id);
      if (!row) throw Error("Missing record " + scene?.id + ":" + id);
      visits.push(id);
      journal.push({ scene: scene.id, id });
      classify();
      if (m) mode = m;
      if (["end", "clear"].includes(mode) && !completed.includes(scene.id))
        completed.push(scene.id);
      return snapshot();
    }
    function start(sid, selectedMode = "puzzle", continuing = false) {
      scene = data.scenes[sid];
      if (!scene) throw Error("Unknown scene " + sid);
      if (!continuing) {
        completed = [];
        inventory = {};
        eventLog = [];
        journal = [];
      }
      visits = [];
      answered = false;
      memory = false;
      solved = false;
      returnInput = null;
      playMode = selectedMode === "story" ? "story" : "puzzle";
      if (spec().extra) playMode = "puzzle";
      return set(
        spec().extra
          ? `EX_${sid}`
          : playMode === "story" && spec().storyStart
            ? spec().storyStart
            : scene.rows[0]?.id,
      );
    }
    function finish() {
      if (!completed.includes(scene.id)) completed.push(scene.id);
      mode = spec().clear ? "clear" : "end";
      return snapshot();
    }
    function ordinary() {
      const i = scene.rows.indexOf(row);
      return i >= 0 && i + 1 < scene.rows.length
        ? set(scene.rows[i + 1].id)
        : finish();
    }
    function advance() {
      if (
        !["dialogue", "info", "guide", "interaction", "action"].includes(mode)
      )
        return snapshot();
      const s = spec(),
        r = rule(),
        id = row.id;
      if (row.storyBridge) {
        const entry = Object.values(s.puzzles || {}).find(
          (p) => p.story === id,
        );
        if (entry?.target)
          return set(
            entry.target === "AR1_3_81"
              ? "AR1_3_82"
              : entry.target === "AR1_3_86"
                ? "AR1_3_87"
                : entry.target,
          );
        return finish();
      }
      if (playMode === "story" && s.storyEndAfter === id) return set(s.bridge);
      if (s.endAfter === id) return finish();
      if (r.kind === "puzzle") {
        if (playMode === "story" && r.event !== "ending-switch")
          return r.story ? set(r.story) : r.target ? set(r.target) : finish();
        mode = "puzzle";
        return snapshot();
      }
      if (r.kind === "action") return set(r.target);
      if (s.jump?.[id]) return set(s.jump[id]);
      return ordinary();
    }
    function choose(yes) {
      if (mode !== "branch") return snapshot();
      if (flow.branch1.includes(row.id))
        return set(
          yes
            ? "AR1_1_31"
            : row.id === "AR1_1_30_1"
              ? "AR1_1_30"
              : scene.rows[scene.rows.indexOf(row) + 1].id,
        );
      if (flow.branch3.includes(row.id)) {
        if (!yes && row.id === "AR3_3_15_EXbtn") return snapshot();
        eventLog.push({
          scene: scene.id,
          event: "delete-choice",
          yes,
          record: row.id,
        });
        return set(
          yes ? "AR3_3_17" : scene.rows[scene.rows.indexOf(row) + 1].id,
        );
      }
      return snapshot();
    }
    function question() {
      const n = spec().input?.question;
      return n ? scene.questions?.[`question_${n}`] || scene.question : null;
    }
    function answer(value) {
      if (mode !== "answer" || playMode === "story")
        return { state: snapshot(), ignored: true };
      const q = question();
      if (!q) throw Error("Missing source answer table");
      const ok = q.answer.correct.includes(value),
        warning = q.answer.warning.includes(value);
      returnInput = row.id;
      if (ok) {
        answered = true;
        inventory[`${scene.id}:answer`] = true;
        mode = "correct";
      } else set(spec().input.fail, "failure");
      return {
        state: snapshot(),
        correct: ok,
        warning,
        message: warning ? q.message.warning : "",
      };
    }
    function answerReturn() {
      if (!["failure", "poster"].includes(mode)) return snapshot();
      return set(returnInput || spec().input.id, "answer");
    }
    function answerContinue() {
      if (mode !== "correct") return snapshot();
      return set(spec().input.success);
    }
    function collect() {
      if (mode !== "memory") return snapshot();
      const target = rule().target;
      memory = true;
      inventory[`${scene.id}:memory`] = true;
      eventLog.push({ scene: scene.id, event: "memory", record: row.id });
      return set(target);
    }
    function puzzleComplete() {
      if (mode !== "puzzle" && mode !== "puzzle-success") return snapshot();
      const r = rule();
      if (r.kind !== "puzzle") return snapshot();
      solved = true;
      inventory[`${scene.id}:${r.event}`] = true;
      eventLog.push({ scene: scene.id, event: r.event, record: row.id });
      return r.target ? set(r.target) : finish();
    }
    function nextScene() {
      const target = nextSceneId();
      return target ? start(target, playMode, true) : snapshot();
    }
    function home() {
      scene = null;
      row = null;
      mode = "home";
      visits = [];
      return snapshot();
    }
    function restore(saved) {
      const candidate = data.scenes[saved.scene];
      if (!candidate || !stableModes.includes(saved.mode))
        throw Error("Invalid checkpoint");
      scene = candidate;
      playMode = saved.playMode === "story" ? "story" : "puzzle";
      const target = getRow(saved.record);
      if (!target) throw Error("Invalid checkpoint record");
      if (
        !Array.isArray(saved.visits) ||
        saved.visits.some((id) => !getRow(id))
      )
        throw Error("Invalid checkpoint history");
      row = target;
      mode = saved.mode === "box" ? "interaction" : saved.mode;
      visits = [...saved.visits];
      answered = !!saved.answered;
      memory = !!saved.memory;
      solved = !!saved.solved;
      completed = (saved.completed || []).filter((id) => data.scenes[id]);
      inventory = { ...(saved.inventory || {}) };
      eventLog = [...(saved.eventLog || [])];
      journal = (
        saved.journal || saved.visits.map((id) => ({ scene: scene.id, id }))
      ).filter((x) => data.scenes[x.scene]);
      returnInput = saved.returnInput || null;
      if (playMode === "story" && !["end", "clear", "chapter-end"].includes(mode)) {
        const destination = storyRecord(row.id);
        if (destination !== row.id) return set(destination);
        if (rule().kind === "puzzle" && rule().event !== "ending-switch") {
          if (mode === "puzzle-success" && rule().story) return set(rule().story);
          classify();
        }
      }
      return snapshot();
    }
    function mark(m) {
      mode = m;
      return snapshot();
    }
    function recordEvent(action) {
      if (action.type === "record" && getRow(action.recordId)) {
        journal.push({ scene: scene.id, id: action.recordId });
        eventLog.push({
          scene: scene.id,
          event: "feedback",
          record: action.recordId,
        });
      }
      if (action.type === "ex1-half") {
        inventory[`${scene.id}:left`] = !!action.left;
        inventory[`${scene.id}:right`] = !!action.right;
      }
    }
    return {
      start,
      restore,
      set,
      getRow,
      advance,
      choose,
      answer,
      answerReturn,
      answerContinue,
      collect,
      puzzleComplete,
      boxSolved: puzzleComplete,
      home,
      mark,
      finish,
      nextScene,
      question,
      recordEvent,
      get row() {
        return row;
      },
      get scene() {
        return scene;
      },
      get state() {
        return snapshot();
      },
      get spec() {
        return spec();
      },
      branches,
    };
  }
  const api = {
    create,
    sceneIds: [...flow.order, "bkucguk", "sad97sf", "b7f11f61526a7f98"],
    branches: new Set([...flow.branch1, ...flow.branch3]),
    storyBridges: flow.bridgeText,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.KarkinosEngine = api;
})(typeof window === "undefined" ? globalThis : window);
