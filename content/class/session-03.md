---
session: 3
title: "CSS 與視覺語言"
subtitle: "做出學生 wiki 風格卡片，並用 class 當狀態"
duration: "3 小時"
goals:
  - "能用 CSS 控制顏色、間距、圓角、陰影"
  - "做出接近本站的卡片感"
  - "用 JS 切換 class 改變外觀"
---

## 1. 設計目標（對齊本站，不是亂漂亮）

Cadture 站的視覺重點：

- 暖白背景  
- 玫瑰主色 `#C94C67`  
- 大圓角卡片  
- 柔和粉紅邊框  
- 清楚可讀的深色字  

本堂在**練習頁**還原這種感覺，之後才看得懂 Tailwind 一長串 class 在幹嘛。

---

## 2. 完整步驟：加上 `styles.css`

### 步驟 1：同資料夾建立 `styles.css`

```css
/* 全頁基礎 */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: #fff8f6;
  color: #4a2f34;
  line-height: 1.5;
}

header,
main,
footer {
  max-width: 960px;
  margin: 0 auto;
  padding: 1.25rem;
}

h1 {
  color: #b43852;
  margin-bottom: 0.25rem;
}

/* 卡片列 */
.cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 700px) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.card {
  background: #ffffff;
  border: 2px solid #f0c4ce;
  border-radius: 1.25rem;
  padding: 1rem 1.1rem;
  box-shadow: 3px 3px 0 rgba(201, 76, 103, 0.08);
}

.card h3 {
  margin-top: 0;
  color: #b43852;
}

/* 按鈕 */
#btn-demo {
  margin-top: 1rem;
  border: 2px solid #b43852;
  background: #c94c67;
  color: #fff;
  font-weight: 700;
  border-radius: 999px;
  padding: 0.6rem 1.1rem;
  cursor: pointer;
}

#btn-demo:hover {
  background: #b43852;
}

/* 狀態 class：被選中的卡 */
.card.is-active {
  border-color: #c94c67;
  background: #fff5f8;
  transform: translateY(-2px);
}
```

### 步驟 2：HTML 已有

```html
<link rel="stylesheet" href="styles.css" />
```

### 步驟 3：重新整理瀏覽器

三卡應有白底圓角與粉邊。

---

## 3. 完整步驟：JS 切換 class（狀態）

更新 `main.js`：

```js
const btn = document.querySelector("#btn-demo");
const cards = document.querySelectorAll(".card");
const cdCard = document.querySelector("#card-cd");

btn.addEventListener("click", function () {
  // 先清掉所有 active
  cards.forEach(function (card) {
    card.classList.remove("is-active");
  });
  // 只點亮鎘那一張
  cdCard.classList.add("is-active");
});
```

### 觀念

| 寫法 | 意思 |
|------|------|
| `classList.add("is-active")` | 加上狀態 |
| `classList.remove(...)` | 移除狀態 |
| CSS `.card.is-active` | 「同時有兩個 class」時的樣子 |

**連到本站：** React 元件裡常見 `className="sticker ..."`，本質也是「用 class 字串控制外觀」。

---

## 4. 對照本站色票

| 名稱 | 色碼 | 用途 |
|------|------|------|
| primary | `#C94C67` | 重點、按鈕 |
| primary-dark | `#B43852` | 標題 |
| background | `#FFF8F6` | 頁面底 |
| border | `#F0C4CE` | 卡片邊 |

詳細見 repo `DESIGN.md`（給設計參考，課堂記住主色即可）。

---

## 5. 本堂完成檢查表

- [ ] 有 `styles.css` 且成功套用  
- [ ] 桌機寬度三卡橫排（或至少美觀）  
- [ ] 按鈕可讓鎘卡進入 `is-active`  
- [ ] 能向同學解釋 class 與狀態  

---

## 6. 回家作業

1. 截圖：練習頁 vs `localhost:3000` 首頁，寫 3 點相似、3 點相異。  
2. （選做）打開 `src/components/Card.tsx`，圈出 5 個你看得懂的 class 關鍵字（如 `rounded`、`border`）。  

## 7. 下一堂

正式進入 Cadture：用 Markdown 改 `content/`，一存檔網站就更新。
