import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  Eye,
  Gem,
  Handshake,
  Inbox,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  MousePointer2,
  PenLine,
  Radar,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Ascend Freelancer — Turn Your Skill Into Paid Freelance Work",
  description:
    "Ascend Freelancer helps skilled beginners build offers, portfolio proof, lead pipelines, outreach, proposals, and delivery workflows with AI agents while staying in control.",
  alternates: {
    canonical: "/freelancer",
  },
};

const problems = [
  {
    icon: Target,
    title: "No proof yet",
    copy: "You have a skill, but no portfolio that earns trust.",
  },
  {
    icon: Eye,
    title: "Invisible bids",
    copy: "You compete with hundreds of profiles that already have reviews.",
  },
  {
    icon: Sparkles,
    title: "No clear offer",
    copy: "You know how to edit, design, code, or write, but not what to sell.",
  },
  {
    icon: Send,
    title: "Random outreach",
    copy: "Finding and messaging the right clients takes more time than the work itself.",
  },
] satisfies CardItem[];

const agents = [
  {
    icon: Compass,
    title: "Profile Agent",
    copy: "Builds your niche, offer, pricing, and public profile.",
    tint: "from-[#ffe7dc] to-[#f4e5ff]",
  },
  {
    icon: ClipboardCheck,
    title: "Proof Agent",
    copy: "Turns guided missions into portfolio case studies.",
    tint: "from-[#f4e5ff] to-[#e9f8ff]",
  },
  {
    icon: Search,
    title: "Opportunity Agent",
    copy: "Finds and scores realistic client opportunities.",
    tint: "from-[#fff0df] to-[#f7e7ff]",
  },
  {
    icon: Send,
    title: "Outreach Agent",
    copy: "Prepares personalized messages and follow-ups.",
    tint: "from-[#ffe5da] to-[#eef4ff]",
  },
  {
    icon: Inbox,
    title: "Inbox Agent",
    copy: "Sorts replies and drafts smart responses.",
    tint: "from-[#eaf8ff] to-[#fff3e8]",
  },
  {
    icon: Handshake,
    title: "Deal Agent",
    copy: "Creates proposals, scope, timelines, and revision rules.",
    tint: "from-[#f3e8ff] to-[#fff4df]",
  },
  {
    icon: BriefcaseBusiness,
    title: "Delivery Agent",
    copy: "Manages previews, revisions, and final handoff.",
    tint: "from-[#eaf5ff] to-[#ffeade]",
  },
  {
    icon: ShieldCheck,
    title: "Ascend Guardian",
    copy: "Reviews client-facing actions before they go out.",
    tint: "from-[#ffe7dc] to-[#ece9ff]",
  },
] satisfies AgentItem[];

const pathSteps = [
  ["Stage 1", "Build Proof"],
  ["Stage 2", "Find Leads"],
  ["Stage 3", "Outreach"],
  ["Stage 4", "Conversation"],
  ["Stage 5", "Proposal"],
  ["Stage 6", "Delivery"],
];

const modes = [
  {
    title: "Full Autonomous",
    tag: "For users who want speed",
    copy: "Ascend runs routine work inside your rules, approval gates, documents, contracts, and final delivery.",
    icon: WandSparkles,
  },
  {
    title: "Semi-Automated",
    tag: "Recommended",
    copy: "Ascend executes normal tasks and asks before sensitive or uncertain actions.",
    icon: MousePointer2,
    featured: true,
  },
  {
    title: "Fully Manual",
    tag: "For maximum control",
    copy: "Ascend researches, writes, and organizes. You approve every external action.",
    icon: LockKeyhole,
  },
];

const guardianChecks = [
  "Agent creates action",
  "Guardian reviews",
  "Approve / Enhance / Ask Why / Block",
  "Execute by your mode",
  "Rewrites generic outreach into personalized outreach",
  "Flags unrealistic promises",
  "Checks project scope and revision limits",
  "Stops duplicate or spammy follow-ups",
];

const dashboardCards = [
  {
    title: "Offer",
    value: "Short-form video editor for founder-led brands",
    icon: PenLine,
  },
  {
    title: "Leads",
    value: "24 scored this week",
    icon: Radar,
  },
  {
    title: "Outreach",
    value: "7 ready for approval",
    icon: MessageSquareText,
  },
  {
    title: "Delivery",
    value: "2 client workflows active",
    icon: Layers3,
  },
];

type CardItem = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

type AgentItem = CardItem & {
  tint: string;
};

export default function FreelancerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "Service"],
    name: "Ascend Freelancer",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    serviceType: "AI freelance business system",
    url: "/freelancer",
    description:
      "Ascend Freelancer helps skilled beginners build offers, portfolio proof, lead pipelines, outreach, proposals, and delivery workflows with AI agents while staying in control.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf3] text-[#10203f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FreelancerNav />
      <FloatingClouds />
      <HeroSection />
      <ProblemSection />
      <SystemSection />
      <AgentsSection />
      <PathSection />
      <ControlModesSection />
      <GuardianSection />
      <DashboardPreviewSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}

function FreelancerNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#fffaf3]/70 px-5 py-4 shadow-[0_14px_44px_rgba(36,42,75,0.06)] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3 text-[#10203f]">
          <span className="grid size-9 place-items-center rounded-2xl border border-[#10203f]/10 bg-white/70 shadow-[0_12px_30px_rgba(16,32,63,0.08)]">
            <Sparkles className="size-4 text-[#ff725e]" />
          </span>
          <span className="font-serif text-xl font-bold tracking-[-0.03em]">
            Ascend
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-[#526077] md:flex">
          <Link href="/" className="hover:text-[#ff725e]">
            Home
          </Link>
          <Link href="/#paths" className="hover:text-[#ff725e]">
            Paths
          </Link>
          <a href="#path" className="hover:text-[#ff725e]">
            How It Works
          </a>
          <a href="#agents" className="hover:text-[#ff725e]">
            Agents
          </a>
          <Link href="/#tiers" className="hover:text-[#ff725e]">
            Founder Stream
          </Link>
        </div>
        <Link
          href="/freelancer/setup"
          className="group inline-flex items-center gap-2 rounded-full bg-[#10203f] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_36px_rgba(16,32,63,0.18)] transition hover:-translate-y-1 hover:bg-[#172a51] hover:text-white"
        >
          Start Free
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </Link>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-32 lg:pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(255,135,106,0.16),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(180,153,255,0.18),transparent_28%),linear-gradient(180deg,#fffaf3_0%,#fff7f1_48%,#fffaf3_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.96fr_1.04fr]">
        <div>
          <Eyebrow>ASCEND FREELANCER</Eyebrow>
          <h1 className="mt-8 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10203f] sm:text-6xl lg:text-[5.6rem]">
            Turn your skill into{" "}
            <span className="bg-gradient-to-r from-[#f46f62] via-[#e986a6] to-[#9b8df5] bg-clip-text text-transparent">
              paid freelance work.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5a6680] sm:text-xl">
            Ascend builds your offer, portfolio, lead list, outreach,
            proposals, and delivery workflow while you stay in control.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/freelancer/setup" className="freelancer-btn-primary">
              Build My Freelance System
              <ArrowRight className="size-4" />
            </Link>
            <a href="#path" className="freelancer-btn-secondary">
              See How It Works
            </a>
          </div>
          <p className="mt-7 text-sm font-medium text-[#758096]">
            Built for editors, designers, developers, writers, and marketers.
          </p>
        </div>
        <div className="relative">
          <div className="freelancer-glass-card relative overflow-hidden p-4 sm:p-5">
            <div className="relative min-h-[24rem] overflow-hidden rounded-[1.65rem] bg-[linear-gradient(160deg,#ffe3d0_0%,#cfc3ff_42%,#ffd5b7_100%)] shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_12%,rgba(255,255,255,0.9),transparent_14%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(16,32,63,0.18))]" />
              <div className="absolute inset-x-8 top-12 h-36 rounded-[2rem] border border-white/50 bg-white/20 backdrop-blur-[2px]" />
              <div className="absolute left-1/2 top-28 h-40 w-28 -translate-x-1/2 rounded-full bg-[#10203f]/85 shadow-[0_28px_80px_rgba(16,32,63,0.28)]" />
              <div className="absolute left-1/2 top-20 h-16 w-16 -translate-x-1/2 rounded-full bg-[#f6c0a2]" />
              <div className="absolute bottom-16 left-1/2 h-20 w-80 -translate-x-1/2 rounded-[50%] bg-[#10203f]/18 blur-sm" />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(255,250,243,0.62))]" />
            </div>
          </div>
          <div className="freelancer-glass-card absolute -bottom-12 left-6 max-w-[22rem] p-5 shadow-[0_22px_70px_rgba(16,32,63,0.14)] sm:left-auto sm:right-0">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-[#ffe4da] text-[#ff725e]">
                  <Sparkles className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#10203f]">
                    Ascend is working
                  </p>
                  <p className="text-xs text-[#7a8497]">LIVE</p>
                </div>
              </div>
            </div>
            <ul className="mt-4 grid gap-3 text-sm text-[#5a6680]">
              {[
                "Building your offer",
                "Creating portfolio proof",
                "Finding qualified leads",
                "Preparing personalized outreach",
                "Reviewing your next move",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="size-4 text-[#7f75e8]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="FREELANCING SHOULD NOT FEEL LIKE A CASINO"
        title="Crowded platforms were not built for beginners."
        copy="Most marketplaces reward profiles that already have proof. That leaves new and skilled freelancers in the cold: bidding low, sending generic messages, and hoping."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {problems.map((problem) => (
          <SoftCard key={problem.title} item={problem} />
        ))}
      </div>
    </section>
  );
}

function SystemSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>YOUR AI FREELANCE BUSINESS SYSTEM</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl">
            Not another job board. Your own client engine.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5a6680]">
            Tell Ascend what you can do, how much time you have, and what
            outcome you want. Your agents build the system around you.
          </p>
          <ul className="mt-8 grid gap-4 text-sm font-semibold text-[#526077]">
            {[
              "Find a profitable, realistic offer",
              "Build proof before you pitch",
              "Identify clients worth contacting",
              "Create personalized outreach and follow-ups",
              "Keep projects, previews, revisions, and payments organized",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 size-5 text-[#ff725e]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#agents" className="freelancer-btn-secondary mt-9">
            Explore the agent system
            <ChevronRight className="size-4" />
          </a>
        </div>
        <div className="relative">
          <div className="freelancer-glass-card overflow-hidden p-5">
            <div className="relative min-h-[32rem] rounded-[1.7rem] bg-[linear-gradient(145deg,#fff2dd_0%,#f7e8ff_48%,#ffe2c8_100%)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.82),transparent_18%),radial-gradient(circle_at_80%_8%,rgba(255,255,255,0.48),transparent_20%)]" />
              <div className="absolute bottom-28 left-16 h-36 w-48 rounded-[50%] bg-[#d9ead7]" />
              <div className="absolute bottom-20 right-24 h-44 w-64 rotate-[-8deg] rounded-[1.4rem] border border-[#10203f]/10 bg-white/60 shadow-[0_24px_70px_rgba(16,32,63,0.12)]" />
              <div className="absolute bottom-14 left-28 h-32 w-56 rotate-[3deg] rounded-[1.4rem] border border-[#10203f]/10 bg-white/75 shadow-[0_24px_70px_rgba(16,32,63,0.12)]" />
              <div className="absolute bottom-10 right-16 h-24 w-24 rounded-full bg-[#7b4b38]/45" />
              <FloatingMiniCard
                className="left-5 top-8"
                icon={Compass}
                title="Profile Agent"
                copy="Drafting your motion-design offer for short-form ads"
              />
              <FloatingMiniCard
                className="right-4 top-48"
                icon={Search}
                title="Opportunity Agent"
                copy="3 qualified leads ready for your review"
              />
              <FloatingMiniCard
                className="bottom-4 left-8"
                icon={ShieldCheck}
                title="Ascend Guardian"
                copy="Reviewing outreach before send"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentsSection() {
  return (
    <section id="agents" className="px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="THE AGENT SYSTEM"
        title="A calm team of agents building your freelance business."
        copy="Each agent owns one piece of the client engine. You choose how much they can do and what requires your approval."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {agents.map((agent) => {
          const Icon = agent.icon;

          return (
            <article
              key={agent.title}
              className="group rounded-[1.6rem] border border-white/80 bg-white/70 p-6 shadow-[0_18px_60px_rgba(16,32,63,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_30px_90px_rgba(16,32,63,0.14)]"
            >
              <div
                className={`grid size-11 place-items-center rounded-2xl bg-gradient-to-br ${agent.tint} text-[#10203f] shadow-inner`}
              >
                <Icon className="size-5" />
              </div>
              <h3 className="mt-8 font-serif text-xl font-semibold tracking-[-0.025em]">
                {agent.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#5f6b82]">
                {agent.copy}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PathSection() {
  return (
    <section id="path" className="px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="THE PATH"
        title="From skill to client system in four steps."
        copy="Ascend turns an unclear freelance idea into a structured operating system you can run each week."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {pathSteps.map(([stage, label], index) => (
          <div
            key={label}
            className="rounded-[1.35rem] border border-white/80 bg-white/72 px-5 py-7 text-center shadow-[0_18px_50px_rgba(16,32,63,0.07)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(16,32,63,0.12)]"
          >
            <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#a4aabd]">
              {stage}
            </p>
            <p className="mt-3 font-serif text-lg font-semibold">{label}</p>
            <p className="mt-4 text-xs text-[#7a8497]">
              {index === 0
                ? "Turn skill into trust."
                : index === 5
                  ? "Finish cleanly."
                  : "Move one stage forward."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ControlModesSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/80 bg-white/45 p-6 shadow-[0_24px_90px_rgba(16,32,63,0.08)] backdrop-blur-2xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Eyebrow>YOU STAY IN CONTROL</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl">
              Choose how autonomous Ascend should be.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5a6680]">
              Switch modes any time. Your rules. Your pace. Your name.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {modes.map((mode) => {
              const Icon = mode.icon;

              return (
                <article
                  key={mode.title}
                  className={`rounded-[1.55rem] border p-6 shadow-[0_18px_60px_rgba(16,32,63,0.08)] transition duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_28px_88px_rgba(16,32,63,0.13)] ${
                    mode.featured
                      ? "border-[#ff725e]/35 bg-[#fff4ee]"
                      : "border-white/80 bg-white/72"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#a4aabd]">
                      {mode.featured ? "Recommended" : "Control Mode"}
                    </p>
                    <Icon className="size-4 text-[#ff725e]" />
                  </div>
                  <h3 className="mt-7 font-serif text-xl font-semibold">
                    {mode.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f6b82]">
                    {mode.copy}
                  </p>
                  <span className="mt-6 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#6d7490]">
                    {mode.tag}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-[1.35rem] border border-[#10203f]/10 bg-white/75 px-5 py-4 text-sm leading-6 text-[#5a6680] shadow-[0_16px_46px_rgba(16,32,63,0.07)]">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#ff725e]" />
          <p>
            Ascend never accepts contracts, changes your price floor, collects
            money, or releases final work without your approval.
          </p>
        </div>
      </div>
    </section>
  );
}

function GuardianSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="freelancer-glass-card overflow-hidden p-4">
          <div className="relative min-h-[24rem] rounded-[1.7rem] bg-[linear-gradient(180deg,#a999ee_0%,#ffd0ad_48%,#162648_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.65),transparent_12%)]" />
            <div className="absolute bottom-12 left-0 right-0 h-32 bg-[linear-gradient(160deg,transparent_0_45%,rgba(16,32,63,0.86)_45%_50%,transparent_50%_100%)] opacity-70" />
            <div className="absolute bottom-20 left-20 h-24 w-60 rounded-[50%] bg-[#10203f]/45 blur-[1px]" />
            <div className="absolute bottom-10 left-1/2 grid size-16 -translate-x-1/2 place-items-center rounded-full bg-[#ffe3b7] shadow-[0_0_80px_rgba(255,211,145,0.7)]">
              <ShieldCheck className="size-7 text-[#10203f]" />
            </div>
          </div>
        </div>
        <div>
          <Eyebrow>ASCEND GUARDIAN</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl">
            Every important move gets checked before it goes out.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a6680]">
            Ascend Guardian reviews client-facing work for clarity,
            truthfulness, relevance, pricing logic, spam risk, and quality.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {guardianChecks.map((check, index) => (
              <div
                key={check}
                className="flex items-center gap-3 rounded-[1.15rem] border border-white/80 bg-white/72 px-4 py-3 text-sm font-semibold text-[#526077] shadow-[0_16px_44px_rgba(16,32,63,0.06)]"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#ffe0d8] text-xs font-black text-[#ff725e]">
                  {index + 1}
                </span>
                {check}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreviewSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="DASHBOARD PREVIEW"
        title="One peaceful view of your freelance system."
        copy="Offer, proof, leads, messages, proposals, delivery, and next actions stay organized in one place."
      />
      <div className="mx-auto mt-14 max-w-7xl rounded-[2rem] border border-white/80 bg-white/55 p-4 shadow-[0_28px_100px_rgba(16,32,63,0.1)] backdrop-blur-2xl sm:p-6 lg:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[1.6rem] bg-[#10203f] p-6 text-white">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-white/10">
                <Gem className="size-5 text-[#ffd8c9]" />
              </span>
              <div>
                <p className="font-serif text-2xl font-semibold">Ascend</p>
                <p className="text-xs text-white/55">Freelancer Path</p>
              </div>
            </div>
            <div className="mt-10 grid gap-3 text-sm text-white/68">
              {["Path", "Agents", "Leads", "Outreach", "Delivery"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl px-4 py-3 ${
                      index === 0 ? "bg-white text-[#10203f]" : "bg-white/5"
                    }`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </aside>
          <div className="grid gap-5">
            <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,#fff8ef,#f2ecff)] p-6">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff725e]">
                    Today
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.03em]">
                    Review 7 outreach drafts before sending.
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#526077] shadow-[0_12px_36px_rgba(16,32,63,0.08)]">
                  <Bell className="size-4 text-[#ff725e]" />
                  Guardian ready
                </span>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {dashboardCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="rounded-[1.45rem] border border-white/80 bg-white/76 p-5 shadow-[0_16px_50px_rgba(16,32,63,0.07)] transition hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(16,32,63,0.12)]"
                  >
                    <Icon className="size-5 text-[#ff725e]" />
                    <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#a4aabd]">
                      {card.title}
                    </p>
                    <p className="mt-3 font-serif text-xl font-semibold">
                      {card.value}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl rounded-[2.25rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(255,232,221,0.76),rgba(239,235,255,0.82))] px-6 py-16 text-center shadow-[0_30px_110px_rgba(16,32,63,0.12)] backdrop-blur-2xl sm:px-10">
        <Eyebrow>START WITHOUT GUESSING</Eyebrow>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl">
          Build the freelance system around the skill you already have.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5a6680]">
          Start with your current skill, time, proof level, and comfort zone.
          Ascend turns that into the first practical version of your freelance
          business.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/freelancer/setup" className="freelancer-btn-primary">
            Start Free
            <ArrowRight className="size-4" />
          </Link>
          <Link href="/#paths" className="freelancer-btn-secondary">
            Back to Ascend Paths
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#10203f]/10 px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-sm text-[#5f6b82] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold text-[#10203f]">
            Ascend
          </p>
          <p className="mt-1">Freelancer Path by Crevu Labs</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <Link href="/#paths">Paths</Link>
          <a href="#agents">Agents</a>
          <a href="#path">How It Works</a>
          <Link href="/freelancer/setup">Start Free</Link>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#10203f] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#5a6680]">
        {copy}
      </p>
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#10203f]/10 bg-white/70 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#647089] shadow-[0_10px_32px_rgba(16,32,63,0.06)] backdrop-blur-xl">
      <span className="size-1.5 rounded-full bg-[#ff725e]" />
      {children}
    </span>
  );
}

function SoftCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[1.55rem] border border-white/80 bg-white/72 p-6 shadow-[0_18px_60px_rgba(16,32,63,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_30px_90px_rgba(16,32,63,0.14)]">
      <div className="grid size-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,#ffe6dc,#eee8ff)] text-[#10203f]">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-8 font-serif text-xl font-semibold tracking-[-0.025em]">
        {item.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f6b82]">{item.copy}</p>
    </article>
  );
}

function FloatingMiniCard({
  className,
  icon: Icon,
  title,
  copy,
}: {
  className: string;
  icon: LucideIcon;
  title: string;
  copy: string;
}) {
  return (
    <div
      className={`absolute max-w-[17rem] rounded-[1.25rem] border border-white/80 bg-white/82 p-4 shadow-[0_18px_55px_rgba(16,32,63,0.12)] backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-full bg-[#f0eaff] text-[#7f75e8]">
          <Icon className="size-4" />
        </span>
        <p className="text-sm font-bold text-[#10203f]">{title}</p>
      </div>
      <p className="mt-3 text-xs leading-5 text-[#5f6b82]">{copy}</p>
    </div>
  );
}

function FloatingClouds() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Cloud className="absolute left-[-1rem] top-24 w-24 text-[#b8dcf4] opacity-80" />
      <Cloud className="absolute right-[7%] top-36 w-20 text-[#b8dcf4] opacity-70" />
      <Cloud className="absolute left-[8%] top-[44rem] hidden w-28 text-[#e7cffa] opacity-50 lg:block" />
      <Cloud className="absolute right-[-2rem] top-[68rem] hidden w-32 text-[#b8dcf4] opacity-50 lg:block" />
    </div>
  );
}

function Cloud({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 170 76"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M19 53h123c15 0 24-9 19-22-4-10-14-13-24-11-7-12-24-16-36-7-11-10-29-7-36 7-14-4-28 3-32 17-11-1-21 5-22 15-1 9 7 17 19 17"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
