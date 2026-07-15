# Cadture 學生使用手冊  
## VIS iGEM 2026

本手冊由資訊老師整理，說明如何更新隊伍 wiki。

> 這是競賽用的 **Team Wiki**。  
> 內容請與隊上確認，並對齊目前官方站：https://2026.igem.wiki/vis/  
> 若頁面仍是 iGEM 套版說明，可先保留，**請勿編造未完成的實驗結果**。  
> 網站頁面請用 **英文** 撰寫；本手冊以中文說明操作。

本手冊只說明**如何更新 Wiki 內容**。
完整「建造網站」課程（14 次課）在獨立資料夾：
**`../curriculum/cadture-wiki/`**（不在本網站 repo 內）。

---

## 1. 你平常只需要做一件事

**改 `content/` 資料夾裡的 Markdown（`.md`）檔。**

不用會 React、不用改 `src/app` 裡的程式（除非要新增一整個新頁）。

| 你想改… | 打開這個檔 |
|---------|------------|
| 首頁數字、問題、解法步驟 | `content/home.md` |
| Description | `content/pages/description.md` |
| Engineering | `content/pages/engineering.md` |
| Results | `content/pages/results.md` |
| Contribution | `content/pages/contribution.md` |
| Experiments / Notebook / … | `content/pages/對應檔名.md` |
| Human Practices | `content/pages/human-practices.md` |
| Team | `content/pages/team.md` |
| Safety | `content/pages/safety-and-security.md` |

完整列表：`content/README.md`

---

## 2. 五條鐵律

1. **Wiki 正文英文。**  
2. **以官方現況 / 隊上確認為準**，不要自己發明數據。  
3. **套版空頁可以慢慢寫**，先留著官方提示沒關係。  
4. **專案名 Cadture**；金屬 **Pb + Cd**（除非隊上正式改範圍）。  
5. 獎牌路徑不要改檔名／網址：`attributions`、`contribution`、`engineering`、`human-practices`。

---

## 3. Markdown 長什麼樣子？

每個頁面檔最上面有一段 **YAML 設定**（前後用 `---`），下面才是正文：

```markdown
---
title: Description
eyebrow: Project
subtitle: One line under the title
badge: Optional
tone: rose
toc:
  - id: what-should-this-page-contain
    label: What to include
---

## What Should this Page Contain?

- Write your English bullets here.
- Add real content when the team is ready.

## References

1. Author et al. (Year). Title.
```

### 常用寫法

```markdown
## Heading
### Smaller heading

Paragraph text.

- bullet
- bullet

1. numbered
2. list

**bold** and *italic*

[Link text](https://example.com)

![Alt text](https://static.igem.wiki/teams/6423/your-image.png)

> Callout-style quote / important note
```

`## My Section Title` 會自動變成目錄錨點 `#my-section-title`（給 toc 用）。

---

## 4. 怎麼預覽？

有電腦、已安裝 Node 時：

```bash
npm install
npm run dev
```

瀏覽器開 http://localhost:3000  

改完 `.md` 存檔，重新整理頁面即可看到結果。

**不會跑指令也 OK：** 把英文寫在 Google Doc，標明「要貼到哪個 md 檔」，請 Wiki lead 代貼。

---

## 5. 和官方站的關係（白話）

| | |
|--|--|
| **現在線上官方版** | https://2026.igem.wiki/vis/ （內容 baseline） |
| **這個專案** | 更好操作的版面 + Markdown 編輯 |
| **你的工作** | 確認／改寫英文內容（對齊真實進度） |
| **Wiki lead** | 部署到 iGEM GitLab，讓評審看的 freeze 站更新 |

細節：`docs/DEPLOY_TO_IGEM.md`

---

## 6. 首頁特別說明（`content/home.md`）

首頁很多區塊在 **檔案上方的 YAML** 裡，例如：

- `problems` — Pb / Cd / Wastewater  
- `solution` — Detection → … → Clean Water  
- `highlights` — 90%、75% 等（**與目前官方首頁一致；隊上要核實再改**）  
- `humanPractices` / `engineering` / `teamNote`  

改數字或句子：只改 YAML，存檔即可。

---

## 7. 每週建議流程

1. 實驗／訪談後，用英文寫 5～10 行筆記。  
2. 對應負責人打開正確的 `content/pages/….md`。  
3. **替換**「What Should this Page Contain?」底下的提示，或在下面新增自己的 `##` 段落。  
4. 另一位隊友檢查：有沒有假數據？英文看得懂嗎？  
5. Wiki lead 合併並部署官方站。

---

## 8. 不要做的事

- 不要為了「看起來完整」編造去除率、名單、訪談。  
- 不要把唯一證據只放在私人雲端。  
- 不要刪掉整頁 front matter（`---` 區塊），頁面標題會壞掉。  
- 不要把檔名改到和網址對不起來（例如把 `engineering.md` 改名卻不改程式）。

---

## 9. 新增一頁（進階，問 Wiki lead）

1. 新增 `content/pages/my-topic.md`  
2. 新增 `src/app/my-topic/page.tsx`（可複製其他頁）  
3. 在 `src/data/nav.ts` 加選單  

一般隊員**只需做步驟 1 的內容**，其餘交給 lead。

---

## 10. 安全提醒

- 重金屬實驗需指導者在場。  
- 廢液依 Safety 頁與實驗室規定處理。  
- 照片上站需本人同意。  

---

## 11. 相關文件

| 檔案 | 用途 |
|------|------|
| `content/README.md` | 編輯 Markdown 快速說明（英文） |
| `docs/WRITING_TEMPLATES.md` | 長文英文大綱（可選） |
| `docs/WIKI_MAP.md` | 頁面與獎牌對照 |
| `docs/DEPLOY_TO_IGEM.md` | 部署 / Freeze |

**— VIS iGEM 2026 · Cadture**
