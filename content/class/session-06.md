---
session: 6
title: "結構層：路由系統如何做出網址"
subtitle: "App Router 精讀與實驗——放慢到會預測、會破壞、會修復"
duration: "3 小時"
goals:
  - "默寫資料夾與網址規則"
  - "逐行解釋 page.tsx"
  - "完成三種安全實驗並還原"
  - "列出新增路由所需檔案清單"
---

## 給老師

- 實驗 B（return 純 h1）很能建立「路由≠內容系統」——務必做。  
- 每位學生要在自己電腦改 slug 看錯，不要只看投影。  
- 口試：合上電腦講 page.tsx 四段。  

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–15 | 規則精熟遊戲 |
| 15–45 | 精讀 engineering/page.tsx |
| 45–55 | 休息 |
| 55–110 | 三個實驗 |
| 110–140 | layout 精讀 |
| 140–165 | 設計題：要哪些檔 |
| 165–180 | 口試抽查 |

## 1. 核心規則（背 + 默寫）

```text
src/app/<name>/page.tsx  →  /<name>
src/app/page.tsx         →  /
```

### 遊戲 1（10 分）

老師報網址，學生寫路徑：

- /team  
- /human-practices  
- /safety-and-security  
- /class/session-06  

### 遊戲 2（5 分）

老師報路徑，學生寫網址。

## 2. 精讀 page.tsx（30 分）

打開 `src/app/engineering/page.tsx`：

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

### 逐行講解稿（老師可照念）

1. **第 1 行 import type**：帶入型別，執行期可能被擦除，學生知道「TS 提示」即可。  
2. **第 2 行 import WikiPage**：把內容引擎元件拿進來。  
3. **metadata**：分頁標題，瀏覽器分頁上可能顯示。  
4. **export default function Page**：這個路由的入口。  
5. **return &lt;WikiPage slug=... /&gt;**：把結構接到系統。  
6. **slug 字串**：必須對應 md 檔名。  

### 學生任務

在檔案加註解（可交截圖），四段都標到。

## 3. 三個實驗（務必還原）

### 實驗 A｜slug 打錯（15 分）

1. 改 `slug="engineeringg"`  
2. 存檔、開 `/engineering`  
3. 記錄錯誤文字  
4. 改回  
5. 寫：「錯誤發生在管線第幾步？（讀檔）」  

### 實驗 B｜旁路內容系統（15 分）

暫時改成：

```tsx
export default function Page() {
  return <h1>Routing works without WikiPage</h1>;
}
```

觀察：路由還在，但 md 內容消失。  
**結論：** page 負責「這個網址有元件」；WikiPage 才接內容。  
改回 WikiPage。

### 實驗 C｜metadata 標題（10 分）

改 `title: "Engineering (class)"` 看分頁標題，再改回正式名稱。

## 4. layout.tsx（25 分）

打開 `src/app/layout.tsx`。

找：

- Navbar  
- `{children}`  
- Footer  

畫圖：

```text
RootLayout
├── SiteLoader（若有）
├── Navbar
├── main → children（page）
└── Footer
```

### 討論

若沒有 layout，每頁都要自己寫選單，壞處？

### 加分

打開 `src/app/safety/page.tsx` 看 `redirect`，說明別名路由。

## 5. 設計題（書面 15 分）

要新增文件頁 `/measurement-notes`，使用 WikiPage 模式，列出需要建立的**完整路徑**與一筆 nav 物件草稿。

## 6. 完成檢查表

- [ ] 默寫規則  
- [ ] 三實驗完成並還原  
- [ ] layout 圖完成  
- [ ] 設計題交出  

## 7. 作業

口頭 1 分鐘錄音或書面：page.tsx 四段是什麼。  
下一堂：nav 資料驅動。
