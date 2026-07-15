import type { Metadata } from "next";
import Link from "next/link";
import { listClassSessions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Course",
  description:
    "Full course: learn how the Cadture team wiki is built — architecture, routing, components, and content.",
};

export default function ClassIndexPage() {
  const sessions = listClassSessions();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="page-enter max-w-3xl">
        <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-primary">
          Full course · Build the wiki
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-primary-dark">
          做出 Cadture Wiki
        </h1>
        <p className="mt-4 text-base font-bold leading-relaxed text-rose-text">
          完整教學過程：理解這個網站<strong>怎麼做的</strong>，並親手組裝與維護它。Markdown
          只是內容層；你還要學會路由、選單資料、元件管線、首頁組裝、build 與交付。
        </p>
        <p className="mt-3 text-sm font-semibold text-muted">
          14 次 × 約 3 小時 · 會一點 JS 即可 · 每堂含分鐘表、講解、逐步操作、停看聽確認、除錯表、檢查表——請放慢跟著做，不要只掃標題。
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-extrabold">
          <Link
            href="/class/how-to-edit"
            className="fun-btn border-2 border-[#b43852] bg-primary px-5 py-2.5 text-white shadow-[3px_3px_0_rgba(180,56,82,0.2)]"
          >
            課程總覽與能力模型
          </Link>
          <Link
            href="/class/session-01"
            className="fun-btn border-2 border-[#f0c4ce] bg-white px-5 py-2.5 text-primary-dark"
          >
            第 1 次開始
          </Link>
          <Link href="/" className="fun-btn px-4 py-2.5 text-primary underline decoration-wavy">
            Wiki 首頁
          </Link>
        </div>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            t: "內容層",
            d: "Markdown、英文、誠信、對齊官方站。輸入系統的資料從這裡來。",
            s: "第 4–5、12 次為主",
          },
          {
            t: "結構層",
            d: "網址、page.tsx、nav 物件陣列。決定使用者如何走到每一頁。",
            s: "第 6–7、11 次為主",
          },
          {
            t: "系統層",
            d: "元件、資料流、首頁 map、樣式系統、build。網站引擎如何運轉。",
            s: "第 8–10、13–14 次為主",
          },
        ].map((c) => (
          <div key={c.t} className="sticker p-5">
            <h2 className="font-display text-lg font-bold text-primary-dark">{c.t}</h2>
            <p className="mt-2 text-sm font-semibold text-rose-text">{c.d}</p>
            <p className="mt-3 text-xs font-black uppercase tracking-wide text-primary">{c.s}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 sticker-sky p-6 sm:p-8">
        <h2 className="font-display text-lg font-bold text-primary-dark">學期過關（不是只會改 md）</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-semibold text-rose-text">
          <li>口述：請求 /engineering 時程式如何讀 md 並畫出頁面</li>
          <li>操作：改 content、改 nav、新增一頁三步驟</li>
          <li>解釋：首頁 YAML + page.tsx 的 map 與 WikiPage 文件頁的差異</li>
          <li>交付：npm run build、檢查表、內容誠信</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold text-primary-dark">14 次課程</h2>
        <p className="mt-2 text-sm font-semibold text-muted">
          每一堂都是完整教材：原理 → 逐步操作 → 排查 → 檢查表 → 作業。請左開教材、右開編輯器。
        </p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {sessions.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/class/${s.slug}`}
                className="card-hover sticker flex h-full flex-col p-5"
              >
                <span className="text-xs font-black uppercase tracking-wider text-primary">
                  第 {s.session} 次 · {s.duration ?? "3 小時"}
                </span>
                <span className="mt-2 font-display text-lg font-bold text-primary-dark">
                  {s.title}
                </span>
                {s.subtitle && (
                  <span className="mt-1 text-sm font-semibold text-muted">{s.subtitle}</span>
                )}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
