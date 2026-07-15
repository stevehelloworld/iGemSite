---
session: 3
title: "樣式系統入門：CSS 到 className"
subtitle: "從設計 token、class 狀態，接到本站 Tailwind（放慢版）"
duration: "3 小時"
goals:
  - "用 CSS 變數做出可維護的主色與卡片"
  - "用 class 表達狀態（is-active）"
  - "對照 globals.css 與 page.tsx 的 class 寫法"
  - "完成 RWD 粗檢查"
---

## 給老師：避免講太快

- 「看過 Tailwind 就好」不夠——至少讓學生**拆解 8 個 class**。  
- `:root` 變數要學生改一次主色看全頁連動，才記得「token」。  
- 留 15 分給窄螢幕檢查，很多人沒做過 DevTools 裝置模式。  

---

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–10 | 回顧 DOM；本堂在三層模型的位置（表現／系統） |
| 10–55 | 寫 styles.css + 套到 session-02 |
| 55–65 | 休息 |
| 65–100 | class 狀態 + JS |
| 100–135 | 對照本站 globals / page.tsx 拆 class |
| 135–165 | 窄螢幕檢查 + 小挑戰 |
| 165–180 | 檢查表、作業 |

---

## 1. 為什麼建造網站一定要有「樣式系統」？

### 1.1 討論（8 分）

若 10 個人各自選顏色：

- 首頁粉紅、Description 螢光綠、Team 深藍……訪客會覺得？  
- iGEM 評審快速掃站時，混亂風格會怎樣？  

結論：樣式是**產品一致性**，不是裝飾而已。

### 1.2 本站品牌（請抄）

| Token | 色碼 | 用途 |
|-------|------|------|
| background | `#FFF8F6` | 頁面底 |
| primary | `#C94C67` | 重點、按鈕 |
| primary-dark | `#B43852` | 標題 |
| border | `#F0C4CE` | 卡片邊 |

---

## 2. 完整步驟：為 session-02 加上 styles.css

### 步驟 1｜建立檔案

路徑：`practice/session-02/styles.css`（與 index.html 同層）

### 步驟 2｜貼上完整 CSS（分段理解）

**第一段：變數（token）**

```css
:root {
  --bg: #fff8f6;
  --ink: #4a2f34;
  --primary: #c94c67;
  --primary-dark: #b43852;
  --border: #f0c4ce;
  --card: #ffffff;
}
```

**停下來確認：** 問「若只改 `--primary`，哪些地方應跟著變？」

**第二段：body 基礎**

```css
* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.55;
}
```

**第三段：版面寬度**

```css
header, nav, main, footer {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 1.25rem;
}

h1 { color: var(--primary-dark); }
h2 { color: var(--primary-dark); }
```

**第四段：卡片感列表**

```css
#problem-list,
#solution-list {
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: 1.25rem;
  padding: 1rem 1.25rem;
  box-shadow: 3px 3px 0 rgba(201, 76, 103, 0.08);
}

#problem-list li {
  padding: 0.35rem 0.25rem;
  border-radius: 0.5rem;
}
```

**第五段：按鈕**

```css
button {
  border: 2px solid var(--primary-dark);
  background: var(--primary);
  color: #fff;
  font-weight: 700;
  border-radius: 999px;
  padding: 0.55rem 1rem;
  margin: 0.35rem 0.35rem 0.35rem 0;
  cursor: pointer;
}

button:hover {
  background: var(--primary-dark);
}
```

**第六段：狀態**

```css
.is-active {
  outline: 3px solid var(--primary);
  background: #fff5f8;
}
```

### 步驟 3｜HTML 引入

在 `<head>` 加：

```html
<link rel="stylesheet" href="styles.css" />
```

### 步驟 4｜重新整理驗證

- [ ] 背景暖白  
- [ ] 列表像卡片  
- [ ] 按鈕圓角粉色  

### 步驟 5｜token 實驗（10 分）

把 `--primary` 暫時改成 `#2f6f4e`，重新整理，觀察哪些變了，**再改回**玫瑰主色。  
寫一句話：`為什麼要用變數而不是到處寫死色碼？`

---

## 3. 完整步驟：class 狀態 + JS

### 步驟 1｜更新 main.js 片段

```js
const problemItems = document.querySelectorAll("#problem-list li");

problemItems.forEach(function (li) {
  li.style.cursor = "pointer";
  li.addEventListener("click", function () {
    problemItems.forEach(function (other) {
      other.classList.remove("is-active");
    });
    li.classList.add("is-active");
    console.log("Activated:", li.textContent.trim());
  });
});
```

### 步驟 2｜操作驗證

點 Lead → 只有 Lead 高亮；再點 Cadmium → 高亮轉移。

### 步驟 3｜觀念對照（老師慢慢講）

| 你做的 | 本站以後 |
|--------|----------|
| `classList.add("is-active")` | 依狀態拼 `className` |
| CSS `.is-active` | 預先寫好狀態樣式 |
| 一次只亮一個 | 單一選取 UI 邏輯 |

---

## 4. 對照本站（放慢 35 分）

### 4.1 打開 `src/app/globals.css`

找到 `:root` 與 `--primary`。  
與自己的 `styles.css` 並排，圈出相似處。

### 4.2 打開 `src/app/page.tsx`

搜尋 `className=`，挑**一行最長的**抄下，拆成表格：

| class | 我猜的意思 | 問過同學/老師後 |
|-------|------------|-----------------|
|  |  |  |
|  |  |  |
| …至少 8 個 |  |  |

### 4.3 常見 Tailwind 速查（本堂夠用）

| class | 意思 |
|-------|------|
| `mt-4` | 上外距 |
| `p-6` | 內距 |
| `flex` | flex 配置 |
| `grid` | 網格 |
| `gap-4` | 子元素間距 |
| `text-center` | 置中 |
| `font-bold` | 粗體 |
| `rounded-2xl` | 大圓角 |
| `border-2` | 邊框 |
| `md:grid-cols-3` | 中等寬度以上 3 欄 |
| `text-primary` | 使用主題主色（本站） |

### 4.4 停下來確認

抽問：`md:grid-cols-3` 在手機上通常是幾欄？為什麼？

---

## 5. 窄螢幕檢查（15 分）

1. 打開 localhost 首頁  
2. DevTools → 裝置工具列  
3. 選 iPhone 寬度  
4. 記錄：  

| 檢查 | OK？ | 備註 |
|------|------|------|
| Problem 卡片可讀 |  |  |
| 選單可開 |  |  |
| 按鈕可點 |  |  |
| 文字會不會溢出 |  |  |

---

## 6. 完成檢查表

- [ ] CSS 六段都理解並套用  
- [ ] token 實驗有做並改回  
- [ ] is-active 可演示  
- [ ] 拆過至少 8 個本站 class  
- [ ] 窄螢幕表填完  

## 7. 回家作業

1. 練習頁 vs 本站截圖各 1，寫相似 3、相異 3  
2. 讀 `/class/how-to-edit` 的「一次請求故事」預習  
3. （選做）在 Card.tsx 圈 5 個 class  

## 8. 下一堂

內容層：Markdown 是系統的**輸入**；要追到誰讀它。
