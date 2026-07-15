---
session: 1
title: "專案啟動與網站全貌"
subtitle: "跑起來、看懂目錄、建立三層心智模型（放慢版）"
duration: "3 小時"
goals:
  - "成功啟動專案並排除至少一種常見錯誤"
  - "畫出內容／結構／系統三層圖"
  - "對照官方站完成七段首頁檢查表"
  - "用 JS 物件描述一筆選單資料"
---

## 給老師：本堂容易講太快的地方

- 「npm install 等它跑完」期間請安排：看官方站、填對照表，不要乾等。  
- 資料夾地圖請**逐層點開**，每層問「這層壞了會怎樣？」  
- JS 暖身至少 20 分，讓慢的學生也打出物件。  

---

## 0. 分鐘表（請投影）

| 分鐘 | 做什麼 | 產出 |
|------|--------|------|
| 0–15 | 破冰：你心目中「會做網站」是什麼 | 便利貼 1 張 |
| 15–35 | 課程目標與三層模型導讀 | 筆記本中央圖 |
| 35–75 | 安裝與啟動（巡堂） | localhost 截圖 |
| 75–85 | 休息 |  |
| 85–120 | 官方站 vs 本站首頁七段 | 對照表填完 |
| 120–150 | 資料夾地圖導覽 + 問答 | 樹狀圖 |
| 150–170 | JS 物件練習 | 小程式可跑 |
| 170–180 | 檢查表、作業 | 勾完 |

---

## 1. 開場討論（15 分）— 老師引導語

> 問題 1：做一個「會改文字的網頁」和「理解網站怎麼做」差在哪？  
> 問題 2：如果只有一個人會改 code，iGEM 衝刺期會發生什麼事？

請 2–3 組分享。老師總結：本課要培養**可交接的建造能力**。

---

## 2. 我們要做的網站是什麼？（10 分）

### 2.1 專案事實（請學生抄）

| 項目 | 內容 |
|------|------|
| 隊伍 | VIS iGEM 2026 · 6423 |
| 專案名 | Cadture |
| 主題 | Pb、Cd 與廢水 |
| 官方站 | https://2026.igem.wiki/vis/ |
| 本專案 | 可教學、可維護的實作站 |

### 2.2 兩個網址

| | 官方站 | 本機站 |
|--|--------|--------|
| 網址 | 2026.igem.wiki/vis | localhost:3000 |
| 角色 | 內容基準、線上版 | 學習建造與日常改稿 |
| 今天 | 對照 | 必須跑起來 |

**停下來確認：** 抽問「內容要以誰為準？」→ 官方 + 隊上確認。

---

## 3. 完整步驟：啟動專案（放慢，逐步勾）

### 步驟 1｜檢查 Node（每人）

```bash
node -v
npm -v
```

- 成功：出現 `v18`/`v20`/`v22` 之類  
- 失敗：安裝 Node LTS → **關掉終端機重開** → 再打一次  

老師巡堂：看到紅字先別急著幫打指令，讓學生念出錯誤第一行。

### 步驟 2｜進入專案根目錄

```bash
pwd
ls
```

必須看得到 `package.json`、`src`、`content`。  
若沒有：`cd` 進錯層了。

### 步驟 3｜安裝依賴

```bash
npm install
```

**期間任務（寫在黑板上）：**  
打開官方站，開始填第 4 節對照表前半。

### 步驟 4｜啟動開發伺服器

```bash
npm run dev
```

看到 `Local: http://localhost:3000` 之類訊息。

### 步驟 5｜瀏覽器驗證清單

請學生逐項打勾：

- [ ] 標題有 Cadture  
- [ ] 有 The Problem 區塊  
- [ ] 有 Our Solution 五步  
- [ ] 上方選單有 Project / Wet Lab 等  
- [ ] 有 Course 可進教材  

### 步驟 6｜失敗劇本演練（全班一起看一種）

老師可示範或口述：

| 錯誤訊息關鍵字 | 原因 | 學生動作 |
|----------------|------|----------|
| `command not found` | 沒裝 Node／PATH | 重裝、重開終端 |
| `ENOENT package.json` | 目錄錯 | `cd` 到有 package.json |
| `EADDRINUSE 3000` | port 占用 | 換 3001 或關掉舊 process |
| install 權限 | 環境限制 | 換路徑、問老師 |

---

## 4. 官方站對照（放慢 35 分）

### 4.1 並排視窗

左：官方 https://2026.igem.wiki/vis/  
右：localhost:3000  

### 4.2 七段順序（一起念兩次）

1. The Problem  
2. Our Solution  
3. Project Highlights  
4. Towards a Sustainable Future  
5. Human Practices  
6. Engineering Cycle  
7. Meet Our Team  

### 4.3 填表（每人）

| # | 區塊 | 官方有無 | 本機有無 | 一句英文關鍵句（抄） |
|---|------|----------|----------|----------------------|
| 1 | Problem |  |  |  |
| 2 | Solution |  |  |  |
| 3 | Highlights |  |  |  |
| 4 | Sustainable |  |  |  |
| 5 | HP |  |  |  |
| 6 | Engineering |  |  |  |
| 7 | Team |  |  |  |

### 4.4 討論題（5 分）

「本機視覺比較可愛，能不能改掉官方的 Solution 五步名稱？」  
引導：可以討論 UI，但**故事骨架與宣稱**要對齊／經確認。

---

## 5. 資料夾地圖（逐層，25 分）

老師每開一層就問：

### 5.1 `content/`

> 這裡全刪會怎樣？→ 頁面沒字或爆錯，但路由殼可能還在。

### 5.2 `src/app/`

> 這裡的資料夾名跟網址什麼關係？→ 幾乎一一對應。

### 5.3 `src/components/`

> 像樂高積木；Navbar 壞了會怎樣？→ 可能全站沒選單。

### 5.4 `src/data/nav.ts`

> 這是資料不是畫面；改這裡選單文字會變。

### 5.5 `src/lib/content.ts`

> 讀 md 的橋樑——第 8 次會拆。

### 5.6 學生作業：畫樹

限時 8 分，畫出至少：

```text
iGemSite
├── content
├── src/app
├── src/components
└── src/data
```

並在旁邊標：內容 / 結構 / 系統。

---

## 6. JS 暖身：選單物件（20–25 分）

### 6.1 為什麼現在練？

因為第 7 次要改真的 `nav.ts`，結構一模一樣。

### 6.2 完整程式（請學生手打）

`practice/session01-nav.js`：

```js
// 一筆選單 = 一個物件
const descriptionItem = {
  label: "Description",
  href: "/description",
  desc: "Background and problem",
};

// 多筆 = 陣列
const projectChildren = [
  descriptionItem,
  {
    label: "Engineering",
    href: "/engineering",
    desc: "Design → Build → Test → Learn",
  },
  {
    label: "Results",
    href: "/results",
    desc: "Experimental results",
  },
];

// 掃過每一筆（之後 React 的 map 很像這個）
for (let i = 0; i < projectChildren.length; i++) {
  const item = projectChildren[i];
  console.log(i + 1, item.label, "→", item.href);
}

// 進階一點：用 for...of
console.log("---");
for (const item of projectChildren) {
  console.log(item.label + ": " + item.desc);
}
```

```bash
node practice/session01-nav.js
```

### 6.3 延伸（進度快的人）

把 `projectChildren` 改成函式 `printMenu(items)` 包起來再呼叫。

### 6.4 停下來確認

抽問：`href` 是什麼？少了會怎樣？`desc` 給誰看？

---

## 7. 本堂完成檢查表（下課前 10 分互查）

- [ ] node/npm 有版本  
- [ ] 首頁截圖已交  
- [ ] 七段對照表填完  
- [ ] 三層圖有畫  
- [ ] nav 小程式有跑出輸出  
- [ ] 能用一句話說 content 與 app 差別  

## 8. 回家作業（寫清楚截止）

1. **必做：** 150 字：「這個網站不是單一 HTML 檔，而是……」  
2. **必做：** 背七段首頁順序（下堂抽背）  
3. **必做：** 讀 `/class/how-to-edit` 課程總覽  
4. **選做：** 為 5 個內頁寫「網址 ↔ 你猜的資料夾」  

## 9. 下一堂預告（留 2 分）

我們會做出「會動的 HTML 樹」，因為 React 元件本質是在描述那棵樹。
