/* Karkinos fryi3j5 offline interaction. Source geometry: box-assets/provenance.json. */
(function () {
  "use strict";
  // prettier-ignore
  const MODEL = {"meshes":[{"name":"box2","vertices":[[-1.77784601,0.0,-1.80757722],[-1.08429226,0.0,-1.80757722],[-1.77784601,0.0,-2.50113097],[-1.08429226,0.0,-2.50113097]],"indices":[0,1,3,0,3,2]},{"name":"box3","vertices":[[-1.05731192,0.0,-1.80757722],[-0.36375818,0.0,-1.80757722],[-1.05731192,0.0,-2.50113097],[-0.36375818,0.0,-2.50113097]],"indices":[0,1,3,0,3,2]},{"name":"box5","vertices":[[0.37572131,0.0,-1.80757722],[1.06927505,0.0,-1.80757722],[0.37572131,0.0,-2.50113097],[1.06927505,0.0,-2.50113097]],"indices":[0,1,3,0,3,2]},{"name":"box6","vertices":[[1.09258732,0.0,-1.80757722],[1.78614107,0.0,-1.80757722],[1.09258732,0.0,-2.50113097],[1.78614107,0.0,-2.50113097]],"indices":[0,1,3,0,3,2]},{"name":"box8","vertices":[[-2.49554959,0.0,-1.09071121],[-1.80199584,0.0,-1.09071121],[-2.49554959,0.0,-1.78426495],[-1.80199584,0.0,-1.78426495]],"indices":[0,1,3,0,3,2]},{"name":"box10","vertices":[[-1.05731192,0.0,-1.09071121],[-0.36375818,0.0,-1.09071121],[-1.05731192,0.0,-1.78426495],[-0.36375818,0.0,-1.78426495]],"indices":[0,1,3,0,3,2]},{"name":"box11","vertices":[[-0.34114471,0.0,-1.09071121],[0.35240903,0.0,-1.09071121],[-0.34114471,0.0,-1.78426495],[0.35240903,0.0,-1.78426495]],"indices":[0,1,3,0,3,2]},{"name":"box12","vertices":[[0.37572131,0.0,-1.09071121],[1.06927505,0.0,-1.09071121],[0.37572131,0.0,-1.78426495],[1.06927505,0.0,-1.78426495]],"indices":[0,1,3,0,3,2]},{"name":"box14","vertices":[[1.80945334,0.0,-1.09071121],[2.50300708,0.0,-1.09071121],[1.80945334,0.0,-1.78426495],[2.50300708,0.0,-1.78426495]],"indices":[0,1,3,0,3,2]},{"name":"box15","vertices":[[-2.49554959,0.0,-0.37384525],[-1.80199584,0.0,-0.37384525],[-2.49554959,0.0,-1.067399],[-1.80199584,0.0,-1.067399]],"indices":[0,1,3,0,3,2]},{"name":"box16","vertices":[[-1.77784601,0.0,-0.37384525],[-1.08429226,0.0,-0.37384525],[-1.77784601,0.0,-1.067399],[-1.08429226,0.0,-1.067399]],"indices":[0,1,3,0,3,2]},{"name":"box18","vertices":[[-0.34114471,0.0,-0.37384525],[0.35240903,0.0,-0.37384525],[-0.34114471,0.0,-1.067399],[0.35240903,0.0,-1.067399]],"indices":[0,1,3,0,3,2]},{"name":"box20","vertices":[[1.09258732,0.0,-0.37384525],[1.78614107,0.0,-0.37384525],[1.09258732,0.0,-1.067399],[1.78614107,0.0,-1.067399]],"indices":[0,1,3,0,3,2]},{"name":"box21","vertices":[[1.80945334,0.0,-0.37384525],[2.50300708,0.0,-0.37384525],[1.80945334,0.0,-1.067399],[2.50300708,0.0,-1.067399]],"indices":[0,1,3,0,3,2]},{"name":"box23","vertices":[[-1.77784601,0.0,0.34302071],[-1.08429226,0.0,0.34302071],[-1.77784601,0.0,-0.35053304],[-1.08429226,0.0,-0.35053304]],"indices":[0,1,3,0,3,2]},{"name":"box24","vertices":[[-1.05731192,0.0,0.34302071],[-0.36375818,0.0,0.34302071],[-1.05731192,0.0,-0.35053304],[-0.36375818,0.0,-0.35053304]],"indices":[0,1,3,0,3,2]},{"name":"box25","vertices":[[-0.34114471,0.0,0.34302071],[0.35240903,0.0,0.34302071],[-0.34114471,0.0,-0.35053304],[0.35240903,0.0,-0.35053304]],"indices":[0,1,3,0,3,2]},{"name":"box26","vertices":[[0.37572131,0.0,0.34302071],[1.06927505,0.0,0.34302071],[0.37572131,0.0,-0.35053304],[1.06927505,0.0,-0.35053304]],"indices":[0,1,3,0,3,2]},{"name":"box27","vertices":[[1.09258732,0.0,0.34302071],[1.78614107,0.0,0.34302071],[1.09258732,0.0,-0.35053304],[1.78614107,0.0,-0.35053304]],"indices":[0,1,3,0,3,2]},{"name":"box29","vertices":[[-2.49554959,0.0,1.05988666],[-1.80199584,0.0,1.05988666],[-2.49554959,0.0,0.36633292],[-1.80199584,0.0,0.36633292]],"indices":[0,1,3,0,3,2]},{"name":"box30","vertices":[[-1.77784601,0.0,1.05988666],[-1.08429226,0.0,1.05988666],[-1.77784601,0.0,0.36633292],[-1.08429226,0.0,0.36633292]],"indices":[0,1,3,0,3,2]},{"name":"box32","vertices":[[-0.34114471,0.0,1.05988666],[0.35240903,0.0,1.05988666],[-0.34114471,0.0,0.36633292],[0.35240903,0.0,0.36633292]],"indices":[0,1,3,0,3,2]},{"name":"box34","vertices":[[1.09258732,0.0,1.05988666],[1.78614107,0.0,1.05988666],[1.09258732,0.0,0.36633292],[1.78614107,0.0,0.36633292]],"indices":[0,1,3,0,3,2]},{"name":"box35","vertices":[[1.80945334,0.0,1.05988666],[2.50300708,0.0,1.05988666],[1.80945334,0.0,0.36633292],[2.50300708,0.0,0.36633292]],"indices":[0,1,3,0,3,2]},{"name":"box36","vertices":[[-2.49554959,0.0,1.77675262],[-1.80199584,0.0,1.77675262],[-2.49554959,0.0,1.08319888],[-1.80199584,0.0,1.08319888]],"indices":[0,1,3,0,3,2]},{"name":"box38","vertices":[[-1.05731192,0.0,1.77675262],[-0.36375818,0.0,1.77675262],[-1.05731192,0.0,1.08319888],[-0.36375818,0.0,1.08319888]],"indices":[0,1,3,0,3,2]},{"name":"box39","vertices":[[-0.34114471,0.0,1.77675262],[0.35240903,0.0,1.77675262],[-0.34114471,0.0,1.08319888],[0.35240903,0.0,1.08319888]],"indices":[0,1,3,0,3,2]},{"name":"box40","vertices":[[0.37572131,0.0,1.77675262],[1.06927505,0.0,1.77675262],[0.37572131,0.0,1.08319888],[1.06927505,0.0,1.08319888]],"indices":[0,1,3,0,3,2]},{"name":"box42","vertices":[[1.80945334,0.0,1.77675262],[2.50300708,0.0,1.77675262],[1.80945334,0.0,1.08319888],[2.50300708,0.0,1.08319888]],"indices":[0,1,3,0,3,2]},{"name":"box44","vertices":[[-1.77784601,0.0,2.49388638],[-1.08429226,0.0,2.49388638],[-1.77784601,0.0,1.80033264],[-1.08429226,0.0,1.80033264]],"indices":[0,1,3,0,3,2]},{"name":"box45","vertices":[[-1.05731192,0.0,2.49388638],[-0.36375818,0.0,2.49388638],[-1.05731192,0.0,1.80033264],[-0.36375818,0.0,1.80033264]],"indices":[0,1,3,0,3,2]},{"name":"box47","vertices":[[0.37572131,0.0,2.49388638],[1.06927505,0.0,2.49388638],[0.37572131,0.0,1.80033264],[1.06927505,0.0,1.80033264]],"indices":[0,1,3,0,3,2]},{"name":"box48","vertices":[[1.09258732,0.0,2.49388638],[1.78614107,0.0,2.49388638],[1.09258732,0.0,1.80033264],[1.78614107,0.0,1.80033264]],"indices":[0,1,3,0,3,2]},{"name":"box1","vertices":[[-2.50034133,0.0,-1.80757722],[-1.80678758,0.0,-1.80757722],[-2.50034133,0.0,-2.50113097],[-1.80678758,0.0,-2.50113097]],"indices":[0,1,3,0,3,2]},{"name":"box49","vertices":[[1.81508264,0.0,2.49388638],[2.50863639,0.0,2.49388638],[1.81508264,0.0,1.80033264],[2.50863639,0.0,1.80033264]],"indices":[0,1,3,0,3,2]}],"frame":{"vertices":[[-2.87177763,-0.00105959,2.83295815],[2.81147739,-0.00105959,2.83295815],[-2.87177763,-0.00105959,-2.85029687],[2.81147739,-0.00105959,-2.85029687],[-2.54323996,-0.00105959,-2.52175921],[-2.54323996,-0.00105959,2.50442048],[2.48293972,-0.00105959,2.50442048],[2.48293972,-0.00105959,-2.52175921]],"uv":[[0.03065091371536255,0.9693490266799927],[0.9693490862846375,0.9693490266799927],[0.03065091371536255,0.03065091371536255],[0.9693490862846375,0.03065091371536255],[0.09563761949539185,0.09563755989074707],[0.09563761949539185,0.9043623208999634],[0.9043624401092529,0.9043623208999634],[0.9043624401092529,0.09563755989074707]],"indices":[5,4,2,5,2,0,6,5,0,6,0,1,7,6,1,7,1,3,4,7,3,4,3,2]}};
  const CORRECT = new Set([
    "box1",
    "box11",
    "box18",
    "box23",
    "box24",
    "box25",
    "box26",
    "box27",
    "box32",
    "box39",
    "box49",
  ]);
  const script = document.currentScript;
  const assetBase = new URL(
    "box-assets/",
    script ? script.src : document.baseURI,
  ).href;
  const byName = new Map(MODEL.meshes.map((m) => [m.name, m]));
  let active = null;

  function open(container, options = {}) {
    if (!(container instanceof Element))
      throw new TypeError("KarkinosBox.open requires a container Element");
    if (active) active();
    const language = options.data?.language || options.language;
    const japanese = language ? language === "ja" : document.documentElement.lang.toLowerCase().startsWith("ja");
    const t = (zh, ja) => japanese ? ja : zh;
    const previousFocus = document.activeElement;
    const selected = new Set();
    let yaw = -0.12,
      tilt = 0.5,
      showNumbers = false,
      hover = "",
      solved = false,
      disposed = false;
    let width = 0,
      height = 0,
      scale = 1,
      pointer = null,
      polygons = [];
    const root = document.createElement("section");
    root.className = "kb";
    root.lang = japanese ? "ja" : "zh-CN";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", t("第二章尾声：选择填涂格", "第2章エピローグ：塗りつぶした箇所を選択"));
    root.innerHTML = t(`<header class="kb-head"><div><h2>选择涂黑的格子</h2></div><button class="kb-close" type="button" aria-label="关闭盒子谜题">×</button></header>
      <div class="kb-scroll"><p class="kb-guide">对照册子选格；拖动可旋转盒子。</p>
      <div class="kb-stage"><canvas class="kb-canvas" tabindex="0" aria-label="原模型选择面板。拖动旋转，点击选择。可在下方展开坐标选择。"></canvas></div>
      <div class="kb-tools"><button type="button" data-action="view">俯视定位</button><button type="button" data-action="angle">斜视</button><label><input type="checkbox" data-action="numbers"> 显示格子编号</label><button type="button" data-action="clear">清空选择</button></div>
      <div class="kb-submit"><p class="kb-status" role="status" aria-live="polite">已选择 0 格</p><button class="kb-confirm" type="button">确定选择</button></div>
      <details class="kb-coordinates"><summary>坐标选择 / 键盘操作</summary><p>Tab 移动到格子，空格或 Enter 切换。行从上到下，列从左到右；空白位置不可选。</p><div class="kb-grid" role="group" aria-label="原模型七行七列坐标选择"></div></details>
      <details class="kb-help"><summary>提示（逐级展开，后级含答案）</summary><details><summary>从 P11 填字图开始</summary><p>先完成第二章 P11 的填字题；在片假名中涂黑三画字，并排除「サ・ン・カ・ク」。对照纸本和模型的朝向，选择对应位置。</p><img class="kb-crossword kb-marker" alt="原官网 P11 填字完成图"><p><a class="kb-guide-link" target="_blank" rel="noopener">查看第二章册子与提示</a></p></details><details><summary>提示 1：操作与判定</summary><p>选中后格子加深，再点可取消。必须与纸本填涂完全一致；错误提交会保留选择，可继续改正。选择顺序不影响结果。</p></details><details><summary>提示 2：各行应选数量</summary><p>切换到俯视，以原编号为准：从上到下分别是 1、1、1、5、1、1、1 格，共 11 格。</p></details><details><summary>提示 3：显示目标图示（含答案）</summary><p>对照深色位置选择后提交。</p><div class="kb-target kb-grid" aria-label="目标示范，深色为应选位置"></div></details><details><summary>册子第 11 页标记图</summary><img class="kb-marker" alt="原第二章纸本第11页标记图，中央为空白框"></details></details>
      </div>`, `<header class="kb-head"><div><h2>塗りつぶした箇所を選択せよ</h2></div><button class="kb-close" type="button" aria-label="マスの謎を閉じる">×</button></header>
      <div class="kb-scroll"><p class="kb-guide">冊子を見ながらマスを選んでください。ドラッグで箱を回せます。</p>
      <div class="kb-stage"><canvas class="kb-canvas" tabindex="0" aria-label="マスの選択パネル。ドラッグで回転、押すと選択。下の座標一覧からも選べます。"></canvas></div>
      <div class="kb-tools"><button type="button" data-action="view">真上から見る</button><button type="button" data-action="angle">斜めから見る</button><label><input type="checkbox" data-action="numbers"> マス番号を表示</label><button type="button" data-action="clear">選択をクリア</button></div>
      <div class="kb-submit"><p class="kb-status" role="status" aria-live="polite">選択中 0マス</p><button class="kb-confirm" type="button">決定</button></div>
      <details class="kb-coordinates"><summary>座標から選択 / キーボード操作</summary><p>Tabでマスへ移動し、SpaceまたはEnterで選択・解除します。行は上から下、列は左から右です。空白の位置は選べません。</p><div class="kb-grid" role="group" aria-label="7行7列の座標から選択"></div></details>
      <details class="kb-help"><summary>ヒント（順に開く・後半に答えあり）</summary><details><summary>P11のクロスワードから考える</summary><p>第2章の冊子P11のクロスワードを完成させ、カタカナのうち3画の文字を塗りつぶします。ただし「サ・ン・カ・ク」は除きます。冊子とマスの向きを合わせ、対応する位置を選んでください。</p><img class="kb-crossword kb-marker" alt="公式サイトのP11クロスワード完成図"><p><a class="kb-guide-link" target="_blank" rel="noopener">第2章の冊子・ヒントを見る</a></p></details><details><summary>ヒント1：操作と判定</summary><p>選んだマスは暗くなり、もう一度押すと解除できます。冊子の塗りつぶしと完全に一致させてください。不正解でも選択は残るので、続けて修正できます。選ぶ順番は問いません。</p></details><details><summary>ヒント2：各行で選ぶマスの数</summary><p>真上から見てマス番号を確認してください。上の行から順に1・1・1・5・1・1・1マス、合計11マスを選びます。</p></details><details><summary>ヒント3：正解の配置を見る</summary><p>暗い位置と同じマスを選び、決定してください。</p><div class="kb-target kb-grid" aria-label="正解の配置。暗いマスを選びます"></div></details><details><summary>冊子11ページのマーカー画像</summary><img class="kb-marker" alt="第2章冊子P11のマーカー画像。中央は空の枠"></details></details>
      </div>`);
    container.appendChild(root);
    const canvas = root.querySelector("canvas"),
      ctx = canvas.getContext("2d");
    const status = root.querySelector(".kb-status"),
      confirm = root.querySelector(".kb-confirm");
    const grid = root.querySelector(".kb-grid"),
      target = root.querySelector(".kb-target");
    const buttons = new Map();
    root.querySelector(".kb-crossword").src = new URL(
      "../field-guide/media/11p-hint_05.png",
      assetBase,
    ).href;
    root.querySelector(".kb-guide-link").href = new URL(
      "../field-guide/index.html#2-1",
      assetBase,
    ).href;
    const tailGuide = document.createElement("a");
    tailGuide.href = new URL("../field-guide/index.html#2-3", assetBase).href;
    tailGuide.target = "_blank";
    tailGuide.rel = "noopener";
    tailGuide.textContent = t(" / 查看尾声涂黑步骤", " / エピローグの塗りつぶし手順を見る");
    root.querySelector(".kb-guide-link").after(tailGuide);
    root.querySelector(".kb-help details:last-child .kb-marker").src =
      assetBase + "original-marker.png";
    for (let i = 1; i <= 49; i++) {
      const name = "box" + i,
        row = Math.floor((i - 1) / 7) + 1,
        col = ((i - 1) % 7) + 1;
      if (byName.has(name)) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = i;
        button.dataset.box = name;
        button.setAttribute(
          "aria-label",
          japanese ? `${row}行${col}列、マス${i}` : `第 ${row} 行第 ${col} 列，原格 ${i}`,
        );
        button.setAttribute("aria-pressed", "false");
        button.addEventListener("click", () => toggle(name));
        grid.appendChild(button);
        buttons.set(name, button);
      } else {
        const blank = document.createElement("span");
        blank.className = "kb-gap";
        blank.textContent = "·";
        blank.setAttribute(
          "aria-label",
          japanese ? `${row}行${col}列、マスなし` : `第 ${row} 行第 ${col} 列，原模型无格`,
        );
        grid.appendChild(blank);
      }
      const sample = document.createElement("span");
      sample.textContent = i;
      sample.className = CORRECT.has(name) ? "kb-target-on" : "kb-target-off";
      sample.setAttribute(
        "aria-label",
        japanese ? `マス${i}${CORRECT.has(name) ? "、選ぶ" : "、選ばない"}` : `原格 ${i}${CORRECT.has(name) ? "，应选" : "，不选"}`,
      );
      target.appendChild(sample);
    }
    function update(message) {
      for (const [name, button] of buttons)
        button.setAttribute("aria-pressed", String(selected.has(name)));
      status.classList.remove("kb-error");
      status.textContent =
        message ||
        (japanese ? `選択中 ${selected.size}マス${hover ? " · マス " + hover.slice(3) : ""}` : `已选择 ${selected.size} 格${hover ? " · 原格 " + hover.slice(3) : ""}`);
      draw();
    }
    function toggle(name) {
      if (solved || disposed || !byName.has(name)) return;
      selected.has(name) ? selected.delete(name) : selected.add(name);
      update();
    }
    function project(v) {
      const x = v[0] * Math.cos(yaw) - v[2] * Math.sin(yaw);
      const z = v[0] * Math.sin(yaw) + v[2] * Math.cos(yaw);
      return [
        width / 2 + x * scale,
        height / 2 + (z * Math.cos(tilt) - v[1] * Math.sin(tilt)) * scale,
      ];
    }
    function triangle(points, fill) {
      ctx.beginPath();
      ctx.moveTo(...points[0]);
      ctx.lineTo(...points[1]);
      ctx.lineTo(...points[2]);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    }
    function polygon(points, fill) {
      ctx.beginPath();
      ctx.moveTo(...points[0]);
      for (const p of points.slice(1)) ctx.lineTo(...p);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    }
    function texturedTriangle(p, uv, image) {
      const s = uv.map((v) => [v[0] * image.width, (1 - v[1]) * image.height]);
      const [x0, y0] = s[0],
        [x1, y1] = s[1],
        [x2, y2] = s[2];
      const det = x0 * (y1 - y2) + x1 * (y2 - y0) + x2 * (y0 - y1);
      if (Math.abs(det) < 0.001) return;
      const solve = (v) => [
        (v[0] * (y1 - y2) + v[1] * (y2 - y0) + v[2] * (y0 - y1)) / det,
        (v[0] * (x2 - x1) + v[1] * (x0 - x2) + v[2] * (x1 - x0)) / det,
        (v[0] * (x1 * y2 - x2 * y1) +
          v[1] * (x2 * y0 - x0 * y2) +
          v[2] * (x0 * y1 - x1 * y0)) /
          det,
      ];
      const a = solve(p.map((v) => v[0])),
        b = solve(p.map((v) => v[1]));
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(...p[0]);
      ctx.lineTo(...p[1]);
      ctx.lineTo(...p[2]);
      ctx.closePath();
      ctx.clip();
      ctx.transform(a[0], b[0], a[1], b[1], a[2], b[2]);
      ctx.drawImage(image, 0, 0);
      ctx.restore();
    }
    const frameImage = new Image();
    frameImage.onload = () => {
      if (!disposed) draw();
    };
    frameImage.src = assetBase + "frame.png";
    function draw() {
      if (disposed || !width || !ctx) return;
      ctx.clearRect(0, 0, width, height);
      const board = [
        [-2.9, 0, -2.9],
        [2.9, 0, -2.9],
        [2.9, 0, 2.9],
        [-2.9, 0, 2.9],
      ].map(project);
      ctx.save();
      ctx.shadowColor = "#0008";
      ctx.shadowBlur = 26;
      ctx.shadowOffsetY = 14;
      polygon(board, "#efeedf");
      ctx.restore();
      const f = MODEL.frame,
        fp = f.vertices.map(project);
      for (let i = 0; i < f.indices.length; i += 3) {
        const ids = f.indices.slice(i, i + 3),
          p = ids.map((k) => fp[k]);
        if (frameImage.complete && frameImage.naturalWidth)
          texturedTriangle(
            p,
            ids.map((k) => f.uv[k]),
            frameImage,
          );
        else triangle(p, "#eceb65");
      }
      polygons = [];
      for (const m of MODEL.meshes) {
        const ps = m.vertices.map(project),
          fill = selected.has(m.name) ? "rgba(0,0,0,.8)" : "rgba(0,0,0,.2)";
        const center = ps.reduce(
          (a, p) => [a[0] + p[0] / ps.length, a[1] + p[1] / ps.length],
          [0, 0],
        );
        // A single path avoids an artificial alpha seam along the source quad's diagonal.
        polygon(
          [...ps].sort(
            (a, b) =>
              Math.atan2(a[1] - center[1], a[0] - center[0]) -
              Math.atan2(b[1] - center[1], b[0] - center[0]),
          ),
          fill,
        );
        const edgeCounts = new Map();
        for (let i = 0; i < m.indices.length; i += 3) {
          let ids = m.indices.slice(i, i + 3);
          for (let k = 0; k < 3; k++) {
            let edge = [ids[k], ids[(k + 1) % 3]].sort((a, b) => a - b),
              key = edge.join(",");
            edgeCounts.set(key, (edgeCounts.get(key) || 0) + 1);
          }
        }
        ctx.strokeStyle =
          hover === m.name
            ? "#00a7a0"
            : selected.has(m.name)
              ? "#54c9bd"
              : "#7e817b";
        ctx.lineWidth = hover === m.name ? 3 : 1;
        for (const [key, count] of edgeCounts) {
          if (count !== 1) continue;
          const e = key.split(",").map(Number);
          ctx.beginPath();
          ctx.moveTo(...ps[e[0]]);
          ctx.lineTo(...ps[e[1]]);
          ctx.stroke();
        }
        if (showNumbers) {
          ctx.fillStyle = selected.has(m.name) ? "#fff9d9" : "#222b2b";
          ctx.font = `600 ${Math.max(11, Math.min(18, scale * 0.31))}px system-ui`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(m.name.slice(3), ...center);
        }
        polygons.push({ m, ps });
      }
    }
    function resize() {
      const r = canvas.getBoundingClientRect(),
        dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = r.width;
      height = r.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scale = Math.min(width, height) / 7.6;
      draw();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    function eventPoint(e) {
      const r = canvas.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    }
    function inside(p, a, b, c) {
      const cross = (u, v, w) =>
        (v[0] - u[0]) * (w[1] - u[1]) - (v[1] - u[1]) * (w[0] - u[0]);
      const x = cross(a, b, p),
        y = cross(b, c, p),
        z = cross(c, a, p);
      return !(x < 0 || y < 0 || z < 0) || !(x > 0 || y > 0 || z > 0);
    }
    function hit(p) {
      for (let k = polygons.length - 1; k >= 0; k--) {
        const { m, ps } = polygons[k];
        for (let j = 0; j < m.indices.length; j += 3) {
          const t = m.indices.slice(j, j + 3).map((i) => ps[i]);
          if (inside(p, ...t)) return m.name;
        }
      }
      return "";
    }
    canvas.addEventListener("pointerdown", (e) => {
      if (solved || (e.pointerType === "mouse" && e.button !== 0)) return;
      canvas.focus({ preventScroll: true });
      pointer = {
        id: e.pointerId,
        start: eventPoint(e),
        last: eventPoint(e),
        dragged: false,
      };
      canvas.setPointerCapture(e.pointerId);
    });
    canvas.addEventListener("pointermove", (e) => {
      const p = eventPoint(e);
      if (pointer && pointer.id === e.pointerId) {
        if (Math.hypot(p[0] - pointer.start[0], p[1] - pointer.start[1]) > 6)
          pointer.dragged = true;
        if (pointer.dragged) {
          yaw += (p[0] - pointer.last[0]) * 0.008;
          tilt = Math.max(
            0,
            Math.min(1.12, tilt + (p[1] - pointer.last[1]) * 0.008),
          );
          hover = "";
          draw();
        }
        pointer.last = p;
      } else if (e.pointerType !== "touch") {
        const n = hit(p);
        if (n !== hover) {
          hover = n;
          canvas.style.cursor = n ? "pointer" : "grab";
          update();
        }
      }
    });
    canvas.addEventListener("pointerup", (e) => {
      if (!pointer || pointer.id !== e.pointerId) return;
      const p = pointer;
      pointer = null;
      if (canvas.hasPointerCapture(e.pointerId))
        canvas.releasePointerCapture(e.pointerId);
      if (!p.dragged) toggle(hit(eventPoint(e)));
    });
    canvas.addEventListener("pointercancel", () => {
      pointer = null;
    });
    canvas.addEventListener("pointerleave", () => {
      if (!pointer) {
        hover = "";
        update();
      }
    });
    canvas.addEventListener("keydown", (e) => {
      if (solved) return;
      const keys = {
        ArrowLeft: [-0.12, 0],
        ArrowRight: [0.12, 0],
        ArrowUp: [0, -0.1],
        ArrowDown: [0, 0.1],
      };
      if (keys[e.key]) {
        e.preventDefault();
        yaw += keys[e.key][0];
        tilt = Math.max(0, Math.min(1.12, tilt + keys[e.key][1]));
        draw();
      }
    });
    root.querySelector('[data-action="view"]').onclick = () => {
      yaw = 0;
      tilt = 0;
      draw();
    };
    root.querySelector('[data-action="angle"]').onclick = () => {
      yaw = -0.12;
      tilt = 0.5;
      draw();
    };
    root.querySelector('[data-action="numbers"]').onchange = (e) => {
      showNumbers = e.target.checked;
      draw();
    };
    root.querySelector('[data-action="clear"]').onclick = () => {
      if (!solved) {
        selected.clear();
        update();
      }
    };
    confirm.onclick = () => {
      if (solved || disposed) return;
      if (
        selected.size !== CORRECT.size ||
        [...selected].some((n) => !CORRECT.has(n))
      ) {
        status.textContent =
          t("有些地方不对，请调整选择。", "なにかが違うようだ。選択を見直してください。");
        status.classList.add("kb-error");
        root.classList.remove("kb-shake");
        void root.offsetWidth;
        root.classList.add("kb-shake");
        return;
      }
      solved = true;
      status.textContent = t("选择正确 · 记忆数据复原中…", "選択成功 · 記憶データを復元中…");
      root.classList.add("kb-solved");
      confirm.disabled = true;
      for (const el of root.querySelectorAll("button,input"))
        el.disabled = true;
      options.onSolved?.();
    };
    function close() {
      cleanup();
      options.onClose?.();
    }
    root.querySelector(".kb-close").onclick = close;
    function onKey(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "Tab") {
        const focusable = [
          ...root.querySelectorAll(
            "button:not(:disabled),input:not(:disabled),summary,canvas[tabindex]",
          ),
        ].filter((el) => el.getClientRects().length);
        if (!focusable.length) return;
        const i = focusable.indexOf(document.activeElement);
        if (e.shiftKey && (i === 0 || i === -1)) {
          e.preventDefault();
          focusable[focusable.length - 1].focus();
        } else if (!e.shiftKey && (i === focusable.length - 1 || i === -1)) {
          e.preventDefault();
          focusable[0].focus();
        }
      }
    }
    root.addEventListener("keydown", onKey);
    function cleanup() {
      if (disposed) return;
      disposed = true;
      observer.disconnect();
      frameImage.onload = null;
      root.remove();
      if (active === cleanup) active = null;
      if (previousFocus && previousFocus.isConnected)
        previousFocus.focus({ preventScroll: true });
    }
    active = cleanup;
    resize();
    root.querySelector(".kb-close").focus({ preventScroll: true });
    return cleanup;
  }
  window.KarkinosBox = Object.freeze({ open });
})();
