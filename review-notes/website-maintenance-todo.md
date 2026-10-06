# 網站維護 TODO

更新：2026-10-06
對象：網站負責人

## 工作範圍

這份文件只列網站程式、版面、互動、資料呈現及部署工作。實驗數值、訪談事實、科學結論與缺少的內容由相對應負責人提供／確認；收到資料後，網站負責人負責整理與上線。

## 第一批：既有需求與使用問題（已完成）

- [x] **全站使用 Verdana。** 字體 token 集中在 fonts.css，各頁、圖表標籤與導覽共用。
- [x] **每頁播放蓋板動畫。** 每次開啟頁面都播放追逐動畫，包含 404 錯誤頁；保留 Skip 與 reduced-motion。
- [x] **恢復較慢的彎曲追逐。** 依原先需求改為從左往右追逐，追逐段 3.2 秒，捕捉後變為 logo 並縮回左上角；保留現有旋轉環與略過操作。
- [x] **保留 logo 的突出與最高層效果。** 不更動原有 88px 尺寸；驗證高於進度條及手機選單，收合時 navbar 高度約 71px。
- [x] **處理不存在的頁面。** Flask 回傳 404 並提供返回首頁入口；靜態建置輸出 404.html，供部署平台使用。

驗證：首頁再次載入不重播、子頁沒有 intro、動畫自然結束後可以捲動且 navbar logo 恢復顯示；本機未知路徑 404，freeze 成功。平台的錯誤頁行為另在部署後確認。

## 第二批：導覽與閱讀

- [ ] **主選單改用適當按鈕語意。** 現在 mega-toggle 是 javascript:void(0) 連結；改為 button，補初始 aria-expanded、aria-controls、menu ID，以及 Enter／Space／Escape、關閉後焦點回復。
- [ ] **Team tabs 補鍵盤操作。** 已有 tab roles；補方向鍵、Home／End 和 roving tabindex。
- [ ] **Team 自介呈現。** 現在有 focus-visible 翻卡，仍需處理正反面讀屏重複、狀態提示與長自介捲動；可評估改成直接展開。
- [ ] **補 main 與跳過導覽連結。** 每頁有清楚的主標題；Team 目前沒有 h1。調整語意時保留現有外觀。
- [ ] **改善長文手機閱讀。** Results／Notebook 加適當側邊留白；表格與大圖提供捲動／放大提示；避免文字貼邊或圖片被縮到看不清。
- [ ] **Results 圖表編號。** 補 Figure 1／2、內文引用與原尺寸入口；科學圖說由內容負責人確認。
- [ ] **Results 長文結構。** 開頭摘要與完整方法分開；可把方法／來源檔案設為可展開區塊。
- [ ] **跨頁連結。** 收到補齊的內容後，串接 Description → Engineering → Experiments → Notebook → Results；HP／Industry 互相連結。
- [ ] **清掉公開編輯提示。** 確認收到素材或內容負責人同意暫時隱藏後，移除 PHOTO LOG PLACEHOLDER 等框；不能自行補造活動。
- [ ] **移除首頁描述版面的文字。** 例如「Instead of five disconnected cards」；改為說明處理流程的中性文字，涉及成果狀態的句子需內容負責人確認。

## 第三批：資產、維護與部署

- [ ] **圖片語意與載入。** 首頁 future-image 缺 alt；裝飾圖用空 alt，科學圖加可理解描述；非首屏圖補 lazy loading 和尺寸。
- [ ] **分析圖重建環境。** build_results_charts.py 使用 matplotlib，但 dependencies.txt 未包含；建立独立分析依賴與使用說明。
- [ ] **自動建置檢查。** freeze 後檢查內部連結、圖片／CSS／JS、輸出大小及模板／placeholder；先建立清單，再逐步讓正式頁的佔位檢查成為阻擋項。
- [ ] **雙 remote 流程。** 先同步 GitLab／GitHub main，再提交指定檔案、推兩邊；確認 commit 相同、GitLab pipeline 和 Vercel 都完成。
- [ ] **確認 vercel.json 的既存刪除。** 不應混入其他修改；先釐清部署設定與刪除意圖。
- [ ] **頁面輸出清單。** 由內容負責人決定要保留哪些頁，再調整 generator／選單；software、alternative-platform 目前仍會輸出，其他次要頁部分未輸出。
- [ ] **單一首頁來源。** 明確標示 docs/home.md 才是首頁來源，避免根目錄 home.md 或 /home 造成維護混淆。
- [ ] **整理共用樣式。** 集中字體、色彩、間距與圖表規則；分離首頁長段 script，避免多份 CSS 重複覆蓋。
- [ ] **分享資訊。** 補每頁 description／Open Graph，規劃 iGEM／Vercel 的 canonical。
- [ ] **README。** 更新本機啟動、freeze、圖表重建、雙邊更新和驗收方法；修正 package.json 的 team-slug 名稱。
- [ ] **資產清理。** 確認沒有引用再整理舊圖／CSS／檔案。目前約 5.7 MB，沒有必要先犧牲內容來縮檔。

## 收到內容資料後的上線流程

1. 對照另一份「內容與數據補件清單」取得負責人确认的文字、數據和素材。
2. 保留來源、版本及對應頁面；不自行決定矛盾數值的正確答案。
3. 整理版面、圖表與跨頁連結。
4. 完成下面的驗收，再同步兩邊部署。

## 驗收清單

- [ ] Home、Team、HP、Experiments、Notebook、Results：390px、768px、桌機。
- [ ] 200% 文字縮放可讀，沒有整頁橫向溢出；表格可以局部捲動。
- [ ] Tab／Enter／Space／Escape 操作可完成導覽，焦點清楚。
- [ ] reduced-motion 下可直接閱讀，不被蓋板阻擋。
- [ ] logo、progress bar、選單與章節錨點沒有互相遮擋。
- [ ] 圖表字可讀、原尺寸連結可用、圖檔沒有 404。
- [ ] Attribution iframe 在手機／桌機可讀；內容正確性由隊伍確認。
- [ ] 全站重要連結、圖片、CSS／JS 通過檢查。
- [ ] GitLab／GitHub main 與兩邊線上版本一致。

## 本次檢查已通過的部分

17 個線上抽查路徑均回傳 200；本機 25 份 docs 可渲染；本次靜態建置未找到內容區內部連結或圖片缺檔。Team 的 390px 手機選單可展開子項且未見整頁橫向溢出。這些不是全站全裝置驗收，也不表示內容已完成。
