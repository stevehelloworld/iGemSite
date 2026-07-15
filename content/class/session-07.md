---
session: 7
title: "結構層：資料驅動的導覽"
subtitle: "nav.ts 如何把物件陣列變成全站選單"
duration: "3 小時"
goals:
  - "能畫出 Navbar 讀取 navItems 的關係"
  - "能新增／修改選單物件"
  - "理解『UI 由資料生成』的建造模式"
---

## 1. 建造模式：資料驅動 UI

壞做法：在 Navbar 裡手寫 20 個 `<a>`。  
好做法：資料放 `nav.ts`，元件負責渲染。

```text
navItems (資料)
    → Navbar.tsx (.map 渲染)
    → 使用者看到選單
```

這與首頁 `home.md` 陣列 + `.map` **是同一建造思想**。

---

## 2. 精讀 `src/data/nav.ts`

1. 型別 `NavItem`  
2. 匯出 `navItems` 陣列  
3. 有 `children` 的項目 = 下拉  

### 練習：標註

在檔案中用註解標出：

- 哪個是 Project 區  
- 哪個物件對應 Engineering  
- Course 連到哪  

---

## 3. 精讀 `src/components/Navbar.tsx`（重點段落）

搜尋 `navItems`：

- import 從 `@/data/nav`  
- `navItems.map` 產生選單  
- 有 children 時渲染子連結  

你不需重寫 Navbar，但要能說：

> 「我改 nav 資料，Navbar 自動重畫選單。」

---

## 4. 完整實作 A：改 desc

改一筆 `desc` → 存檔 → hover 選單驗證 → `git diff`。

## 5. 完整實作 B：新增一筆

在合理分組下新增：

```ts
{ label: "Course", href: "/class", desc: "Build-the-wiki curriculum" },
```

（若主選單已有 Course，改加到 Team children 或更新既有 desc。）

## 6. 完整實作 C：故意弄錯再修

1. 少逗號 → 讀錯誤訊息  
2. href 少 `/` → 觀察行為  
3. 全部修好  

---

## 7. Standard Paths 與結構穩定

競賽要求路徑穩定。結構層的「自由」有界線：

- 可改顯示文字 label  
- 不可隨便改競賽關鍵 href  

---

## 8. 完成檢查表

- [ ] 能畫 資料 → Navbar → DOM  
- [ ] 完成修改與新增  
- [ ] 完成除錯練習  
- [ ] 說得出資料驅動的好處  

## 9. 下一堂

系統層核心：元件與 Markdown 管線——**網站引擎如何運轉**。
