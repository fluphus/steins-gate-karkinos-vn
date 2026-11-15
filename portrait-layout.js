/* One stable reader camera per viewport. The two Okabe export families use
 * fixed reference heads, never the current pose's bounding box or line length.
 * Reference: approved AR1_1_09/10 pair at 1280x800; source log-area line y=27/561.
 * Phone-screen, wipe, authored stage artwork and special back-view assets are
 * separate layers and are deliberately not resized or repositioned here. */
(() => {
  'use strict';
  const game = document.getElementById('game'), image = document.getElementById('character');
  const dialogue = document.getElementById('dialogue'), wrap = document.getElementById('dialogue-wrap');
  if (!game || !image || !dialogue || !wrap) return;
  const panelLine = 27 / 561;
  let row = null, scheduled = 0, last = null;
  const vars = ['--reader-camera-left','--reader-camera-top','--reader-camera-width','--reader-camera-height','--reader-camera-crop'];
  function profile(r) {
    if (!r || r.show_type === 'phone') return null;
    const n = /^okabe_(\d+)$/.exec(r.image || '');
    if (n) {
      const i = Number(n[1]);
      if (i === 66) return null; // Authored full back-view on an opaque white plate.
      if (i === 1) return { kind:'full', family:'outline', w:567, h:1652 };
      if ((i >= 2 && i <= 12) || i === 64) return { kind:'full', family:'light', w:339, h:1000 };
      if (i >= 67 && i <= 82) return { kind:'full', family:'dark', w:420, h:1000 };
      if ((i >= 13 && i <= 65) || (i >= 83 && i <= 90))
        return { kind:'half', family:(i >= 36 && i <= 61) || i >= 83 ? 'dark' : 'light', w:i >= 89 ? 508 : 562, h:i >= 89 ? 904 : 1000 };
    }
    if (/^hiyajou_\d+$/.test(r.image || '')) return { kind:'half', family:'hiyajou', w:400, h:712 };
    return null;
  }
  function clear() {
    image.removeAttribute('data-reader-camera');
    for (const name of vars) image.style.removeProperty(name);
    last = null;
  }
  function layout() {
    const p = profile(row), g = game.getBoundingClientRect();
    if (!p || game.hidden || !g.width || !g.height) { clear(); return; }
    const ds = getComputedStyle(dialogue), ws = getComputedStyle(wrap);
    const normalHeight = parseFloat(ds.minHeight) || 180;
    const bottom = parseFloat(ws.bottom) || 0;
    // Stable camera uses the normal panel height, not this line's text height.
    const dock = g.bottom - bottom - normalHeight * (1 - panelLine);
    const halfHeight = Math.max(1, Math.min(g.height * .84, g.width * .95 / .562, (dock - g.top - 16) / .815));
    let height, left, top, eye = null, headTop = null;
    if (p.kind === 'full') {
      const dark = p.family === 'dark';
      const eyeX = g.left + g.width / 2 + ((dark ? 231.5 : 247.75) - 281) * halfHeight / 1000;
      const eyeY = dock - (1 - (dark ? 330.5 : 328.65) / 1000) * halfHeight;
      let scale, sourceEyeX, sourceEyeY;
      if (dark) {
        // Dark-shirt heads: 235px half-portrait crown-to-chin / 129px full head.
        scale = halfHeight / 1000 * 235 / 129;
        sourceEyeX = 164; sourceEyeY = 134.5;
      } else if (p.family === 'outline') {
        scale = halfHeight * 1.7640625 / 1647;
        sourceEyeX = 567 / 2 + (116 - 339 / 2) * 1647 / 1000;
        sourceEyeY = 2 + 84 * 1647 / 1000;
      } else {
        scale = halfHeight / 1000 * 1.7640625;
        sourceEyeX = 116; sourceEyeY = 84;
      }
      height = p.h * scale; left = eyeX - sourceEyeX * scale; top = eyeY - sourceEyeY * scale;
      eye = [eyeX, eyeY]; headTop = top + (dark ? 54 : p.family === 'outline' ? 2 : 3) * scale;
    } else {
      height = p.family === 'hiyajou'
        ? Math.min(g.height * (g.width <= 650 ? .70 : .78), g.width * .95 * p.h / p.w)
        : halfHeight;
      const center = p.family === 'hiyajou' ? (g.width <= 650 ? .60 : .69) : .5;
      left = g.left + g.width * center - height * p.w / p.h / 2;
      top = dock - height;
      if (p.family !== 'hiyajou') {
        const dark = p.family === 'dark';
        eye = [left + (dark ? 231.5 : 247.75) / 562 * (height * p.w / p.h), top + (dark ? 330.5 : 328.65) / 1000 * height];
        headTop = top + (dark ? 184 : 185) / 1000 * height;
      }
    }
    const width = height * p.w / p.h;
    const d = dialogue.getBoundingClientRect();
    const actualDock = !wrap.hidden && d.height ? d.top + d.height * panelLine : dock;
    // A tall panel covers more torso without moving or rescaling the head.
    const crop = p.kind === 'half' ? Math.max(0, top + height - actualDock) : 0;
    const values = [left - g.left, top - g.top, width, height, crop].map(v => v.toFixed(4) + 'px');
    for (let i=0;i<vars.length;i++) if (image.style.getPropertyValue(vars[i]) !== values[i]) image.style.setProperty(vars[i], values[i]);
    image.dataset.readerCamera = p.kind;
    last = { image:row.image, family:p.family, kind:p.kind, left, top, width, height, halfHeight, normalPanel:dock, actualPanel:actualDock, crop, referenceEye:eye, referenceHeadTop:headTop };
  }
  function schedule() {
    if (!scheduled) scheduled = requestAnimationFrame(() => { scheduled=0; layout(); });
  }
  new ResizeObserver(schedule).observe(game);
  new ResizeObserver(schedule).observe(dialogue);
  image.addEventListener('load', schedule);
  addEventListener('resize', schedule);
  document.fonts?.ready?.then(schedule);
  window.KarkinosPortraitLayout = Object.freeze({
    update(value) { row=value; layout(); },
    measure() { return last ? {...last} : null; },
    clear() { row=null; clear(); },
  });
})();
