---
session: 13
title: "工程交付：Build、檢查與上線概念"
subtitle: "本機可以還不夠——完整檢查與 build 放慢教學"
duration: "3 小時"
goals:
  - "逐項完成品質檢查並實點連結"
  - "獨立跑 npm run build 並記錄"
  - "能說明 dev/build/freeze 差異"
  - "交出里程碑 C"
---

## 給老師

- 檢查表必須「實點」，禁止空勾。  
- build 失敗是教學機會：帶讀第一個 error 15 分。  
- 部署細節不要求學生當天做完，但概念要考。  

## 0. 分鐘表

| 分鐘 | 活動 |
|------|------|
| 0–15 | 交付金字塔 |
| 15–70 | 品質檢查實點 |
| 70–80 | 休息 |
| 80–130 | build 教學與修復 |
| 130–160 | iGEM/freeze 概念 |
| 160–180 | 里程碑 C 彙整 |

## 1. 交付金字塔

```text
      可展示給外人
           ↑
   build 過 + 連結對 + 內容實
           ↑
        功能做得出
```

## 2. 品質檢查（詳細流程）

使用 `docs/curriculum/handouts/13-quality-checklist.md`。

### 2.1 內容（每項寫證據）

不是只勾，要寫「我看到的網址/句子」。

### 2.2 連結實點清單

至少點：

- 首頁  
- description / engineering / human-practices / contribution / team / attributions  
- class 課表  
- 自己新增頁  

壞掉的寫進待修。

### 2.3 路徑穩定

確認未把 engineering 等改名。

## 3. build 完整教學

### 3.1 指令

```bash
cd 你的/iGemSite
npm run build
```

### 3.2 成功長怎樣

出現編譯成功、靜態頁生成，最後無 Failed。截圖。

### 3.3 失敗怎麼讀

1. 找到第一個 `Error`  
2. 檔案路徑  
3. 行號  
4. 訊息關鍵字  

### 3.4 常見錯誤對照

| 關鍵字 | 可能原因 | 先查 |
|--------|----------|------|
| Missing content file | slug/md | page 與 md |
| Unexpected token | nav 語法 | 逗號括號 |
| Type error | TS | 問老師 |
| Module not found | import 路徑 | @/ 路徑 |

### 3.5 修復循環

修 → 再 build → 直到過或寫卡關報告。

## 4. 環境差異（講慢）

| 環境 | 用途 | 限制 |
|------|------|------|
| dev | 開發 | 較寬鬆 |
| build | 交付檢查 | 較嚴 |
| 官方 wiki | 競賽基準/freeze | 規則最多 |

讀 `docs/DEPLOY_TO_IGEM.md` 重點：外連、字型、圖、CC BY、Freeze。

### 口頭題

1. 本機可以為何還要 build？  
2. Freeze 後還能大改 UI 嗎？  
3. 外連 Google 字型可能有何問題？  

## 5. 里程碑 C

1. 檢查表（含證據）  
2. build 截圖  
3. 待修 ≥3（人+期限）  
4. 一句話風險  

## 6. 完成檢查表

- [ ] 實點連結  
- [ ] build 有跑  
- [ ] 概念三題能答  
- [ ] 里程碑 C 交  

## 7. 下一堂

發表：用架構證明你會做這個站。
