---
session: 3
title: "樣式系統入門：CSS 到 className"
subtitle: "視覺規則如何成為可重用系統，並接到本站 Tailwind"
duration: "3 小時"
goals:
  - "用 CSS 完成可維護的卡片風格"
  - "理解 class 作為狀態與設計 token 的入口"
  - "能對照本站 globals 與元件 class"
---

## 1. 建造網站 = 結構 + 外觀 + 行為

| 層 | 上堂／本堂 |
|----|------------|
| 結構 | HTML/DOM |
| 外觀 | 本堂 CSS |
| 行為 | JS（上堂已做一點） |

Cadture 的「品牌感」來自一致的外觀規則，不是單頁亂美化。

---

## 2. 完整實作：為 session-02 加上設計系統雛形

### 2.1 `styles.css`（請建立完整檔）

```css
:root {
  --bg: #fff8f6;
  --ink: #4a2f34;
  --primary: #c94c67;
  --primary-dark: #b43852;
  --border: #f0c4ce;
  --card: #ffffff;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.55;
}

header, nav, main, footer {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 1.25rem;
}

h1 { color: var(--primary-dark); }

#problem-list, #solution-list {
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: 1.25rem;
  padding: 1rem 1.25rem;
  box-shadow: 3px 3px 0 rgba(201, 76, 103, 0.08);
}

button {
  border: 2px solid var(--primary-dark);
  background: var(--primary);
  color: white;
  font-weight: 700;
  border-radius: 999px;
  padding: 0.55rem 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

button:hover { filter: brightness(0.95); }

.is-active {
  outline: 3px solid var(--primary);
  background: #fff5f8;
}
```

### 2.2 在 HTML head 引入

```html
<link rel="stylesheet" href="styles.css" />
```

### 2.3 為什麼用 `:root` 變數？

這就是**設計 token** 的雛形：改一處主色，全站跟著變。  
本站 `globals.css` 的 `--primary` 等是同一概念的加強版。

---

## 3. class 狀態：連接「元件 props」思維

更新 `main.js` 片段：

```js
const problemItems = document.querySelectorAll("#problem-list li");

problemItems.forEach((li) => {
  li.style.cursor = "pointer";
  li.addEventListener("click", () => {
    problemItems.forEach((x) => x.classList.remove("is-active"));
    li.classList.add("is-active");
  });
});
```

點擊問題項目會高亮——這與之後「依狀態套不同 className」相同。

---

## 4. 對照本站（系統層預告）

打開（只讀、圈關鍵字）：

1. `src/app/globals.css` — 找 `--primary`  
2. `src/app/page.tsx` — 找 `className=`  
3. `src/components/PageHero.tsx` — 找 tone 相關 class  

填表：

| 本站寫法 | 我的理解 |
|----------|----------|
| `text-primary` |  |
| `sticker` |  |
| `md:grid-cols-3` |  |

---

## 5. 討論：樣式要寫在哪？

| 做法 | 優點 | 缺點 |
|------|------|------|
| 一個巨大 css | 簡單 | 難協作 |
| 每個元件一段 class | 本站 Tailwind 路線 | 要學 utility 名稱 |
| CSS 變數 token | 品牌一致 | 要有規範 |

Cadture 選擇：**token + utility class + 少數自訂 class（如 sticker）**。

---

## 6. 完成檢查表

- [ ] 練習頁有卡片／圓角／主色  
- [ ] 使用 `:root` 變數  
- [ ] class 切換可演示  
- [ ] 對照過 globals 與 page.tsx  

## 7. 回家

截圖練習頁；列出 5 個你在本站看過的 class 並猜測意思。  
下堂：內容層 Markdown——但仍會連回「誰讀取這些檔」。
