---
session: 4
title: "內容層：Markdown 管線實作"
subtitle: "內容如何進入系統——改 md 只是管線的輸入端"
duration: "3 小時"
goals:
  - "熟練 content 目錄與 front matter"
  - "理解 md 是資料來源，不是『整個網站』"
  - "能追到 WikiPage 使用這份資料"
---

## 重要定位

本堂教 Markdown，但目標是：

> 你改的是**系統的輸入**；你要知道**誰消費這份輸入**。

若只會改字、不知道 `getPageBySlug`，下堂會很痛——請本堂就連起來。

---

## 1. 內容層在架構中的位置

```text
[作者] → content/pages/x.md → getPageBySlug → WikiPage → 畫面
```

---

## 2. 完整操作手冊：改一頁並追到程式

### 階段 A：改內容

1. `npm run dev`  
2. 打開 `content/pages/description.md`  
3. 修改 `subtitle`  
4. 存檔  
5. 開 `/description` 驗證  

### 階段 B：追系統（必做）

1. 打開 `src/app/description/page.tsx`  
2. 找到 `slug="description"`  
3. 打開 `src/components/WikiPage.tsx`  
4. 找到 `getPageBySlug(slug)`  
5. 打開 `src/lib/content.ts`  
6. 找到讀取 `content/pages/${slug}.md` 的程式  

### 階段 C：畫箭頭

在紙上畫：

`description.md` → `content.ts` → `WikiPage` → `PageHero` / `MarkdownBody` → 瀏覽器

**本堂過關口試：** 合上電腦，口述這條路。

---

## 3. Front matter 是給程式看的設定

```yaml
---
title: Description
subtitle: Why we study Pb and Cd.
tone: rose
toc:
  - id: what-should-this-page-contain
    label: What to include
---
```

`gray-matter` 會拆成：

```js
{
  frontmatter: { title, subtitle, tone, toc },
  body: "正文 markdown 字串"
}
```

`PageHero` 吃 frontmatter；`MarkdownBody` 吃 body。

### 練習

新增一個 `## Team notes` 標題，並在 toc 加對應 id `team-notes`，確認側邊連結可跳轉。

---

## 4. 內容策略（建造 wiki 產品，不是灌水）

| 頁面狀態 | 正確做法 |
|----------|----------|
| 仍是 iGEM 套版 | 可保留提示，逐步加「現況／計畫」 |
| 有真實進度 | 英文清楚寫 Design/Test |
| 無數據 | 寫 planned，不寫假 % |

基準：https://2026.igem.wiki/vis/

---

## 5. 完成檢查表

- [ ] 改 md 成功反映到畫面  
- [ ] 口述資料流不看稿  
- [ ] 指出三個檔案在管線中的角色  
- [ ] toc 跳轉成功  

## 6. 作業

150–300 字英文草稿進認領頁；附上「我追到的資料流」簡圖。  

## 7. 下一堂

Git：版本控制是團隊建造網站的基礎設施。
