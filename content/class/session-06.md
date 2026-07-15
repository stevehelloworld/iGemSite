---
session: 6
title: "結構層：路由系統如何做出網址"
subtitle: "App Router、page.tsx、layout——網站地圖的實作原理"
duration: "3 小時"
goals:
  - "能默寫『資料夾 → 網址』規則"
  - "能精準拆解 page.tsx 每一行"
  - "能解釋 layout 與 page 的關係"
  - "能預測新增路由需要哪些檔案"
---

## 1. 建造問題

> 使用者輸入 `/engineering` 時，框架如何知道要顯示什麼？

答案在 **檔案系統路由**。

---

## 2. 規則精熟

```text
src/app/<segment>/page.tsx  →  /<segment>
src/app/page.tsx            →  /
src/app/class/[slug]/page.tsx → /class/:slug （動態）
```

### 課堂遊戲（20 分）

老師報 8 個網址，學生指出檔案；再反向。

---

## 3. 精讀：`src/app/engineering/page.tsx`

```tsx
import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "Engineering",
};

export default function Page() {
  return <WikiPage slug="engineering" />;
}
```

### 逐行建造意義

1. **import**：組裝依賴（像把零件拿進工作台）  
2. **metadata**：分頁資訊（SEO／標籤列）  
3. **default export Page**：這個路由的入口元件  
4. **WikiPage + slug**：把「結構」接到「內容系統」  

### 實驗（必做）

| 實驗 | 操作 | 觀察 | 還原 |
|------|------|------|------|
| A | slug 改錯字 | 錯誤型態 | 改回 |
| B | 暫時拿掉 WikiPage 改 return `<h1>Test</h1>` | 路由仍在、內容系統被旁路 | 改回 |
| C | 複製整夾 `engineering` 為 `hello-route` 並改 slug 對應新 md | 理解「複製路由」 | 可留作練習 |

實驗 B 的啟發：**路由層可以獨立存在；內容層是我們選擇接上的。**

---

## 4. 精讀：`layout.tsx`

職責：

- 全站字型  
- `<Navbar />`  
- `{children}` ← 各 page 插入處  
- `<Footer />`  

畫圖：

```text
layout
├── Navbar
├── children  →  目前的 page.tsx
└── Footer
```

問：為什麼改一頁不必重寫選單？

---

## 5. 特殊頁：首頁與課程頁

| 路由 | 為何特殊 |
|------|----------|
| `/` | `page.tsx` 自己組首頁，不只 WikiPage |
| `/class/*` | 教學系統，讀 `content/class` |
| `/safety` | redirect 到 `safety-and-security` |

打開 `src/app/safety/page.tsx` 看 redirect 寫法。

---

## 6. 設計題（建造思維）

若要新增 `/outreach` 且用 Markdown 正文，需要哪些檔？請列出完整路徑清單（先不要做，下下堂做）。

參考答案方向：

- `content/pages/outreach.md`  
- `src/app/outreach/page.tsx`  
- `nav.ts` 一筆  

---

## 7. 完成檢查表

- [ ] 8 組網址配對全對  
- [ ] 做過 slug 錯誤實驗並還原  
- [ ] 能畫 layout 包 page  
- [ ] 能列出新增頁所需檔案  

## 8. 作業

註解一頁 `page.tsx` 的每一關鍵行；交檔或截圖。  
下一堂：用資料驅動導覽——結構層的資料面。
