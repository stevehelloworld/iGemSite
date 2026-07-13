# 第 6 次｜你會的 JS → 本站 TSX

## 對照

```js
// 你可能寫過
function greet(name) {
  return "Hello " + name;
}
```

```tsx
// 本站 page 很像「回傳畫面的 function」
import WikiPage from "@/components/WikiPage";

export default function Page() {
  return <WikiPage slug="description" />;
}
```

| JS | 這裡 |
|----|------|
| `function Page()` | 元件 |
| `return ...` | 回傳 JSX（長得像 HTML） |
| `"description"` | 傳給元件的資料（props） |
| `import ...` | 使用別的檔案 |

## 網址規則

資料夾 `src/app/engineering/` + 檔案 `page.tsx`  
→ 網址 `/engineering`

## 小練習

1. `/team` 對應哪個資料夾？  
2. `slug="team"` 寫成 `slug="teams"` 會怎樣？  
3. 長文通常改 `content/pages/....md` 還是 `page.tsx`？  

（1）`src/app/team/`（2）找不到對應 md 或內容錯誤（3）md  
