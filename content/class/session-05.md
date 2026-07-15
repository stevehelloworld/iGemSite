---
session: 5
title: "工程協作：Git 與團隊建造流程"
subtitle: "每次改站都走完整流程——放慢到會看 diff、會寫 message"
duration: "3 小時"
goals:
  - "獨立完成 pull→改→status→diff→add→commit"
  - "寫出可讀的 commit message"
  - "能說明衝突如何避免"
  - "完成誠信情境判斷"
---

## 給老師

- 每人螢幕都要看到自己的 `git log`，不要只看老師 demo。  
- diff 一定要教：很多學生 commit 了自己不知道的檔。  
- 誠信討論至少 20 分。  

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–15 | 為什麼建造需要版本控制 |
| 15–70 | 完整 commit 流程（兩輪） |
| 70–80 | 休息 |
| 80–110 | message 工作坊 + 壞例子 |
| 110–140 | 衝突概念與角色扮演 |
| 140–165 | 誠信情境 |
| 165–180 | 里程碑 A |

## 1. 開場故事（放慢）

想像兩人同時改 `description.md`：  
A 寫 Problem，B 刪掉整段改成自己的。沒有 Git 會怎樣？有 Git 可以怎樣？

## 2. 完整流程（第一輪：跟著做）

### 2.1 確認目錄

```bash
cd 你的/iGemSite
git status
```

### 2.2 若有遠端

```bash
git pull
```

說明：先同步再改，減少衝突。

### 2.3 改一個小內容

打開 `content/pages/notebook.md`，在文末加：

```markdown
## Session 5 note

Date: (today)
We practiced Git workflow for team wiki building.
Next: document real lab notes in English after experiments.
```

### 2.4 status

```bash
git status
```

請學生圈出檔名，確認只有預期檔案。

### 2.5 diff（關鍵，多留時間）

```bash
git diff
```

老師問：

- `+` 是什麼？  
- 若看到大量刪除，該不該 commit？  

### 2.6 add

```bash
git add content/pages/notebook.md
```

再 `git status`，檔案應在 staged。

### 2.7 commit

```bash
git commit -m "content: add session 5 git practice note to notebook"
```

### 2.8 驗證

```bash
git log -1 --oneline
git status
```

## 3. 第二輪：自己做（20 分）

再改另一個自己負責的 md 一小段，完整走一次，message 自己想。

## 4. Commit message 工作坊

### 好

- `content: draft HP listen section without private data`  
- `fix: correct spelling of sequestration on home`  
- `feat: add practice-lab page files`  

### 壞 → 改寫練習

把下列改成好 message：

1. `update`  
2. ` assa`  
3. `改了很多東西`  
4. `final final 2`  

## 5. 衝突角色扮演（25 分）

情境卡：

- 兩人改同一段 subtitle  
- 一人 force 心態「以我的為準」  

討論：正確流程是什麼？（pull、溝通、合併、誰確認科學內容）

預防規則（寫在黑板）：

1. 一頁同一時段單一主編  
2. 改前 pull  
3. 小步 commit  
4. 大改前通知  

## 6. 誠信情境題（每人寫答案）

1. 官方首頁 90%，文獻也有類似數字，能否寫「我們達成 90%」？為什麼？  
2. 指導教師幫改了程式，wiki 要不要寫進 Attributions？  
3. 同學照片未經同意能否上 Team 頁？  

## 7. 里程碑 A 繳交

- `git log -5 --oneline` 截圖  
- 責任表：頁面 | 人 | 本週摘要  
- 誠信三題答案  

## 8. 完成檢查表

- [ ] 兩輪 commit  
- [ ] 會看 diff  
- [ ] message 合格  
- [ ] 誠信題完成  

## 9. 下一堂

結構層：網址如何被「做出來」。
