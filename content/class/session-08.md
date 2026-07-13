---
session: 8
title: "元件與 Markdown 管線"
subtitle: "說得出 md 怎麼變成網頁"
duration: "3 小時"
goals:
  - "口述 content → WikiPage → 畫面"
  - "知道 props 像函式參數"
  - "在 md 加表格或連結"
---

## 資料流（背起來）
1. 編輯 `content/pages/某頁.md`
2. `getPageBySlug("某頁")`（`src/lib/content.ts`）
3. `WikiPage` 讀 title 與正文
4. `MarkdownBody` 把 Markdown 變成 HTML
5. `src/app/某頁/page.tsx` 對應網址

## 動手
- 在自己的 md 加一個表格或連結，確認有渲染

## 講義
`docs/curriculum/handouts/08-data-flow.md`
