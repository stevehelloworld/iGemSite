---
session: 10
title: "表現層：設計系統與 Tailwind"
subtitle: "在可維護的前提下打造一致 UI"
duration: "3 小時"
goals:
  - "能解讀並小改 Tailwind class"
  - "能說明 token / 元件 / 頁面樣式的分工"
  - "完成 RWD 檢查"
---

## 1. 做出網站的外觀層

好的站 = 正確內容 + 清楚結構 + **可維護的外觀系統**。

本站：

- 色票 token：`globals.css`  
- 元件樣式：各 component 的 className  
- 工具 class：Tailwind  

---

## 2. 完整練習：拆解一行 class

從 `page.tsx` 複製一行 `className="..."`，做成表格：

| token | 意義猜測 | 驗證方式 |
|-------|----------|----------|
|  |  | 改一下看 diff |

---

## 3. 完整練習：安全視覺改動

只允許：

- 間距 `p-` `m-` `gap-` `py-`  
- 對齊 `text-center` / `items-center`  
- 既有色名 `text-primary`  

禁止：引入高飽和亂色、刪除全站 layout 樣式。

改完前後截圖。

---

## 4. RWD 完整步驟

1. DevTools 裝置模式  
2. 檢查首頁 Problem 三卡  
3. 檢查選單  
4. 記錄 1 個問題（若無寫「無明顯問題」）  

---

## 5. 設計系統文件

閱讀 `DESIGN.md` 色票與原則，回答：

- 主色是什麼？  
- 為什麼內文不要用淺灰配淺底？  

---

## 6. 作業 #3

為負責頁選 `tone` 並在 md front matter 設定，寫 3 句理由。  

## 7. 下一堂

**總驗收建造能力：** 新增完整頁面（你正在組裝一個迷你功能）。
