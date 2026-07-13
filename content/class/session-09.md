---
session: 9
title: "首頁資料與官方順序（核心）"
subtitle: "改 content/home.md，並對照 page.tsx 的列表渲染"
duration: "3 小時"
goals:
  - "能依官方順序說明首頁七大區塊"
  - "能安全修改 home.md 的 YAML 資料"
  - "能在 page.tsx 找到對應的 .map 區塊"
---

## 1. 官方首頁 = 我們的內容基準

請同時打開：

- https://2026.igem.wiki/vis/  
- http://localhost:3000  

### 必須一致的區塊順序

1. **The Problem**  
   - Lead Pollution / Cadmium Threat / Wastewater Challenge  
   - Taoyuan / Taichung / Kaohsiung  
2. **Our Solution**  
   - Detection → Capture → Sequestration → Removal → Clean Water  
3. **Project Highlights**  
   - 90% / 75% / 500+ / 12  
4. **Towards a Sustainable Future**（一段文字）  
5. **Human Practices**  
   - Listen / Integrate / Impact  
6. **Engineering Cycle**  
   - Design / Build / Test / Learn  
7. **Meet Our Team**  
   - 含 `[Insert team photo]` 提示  

本站用不同視覺風格呈現，但**文字與順序應對齊官方**。

---

## 2. 檔案在哪？

| 用途 | 檔案 |
|------|------|
| 首頁資料 | `content/home.md` |
| 首頁排版 | `src/app/page.tsx` |

`home.md` 的 front matter 是「資料」；`page.tsx` 負責「怎麼排」。

---

## 3. 完整步驟：更新一則 Problem 說明（需真實）

### 步驟 1
打開 `content/home.md`。

### 步驟 2
找到：

```yaml
problems:
  - tag: Pb
    title: Lead Pollution
    body: Lead exposure causes serious health risks and accumulates in living organisms.
```

### 步驟 3
若隊上同意微調英文（不可扭曲原意），只改 `body`。  
**不同意就不要改。** 本堂也可改 `locations` 的用字潤飾。

### 步驟 4
存檔 → 重新整理首頁 → 到 **The Problem** 區確認。

### 步驟 5
在 `src/app/page.tsx` 搜尋：

```ts
h.problems.map
```

用註解標：`// 這裡畫 The Problem 三張卡`。

---

## 4. 完整步驟：更新 Solution 某一步

找到：

```yaml
solution:
  - title: Detection
    body: Identify Pb²⁺ and Cd²⁺ contamination in wastewater.
```

可潤飾 `body`，但五個 `title` 建議維持官方用詞：  
Detection / Capture / Sequestration / Removal / Clean Water  

在 `page.tsx` 找到 `h.solution.map` 並標註。

---

## 5. Highlights 數字：特別規則

```yaml
highlights:
  - value: "90%"
    label: Pb Removal Efficiency
```

這些數字目前與官方首頁一致，屬於**公開宣稱**。

| 可以 | 不可以 |
|------|--------|
| 經指導教師／實驗組確認後更新 | 為了畫面好看自己改成 99% |
| 在內頁解釋「文獻／目標／實測」差異 | 在首頁暗示未證實的結果 |

本堂預設：**不要改 highlights 數字**，只練習指出它們在 YAML 與畫面的位置。

---

## 6. `.map` 是什麼？（接上你會的 JS）

概念上等價：

```js
const solution = [ /* 五個步驟 */ ];
for (const step of solution) {
  // 畫出 step.title 與 step.body
}
```

在 React/JSX 常用：

```tsx
{h.solution.map((s) => (
  <div key={s.title}>{s.title}</div>
))}
```

你要會的是：**資料在 home.md，迴圈在 page.tsx。**

---

## 7. 里程碑 B 繳交

每組繳交一份短報告（可 md）：

1. 更新了哪 2 個區塊？  
2. 英文最終句貼上  
3. **誰確認過內容？**（姓名）  
4. 截圖：首頁對應區塊  
5. 指出 page.tsx 中對應的 map 關鍵字（problems / solution / …）  

---

## 8. 完成檢查表

- [ ] 能背出首頁七段順序  
- [ ] 成功改 YAML 並驗證（在允許範圍內）  
- [ ] 找到至少兩個 `.map`  
- [ ] 未擅自改 highlights 數字  

## 9. 回家

列出「首頁還不能寫死的句子／數字」。  
下一堂：Tailwind 與 RWD。
