import Link from "next/link";
import { navItems } from "@/data/nav";

export default function Navbar() {
  return (
    <header className="starter-nav">
      <div className="page-shell starter-nav__inner">
        <Link className="starter-brand" href="/">
          <span aria-hidden="true">◉</span>
          Cadture
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="starter-nav__links">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href ?? "/"}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* TODO(S07-2): add a buildable mobile menu button and state. */}
      </div>
    </header>
  );
}
