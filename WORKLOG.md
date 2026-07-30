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
