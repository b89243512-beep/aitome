import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg">
          <Logo size={32} />
          <span>AItome</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-[var(--muted)]">
          <Link href="/#features" className="hover:text-[var(--fg)]">Features</Link>
          <Link href="/#how-it-works" className="hover:text-[var(--fg)]">How it works</Link>
          <Link href="/#templates" className="hover:text-[var(--fg)]">Templates</Link>
          <Link href="/#pricing" className="hover:text-[var(--fg)]">Pricing</Link>
          <Link href="/#faq" className="hover:text-[var(--fg)]">FAQ</Link>
        </nav>
        <Link
          href="/#generator"
          className="inline-flex items-center gap-1 text-sm font-semibold text-white px-4 py-2 rounded-lg shadow-sm hover:opacity-90 transition-opacity"
          style={{ background: "linear-gradient(90deg, #7C3AED, #EC4899)" }}
        >
          Generate free
        </Link>
      </div>
    </header>
  );
}
