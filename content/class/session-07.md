---
session: 7
title: "選單與 nav.ts（物件陣列實作）"
subtitle: "讀懂選單資料結構，安全地新增或修改一筆"
duration: "3 小時"
goals:
  - "能讀懂 NavItem 與 children 陣列"
  - "能新增或修改一筆選單並在畫面驗證"
  - "知道哪些路徑名不能亂改"
---

## 1. 檔案位置

```text
src/data/nav.ts
```

這個檔**不是 Markdown**，是 TypeScript，但內容幾乎就是 JS 物件。

---

## 2. 資料結構拆解

檔案開頭有型別（先會看即可）：

```ts
export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc?: string }[];
};
```

白話：

- `label`：選單上顯示的字  
- `href`：點下去去哪（可選；有子選單時父層可能沒有 href）  
- `children`：子選單，是**陣列**，裡面每個元素又是物件  

範例（概念）：

```ts
{
  label: "Project",
  children: [
    { label: "Description", href: "/description", desc: "Background & problem" },
    { label: "Engineering", href: "/engineering", desc: "Design → Build → Test → Learn" },
  ],
}
```

這和你 JS 學的「陣列包物件」完全一樣。

---

## 3. 完整步驟：修改既有 desc（必做）

### 步驟 1
確認 `npm run dev` 執行中。

### 步驟 2
打開 `src/data/nav.ts`，找到你負責頁的那一行，例如：

```ts
{ label: "Description", href: "/description", desc: "Background & problem" },
```

### 步驟 3
只改 `desc` 字串（英文）：

```ts
{ label: "Description", href: "/description", desc: "Why Pb and Cd matter" },
```

### 步驟 4
存檔 → 重新整理網站 → 把滑鼠移到 **Project** 選單，看描述是否更新。

### 步驟 5
`git diff src/data/nav.ts` 確認只改到預期那一行。

---

## 4. 完整步驟：新增一筆子選單（必做進階）

假設要在 Project 下加「Results」旁再強調（若已存在就改其他區，例如 Team 下加 Course 相關——**Course 已在主選單**，可改加到 Team 的 desc 練習）。

以在 **Team** 的 children 末尾加一筆連到 `/class` 為例：

### 步驟 1
找到：

```ts
{
  label: "Team",
  children: [
    { label: "Members", href: "/team", desc: "Meet the team" },
    { label: "Attributions", href: "/attributions", desc: "Official form + notes" },
  ],
},
```

### 步驟 2
在 Attributions 那一物件後面加**逗號**，再貼新物件：

```ts
{
  label: "Team",
  children: [
    { label: "Members", href: "/team", desc: "Meet the team" },
    { label: "Attributions", href: "/attributions", desc: "Official form + notes" },
    { label: "Course materials", href: "/class", desc: "Class sessions and how to edit" },
  ],
},
```

### 步驟 3
存檔。若終端機或畫面報錯，多半是：

- 上一行少逗號  
- 多一個逗號在不該放的位置  
- 括號 `{}` `[]` 沒閉合  

### 步驟 4
重新整理，打開 Team 選單，點 **Course materials** 應到 `/class`。

### 步驟 5（可選還原）
若只是練習，可在 commit 前還原；若老師希望保留入口，可留下。

---

## 5. 絕對不要做的事

### 5.1 亂改 href 路徑名

競賽 Standard Pages 例如：

- `/engineering`  
- `/human-practices`  
- `/contribution`  
- `/attributions`  

可以改 **label 顯示文字**，但不要把 `href: "/engineering"` 改成 `"/dbtl"`，除非全站所有連結與檔案一起改且指導教師同意。

### 5.2 刪光整個 nav 陣列

選單會消失。改壞請 `git checkout -- src/data/nav.ts`（問老師再執行）。

---

## 6. 除錯清單

| 症狀 | 原因 |
|------|------|
| 編譯失敗 | 語法錯（逗號、括號） |
| 選單沒出現新項目 | 加錯父層 children |
| 點了 404 | href 打錯或該頁不存在 |
| 樣式怪 | 通常不是 nav 問題 |

---

## 7. 完成檢查表

- [ ] 成功修改至少一筆 `desc`  
- [ ] 成功新增一筆 children（或老師指定的同等練習）  
- [ ] 能解釋 label / href / desc  
- [ ] 知道 4 個不能亂改的路徑  

## 8. 回家（個人作業 #2）

為你負責頁寫一句**給訪客看的英文 desc**（適合放在 nav）。  
下一堂：元件與資料流。
