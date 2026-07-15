---
session: 0
title: "課程總覽：我們要學會『做出這個網站』"
subtitle: "不只改文字——理解架構、動手組裝、最後能維護與擴充 Cadture Wiki"
duration: "整學期地圖"
goals:
  - "說出本課程的三層能力：內容／結構／系統"
  - "知道 14 次課如何從『會用』走到『會做』"
  - "能指出本站關鍵資料夾與責任"
---

## 這門課要培養什麼人？

**不是**只會打開 Markdown 改幾個字的「填空員」。  
**是**能理解 Cadture Team Wiki **怎麼做出來**，並能：

1. **說明**網站各層在做什麼（給同學／評審／指導教師聽得懂）  
2. **維護**內容與結構（md、路由、選單）  
3. **擴充**新頁、小改元件與樣式  
4. **除錯**常見錯誤（路徑不一致、build 失敗、選單壞掉）  
5. **對齊** iGEM 規則與官方內容基準  

你會一點 JS——這門課會把那一點接上真正的網站工程。

---

## 三層能力模型（整學期都圍繞這個）

```text
┌─────────────────────────────────────────┐
│  系統層 System                            │
│  Next.js 路由、元件、資料流、build、部署概念   │
├─────────────────────────────────────────┤
│  結構層 Structure                         │
│  網址設計、nav、新增頁三步驟、首頁資料綁定     │
├─────────────────────────────────────────┤
│  內容層 Content                           │
│  Markdown / 英文 wiki / 誠信 / 官方對齊      │
└─────────────────────────────────────────┘
```

| 層級 | 你要能回答 | 主要檔案 |
|------|------------|----------|
| 內容 | 這段英文從哪個檔來的？ | `content/**/*.md` |
| 結構 | 為什麼這個網址存在？選單為何出現？ | `src/app/**`、`nav.ts` |
| 系統 | 點開網頁時程式如何把 md 變成 HTML？ | `lib/content.ts`、`WikiPage`、`MarkdownBody`、`layout` |

**Markdown 編輯是內容層技能，只佔課程一部分。**  
若只會改 md、說不出資料流，本課程尚未過關。

---

## 本站是怎麼「做出來」的？（先建立全貌）

### 1. 用什麼技術？

| 技術 | 在本站的角色 |
|------|----------------|
| **Next.js（App Router）** | 網站框架：資料夾 = 網址 |
| **React** | 用「元件函式」描述畫面 |
| **TypeScript** | JS + 型別提示（先會看） |
| **Tailwind CSS** | 用 class 字串控制樣式 |
| **Markdown + gray-matter** | 內容與設定寫在 md 檔 |
| **react-markdown** | 把 md 字串渲染成 HTML |

### 2. 一次請求大致發生什麼？

以開啟 `/engineering` 為例：

```text
瀏覽器請求 /engineering
    → Next 找到 src/app/engineering/page.tsx
    → Page() 執行 <WikiPage slug="engineering" />
    → getPageBySlug("engineering") 讀 content/pages/engineering.md
    → 拆成 frontmatter（標題等）+ body（正文）
    → PageHero 顯示標題區
    → MarkdownBody 把 body 渲染成文章 HTML
    → layout.tsx 外層已有 Navbar / Footer
    → 完整頁面送回瀏覽器
```

你必須能**自己講一遍**這段（第 6–8 次會練到會講）。

### 3. 首頁比較特別

首頁不是只用一篇長 md 灌滿：

- **資料**：`content/home.md` 的 YAML（problems、solution、highlights…）  
- **排版**：`src/app/page.tsx` 用 `.map` 把陣列畫成區塊  

順序對齊官方：https://2026.igem.wiki/vis/  
Problem → Solution → Highlights → Sustainable → HP → Engineering → Team  

---

## 14 次完整學習路徑（從用到做）

| 階段 | 次 | 你學會 |
|------|----|--------|
| **奠基** | 1 | 跑起專案、對照官方、資料夾地圖、JS 物件暖身 |
| | 2 | HTML／DOM：畫面是樹；為「元件描述樹」打底 |
| | 3 | CSS／class 狀態；為 Tailwind className 打底 |
| **內容** | 4 | Markdown 管線實作（內容層） |
| | 5 | Git 協作 + 誠信（工程文化） |
| **系統** | 6 | 路由與 page.tsx：網址如何誕生 |
| | 7 | nav.ts：用資料驅動選單 |
| | 8 | 元件與完整資料流（系統層核心） |
| | 9 | 首頁：資料檔 + 渲染程式如何分工 |
| **打造** | 10 | 設計系統與 Tailwind（表現層） |
| | 11 | **自己組一頁**：md + 路由 + nav（驗收） |
| | 12 | 媒體、寫作、好讀（產品品質） |
| | 13 | build、檢查、iGEM／上線概念 |
| | 14 | 發表：證明你理解「網站怎麼做的」 |

第 14 次發表**必須**包含：資料流口述 + 示範改內容 + 示範結構／系統其中一項。

---

## 過關標準（學期結束）

你應能獨立完成：

1. 啟動專案並解釋三個資料夾用途  
2. 修改一頁 md 並驗證  
3. 新增一頁（三步驟）並解釋為何需要三步  
4. 在 `page.tsx` / `nav.ts` / `WikiPage` 指認關鍵程式  
5. 口述 `/engineering` 從請求到畫面的流程  
6. 說明首頁 YAML 與 `.map` 的關係  
7. 跑 `npm run build` 並處理或回報錯誤  
8. 遵守內容誠信與官方對齊  

**只會改 md 而未達 4–6 → 未完整通過本課程。**

---

## 日常速查：改文字（內容層）

仍很重要，但是「會做網站」的一環：

| 網址 | 檔案 |
|------|------|
| `/` | `content/home.md` |
| `/description` | `content/pages/description.md` |
| 其他內頁 | `content/pages/<同名>.md` |

```bash
npm run dev
# 改檔 → 存檔 → 重新整理瀏覽器
```

詳見各次課；需要逐步截圖級說明時以第 4 次教材為主。

---

## 給上課的你

1. 左開 `/class/session-XX` 教材  
2. 右開編輯器 + 瀏覽器  
3. **照步驟做**，不要只滑過  
4. 每堂結束勾檢查表；說不出「為什麼」就再讀系統段  

老師備課細節：`docs/curriculum/LESSON_PLAN_14.md`
