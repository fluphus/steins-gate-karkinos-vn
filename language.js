/* Shared language selection. Question text and answers keep their original language. */
(() => {
  'use strict';
  const key = 'karkinos-offline-language-v1';
  const preview = (window.parent !== window && window.name === 'karkinos-work-preview') || new URLSearchParams(location.search).get('preview') === '1';
  const supported = value => value === 'zh' || value === 'ja';
  function readPreference() {
    try { const value = localStorage.getItem(key); return supported(value) ? value : null; } catch { return null; }
  }
  function legacyPreference() {
    for (const saveKey of ['karkinos-offline-full-checkpoint-v1', 'karkinos-offline-demo-checkpoint-v1']) {
      try { const save = JSON.parse(localStorage.getItem(saveKey)); if (save?.version === 1 && supported(save.language)) return save.language; } catch {}
    }
    return null;
  }
  function browserLanguage() {
    const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const value of preferred) {
      const language = String(value || '').toLowerCase().split(/[-_]/)[0];
      if (supported(language)) return language;
    }
    return 'zh';
  }
  let current = readPreference() || legacyPreference() || browserLanguage();
  function select(value, {persist = true} = {}) {
    if (!supported(value)) return current;
    current = value;
    if (persist) { try { localStorage.setItem(key, value); } catch {} }
    document.documentElement.lang = value === 'ja' ? 'ja' : 'zh-CN';
    dispatchEvent(new CustomEvent('karkinoslanguagechange', {detail: value}));
    return current;
  }
  function guideUrl(value, language = current) {
    const url = new URL(value, document.baseURI);
    url.searchParams.set('lang', language);
    if (preview) url.searchParams.set('preview', '1');
    return url.href;
  }
  addEventListener('storage', event => {
    if (event.key === key && supported(event.newValue)) select(event.newValue, {persist:false});
  });
  // Also covers links created by individual puzzle components after startup.
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href]');
    if (link && new URL(link.href, document.baseURI).pathname.endsWith('/field-guide/index.html'))
      link.href = guideUrl(link.href);
  }, true);
  document.documentElement.lang = current === 'ja' ? 'ja' : 'zh-CN';
  window.KarkinosLanguage = {key, preview, get current(){return current;}, select, guideUrl, browserLanguage};
})();
