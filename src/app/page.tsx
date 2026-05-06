import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles, Wand2, Image as ImageIcon, Languages, Layers, Download, Zap, Lock, Palette, Star, Check, ArrowRight, Play, Brain, Quote } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-4 pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full opacity-30 blur-3xl animate-float-slow"
              style={{ background: "radial-gradient(circle, #C4B5FD, transparent 70%)" }}
            />
            <div
              className="absolute top-40 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl animate-float-slower"
              style={{ background: "radial-gradient(circle, #FBCFE8, transparent 70%)" }}
            />
            <div
              className="absolute top-60 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-float-slow"
              style={{ background: "radial-gradient(circle, #DDD6FE, transparent 70%)" }}
            />
          </div>

          <div className="max-w-6xl mx-auto text-center relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--primary)] bg-[var(--primary-bg)] px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Sparkles className="w-3.5 h-3.5" />
              POWERED BY ADVANCED AI · 100% FREE
            </span>

            <h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-5 leading-[1.05] animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              Beautiful AI slides
              <br />
              from a <span className="gradient-text">single prompt</span>.
            </h1>

            <p
              className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              AItome turns your topic into a polished, on-brand presentation deck in seconds.
              Pitch decks, lectures, sales reports — type a sentence, get a complete deck.
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              <Link
                href="#generator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold shadow-lg hover:opacity-95 hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7, #EC4899)" }}
              >
                <Wand2 className="w-4 h-4" />
                Generate slides for free
              </Link>
              <Link
                href="#templates"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border)] bg-white/70 backdrop-blur font-semibold hover:border-[var(--primary)] transition-colors"
              >
                <Play className="w-4 h-4" />
                See examples
              </Link>
            </div>

            {/* Demo card */}
            <div
              id="generator"
              className="max-w-3xl mx-auto animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <div className="rounded-2xl bg-white border border-[var(--border)] shadow-2xl shadow-purple-500/10 p-6 md:p-7 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  </div>
                  <span className="text-xs text-[var(--muted)] font-mono ml-2">aitome.app/new</span>
                </div>

                <label className="block text-sm font-medium mb-2 text-[var(--muted)]">
                  Describe your presentation
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    placeholder="e.g. A 10-slide pitch deck for a Series A SaaS company that helps remote teams plan their week"
                    className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none font-medium"
                    defaultValue=""
                  />
                  <div className="absolute right-3 bottom-3 flex items-center gap-2">
                    <span className="text-xs text-[var(--muted)]">⌘ + Enter</span>
                    <button
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-white text-sm font-semibold"
                      style={{ background: "linear-gradient(90deg, #7C3AED, #EC4899)" }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Generate
                    </button>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <PromptChip text="Pitch deck for an AI startup" />
                  <PromptChip text="History of the Roman Empire — 12 slides" />
                  <PromptChip text="Q1 sales review for the leadership team" />
                  <PromptChip text="Lesson plan: photosynthesis (grade 7)" />
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] mt-4">
                Free preview · no signup · export to .pptx, PDF, Google Slides
              </p>
            </div>

            {/* Trust strip */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> 4.8 / 5 (1,240 reviews)</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[var(--primary)]" /> 12s avg generation</span>
              <span className="flex items-center gap-1.5"><Languages className="w-4 h-4 text-[var(--primary)]" /> 30+ languages</span>
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[var(--primary)]" /> Private by default</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="px-4 py-20 bg-[var(--bg-2)] border-y border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary-bg)] px-3 py-1.5 rounded-full mb-3">
                Features
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Everything you need, <span className="gradient-text">none of the busywork.</span>
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                AItome handles the structure, design, and visuals so you can focus on the message.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Feature
                icon={<Brain className="w-5 h-5" />}
                title="Smart outline generation"
                body="Type a topic and AItome drafts a logical, narrative-driven slide outline tailored to your audience."
              />
              <Feature
                icon={<Palette className="w-5 h-5" />}
                title="Beautiful built-in themes"
                body="Twelve hand-tuned themes with matching fonts, gradients and chart styles. Switch with one click."
              />
              <Feature
                icon={<ImageIcon className="w-5 h-5" />}
                title="Auto-generated visuals"
                body="AI-generated illustrations and stock-grade photos placed exactly where they support your point."
              />
              <Feature
                icon={<Layers className="w-5 h-5" />}
                title="Editable everything"
                body="Every slide is a fully editable canvas — tweak text, swap images, drag elements, restructure flows."
              />
              <Feature
                icon={<Languages className="w-5 h-5" />}
                title="30+ languages"
                body="Generate decks in English, Turkish, German, Spanish, French, Japanese, Korean, Mandarin and more."
              />
              <Feature
                icon={<Download className="w-5 h-5" />}
                title="Export anywhere"
                body="Download as .pptx, .pdf, or push directly to Google Slides. Share a public link with one click."
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary-bg)] px-3 py-1.5 rounded-full mb-3">
                How it works
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                From prompt to <span className="gradient-text">presentation.</span>
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Three steps, twelve seconds. No design tools, no PowerPoint headaches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Step n={1} title="Describe your idea" body="Type a single sentence — or paste in raw notes. AItome works with anything from one-liners to long documents." />
              <Step n={2} title="AI does the work" body="AItome generates a structured outline, writes the content, picks visuals, and applies a theme — all in seconds." />
              <Step n={3} title="Edit and export" body="Refine any slide in our visual editor, then export to PowerPoint, PDF, or Google Slides — or share a public link." />
            </div>
          </div>
        </section>

        {/* Templates / use cases */}
        <section id="templates" className="px-4 py-20 bg-[var(--bg-2)] border-y border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary-bg)] px-3 py-1.5 rounded-full mb-3">
                Templates
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Built for <span className="gradient-text">every kind of deck.</span>
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Pick a template to start fast, or describe your own and AItome will compose it from scratch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <TemplateCard tone="violet" title="Pitch Deck" body="A clean, investor-ready 10-slide narrative covering problem, solution, market, traction and ask." count="10 slides" />
              <TemplateCard tone="pink" title="Sales Deck" body="A persuasive deck for buyer meetings: value proposition, pain points, ROI, and a clear next step." count="12 slides" />
              <TemplateCard tone="indigo" title="Lecture / Lesson" body="Structured teaching slides with objectives, key concepts, examples, and a quick recap." count="14 slides" />
              <TemplateCard tone="violet" title="Quarterly Review" body="Goals, metrics, wins, blockers, and a forward-looking plan — perfect for board updates." count="11 slides" />
              <TemplateCard tone="pink" title="Conference Talk" body="A speaker-friendly format with strong openings, story beats, and a memorable closing slide." count="20 slides" />
              <TemplateCard tone="indigo" title="Product Update" body="Highlight new features, customer impact, and roadmap — paired with crisp visuals." count="9 slides" />
            </div>

            <div className="text-center mt-10">
              <Link href="#generator" className="inline-flex items-center gap-1.5 text-[var(--primary)] font-semibold hover:underline">
                Or describe your own
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                People ship faster <span className="gradient-text">with AItome.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <Testimonial
                quote="I made our entire fundraising deck in one afternoon. What used to take a week of back-and-forth is now a single prompt."
                name="Mira D."
                role="Founder, Loom Labs"
              />
              <Testimonial
                quote="My students love the colour-coded lecture decks. AItome saves me about three hours of slide work per class."
                name="Onur K."
                role="University Lecturer"
              />
              <Testimonial
                quote="The export to Google Slides just works. Our sales team can pick up the deck and run with it the same day."
                name="Sarah W."
                role="Head of Revenue"
              />
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section id="pricing" className="px-4 py-20 bg-[var(--bg-2)] border-y border-[var(--border)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary-bg)] px-3 py-1.5 rounded-full mb-3">
                Pricing
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Free forever. <span className="gradient-text">Pro when you scale.</span>
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Most users never need to upgrade. Pro is for power users who generate dozens of decks per month.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <PriceCard
                name="Free"
                price="$0"
                tag="forever"
                features={[
                  "Up to 5 decks per month",
                  "10-slide max per deck",
                  "Standard themes",
                  "PDF & .pptx export",
                  "Single language at a time",
                ]}
                cta="Start for free"
                ctaHref="#generator"
                primary={false}
              />
              <PriceCard
                name="Pro"
                price="$12"
                tag="per month"
                features={[
                  "Unlimited decks",
                  "Up to 60-slide decks",
                  "All themes + brand kit",
                  "Google Slides + .pptx + PDF export",
                  "Multi-language generation",
                  "Priority AI queue",
                ]}
                cta="Try Pro free for 7 days"
                ctaHref="#generator"
                primary
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Questions, answered</h2>
              <p className="text-[var(--muted)]">Quick answers to what people ask before trying AItome.</p>
            </div>

            <div className="space-y-3">
              <Faq q="Is AItome really free?" a="Yes. The free tier covers up to five decks per month with full editing and PDF/PowerPoint export. No credit card required to start." />
              <Faq q="What can I generate?" a="Pitch decks, sales decks, lecture and lesson slides, conference talks, product updates, board reports, lesson plans, study notes, marketing one-pagers, and basically anything else you can describe in a sentence." />
              <Faq q="Can I edit the slides afterwards?" a="Absolutely. Every slide is a fully editable canvas — change text, swap images, restructure the flow, switch themes, or rebuild a single slide from a new prompt." />
              <Faq q="Which formats can I export?" a="PowerPoint (.pptx), PDF, and Google Slides. You can also share a public link or invite collaborators directly inside AItome." />
              <Faq q="Does AItome work in my language?" a="Yes. AItome generates decks in over 30 languages, including English, Turkish, German, French, Spanish, Portuguese, Russian, Japanese, Korean, and Mandarin Chinese." />
              <Faq q="What about my data and privacy?" a="Your prompts and decks are private to your account. We never train models on customer content. You can delete any deck at any time from your dashboard." />
              <Faq q="How long does generation take?" a="A 10-slide deck typically takes 8–15 seconds. More complex decks with custom illustrations can take up to 30 seconds." />
              <Faq q="Can teams collaborate?" a="Yes — Pro and Team plans include shared workspaces, comments, and live multi-user editing. Free users can share view-only links." />
            </div>

            <div className="text-center mt-12">
              <Link
                href="#generator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold shadow-lg hover:opacity-95 transition-opacity"
                style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7, #EC4899)" }}
              >
                <Wand2 className="w-4 h-4" />
                Try AItome free
              </Link>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="px-4 py-16">
          <div
            className="max-w-5xl mx-auto rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #4C1D95 0%, #7C3AED 35%, #A855F7 65%, #EC4899 100%)" }}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/30 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
            </div>

            <h2 className="relative text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Stop staring at blank slides.
            </h2>
            <p className="relative text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Start with a prompt and let AItome do the heavy lifting. You'll have a polished deck before your coffee gets cold.
            </p>
            <Link
              href="#generator"
              className="relative inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-[var(--primary)] font-bold shadow-lg hover:scale-[1.02] transition-transform"
            >
              <Sparkles className="w-5 h-5" />
              Generate my first deck
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="relative text-xs text-white/70 mt-4">No credit card · No signup · 100% free preview</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function PromptChip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-[var(--primary-bg)] text-[var(--primary)] font-medium hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer">
      {text}
    </span>
  );
}

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="bg-white border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)] hover:-translate-y-0.5 transition-all">
      <div
        className="w-11 h-11 rounded-xl text-white flex items-center justify-center mb-4 shrink-0"
        style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}
      >
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed">{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="text-center">
      <div
        className="w-14 h-14 rounded-2xl text-white flex items-center justify-center mx-auto mb-5 font-extrabold text-xl shadow-md"
        style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}
      >
        {n}
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-[var(--muted)] leading-relaxed">{body}</p>
    </div>
  );
}

function TemplateCard({ tone, title, body, count }: { tone: "violet" | "pink" | "indigo"; title: string; body: string; count: string }) {
  const gradients: Record<string, string> = {
    violet: "linear-gradient(135deg, #7C3AED, #A855F7)",
    pink: "linear-gradient(135deg, #DB2777, #EC4899)",
    indigo: "linear-gradient(135deg, #4F46E5, #7C3AED)",
  };
  return (
    <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--primary)] hover:-translate-y-0.5 transition-all">
      <div className="aspect-[16/9] relative" style={{ background: gradients[tone] }}>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="bg-white/15 backdrop-blur rounded-lg w-3/4 h-3/4 p-4 flex flex-col justify-between border border-white/30">
            <div className="space-y-1.5">
              <div className="h-2 bg-white/70 rounded w-3/5"></div>
              <div className="h-2 bg-white/40 rounded w-4/5"></div>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-6 bg-white/30 rounded"></div>
              <div className="h-6 bg-white/30 rounded"></div>
              <div className="h-6 bg-white/30 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="font-bold">{title}</h3>
          <span className="text-xs text-[var(--muted)] font-mono">{count}</span>
        </div>
        <p className="text-sm text-[var(--muted)] leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="bg-white border border-[var(--border)] rounded-2xl p-6">
      <Quote className="w-6 h-6 text-[var(--primary)] mb-3 opacity-60" />
      <p className="text-[var(--fg)] leading-relaxed mb-5">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm"
          style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-[var(--muted)]">{role}</p>
        </div>
      </div>
    </div>
  );
}

function PriceCard({
  name, price, tag, features, cta, ctaHref, primary,
}: {
  name: string; price: string; tag: string; features: string[]; cta: string; ctaHref: string; primary: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-7 ${primary ? "text-white shadow-2xl shadow-purple-500/20" : "bg-white border border-[var(--border)]"}`}
      style={primary ? { background: "linear-gradient(135deg, #4C1D95, #7C3AED, #A855F7)" } : {}}
    >
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="text-lg font-bold">{name}</h3>
        {primary && (
          <span className="text-[10px] font-bold tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-full">
            POPULAR
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-4xl font-extrabold">{price}</span>
        <span className={`text-sm ${primary ? "text-white/80" : "text-[var(--muted)]"}`}>{tag}</span>
      </div>
      <ul className="space-y-2.5 mb-7">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className={`w-4 h-4 mt-0.5 shrink-0 ${primary ? "text-pink-300" : "text-[var(--primary)]"}`} />
            <span className={primary ? "text-white/95" : ""}>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`inline-flex items-center justify-center w-full px-5 py-3 rounded-xl font-semibold transition-all ${
          primary
            ? "bg-white text-[var(--primary)] hover:scale-[1.02]"
            : "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="bg-white border border-[var(--border)] rounded-xl p-5 group">
      <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
        <span>{q}</span>
        <span className="text-[var(--primary)] group-open:rotate-45 transition-transform text-2xl leading-none font-light">+</span>
      </summary>
      <p className="text-[var(--muted)] mt-3 leading-relaxed">{a}</p>
    </details>
  );
}
