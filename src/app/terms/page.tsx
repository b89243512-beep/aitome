import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for AI Tome, the free AI slide generator.",
  alternates: { canonical: "https://aitome.app/terms" },
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
        <p className="text-sm text-[var(--muted)] mb-8">Last updated: January 2026</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Acceptance</h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          By using AI Tome you agree to these terms. If you do not agree, please do not use the service.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">The service</h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          AI Tome is an AI-powered slide generator and presentation editor offered as a web application. The free tier
          is provided as is, without warranty of any kind. We work hard to keep the service accurate and reliable, but
          we cannot guarantee specific results for every prompt.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Acceptable use</h2>
        <ul className="text-[var(--muted)] space-y-2 mb-4 leading-relaxed">
          <li>• Do not use AI Tome to generate content that violates applicable laws or the rights of others.</li>
          <li>• Do not use AI Tome to create disinformation, harassment, or sexually explicit content involving minors.</li>
          <li>• Do not attempt to disrupt the service or extract proprietary models or data.</li>
          <li>• You are responsible for the prompts you submit and the decks you publish.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Your content</h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          You retain ownership of the prompts you submit and the decks you generate. You grant AI Tome a limited licence
          to host, store, and display that content solely to provide the service. We do not use your content to train
          AI models.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Intellectual property</h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          The AI Tome name, logo, and site design are ours. The underlying AI models are licensed from third parties
          and used in accordance with their terms. The decks generated for you are yours to use.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Liability</h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          To the extent permitted by law, AI Tome is not liable for any indirect or consequential damages arising from
          use of the service. Our total liability is limited to the amount you have paid us in the past twelve months.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Changes</h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          We may update these terms from time to time. The current version is always available on this page.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
        <p className="text-[var(--muted)] leading-relaxed">
          Questions about these terms? Write to <a href="mailto:hello@aitome.app" className="text-[var(--primary)] underline">hello@aitome.app</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
