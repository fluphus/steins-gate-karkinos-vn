(() => {
  const jump = document.querySelector("#jump");
  const toggle = document.querySelector("#language");
  const sections = Array.from(document.querySelectorAll(".section"));
  const aliases = {
    "trial": "1-1", "1-4": "1-3", "2-4": "2-3", "3-2": "3-1",
    "3-1ex1": "3-1", "3-1ex2": "3-1", "3-4": "3-3",
  };
  function navigate() {
    const hash = location.hash.slice(1);
    const id = aliases[hash] || hash || "map";
    const selected = sections.find(section => section.id === id) || sections[0];
    for (const section of sections) {
      section.hidden = section !== selected;
      if (section.hidden) {
        for (const media of section.querySelectorAll("audio,video")) media.pause();
      }
    }
    jump.value = selected.id;
    window.scrollTo(0, 0);
  }
  jump.addEventListener("change", () => { location.hash = jump.value; });
  function applyLanguage(lang) {
    const japanese = lang === "ja";
    document.body.classList.toggle("japanese", japanese);
    document.documentElement.lang = japanese ? "ja" : "zh-CN";
    document.title = japanese ? "Karkinos · 地図とヒント" : "Karkinos · 地图与提示";
    for (const option of jump.options) option.textContent = option.dataset[lang];
    for (const image of document.querySelectorAll("img[data-ja]")) image.alt = image.dataset[lang];
    toggle.textContent = japanese ? "简体中文" : "日本語";
    toggle.lang = japanese ? "zh-CN" : "ja";
    toggle.setAttribute("aria-pressed", String(japanese));
    toggle.setAttribute("aria-label", japanese ? "切换为简体中文" : "日本語に切り替える");
  }
  addEventListener("karkinoslanguagechange", event => applyLanguage(event.detail));
  toggle.addEventListener("click", () => {
    // A link's language carries the current game preference across file:// pages.
    // After a manual choice, reloads should use that newly saved preference.
    const url = new URL(location.href);
    url.searchParams.delete("lang");
    try { history.replaceState(null, "", url.href); } catch {}
    window.KarkinosLanguage.select(window.KarkinosLanguage.current === "ja" ? "zh" : "ja", {persist:!window.KarkinosLanguage.preview});
  });
  const requested = new URLSearchParams(location.search).get("lang");
  if (requested === "ja" || requested === "zh") window.KarkinosLanguage.select(requested, {persist:false});
  applyLanguage(window.KarkinosLanguage.current);
  addEventListener("hashchange", navigate);
  navigate();
})();
