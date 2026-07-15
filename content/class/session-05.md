---
session: 5
title: "工程協作：Git 與團隊建造流程"
subtitle: "版本控制是『做出網站』的一部分，不是附加題"
duration: "3 小時"
goals:
  - "掌握 pull/add/commit/push 基本流"
  - "能寫清楚 commit、會看 diff"
  - "建立內容誠信與 code review 習慣"
---

## 1. 為什麼「做出網站」一定要 Git？

網站是**多人、多檔、長時間**的產物。沒有版本控制會：

- 覆蓋別人的工作  
- 無法回溯壞掉的版本  
- 無法審查「這次改動是否安全」  

本堂把 Git 當**建造流程**，不是點點滑鼠備份。

---

## 2. 完整工作流（每次改站都照做）

```text
1. git pull          # 先同步
2. 改檔（content 或 src）
3. git status        # 看改了啥
4. git diff          # 看細節
5. git add <檔案>
6. git commit -m "..."
7. git push          # 若有遠端權限
```

### 實作：完成一輪真實提交

1. 改 `content/pages/notebook.md` 加英文三行今日筆記  
2. 

```bash
git status
git diff
git add content/pages/notebook.md
git commit -m "content: add notebook entry for session 5"
git status
```

3. 截圖 log：

```bash
git log -3 --oneline
```

---

## 3. Commit message 規範（工程文化）

```text
content: ...   # 文案
fix: ...       # 修錯
feat: ...      # 新功能／新頁
nav: ...       # 選單
style: ...     # 純樣式
```

好：`feat: add practice-lab page route and nav link`  
壞：`update`、`最終`

---

## 4. Review 清單（提交前自問）

- [ ] 我有沒有不小心刪到整段別人的內容？  
- [ ] 有沒有假數據？  
- [ ] 有沒有把 `node_modules` 加進去？（不該）  
- [ ] diff 是否只包含我打算改的檔？  

---

## 5. 誠信工作坊

討論並寫下：

1. 首頁 90% 與「我們測到」有何不同？  
2. 程式可以很完整，但內容造假為什麼仍算失敗？  
3. Attribution 與 git 紀錄如何互相補足？  

---

## 6. 里程碑 A

- 每人 ≥1 有效 commit  
- 組員責任表（頁面↔人）  
- 誠信討論結論  

## 7. 下一堂

進入系統層核心：路由與 page.tsx——**網址如何被做出來**。
