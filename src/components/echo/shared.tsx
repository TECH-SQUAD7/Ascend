"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleDashed,
  FileUp,
  Plus,
  Share2,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { growthData, publicSkills, timelineItems } from "./data";

type Tone = "blue" | "lavender" | "mint" | "coral" | "gold";

const toneClasses: Record<Tone, string> = {
  blue: "bg-[#e8f5ff] text-[#1c638f] border-[#b7dff7]",
  lavender: "bg-[#f0edff] text-[#6351bb] border-[#d7cffd]",
  mint: "bg-[#e9f8ef] text-[#2c7650] border-[#bfe9ce]",
  coral: "bg-[#fff0eb] text-[#c9533e] border-[#ffd0c3]",
  gold: "bg-[#fff7dd] text-[#8c6812] border-[#f3df99]",
};

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function AnimatedPage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.main>
  );
}

export function EchoLogo({ className = "" }: { className?: string }) {
  return (
    <span className={cx("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-9 place-items-center rounded-full border border-[#d8d5ce] bg-white shadow-[0_10px_26px_rgba(24,35,58,0.07)]">
        <span className="absolute size-5 rounded-full border border-[#93c8ea]" />
        <span className="absolute size-2 rounded-full bg-[#ff8c74]" />
        <span className="absolute -right-1 top-2 size-2 rounded-full border border-[#a494ed] bg-white" />
      </span>
      <span className="text-lg font-black tracking-[0.22em] text-[#18233a]">
        ECHO
      </span>
    </span>
  );
}

export function LineArtBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={cx(
        "pointer-events-none absolute inset-0 overflow-hidden text-[#c9c3b9]",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1400 900"
        fill="none"
        className="absolute left-1/2 top-0 h-full min-w-[1200px] -translate-x-1/2 opacity-50"
      >
        <path
          d="M80 140c128 32 222 26 318-18 108-50 214-36 310 38 94 72 204 86 330 30 94-42 180-46 258-14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="8 12"
        />
        <path
          d="M156 640c120-88 248-108 384-62 134 46 250 28 346-52 96-78 204-92 330-42"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="6 12"
        />
        <path
          d="M1118 102c-10 40 16 72 56 62 40-10 48-64 12-84-30-16-60-4-68 22Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M136 282h118m-86-32 32 64m894 492h126m-98-34 30 68"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function SketchCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      whileHover={{ y: -5, rotate: -0.2 }}
      className={cx(
        "rounded-[1.35rem] border border-[#ded9cf] bg-white/82 shadow-[0_18px_58px_rgba(24,35,58,0.08)] backdrop-blur-xl",
        "outline outline-1 outline-offset-[-6px] outline-[#f5f0e8]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function AccentLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#ded9cf] bg-white/80 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#68748a] shadow-[0_10px_28px_rgba(24,35,58,0.05)]">
      <span className="size-1.5 rounded-full bg-[#ff8c74]" />
      {children}
    </span>
  );
}

export function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#18233a] px-5 text-sm font-black text-white shadow-[0_18px_44px_rgba(24,35,58,0.18)] transition hover:bg-[#263553] hover:text-white"
      >
        {children}
        <ArrowRight className="size-4" />
      </Link>
    </motion.div>
  );
}

export function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#ded9cf] bg-white/76 px-5 text-sm font-black text-[#18233a] shadow-[0_14px_36px_rgba(24,35,58,0.07)] transition hover:bg-white"
      >
        {children}
      </Link>
    </motion.div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <AccentLabel>{eyebrow}</AccentLabel>
        <h1 className="mt-4 max-w-3xl text-[2.4rem] font-semibold leading-[0.95] tracking-[-0.055em] text-[#18233a] sm:text-[3.2rem]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#667086] sm:text-base">
          {description}
        </p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function StatCard({
  icon: Icon,
  label,
  value,
  detail,
  tone = "blue",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  detail: string;
  tone?: Tone;
}) {
  return (
    <SketchCard className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-[#8a92a2]">
            {label}
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#18233a]">
            {value}
          </p>
          <p className="mt-2 text-sm text-[#667086]">{detail}</p>
        </div>
        <span
          className={cx(
            "grid size-10 shrink-0 place-items-center rounded-full border",
            toneClasses[tone],
          )}
        >
          <Icon className="size-4" />
        </span>
      </div>
    </SketchCard>
  );
}

export function UploadDropzone({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.01, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={cx(
        "grid place-items-center rounded-[1.4rem] border border-dashed border-[#bfc9d4] bg-[#fbfaf6]/90 p-8 text-center",
        compact ? "min-h-56" : "min-h-[22rem]",
      )}
    >
      <div>
        <span className="mx-auto grid size-14 place-items-center rounded-full border border-[#cfe5f8] bg-[#edf8ff] text-[#2f719e]">
          <UploadCloud className="size-6" />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[#18233a]">
          Drop evidence here
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#667086]">
          Mock upload zone for notes, screenshots, PDFs, project files, and
          links. No files are sent anywhere yet.
        </p>
        <button
          type="button"
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#18233a] px-5 text-sm font-black text-white shadow-[0_14px_36px_rgba(24,35,58,0.16)]"
        >
          <FileUp className="size-4" />
          Choose evidence
        </button>
      </div>
    </motion.div>
  );
}

export function SkillTag({
  label,
  tone = "blue",
}: {
  label: string;
  tone?: Tone;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold",
        toneClasses[tone],
      )}
    >
      {label}
    </span>
  );
}

export function TimelineItem({
  title,
  date,
  copy,
  tags,
  index,
}: {
  title: string;
  date: string;
  copy: string;
  tags: readonly string[];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="relative pl-10"
    >
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="absolute left-0 top-1 grid size-5 place-items-center rounded-full border border-[#ffb7a6] bg-[#fff4ed]"
      >
        <span className="size-2 rounded-full bg-[#ff8c74]" />
      </motion.span>
      <SketchCard className="p-5" delay={index * 0.03}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a92a2]">
              {date}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] text-[#18233a]">
              {title}
            </h3>
          </div>
          <span className="rounded-full border border-[#ded9cf] bg-white px-3 py-1 text-xs font-bold text-[#667086]">
            Proof
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-[#667086]">{copy}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <SkillTag key={tag} label={tag} tone="mint" />
          ))}
        </div>
      </SketchCard>
    </motion.article>
  );
}

export function ProofScoreRing({
  score,
  size = "lg",
}: {
  score: number;
  size?: "sm" | "lg";
}) {
  const boxSize = size === "sm" ? "size-28" : "size-40";
  const radius = 48;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={cx("relative grid place-items-center", boxSize)}>
      <svg viewBox="0 0 120 120" className="absolute inset-0">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ede7dc"
          strokeWidth="10"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ff8c74"
          strokeLinecap="round"
          strokeWidth="10"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: circumference - (score / 100) * circumference,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="text-center">
        <p className="text-3xl font-semibold tracking-[-0.05em] text-[#18233a]">
          {score}
        </p>
        <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#8a92a2]">
          Proof score
        </p>
      </div>
    </div>
  );
}

export function GrowthLineChart({
  data = growthData,
  className = "",
}: {
  data?: readonly { month: string; score: number }[];
  className?: string;
}) {
  const width = 640;
  const height = 260;
  const xStep = width / Math.max(data.length - 1, 1);
  const points = data.map((item, index) => {
    const x = index * xStep;
    const y = height - (item.score / 100) * (height - 36) - 18;
    return { ...item, x, y };
  });
  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <div className={cx("w-full overflow-hidden", className)}>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-72 w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <line
            key={index}
            x1="0"
            x2={width}
            y1={30 + index * 48}
            y2={30 + index * 48}
            stroke="#e7e1d8"
            strokeDasharray="5 10"
          />
        ))}
        <motion.path
          d={path}
          fill="none"
          stroke="#7eaede"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        {points.map((point) => (
          <g key={point.month}>
            <circle cx={point.x} cy={point.y} r="8" fill="#ffffff" stroke="#7eaede" strokeWidth="4" />
            <text
              x={point.x}
              y={height - 6}
              textAnchor="middle"
              className="fill-[#8a92a2] text-[13px] font-bold"
            >
              {point.month}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function ProofPreviewCard({ publicMode = false }: { publicMode?: boolean }) {
  return (
    <SketchCard className="overflow-hidden p-0">
      <div className="border-b border-[#ede7dc] bg-[#fbfaf6] px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <EchoLogo />
          <span className="rounded-full border border-[#d7cffd] bg-[#f0edff] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#6351bb]">
            {publicMode ? "Public" : "Preview"}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="grid size-16 shrink-0 place-items-center rounded-[1.1rem] border border-[#ded9cf] bg-[linear-gradient(135deg,#fff8ec,#edf8ff)] text-xl font-black text-[#18233a]">
            RS
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.045em] text-[#18233a]">
              Rajat Sharma
            </h3>
            <p className="mt-1 text-sm font-bold text-[#667086]">
              AI Product Builder
            </p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#667086]">
              I build products that turn ideas into real-world impact.
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            ["12", "Proofs"],
            ["7", "Skills"],
            ["4", "Impact Areas"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[1rem] border border-[#ede7dc] bg-white px-3 py-4 text-center"
            >
              <p className="text-2xl font-semibold tracking-[-0.04em] text-[#18233a]">
                {value}
              </p>
              <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#8a92a2]">
                {label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[1rem] border border-[#cfe5f8] bg-[#edf8ff]/70 p-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f719e]">
            Featured project
          </p>
          <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#18233a]">
            Ascend - AI for Freelancers
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {publicSkills.slice(0, 4).map((skill) => (
            <SkillTag key={skill} label={skill} tone="lavender" />
          ))}
        </div>
      </div>
    </SketchCard>
  );
}

export function EmptyState({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="grid min-h-64 place-items-center rounded-[1.25rem] border border-dashed border-[#d8d5ce] bg-white/55 p-8 text-center">
      <div>
        <span className="mx-auto grid size-12 place-items-center rounded-full border border-[#d8d5ce] bg-white text-[#8a92a2]">
          <CircleDashed className="size-5" />
        </span>
        <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#18233a]">
          {title}
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#667086]">
          {copy}
        </p>
      </div>
    </div>
  );
}

export function DashboardPreviewMockup() {
  return (
    <SketchCard className="relative overflow-hidden p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[0.68fr_1.32fr]">
        <div className="rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] p-4">
          <div className="flex items-center justify-between">
            <EchoLogo />
            <span className="rounded-full bg-[#e9f8ef] px-2.5 py-1 text-[0.62rem] font-black text-[#2c7650]">
              Live mock
            </span>
          </div>
          <div className="mt-6 grid gap-2">
            {["Dashboard", "Upload Evidence", "AI Analysis", "Proof Page"].map(
              (item, index) => (
                <div
                  key={item}
                  className={cx(
                    "flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold",
                    index === 0
                      ? "bg-[#18233a] text-white"
                      : "border border-[#ede7dc] bg-white text-[#667086]",
                  )}
                >
                  <span className="size-1.5 rounded-full bg-current" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["78", "Proof score"],
              ["7", "Skills"],
              ["High", "Quality"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1rem] border border-[#ede7dc] bg-white p-4"
              >
                <p className="text-2xl font-semibold tracking-[-0.04em] text-[#18233a]">
                  {value}
                </p>
                <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#8a92a2]">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[1rem] border border-[#ede7dc] bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-black text-[#18233a]">
                  Growth graph
                </p>
                <Sparkles className="size-4 text-[#ff8c74]" />
              </div>
              <GrowthLineChart className="h-44" />
            </div>
            <div className="rounded-[1rem] border border-[#ede7dc] bg-white p-4">
              <p className="text-sm font-black text-[#18233a]">Next move</p>
              <p className="mt-3 text-sm leading-6 text-[#667086]">
                Publish the Ascend case study and add one metric screenshot.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex min-h-9 items-center gap-2 rounded-full bg-[#fff0eb] px-4 text-xs font-black text-[#c9533e]"
              >
                <Plus className="size-3.5" />
                Add task
              </button>
            </div>
          </div>
        </div>
      </div>
    </SketchCard>
  );
}

export function StatusPill({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em]",
        toneClasses[tone],
      )}
    >
      <CheckCircle2 className="size-3" />
      {children}
    </span>
  );
}

export function ShareButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#18233a] px-5 text-sm font-black text-white shadow-[0_14px_36px_rgba(24,35,58,0.16)]"
      >
        <Share2 className="size-4" />
        Share page
      </button>
      <button
        type="button"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#ded9cf] bg-white px-5 text-sm font-black text-[#18233a]"
      >
        <ArrowUpRight className="size-4" />
        Open preview
      </button>
    </div>
  );
}

export function TimelinePreviewMini() {
  return (
    <div className="relative grid gap-4 border-l border-[#ded9cf] pl-5">
      {timelineItems.slice(0, 3).map((item) => (
        <div key={item.title} className="relative">
          <span className="absolute -left-[1.65rem] top-1 size-3 rounded-full border border-[#ffb7a6] bg-[#ffefe9]" />
          <p className="text-sm font-semibold tracking-[-0.02em] text-[#18233a]">
            {item.title}
          </p>
          <p className="mt-1 text-xs text-[#8a92a2]">{item.date}</p>
        </div>
      ))}
    </div>
  );
}
