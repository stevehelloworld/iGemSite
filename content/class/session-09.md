---
session: 9
title: "系統層：首頁如何組裝"
subtitle: "home.md 資料 + page.tsx 渲染邏輯 + 官方結構對齊"
duration: "3 小時"
goals:
  - "解釋首頁為何不用 WikiPage 單篇模式"
  - "能修改 YAML 並指認對應 map 區塊"
  - "維護與官方一致的七段資訊架構"
---

## 1. 兩種頁面建造策略

| 策略 | 使用處 | 做法 |
|------|--------|------|
| 文件頁 | description 等 | WikiPage + 一篇 md |
| 行銷／總覽頁 | 首頁 | 結構化資料 + 自訂排版 |

首頁資訊密度高、區塊固定，用 YAML 清單更適合程式迭代 UI。

---

## 2. 官方對齊（再次確認）

https://2026.igem.wiki/vis/ 與本機 `/`：

1. The Problem  
2. Our Solution  
3. Project Highlights  
4. Towards a Sustainable Future  
5. Human Practices  
6. Engineering Cycle  
7. Meet Our Team  

打開 `src/app/page.tsx`，用註解在每個 section 標上 1–7。

---

## 3. 精讀資料：`content/home.md`

關鍵鍵名：

- `problems` / `locations`  
- `solution`  
- `highlights`  
- `sustainable`  
- `humanPractices`  
- `engineering`  
- `teamNote`  

### 實作

在允許下更新一則 `locations` 或 `solution.body`（真實、經確認）。  
**預設不要改 highlights 數字。**

---

## 4. 精讀渲染：`src/app/page.tsx`

搜尋並理解：

```tsx
h.problems.map(...)
h.solution.map(...)
h.highlights.map(...)
h.humanPractices.map(...)
h.engineering.map(...)
```

### 練習題

| 問題 | 答案寫在筆記 |
|------|----------------|
| 五個 solution 步驟的 title 存在哪？ |  |
| 若 YAML 少一筆 solution 會怎樣？ |  |
| Team 區為何幾乎沒有 map？ |  |

---

## 5. 概念：資料與視圖分離

```text
home.md  = 資料 (model)
page.tsx = 視圖 (view)
```

好處：內容編輯少碰排版 code；設計師改排版少碰文案檔。

---

## 6. 里程碑 B

繳交：

1. 更新區塊說明 + 確認人  
2. 首頁截圖  
3. page.tsx 中對應 map 的行號或截圖  
4. 簡述：首頁策略 vs WikiPage 策略差異（≥80 字）  

## 7. 下一堂

表現層：Tailwind 與設計系統——如何讓「做出來的站」有一致品牌。
