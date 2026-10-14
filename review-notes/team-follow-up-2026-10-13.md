# Cadture 團隊補件與核實清單

更新日期：2026-10-13

這份清單列出需要研究、實驗、HP、教育及隊伍負責人補資料或確認的事項。網站上出現的佔位文字、證據不足或前後不一致，代表目前需要核對；**不等於已判定內容為假**。請以原始紀錄回答，不要為了配合現有文字推測或補造數據。若某項工作沒有做，請直接回覆「尚未完成／尚未測量」，網站會據此標示限制或未來工作。

## 1. 核心頁面內容

|負責人|頁面／項目|請提供或確認|
|---|---|---|
|全隊／專案負責人|[Description](../docs/description.md)|研究動機、背景來源、系統架構、目標，以及本年度實際完成範圍。|
|Wet lab|[Engineering](../docs/engineering.md)|實際的 Design → Build → Test → Learn 歷程；每次失敗、修改原因、測試結果及下一步。|
|Wet／dry lab|[Contribution](../docs/contribution.md)|可供其他隊伍使用的 protocol、資料、分析工具或 parts；附檔案、使用方式和限制。|
|Wet lab|[Parts](../docs/parts.md)|Registry ID／連結、序列、功能、構築對應、定序確認及 characterization；未完成項目請明確標示。|
|Wet lab／安全負責人|[Safety & Security](../docs/safety-and-security.md)|實際使用的菌株與鎘鹽、操作及廢棄物流程、containment 措施，以及哪些是已採用措施、哪些只是建議或計畫。|
|Wet／dry lab|[Measurement](../docs/measurement.md)|儀器設定、plate map、對照、背景扣除、GFP/OD 計算、growth fitting、重複樣本定義及品質檢查。|
|Dry lab|[Model](../docs/model.md)|若模型已完成，提供方程、假設、單位、參數來源、程式、驗證和如何影響設計；若未完成，請確認狀態。|

## 2. Results 數據核對

請由 Wet lab 提供原始檔，由 Dry lab／分析負責人重現計算；下列只是網站文字與表格間的待核對點，這份清單不預設哪一邊正確。

|ID|待核對內容|需要的回覆|
|---|---|---|
|R01|摘要把 pVIS2、pVIS5、pVIS6、pVIS8 一併稱為抑制超過 25 倍；表中剩餘訊號 6.3%、5.6%、3.9% 分別約為 15.9、17.9、25.6 倍。|確認分母、各構築的倍數及摘要應採用的說法。|
|R02|pVIS1 在 400 nM 的圖表值為 1.111，文字則為 1.135；1.135 同時出現在 300 nM。|查原始工作簿，確認正確濃度和值。|
|R03|方法一處稱 biological replicates，限制段稱 technical replicates。|說明孔位是否來自獨立培養、培養批次數，以及每個條件的 n。|
|R04|文字稱兩次標準培養基實驗在 400 nM 均不高於 300 nM；Sep 10 數值為 19,135 > 18,859。|核對原始讀值及合適的趨勢描述。|
|R05|文字稱不同實驗板每個濃度的差異不到 3%；40 nM 的 799 與 758 約差 5.1%，300 nM 也約差 3.2%。|提供差異公式、納入數據及正確範圍。|
|R06|文字稱 endpoint 與 peak 排序完全相同；endpoint 的 pVIS2／pVIS5 都四捨五入為 6.3%，peak 則為 8.2%／7.8%。|提供未四捨五入數據，確認可支持的比較措辭。|
|R07|文字稱 standard 與 Na-free 排序不變；pVIS2／pVIS3 在 standard 為 6.3%／14.2%，Na-free 為 8.6%／4.2%。|確認排序及原先解讀是否需要修訂。|
|R08|文字稱曲線單調，但 pVIS8 在 300→400 nM 由 800 降至 747，低濃度也有起伏。|核對數值，調整「單調」等概括敘述。|
|R09|200→400 nM 的變化同時被描述為 tripled 和 2-fold。|確認比較的起點與終點；若是 200→400 nM，濃度是加倍。|
|R10|pVIS8 生長結果在方法段已有約 2% 的未解差異，涉及兩組孔位。|提供納入孔位、平均／加權方式及重算結果。|
|R11|35 cycles、每次間隔 1,118 秒，和文中 10.6／10.1／9.1 小時的時間描述需要對照。|提供各板時間戳、cycle 數和 endpoint 定義。|
|R12|摘要說只有 pVIS7 有生長成本；後文指出 pVIS3 受損，pVIS8 在 400 nM 為 0.989，卻被列入「相同或更快」。|確認成本的比較基準、誤差範圍與數據能支持的結論。|

### 重算所需原始資料

- [ ] 五次 kinetic plate runs 的原始工作簿和 plate maps：Sep 10、Sep 27、Sep 28、Sep 30、Oct 2。
- [ ] 每孔的構築、鎘濃度、培養基、獨立培養來源；排除孔位與排除理由。
- [ ] pVIS1–8 的 insert／序列／構築版本對照，特別是 pVIS5–8 的身分與確認紀錄。
- [ ] 生長速率擬合區間、公式、逐孔值、平均值及誤差資訊。
- [ ] GFP 與 OD 背景扣除、pMH45 正規化、跨板平均方法及工作簿公式。
- [ ] No-Na 培養基完整配方、glucose／kanamycin 濃度、Cd stock 稀釋表及 nM 單位確認。
- [ ] Tecan 原始 read 結構；說明 3×3 reads 與工作簿 Read 1／2／3 的對應關係。

## 3. Results 結論需要的證據

請逐項附上實驗、文獻或紀錄；若沒有做過，請回覆「尚未測量／驗證」，網站會改成觀察、限制或未來工作。

- [ ] GFP 降低是否有直接的 Cd²⁺ 定量、游離鎘測量或適當對照支持「捕捉／降低游離鎘」的解讀？僅有 GFP 訊號不足以直接測出結合的鎘量。
- [ ] pYC08 是否有超量程標記、儀器線性範圍或 gain 測試支持「detector saturation」？請確認 RFU 與 GFP/OD 的比較方式。
- [ ] pVIS7 是否做過 CFU 或活死染色？若只有 OD，請確認是否只能描述生長延遲，不能排除細胞死亡。
- [ ] 表面展示、MT 選擇性及 binding 機制是否有序列、表面定位／展示驗證和來源支持？請區分設計、假說與已驗證結果。
- [ ] 「MT 保護生長、沒有生長成本」是否有合適比較基準和誤差支持？請一併解釋 pVIS3、pVIS7 的結果。
- [ ] 圖表 noise floor 60、pVIS6 在 8 nM 顯示下限 10、濃度分類軸及跨板 pMH45 平均方式，請各自提供依據或確認改成明示限制。

## 4. 實驗紀錄、構築與安全

### Wet lab

- [ ] Experiments 目前涵蓋 Jun 23–Jul 21，Notebook 到 Aug 4，Results 已包含九至十月資料。請補 Aug–Oct 實驗日誌及每次實驗的目的、操作者、觀察、結果和下一步。
- [ ] 說明 pVIS1–4 到 pVIS1–8 的構築來源、各版本進度、定序確認和實際測試狀態。
- [ ] 補 primer 序列／長度、plasmid map、關鍵膠圖及確認結果。
- [ ] 結構預測請提供輸入序列、工具版本／日期、scaffold 範圍及 PAE／pLDDT 的解讀限制；預測不等於表面展示或吸附已驗證。

### Safety、containment 與 Professor Ho 訪談

- [ ] 核實 [Safety & Security](../docs/safety-and-security.md) 所述的實際操作、培養物及含鎘廢棄物處理，提供可公開的流程或紀錄。
- [ ] [Professor Ja-An Annie Ho 訪談](../docs/human-practices.md)提出 containment 與含鎘生物質後續處理需求。請標明哪些建議已落實、哪些仍是設計方向；說明 Cd-loaded biomass 實際如何回收、保存或處置。若尚無流程，請明確列為未完成。

## 5. Human Practices、Industry 與 Education

- [ ] 每次活動／訪談提供日期、對象或單位、摘要、實際建議，以及建議如何改變專案或實驗；如有照片，請確認公開授權。
- [ ] Human Practices 有兩處照片紀錄佔位框：補可公開素材與活動資訊，或確認移除。
- [ ] HP 使用「Zhao Lian Industry」，Industry 頁面使用「Mega Union」；確認是同一對象還是不同對象，並核對正式名稱與訪談紀錄。
- [ ] Industry 的「99.9% 膜分離效率」及「約 30 分鐘處理」請提供來源、適用條件和引用方式；分清文獻資料、受訪者說法與團隊推估。
- [ ] Education 有兩處 PHOTO LOG PLACEHOLDER：每場補日期、地點、對象、人數及其統計來源、教材、回饋和後續改進。未發生的活動請標為計畫。
- [ ] 若保留 Open Resources 說法，請提供可公開閱讀或下載的實際教材及授權狀態。

## 6. Team、Attributions 與背景數字

- [ ] Team 頁目前有 14 個肖像佔位和 7 份自我介紹待補。請確認最終名單、姓名、角色；由本人核對介紹文字及照片公開同意。
- [ ] 確認 iGEM Attributions team ID 6423、官方表單完成狀態、隊員分工及外部協助是否完整。
- [ ] 首頁和 Industry 中的 Detect／Capture／Separate／Recover／Release 流程，逐步標示已實作、設計目標或未來計畫；直接回收、高純度、選擇性、低成本和安全排放等說法請附證據或列為目標。
- [ ] 污染比例、「超過 98%」、2.5／5.0 mg/kg 等背景數字，提供官方來源、年份、分母及適用介質；確認土壤濃度與水質監測沒有混用。
- [ ] 台灣城市污染場景若為示意圖，請確認標示為示意；若指涉實際案例，請提供來源。

## 7. 請團隊決定是否保留的頁面

請確認下列頁面是否有實際成果要公開；若尚無內容，回覆「未完成」或建議不輸出，避免保留模板造成誤解。

- [ ] software、alternative-platform
- [ ] hardware、inclusivity、entrepreneurship、sustainability
- [ ] team2（舊版 Team 頁）

## 回覆格式

每個負責項目請回覆：**負責人｜目前狀態｜原始檔案或來源｜確認後的數值／文字｜尚缺事項**。原始數據請保留工作簿公式、plate map 和實驗標籤；若結果無法確認，請直接寫明不確定的部分與原因。
