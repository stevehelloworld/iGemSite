---
session: 8
title: "元件與 Markdown 管線（核心）"
subtitle: "從點開 md 到畫面顯示——完整追蹤一次"
duration: "3 小時"
goals:
  - "能完整口述 md 到畫面的資料流"
  - "能指出 slug 與 props 的角色"
  - "能在 md 使用表格與連結並看到渲染結果"
---

## 1. 今天要建立的心智模型

把下面流程抄在筆記本（發表會會用到）：

```text
你編輯 content/pages/engineering.md
        ↓
getPageBySlug("engineering")     // src/lib/content.ts
        ↓
得到物件 { frontmatter, body }
        ↓
WikiPage 把 frontmatter 丟給 PageHero
        把 body 丟給 MarkdownBody
        ↓
MarkdownBody 用函式庫把 Markdown 字串變成 HTML
        ↓
瀏覽器顯示 /engineering
```

路由檔 `src/app/engineering/page.tsx` 只做一件事：  
**告訴系統「這個網址用 slug=engineering 的 WikiPage」。**

---

## 2. 完整導讀 A：`src/lib/content.ts`

打開檔案，找到 `getPageBySlug`。

觀念對照：

| 程式概念 | 你的理解 |
|----------|----------|
| 函式參數 `slug` | 要讀哪一頁 |
| 讀檔 `fs.readFileSync` | 把 md 檔讀成字串 |
| `matter(raw)` | 拆成「上方 YAML」和「下方正文」 |
| `return { frontmatter, body }` | 回傳一個物件給別人用 |

你不需要會寫 Node.js，但要能說：  
**「這是一個輸入檔名、輸出標題與正文的函式。」**

---

## 3. 完整導讀 B：`src/components/WikiPage.tsx`

重點結構：

```tsx
export default function WikiPage({ slug }: { slug: string }) {
  const { frontmatter, body } = getPageBySlug(slug);
  return (
    <>
      <PageHero title={...} subtitle={...} />
      <ContentLayout toc={...}>
        <MarkdownBody source={body} />
      </ContentLayout>
    </>
  );
}
```

### Props 是什麼？

```tsx
<WikiPage slug="engineering" />
```

這裡的 `slug="engineering"` 就是傳入參數。  
等同 JS：

```js
WikiPage({ slug: "engineering" });
```

### 元件分工

| 元件 | 負責 |
|------|------|
| `PageHero` | 頂部大標、副標、色調 |
| `ContentLayout` | 文章區 + 側邊 toc |
| `MarkdownBody` | 把 md 正文渲染出來 |

---

## 4. 完整導讀 C：`MarkdownBody.tsx`

它使用 `react-markdown`：輸入字串，輸出標題、清單、表格等。

你在 md 寫：

```markdown
## Hello

| A | B |
|---|---|
| 1 | 2 |
```

它就負責變成真正的 HTML 標題與表格。

---

## 5. 完整實作：在自己的頁加表格與連結

### 步驟 1
打開你的 `content/pages/某頁.md`。

### 步驟 2
在正文加入：

```markdown
## Quick reference

| Topic | Link |
|-------|------|
| Official wiki | [2026.igem.wiki/vis](https://2026.igem.wiki/vis/) |
| How to edit | [Course guide](/class/how-to-edit) |
```

### 步驟 3
若有 toc，加入：

```yaml
  - id: quick-reference
    label: Quick reference
```

### 步驟 4
存檔，開對應網址，確認表格與連結可點。

---

## 6. 分站閱讀任務（小組 25 分鐘）

每人負責一站，然後輪流教別人 2 分鐘：

| 站 | 檔案 | 要講清楚的一句話 |
|----|------|------------------|
| 1 | `content.ts` | 輸入 slug，輸出 frontmatter+body |
| 2 | `WikiPage.tsx` | 組版面 |
| 3 | `page.tsx` | 綁網址 |
| 4 | 任一個 `.md` | 人寫的內容 |

---

## 7. 進階挑戰（選做）

暫時把 `PageHero` 的某個 class 或預設字改掉看效果，**改完用 git 還原**，並寫下你觀察到的。

---

## 8. 完成檢查表

- [ ] 能不看稿口述資料流（允許看自己筆記）  
- [ ] 指出 slug 在 page.tsx 與 getPageBySlug 各出現一次的意義  
- [ ] md 表格渲染成功  
- [ ] 小組互教完成  

## 9. 回家

重畫資料流，標上**完整檔案路徑**。  
下一堂：首頁 YAML 與官方順序、對照 `.map`。
