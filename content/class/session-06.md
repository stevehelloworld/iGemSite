---
session: 6
title: "從 JS 到 TSX：Next.js 路由"
subtitle: "page.tsx 是什麼、網址怎麼來、如何讀懂 10 行程式"
duration: "3 小時"
goals:
  - "能配對網址與 src/app 資料夾"
  - "能指認 import、函式元件、export default、slug"
  - "能說明「改文字通常改 md，不是改 page.tsx」"
---

## 1. 核心規則（先背）

在 Next.js App Router 裡：

```text
src/app/工程名/page.tsx  →  網址 /工程名
```

例子：

| 檔案 | 網址 |
|------|------|
| `src/app/page.tsx` | `/`（首頁） |
| `src/app/team/page.tsx` | `/team` |
| `src/app/human-practices/page.tsx` | `/human-practices` |
| `src/app/class/session-06` 動態 | `/class/session-06` |

**練習 5 分鐘：** 老師報網址，你指出資料夾；或反過來。

---

## 2. 打開真實檔案：Description 的 page.tsx

路徑：`src/app/description/page.tsx`

完整內容大致是：

```tsx
import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "Description",
};

export default function Page() {
  return <WikiPage slug="description" />;
}
```

### 逐行白話

| 程式 | 白話 |
|------|------|
| `import ... from "..."` | 使用別的檔案提供的功能（類似 JS 模組） |
| `Metadata` | 分頁標題等資訊的型別（TS，先略過細節） |
| `export const metadata` | 告訴 Next：分頁 title 顯示什麼 |
| `export default function Page()` | 這個網址要顯示的「主函式」 |
| `return <WikiPage slug="description" />` | 回傳畫面：請 WikiPage 去載入 `description` 這份內容 |
| `slug="description"` | 參數，對應 `content/pages/description.md` |

### 和你學過的 JS 對照

```js
function Page() {
  return greet("description"); // 想像成呼叫別的函式
}
```

差別只是 return 的是 **JSX**（長得像 HTML 的語法），不是字串。

---

## 3. 完整步驟：在 page.tsx 上做「只讀註解」練習

### 步驟 1
複製一份說明用註解（可直接寫在檔案裡，練習後可還原）：

```tsx
import type { Metadata } from "next";
// 引入共用元件 WikiPage
import WikiPage from "@/components/WikiPage";

// 分頁標題
export const metadata: Metadata = {
  title: "Description",
};

// 預設匯出：這個路由的畫面
export default function Page() {
  // slug 必須對應 content/pages/ 的檔名
  return <WikiPage slug="description" />;
}
```

### 步驟 2
若你把 `slug="description"` 改成 `slug="does-not-exist"` 會怎樣？

1. 存檔  
2. 開 `/description`  
3. 記錄錯誤現象  
4. **立刻改回** `description`  

目的：理解 slug 與 md 檔名綁定。

---

## 4. layout.tsx：為什麼每個頁都有選單？

打開 `src/app/layout.tsx`（重點觀念即可）：

- 全站共用：字型、Navbar、Footer  
- 各頁的 `page.tsx` 會被塞進 `{children}`  

所以你**不必**每個頁自己重寫選單。

---

## 5. 內容檔 vs 路由檔（易混，必考）

| 問題 | 答案 |
|------|------|
| 改英文段落？ | `content/pages/xxx.md` |
| 改分頁瀏覽器標題 metadata？ | 該頁 `page.tsx` 的 `title` |
| 讓 `/hello` 存在？ | 要有 `src/app/hello/page.tsx` |
| 讓 `/hello` 有文章？ | 還要有 `content/pages/hello.md`（本站設計） |

本站的 `WikiPage` 約定：**page 只負責路由，文章在 md。**

---

## 6. 課堂練習卷

1. `/safety-and-security` 對應哪個資料夾？  
2. `WikiPage` 從哪個路徑 import？  
3. 若只有 md 沒有 page.tsx，訪客開網址會如何？  
4. 若只有 page 沒有 md，可能如何？  

（討論後由老師公佈：1 `src/app/safety-and-security/` 2 `@/components/WikiPage` 3 404 4 執行期缺檔錯誤）

---

## 7. 完成檢查表

- [ ] 配對 5 組網址/資料夾  
- [ ] 能指著 page.tsx 說出 4 個關鍵部分  
- [ ] 做過 slug 錯誤實驗並還原  
- [ ] 能向同學說明 md 與 page 的分工  

## 8. 回家

- 手繪 8 個重要網址地圖  
- 讀 `/class/how-to-edit` 複習  
- （選做）在某一頁 page.tsx 留下 3 行有意義的註解  

## 9. 下一堂

改 `nav.ts`：真正動手寫物件進陣列。
