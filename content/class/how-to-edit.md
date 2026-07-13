---
session: 0
title: "如何改網站文字"
subtitle: "課堂最常用的操作（先會這個）"
duration: "隨時查"
goals:
  - "知道改哪個檔案"
  - "本機預覽成功"
  - "不破壞 front matter"
---

## 一句話

**一般改文字：只改 `content/` 裡的 `.md` 檔，存檔後重新整理瀏覽器。**

## 檔案對照

| 你想改… | 檔案 |
|---------|------|
| 首頁各區塊 | `content/home.md` |
| Description | `content/pages/description.md` |
| Engineering | `content/pages/engineering.md` |
| Human Practices | `content/pages/human-practices.md` |
| Team | `content/pages/team.md` |
| 其他頁 | `content/pages/檔名.md`（檔名 ≈ 網址） |

首頁順序（與官方 https://2026.igem.wiki/vis/ 一致）：

1. The Problem  
2. Our Solution  
3. Project Highlights  
4. Towards a Sustainable Future  
5. Human Practices  
6. Engineering Cycle  
7. Meet Our Team  

## 啟動本機網站

```bash
npm install
npm run dev
```

打開：http://localhost:3000

## Markdown 小抄

```markdown
## 標題
### 小標題

段落文字。

- 項目
1. 編號

**粗體**

[連結](https://example.com)
```

檔案最上面的 `---` … `---` 是設定（title、subtitle），**不要整段刪掉**。

## 不要做

- 沒有實驗數據卻寫「我們測到 XX%」  
- 只改畫面看起來完整、內容是編的  
- 亂改競賽路徑名稱（例如把 engineering 改成 dbtl）  

## 進階（第 11 次課）

新增一整頁需要三步驟：md + `page.tsx` + `nav.ts`。  
見課表第 11 次或 `docs/curriculum/handouts/11-add-page-steps.md`。
