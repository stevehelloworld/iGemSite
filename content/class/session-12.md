---
session: 12
title: "圖片、好讀與英文科學寫作"
subtitle: "讓一頁既有證據感，又不說謊"
duration: "3 小時"
goals:
  - "能加入圖片並撰寫 alt／圖說"
  - "能用短英文寫清楚 claim 與限制"
  - "完成一頁可互評的內容"
---

## 1. 好 wiki 頁的標準（本堂評分）

1. 有清楚小標  
2. 有一段人讀得懂的英文  
3. 有圖或表格（若暫無圖，用表格也可以）  
4. 有「我們還不知道／下一步」  
5. 沒有假數據  

---

## 2. 完整步驟：在練習中加圖片

### 步驟 1：準備圖檔

- 格式：JPG / PNG / WebP  
- 先壓縮（不要上 10MB 原圖）  
- 檔名英文：`gel-practice-01.png`

### 步驟 2：放到 public

```text
public/images/gel-practice-01.png
```

若沒有 `images` 資料夾就新建。

### 步驟 3：在 md 引用

```markdown
## Figure

![Agarose gel of practice PCR products](/images/gel-practice-01.png)

**Figure 1.** Practice gel image for coursework. Not a final competition result unless confirmed.
```

### 步驟 4：檢查

- 圖有沒有出現  
- 圖是否太大把版面撐爆（可之後再學限制寬度）  
- alt 是否描述圖，而不是寫 `image1`

### 正式競賽注意（觀念）

上 iGEM 官方站時，圖片通常要放在允許的托管（如 `static.igem.wiki`）。本堂用 `public/` 練習流程即可。

---

## 3. 英文句型庫（請直接套）

### 3.1 問題

```text
[Metal/Problem] affects [who/what] because [reason].
```

例：`Cadmium contamination affects irrigation water safety because the metal persists in the environment.`

### 3.2 我們做什麼

```text
Our team is developing Cadture to [goal] by [approach].
```

### 3.3 工程（DBTL）

```text
Design: We focused on [bottleneck].
Build: We [constructed/planned] [part/protocol].
Test: We [measured/will measure] [metric] with [control].
Learn: Next we will [change].
```

### 3.4 Human Practices

```text
Listen: [Stakeholder] told us [point].
Integrate: We changed [design/safety/education plan] by [action].
Impact: This helps because [reason].
```

### 3.5 還沒數據

```text
This result is planned and will be updated after experiments.
According to literature, [claim] (citation to be added).
```

---

## 4. 寫作工作坊流程（40 分鐘）

1. **5 分**：選主題（Problem / DBTL / HP 擇一）  
2. **15 分**：每人寫 120–200 字英文  
3. **10 分**：两两互改（只改清楚度，不改科學亂加）  
4. **10 分**：貼進 md，重新整理給老師看  

---

## 5. 壞例子 vs 好例子

### 壞

> We perfectly removed 99% cadmium and proved everything.

問題：無證據、語氣絕對、像造假。

### 好

> We aim to capture cadmium ions using engineered proteins. Removal efficiency will be measured with appropriate controls and reported on the Results page when data are available.

---

## 6. 完成檢查表

- [ ] 有圖或表格  
- [ ] 有 alt／圖說  
- [ ] 英文段落可被同學 30 秒讀懂  
- [ ] 有「限制或下一步」  
- [ ] 無假數據  

## 7. 個人作業 #4

完成 **DBTL 或 HP** 其中一個完整小節英文（約 200 字）並上到你的頁。  

## 8. 下一堂

全站檢查表 + `npm run build` + 上線概念。
