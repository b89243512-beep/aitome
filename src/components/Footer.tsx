import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-2)] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 font-bold text-lg mb-3">
            <Logo size={28} />
            <span>AItome</span>
          </div>
          <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
            Free AI slide generator. Turn any topic into a polished presentation deck in seconds.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#features" className="hover:text-[var(--primary)]">Features</Link></li>
            <li><Link href="/#how-it-works" className="hover:text-[var(--primary)]">How it works</Link></li>
            <li><Link href="/#templates" className="hover:text-[var(--primary)]">Templates</Link></li>
            <li><Link href="/#pricing" className="hover:text-[var(--primary)]">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[var(--primary)]">Home</Link></li>
            <li><Link href="/#faq" className="hover:text-[var(--primary)]">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-[var(--primary)]">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-[var(--primary)]">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">Contact</h4>
          <p className="text-sm text-[var(--muted)] mb-2">Questions or feedback?</p>
          <a href="mailto:hello@aitome.app" className="text-sm font-medium text-[var(--primary)] hover:underline">
            hello@aitome.app
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <p className="max-w-6xl mx-auto px-4 py-5 text-xs text-[var(--muted)] text-center">
          &copy; {new Date().getFullYear()} AItome. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
