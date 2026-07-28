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
