import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Eye,
  Handshake,
  Inbox,
  LockKeyhole,
  MousePointer2,
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

type IconCard = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const problems: IconCard[] = [
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
    copy: "You know how to edit, design, or code, but not what to sell.",
  },
  {
    icon: Send,
    title: "Random outreach",
    copy: "Finding and messaging the right clients takes more time than the work itself.",
  },
];

const agents: IconCard[] = [
  {
    icon: Compass,
    title: "Profile Agent",
    copy: "Builds your niche, offer, pricing, and public profile.",
  },
  {
    icon: ClipboardCheck,
    title: "Proof Agent",
    copy: "Turns guided missions into portfolio case studies.",
  },
  {
    icon: Search,
    title: "Opportunity Agent",
    copy: "Finds and scores realistic client opportunities.",
  },
  {
    icon: Send,
    title: "Outreach Agent",
    copy: "Prepares personalized messages and follow-ups.",
  },
  {
    icon: Inbox,
    title: "Inbox Agent",
    copy: "Sorts replies and drafts smart responses.",
  },
  {
    icon: Handshake,
    title: "Deal Agent",
    copy: "Creates proposals, scope, timelines, and revision rules.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Delivery Agent",
    copy: "Manages previews, revisions, and final handoff.",
  },
  {
    icon: ShieldCheck,
    title: "Ascend Guardian",
    copy: "Reviews client-facing actions before they go out.",
  },
];

const pathStages = [
  "Build Proof",
  "Find Leads",
  "Outreach",
  "Conversation",
  "Proposal",
  "Delivery",
];

const systemBullets = [
  "Find a profitable, realistic offer",
  "Build proof before you pitch",
  "Identify clients worth contacting",
  "Create personalized outreach and follow-ups",
  "Keep projects, previews, revisions, and payments organized",
];

const modes = [
  {
    icon: WandSparkles,
    label: "FULL AUTONOMOUS",
    title: "Full Autonomous",
    tag: "For users who want speed",
    copy: "Ascend runs routine work inside your rules, documents, contracts, and final delivery.",
  },
  {
    icon: MousePointer2,
    label: "RECOMMENDED",
    title: "Semi-Automated",
    tag: "Recommended",
    copy: "Ascend executes normal tasks and asks before sensitive or uncertain actions.",
  },
  {
    icon: LockKeyhole,
    label: "FULLY MANUAL",
    title: "Fully Manual",
    tag: "For maximum control",
    copy: "Ascend researches, writes, and organizes. You approve every external action.",
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
    <main className="relative min-h-screen overflow-hidden bg-[#fffaf2] text-[#10203f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Cloud className="fixed -left-10 top-16 z-0 w-28 text-[#b8dff7] opacity-80" />
      <Cloud className="fixed right-[4%] top-28 z-0 hidden w-20 text-[#b8dff7] opacity-90 lg:block" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,119,94,0.08),transparent_30%),radial-gradient(circle_at_74%_18%,rgba(167,145,245,0.12),transparent_24%)]" />
      <FreelancerNav />
      <div className="relative z-10 mx-auto grid max-w-[1720px] gap-x-20 gap-y-12 px-6 pb-24 pt-8 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div className="space-y-16 lg:space-y-20">
          <HeroSection />
          <ProblemSection />
          <SystemSection />
        </div>
        <div className="space-y-16 lg:space-y-20">
          <AgentsSection />
          <PathSection />
          <ControlModesSection />
          <GuardianSection />
        </div>
      </div>
      <div className="relative z-10">
        <DashboardPreviewSection />
        <FinalCtaSection />
        <Footer />
      </div>
    </main>
  );
}

function FreelancerNav() {
  return (
    <header className="sticky top-0 z-50 px-6 pt-4 sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-[1720px] items-center justify-between rounded-[1.35rem] border border-white/80 bg-white/54 px-5 py-3 shadow-[0_18px_70px_rgba(16,32,63,0.08)] backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-2 text-[#10203f]">
          <span className="relative grid size-7 place-items-center">
            <span className="absolute h-5 w-4 rotate-[-18deg] rounded-t-full border-2 border-[#10203f]" />
            <span className="absolute h-5 w-4 rotate-[18deg] rounded-t-full border-2 border-[#ff725e]" />
          </span>
          <span className="font-serif text-lg font-bold tracking-[-0.03em]">
            Ascend
          </span>
        </Link>
        <div className="hidden items-center gap-9 text-[0.78rem] font-bold text-[#526077] md:flex">
          <Link href="/">Home</Link>
          <Link href="/#paths">Paths</Link>
          <a href="#path">How It Works</a>
          <a href="#agents">Agents</a>
          <Link href="/#tiers">Founder Stream</Link>
        </div>
        <Link
          href="/freelancer/setup"
          className="group inline-flex items-center gap-2 rounded-full bg-[#10203f] px-5 py-3 text-[0.78rem] font-black text-white shadow-[0_15px_34px_rgba(16,32,63,0.22)] transition duration-250 ease-out hover:-translate-y-1 hover:rotate-[-0.5deg] hover:bg-[#172a51] hover:text-white hover:shadow-[0_22px_50px_rgba(16,32,63,0.28)]"
        >
          Start Free
          <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
        </Link>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="grid min-h-[330px] items-center gap-7 lg:grid-cols-[0.98fr_1.02fr]">
      <div className="max-w-[630px]">
        <Label>ASCEND FREELANCER</Label>
        <h1 className="mt-6 max-w-[560px] font-serif text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.06em] sm:text-[4rem] lg:text-[4.3rem]">
          Turn your skill into{" "}
          <span className="bg-gradient-to-r from-[#ef6f62] via-[#de83a2] to-[#9286ef] bg-clip-text text-transparent">
            paid freelance work.
          </span>
        </h1>
        <p className="mt-6 max-w-[500px] text-[0.98rem] leading-7 text-[#58657b]">
          Ascend builds your offer, portfolio, lead list, outreach, proposals,
          and delivery workflow while you stay in control.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/freelancer/setup"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#10203f] px-5 text-[0.78rem] font-black text-white shadow-[0_15px_34px_rgba(16,32,63,0.22)] transition duration-250 ease-out hover:-translate-y-1.5 hover:rotate-[-0.4deg] hover:bg-[#172a51] hover:text-white hover:shadow-[0_24px_60px_rgba(16,32,63,0.24)]"
            >
              Build My Freelance System
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="#path"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#10203f]/10 bg-white/72 px-5 text-[0.78rem] font-black text-[#10203f] shadow-[0_12px_34px_rgba(16,32,63,0.08)] backdrop-blur-xl transition duration-250 ease-out hover:-translate-y-1.5 hover:rotate-[0.4deg] hover:bg-white hover:text-[#ff725e] hover:shadow-[0_22px_54px_rgba(16,32,63,0.14)]"
            >
              See How It Works
            </a>
        </div>
        <p className="mt-7 text-[0.82rem] font-medium text-[#7a8498]">
          Built for editors, designers, developers, writers, and marketers.
        </p>
      </div>
      <div className="relative mt-10 lg:mt-0">
        <div className="ml-auto max-w-[330px] overflow-hidden rounded-[1.45rem] shadow-[0_24px_80px_rgba(16,32,63,0.13)] ring-1 ring-white/80">
          <Image
            src="/freelancer/hero-room.png"
            alt="Illustration of a freelancer working at sunset"
            width={302}
            height={166}
            className="h-[185px] w-full object-cover"
            priority
          />
        </div>
        <StatusCard className="-bottom-20 right-[-1rem]" />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section>
      <div className="mx-auto max-w-[650px] text-center">
        <Label>FREELANCING SHOULD NOT FEEL LIKE A CASINO</Label>
        <h2 className="mt-5 font-serif text-[3rem] font-semibold leading-[0.95] tracking-[-0.055em]">
          Crowded platforms were not built for beginners.
        </h2>
        <p className="mx-auto mt-5 max-w-[570px] text-[1rem] leading-7 text-[#5e697d]">
          Most marketplaces reward profiles that already have proof. That
          leaves new and skilled freelancers in the cold: bidding low, sending
          generic messages, and hoping.
        </p>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {problems.map((problem) => (
          <SmallCard key={problem.title} item={problem} />
        ))}
      </div>
    </section>
  );
}

function SystemSection() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
      <div>
        <Label>YOUR AI FREELANCE BUSINESS SYSTEM</Label>
        <h2 className="mt-5 max-w-[520px] font-serif text-[3rem] font-semibold leading-[0.94] tracking-[-0.055em]">
          Not another job board. Your own client engine.
        </h2>
        <p className="mt-6 max-w-[500px] text-[1rem] leading-7 text-[#5e697d]">
          Tell Ascend what you can do, how much time you have, and what you
          want to earn. Your agents build the system around you.
        </p>
        <ul className="mt-8 grid gap-4 text-[0.88rem] font-semibold text-[#526077]">
          {systemBullets.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 size-4 text-[#ff725e]" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#agents"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#10203f]/10 bg-white/72 px-5 text-[0.78rem] font-black text-[#10203f] shadow-[0_12px_34px_rgba(16,32,63,0.08)] backdrop-blur-xl transition duration-250 ease-out hover:-translate-y-1.5 hover:rotate-[0.4deg] hover:bg-white hover:text-[#ff725e] hover:shadow-[0_22px_54px_rgba(16,32,63,0.14)]"
        >
          Explore the agent system
          <ArrowRight className="size-4" />
        </a>
      </div>
      <div className="relative">
        <div className="overflow-hidden rounded-[1.8rem] shadow-[0_26px_86px_rgba(16,32,63,0.13)] ring-1 ring-white/80">
          <Image
            src="/freelancer/workspace.png"
            alt="Notebook, laptop, pencils, and coffee workspace illustration"
            width={310}
            height={300}
            className="h-[330px] w-full object-cover"
          />
        </div>
        <MiniOverlay
          className="-left-4 top-4"
          icon={Compass}
          title="Profile Agent"
          copy="Drafting your motion-design offer for short-form ads"
        />
        <MiniOverlay
          className="-right-4 top-40"
          icon={Search}
          title="Opportunity Agent"
          copy="3 qualified leads ready for your review"
        />
        <MiniOverlay
          className="bottom-2 left-8"
          icon={ShieldCheck}
          title="Ascend Guardian"
          copy="Reviewing outreach before send"
        />
      </div>
    </section>
  );
}

function AgentsSection() {
  return (
    <section id="agents" className="pt-1">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {agents.map((agent) => (
          <SmallCard key={agent.title} item={agent} agent />
        ))}
      </div>
    </section>
  );
}

function PathSection() {
  return (
    <section id="path">
      <div className="text-center">
        <Label>THE PATH</Label>
        <h2 className="mx-auto mt-5 max-w-[520px] font-serif text-[3rem] font-semibold leading-[0.94] tracking-[-0.055em]">
          From skill to client system in four steps.
        </h2>
        <p className="mt-4 text-[0.78rem] text-[#9aa1af]">
          Drag clients between stages
        </p>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-6">
        {pathStages.map((stage, index) => (
          <article
            key={stage}
            className="rounded-[1rem] border border-white/80 bg-white/72 px-3 py-5 text-center shadow-[0_16px_46px_rgba(16,32,63,0.07)] backdrop-blur-xl transition duration-250 ease-out hover:-translate-y-1.5 hover:rotate-[-0.4deg] hover:shadow-[0_24px_70px_rgba(16,32,63,0.13)]"
          >
            <p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#a7adba]">
              Stage {index + 1}
            </p>
            <p className="mt-2 font-serif text-[0.98rem] font-semibold">
              {stage}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ControlModesSection() {
  return (
    <section className="rounded-[1.7rem] border border-white/70 bg-white/35 p-5 shadow-[0_22px_80px_rgba(16,32,63,0.08)] backdrop-blur-xl">
      <div className="grid gap-7 xl:grid-cols-[0.7fr_1.3fr]">
        <div>
          <Label>YOU STAY IN CONTROL</Label>
          <h2 className="mt-5 max-w-[430px] font-serif text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.055em]">
            Choose how autonomous Ascend should be.
          </h2>
          <p className="mt-4 text-[0.94rem] leading-7 text-[#5e697d]">
            Switch modes any time. Your rules. Your pace.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {modes.map((mode, index) => {
            const Icon = mode.icon;

            return (
              <article
                key={mode.title}
                className="relative rounded-[1.25rem] border border-white/80 bg-white/74 p-5 shadow-[0_15px_48px_rgba(16,32,63,0.08)] backdrop-blur-xl transition duration-250 ease-out hover:-translate-y-1.5 hover:rotate-[0.4deg] hover:shadow-[0_25px_74px_rgba(16,32,63,0.13)]"
              >
                {index === 1 ? (
                  <span className="absolute -top-4 left-5 rounded-full bg-[#ff725e] px-3 py-1 text-[0.58rem] font-black uppercase tracking-[0.16em] text-white">
                    Recommended
                  </span>
                ) : null}
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.55rem] font-black uppercase tracking-[0.18em] text-[#b0b6c2]">
                    {mode.label}
                  </p>
                  <Icon className="size-4 text-[#9a90ed]" />
                </div>
                <h3 className="mt-6 font-serif text-[1.15rem] font-semibold">
                  {mode.title}
                </h3>
                <p className="mt-4 text-[0.78rem] leading-6 text-[#5e697d]">
                  {mode.copy}
                </p>
                <span className="mt-5 inline-flex rounded-full bg-[#fff8f0] px-3 py-1 text-[0.65rem] font-bold text-[#7c8394]">
                  {mode.tag}
                </span>
              </article>
            );
          })}
        </div>
      </div>
      <div className="mx-auto mt-7 flex max-w-[620px] gap-3 rounded-[1rem] border border-white/80 bg-white/74 px-5 py-4 text-[0.88rem] leading-6 text-[#5e697d] shadow-[0_14px_42px_rgba(16,32,63,0.07)]">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#ff725e]" />
        <p>
          Ascend never accepts contracts, changes your price floor, collects
          money, or releases final work without your approval.
        </p>
      </div>
    </section>
  );
}

function GuardianSection() {
  return (
    <section className="rounded-[1.7rem] border border-white/70 bg-white/35 p-5 shadow-[0_22px_80px_rgba(16,32,63,0.08)] backdrop-blur-xl">
      <div className="grid items-center gap-9 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="overflow-hidden rounded-[1rem] shadow-[0_20px_70px_rgba(16,32,63,0.16)] ring-1 ring-white/80">
          <Image
            src="/freelancer/guardian-landscape.png"
            alt="Quiet mountain guardian illustration"
            width={230}
            height={198}
            className="h-[250px] w-full object-cover"
          />
        </div>
        <div>
          <Label>ASCEND GUARDIAN</Label>
          <h2 className="mt-5 max-w-[540px] font-serif text-[2.4rem] font-semibold leading-[0.95] tracking-[-0.055em]">
            Every important move gets checked before it goes out.
          </h2>
          <p className="mt-4 max-w-[560px] text-[0.95rem] leading-7 text-[#5e697d]">
            Ascend Guardian reviews client-facing work for clarity,
            truthfulness, relevance, pricing logic, spam risk, and quality.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {guardianChecks.map((check, index) => (
              <div
                key={check}
                className="flex items-center gap-3 rounded-[0.95rem] border border-white/80 bg-white/72 px-4 py-3 text-[0.78rem] font-semibold leading-5 text-[#526077] shadow-[0_12px_36px_rgba(16,32,63,0.06)]"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#ffe0d8] text-[0.68rem] font-black text-[#ff725e]">
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
    <section className="mx-auto max-w-[1720px] px-6 pb-20 sm:px-10 lg:px-16">
      <div className="rounded-[1.9rem] border border-white/80 bg-white/48 p-6 shadow-[0_28px_100px_rgba(16,32,63,0.1)] backdrop-blur-xl">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Label>DASHBOARD PREVIEW</Label>
            <h2 className="mt-5 max-w-[560px] font-serif text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.055em]">
              One peaceful view of your freelance system.
            </h2>
            <p className="mt-4 max-w-[620px] text-[1rem] leading-7 text-[#5e697d]">
              Offer, proof, leads, messages, proposals, delivery, and next
              actions stay organized in one place.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Offer", "Leads", "Outreach", "Delivery"].map((item, index) => (
              <article
                key={item}
                className="rounded-[1.25rem] border border-white/80 bg-white/74 p-5 shadow-[0_15px_46px_rgba(16,32,63,0.07)] transition duration-250 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(16,32,63,0.13)]"
              >
                <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#a7adba]">
                  {item}
                </p>
                <p className="mt-3 font-serif text-xl font-semibold">
                  {
                    [
                      "Short-form editor for founder brands",
                      "24 scored this week",
                      "7 drafts ready for review",
                      "2 workflows active",
                    ][index]
                  }
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 pb-20 text-center sm:px-10">
      <div className="rounded-[2rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(255,232,221,0.74),rgba(239,235,255,0.8))] px-6 py-14 shadow-[0_30px_110px_rgba(16,32,63,0.12)] backdrop-blur-xl">
        <Label>START WITHOUT GUESSING</Label>
        <h2 className="mx-auto mt-5 max-w-[780px] font-serif text-[3rem] font-semibold leading-[0.96] tracking-[-0.055em]">
          Build the freelance system around the skill you already have.
        </h2>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/freelancer/setup"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#10203f] px-5 text-[0.78rem] font-black text-white shadow-[0_15px_34px_rgba(16,32,63,0.22)] transition duration-250 ease-out hover:-translate-y-1.5 hover:rotate-[-0.4deg] hover:bg-[#172a51] hover:text-white hover:shadow-[0_24px_60px_rgba(16,32,63,0.24)]"
          >
            Start Free
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/#paths"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#10203f]/10 bg-white/72 px-5 text-[0.78rem] font-black text-[#10203f] shadow-[0_12px_34px_rgba(16,32,63,0.08)] backdrop-blur-xl transition duration-250 ease-out hover:-translate-y-1.5 hover:rotate-[0.4deg] hover:bg-white hover:text-[#ff725e] hover:shadow-[0_22px_54px_rgba(16,32,63,0.14)]"
          >
            Back to Ascend Paths
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#10203f]/10 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1720px] flex-col gap-5 text-[0.9rem] text-[#5e697d] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold text-[#10203f]">
            Ascend
          </p>
          <p>Freelancer Path by Crevu Labs</p>
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

function SmallCard({ item, agent = false }: { item: IconCard; agent?: boolean }) {
  const Icon = item.icon;

  return (
    <article
      className={`rounded-[1.25rem] border border-white/80 bg-white/72 shadow-[0_16px_50px_rgba(16,32,63,0.08)] backdrop-blur-xl transition duration-250 ease-out hover:-translate-y-1.5 hover:rotate-[-0.4deg] hover:scale-[1.01] hover:shadow-[0_26px_80px_rgba(16,32,63,0.14)] ${
        agent ? "min-h-[130px] p-4" : "min-h-[150px] p-5"
      }`}
    >
      <span className="grid size-9 place-items-center rounded-full bg-[linear-gradient(135deg,#ffe3dc,#eee8ff)] text-[#10203f]">
        <Icon className="size-4" />
      </span>
      <h3
        className={`font-serif font-semibold tracking-[-0.025em] ${
          agent ? "mt-5 text-[1rem]" : "mt-7 text-[1.16rem]"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`mt-3 text-[#5e697d] ${
          agent ? "text-[0.68rem] leading-5" : "text-[0.76rem] leading-6"
        }`}
      >
        {item.copy}
      </p>
    </article>
  );
}

function StatusCard({ className }: { className: string }) {
  return (
    <div
      className={`absolute hidden w-[285px] rounded-[1.2rem] border border-white/80 bg-white/78 p-4 shadow-[0_20px_65px_rgba(16,32,63,0.15)] backdrop-blur-xl sm:block ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full bg-[#ffe4da] text-[#ff725e]">
            <Sparkles className="size-4" />
          </span>
          <p className="text-[0.84rem] font-black">Ascend is working</p>
        </div>
        <span className="text-[0.6rem] font-black uppercase text-[#9aa1af]">
          Live
        </span>
      </div>
      <ul className="mt-3 grid gap-2 text-[0.76rem] text-[#5e697d]">
        {[
          "Building your offer",
          "Creating portfolio proof",
          "Finding qualified leads",
          "Preparing personalized outreach",
          "Reviewing your next move",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle2 className="size-3.5 text-[#8d83ee]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniOverlay({
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
      className={`absolute hidden max-w-[245px] rounded-[1rem] border border-white/80 bg-white/82 p-4 shadow-[0_16px_50px_rgba(16,32,63,0.13)] backdrop-blur-xl sm:block ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-8 place-items-center rounded-full bg-[#f1ebff] text-[#8d83ee]">
          <Icon className="size-4" />
        </span>
        <p className="text-[0.8rem] font-black text-[#10203f]">{title}</p>
      </div>
      <p className="mt-2 text-[0.72rem] leading-5 text-[#5e697d]">{copy}</p>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#10203f]/10 bg-white/72 px-4 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#68748a] shadow-[0_10px_30px_rgba(16,32,63,0.05)] backdrop-blur-xl">
      <span className="size-1.5 rounded-full bg-[#ff725e]" />
      {children}
    </span>
  );
}

function Cloud({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 180 80" fill="none" className={className} aria-hidden>
      <path
        d="M20 55h126c15 0 24-10 18-23-5-10-15-12-24-10-7-13-25-16-38-7-11-10-30-7-37 7-14-4-29 4-32 18-12-1-22 6-23 16-1 9 8 16 20 16"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
