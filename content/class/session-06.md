---
session: 6
title: "從 JS 到 TSX、Next 路由"
subtitle: "page.tsx 像會回傳畫面的 function"
duration: "3 小時"
goals:
  - "知道資料夾對應網址"
  - "讀得懂精簡 page.tsx"
  - "分得出路由檔與內容檔"
---

## 規則
`src/app/engineering/page.tsx` → 網址 `/engineering`

## 對照你會的 JS
```tsx
export default function Page() {
  return <WikiPage slug="engineering" />;
}
```
- `function` → 元件  
- `return` → 回傳畫面（JSX，長得像 HTML）  
- `slug="..."` → 像函式參數  

## 動手
1. 配對 5 組「網址 ↔ 資料夾」
2. 打開任一 `page.tsx`，用註解標：import／function／slug

## 講義
課堂頁也有速查；repo：`docs/curriculum/handouts/06-js-to-tsx.md`
