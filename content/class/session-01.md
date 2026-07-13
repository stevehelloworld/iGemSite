---
session: 1
title: "認識 Wiki 與開發環境"
subtitle: "為什麼做 Team Wiki、架好工具、第一次跑起 Cadture"
duration: "3 小時"
goals:
  - "能用自己的話說出 iGEM Team Wiki 是做什麼的"
  - "完成本機啟動（npm install / npm run dev）"
  - "對照官方站與本專案的章節架構"
  - "用物件概念理解選單資料（銜接已學 JS）"
---

## 0. 本堂時間建議（3 小時）

| 時段 | 內容 |
|------|------|
| 0:00–0:20 | 為什麼做 wiki、看官方站 |
| 0:20–0:50 | 安裝／啟動環境（教師巡堂） |
| 0:50–1:00 | 休息 |
| 1:00–1:40 | 站點導覽 + 資料夾地圖 |
| 1:40–2:20 | JS 暖身：物件與陣列 |
| 2:20–2:50 | 完成檢查表、截圖、互助 |
| 2:50–3:00 | 回家作業說明 |

---

## 1. 為什麼我們要做這個網站？

### 1.1 iGEM 的 Team Wiki 是什麼？

iGEM 是國際合成生物學競賽。每個隊伍除了做實驗，還要公開一份 **Team Wiki**，讓評審與未來隊伍看懂：

- 你們在解決什麼問題  
- 怎麼設計、實驗、改進  
- 社會與安全考量  
- 誰做了什麼（Attributions）  

VIS 2026 專案名稱是 **Cadture**，主題與 **鉛（Pb）、鎘（Cd）** 廢水污染相關。

### 1.2 兩個網址，請分清楚

| 網址 | 角色 |
|------|------|
| https://2026.igem.wiki/vis/ | **目前官方線上版**（內容基準） |
| 本專案 `localhost:3000` | **你們要學著維護的站**（學生友善、可用 Markdown 改） |

評審與封存最終仍要符合 iGEM 規定並部署到官方基礎建設；本課先把**內容與架構**做對、做熟。

### 1.3 看官方站 10 分鐘（請實際點）

請打開官方首頁，找到這些區塊（由上到下）：

1. **The Problem**（Pb / Cd / Wastewater + 台灣地點）  
2. **Our Solution**（Detection → Capture → Sequestration → Removal → Clean Water）  
3. **Project Highlights**（數字）  
4. **Towards a Sustainable Future**  
5. **Human Practices**（Listen / Integrate / Impact）  
6. **Engineering Cycle**（Design → Build → Test → Learn）  
7. **Meet Our Team**  

本專案首頁已對齊此順序與文案。之後你改首頁時，**不要打亂這個故事結構**。

---

## 2. 完整步驟：第一次在自己的電腦跑起網站

### 步驟 A：確認工具

1. 安裝 **VS Code**。  
2. 安裝 **Node.js LTS**。  
3. 終端機執行：

```bash
node -v
npm -v
```

兩個都要出現版本號。

### 步驟 B：取得專案

若使用 GitHub：

```bash
git clone https://github.com/stevehelloworld/iGemSite.git
cd iGemSite
```

若老師發資料夾：解壓後在終端機 `cd` 進該資料夾。

### 步驟 C：安裝套件

```bash
npm install
```

第一次可能要幾分鐘。成功後會有 `node_modules` 資料夾（不要手動亂改裡面的檔）。

### 步驟 D：啟動

```bash
npm run dev
```

瀏覽器開：

```text
http://localhost:3000
```

### 步驟 E：驗證成功

你應該看到：

- 標題 **Cadture**  
- 區塊 **The Problem**  
- 上方有選單（Team / Project / Wet Lab…）  
- 選單有 **Course**（課堂教材）

請截圖：終端機 Ready + 瀏覽器首頁，交給老師。

### 失敗時怎麼辦？

| 狀況 | 處理 |
|------|------|
| `command not found: npm` | Node 未裝好或未重開終端機 |
| `ENOENT` / 找不到 package.json | 你不在專案根目錄，先 `cd` |
| Port 3000 occupied | 關掉其他 dev，或 `npm run dev -- -p 3001` |
| 權限錯誤 | 換路徑（避免奇怪權限資料夾）、問老師 |

---

## 3. 本專案資料夾地圖（請跟著作記號）

在 VS Code 左側展開，找到：

```text
iGemSite/
├── content/           ← 文字（.md）
│   ├── home.md        ← 首頁資料
│   ├── pages/         ← 各內頁
│   └── class/         ← 你現在讀的課堂說明
├── src/
│   ├── app/           ← 每個資料夾 ≈ 一個網址
│   ├── components/    ← UI 積木
│   ├── data/nav.ts    ← 選單
│   └── lib/content.ts ← 讀取 Markdown 的程式
├── docs/              ← 老師文件、完整教案
└── package.json       ← 專案設定與指令
```

**口訣：**

- 改**故事與說明** → `content/`  
- 改**網址結構** → `src/app/`  
- 改**選單** → `src/data/nav.ts`  

---

## 4. 站點導覽實作（必做）

在 `localhost:3000` 依序點開並寫下「這頁在講什麼」（中文一句即可）：

| 網址 | 我的一句話摘要 |
|------|----------------|
| `/description` |  |
| `/engineering` |  |
| `/human-practices` |  |
| `/team` |  |
| `/class` | 課堂課表 |

---

## 5. JS 暖身（你會一點點就夠）

選單資料本質是「物件」。在終端機開 `node` 互動，或新建練習檔 `practice/session01.js`：

```js
const item = {
  label: "Description",
  href: "/description",
  desc: "Background and problem",
};

const menu = [
  item,
  { label: "Team", href: "/team", desc: "Meet the team" },
];

console.log(menu[0].label);
console.log(menu.length);
```

執行：

```bash
node practice/session01.js
```

你應看到：

```text
Description
2
```

**連結到本站：** `src/data/nav.ts` 裡就是一堆這種物件組成的陣列（第 7 次會改它）。

---

## 6. 本堂完成檢查表

- [ ] `node -v` 有版本  
- [ ] `npm install` 成功  
- [ ] `npm run dev` 能開首頁  
- [ ] 對照過官方站首頁七大區塊  
- [ ] 填完導覽摘要表  
- [ ] （建議）跑過物件／陣列小練習  

---

## 7. 回家作業

1. 讀 `/class/how-to-edit`（或本站「如何改網站文字」）。  
2. 中文半頁：這個 wiki 的讀者是誰？他們看完應該懂什麼？  
3. （選做）用 JS 寫 3 筆 nav 風格物件放在陣列裡。  

---

## 8. 下一堂預告

第 2 次：HTML 結構 + 一點 JS 改畫面文字，理解「樹狀 DOM」。
