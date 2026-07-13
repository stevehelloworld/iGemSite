---
session: 7
title: "選單與 nav.ts 物件"
subtitle: "新增一筆選單資料"
duration: "3 小時"
goals:
  - "讀懂 nav 物件與 children 陣列"
  - "成功改 nav 並在畫面驗證"
  - "知道 Standard 路徑不能亂改名"
---

## 檔案
`src/data/nav.ts`

一筆選單很像：
```js
{ label: "Description", href: "/description", desc: "..." }
```

## 動手
1. 改某一頁的 `desc` 英文
2. 或新增一筆連到既有頁（注意逗號）
3. 重新整理，看上方選單

## 不能亂改的路徑（競賽）
`/attributions` `/contribution` `/engineering` `/human-practices`

## 完成了再走
- [ ] 畫面上看得到你的改動
