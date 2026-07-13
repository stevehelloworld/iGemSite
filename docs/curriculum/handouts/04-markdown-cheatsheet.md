# Markdown 速查（第 4 次）

```markdown
# 最大標題（頁面通常用 front matter 的 title）
## 次標題
### 小標題

一般段落這樣寫。

**粗體**  *斜體*

- 項目一
- 項目二

1. 第一
2. 第二

[連結文字](https://2026.igem.wiki/vis/)

![說明文字](/images/example.png)

> 重要提示或引用

| 欄位 A | 欄位 B |
|--------|--------|
| 內容   | 內容   |
```

## 本站頁面檔位置

`content/pages/頁名.md`

## Front matter 範例

```yaml
---
title: Description
eyebrow: Project
subtitle: Short English line
tone: rose
toc:
  - id: what-should-this-page-contain
    label: What to include
---
```

`## What Should this Page Contain?` 的 id 會變成 `what-should-this-page-contain`。
