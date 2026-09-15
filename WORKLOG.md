# 工作日誌

## 2026-07-28 — 首頁 Problem 與 Taiwan 敘事改版

### 今日完成

- 同步並以 `animation` 分支為基礎，調整首頁 Hero 後的 Problem 區段。
- 建立 Lead Pollution、Cadmium Threat、Wastewater Challenge 三個投影片式場景：各場景含圓餅圖視覺、主題 Q 版插圖、文字與統一的直列重點標籤。
- 將場景改為單一畫面依序淡入、停留、淡出，避免文字與圖像彼此疊層。
- 加入右下角圓形回頂按鈕與捲動進度環。
- 將 Pollution in Taiwan 改為六段式地圖敘事：空白圖、Taoyuan、空白圖、Taichung、空白圖、Kaohsiung。
- 使用單一去背台灣地形底圖，統一山脈、河流與輪廓；定位城市畫面以橘、紫、藍綠三色區分。
- 調整 Taiwan 與 Problem 場景的背景及淡入淡出規則，使兩段可連續銜接。

### 驗證

- 已通過 `git diff --check`。
- 已以本機預覽檢查 Problem 場景、Taiwan 空白地圖與 Taichung 定位畫面；同一時間僅會顯示一個 Taiwan 場景。

### 下次工作事項（注記）

1. 修正定位點：依原始地圖與城市座標精修 Taoyuan、Taichung、Kaohsiung 的定位位置。
2. 讓三個圓餅圖與台灣地形圖的切換更流暢，降低明顯的頁面滑動感，使其更接近連續的投影片播放效果。

## 2026-07-30 — Solution 與 Project Highlights 滑動敘事

### 今日完成

- 精修 Taiwan 地圖與 Wastewater Challenge 的交接節奏，避免地圖太早覆蓋上一段內容，同時減少中間空白感。
- 依使用者視覺判斷多次微調 Taoyuan 定位點，最後保留為 `top:16%; left:54%`。
- 將 `OUR SOLUTION` 改為 sticky scroll 敘事：先淡入大標題，再依序呈現 Detection、Capture、Sequestration、Removal、Clean Water。
- 生成並加入五張 solution Q 版小圖：Detection、Capture、Sequestration、Removal、Clean Water；重新處理透明 PNG，使主體約佔圓圈 80%。
- 將 solution 小節改為「圖片與小標題先出現，內文再淡入；全部完整出現後才淡出」的節奏。
- 依視覺重心微調 Capture、Sequestration、Removal 圖片在圓圈內的位置，避免看起來偏移。
- 在 Taiwan、Our Solution、Project Highlights 間加入漸層背景銜接，降低不同背卡顏色切換時的突兀感。
- 將 `PROJECT HIGHLIGHTS` 改為滑動敘事：大標題先單獨淡入淡出，接著變成上方標題；四張 highlight card 依序淡入。
- 將 `Towards a Sustainable Future` future box 併入 highlight card 場景下方，待四格卡片都出現後再淡入；全部內容完整顯示後才一起淡出。
- 將 future box 內文字改為白色，提高在深色漸層背景上的可讀性。
- 更新 CSS cache busting 版本至 `20260730-highlight4`。

### 新增素材

- `static/assets/images/solution/detection.png`
- `static/assets/images/solution/capture.png`
- `static/assets/images/solution/sequestration.png`
- `static/assets/images/solution/removal.png`
- `static/assets/images/solution/clean-water.png`

### 驗證

- 已通過 `git diff --check`。
- 已以本機預覽確認 solution 圖片載入、Project Highlights scene 結構、future panel 與背景漸層 bridge 正常。
- 目前本機新版預覽可使用 `http://127.0.0.1:8081/?r=highlight4#solution-title` 檢查。

### 下次工作事項（注記）

1. **HUMAN PRACTICES**：以 team 為中心先淡入。
2. 由 team 中心向外延伸分枝，分枝依序淡入。
3. 待所有圖片與分枝都成功淡入後，再讓文字一行一行淡入。
4. 最後淡入 `VIEW MORE...` 按鈕。
5. 需檢查 Human Practices 與上一段 Project Highlights 的背景銜接，維持投影片式滑動感。

## 2026-08-03 — Human Practices、Description 與 Problem Statement 調整

### 今日完成

- 重啟並延續 `animation` 分支的首頁修改內容。
- 將 `PROJECT HIGHLIGHTS` 的文字內容更新為 VIS 官方網站目前使用的重點敘述，保留原先滑動淡入淡出的呈現方式。
- 依前次工作日誌註記製作 `HUMAN PRACTICES` 滑動敘事：
  - 先讓 TEAM 中心淡入。
  - 再依序淡入 Government、Industry、Researchers、Public、Wastewater 五個分枝。
  - 待左側圖像完整呈現後，再依序淡入右側 Listen、Integrate、Impact 文字。
  - 最後淡入 `VIEW MORE ...` 按鈕。
- 依使用者提供的原圖修正 Human Practices 左側圖像，保留原本 TEAM 中心與五個分枝的視覺樣式。
- 移除 Human Practices 外層背卡，讓內容有更大的排版空間，並維持分段淡入效果。
- 修正因 CSS 結構造成上方選單自動展開、遮住下方內容的問題。
- 讀取 `Untitled_document.pdf` 內容，將 PDF 中的 Problem Statement 內容整理並覆蓋至網頁 Problem Statement 相關頁面。
- 新增並整理 `docs/problem-statement.md`，建立正式 Problem Statement 內容與美化排版。
- 調整 Description 選單：
  - Background 連到 `/background`。
  - Problem Statement 連到 `/problem-statement`。
- 補上 `docs/background.md`，讓 `/background` 可正常開啟。
- 為避免刪除 `docs/description.md` 後造成舊路由 Internal Server Error，已將 `docs/description.md` 還原。
- 調整 Problem Statement / Description 內的數據排版：
  - `2.5 mg/kg` 與 `5.0 mg/kg` 數據字體略微縮小並加粗。
  - 數據說明文字加粗，讓整體更像重點數據卡。
- 調整 `Cadmium contamination in Taiwan is a national problem` 區塊：
  - 將城市與比例改為城市名稱在前、百分比在後。
  - 使用約等於符號呈現為 `Changhua County ≈ 47%`、`Taoyuan City ≈ 46%`、`Taichung City ≈ 5%`。
- 更新 CSS cache busting 版本至 `20260803-problem2`，避免瀏覽器繼續載入舊版樣式。

### 新增 / 調整檔案

- `docs/home.md`
- `home.md`
- `docs/problem-statement.md`
- `docs/background.md`
- `docs/description.md`
- `static/style.css`
- `wiki/base.html`
- `wiki/menu.html`
- `static/assets/images/hp-reference-diagram.png`

### 驗證

- 已通過 `git diff --check`。
- 已使用 Flask test client 檢查以下路由皆可正常開啟：
  - `/description`
  - `/background`
  - `/problem-statement`
- 已確認選單中 Background 與 Problem Statement 會分別輸出 `/background` 與 `/problem-statement`。
- 已確認 Problem Statement 頁面中城市比例與數據文字有成功更新。

### 下次工作事項（注記）

1. **ENGINEERING CYCLE**：完成與前面區塊一致的流暢式滑動切換效果。
2. **MEET OUR TEAM**：完成流暢式滑動切換效果，並檢查與上一段 Engineering Cycle 的背景與淡入淡出銜接。

## 2026-08-06 — 標題字體統一、Engineering Cycle 圖層修正與首頁按鈕調整

### 今日完成

- 將首頁各大段落的主標題、次標題與內文字體規則統一成同一套 Human Practices 風格，避免不同區塊看起來像不同頁面。
- 重新檢查 `ENGINEERING CYCLE` 的圖層渲染，將中心齒輪與四個節點拆成獨立透明圖層，修正第一層淡入時會帶出裁切殘影的問題。
- 依實際畫面確認工程循環的第一階段可正常單獨顯示，不再混入其他遭裁切內容。
- 將首頁 Hero 區塊的 `Our Project` 按鈕文案改為 `Background`，讓導覽文字與實際路由名稱一致。
- 以 Flask test client 檢查首頁渲染內容，確認後端輸出已更新為 `Background`。

### 驗證

- 已確認 `docs/home.md` 的工程循環結構改為獨立圖層版本。
- 已確認 `wiki/base.html` 的首頁按鈕文字為 `Background`。
- 已以本機 Flask 渲染結果確認首頁 HTML 中不再出現 `Our Project` 按鈕字樣。

### 下次工作事項（注記）

1. 持續檢查本機瀏覽器快取與實際畫面，確保首頁按鈕顯示與後端渲染一致。
2. 若後續還有新的滑動敘事區塊，延續同一套字體與淡入節奏，維持整站一致性。
