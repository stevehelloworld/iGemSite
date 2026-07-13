---
session: 0
title: "如何改網站文字（完整操作教材）"
subtitle: "從零打開專案到改完一頁並檢查——課堂與回家都能照做"
duration: "隨時查閱"
goals:
  - "能獨立改 content 裡的 Markdown 並在本機看到結果"
  - "不弄壞 front matter，不誤改競賽路徑"
  - "知道首頁與內頁分別改哪個檔"
---

## 這份教材給誰用？

給 **VIS iGEM 隊員**：你可能會一點點程式、學過一點 JS，但**不必會 React** 也能改 wiki 文字。

請記住分工：

| 你想做的事 | 改哪裡 |
|------------|--------|
| 改英文說明、段落、小標 | `content/` 的 `.md` |
| 改選單文字／新增選單項目 | `src/data/nav.ts`（第 7、11 次課） |
| 新增一整個新網址 | md + page.tsx + nav（第 11 次課） |

**日常 90% 的工作只有第一列。**

---

## 一、事前準備（第一次請完整做完）

### 1.1 需要的軟體

1. **VS Code**（或學校指定的編輯器）  
2. **Node.js**（LTS 即可）  
3. 本專案資料夾（從 GitHub clone 或老師發的壓縮檔）

### 1.2 檢查 Node 有沒有裝好

1. 打開「終端機」（Terminal）。  
2. 輸入下面指令後按 Enter：

```bash
node -v
```

3. 若出現類似 `v20.x.x` 或 `v22.x.x` 的版本號 → 成功。  
4. 若顯示「找不到指令」→ 先安裝 Node.js，再重開終端機。

### 1.3 進入專案並安裝依賴（每個電腦第一次）

在終端機輸入（路徑請改成你電腦上的真實位置）：

```bash
cd 你的路徑/iGemSite
npm install
```

說明：

- `cd`：進入專案資料夾  
- `npm install`：下載網站需要的套件（第一次較久，請等它跑完）

成功時最後通常不會有大片紅色錯誤。若失敗，把**完整紅字**截圖給老師。

### 1.4 啟動本機預覽

仍在專案根目錄：

```bash
npm run dev
```

看到類似：

```text
✓ Ready in ...
Local: http://localhost:3000
```

然後：

1. 打開瀏覽器（Chrome / Edge / Safari 皆可）。  
2. 網址列輸入：`http://localhost:3000`  
3. 應看到 **Cadture** 首頁。

**注意：**

- 終端機視窗**不要關**，關掉就等於關掉預覽伺服器。  
- 若提示 port 被占用，告訴老師，或用：

```bash
npm run dev -- -p 3001
```

然後開 `http://localhost:3001`。

---

## 二、網站內容存在哪裡？

### 2.1 兩個世界

```text
content/          ← 給「寫文字」的人（你平常在這裡）
src/app/          ← 給「管網址／版面」的人
src/components/   ← 畫面積木（進階）
src/data/nav.ts   ← 上方選單資料
```

### 2.2 內頁對照表（請收藏）

| 瀏覽器網址 | 要改的檔案 |
|------------|------------|
| `/` 首頁 | `content/home.md` |
| `/description` | `content/pages/description.md` |
| `/engineering` | `content/pages/engineering.md` |
| `/results` | `content/pages/results.md` |
| `/contribution` | `content/pages/contribution.md` |
| `/experiments` | `content/pages/experiments.md` |
| `/notebook` | `content/pages/notebook.md` |
| `/measurement` | `content/pages/measurement.md` |
| `/model` | `content/pages/model.md` |
| `/software` | `content/pages/software.md` |
| `/human-practices` | `content/pages/human-practices.md` |
| `/team` | `content/pages/team.md` |
| `/attributions` | `content/pages/attributions.md` |
| `/safety-and-security` | `content/pages/safety-and-security.md` |

規則：**網址最後一段 ≈ 檔名**（例如 `/engineering` → `engineering.md`）。

---

## 三、完整步驟：改一個內頁（以 Description 為例）

請照順序做一次，不要跳步。

### 步驟 1：確認預覽伺服器有開

終端機應正在跑 `npm run dev`。瀏覽器能開首頁。

### 步驟 2：在 VS Code 打開檔案

左側檔案樹：

```text
content
  └── pages
        └── description.md
```

雙擊 `description.md`。

### 步驟 3：認識檔案結構

檔案通常長這樣：

```markdown
---
title: Description
eyebrow: Project
subtitle: Describe how and why you chose your iGEM project.
badge: Bronze · Wiki
tone: rose
toc:
  - id: what-should-this-page-contain
    label: What to include
---

#### Bronze Medal Criterion #1: Wiki

Describe how and why you chose your iGEM project.
...
```

可分成兩部分：

| 部分 | 位置 | 作用 |
|------|------|------|
| **Front matter** | 最上面兩組 `---` 之間 | 頁面標題、副標、側邊目錄設定 |
| **正文** | 第二個 `---` 下面 | 訪客真正讀的英文內容 |

### 步驟 4：改一個「看得到」的地方

建議第一次只改 **subtitle**（安全、容易驗證）：

把：

```yaml
subtitle: Describe how and why you chose your iGEM project.
```

暫時改成（練習用，之後可改回正式英文）：

```yaml
subtitle: Why we study Pb and Cd pollution.
```

### 步驟 5：存檔

- macOS：`Command + S`  
- Windows：`Ctrl + S`  

檔名旁不應再有白點（表示未存檔）。

### 步驟 6：重新整理瀏覽器

1. 打開 `http://localhost:3000/description`  
2. 按重新整理（或 `Command+R` / `Ctrl+R`）  
3. 看大標題下方的副標是否變成你寫的句子  

### 步驟 7：改正文段落

在第二個 `---` 下方，找到：

```markdown
## What Should this Page Contain?
```

在該標題**下面**新增你自己的段落（英文），例如：

```markdown
## What Should this Page Contain?

Our team is developing Cadture to address lead and cadmium in industrial wastewater.

- Explain the problem your project addresses and its potential impact.
- Provide a clear and concise summary of your project’s goals and objectives.
```

存檔 → 重新整理 → 確認網頁出現新句子。

### 步驟 8：若沒變化，依序排查

| 現象 | 可能原因 | 怎麼做 |
|------|----------|--------|
| 完全沒變 | 沒存檔 | 再存一次 |
| 完全沒變 | 看錯網址 | 確認是 `/description` 不是首頁 |
| 完全沒變 | dev 沒開 | 終端機再跑 `npm run dev` |
| 整頁壞掉／錯誤畫面 | front matter 的 `---` 被刪或少一側 | 對照其他頁把 `---` 補回 |
| YAML 格式錯 | 縮排、冒號、引號不對 | 看終端機紅字；或還原後重改 |

---

## 四、Markdown 完整小抄（本站會用到的）

### 4.1 標題

```markdown
## 二級標題（正文最常用）
### 三級標題
```

注意：`## My Section Title` 會自動產生錨點 id（小寫、空白變 `-`），供左側「On this page」使用。

### 4.2 段落與強調

```markdown
這是一段落。

**粗體** 很適合關鍵詞。
*斜體* 偶爾使用。
```

### 4.3 清單

```markdown
- 無順序項目 A
- 無順序項目 B

1. 第一步
2. 第二步
```

### 4.4 連結

```markdown
[iGEM VIS wiki](https://2026.igem.wiki/vis/)
```

### 4.5 表格

```markdown
| Item | Note |
|------|------|
| Pb | Lead |
| Cd | Cadmium |
```

### 4.6 引用／提示框感

```markdown
> Important: Do not invent experimental numbers.
```

### 4.7 圖片（進階）

練習階段可把圖放在 `public/`，例如 `public/images/demo.png`，然後：

```markdown
![Short description of the image](/images/demo.png)
```

`![...]` 裡的文字是 **alt**（無障礙與圖片說明），請用英文簡述圖是什麼。

---

## 五、改首頁（`content/home.md`）

### 5.1 首頁不是一般段落為主

首頁資料主要在 **YAML 清單**裡，順序與官方站一致：

1. **The Problem** — `problems` + `locations`  
2. **Our Solution** — `solution`  
3. **Project Highlights** — `highlights`  
4. **Towards a Sustainable Future** — `sustainable`  
5. **Human Practices** — `humanPractices`  
6. **Engineering Cycle** — `engineering`  
7. **Meet Our Team** — `teamNote`  

### 5.2 改一筆 solution 的完整例子

找到：

```yaml
solution:
  - title: Detection
    body: Identify Pb²⁺ and Cd²⁺ contamination in wastewater.
```

可改 `body` 的英文（需隊上同意）。**不要**隨便改 `highlights` 的 90%、75% 等數字，除非實驗組／指導教師確認——這些數字與目前官方首頁一致，屬正式宣稱。

### 5.3 YAML 注意事項

- `title:` / `body:` 前面空格數量要對齊（同一層清單一致）。  
- 文字裡若有 `:` 可能害 YAML 壞掉，整句用引號包起來較安全：  

```yaml
body: "Detect: identify Pb and Cd in wastewater."
```

- 多行文字可用 `>`（專案裡 `sustainable`、`teamNote` 已有範例）。

---

## 六、內容誠信（比技術更重要）

1. **英文上站**（本區課堂說明可用中文，wiki 正文用英文）。  
2. **沒做過的實驗不要寫成已完成。**  
3. 可用：`We plan to…` / `Literature shows…` / `To be measured.`  
4. 照片需本人同意；不要放電話、住址等個資。  
5. 內容基準：https://2026.igem.wiki/vis/  

---

## 七、自測清單（每次改完勾一次）

- [ ] 正確檔案（網址與檔名對得上）  
- [ ] 已存檔  
- [ ] 瀏覽器有重新整理  
- [ ] 英文通順或已請同學看過  
- [ ] 沒有未確認的數據  
- [ ] front matter 的 `---` 還在  

---

## 八、還要新增一整頁時

請上 **第 11 次課** 教材：`/class/session-11`  
三步驟：`md` + `page.tsx` + `nav.ts`。

---

## 九、求助時請附上這些資訊

1. 你改的**完整檔案路徑**  
2. 你開的**網址**  
3. 終端機**紅字**截圖（若有）  
4. 「預期看到什麼／實際看到什麼」  

這樣老師或同學才能快速幫你。
