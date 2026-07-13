---
session: 5
title: "Git 協作與內容誠信"
subtitle: "會 commit、會說明改了什麼、守住 wiki 誠信"
duration: "3 小時"
goals:
  - "能使用 status / add / commit 基本流程"
  - "寫得出清楚的 commit message"
  - "理解造假數據與 Attribution 的後果"
---

## 1. 為什麼 wiki 一定要用版本控制？

多人同時改網站時：

- 需要知道**誰改了什麼**  
- 改壞了要能**回到上一版**  
- 競賽後期改動很頻繁，沒有紀錄會失控  

Git 就是做這件事的工具。

---

## 2. 課前：確認你在專案裡

```bash
cd 你的/iGemSite
git status
```

---

## 3. 完整步驟：從改檔到 commit（跟做）

### 步驟 1：先拉最新（若使用共用遠端）

```bash
git pull
```

若老師尚未設定遠端協作，可略過，只在本機練習 commit。

### 步驟 2：改一個內容檔

例如改 `content/pages/notebook.md` 加一行日期筆記（英文）。

### 步驟 3：查看狀態

```bash
git status
```

你應看到該檔在 **modified** 或 **untracked**。

### 步驟 4：查看差異（建議養成習慣）

```bash
git diff
```

確認沒有意外刪光整檔。

### 步驟 5：加入暫存區

```bash
git add content/pages/notebook.md
```

或（小心）：

```bash
git add content/
```

### 步驟 6：提交

```bash
git commit -m "content: add notebook note for lab day"
```

### 步驟 7：再查一次

```bash
git status
```

應顯示 working tree clean（或只剩別人的檔）。

### 步驟 8：若有 push 權限

```bash
git push
```

---

## 4. Commit message 怎麼寫才好？

### 推薦格式

```text
類型: 簡短英文或中英說明
```

| 類型 | 何時用 |
|------|--------|
| `content:` | 改 md 文案 |
| `fix:` | 修錯字、修壞掉的連結 |
| `nav:` | 改選單 |
| `docs:` | 改課堂文件 |

### 好例子

- `content: draft description problem section`  
- `fix: correct cadmium spelling on home`  
- `content: add HP listen notes (no private data)`  

### 壞例子

- `update`  
- `asdf`  
- `最終版真的最終版2`  

---

## 5. 衝突概念（課堂演示）

當两个人改同一段：

1. 後 push 的人可能被拒絕或出現 conflict  
2. 打開檔案找 `<<<<<<<` 標記  
3. 手動保留正確內容  
4. 再 `add` + `commit`  

**預防：** 一頁同一時間主要一人改；改前先 `pull`。

---

## 6. 內容誠信工作坊（必做討論）

請小組討論並寫下結論（交一張紙或共筆）：

1. 若把文獻的 90% 寫成「我們測到 90%」會有什麼問題？  
2. Attributions 為什麼不能只寫「大家一起做的」？  
3. 照片上站前要問過誰？  

教師重點：

- 官方首頁數字目前與線上版一致；**改數字 = 正式宣稱**，需指導教師同意。  
- 寧可寫 *planned*，不要假完整。  

---

## 7. 里程碑 A 繳交物

每組繳交：

1. `git log -3 --oneline` 截圖（或老師指定的紀錄方式）  
2. 表格：  

| 頁面 | 負責人 | 本週改動摘要 |
|------|--------|--------------|
|  |  |  |

---

## 8. 本堂完成檢查表

- [ ] 每人至少 1 次有效 commit  
- [ ] message 寫得清楚  
- [ ] 誠信討論有結論  
- [ ] 里程碑 A 表格交齊  

---

## 9. 回家

讀老師提供的 iGEM Wiki 規則摘要（或 `docs/DEPLOY_TO_IGEM.md` 的合規清單大意）。  
下一堂開始讀 `page.tsx` 與路由。
