---
session: 9
title: "首頁資料與官方順序"
subtitle: "改 home.md，對齊官方首頁結構"
duration: "3 小時"
goals:
  - "會改 content/home.md"
  - "知道首頁區塊順序與官方一致"
  - "不擅自改未確認數字"
---

## 官方與本站首頁順序
1. **The Problem**（Pb / Cd / Wastewater + 桃園台中高雄）  
2. **Our Solution**（Detection → … → Clean Water）  
3. **Project Highlights**（90% / 75% / 500+ / 12）  
4. **Towards a Sustainable Future**  
5. **Human Practices**（Listen / Integrate / Impact）  
6. **Engineering Cycle**（Design → Build → Test → Learn）  
7. **Meet Our Team**  

## 檔案
`content/home.md`（上方 YAML 就是資料）

畫面程式：`src/app/page.tsx`（會用 `.map` 把陣列畫成卡片）

## 鐵律
數字與文案以官方站與隊上確認為準，**不要為了好看自己改大數據**。

## 完成了再走（里程碑 B）
- [ ] 至少更新 2 個區塊（經組內確認）
- [ ] 能指到 page.tsx 裡對應的列表渲染
