---
session: 11
title: "新增完整一頁（核心驗收）"
subtitle: "md + page.tsx + nav 三步驟，含除錯流程"
duration: "3 小時"
goals:
  - "能獨立新增一頁並在瀏覽器開啟"
  - "三處命名一致"
  - "能排查 404 與編譯錯誤"
---

## 1. 你要完成的三件事

| 步驟 | 檔案 | 作用 |
|------|------|------|
| ① 內容 | `content/pages/<slug>.md` | 文章 |
| ② 路由 | `src/app/<slug>/page.tsx` | 讓網址存在 |
| ③ 選單 | `src/data/nav.ts` | 讓人點得到 |

**`<slug>` 三處必須相同**，例如一律 `lab-log`：

- 檔名 `lab-log.md`  
- 資料夾 `src/app/lab-log/`  
- `slug="lab-log"`  
- `href: "/lab-log"`  

---

## 2. 命名建議

- 只用小寫英文、數字、連字號 `-`  
- 好：`safety-notes`、`outreach-2026`  
- 壞：`我的頁面`、`Lab Log`、`lab_log`（底線易混）

本堂若只是練習，可用：`practice-lab`  
若要正式頁，優先填官方已有路徑的內容，而不是無限開新網址。

---

## 3. 完整步驟①：建立 Markdown

### 步驟 1.1
在 `content/pages/` 新增檔案 `practice-lab.md`。

### 步驟 1.2
貼上：

```markdown
---
title: Practice Lab
eyebrow: Course
subtitle: A practice page created in session 11.
tone: mint
toc:
  - id: overview
    label: Overview
  - id: checklist
    label: Checklist
---

## Overview

This page was created by our team to practice the full add-a-page workflow.

We will use English on wiki pages and keep experimental claims honest.

## Checklist

- Content file created
- Route file created
- Navigation link added
```

### 步驟 1.3
存檔。此時若直接開 `/practice-lab` 通常會 **404**（還沒路由），這是正常的。

---

## 4. 完整步驟②：建立路由 page.tsx

### 步驟 2.1
建立資料夾：`src/app/practice-lab/`

### 步驟 2.2
在該資料夾新增 `page.tsx`，貼上：

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

### 步驟 2.3
存檔。確認 `npm run dev` 沒有紅字。

### 步驟 2.4
瀏覽器開：

```text
http://localhost:3000/practice-lab
```

應看到 Practice Lab 頁面與正文。

### 若錯誤

| 訊息／現象 | 處理 |
|------------|------|
| Missing content file ... practice-lab.md | 檔名或 slug 不一致 |
| 編譯失敗 | 檢查 import 路徑、括號 |
| 空白怪怪的 | 看 md front matter 是否完整 |

---

## 5. 完整步驟③：加入導覽

### 步驟 3.1
打開 `src/data/nav.ts`。

### 步驟 3.2
在合適的 `children` 陣列加入（記得逗號），例如 Team 下：

```ts
{ label: "Practice Lab", href: "/practice-lab", desc: "Session 11 practice page" },
```

### 步驟 3.3
存檔 → 重新整理 → 用選單點進去。

### 步驟 3.4
手機寬再點一次選單，確認也看得到。

---

## 6. 除錯劇本（課堂必做）

教師或同學互相出題，另一方修復：

1. 把 slug 改錯一個字母 → 觀察錯誤 → 修好  
2. 拿掉 nav 物件前一個逗號 → 觀察編譯錯 → 修好  
3. href 写成 `practice-lab`（少 `/`）→ 觀察行為 → 修好  

每修一次，寫下「錯誤長相」與「解法」一行。

---

## 7. 完成檢查表（本堂驗收）

- [ ] `/practice-lab` 或正式 slug 可開  
- [ ] 選單可達  
- [ ] md / page / nav 三處命名一致  
- [ ] 英文無假數據  
- [ ] 能回答：只建 md 不做 page 會怎樣？  

## 8. 回家

1. 英文再修一輪（请同学试读）  
2. （選做）幫另一組 code review：只找命名不一致  

## 9. 下一堂

圖片、alt、英文科學寫作句型。
