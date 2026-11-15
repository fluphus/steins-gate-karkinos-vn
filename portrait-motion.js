/* Karkinos characters are expression planes, not rigged 3D actors. The source
 * displays AR meshes in tracked space but uses fixed images for fix/fix_digital.
 * Add a restrained, optional 2D viewpoint cue only to ordinary AR dialogue.
 * No input cancellation, sensors, game state changes, or UI transforms. */
(function () {
  'use strict';
  const game = document.getElementById('game');
  const portrait = document.getElementById('character');
  if (!game || !portrait) return;
  const storageKey = 'karkinos-portrait-motion-v1';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  // Only an explicit opt-in enables motion; earlier automatic defaults saved no key.
  let enabled = false;
  try { enabled = localStorage.getItem(storageKey) === 'on'; } catch {}
  let active = false, frame = 0, last = 0, started = 0, heldUntil = 0;
  let x = 0, y = 0, lean = 0, targetX = 0, targetY = 0, targetLean = 0;
  let image = '';
  const button = document.getElementById('portrait-motion-toggle');
  const visible = id => { const el = document.getElementById(id); return el && !el.hidden; };
  function allowed() {
    return enabled && !reduced.matches && !document.hidden && !game.hidden &&
      !portrait.hidden && portrait.complete && portrait.naturalWidth > 0 &&
      game.dataset.showType === 'ar' && portrait.dataset.readerCamera !== 'half' && game.dataset.mode === 'dialogue' && !window.KarkinosDemo?.state?.directive?.kind &&
      !game.matches('.original-call,.original-mall,.original-search,.original-white,.original-blur,.original-credits,.original-memory-white,.original-memory-return,.original-memory-black,.fade-white,.fade-black') &&
      !['phone','wipe','scene-video','stage-art','info-panel','end-panel','box-host','puzzle-host','original-trial-intro'].some(visible) &&
      !document.querySelector('dialog[open],#reader-more-tools.is-open');
  }
  function syncButton() {
    if (!button) return;
    const ja = window.KarkinosDemo?.state?.language === 'ja';
    const on = enabled && !reduced.matches;
    button.textContent = ja ? '視点 ' + (on ? 'ON' : 'OFF') : '视差 ' + (on ? '开' : '关');
    button.setAttribute('aria-pressed', String(on));
    button.setAttribute('aria-label', ja ? '立ち絵の微小な視点移動' : '角色视差');
    button.title = reduced.matches ? (ja ? '動きを減らす設定に従っています' : '已按系统偏好减少动态效果') : (ja ? '視点の小さな動きを切り替え' : '切换轻微视角变化');
    button.disabled = reduced.matches;
  }
  function zero() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; last = 0; x = y = lean = targetX = targetY = targetLean = 0;
    portrait.removeAttribute('data-portrait-motion');
    for (const prop of ['--portrait-offset-x','--portrait-offset-y','--portrait-lean']) portrait.style.removeProperty(prop);
  }
  function wake() { if (active && !frame) frame = requestAnimationFrame(tick); }
  function refresh() {
    syncButton();
    const next = allowed(), nextImage = portrait.getAttribute('src');
    if (next !== active || image !== nextImage) {
      active = next; image = nextImage; zero(); started = performance.now();
      if (active) { portrait.dataset.portraitMotion = 'active'; wake(); }
    }
  }
  function tick(now) {
    frame = 0;
    // Eligibility is refreshed by DOM, image, visibility and preference events.
    // Do not snapshot the growing game history on every animation frame.
    if (!active) { zero(); return; }
    const delta = last ? Math.min(50, now - last) : 16.7;
    last = now;
    if (!fine.matches) {
      // Slow, unequal periods suggest a resting handheld viewpoint, not bobbing.
      const t = Math.max(0, now - started) / 1000;
      const strength = now < heldUntil ? 0 : Math.min(1, t / 2.5);
      targetX = strength * (1.25 * Math.sin(t * Math.PI * 2 / 18) + .25 * Math.sin(t * Math.PI * 2 / 29));
      targetY = strength * .45 * Math.sin(t * Math.PI * 2 / 23);
      targetLean = strength * .045 * Math.sin(t * Math.PI * 2 / 21);
    }
    const blend = 1 - Math.exp(-delta / 180);
    x += (targetX - x) * blend; y += (targetY - y) * blend; lean += (targetLean - lean) * blend;
    portrait.style.setProperty('--portrait-offset-x', x.toFixed(3) + 'px');
    portrait.style.setProperty('--portrait-offset-y', y.toFixed(3) + 'px');
    portrait.style.setProperty('--portrait-lean', lean.toFixed(4) + 'deg');
    if (!fine.matches || Math.abs(targetX - x) + Math.abs(targetY - y) + Math.abs(targetLean - lean) > .005) wake();
  }
  function rest() { targetX = targetY = targetLean = 0; wake(); }
  game.addEventListener('pointermove', event => {
    if (!active || !fine.matches || event.pointerType !== 'mouse') return;
    if (event.buttons || event.target.closest('button,a,input,select,summary,dialog,#dialogue-wrap,[role="button"]')) { rest(); return; }
    const rect = game.getBoundingClientRect();
    const px = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
    const py = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    targetX = px * 2.8; targetY = py * 1.1; targetLean = px * .12;
    wake();
  }, { passive: true });
  game.addEventListener('pointerleave', rest, { passive: true });
  game.addEventListener('pointerdown', () => { heldUntil = performance.now() + 1200; rest(); }, { passive: true });
  document.addEventListener('visibilitychange', refresh);
  portrait.addEventListener('load', refresh);
  reduced.addEventListener('change', refresh);
  fine.addEventListener('change', () => { rest(); refresh(); wake(); });
  button?.addEventListener('click', () => {
    if (reduced.matches) return;
    enabled = !enabled;
    if (!window.KarkinosLanguage?.preview) {
      try { localStorage.setItem(storageKey, enabled ? 'on' : 'off'); } catch {}
    }
    refresh();
  });
  new MutationObserver(refresh).observe(document.body, {
    subtree: true, attributes: true,
    attributeFilter: ['hidden','class','open','src','data-show-type','data-mode','data-scene','data-record','data-reader-camera']
  });
  refresh();
}());
