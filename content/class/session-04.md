---
session: 4
title: "內容層：Markdown 管線實作"
subtitle: "改 md、驗證畫面、追到程式——放慢到每位同學都追得到"
duration: "3 小時"
goals:
  - "獨立完成 front matter 與正文修改"
  - "能追蹤 md → content.ts → WikiPage → 畫面"
  - "會更新 toc 與 ## 標題 id 對應"
  - "能處理至少兩種『畫面沒變／頁面壞掉』狀況"
---

## 給老師：本堂是內容核心，但務必接系統

每做完一次「改字」，就做一次「指出是誰讀這個字」。  
否則學生會停在「我會改檔案」而不是「我理解網站」。

建議巡堂口令：

> 「不要只跟我說你改好了——指著程式告訴我資料從哪裡進來。」

---

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–10 | 抽背首頁七段；本堂目標 |
| 10–25 | 管線圖導讀（先講再做） |
| 25–55 | 熱身：改 subtitle |
| 55–65 | 休息 |
| 65–110 | 改正文 + toc |
| 110–145 | 追 code 三站 |
| 145–170 | 除錯關卡 + 互查 |
| 170–180 | 作業 |

---

## 1. 先講清楚：你改的是「輸入」

```text
作者編輯 md  ──(輸入)──►  讀檔函式  ──►  元件組裝  ──►  瀏覽器
```

Markdown **不是**整個網站；它是內容層資料格式。

---

## 2. 課前環境檢查（5 分）

```bash
cd 你的/iGemSite
npm run dev
```

- [ ] 終端機 Ready  
- [ ] 能開 `/description`  

---

## 3. 完整步驟 A｜改 front matter（放慢）

以 `content/pages/description.md` 為例（其他頁同理）。

### 步驟 A1｜打開檔案

VS Code 檔案樹：`content` → `pages` → `description.md`

### 步驟 A2｜認清兩段結構

1. 第 1 個 `---` 到第 2 個 `---`：設定（YAML）  
2. 之後：正文（Markdown）

### 步驟 A3｜只改 subtitle

找到：

```yaml
subtitle:
```

改成你的英文（練習可暫用）：

```yaml
subtitle: Why our team cares about Pb and Cd in wastewater.
```

### 步驟 A4｜存檔

確認編輯器沒有未存檔圓點。

### 步驟 A5｜驗證

1. 開 `http://localhost:3000/description`  
2. 重新整理  
3. 看大標下方副標  

### 步驟 A6｜鄰座互查（3 分）

對方必須用手指著螢幕上「新副標」的位置。

### 若沒變——逐步排查（投影這張表）

| 順序 | 檢查 |
|------|------|
| 1 | 存檔了嗎？ |
| 2 | 網址是 `/description` 嗎？ |
| 3 | `npm run dev` 還在嗎？ |
| 4 | 改的是 `description.md` 不是別頁？ |
| 5 | YAML 的 `subtitle:` 縮排是否與其他鍵對齊？ |
| 6 | 是否少了 `---`？ |

---

## 4. 完整步驟 B｜改正文並加標題

### 步驟 B1｜在第二個 `---` 下方找到

```markdown
## What Should this Page Contain?
```

### 步驟 B2｜在其下插入（示範，可改成你的真實計畫）

```markdown
## Our drafting notes

We are preparing the Description page for Cadture.

- Problem focus: lead (Pb) and cadmium (Cd) in industrial wastewater.
- We will expand scientific detail after team review.
- We will not report experimental percentages without measured data.
```

### 步驟 B3｜更新 toc（重要，慢慢做）

front matter 的 toc 增加：

```yaml
toc:
  - id: what-should-this-page-contain
    label: What to include
  - id: our-drafting-notes
    label: Drafting notes
```

### 步驟 B4｜理解 id 規則（講 5 分）

標題：

```markdown
## Our drafting notes
```

自動 id 大致是：`our-drafting-notes`  
（小寫、空白變 `-`、符號常被去掉）

若 toc 的 id 打成 `Our-Drafting-Notes` 可能跳轉失敗。

### 步驟 B5｜驗證

- 正文看得到新段落  
- 側邊「On this page」點 Drafting notes 會跳轉  

---

## 5. 完整步驟 C｜追 code（本堂高點，至少 35 分）

### C1｜路由檔

打開 `src/app/description/page.tsx`

找到：

```tsx
<WikiPage slug="description" />
```

在旁邊註解：

```tsx
// slug 必須對應 content/pages/description.md 的檔名
```

### C2｜WikiPage

打開 `src/components/WikiPage.tsx`

找到 `getPageBySlug(slug)` 與 `PageHero`、`MarkdownBody`。  
用筆在紙上寫：

- frontmatter 進了哪個元件？  
- body 進了哪個元件？  

### C3｜content.ts

打開 `src/lib/content.ts`  
找到 `getPageBySlug`：

- 它如何拼出路徑？  
- 找不到檔案時會怎樣？  

### C4｜小組輪流講（每組 2 分鐘）

不投影答案，逼學生講。

---

## 6. 除錯關卡（20 分）

两人一组，一人出題一人修：

1. 故意刪掉一個 `---` → 修  
2. toc id 打錯 → 修  
3. 在錯誤的 md 檔改字 → 發現並改對檔  

---

## 7. 內容誠信（10 分，不可省）

全班一起念：

1. 英文上站  
2. 無數據不寫假結果  
3. 可寫 planned / literature  
4. 對齊官方與隊上確認  

---

## 8. 完成檢查表

- [ ] subtitle 有改成功  
- [ ] 正文有新增  
- [ ] toc 跳轉成功  
- [ ] 追 code 三站完成  
- [ ] 通過一關除錯  

## 9. 個人作業 #1

認領頁 150–300 字英文 + 手繪資料流（含檔名）。  

## 10. 下一堂

Git：團隊建造的版本基礎設施。
