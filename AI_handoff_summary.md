# AI Handoff Summary — NTU VIS iGEM 2026 animation branch

這份文件是給下一個 AI 讀取用的上下文整理。  
目標是讓它在閱讀原始資料後，可以更精準地延續目前的網站調整與資料整理工作。

## 目前專案範圍

- 專案：`https://gitlab.igem.org/2026/vis` 的 `animation` 分支
- 工作內容：iGEM 網頁內容與版面調整、工作日誌整理、Wet Lab / Experiments 頁面模板化設計
- 主要工作方式：修改本機網站檔案，再視需要同步到 GitLab

## 目前已經做過的事情

### 1. 網頁版面與互動調整

近期主要集中在 Wet Lab / Experiments 頁面，目標是讓內容看起來更像 iGEM 常見風格，同時保留彈性模板，方便之後塞入真實實驗資料。

目前已經加上的內容包括：

- 右側固定式卷動進度導引
- 進度軸會隨頁面卷動更新
- 導引圖示可點擊回到頁首
- 目前段落提示會在切換時短暫顯示
- 進度節點改成比較精緻的小圓點樣式
- 整體導引已收斂成較精簡、低干擾的設計

這些修改主要在：

- `docs/experiments.md`
- `static/style.css`

### 2. Wet Lab / Experiments 頁面結構

Experiments 頁面目前是模板化寫法，包含：

- hero 區塊
- workflow / flow panel
- figure placeholders
- 多個可伸縮的 section
- log panel
- inspiration links
- 右側進度軸

這頁的設計原則是：

- 內容可以長短不一
- 圖片先保留空位
- 版面維持 iGEM 風格的乾淨、清楚、資訊導向

### 3. 已讀取的 Wet Lab 進度摘要

我已經讀過這份檔案：

- `/Users/miguel/Downloads/iGEM_WetLab_Progress_Summary.md`

這份文件重點是 2026/06/23 到 2026/07/08 的 Wet Lab cloning 進度，內容包含：

- inverse PCR 線性化 vector
- 4 個 MT insert 的 PCR 與 digestion
- ligation 與 transformation
- colony picking / colony PCR screening
- MT2 因濃度讀值問題而重做

## Wet Lab 進度摘要的核心內容

如果下一個 AI 要根據這份摘要整理資料，請優先注意以下資訊：

### Construct / plasmid 對應

| Label | MT source | Insert size | Final plasmid | Plasmid size |
|---|---|---:|---|---:|
| MT1 | IaMT2（空心菜） | 657 bp | pVIS1 | 6,538 bp |
| MT2 | SmtA（cyanobacterial MT） | 597 bp | pVIS2 | 6,478 bp |
| MT3 | EGR_09832 | 951 bp | pVIS3 | 6,832 bp |
| MT4 | OsMTI-1b（rice） | 645 bp | pVIS4 | 6,526 bp |

### 主要實驗節點

- 6/23：plasmid extraction + inverse PCR linearization
- 6/25：MT1–MT4 PCR、clean、XbaI/SalI digestion
- 6/29：ligation、部分 insert 濃度確認、開始新的 competent cell culture
- 6/30：MT2 redo、electrocompetent cell prep、electroporation、plating
- 7/2：MT1 colony PCR screening，MT3/MT4 colony picking
- 7/6：MT2 ligation、MT3/MT4 colony PCR、再培養
- 7/7：MT2 cleanup + glycerol stock competent prep
- 7/8：MT2 colony picking

### 摘要中的重要結論

- vector inverse PCR 成功，得到預期大小的單一 band
- 4 個 MT insert 都有對到預期大小
- MT2 需要重做，因為濃度讀值不穩
- 後續 colony PCR 顯示有多個 positive colonies
- 整體進度是在往確認陽性 clone 的方向推進

## 目前正在處理的事情

目前最重要的延續工作是：

- 幫 Wet Lab / Experiments 頁面維持簡潔、互動性強的進度導引
- 保留頁面本身的模板彈性
- 之後可以繼續把真實實驗資料放進去

## 對下一個 AI 的建議閱讀順序

如果要更精準地整理資料，建議按這個順序讀：

1. 先讀這份交接文件
2. 再讀 `/Users/miguel/Downloads/iGEM_WetLab_Progress_Summary.md`
3. 再看網站對應檔案：
   - `docs/experiments.md`
   - `static/style.css`
   - `wiki/base.html`

## 目前風格與修改原則

- 保持 iGEM 常見風格：乾淨、清楚、資訊導向
- 進度導引要精簡，不要搶主內容
- 圖片先留空位，等真實資料再補
- 頁面要支援長短不同的內容
- 不要輕易改動其他頁面，避免影響已完成區塊

## 如果下一個 AI 要幫忙整理資料，可以優先輸出這幾種格式

- 時間軸摘要
- 實驗步驟整理
- construct 對照表
- 可直接貼到網頁的段落文字
- 中英文雙語版本摘要

