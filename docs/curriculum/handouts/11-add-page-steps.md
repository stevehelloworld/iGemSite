# 第 11 次｜新增一頁三步驟

## 1. 內容

新增 `content/pages/my-page.md`：

```markdown
---
title: My Page
eyebrow: Project
subtitle: One English sentence.
tone: mint
---

## Overview

Write English here.
```

## 2. 路由

新增 `src/app/my-page/page.tsx`（可複製 description 那份）：

```tsx
import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "My Page",
};

export default function Page() {
  return <WikiPage slug="my-page" />;
}
```

注意：`slug` 必須和檔名 `my-page.md` 相同。

## 3. 導覽

在 `src/data/nav.ts` 合適的 `children` 裡加入：

```ts
{ label: "My Page", href: "/my-page", desc: "Short English desc" },
```

## 檢查

- [ ] http://localhost:3000/my-page 打得開  
- [ ] 選單點得到  
- [ ] 英文沒有未確認的假數據  
