---
session: 10
title: "表現層：設計系統與 Tailwind"
subtitle: "可維護的外觀——放慢拆 class、安全改、RWD"
duration: "3 小時"
goals:
  - "拆解並解釋至少 12 個 class"
  - "完成兩次安全視覺改動並截圖"
  - "完成手機與桌機檢查表"
  - "為負責頁選定 tone 並說明"
---

## 給老師

- 禁止學生大改配色主題；本堂是「讀懂與微調」。  
- 進度快者可讀 PageHero tone 實作。  

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–15 | 設計系統是什麼 |
| 15–50 | 拆 class 工作紙 |
| 50–60 | 休息 |
| 60–110 | 安全改動實驗 |
| 110–145 | RWD 檢查 |
| 145–170 | tone 作業當堂草稿 |
| 170–180 | 分享 |

## 1. 設計系統三層

1. **Token**（色、圓角觀念）— globals  
2. **元件**（Button/Card/Hero）  
3. **頁面組合**  

亂改第 3 層還修得回來；亂改第 1 層可能全站爆炸——本堂主攻讀與微調第 2–3 層。

## 2. 拆 class 工作紙（35 分）

從 `page.tsx` 或 `Card.tsx` 複製**兩行**長 className，填：

| class | 猜測 | 查證後 |
|-------|------|--------|
| 至少 12 格 |  |  |

必含至少一個 `sm:` 或 `md:` 或 `lg:`。

### 速查

mt/mb/p/px/py、flex、grid、gap、items-center、justify-between、text-sm、font-bold、rounded-*、border-*、shadow、max-w-*、mx-auto、hidden、sm:block、md:grid-cols-3、text-primary

## 3. 安全改動實驗

### 實驗 1 間距

某 section `py-14` ↔ `py-10` 或 `py-16`，截圖前後，寫感受。

### 實驗 2 對齊

某標題 `text-center` 拿掉再加回，討論為何官方區塊常用置中。

### 還原策略

不喜歡就 git checkout 該檔；喜歡就留並 commit `style: ...`

## 4. RWD 完整檢查表

裝置：iPhone 寬 + 桌機 1280

| 項目 | 手機 | 桌機 |
|------|------|------|
| 首頁 Problem |  |  |
| Solution 五卡 |  |  |
| 選單 |  |  |
| 文件頁 toc |  |  |
| 課程 /class 可讀 |  |  |

## 5. tone 作業當堂完成草稿

在負責頁 md：

```yaml
tone: sky
```

可選：rose / mint / sky / cream / lavender  

寫 3 句中文：主題情緒、為何配色合適、有無對比問題。

## 6. 完成檢查表

- [ ] 12 個 class 表  
- [ ] 兩次實驗截圖  
- [ ] RWD 表  
- [ ] tone 草稿  

## 7. 放慢補充：讀一段真實 class（15 分）

從首頁挑一行，例如（以你檔案實際為準）：

```text
mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8
```

逐個解釋：

| 片段 | 意思 |
|------|------|
| `mx-auto` | 水平置中 |
| `max-w-7xl` | 最大寬度 |
| `px-4` | 左右內距 |
| `py-14` | 上下內距 |
| `sm:px-6` | 較寬螢幕左右內距加大 |
| `lg:px-8` | 更寬再加大 |

**練習：** 學生自己再拆一行，寫進筆記本。

## 8. 下一堂

總裝新頁——學期建造驗收。請先複習 session-06 路由 + session-07 nav + session-04 md。
