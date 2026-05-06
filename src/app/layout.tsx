import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aitome.app"),
  title: {
    default: "AItome — Free AI Slide Generator | Create Presentations from a Prompt",
    template: "%s | AItome",
  },
  description:
    "AItome is a free AI slide generator and presentation maker. Type any topic and AItome turns it into a polished, beautiful slide deck in seconds. Export to PowerPoint, Google Slides, or PDF. No design skills, no signup.",
  keywords: [
    "AI slide generator", "AI presentation maker", "AI PowerPoint generator",
    "free AI slide creator", "prompt to slides", "AI deck builder",
    "create slides with AI", "AI slide deck", "automatic slide generation",
    "AI presentation generator", "text to slides", "AI pitch deck generator",
    "AI Google Slides generator", "free presentation maker", "AI slideshow maker",
    "AI keynote generator", "instant slides AI", "presentation AI tool",
  ],
  openGraph: {
    title: "AItome — Free AI Slide Generator",
    description: "Turn any prompt into a polished presentation in seconds. Free, fast, beautiful.",
    type: "website",
    url: "https://aitome.app",
    siteName: "AItome",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AItome — Free AI Slide Generator",
    description: "Generate beautiful slide decks from a single prompt. 100% free.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aitome.app" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.svg",
  },
  category: "productivity",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AItome",
    url: "https://aitome.app",
    logo: "https://aitome.app/logo.svg",
    description: "Free AI slide generator and presentation maker. Turn any topic into a polished deck in seconds.",
    sameAs: [],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AItome",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Presentation Software",
    operatingSystem: "Web, iOS, Android",
    description:
      "AItome is a free AI-powered slide generator. Describe your topic and AItome creates a complete presentation deck with structured outline, content, and design — ready to edit and export.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1240",
      bestRating: "5",
      worstRating: "1",
    },
    url: "https://aitome.app",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AItome",
    url: "https://aitome.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aitome.app/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is AItome free?", acceptedAnswer: { "@type": "Answer", text: "Yes. AItome's core slide generation is free with no signup required. Premium features for unlimited generations and advanced themes are optional." } },
      { "@type": "Question", name: "What can I generate with AItome?", acceptedAnswer: { "@type": "Answer", text: "Pitch decks, lecture slides, business reports, conference talks, lesson plans, sales decks, board presentations, and more — anything you can describe in a sentence." } },
      { "@type": "Question", name: "Can I edit the generated slides?", acceptedAnswer: { "@type": "Answer", text: "Yes. AItome produces a fully editable deck. You can change text, swap images, switch themes, reorder slides, and tweak any element before exporting." } },
      { "@type": "Question", name: "Which formats can I export?", acceptedAnswer: { "@type": "Answer", text: "Export to .pptx (PowerPoint), .pdf, Google Slides, or share a public web link with view or edit access." } },
      { "@type": "Question", name: "Does AItome support multiple languages?", acceptedAnswer: { "@type": "Answer", text: "Yes. AItome can generate presentations in over 30 languages including English, Turkish, German, French, Spanish, Portuguese, Russian, Japanese, Korean and Chinese." } },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        {children}
      </body>
    </html>
  );
}
