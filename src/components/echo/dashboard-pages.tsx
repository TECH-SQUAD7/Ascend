"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileUp,
  Globe2,
  LoaderCircle,
  Pencil,
  Plus,
  Settings,
  Share2,
  ShieldCheck,
} from "lucide-react";
import {
  aiReasoning,
  analysisSummary,
  dashboardStats,
  extractedAchievements,
  growthData,
  recentUploads,
  recommendations,
  skills,
  timelineItems,
  uploadTypes,
} from "./data";
import {
  AnimatedPage,
  EmptyState,
  GrowthLineChart,
  PageHeader,
  ProofPreviewCard,
  ProofScoreRing,
  ShareButtons,
  SkillTag,
  SketchCard,
  StatCard,
  StatusPill,
  TimelineItem,
  TimelinePreviewMini,
  UploadDropzone,
  cx,
} from "./shared";

export function DashboardHomePage() {
  return (
    <AnimatedPage className="mx-auto grid max-w-[1480px] gap-6">
      <PageHeader
        eyebrow="Dashboard"
        title="Your proof workspace at a glance."
        description="A calm command center for evidence, demo AI analysis, skill signals, and public proof progress."
        action={
          <Link
            href="/dashboard/upload"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#18233a] px-5 text-sm font-black text-white shadow-[0_14px_36px_rgba(24,35,58,0.16)] hover:text-white"
          >
            <FileUp className="size-4" />
            Upload Evidence
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <SketchCard className="p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black text-[#18233a]">
                Upload Evidence
              </p>
              <p className="mt-1 text-xs text-[#8a92a2]">
                Drag and drop mock interface
              </p>
            </div>
            <StatusPill tone="mint">Ready</StatusPill>
          </div>
          <UploadDropzone compact />
        </SketchCard>

        <SketchCard className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black text-[#18233a]">
                AI Analysis Summary
              </p>
              <p className="mt-1 text-xs text-[#8a92a2]">
                Demo analysis only
              </p>
            </div>
            <span className="grid size-10 place-items-center rounded-full border border-[#d7cffd] bg-[#f0edff] text-[#6351bb]">
              <Bot className="size-4" />
            </span>
          </div>
          <div className="mt-6 grid gap-3">
            {[
              ["Evidence Quality", "High"],
              ["Key Achievements", "6"],
              ["Impact Areas", "4"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] px-4 py-3"
              >
                <span className="text-sm font-bold text-[#667086]">
                  {label}
                </span>
                <span className="text-sm font-black text-[#18233a]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </SketchCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.78fr_1.22fr]">
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Proof Score</p>
          <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row">
            <ProofScoreRing score={78} />
            <div>
              <p className="text-2xl font-semibold tracking-[-0.04em]">
                78/100
              </p>
              <p className="mt-2 text-sm leading-6 text-[#667086]">
                Strong foundation. Add measurable outcomes and public proof
                links to push this into the 90s.
              </p>
            </div>
          </div>
        </SketchCard>

        <SketchCard className="p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-black text-[#18233a]">Growth Graph</p>
            <StatusPill tone="blue">Monthly</StatusPill>
          </div>
          <GrowthLineChart />
        </SketchCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Skills Extracted</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.slice(0, 7).map((skill, index) => (
              <SkillTag
                key={skill.name}
                label={skill.name}
                tone={index % 3 === 0 ? "blue" : index % 3 === 1 ? "lavender" : "mint"}
              />
            ))}
          </div>
        </SketchCard>

        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Proof Timeline</p>
          <div className="mt-5">
            <TimelinePreviewMini />
          </div>
        </SketchCard>

        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Next Move</p>
          <p className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.045em] text-[#18233a]">
            Publish one concise Ascend case study.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#667086]">
            Add one metric screenshot and connect it to Product Strategy,
            Frontend UI, and Founder Storytelling.
          </p>
        </SketchCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <ProofPreviewCard />
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">
            Public Proof Page Preview
          </p>
          <p className="mt-4 text-sm leading-6 text-[#667086]">
            This preview uses mock data and placeholder actions. The public
            example is available at /proof/rajat.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard/proof"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#18233a] px-5 text-sm font-black text-white hover:text-white"
            >
              Edit preview
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/proof/rajat"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#e5ded3] bg-white px-5 text-sm font-black text-[#18233a]"
            >
              View public page
              <Eye className="size-4" />
            </Link>
          </div>
        </SketchCard>
      </div>
    </AnimatedPage>
  );
}

export function UploadEvidencePage() {
  return (
    <AnimatedPage className="mx-auto grid max-w-[1480px] gap-6">
      <PageHeader
        eyebrow="Upload Evidence"
        title="Collect proof before it gets lost."
        description="A mock evidence intake surface for notes, screenshots, PDFs, links, and project files."
      />
      <SketchCard className="p-5">
        <UploadDropzone />
      </SketchCard>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {uploadTypes.map((type) => {
          const Icon = type.icon;

          return (
            <SketchCard key={type.title} className="p-5">
              <span className="grid size-10 place-items-center rounded-full border border-[#cfe5f8] bg-[#edf8ff] text-[#2f719e]">
                <Icon className="size-4" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">
                {type.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#667086]">
                {type.copy}
              </p>
            </SketchCard>
          );
        })}
      </div>
      <SketchCard className="p-5">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-sm font-black text-[#18233a]">Recent uploads</p>
          <button
            type="button"
            className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#e5ded3] bg-white px-4 text-xs font-black text-[#18233a]"
          >
            <Plus className="size-3.5" />
            Add mock item
          </button>
        </div>
        <div className="grid gap-3">
          {recentUploads.map((upload) => (
            <div
              key={upload.name}
              className="grid gap-3 rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"
            >
              <div>
                <p className="font-semibold tracking-[-0.02em] text-[#18233a]">
                  {upload.name}
                </p>
                <p className="mt-1 text-sm text-[#667086]">{upload.type}</p>
              </div>
              <span className="text-sm font-bold text-[#8a92a2]">
                {upload.date}
              </span>
              <StatusPill
                tone={
                  upload.status === "Completed"
                    ? "mint"
                    : upload.status === "Analyzing"
                      ? "lavender"
                      : "blue"
                }
              >
                {upload.status}
              </StatusPill>
            </div>
          ))}
        </div>
      </SketchCard>
    </AnimatedPage>
  );
}

export function AnalysisPage() {
  return (
    <AnimatedPage className="mx-auto grid max-w-[1480px] gap-6">
      <PageHeader
        eyebrow="AI Analysis"
        title="Demo analysis for proof extraction."
        description="This screen shows fake analysis states and placeholder outputs only. No Gemini, Supabase, or backend API is connected."
      />
      <SketchCard className="overflow-hidden p-0">
        <div className="grid gap-6 p-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid place-items-center rounded-[1.2rem] border border-[#ede7dc] bg-[#fbfaf6] p-8 text-center">
            <div>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="mx-auto grid size-16 place-items-center rounded-full border border-[#d7cffd] bg-[#f0edff] text-[#6351bb]"
              >
                <LoaderCircle className="size-7" />
              </motion.span>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#c9533e]">
                Demo analysis
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#18233a]">
                Analyzing evidence signals...
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#667086]">
                Placeholder animation for the future AI pipeline.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {analysisSummary.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1rem] border border-[#ede7dc] bg-white p-5"
                >
                  <span className="grid size-10 place-items-center rounded-full border border-[#ffd0c3] bg-[#fff0eb] text-[#c9533e]">
                    <Icon className="size-4" />
                  </span>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#8a92a2]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.035em]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#667086]">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SketchCard>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">
            Extracted achievements
          </p>
          <div className="mt-5 grid gap-3">
            {extractedAchievements.map((achievement) => (
              <div
                key={achievement}
                className="flex gap-3 rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] p-4"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#5fae7d]" />
                <p className="text-sm leading-6 text-[#667086]">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </SketchCard>
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Skills detected</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.slice(0, 6).map((skill, index) => (
              <SkillTag
                key={skill.name}
                label={`${skill.name} ${skill.confidence}%`}
                tone={index % 2 === 0 ? "blue" : "lavender"}
              />
            ))}
          </div>
          <div className="mt-6 rounded-[1rem] border border-[#bfe9ce] bg-[#e9f8ef] p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2c7650]">
              Evidence quality
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#18233a]">
              High
            </p>
          </div>
        </SketchCard>
      </div>

      <SketchCard className="p-6">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-[#d7cffd] bg-[#f0edff] text-[#6351bb]">
            <ShieldCheck className="size-4" />
          </span>
          <div>
            <p className="text-sm font-black text-[#18233a]">
              AI reasoning panel
            </p>
            <p className="text-xs text-[#8a92a2]">Demo reasoning for now</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {aiReasoning.map((item) => (
            <div
              key={item}
              className="rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] p-4 text-sm leading-6 text-[#667086]"
            >
              {item}
            </div>
          ))}
        </div>
      </SketchCard>
    </AnimatedPage>
  );
}

export function SkillsPage() {
  return (
    <AnimatedPage className="mx-auto grid max-w-[1480px] gap-6">
      <PageHeader
        eyebrow="Skills"
        title="Skill signals connected to evidence."
        description="Mock confidence levels show how ECHO could turn work artifacts into credible skill proof."
      />
      <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">
            Skill confidence bars
          </p>
          <div className="mt-5 grid gap-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <p className="text-sm font-bold text-[#18233a]">
                    {skill.name}
                  </p>
                  <span className="text-xs font-black text-[#8a92a2]">
                    {skill.confidence}%
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#ede7dc]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.confidence}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-[linear-gradient(90deg,#7eaede,#a494ed,#8ed9a6)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </SketchCard>
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">
            Skill network graph
          </p>
          <div className="relative mt-5 min-h-[25rem] overflow-hidden rounded-[1.2rem] border border-[#ede7dc] bg-[#fbfaf6] p-4">
            <svg className="absolute inset-0 size-full" viewBox="0 0 520 360" fill="none">
              <path d="M260 176L122 92M260 176L410 88M260 176L118 266M260 176L420 268M260 176L260 48M260 176L260 318" stroke="#d8d5ce" strokeWidth="2" strokeDasharray="6 10" />
            </svg>
            {[
              ["Proof Graph", "left-[38%] top-[40%]", "coral"],
              ["Product Strategy", "left-[5%] top-[12%]", "blue"],
              ["AI Workflow", "right-[8%] top-[10%]", "lavender"],
              ["Frontend UI", "left-[6%] bottom-[16%]", "mint"],
              ["Research", "right-[7%] bottom-[15%]", "blue"],
              ["Storytelling", "left-[40%] top-[3%]", "lavender"],
              ["Content", "left-[43%] bottom-[4%]", "mint"],
            ].map(([label, position, tone]) => (
              <div
                key={label}
                className={cx(
                  "absolute rounded-full border bg-white px-4 py-2 text-xs font-black shadow-[0_12px_30px_rgba(24,35,58,0.08)]",
                  position,
                  tone === "coral"
                    ? "border-[#ffd0c3] text-[#c9533e]"
                    : tone === "lavender"
                      ? "border-[#d7cffd] text-[#6351bb]"
                      : tone === "mint"
                        ? "border-[#bfe9ce] text-[#2c7650]"
                        : "border-[#cfe5f8] text-[#2f719e]",
                )}
              >
                {label}
              </div>
            ))}
          </div>
        </SketchCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.7fr_1.3fr]">
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Skill tags</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <SkillTag
                key={skill.name}
                label={skill.name}
                tone={index % 4 === 0 ? "blue" : index % 4 === 1 ? "lavender" : index % 4 === 2 ? "mint" : "coral"}
              />
            ))}
          </div>
        </SketchCard>
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">
            Evidence connected to skills
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {skills.slice(0, 4).map((skill) => (
              <div
                key={skill.name}
                className="rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] p-4"
              >
                <p className="font-semibold tracking-[-0.02em] text-[#18233a]">
                  {skill.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#667086]">
                  {skill.evidence}
                </p>
              </div>
            ))}
          </div>
        </SketchCard>
      </div>
    </AnimatedPage>
  );
}

export function TimelinePage() {
  return (
    <AnimatedPage className="mx-auto grid max-w-[1120px] gap-6">
      <PageHeader
        eyebrow="Proof Timeline"
        title="A clear history of shipped work."
        description="Filter mock proof events by product, research, strategy, and build activity."
      />
      <div className="flex flex-wrap gap-2">
        {["All", "Product", "Research", "Strategy", "Build"].map((tab, index) => (
          <button
            key={tab}
            type="button"
            className={`min-h-10 rounded-full border px-4 text-sm font-black ${
              index === 0
                ? "border-[#18233a] bg-[#18233a] text-white"
                : "border-[#e5ded3] bg-white text-[#667086]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="relative grid gap-5 border-l border-[#ded9cf] pl-4 sm:pl-8">
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.title} {...item} index={index} />
        ))}
      </div>
    </AnimatedPage>
  );
}

export function GrowthPage() {
  return (
    <AnimatedPage className="mx-auto grid max-w-[1480px] gap-6">
      <PageHeader
        eyebrow="Growth Graph"
        title="Progress that compounds into proof."
        description="Track monthly proof score, consistency, and recommendations with mock analytics."
      />
      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <SketchCard className="p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-black text-[#18233a]">
              Growth score chart
            </p>
            <StatusPill tone="blue">Jan-Jun</StatusPill>
          </div>
          <GrowthLineChart data={growthData} />
        </SketchCard>
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Proof score</p>
          <div className="mt-6 flex justify-center">
            <ProofScoreRing score={78} />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["18", "Day streak"],
              ["6", "Monthly proofs"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] p-4 text-center"
              >
                <p className="text-2xl font-semibold tracking-[-0.04em]">
                  {value}
                </p>
                <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#8a92a2]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </SketchCard>
      </div>
      <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Monthly progress</p>
          <div className="mt-5 grid gap-3">
            {growthData.map((item) => (
              <div
                key={item.month}
                className="flex items-center justify-between rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] px-4 py-3"
              >
                <span className="text-sm font-bold text-[#667086]">
                  {item.month}
                </span>
                <span className="text-sm font-black text-[#18233a]">
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        </SketchCard>
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Recommendations</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {recommendations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] p-4"
                >
                  <span className="grid size-9 place-items-center rounded-full border border-[#ffd0c3] bg-[#fff0eb] text-[#c9533e]">
                    <Icon className="size-4" />
                  </span>
                  <p className="mt-4 font-semibold tracking-[-0.02em] text-[#18233a]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#667086]">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </SketchCard>
      </div>
    </AnimatedPage>
  );
}

export function ProofDashboardPage() {
  return (
    <AnimatedPage className="mx-auto grid max-w-[1480px] gap-6">
      <PageHeader
        eyebrow="Public Proof Page"
        title="Shape what others see first."
        description="Editable preview UI for the public proof page. Buttons are placeholders until sharing and persistence are connected."
        action={<ShareButtons />}
      />
      <div className="grid gap-5 xl:grid-cols-[0.76fr_1.24fr]">
        <SketchCard className="p-6">
          <p className="text-sm font-black text-[#18233a]">Customize preview</p>
          <div className="mt-5 grid gap-3">
            {[
              ["Display name", "Rajat Sharma"],
              ["Role", "AI Product Builder"],
              ["Bio", "I build products that turn ideas into real-world impact."],
            ].map(([label, value]) => (
              <label key={label} className="grid gap-2 text-sm font-black text-[#18233a]">
                {label}
                <input
                  readOnly
                  value={value}
                  className="min-h-12 rounded-[1rem] border border-[#e5ded3] bg-white px-4 text-sm font-bold text-[#667086] outline-none"
                />
              </label>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#18233a] px-5 text-sm font-black text-white"
            >
              <Pencil className="size-4" />
              Customize
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#e5ded3] bg-white px-5 text-sm font-black text-[#18233a]"
            >
              <Share2 className="size-4" />
              Share
            </button>
          </div>
        </SketchCard>
        <ProofPreviewCard />
      </div>
      <div className="grid gap-5 xl:grid-cols-3">
        {[
          { label: "Public URL", value: "echo.work/proof/rajat", icon: Globe2 },
          {
            label: "Featured proof",
            value: "Ascend - AI for Freelancers",
            icon: BadgeCheck,
          },
          {
            label: "Profile state",
            value: "Ready to preview",
            icon: ClipboardCheck,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
          <SketchCard key={item.label} className="p-5">
            <span className="grid size-10 place-items-center rounded-full border border-[#cfe5f8] bg-[#edf8ff] text-[#2f719e]">
              <Icon className="size-4" />
            </span>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#8a92a2]">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#18233a]">
              {item.value}
            </p>
          </SketchCard>
          );
        })}
      </div>
    </AnimatedPage>
  );
}

export function SettingsPage() {
  return (
    <AnimatedPage className="mx-auto grid max-w-[980px] gap-6">
      <PageHeader
        eyebrow="Settings"
        title="Workspace settings placeholder."
        description="This route exists for the dashboard shell. Preferences, integrations, and billing are not connected yet."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <SketchCard className="p-6">
          <span className="grid size-10 place-items-center rounded-full border border-[#d7cffd] bg-[#f0edff] text-[#6351bb]">
            <Settings className="size-4" />
          </span>
          <p className="mt-5 text-lg font-semibold tracking-[-0.03em]">
            Preferences
          </p>
          <p className="mt-2 text-sm leading-6 text-[#667086]">
            Placeholder controls for profile visibility and notification
            cadence.
          </p>
        </SketchCard>
        <EmptyState
          title="No integrations connected"
          copy="Supabase, Gemini, file storage, and email integrations are intentionally not connected in this UI shell."
        />
      </div>
    </AnimatedPage>
  );
}
