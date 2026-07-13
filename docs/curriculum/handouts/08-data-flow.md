# 第 8 次｜內容如何變成網頁

把步驟背起來，考試／發表會用得上：

```
1. 你編輯  content/pages/engineering.md
2. 函式    getPageBySlug("engineering")   （src/lib/content.ts）
3. 元件    WikiPage                        （讀 front matter + 正文）
4. 元件    MarkdownBody                    （Markdown → HTML）
5. 版面    PageHero + ContentLayout
6. 路由    src/app/engineering/page.tsx → 網址 /engineering
```

## 用 JS  trace 一次

```ts
// page.tsx 裡大致是：
<WikiPage slug="engineering" />
//            ↑ 像函式參數

// WikiPage 裡會：
getPageBySlug(slug)  // 像 call function(slug)
// 得到 { frontmatter, body }  // 像得到一個物件
```

## 小測驗

1. 只改英文段落，應改哪個資料夾？  
2. 網址 `/team` 對應哪個資料夾？  
3. 全站上方選單主要改哪個檔？  
4. `slug` 比較像：迴圈 / 函式參數 / CSS 顏色？  

答：1) content/  2) src/app/team/  3) src/data/nav.ts  4) 函式參數  
