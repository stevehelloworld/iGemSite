---
session: 13
title: "工程交付：Build、檢查與上線概念"
subtitle: "像工程師一樣交付，而不是『我本機可以』"
duration: "3 小時"
goals:
  - "會跑 npm run build 並解讀基本錯誤"
  - "完成全站檢查表"
  - "能說明 dev / build / freeze 差異"
---

## 1. 交付金字塔

```text
可以展示
  ↑
build 通過 + 連結正確 + 內容誠實
  ↑
功能做得出來
```

本堂處理中層。

---

## 2. 完整：品質檢查

使用 `docs/curriculum/handouts/13-quality-checklist.md`  
逐點開瀏覽器實點，不要憑印象勾。

---

## 3. 完整：build 流程

```bash
npm run build
```

### 成功

截圖保存。

### 失敗

1. 複製第一個 Error  
2. 定位檔案行號  
3. 修復  
4. 重跑  

常見與課程相關錯誤：

- slug / md 檔名不一致  
- nav 語法錯  
- TS 型別（問老師）  

---

## 4. 上線與 iGEM 概念（完整說明）

| 環境 | 用途 |
|------|------|
| localhost dev | 開發 |
| GitHub 等預覽 | 分享進度 |
| 2026.igem.wiki/vis | 官方線上基準／競賽相關 |

閱讀 `docs/DEPLOY_TO_IGEM.md`：字型、外連、static 圖、CC BY、Freeze。

學生應能回答：

- 為什麼本機可以仍不算交卷？  
- 什麼是 Wiki Freeze？  

---

## 5. 里程碑 C

檢查表 + build 結果 + 待修清單（負責人+期限）  

## 6. 下一堂

發表：證明你理解網站怎麼做的。
