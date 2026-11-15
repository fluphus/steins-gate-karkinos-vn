# STEINS;GATE 不可侵领域的 Karkinos

《STEINS;GATE 不可侵領域のカルキノス》中日双语浏览器移植版，支持剧情模式与解谜模式。

- [在线游玩 / ブラウザーで遊ぶ](https://fluphus.github.io/steins-gate-karkinos-vn/)
- [下载 Windows 离线版 / Windows オフライン版](https://github.com/fluphus/steins-gate-karkinos-vn/releases/latest/download/karkinos-offline.zip)
- [版本记录 / リリース](https://github.com/fluphus/steins-gate-karkinos-vn/releases)

支持简体中文与日本語，首次打开时按浏览器偏好选择，也可在设置里手动切换。新游戏默认进入剧情模式。想自己解题，可在开始前切换到解谜模式，体验原题及两个 EX。

## 游玩

在线版直接打开网页。Windows 离线版请完整解压 ZIP，再双击 `START.cmd`，也可以用 Edge 或 Chrome 打开 `index.html`。

点击画面、空格或 Enter 推进。按住 Ctrl 可快进，遇到选择或操作点会停下。打开右上角设置可启用自动播放、回看并重听对白，也可查看地图与提示。游戏会自动存档，回到同一站点可点「继续游戏」接着读。

## 本地开发

本项目使用原生 HTML、CSS、JavaScript 与本地媒体。克隆后可用任意静态服务器预览。例如已安装 Python 3 时：

~~~sh
git clone https://github.com/fluphus/steins-gate-karkinos-vn.git
cd steins-gate-karkinos-vn
python -m http.server 8080 --bind 127.0.0.1
~~~

浏览器打开 `http://127.0.0.1:8080/`。GitHub Pages 从 `main` 根目录发布，Windows 离线 ZIP 通过 Releases 提供。

## 内容与素材

包含正篇三章、两个 EX、原作日语配音和音乐、片头宣传片、片尾、地图与解谜提示。原作及相关素材的权利归各权利人所有。

## 日本語

『STEINS;GATE 不可侵領域のカルキノス』の非公式ブラウザー移植版です。日本語と簡体字中国語、ストーリー／謎解きモードに対応しています。Windows オフライン版は ZIP を展開し、`START.cmd` をダブルクリックすると遊べます。
