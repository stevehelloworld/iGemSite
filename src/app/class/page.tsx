import type { Metadata } from "next";
import Link from "next/link";
import { listClassSessions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Course",
  description: "VIS iGEM wiki full classroom materials — 14 detailed sessions.",
};

export default function ClassIndexPage() {
  const sessions = listClassSessions();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="page-enter max-w-3xl">
        <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-primary">
          Classroom materials · Ready to teach
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-primary-dark">
          Team Wiki 完整教材
        </h1>
        <p className="mt-4 text-base font-bold leading-relaxed text-rose-text">
          這不是只有大綱的課表。每一堂都有完整說明、逐步操作、除錯表與完成檢查清單。請直接打開各次連結，依步驟在電腦上操作。
        </p>
        <p className="mt-3 text-sm font-semibold text-muted">
          共 14 次 × 約 3 小時。Wiki 正文維持英文；教材說明為中文。對象：會一點程式、學過一點
          JS 的隊員。
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-extrabold">
          <Link
            href="/class/how-to-edit"
            className="fun-btn border-2 border-[#b43852] bg-primary px-5 py-2.5 text-white shadow-[3px_3px_0_rgba(180,56,82,0.2)]"
          >
            必讀：如何改網站文字
          </Link>
          <Link
            href="/class/session-01"
            className="fun-btn border-2 border-[#f0c4ce] bg-white px-5 py-2.5 text-primary-dark"
          >
            從第 1 次開始
          </Link>
          <Link href="/" className="fun-btn px-4 py-2.5 text-primary underline decoration-wavy">
            回 wiki 首頁
          </Link>
        </div>
      </div>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="sticker p-5">
          <h2 className="font-display text-base font-bold text-primary-dark">上課怎麼用？</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm font-semibold text-rose-text">
            <li>
              終端機執行 <code className="text-primary">npm run dev</code>
            </li>
            <li>
              開 <code className="text-primary">/class</code> 當教材
            </li>
            <li>依當次「完整步驟」在另一分頁操作網站</li>
            <li>下課前勾「完成檢查表」</li>
          </ol>
        </div>
        <div className="sticker-mint p-5">
          <h2 className="font-display text-base font-bold text-primary-dark">老師備課</h2>
          <p className="mt-3 text-sm font-semibold text-rose-text">
            更細的時間分配、評量與量規見 repo：
            <code className="text-primary">docs/curriculum/LESSON_PLAN_14.md</code>
            。講義 PDF 可從 handouts 列印。
          </p>
        </div>
        <div className="sticker-sky p-5">
          <h2 className="font-display text-base font-bold text-primary-dark">內容與官方站</h2>
          <p className="mt-3 text-sm font-semibold text-rose-text">
            首頁文案與區塊順序對齊{" "}
            <a
              href="https://2026.igem.wiki/vis/"
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              2026.igem.wiki/vis
            </a>
            。改宣稱性數字前必須經指導教師確認。
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold text-primary-dark">14 次完整教材</h2>
        <p className="mt-2 text-sm font-semibold text-muted">
          每堂含：時間建議、觀念說明、逐步操作、錯誤排查、檢查表、回家作業。
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
                {s.goals && s.goals[0] && (
                  <span className="mt-3 text-xs font-bold text-rose-text">目標：{s.goals[0]}</span>
                )}
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 sticker p-6 sm:p-8">
        <h2 className="font-display text-lg font-bold text-primary-dark">鐵律（每堂都適用）</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-semibold text-rose-text">
          <li>Wiki 正文用英文；沒有真實數據就不要寫假結果。</li>
          <li>首頁與內容以官方站為準：https://2026.igem.wiki/vis/</li>
          <li>
            一般改文字：改 <code>content/</code> 裡的 Markdown（先看{" "}
            <Link href="/class/how-to-edit" className="text-primary underline">
              如何改網站文字
            </Link>
            ）。
          </li>
          <li>
            競賽重要路徑不要亂改名：attributions、contribution、engineering、human-practices。
          </li>
        </ul>
      </section>
    </div>
  );
}
