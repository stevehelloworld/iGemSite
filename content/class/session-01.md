---
session: 1
title: "專案啟動與網站全貌"
subtitle: "跑起來、看懂目錄、建立『這個站怎麼組成』的心智模型"
duration: "3 小時"
goals:
  - "成功啟動本專案並對照官方站"
  - "畫出三層模型：內容／結構／系統"
  - "用物件描述選單資料（銜接 JS）"
---

## 本堂在整學期的位置

本堂結束後，你不是「會開網頁的人」，而是開始成為「**能說出這個網站由哪些零件組成**」的人。

---

## 0. 時間配置（3 小時）

| 時間 | 活動 |
|------|------|
| 0:00–0:25 | 課程目標：做出／理解網站，不是只會改字 |
| 0:25–1:05 | 環境架設與啟動 |
| 1:05–1:15 | 休息 |
| 1:15–2:00 | 官方站 vs 本站、首頁七段結構 |
| 2:00–2:35 | 資料夾地圖 + 三層模型 |
| 2:35–2:55 | JS 物件暖身 |
| 2:55–3:00 | 檢查表與作業 |

---

## 1. 我們到底要學會什麼？

### 1.1 錯誤期待 vs 正確期待

| 不夠 | 本課程要的 |
|------|------------|
| 只會改 Markdown | 知道 md 如何被讀進頁面 |
| 只會複製貼上 | 能解釋路由、元件、資料流 |
| 怕看 code | 能讀 10–30 行關鍵檔並小改 |

### 1.2 成品定義（VIS Cadture Wiki）

- 技術棧：Next.js App Router + React + Markdown 內容  
- 專案：Cadture（Pb / Cd）  
- 官方內容基準：https://2026.igem.wiki/vis/  
- 本 repo：可教學、可維護、可擴充的實作站  

---

## 2. 完整步驟：啟動專案

### 2.1 檢查 Node

```bash
node -v
npm -v
```

兩者都要有版本號。

### 2.2 進入專案

```bash
cd 路徑/iGemSite
```

確認此目錄有 `package.json`。

### 2.3 安裝依賴（每台電腦第一次）

```bash
npm install
```

### 2.4 開發模式啟動

```bash
npm run dev
```

瀏覽器開啟：`http://localhost:3000`

### 2.5 成功標準

- 看到標題 Cadture  
- 上方有選單（含 **Course**）  
- 終端機顯示 Ready  

### 2.6 失敗排查

| 現象 | 處理 |
|------|------|
| 找不到 npm | 重裝 Node、重開終端機 |
| 找不到 package.json | cd 錯目錄 |
| 3000 被占用 | `npm run dev -- -p 3001` |
| install 紅字 | 截圖全文給老師 |

---

## 3. 對照官方站：內容基準

打開 https://2026.igem.wiki/vis/ ，與本機首頁並排。

### 首頁七段（必須能背順序）

1. The Problem（Pb / Cd / Wastewater + 桃園／台中／高雄）  
2. Our Solution（Detection → Capture → Sequestration → Removal → Clean Water）  
3. Project Highlights（90% / 75% / 500+ / 12）  
4. Towards a Sustainable Future  
5. Human Practices（Listen / Integrate / Impact）  
6. Engineering Cycle（Design → Build → Test → Learn）  
7. Meet Our Team  

**設計可以不同，故事順序與宣稱應對齊官方。**

### 課堂記錄表

| 區塊 | 官方有？ | 本機有？ | 文案是否一致？ |
|------|----------|----------|----------------|
| The Problem |  |  |  |
| Our Solution |  |  |  |
| Highlights |  |  |  |
| HP |  |  |  |
| Engineering |  |  |  |
| Team |  |  |  |

---

## 4. 資料夾 = 建築圖（系統思維）

請在 VS Code 點開並在筆記畫樹狀圖：

```text
iGemSite/
├── content/          ← 內容層：人寫的字
│   ├── home.md
│   ├── pages/        ← 每個內頁一篇 md
│   └── class/        ← 你正在讀的教材
├── src/
│   ├── app/          ← 結構層：網址
│   ├── components/   ← 系統層：UI 積木
│   ├── data/nav.ts   ← 結構層：選單資料
│   └── lib/content.ts← 系統層：讀 md 的橋
├── public/           ← 靜態檔（圖等）
└── package.json      ← 指令與依賴
```

### 三層模型（畫在筆記本中央）

```text
內容 Content  →  content/*.md
結構 Structure→  app 路由 + nav
系統 System   →  元件 + 讀檔 + 建置
```

課堂口頭檢查：隨機抽問「改選單文字碰哪一層？」

---

## 5. 點開幾個真實頁，建立「檔案↔網址」直覺

| 你點的網址 | 猜對應資料夾 | 猜對應 md（若有） |
|------------|--------------|-------------------|
| /description | src/app/description | content/pages/description.md |
| /engineering | | |
| /class | src/app/class | content/class/... |
| / | src/app/page.tsx | content/home.md |

---

## 6. JS 暖身：選單就是資料

建立 `practice/s01-nav.js`：

```js
const navItem = {
  label: "Engineering",
  href: "/engineering",
  desc: "Design → Build → Test → Learn",
};

const projectChildren = [
  navItem,
  { label: "Results", href: "/results", desc: "Experimental results" },
];

function printMenu(items) {
  for (const item of items) {
    console.log(item.label, "=>", item.href);
  }
}

printMenu(projectChildren);
```

```bash
node practice/s01-nav.js
```

**連結：** 第 7 次會改真正的 `src/data/nav.ts`，結構相同。

---

## 7. 本堂完成檢查表

- [ ] 本機首頁可開  
- [ ] 填完官方對照表  
- [ ] 筆記本有三層模型圖  
- [ ] 能說出 content / app / components 各負責什麼  
- [ ] 跑過 nav 物件小程式  

## 8. 回家作業

1. 用自己的話寫 150 字：「這個網站不是一個 HTML 檔，而是……」  
2. 背首頁七段順序  
3. 閱讀 `/class/how-to-edit` 的「課程總覽」  

## 9. 下一堂

HTML/DOM：理解「畫面是樹」，為元件打底——這是**建造**網站的基礎，不是倒退。
