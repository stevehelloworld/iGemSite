---
session: 10
title: "設計系統與 Tailwind"
subtitle: "在不破壞品牌的前提下調整版面與 RWD"
duration: "3 小時"
goals:
  - "能讀懂常見 Tailwind utility class"
  - "能做小幅樣式調整並保持玫瑰／圓角風格"
  - "會檢查手機寬與桌機寬"
---

## 1. Tailwind 是什麼？

傳統 CSS：自己寫 class 名稱再寫規則。  
Tailwind：直接在 HTML/JSX 上寫「工具 class」，例如：

```tsx
<div className="mt-4 text-sm font-bold text-primary">
```

| class | 意思（直覺） |
|-------|----------------|
| `mt-4` | margin-top |
| `text-sm` | 較小字 |
| `font-bold` | 粗體 |
| `flex` | flex 排版 |
| `grid` | 網格 |
| `sm:` / `lg:` | 某個螢幕寬度以上才生效 |
| `rounded-2xl` | 大圓角 |
| `border-2` | 邊框厚度 |

本站還有自訂色名如 `text-primary`、`bg-blush`（在 `globals.css` / theme 定義）。

---

## 2. 完整步驟：閱讀一個元件的 class

### 步驟 1
打開 `src/components/Card.tsx` 或首頁 `src/app/page.tsx` 任一 `className=`。

### 步驟 2
挑 **一行** class 字串，拆解寫在紙上：

範例字串：

```text
sticker p-6
```

你的解釋：

- `sticker`：本站自訂卡片風格  
- `p-6`：內距  

### 步驟 3
再拆一串含 RWD 的：

```text
grid gap-5 md:grid-cols-3
```

- 預設單欄 grid  
- 中等寬度以上 3 欄  

---

## 3. 完整步驟：安全的小改動練習

**只允許改「間距／對齊」這類低風險項目**，避免整站風格崩壞。

### 練習 A：加大某區塊 padding

在 `page.tsx` 某個 section 的 `py-14` 暫時改成 `py-16`，看留白變化，再改回或保留組內同意的版本。

### 練習 B：標題對齊

把某 `text-center` 暫時拿掉，看版面差異，理解為什麼官方區塊常用置中大標。

### 練習 C：窄螢幕檢查

1. 打開開發者工具  
2. 切換手機裝置模式  
3. 檢查首頁三張 Problem 卡是否可讀、選單是否可用  

記錄一個「窄螢幕問題」（若有）交給老師。

---

## 4. 設計紀律（評分會看）

| 要 | 不要 |
|----|------|
| 延續玫瑰／暖白／圓角 | 突然螢光綠＋尖角科技風 |
| 字夠大、對比足夠 | 淺灰字配淺底 |
| 重點用標題層級 | 整頁都是粗體大喊 |

---

## 5. 個人作業 #3

1. 為你負責頁選擇 `tone`（rose/mint/sky/cream/lavender）  
2. 在該頁 `content/pages/....md` front matter 設定  
3. 用 3 句中文說明：為什麼這個 tone 適合該頁主題  

---

## 6. 完成檢查表

- [ ] 能解釋 5 個 utility class  
- [ ] 做過一次安全小改並驗證  
- [ ] 手機寬檢查截圖  
- [ ] tone 作業構想完成  

## 7. 下一堂

新增完整一頁三步驟（整學期技能驗收之一）。
