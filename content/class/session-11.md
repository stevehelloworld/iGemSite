---
session: 11
title: "新增完整一頁"
subtitle: "md + page.tsx + nav 三步驟"
duration: "3 小時"
goals:
  - "獨立完成新增一頁"
  - "三處名稱一致"
  - "會查常見錯誤"
---

## 三步驟
1. `content/pages/my-page.md`
2. `src/app/my-page/page.tsx`（`slug` 要一樣）
3. `src/data/nav.ts` 加一筆

詳見：`docs/curriculum/handouts/11-add-page-steps.md`

## 常見錯誤
- 檔名是 `my-page` 但 slug 寫 `mypage`
- `href` 忘了前面的 `/`
- 物件陣列漏逗號

## 完成了再走
- [ ] `/my-page` 打得開
- [ ] 選單點得到
