---
session: 1
title: "認識 Wiki 與開發環境"
subtitle: "架好電腦、跑起 Cadture、知道網站在幹嘛"
duration: "3 小時"
goals:
  - "說出 iGEM Team Wiki 的用途"
  - "完成 npm install / npm run dev"
  - "對照官方站與本專案章節"
---

## 今天要做什麼
1. 打開官方站：https://2026.igem.wiki/vis/
2. 打開本專案，在終端機執行：

```bash
npm install
npm run dev
```

3. 瀏覽器開 http://localhost:3000
4. 點過選單：Description、Engineering、Human Practices、Team

## 專案長什麼樣（先記大圖）
| 資料夾 | 用途 |
|--------|------|
| `content/` | **文字內容**（之後最常改這裡） |
| `src/app/` | **網址／頁面** |
| `src/components/` | 畫面積木（元件） |
| `src/data/nav.ts` | 上方選單資料 |

## 首頁在講什麼（對齊官方）
官方與本站首頁順序都是：
**The Problem → Our Solution → Project Highlights → Sustainable Future → Human Practices → Engineering Cycle → Meet Our Team**

## 你會一點 JS？
今天只要知道：選單資料很像「物件」`{ label, href }`。

## 完成了再走
- [ ] 本機看得到 Cadture 首頁
- [ ] 能說出 5 個導覽項目
- [ ] 截圖交給老師

## 回家
- 讀學生手冊：`docs/STUDENT_HANDBOOK.md` 第 1–2 節
- 寫半頁：這個 wiki 要給誰看、看懂什麼？（中文 OK）
