---
session: 2
title: "網頁的結構：HTML 與 DOM"
subtitle: "畫面是一棵樹——為理解 React／Next 打底（放慢版）"
duration: "3 小時"
goals:
  - "手刻完整 HTML 並解釋每個主要標籤"
  - "畫出 DOM 樹並指出父子關係"
  - "用 JS 完成改文字、新增節點、讀取列表"
  - "對照正式站：為何不把長文寫死在 HTML"
---

## 給老師：節奏

- HTML 手打階段容易有人卡住 tag——安排「完成一階段舉手機」。  
- DOM 樹一定要畫，不要用口述帶過。  
- JS 三段練習（改字／加節點／讀列表）**分段驗收**，不要一次貼完。  

---

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–10 | 抽背首頁七段 + 本堂目標 |
| 10–50 | 手刻 HTML（分段檢查） |
| 50–60 | 休息 |
| 60–90 | 畫 DOM 樹 + 互批 |
| 90–140 | JS 三段操作 |
| 140–165 | 對照 Cadture 正式站討論 |
| 165–180 | 檢查表與作業 |

---

## 1. 連結上堂（5 分）

問：`content/` 是哪一層？`src/app/` 呢？  
再問：今天的 HTML 練習主要對應「瀏覽器裡的什麼？」→ **DOM 樹／結構**。

---

## 2. 建立練習資料夾（完整步驟）

### 步驟 1
在磁碟建立：

```text
practice/session-02/
```

### 步驟 2
稍後會有三個檔：

```text
index.html
main.js
styles.css   ← 可下堂再補，本堂可不做 css
```

### 步驟 3
用 VS Code「打開資料夾」指到 `session-02`，避免存錯地方。

---

## 3. HTML 分段建造（40 分）

### 階段 A｜最小可開檔（10 分）

先只做到 body 有 h1，就用瀏覽器打開確認：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Cadture Structure Practice</title>
  </head>
  <body>
    <h1 id="site-title">Cadture</h1>
  </body>
</html>
```

**檢查點 A：** 雙擊開得起來、看得到 Cadture。

### 階段 B｜補齊骨架（15 分）

加入 `header`、`nav`、`main`、`footer`。老師說明語意：不是為了好看，是為了**結構可讀、之後好對應元件名稱**。

### 階段 C｜放入官方故事的小樣本（15 分）

Problem 三點、Solution 五步（英文用官方句，加深印象）。

完整參考（學生可對照，但鼓勵先自己打）：

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
      <p id="tagline">Structure practice for building the real wiki</p>
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

      <button type="button" id="btn-title">Rename title</button>
      <button type="button" id="btn-add">Add note node</button>
      <button type="button" id="btn-read">Read solution steps to console</button>
      <div id="note-area"></div>
    </main>

    <footer>
      <small>Practice DOM — foundation for understanding React components.</small>
    </footer>

    <script src="main.js"></script>
  </body>
</html>
```

**檢查點 C：** 不靠 JS 也能完整閱讀問題與解法列表。

---

## 4. DOM 樹作業（30 分，可放慢）

### 4.1 示範畫法

老師在白板上從 `body` 往下畫 3 層。

### 4.2 學生必交

畫出包含：`header`、`main`、`#solution-list` 與其下 5 個 `li`。

### 4.3 互批問題（两人一组）

1. `#btn-add` 的父節點是？  
2. 第一個 `section` 的前一個兄弟大致是？  
3. 若把 `script` 放到 `head` 且不延遲，可能有什麼問題？  

---

## 5. JS 三段式（分段做，每段驗收）

建立 `main.js`。

### 練習 1｜改文字（10 分）

```js
const titleEl = document.querySelector("#site-title");
const btnTitle = document.querySelector("#btn-title");

console.log("titleEl =", titleEl);

btnTitle.addEventListener("click", function () {
  titleEl.textContent = "Cadture (edited via DOM)";
});
```

**驗收：** Console 不是 null；按鈕可改標題。

### 練習 2｜新增節點（10 分）

```js
const btnAdd = document.querySelector("#btn-add");
const noteArea = document.querySelector("#note-area");

btnAdd.addEventListener("click", function () {
  const p = document.createElement("p");
  p.textContent =
    "In the real Cadture site, long text usually lives in Markdown files under content/.";
  noteArea.appendChild(p);
});
```

**驗收：** 每按一次多一段（可討論要不要先清空）。

### 練習 3｜讀列表到陣列（15 分）

```js
const btnRead = document.querySelector("#btn-read");
const solutionList = document.querySelector("#solution-list");

btnRead.addEventListener("click", function () {
  const steps = [];
  const items = solutionList.querySelectorAll("li");
  items.forEach(function (li) {
    steps.push(li.textContent.trim());
  });
  console.log("Solution steps array:", steps);
  console.log("Length =", steps.length);
  alert("Read " + steps.length + " steps. Check console.");
});
```

**驗收：** Console 有 5 個字串。  
**連結下下堂：** 這就像把資料拿出來；正式站是資料先存在 md，再被 map 成畫面。

---

## 6. 對照正式站（20 分討論＋筆記）

打開 localhost Cadture 首頁。

| 練習頁 | 正式站 |
|--------|--------|
| 步驟寫死在 HTML | 步驟在 `content/home.md` 的 `solution` |
| 自己 appendChild | React 依資料重新渲染 |
| 單檔 | 多檔分層協作 |

**書面題（交）：** 用 80–120 字說明「為什麼正式站不把全部英文寫死在一個 HTML？」

---

## 7. 完成檢查表

- [ ] HTML 三階段都通過  
- [ ] DOM 樹有畫且互批  
- [ ] JS 三練習都成功  
- [ ] 書面對照題完成  

## 8. 回家

1. 補畫「你猜的」`/description` 頁結構樹  
2. 下堂會對到 `PageHero`、文章區等真實元件名稱  

## 9. 下一堂

CSS 變數與 class 狀態——設計系統的最小版，接到 Tailwind。
