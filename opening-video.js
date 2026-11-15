/* Local-video overlay adapted from SteinsGate-XR-Offline/local-video.js:
 * one active promise, scoped skip handlers, stalled-playback recovery and release.
 * The player invokes this for each confirmed new game or a manual preview. */
(() => {
  'use strict';
  let current = null;
  const source = new URL('assets/media/karkinos-opening-1080p.mp4', document.currentScript.src).href;
  function play({ language = 'zh', muted = false } = {}) {
    if (current) return current.promise;
    const ja = language === 'ja';
    const dialog = document.createElement('dialog');
    dialog.id = 'opening-dialog';
    dialog.lang = ja ? 'ja' : 'zh-CN';
    dialog.setAttribute('aria-label', ja ? 'オープニング' : '开场影片');
    dialog.setAttribute('aria-describedby', 'opening-skip-hint');
    dialog.innerHTML = '<video id="opening-video" playsinline preload="metadata"></video><p id="opening-skip-hint"></p><button id="opening-skip" type="button"></button>';
    const video = dialog.querySelector('video'), skip = dialog.querySelector('#opening-skip');
    const touch = !matchMedia('(hover: hover) and (pointer: fine)').matches;
    dialog.querySelector('#opening-skip-hint').textContent = ja
      ? (touch ? '画面をタップしてスキップ' : 'どこでもクリックでスキップ')
      : (touch ? '轻触任意处跳过' : '点击任意处跳过');
    video.setAttribute('aria-label', ja ? '不可侵領域のカルキノス 公式PV' : '不可侵领域的 Karkinos 官方宣传片');
    // Keep an accessible action for screen readers without displaying a button.
    skip.textContent = ja ? 'オープニングをスキップ' : '跳过开场影片';
    video.muted = !!muted;
    let resolve, finished = false, timer = 0, lastTime = -1, stalledSince = performance.now();
    const held = new Set();
    const promise = new Promise(done => { resolve = done; });
    function releaseShield() {
      document.removeEventListener('keydown', key, true);
      document.removeEventListener('keyup', keyup, true);
    }
    function finish() {
      if (finished) return;
      finished = true;
      clearInterval(timer);
      video.removeEventListener('ended', finish);
      video.removeEventListener('error', finish);
      document.removeEventListener('visibilitychange', visibility);
      dialog.removeEventListener('cancel', cancel);
      dialog.removeEventListener('close', finish);
      video.pause(); video.removeAttribute('src'); video.load();
      if (dialog.open) dialog.close();
      dialog.remove();
      current = null;
      // The initiating key/click must never also advance the first dialogue.
      if (!held.size) releaseShield();
      resolve();
    }
    function key(event) {
      if (finished) {
        if (held.has(event.key)) { event.preventDefault(); event.stopImmediatePropagation(); }
        return;
      }
      if (['Escape', ' ', 'Enter', 'ArrowRight'].includes(event.key)) {
        event.preventDefault(); event.stopImmediatePropagation();
        held.add(event.key);
        if (!event.repeat) finish();
      } else if (event.key !== 'Tab') {
        event.preventDefault(); event.stopImmediatePropagation();
      }
    }
    function keyup(event) {
      if (held.has(event.key)) { held.delete(event.key); event.preventDefault(); event.stopImmediatePropagation(); }
      if (finished && !held.size) releaseShield();
    }
    function cancel(event) { event.preventDefault(); finish(); }
    function visibility() {
      stalledSince = performance.now();
      if (document.hidden) video.pause();
      else video.play().catch(finish);
    }
    // A native click covers mouse clicks, touch taps and accessible activation.
    // Finish only on click, so the pointer-up can never land on the game beneath.
    dialog.addEventListener('click', event => {
      event.preventDefault(); event.stopImmediatePropagation(); finish();
    });
    for (const name of ['pointerdown', 'pointerup', 'dblclick']) dialog.addEventListener(name, event => event.stopPropagation());
    dialog.addEventListener('cancel', cancel);
    dialog.addEventListener('close', finish);
    video.addEventListener('ended', finish);
    video.addEventListener('error', finish);
    document.addEventListener('keydown', key, true);
    document.addEventListener('keyup', keyup, true);
    document.addEventListener('visibilitychange', visibility);
    current = { promise, finish };
    document.body.append(dialog);
    try {
      dialog.showModal(); skip.focus(); video.src = source;
      timer = setInterval(() => {
        if (document.hidden) { stalledSince = performance.now(); return; }
        if (video.currentTime !== lastTime) { lastTime = video.currentTime; stalledSince = performance.now(); }
        else if (performance.now() - stalledSince > 12000) finish();
      }, 500);
      const playing = video.play();
      if (playing?.catch) playing.catch(finish);
    } catch { finish(); }
    return promise;
  }
  window.KarkinosOpening = Object.freeze({ play, get active() { return !!current; } });
})();
