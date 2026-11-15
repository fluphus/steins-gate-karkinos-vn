/* Reading controls shared by the game and scene preview. */
(() => {
  "use strict";
  function create({getState, getRow, getLanguage, advance, openLog, voicePlaying, transitionBlocked = () => false}) {
    const byId = id => document.getElementById(id);
    const game = byId("game"), auto = byId("auto-button"), skip = byId("skip-button");
    const more = byId("reader-more-toggle"), tools = byId("reader-more-tools");
    const closeSettings = byId("reader-settings-close");
    const interactive = "button,a,input,select,textarea,summary,details,dialog,video,canvas,[role=button],[contenteditable=true],#answer-form,#branches,#info-panel,#end-panel,#box-host,#puzzle-host,#wrong-poster,#original-trial-intro";
    let playback = "", timer = null, held = false, gesture = null, dragging = false, wheel = null, moreOpen = false;
    const canRead = () => !game.hidden && !document.hidden && !document.querySelector("dialog[open]") &&
      getState().mode === "dialogue" && !getState().directive.kind;
    const readable = () => !moreOpen && !transitionBlocked() && canRead();
    function updateButtons() {
      for (const [button, mode, label] of [[auto,"auto",getLanguage()==="ja"?"オート":"自动"],[skip,"skip",getLanguage()==="ja"?"早送り":"快进"]]) {
        button.setAttribute("aria-pressed", String(playback === mode));
        button.textContent = label;
        button.disabled = !canRead();
      }
    }
    function stop() {
      clearTimeout(timer);
      playback = "";
      held = false;
      updateButtons();
    }
    function update() {
      clearTimeout(timer);
      if (!readable()) { stop(); return; }
      updateButtons();
      if (!playback) return;
      const state = getState(), cue = getRow().voice;
      const textDelay = Math.max(1800, byId("body").textContent.trim().length * 65);
      const delay = playback === "skip" ? 155 : Math.max(textDelay, !state.muted && cue ? (cue.end - cue.start) * 1000 + 400 : 0);
      function tick() {
        if (!readable() || !playback || getState().record !== state.record) { stop(); return; }
        if (playback === "auto" && voicePlaying()) { timer = setTimeout(tick, 160); return; }
        advance();
      }
      timer = setTimeout(tick, delay);
    }
    function toggle(mode) {
      if (playback === mode) { stop(); return; }
      if (!readable()) return;
      playback = mode; held = false; update();
    }
    function setTools(open) {
      moreOpen = !!open;
      more.setAttribute("aria-expanded", String(moreOpen));
      tools.hidden = !moreOpen;
      tools.classList.toggle("is-open", moreOpen);
      if (moreOpen) stop();
    }
    function closeAndFocus() {
      setTools(false);
      more.focus({preventScroll:true});
    }
    more.addEventListener("click", () => {
      setTools(!moreOpen);
      if (moreOpen) closeSettings.focus({preventScroll:true});
    });
    closeSettings.addEventListener("click", closeAndFocus);
    const inTools = target => more.contains(target) || tools.contains(target);
    // Consume the pointer sequence outside the popover, including a tap on a puzzle control.
    for (const type of ["pointerdown", "pointerup", "click"]) {
      document.addEventListener(type, e => {
        if (!moreOpen || inTools(e.target)) return;
        e.stopImmediatePropagation();
        e.preventDefault();
        if (type === "click") closeAndFocus();
      }, true);
    }
    // Close before the original navigation handlers open their dialog or page.
    tools.addEventListener("click", e => {
      if (e.target.closest("#home-button,#log-button,a")) setTools(false);
    }, true);
    for (const [button, mode] of [[auto,"auto"],[skip,"skip"]])
      button.addEventListener("click", () => { closeAndFocus(); toggle(mode); });
    function manual() { stop(); advance(); }
    document.addEventListener("pointerdown", () => { if (held) stop(); }, true);
    game.addEventListener("pointerdown", e => {
      if (!e.isPrimary) { dragging = true; return; }
      dragging = e.button !== 0;
      gesture = {x:e.clientX, y:e.clientY, id:e.pointerId, record:getState().record, origin:e.target.closest(interactive)};
    }, true);
    const trackMovement = e => {
      if (gesture && gesture.id === e.pointerId && Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)>10) dragging = true;
    };
    game.addEventListener("pointermove", trackMovement, true);
    game.addEventListener("pointerup", trackMovement, true);
    game.addEventListener("pointercancel", () => { dragging = true; }, true);
    game.addEventListener("click", e => {
      if (transitionBlocked()) { e.preventDefault(); return; }
      const target = e.target.closest(interactive);
      if (target && target !== byId("dialogue")) return;
      if (e.detail && (dragging || (gesture && (gesture.record !== getState().record || gesture.origin !== target)))) return;
      if (document.getSelection()?.toString() || document.querySelector("dialog[open]")) return;
      if (target === byId("dialogue") && !target.disabled) manual();
      else if (!target && readable()) manual();
    });
    document.addEventListener("keydown", e => {
      if (moreOpen) {
        if (e.key === "Escape") {
          e.preventDefault(); e.stopImmediatePropagation();
          closeAndFocus();
        } else if (e.key === "Tab") {
          const controls = [more, ...tools.querySelectorAll("button:not([disabled]),a[href],select:not([disabled]),input:not([disabled])")]
            .filter(control => control.getBoundingClientRect().height > 0);
          const index = controls.indexOf(document.activeElement);
          if (e.shiftKey && index <= 0) {
            e.preventDefault(); controls.at(-1).focus();
          } else if (!e.shiftKey && (index < 0 || index === controls.length - 1)) {
            e.preventDefault(); controls[0].focus();
          }
        }
        return;
      }
      if (held && e.ctrlKey && e.key !== "Control") { stop(); return; }
      if (game.hidden || e.defaultPrevented || document.querySelector("dialog[open]") || e.metaKey || e.altKey || e.isComposing ||
        e.target.closest("input,textarea,select,[contenteditable=true]")) return;
      if (e.key === "Control" && !e.repeat && readable()) {
        playback = "skip"; held = true; update(); return;
      }
      if (e.ctrlKey || e.repeat || e.target.closest("#puzzle-host,#box-host")) return;
      if (e.code === "KeyL" && readable()) { e.preventDefault(); openLog(); return; }
      const activates = ["Space","Enter"].includes(e.code);
      if (activates && e.target.closest("button,a,summary,[role=button]")) return;
      if ((activates || e.key === "ArrowRight") && readable()) { e.preventDefault(); manual(); }
    });
    document.addEventListener("keyup", e => { if (e.key === "Control" && held) stop(); });
    document.addEventListener("wheel", e => {
      if (moreOpen) { if (!inTools(e.target) && !e.ctrlKey) e.preventDefault(); return; }
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY) || !e.deltaY) return;
      const sign = Math.sign(e.deltaY), now = performance.now();
      if (!wheel || sign !== wheel.sign || now-wheel.time>180) {
        const target = e.target.closest(interactive);
        const owns = game.contains(e.target) && (!target || target === byId("dialogue")) && readable();
        wheel={sign,time:now,total:0,fired:false,owns};
      }
      wheel.time=now;
      if (!wheel.owns) return;
      e.preventDefault();
      wheel.total+=Math.abs(e.deltaY)*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);
      if (wheel.fired || wheel.total<40 || !readable()) return;
      wheel.fired=true;
      if (sign<0) openLog(); else manual();
    }, {passive:false});
    for (const dialog of document.querySelectorAll("dialog"))
      new MutationObserver(() => { if (dialog.open) stop(); else updateButtons(); }).observe(dialog,{attributes:true,attributeFilter:["open"]});
    window.addEventListener("blur", stop);
    document.addEventListener("visibilitychange", () => { if(document.hidden) stop(); else updateButtons(); });
    return {update, stop, closeTools: () => setTools(false), get moreOpen(){return moreOpen;},
      get fast(){return playback==="skip";}, get mode(){return playback;}};
  }
  window.KarkinosReader = {create};
})();
