"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";
import { IconShield } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href?: string, children?: { href: string }[]) => {
    if (href && (pathname === href || pathname.startsWith(href + "/"))) return true;
    return children?.some((c) => pathname === c.href || pathname.startsWith(c.href + "/")) ?? false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-[#f0c4ce] bg-[#fff8f6]/95 shadow-[0_8px_24px_rgba(201,76,103,0.08)] backdrop-blur-xl"
          : "bg-[#fff8f6]/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#f0c4ce] bg-gradient-to-br from-[#f8ccd9] to-[#ffedd5] text-primary shadow-[3px_3px_0_rgba(201,76,103,0.15)] transition duration-200 group-hover:-rotate-6 group-hover:scale-105">
            <IconShield className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight text-primary-dark">
              CadArmor
            </div>
            <div className="text-[11px] font-extrabold text-muted">VIS iGEM 2026</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {navItems.map((item) => {
            const active = isActive(item.href, item.children);
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  data-active={active}
                  className="nav-link px-3.5 py-2 text-sm font-extrabold text-rose-text"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  data-active={active}
                  className="nav-link flex items-center gap-1 px-3.5 py-2 text-sm font-extrabold text-rose-text"
                  aria-expanded={activeDropdown === item.label}
                  onClick={() =>
                    setActiveDropdown((v) => (v === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <span className="text-[10px] text-primary" aria-hidden>
                    ▼
                  </span>
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 w-72 pt-2">
                    <div className="sticker overflow-hidden p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-2xl px-3 py-2.5 transition duration-200 hover:bg-blush ${
                            pathname === child.href ? "bg-blush" : ""
                          }`}
                        >
                          <div className="text-sm font-extrabold text-primary-dark">
                            {child.label}
                          </div>
                          {child.desc && (
                            <div className="mt-0.5 text-xs font-semibold text-muted">
                              {child.desc}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/description"
            className="fun-btn hidden border-2 border-[#b43852] bg-primary px-4 py-2 text-sm text-white shadow-[3px_3px_0_rgba(180,56,82,0.25)] sm:inline-flex"
          >
            Explore
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#f0c4ce] bg-white text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="text-lg font-black" aria-hidden>
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t-2 border-[#f0c4ce] bg-[#fff8f6] lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-[#f0d5db] pb-2 last:border-0">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block rounded-xl px-2 py-2 text-sm font-extrabold text-primary-dark"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div className="px-2 py-2 text-xs font-black uppercase tracking-wider text-primary">
                      {item.label}
                    </div>
                    <div className="space-y-0.5 pl-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-2 py-2 text-sm font-bold text-rose-text hover:bg-blush"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
