---
session: 11
title: "總裝：從零組出一個完整頁面"
subtitle: "內容+結構+系統串起來——證明你會『做』不只會『改』"
duration: "3 小時"
goals:
  - "獨立完成 md + page + nav"
  - "能診斷命名不一致與編譯錯誤"
  - "能向他人說明三步驟各自對應哪一層"
---

## 1. 驗收題意

做出一個可訪問頁面，並解釋：

| 步驟 | 層級 |
|------|------|
| md | 內容層 |
| page.tsx | 結構層（路由）+ 接到系統層 WikiPage |
| nav | 結構層（導覽資料） |

---

## 2. 完整步驟（以 `practice-lab` 為例）

### A. 內容層

建立 `content/pages/practice-lab.md`（含 front matter + 英文說明本頁是課程練習、資料流一句話）。

### B. 結構／系統層路由

`src/app/practice-lab/page.tsx`：

```tsx
import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = { title: "Practice Lab" };

export default function Page() {
  return <WikiPage slug="practice-lab" />;
}
```

驗證：`/practice-lab` 可開。

### C. 導覽資料

`nav.ts` 加入一筆 `{ label, href: "/practice-lab", desc }`。

驗證：選單可點。

### D. 自測提問（寫下答案）

1. 為什麼需要 page.tsx？只有 md 夠嗎？  
2. 為什麼需要 nav？只有直接打網址夠嗎？  
3. slug 與檔名不同會在哪一步爆掉？  

---

## 3. 除錯工作坊

互相植入錯誤再修復，記錄「症狀→原因→修復」。

---

## 4. 加分題（會一點 JS）

在 practice-lab.md 寫一節 **How this page is built**（英文），用自己的話寫資料流。

---

## 5. 完成檢查表（本課硬性）

- [ ] 三檔齊備  
- [ ] 畫面與選單皆通  
- [ ] 能回答 D 的三題  
- [ ] 無假科學數據  

## 6. 下一堂

產品品質：圖、寫作、可信度。
