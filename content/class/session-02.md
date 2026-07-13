---
session: 2
title: "HTML 快修與結構思維"
subtitle: "手刻一頁小網頁，並用一點 JS 改 DOM 文字"
duration: "3 小時"
goals:
  - "能寫出結構完整的單頁 HTML"
  - "能解釋 DOM 是樹狀結構"
  - "能用 JS 選取節點並修改文字或回應點擊"
---

## 0. 為什麼先做 HTML／JS，而不是直接改 Cadture？

Cadture 本站已經用 Next.js 組好了。但若你不懂「標籤／樹／節點」，後面看到 `page.tsx` 會像天書。

本堂目標：**用最小例子打通觀念**，不是做正式 wiki 頁。

---

## 1. HTML 最小完整模板

在專案外或 `practice/session02/` 建立 `index.html`：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cadture Practice</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1 id="main-title">Cadture</h1>
      <p>VIS iGEM 2026 practice page</p>
    </header>

    <main>
      <h2>The Problem</h2>
      <div class="cards">
        <article class="card" id="card-pb">
          <h3>Lead Pollution</h3>
          <p class="card-text">
            Lead exposure causes serious health risks and accumulates in living organisms.
          </p>
        </article>
        <article class="card" id="card-cd">
          <h3>Cadmium Threat</h3>
          <p class="card-text">
            Cadmium is toxic even at low concentrations and persists in the environment.
          </p>
        </article>
        <article class="card" id="card-water">
          <h3>Wastewater Challenge</h3>
          <p class="card-text">
            Industrial wastewater releases heavy metals that are difficult to remove effectively.
          </p>
        </article>
      </div>

      <p>
        <a href="https://2026.igem.wiki/vis/">Official VIS wiki</a>
      </p>

      <button type="button" id="btn-demo">Highlight cadmium card text</button>
    </main>

    <footer>
      <p>Practice only — not the competition page.</p>
    </footer>

    <script src="main.js"></script>
  </body>
</html>
```

### 標籤意義（必懂）

| 標籤 | 用途 |
|------|------|
| `header` / `main` / `footer` | 語意區塊，方便閱讀與無障礙 |
| `h1`–`h3` | 標題層級，不要跳級亂用 |
| `p` | 段落 |
| `a` | 連結 |
| `button` | 按鈕（給 JS 用） |
| `id="..."` | 給 JS 精準找到「那一個」元素 |

### 驗證

用瀏覽器直接打開 `index.html`（雙擊或拖進瀏覽器）。應看到標題與三張問題卡。

---

## 2. DOM 是什麼？（用樹來想）

瀏覽器讀 HTML 後會建成一棵樹，例如：

```text
body
├── header
│   └── h1#main-title
└── main
    ├── h2
    └── div.cards
        ├── article#card-pb
        ├── article#card-cd
        └── article#card-water
```

**父子關係：** `article` 在 `div.cards` 裡面。  
後面 React/Next 也是在描述這棵樹，只是用元件與資料來產生。

---

## 3. 完整步驟：用 JS 改文字

### 步驟 1：建立 `main.js`（與 html 同資料夾）

```js
// 1) 頁面載入後再找元素較安全
const title = document.querySelector("#main-title");
const btn = document.querySelector("#btn-demo");
const cdText = document.querySelector("#card-cd .card-text");

// 2) 確認有找到（練習除錯）
console.log("title element:", title);
console.log("button element:", btn);

// 3) 點擊按鈕時改鎘那一卡的說明
btn.addEventListener("click", function () {
  cdText.textContent =
    "Cadmium is toxic even at low concentrations and persists in the environment. (Updated by JS)";
  cdText.style.fontWeight = "700";
});
```

### 步驟 2：確認 HTML 有引入 script

```html
<script src="main.js"></script>
```

放在 `</body>` 前（如模板）。

### 步驟 3：打開開發者工具

- macOS Chrome：`Command + Option + J`  
- Windows：`Ctrl + Shift + J`  

應看到 `title element:` 不是 `null`。

### 步驟 4：按按鈕

鎘那一卡文字應改變。

### 若沒反應

| 檢查 | 做法 |
|------|------|
| `null` | id 拼錯，或 script 在元素之前執行 |
| 按鈕沒反應 | 看 Console 有沒有紅字 |
| 改錯卡 | 確認是 `#card-cd .card-text` |

---

## 4. 對照本站（觀念遷移）

| 練習頁 | Cadture 正式站 |
|--------|----------------|
| 三卡文字寫在 HTML | 三卡文字在 `content/home.md` 的 `problems` |
| 自己寫 `main.js` 改字 | 框架負責渲染；你改 md 就會重畫 |
| 一個檔案搞定 | 內容／路由／元件分開，方便多人協作 |

**結論：** 正式站把「內容」抽離，避免每人改 HTML 打架。

---

## 5. 本堂完成檢查表

- [ ] `index.html` 結構完整（有 header/main/footer）  
- [ ] 三張問題卡文案來自官方 Problem 意涵  
- [ ] 按鈕可改鎘卡文字  
- [ ] 能向同學解釋「什麼是 DOM 樹」  

---

## 6. 回家作業

1. 為 Description 頁列出 4–6 個小標（中英文皆可，之後會變英文上站）。  
2. （選做）把三卡 title 放進陣列，嘗試用 JS 迴圈 `createElement` 產生卡片（下堂可問老師）。  

## 7. 下一堂

CSS：讓卡片有圓角、顏色；用 class 當作「狀態」。
