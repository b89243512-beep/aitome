import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AItome handles your data. We never train models on your prompts or decks.",
  alternates: { canonical: "https://aitome.app/privacy" },
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-[var(--muted)] mb-8">Last updated: January 2026</p>

        <h2 className="text-xl font-bold mt-8 mb-3">In short</h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          AItome is built around a simple principle: your prompts and decks are yours. We do not train AI models on
          your content, we do not sell your data, and we keep collection to the minimum required to run the service.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">What we collect</h2>
        <ul className="text-[var(--muted)] space-y-2 mb-4 leading-relaxed">
          <li>• Account email and authentication tokens (only if you create an account).</li>
          <li>• Prompts and generated decks, stored to your account so you can return to them.</li>
          <li>• Anonymous, aggregate usage analytics: page views, country, device class.</li>
          <li>• Standard server logs (IP address, request path) for security and debugging, retained briefly.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">What we don&apos;t do</h2>
        <ul className="text-[var(--muted)] space-y-2 mb-4 leading-relaxed">
          <li>• We do not train AI models on your prompts, content, or generated decks.</li>
          <li>• We do not sell or rent your data to third parties.</li>
          <li>• We do not show ads inside the product.</li>
          <li>• We do not place tracking cookies that personally identify you.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Third-party services</h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          AItome uses third-party AI providers to generate content and images. Prompts may be sent to these providers
          for processing, governed by their own privacy terms and our data-processing agreements that prohibit using
          your content for training.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Your rights</h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          You can export or delete any deck at any time from your dashboard. You can also delete your account, which
          permanently removes your decks and personal data within 30 days.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
        <p className="text-[var(--muted)] leading-relaxed">
          Questions or requests about this policy? Write to <a href="mailto:hello@aitome.app" className="text-[var(--primary)] underline">hello@aitome.app</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
