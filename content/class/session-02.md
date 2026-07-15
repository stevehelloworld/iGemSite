---
session: 2
title: "網頁的結構：HTML 與 DOM"
subtitle: "先理解『畫面是一棵樹』，才懂 React 元件在描述什麼"
duration: "3 小時"
goals:
  - "手刻完整 HTML 文件並解釋語意標籤"
  - "用樹狀圖描述 DOM"
  - "用 JS 選取節點、修改內容與結構"
  - "說出練習頁與 Cadture 正式站在『結構』上的差異"
---

## 本堂在「做出網站」中的角色

React/Next **不會取消 HTML**，它是用 JS 產生 HTML 樹。  
本堂用最小例子讓你看懂樹，之後讀 `page.tsx` 才看懂 return 的 JSX。

---

## 1. 完整實作：建立練習專案結構

在專案外或 `practice/session-02/`：

```text
session-02/
├── index.html
├── main.js
└── （下堂 styles.css）
```

### 1.1 完整 HTML（請完整打字，不要只複製不看）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cadture Structure Practice</title>
  </head>
  <body>
    <header>
      <h1 id="site-title">Cadture</h1>
      <p id="tagline">Team wiki structure practice</p>
    </header>

    <nav aria-label="Practice">
      <a href="#problem">Problem</a> |
      <a href="#solution">Solution</a>
    </nav>

    <main>
      <section id="problem">
        <h2>The Problem</h2>
        <ul id="problem-list">
          <li data-key="pb">Lead Pollution</li>
          <li data-key="cd">Cadmium Threat</li>
          <li data-key="water">Wastewater Challenge</li>
        </ul>
      </section>

      <section id="solution">
        <h2>Our Solution</h2>
        <ol id="solution-list">
          <li>Detection</li>
          <li>Capture</li>
          <li>Sequestration</li>
          <li>Removal</li>
          <li>Clean Water</li>
        </ol>
      </section>

      <button type="button" id="btn-add">Add a note with JS</button>
      <button type="button" id="btn-title">Rename title with JS</button>
      <p id="note-area"></p>
    </main>

    <footer>
      <small>Practice DOM — building blocks for understanding the real site.</small>
    </footer>

    <script src="main.js"></script>
  </body>
</html>
```

### 1.2 語意標籤為什麼重要？

之後元件常叫 `Navbar`、`Footer`、`PageHero`——名字對應的就是這些區塊職責。

---

## 2. 畫 DOM 樹（必交筆記）

請畫出從 `body` 往下至少 3 層。  
口頭說明：`#solution-list` 的父節點是誰？

---

## 3. 完整步驟：JS 操作 DOM

### 3.1 `main.js` 完整範例

```js
const titleEl = document.querySelector("#site-title");
const noteArea = document.querySelector("#note-area");
const btnTitle = document.querySelector("#btn-title");
const btnAdd = document.querySelector("#btn-add");
const solutionList = document.querySelector("#solution-list");

// A. 改文字
btnTitle.addEventListener("click", () => {
  titleEl.textContent = "Cadture (edited by DOM API)";
});

// B. 改結構：新增節點
btnAdd.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Note: Real wiki content lives in Markdown files, not only in HTML.";
  noteArea.appendChild(p);
});

// C. 讀取列表（像之後 map 資料）
const steps = [];
solutionList.querySelectorAll("li").forEach((li) => {
  steps.push(li.textContent);
});
console.log("Solution steps:", steps);
```

### 3.2 驗證

1. 用瀏覽器開 html  
2. 開 Console 看陣列五步  
3. 按兩個按鈕看文字與新段落  

### 3.3 對照表：DOM API ↔ 本站思維

| 你剛做的 | 正式站怎麼做 |
|----------|----------------|
| `textContent = ...` | 改 md / 資料後由框架重渲染 |
| `createElement` | 用元件 return JSX |
| 把 li 掃成陣列 | `home.md` 的 solution 陣列 + `.map` |

---

## 4. 為什麼正式站不把長文寫死在 HTML？

分組討論後寫結論：

1. 多人同時改同一個巨大 HTML 會怎樣？  
2. 若內容與選單邏輯混在一起，除錯會怎樣？  
3. 「內容層／結構層／系統層」如何降低衝突？  

---

## 5. 完成檢查表

- [ ] HTML 可開啟且結構完整  
- [ ] DOM 樹有畫  
- [ ] 兩個按鈕行為正確  
- [ ] Console 印出五個 solution 步驟  
- [ ] 能說「正式站用資料+元件代替手寫整頁 HTML」  

## 6. 回家

1. 用樹狀圖畫「你猜的」`/description` 頁結構（header/nav/main…）  
2. 下堂會對照真實元件  

## 7. 下一堂

CSS 與 class 狀態 → 接上 Tailwind 的 className。
