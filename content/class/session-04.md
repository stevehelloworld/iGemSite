---
session: 4
title: "Markdown 與 content/（核心）"
subtitle: "改檔、存檔、重新整理——真正開始維護 Team Wiki"
duration: "3 小時"
goals:
  - "能獨立修改任一 content/pages 頁面並驗證"
  - "能正確編輯 front matter 與正文"
  - "遵守英文與內容誠信規則"
---

## 0. 本堂為什麼是核心？

之後實驗再忙，wiki 仍要更新。若全隊只有一個人會改 code，一定會爆。  
**Markdown 是全隊共同語言。**

更完整的操作說明：[/class/how-to-edit](/class/how-to-edit)  
本堂帶你**當堂做完一輪**。

---

## 1. 課前確認

```bash
cd 你的/iGemSite
npm run dev
```

瀏覽器：`http://localhost:3000`

---

## 2. 分組認領頁面（建議）

| 組 | 優先頁 | 檔案 |
|----|--------|------|
| A | Description | `content/pages/description.md` |
| B | Engineering | `content/pages/engineering.md` |
| C | Human Practices | `content/pages/human-practices.md` |
| D | Team / Contribution | `team.md` / `contribution.md` |

老師可依人數調整。每人必須**親手改到畫面有變**。

---

## 3. 完整操作：改副標（10 分鐘熱身）

以 Description 為例（其他頁同理）。

### 步驟 1
VS Code 打開 `content/pages/description.md`。

### 步驟 2
找到 front matter 的：

```yaml
subtitle: ...
```

### 步驟 3
改成你的英文（練習可暫用）：

```yaml
subtitle: Why our team chose a Pb and Cd wastewater project.
```

### 步驟 4
存檔 → 開 `http://localhost:3000/description` → 重新整理。

### 步驟 5
確認副標已更新。請鄰座同學也幫你看一眼。

---

## 4. 完整操作：在正文新增「真實準備寫的內容」

很多頁目前仍是 iGEM 套版說明（What Should this Page Contain?）。  
**正確做法不是刪光提示硬掰實驗，而是：**

1. 保留結構標題  
2. 在下方用英文寫「目前已知／計畫」  
3. 沒數據就明說 planned  

### 範例：在 Engineering 頁新增一節

打開 `content/pages/engineering.md`，在文末加入：

```markdown
## Our current status

We are documenting our engineering process for Cadture.

### Planned first cycle (template)

- **Design:** Define one technical bottleneck in capture or detection.
- **Build:** Construct the part or protocol we choose.
- **Test:** Measure a clear outcome with controls.
- **Learn:** Record what to change next.

> Experimental numbers will be added only after wet-lab confirmation.
```

存檔 → `/engineering` 重新整理。

### 為什麼這樣寫？

- 評審看得到你們有工程思維  
- 不會假裝已完成  
- 之後有數據只需改同一節  

---

## 5. Front matter 與 toc 完整說明

```yaml
---
title: Engineering
eyebrow: Project
subtitle: Document Design → Build → Test → Learn
badge: Silver #1
tone: cream
toc:
  - id: what-should-this-page-contain
    label: What to include
  - id: our-current-status
    label: Current status
---
```

| 欄位 | 意思 |
|------|------|
| `title` | 大標題 |
| `eyebrow` | 上方小標（區段） |
| `subtitle` | 大標下說明 |
| `badge` | 右側小徽章文字 |
| `tone` | 英雄區配色：rose / mint / sky / cream / lavender |
| `toc` | 側邊「On this page」 |

### toc 的 id 怎麼來？

正文若有：

```markdown
## Our current status
```

id 自動變成：`our-current-status`（小寫、空白變 `-`）。  
所以 toc 要寫：

```yaml
- id: our-current-status
  label: Current status
```

加完新 `##` 標題後，記得同步 toc，側邊連結才點得到。

---

## 6. 常見錯誤與修正（請逐條排查）

### 錯誤 A：畫面沒變
1. 存檔了嗎？  
2. 網址對了嗎？  
3. `npm run dev` 還在跑嗎？  
4. 強制重新整理（清快取）。  

### 錯誤 B：整頁錯誤
多半是 `---` 少了一個，或 YAML 縮排亂掉。  
解法：從 Git 還原該檔，或複製 `contribution.md` 的 front matter 當模板。

### 錯誤 C：中文上了 wiki 正文
課堂討論可用中文，**貼上 content 前請改成英文**（可两人协作翻译）。

### 錯誤 D：寫了假數據
刪除或改成 planned。寧可空洞，不要假完整。

---

## 7. 同儕互查（15 分鐘）

交換電腦，對方必須：

1. 找到你改的檔案路徑  
2. 在瀏覽器指出改動位置  
3. 檢查有無假數據／明顯英文錯誤  

---

## 8. 本堂完成檢查表

- [ ] 成功改到 front matter 至少一項  
- [ ] 成功改到正文至少一段  
- [ ] toc 若有新標題已更新  
- [ ] 互查通過  

---

## 9. 回家作業（個人作業 #1）

為認領頁寫 **150–300 字英文**（可分段），主題擇一：

- 問題是什麼、為何重要  
- 我們目前做到哪裡、下一步  
- 安全或社會面向的一句負責任說法  

可貼進 md，或先交文件再由 wiki 負責人代貼。

## 10. 下一堂

Git：讓全隊改動可追蹤、可回復。
