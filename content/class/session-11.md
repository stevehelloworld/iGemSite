---
session: 11
title: "總裝：從零組出完整頁面"
subtitle: "內容+結構+系統串接——詳細步驟與除錯劇本"
duration: "3 小時"
goals:
  - "獨立完成 md + page.tsx + nav"
  - "通過除錯三關"
  - "書面解釋三步驟對應三層"
---

## 給老師

- 本堂是硬驗收：做不出三步驟 = 需補課。  
- 建議先全班同步做 `practice-lab`，再允許自訂 slug。  
- 預留 40 分除錯，不要提前進發表。  

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–15 | 三層對照複習 |
| 15–50 | 步驟① md |
| 50–60 | 休息 |
| 60–100 | 步驟② page |
| 100–130 | 步驟③ nav |
| 130–165 | 除錯關 |
| 165–180 | 書面三層解釋 |

## 1. 開始前口頭複習（10 分）

1. 只有 md？  
2. 只有 page？  
3. 有 page+md 沒 nav？  

## 2. 步驟① 內容層（詳細）

### 2.1 建立檔案

`content/pages/practice-lab.md`

### 2.2 最小可用內容

```markdown
---
title: Practice Lab
eyebrow: Course
subtitle: Built in session 11 to prove we can assemble a page.
tone: mint
toc:
  - id: why-this-page
    label: Why
  - id: how-it-is-built
    label: How built
---

## Why this page

This page is a coursework practice page for VIS team wiki training.

## How it is built

1. Markdown file in content/pages
2. Route file in src/app/practice-lab/page.tsx
3. Navigation entry in src/data/nav.ts

The WikiPage component loads this Markdown by slug.
```

### 2.3 驗證內容檔本身

此時可不開瀏覽器，但檔案必須存在且 YAML 合法。

## 3. 步驟② 路由（詳細）

### 3.1 建資料夾

`src/app/practice-lab/`

### 3.2 建 page.tsx

```tsx
import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "Practice Lab",
};

export default function Page() {
  return <WikiPage slug="practice-lab" />;
}
```

### 3.3 驗證

`http://localhost:3000/practice-lab`

### 3.4 若失敗

| 現象 | 查 |
|------|-----|
| Missing content file | slug/檔名 |
| 404 | 資料夾名或 dev 未重載 |
| 編譯錯 | import 路徑、括號 |

## 4. 步驟③ nav（詳細）

在 `nav.ts` 合適 children 加：

```ts
{ label: "Practice Lab", href: "/practice-lab", desc: "Session 11 assembly practice" },
```

驗證：選單可點、手機選單也可。

## 5. 除錯關（必做）

交換電腦破壞：

1. slug 少一個字母  
2. 檔名與資料夾不一致  
3. nav href 錯  

修復者需向破壞者解說。

## 6. 書面題（交）

用表格：

| 步驟 | 檔案路徑 | 對應層 | 若省略會怎樣 |
|------|----------|--------|--------------|
| 1 |  | 內容 |  |
| 2 |  |  |  |
| 3 |  |  |  |

## 7. 完成檢查表（硬性）

- [ ] 三步驟成功  
- [ ] 除錯關通過  
- [ ] 書面題完整  
- [ ] 無假科學宣稱  

## 8. 作業

英文精修 How it is built；選做 code review 他組。  
下一堂：產品品質。
