---
session: 7
title: "結構層：資料驅動的導覽"
subtitle: "nav.ts + Navbar 渲染——把物件變成選單（放慢版）"
duration: "3 小時"
goals:
  - "能畫出 navItems → Navbar → 選單 DOM 的關係"
  - "完成修改 desc、新增 children、除錯三關"
  - "能解釋資料驅動 UI 的優點"
---

## 給老師

- 新增物件時「逗號」會殺人——投影 3 種錯誤訊息。  
- 完成後請學生 `git diff` 只應有 nav.ts。  
- 連到第 9 次：首頁 map 同一思想。  

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–15 | 資料驅動概念 |
| 15–40 | 精讀 nav.ts 標註 |
| 40–55 | 精讀 Navbar 如何 map |
| 55–65 | 休息 |
| 65–100 | 實作改 desc |
| 100–140 | 實作新增 + 除錯關 |
| 140–165 | Standard path 討論 |
| 165–180 | 檢查表 |

## 1. 概念：不要手寫 20 個連結

壞：Navbar 裡複製 20 次 `<a>`。  
好：資料在 `nav.ts`，UI 掃資料生成。

```text
navItems ──map──► Navbar ──► 使用者看到的選單
```

## 2. 精讀 nav.ts（25 分）

### 步驟

1. 打開 `src/data/nav.ts`  
2. 用註解標出：Team / Project / Wet Lab / Dry Lab / HP / Course  
3. 抄一筆 children 物件到筆記本，標 label/href/desc  

### 型別（會看即可）

```ts
children?: { label: string; href: string; desc?: string }[]
```

意思：可選的陣列，元素是物件。

## 3. 精讀 Navbar（15 分）

打開 `src/components/Navbar.tsx`，搜尋 `navItems`。

回答：

1. 從哪 import？  
2. 哪裡 `.map`？  
3. 有 children 時多做了什麼？  

## 4. 實作 A：改 desc（完整）

1. 選你負責頁  
2. 只改 `desc` 英文  
3. 存檔  
4. 重新整理，打開對應下拉  
5. `git diff src/data/nav.ts` 確認無意外  

## 5. 實作 B：新增一筆（完整）

範例（可依現況調整）：

```ts
{ label: "Course home", href: "/class", desc: "Full build-the-wiki lessons" },
```

注意：

- 上一行結尾逗號  
- 字串引號成對  
- `href` 以 `/` 開頭  

## 6. 除錯三關（每人輪流）

| 關 | 破壞 | 修復關鍵 |
|----|------|----------|
| 1 | 刪逗號 | 讀編譯錯誤 |
| 2 | href 少 `/` | 觀察導向 |
| 3 | 加在錯誤的 children | 選單位置不對 |

每關寫：「我看到的錯誤 → 我怎麼修」

## 7. Standard Paths（10 分）

可改 label，慎改 href：

- /attributions  
- /contribution  
- /engineering  
- /human-practices  

## 8. 完成檢查表

- [ ] 圖：資料→Navbar→選單  
- [ ] 改 desc 成功  
- [ ] 新增成功  
- [ ] 三關除錯紀錄  

## 9. 放慢用的加練（若提前做完）

### 加練 A｜重畫選單資料（紙上 10 分）

不看電腦，默寫 Project 底下應有的 4 個子項（label + href）。  
再打開 nav.ts 對答案。

### 加練 B｜讀錯訊息（10 分）

老師投影一段錯誤的 nav 片段（少 `]`），學生指出第幾行、少了什麼。

### 加練 C｜口頭解釋（每组 2 分）

「為什麼選單要用資料檔，而不是寫死在 Navbar？」至少講兩個理由。

## 10. 作業 #2

一句英文 desc；選做：紙上設計三層選單資料。  
下一堂：系統引擎 WikiPage——請先複習第 6 次 page.tsx。
