---
session: 8
title: "系統層：元件與內容引擎"
subtitle: "整學期理論高點——管線精讀與可觀察實驗（放慢版）"
duration: "3 小時"
goals:
  - "不看稿口述 11 步請求流程"
  - "四站精讀並互教"
  - "完成三個可觀察實驗並記錄結論"
---

## 給老師：本堂寧可少講後面

這是「網站怎麼做的」核心。  
建議：互教 + 實驗佔 **60% 時間**，講解佔 40%。  
第 14 次會回來考這堂。

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–20 | 11 步流程板書（學生抄） |
| 20–30 | 抽問前 5 步 |
| 30–90 | 四站精讀（輪站） |
| 90–100 | 休息 |
| 100–150 | 三實驗 |
| 150–170 | 組合圖 + 口試 |
| 170–180 | 作業 |

## 1. 11 步流程（抄寫，兩次）

以 `/human-practices`：

1. 瀏覽器請求路徑  
2. Next 匹配 `src/app/human-practices/page.tsx`  
3. 執行 `Page`  
4. 渲染 `WikiPage` 並傳入 slug  
5. `getPageBySlug` 讀 md 檔  
6. gray-matter 拆 frontmatter / body  
7. PageHero 用 frontmatter  
8. ContentLayout 處理版面與 toc  
9. MarkdownBody 渲染 body  
10. layout 提供 Navbar/Footer  
11. 完整頁交付  

### 口訣

**路找 page → page 叫 WikiPage → WikiPage 讀 md → 拆兩包 → 英雄區+正文 → 外殼選單**

### 抽問題庫

- 第 5 步檔案不在？  
- slug 錯但 page 在？  
- 沒有 MarkdownBody？  
- 沒有 layout？  

## 2. 四站精讀（每站 12–15 分）

每站任務卡：

### 站 A content.ts

- 找出拼路徑那一行  
- 找出 throw Error  
- 一句話：本檔職責  

### 站 B WikiPage.tsx

- props 是什麼  
- frontmatter 給誰  
- body 給誰  

### 站 C MarkdownBody.tsx

- 哪個套件在轉 md  
- h2 為何要自訂  

### 站 D PageHero / ContentLayout

- 有狀態嗎還是純展示  
- toc 從哪來  

每站結束：換人當小老師講 90 秒。

## 3. 三個實驗（慢做）

### 實驗 1 只改 body

md 加 `## Pipeline lab` 一段 → 驗證出現。  
結論寫：________

### 實驗 2 只改 title frontmatter

大標變。結論：________

### 實驗 3 暫時錯 slug 於 page（再修）

對應錯誤。結論：________

## 4. 元件組合圖（必畫，10 分）

```text
layout
  Navbar
  Page
    WikiPage
      PageHero
      ContentLayout
        MarkdownBody
  Footer
```

## 5. 完成檢查表

- [ ] 11 步能講  
- [ ] 四站互教  
- [ ] 三實驗紀錄  
- [ ] 組合圖  

## 6. 放慢用的「小白板題」（全班 15 分）

老師抽問，答不出就回站重讀 5 分再答：

1. `matter` 之後，title 大概在哪個變數裡？  
2. 使用者從沒開過 engineering.md，為什麼螢幕上會有字？  
3. 若 MarkdownBody 壞掉，PageHero 還會不會在？  
4. Navbar 的資料是不是也走 getPageBySlug？  

## 7. 作業

用語音或文字 **1–2 分鐘** 說明：`/engineering` 如何從點擊到上屏（需提到至少 5 個檔名）。  
下一堂：首頁另一種組裝法——先打開官方首頁複習七段。
