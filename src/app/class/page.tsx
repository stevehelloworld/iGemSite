import type { Metadata } from "next";
import Link from "next/link";
import { listClassSessions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Course",
  description: "VIS iGEM wiki course materials for students — 14 sessions.",
};

export default function ClassIndexPage() {
  const sessions = listClassSessions();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="page-enter max-w-3xl">
        <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-primary">
          Classroom materials
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-primary-dark">
          Team Wiki 課程
        </h1>
        <p className="mt-4 text-base font-bold leading-relaxed text-rose-text">
          給 VIS iGEM 隊員的上課說明。共 14 次、每次約 3 小時。網站競賽內容以英文為主；本區說明以中文撰寫，方便課堂使用。
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-extrabold">
          <Link
            href="/class/how-to-edit"
            className="fun-btn border-2 border-[#b43852] bg-primary px-5 py-2.5 text-white shadow-[3px_3px_0_rgba(180,56,82,0.2)]"
          >
            如何改網站文字
          </Link>
          <Link
            href="/"
            className="fun-btn border-2 border-[#f0c4ce] bg-white px-5 py-2.5 text-primary-dark"
          >
            回首頁
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl font-bold text-primary-dark">課表</h2>
        <p className="mt-2 text-sm font-semibold text-muted">
          點進各次看「今天要做什麼／完成了再走／回家」。老師完整教案在 repo 的{" "}
          <code className="text-primary">docs/curriculum/</code>。
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

      <section className="mt-14 sticker-sky p-6 sm:p-8">
        <h2 className="font-display text-lg font-bold text-primary-dark">鐵律（每堂都適用）</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-semibold text-rose-text">
          <li>Wiki 正文用英文；沒有真實數據就不要寫假結果。</li>
          <li>首頁與內容以官方站為準：https://2026.igem.wiki/vis/</li>
          <li>一般改文字：改 <code>content/</code> 裡的 Markdown。</li>
          <li>競賽重要路徑不要亂改名：attributions、contribution、engineering、human-practices。</li>
        </ul>
      </section>
    </div>
  );
}
