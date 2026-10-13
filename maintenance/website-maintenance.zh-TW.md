# 網站維護指南

[English version](website-maintenance.en.md)

這份指南說明 2026 年 10 月 13 日新增的 Team 自介展開功能、靜態網站建置檢查，
以及結果圖表生成方式。下列指令都在專案根目錄執行，並先啟用專案的虛擬環境。
使用 Python 3.12 可與 GitLab 的建置環境一致。

## 要修改的檔案

| 工作 | 檔案 |
| --- | --- |
| 編輯成員、職務、照片與自介 | `docs/team.md` |
| 調整 Team 卡片樣式 | `static/team.css` |
| 維護 Team 組別切換 | `static/js/site-theme.js` |
| 維護建置檢查與已知佔位文字上限 | `scripts/check_static_site.py` |
| 修改圖表數值、標籤與呈現方式 | `scripts/build_results_charts.py` |
| 維護圖表套件的固定版本 | `chart-dependencies.txt` |
| 維護 GitLab 建置順序 | `.gitlab-ci.yml` |

## Team 成員自介

每位成員的自介使用 HTML 原生的 `<details>` 與 `<summary>` 展開區塊。
讀者可透過滑鼠、觸控、Enter 或 Space 展開及收合，瀏覽器也會向讀屏器提供展開狀態。
自介會沿著頁面的正常排版顯示，因此較長的自介可以讓卡片向下延伸。

更新自介時，修改 `docs/team.md` 中該成員 `.member-card-bio` 內的段落。
保留 summary 中的成員姓名，讓操作項目仍能被清楚辨識：

```html
<details class="member-card-disclosure">
    <summary class="member-card-hint">Read Member Name’s introduction</summary>
    <div class="member-card-bio">
        <p>The member's approved introduction.</p>
    </div>
</details>
```

新增照片時，參照已有照片的卡片，使用帶有合適 `alt` 說明及 `loading="lazy"` 的 `<img>`。
修改後在窄螢幕檢查卡片，並使用 Tab、Enter 與 Space 測試自介是否能正常開合。

## 建置與檢查網站

安裝網站與圖表所需套件，重建圖表，再匯出靜態網站並執行檢查：

```bash
python -m pip install -r dependencies.txt
python -m pip install -r chart-dependencies.txt
python scripts/build_results_charts.py
FLASK_APP=app.py flask freeze
python scripts/check_static_site.py
git diff --check
```

GitLab pipeline 會安裝兩份依賴清單、重建圖表、匯出網站，並在上傳 `public/` 前執行
靜態檢查。檢查失敗就會停止上傳。檢查器涵蓋：

- 站內頁面連結與段落錨點。
- HTML 與 CSS 引用的本機資產。
- 圖片是否具有 `alt` 屬性。
- 重複的元素 ID、`aria-controls` 指向的元素，以及每頁是否只有一個 `<main>`。
- 佔位文字，以及 `public/` 未壓縮的總大小。

預設大小上限為 **25 MiB**。本機可用 `--max-size-mb` 指定上限，
建置環境則可設定 `PUBLIC_MAX_SIZE_MB`：

```bash
python scripts/check_static_site.py --max-size-mb 25
```

外部網址及 JavaScript 動態載入的內容需要另外確認。圖片通過 `alt` 屬性檢查後，
仍要人工確認文字是否能有效描述圖片。

### 佔位文字的處理

目前允許 Team 頁最多出現 21 次 `coming soon`，Education 頁的 `placeholder`
與 `insert photos` 各最多出現兩次。這些文字會列在建置報告中。
新增的佔位文字或超過允許次數的項目會讓建置失敗。

團隊提供確認過的內容後，替換佔位文字，並降低
`scripts/check_static_site.py` 中 `KNOWN_PLACEHOLDER_LIMITS` 的對應上限。
只有仍有需要且刻意保留的佔位文字才保留額度。
要檢查網站是否完全沒有佔位文字，可執行：

```bash
python scripts/check_static_site.py --strict-placeholders
```

## 重建結果圖表

圖表套件的確切版本記錄在 `chart-dependencies.txt`。
安裝後，執行以下指令：

```bash
python scripts/build_results_charts.py
```

生成程式會將以下檔案寫入 `static/assets/charts/`：

- `pvis-gfp-dose-response.svg`
- `pvis-relative-growth.svg`
- `pvis-chart-data.json`

圖表數值記錄在生成程式的 `DOSES`、`GFP` 與 `GROWTH`。
這些數值由提供的報告圖表標籤轉錄而來；程式不會從儀器原始工作簿計算生長速率或 GFP 正規化。
結果更新時，先與團隊確認數值、單位、對照組與計算方法，再修改來源數值及資料來源說明。

SVG 生成程式使用固定 ID、省略生成日期，並移除行尾空白。
本機驗證時，在來源與依賴相同的情況下連跑兩次，檔案雜湊完全一致。
來源程式有變更時，一起提交生成的 SVG 與 JSON，並查看圖表的實際畫面，確認標籤沒有重疊且清楚可讀。

## 發布更新

檢查差異、執行建置檢查，再提交來源與生成資產。
將同一個提交同步到 GitLab `main` 與 GitHub `main`；GitHub 的更新會觸發已連結的 Vercel 部署。
確認該提交的 GitLab Pages 成功，且 Vercel production deployment 為 READY。
最後在兩個部署版本開啟受影響的頁面，確認實際呈現結果。
