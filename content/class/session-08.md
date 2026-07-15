---
session: 8
title: "系統層：元件與內容引擎"
subtitle: "完整拆解 WikiPage 管線——這就是網站『怎麼做的』核心"
duration: "3 小時"
goals:
  - "不看稿口述完整請求處理流程"
  - "能說明 props、元件組合、md 渲染各自職責"
  - "能追 code 指出三個關鍵檔的關鍵函式"
---

## 1. 本堂是整學期理論高點

若第 14 次只能講一件技術：**講這條管線**。

---

## 2. 端到端流程（請抄寫並編號）

以 `/human-practices` 為例：

1. 使用者請求路徑  
2. Next 匹配 `src/app/human-practices/page.tsx`  
3. 執行 `Page` 元件  
4. 渲染 `<WikiPage slug="human-practices" />`  
5. `getPageBySlug` 讀 `content/pages/human-practices.md`  
6. `matter` 分解 frontmatter / body  
7. `PageHero` 使用 title/subtitle/tone…  
8. `ContentLayout` 處理 toc 與版面  
9. `MarkdownBody` 將 body Markdown 轉 HTML  
10. 外層 `layout` 已提供 Navbar/Footer  
11. 完整 HTML/CSS/JS 交付瀏覽器  

### 過關口試題

- 若第 5 步檔案不存在？  
- 若第 4 步 slug 打錯但檔案在？  
- 若沒有 layout？  

---

## 3. 分站精讀（每站 15 分 + 互教）

### 站 A：`src/lib/content.ts`

關注重點：

- 路徑如何拼出 `content/pages/${slug}.md`  
- `matter` 的輸出  
- 錯誤時 `throw new Error`  

### 站 B：`WikiPage.tsx`

- props 解構  
- 如何把資料分給子元件  

### 站 C：`MarkdownBody.tsx`

- `ReactMarkdown`  
- 自訂 `h2` 產生 id（給 toc）  

### 站 D：`PageHero.tsx` / `ContentLayout.tsx`

- 展示型元件：主要負責排版  

每站產出：「這個檔案若刪除，網站會怎樣？」一句話。

---

## 4. 實作：在管線上做可觀察實驗

### 實驗 1：只改 body

md 加一段 `## Pipeline check` → 畫面應出現。  
**結論：** 渲染器有吃到 body。

### 實驗 2：只改 frontmatter title

大標應變。  
**結論：** PageHero 有吃到 frontmatter。

### 實驗 3：暫時改 MarkdownBody 讓所有連結顯示底線更粗（或還原前的小改）

**結論：** 表現層集中在元件，可一處影響多頁。

改完實驗 3 請還原或另開 branch，避免污染正式樣式。

---

## 5. 元件組合圖（必畫）

```text
layout
  Navbar (navItems)
  Page
    WikiPage(slug)
      PageHero(frontmatter)
      ContentLayout(toc)
        MarkdownBody(body)
  Footer
```

---

## 6. 完成檢查表

- [ ] 11 步流程能口述  
- [ ] 四站互教完成  
- [ ] 三個實驗有紀錄  
- [ ] 元件組合圖完成  

## 7. 作業

錄 1 分鐘語音或書面：說明 `/engineering` 如何出現在螢幕上。  
下一堂：首頁——另一種「資料→畫面」組裝。
