---
session: 9
title: "系統層：首頁如何組裝"
subtitle: "home.md 資料 + page.tsx 視圖 + 官方七段——放慢對照"
duration: "3 小時"
goals:
  - "能對照官方與本機逐段檢查"
  - "能改 YAML 並指到對應 map"
  - "能比較 WikiPage 模式與首頁模式"
  - "完成里程碑 B"
---

## 給老師

- 先對官方再改檔，避免學生亂改 highlights。  
- 每位學生都要 `Cmd+F` 找到 map，不要只看你投影。  
- 里程碑 B 強調「誰確認內容」。  

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–20 | 兩種頁面策略 |
| 20–55 | 官方七段逐段對照 |
| 55–65 | 休息 |
| 65–110 | 改 home.md（允許範圍） |
| 110–150 | page.tsx map 導讀與標註 |
| 150–170 | 里程碑 B 整理 |
| 170–180 | 分享 2 組 |

## 1. 兩種建造策略（15 分講清楚）

| | 文件頁 | 首頁 |
|--|--------|------|
| 資料 | 一篇 pages/*.md | home.md YAML 多段清單 |
| 組裝 | WikiPage 通用引擎 | page.tsx 專用排版 |
| 適合 | 長文、套版結構 | 固定行銷區塊 |

**問題：** 能不能把首頁也改成只有一篇超長 md？可以，但改 UI 區塊順序會變痛。本站選擇資料與視圖分離。

## 2. 官方對照（放慢 35 分）

左官方右本機，**一段一段**勾：

| 段 | 官方關鍵文字（抄 5–10 字） | 本機一致？ |
|----|---------------------------|------------|
| Problem 三卡 |  |  |
| 三個城市 |  |  |
| Solution 五步名 |  |  |
| Highlights 四數字 |  |  |
| Sustainable 段 |  |  |
| Listen/Integrate/Impact |  |  |
| Design/Build/Test/Learn |  |  |
| Team placeholder |  |  |

不一致就記下來，課堂討論是否應改回。

## 3. 改 home.md（完整步驟）

### 3.1 打開

`content/home.md`

### 3.2 允許練習的改動

- `locations` 的 body 潤飾（不改事實）  
- `solution` 的 body 潤飾（title 建議維持官方五詞）  
- `teamNote` 在隊上同意下更新  

### 3.3 預設禁止

- 擅自改 `90%` `75%` `500+` `12`  
- 刪除整段 solution  

### 3.4 驗證

存檔 → 重新整理 `/` → 指到變更區塊給鄰座看。

### 3.5 YAML 除錯

| 症狀 | 原因 |
|------|------|
| 首頁空白/錯誤 | 縮排壞了、`---` 不對 |
| 某列表少一張卡 | 少了一個 `- title:` 區塊 |
| 奇怪字元 | 冒號未加引號 |

## 4. page.tsx 導讀（40 分）

### 步驟 1
打開 `src/app/page.tsx`

### 步驟 2
搜尋並在行旁註解：

- `h.problems.map` → The Problem  
- `h.locations.map` → 城市  
- `h.solution.map` → Our Solution  
- `h.highlights.map` → Highlights  
- `h.humanPractices.map` → HP  
- `h.engineering.map` → Engineering  

### 步驟 3
老師講 `.map` 與 for 迴圈對照（用第 1 次 JS 例子）。

### 步驟 4
書面：若 `solution` 只剩 4 筆，畫面會怎樣？

## 5. 比較題（10 分）

用 80–120 字：WikiPage 文件頁 vs 首頁組裝，差在哪？為何首頁要特殊？

## 6. 里程碑 B

1. 更新了哪兩區 + 確認人姓名  
2. 截圖  
3. map 標註截圖  
4. 比較題答案  

## 7. 完成檢查表

- [ ] 七段對照完成  
- [ ] YAML 有合法更新  
- [ ] 六個 map 都找到  
- [ ] 里程碑 B 交  

## 8. 下一堂

表現層 Tailwind 與設計紀律。
