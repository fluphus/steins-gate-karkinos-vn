/* Two chapter boundaries only. Shared Karkinos source motif, no story state or audio. */
(() => {
  'use strict';
  const base = new URL('.', document.currentScript.src);
  let active = null;
  function show({ chapter, language = 'zh' }) {
    if (![2, 3].includes(Number(chapter))) return Promise.resolve(true);
    if (active) return active.promise;
    const layer = document.createElement('dialog');
    layer.id = 'chapter-title-card'; layer.dataset.chapter = String(chapter);
    layer.lang = language === 'ja' ? 'ja' : 'zh-CN';
    layer.setAttribute('aria-labelledby', 'chapter-card-heading');
    layer.innerHTML = '<div class="chapter-card-field" aria-hidden="true"></div><svg class="chapter-card-frame" viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true"><path class="chapter-card-border" d="M22 112V22H414L438 40H1178V602L1158 622V698H714L690 680H22V112Z"/><path class="chapter-card-line" d="M42 130V42H294M906 60H1158V190M42 590V660H262M938 660H1138V560"/><path class="chapter-card-accent" d="M22 22H61L22 61ZM1178 698H1139L1178 659Z"/></svg><img class="chapter-card-logo" alt="" aria-hidden="true"><div class="chapter-card-motif" aria-hidden="true"><svg viewBox="0 0 600 600"><path d="M300 25 575 450 25 450Z M300 68 538 429 62 429Z M300 112 499 407 101 407Z"/><path d="M300 25V575M25 450 555 150M575 450 45 150"/></svg><img alt=""></div><h1 id="chapter-card-heading">第<span></span>章</h1><button id="chapter-card-skip" type="button"></button>';
    layer.querySelector('.chapter-card-logo').src = new URL('assets/title-logo.png', base).href;
    layer.querySelector('.chapter-card-motif img').src = new URL('box-assets/memory-data-1.png', base).href;
    layer.querySelector('h1 span').textContent = chapter;
    const skip = layer.querySelector('button');
    skip.textContent = language === 'ja' ? 'つづける' : '继续';
    skip.setAttribute('aria-label', language === 'ja' ? '章タイトルを閉じてつづける' : '跳过章节标题并继续');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let timer = 0, remaining = reduced.matches ? 1800 : 2300, started = null, finished = false, resolve;
    const held = new Set();
    const promise = new Promise(done => { resolve = done; });
    function releaseKeys() {
      document.removeEventListener('keydown', keydown, true);
      document.removeEventListener('keyup', keyup, true);
      window.removeEventListener('blur', blur);
      window.removeEventListener('focus', focus);
    }
    function finish(completed = true) {
      if (finished) return;
      finished = true; clearTimeout(timer);
      document.removeEventListener('visibilitychange', visibility);
      layer.removeEventListener('cancel', cancel);
      if (layer.open) layer.close(); layer.remove(); active = null;
      if (!held.size) releaseKeys();
      resolve(completed);
    }
    function arm() {
      if (finished || document.hidden || !document.hasFocus() || started !== null) return;
      started = performance.now();
      timer = setTimeout(() => finish(true), Math.max(0, remaining));
    }
    function pause() {
      clearTimeout(timer);
      if (started !== null) remaining = Math.max(0, remaining - (performance.now() - started));
      started = null;
    }
    function visibility() {
      if (document.hidden) pause();
      else arm();
    }
    function keydown(event) {
      if (finished) {
        if (held.has(event.key)) { event.preventDefault(); event.stopImmediatePropagation(); }
        return;
      }
      if (['Escape', 'Enter', ' ', 'ArrowRight'].includes(event.key)) {
        event.preventDefault(); event.stopImmediatePropagation(); held.add(event.key);
        if (!event.repeat) finish(true);
      } else if (event.key !== 'Tab') { event.preventDefault(); event.stopImmediatePropagation(); }
    }
    function keyup(event) {
      if (held.has(event.key)) { held.delete(event.key); event.preventDefault(); event.stopImmediatePropagation(); }
      if (finished && !held.size) releaseKeys();
    }
    function blur() { pause(); held.clear(); if (finished) releaseKeys(); }
    function focus() { arm(); }
    function cancel(event) { event.preventDefault(); finish(true); }
    layer.addEventListener('click', event => { event.preventDefault(); event.stopImmediatePropagation(); finish(true); });
    for (const event of ['pointerdown', 'pointerup', 'dblclick']) layer.addEventListener(event, e => e.stopPropagation());
    layer.addEventListener('cancel', cancel);
    document.addEventListener('keydown', keydown, true);
    document.addEventListener('keyup', keyup, true);
    window.addEventListener('blur', blur);
    window.addEventListener('focus', focus);
    document.addEventListener('visibilitychange', visibility);
    active = { promise, cancel: () => finish(false) };
    document.body.append(layer);
    try { layer.showModal(); skip.focus(); arm(); } catch { finish(true); }
    return promise;
  }
  window.KarkinosChapterTitles = Object.freeze({ show, cancel() { active?.cancel(); }, get active() { return !!active; } });
})();
