"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { featureItems, workSteps } from "./data";
import {
  AccentLabel,
  AnimatedPage,
  DashboardPreviewMockup,
  EchoLogo,
  LineArtBackground,
  PrimaryLink,
  SecondaryLink,
  SketchCard,
} from "./shared";

export function EchoLandingPage() {
  return (
    <AnimatedPage className="relative min-h-screen overflow-hidden bg-[#fffdf8] text-[#18233a]">
      <LineArtBackground />
      <LandingNav />
      <section className="relative z-10 mx-auto grid max-w-[1480px] gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:pb-28 lg:pt-20">
        <div className="max-w-3xl">
          <AccentLabel>AI proof-of-work platform</AccentLabel>
          <h1 className="mt-7 text-[4rem] font-semibold leading-[0.86] tracking-[-0.075em] text-[#18233a] sm:text-[5.8rem] lg:text-[6.6rem]">
            Turn your work into proof.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#667086] sm:text-xl">
            Capture your projects, analyze your growth, and showcase the real
            impact of your work.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="/signup">Start Building</PrimaryLink>
            <SecondaryLink href="/dashboard">View Demo</SecondaryLink>
          </div>
          <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-3">
            {["Mock AI states", "Public proof page", "Founder-ready UI"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-[#e5ded3] bg-white/72 px-3 py-2 text-xs font-bold text-[#667086]"
                >
                  <CheckCircle2 className="size-3.5 text-[#5fae7d]" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
        <div className="relative">
          <DashboardPreviewMockup />
          <SketchCard className="absolute -bottom-8 left-5 hidden w-72 p-4 sm:block">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-[#ffd0c3] bg-[#fff0eb] text-[#c9533e]">
                <Sparkles className="size-4" />
              </span>
              <div>
                <p className="text-sm font-black text-[#18233a]">
                  Evidence Quality
                </p>
                <p className="text-xs text-[#667086]">High confidence signal</p>
              </div>
            </div>
          </SketchCard>
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <AccentLabel>Features</AccentLabel>
          <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#18233a] sm:text-5xl">
            A proof workspace that feels light enough to use every day.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureItems.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <SketchCard key={feature.title} className="p-6" delay={index * 0.04}>
                <span className="grid size-11 place-items-center rounded-full border border-[#d7cffd] bg-[#f0edff] text-[#6351bb]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em] text-[#18233a]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#667086]">
                  {feature.copy}
                </p>
              </SketchCard>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 rounded-[1.6rem] border border-[#e5ded3] bg-white/58 p-6 shadow-[0_24px_80px_rgba(24,35,58,0.07)] backdrop-blur-xl lg:grid-cols-[0.7fr_1.3fr] lg:p-9">
          <div>
            <AccentLabel>How it works</AccentLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#18233a]">
              Upload, analyze, organize, showcase.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#667086]">
              The first version is a complete frontend shell. Every result here
              is mock data, ready for real AI and storage later.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {workSteps.map((step, index) => (
              <SketchCard key={step} className="p-5 text-center" delay={index * 0.05}>
                <span className="mx-auto grid size-10 place-items-center rounded-full border border-[#cfe5f8] bg-[#edf8ff] text-sm font-black text-[#2f719e]">
                  {index + 1}
                </span>
                <p className="mt-4 text-lg font-semibold tracking-[-0.035em] text-[#18233a]">
                  {step}
                </p>
              </SketchCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
        <div className="rounded-[1.8rem] border border-[#e5ded3] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(237,248,255,0.76),rgba(255,240,235,0.72))] px-6 py-14 shadow-[0_30px_100px_rgba(24,35,58,0.1)]">
          <AccentLabel>Ready when you are</AccentLabel>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#18233a] sm:text-5xl">
            Build a public record of what you can actually do.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/signup">Create my proof graph</PrimaryLink>
            <SecondaryLink href="/proof/rajat">View public example</SecondaryLink>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#e5ded3] px-5 py-9 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-5 text-sm text-[#667086] sm:flex-row sm:items-center sm:justify-between">
          <EchoLogo />
          <div className="flex flex-wrap gap-5">
            <Link href="/login">Login</Link>
            <Link href="/dashboard">Demo dashboard</Link>
            <Link href="/proof/rajat">Public proof</Link>
          </div>
        </div>
      </footer>
    </AnimatedPage>
  );
}

function LandingNav() {
  return (
    <header className="relative z-20 px-5 pt-4 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-[1480px] items-center justify-between rounded-full border border-[#e5ded3] bg-white/76 px-4 py-3 shadow-[0_18px_58px_rgba(24,35,58,0.07)] backdrop-blur-xl">
        <Link href="/" className="text-[#18233a]">
          <EchoLogo />
        </Link>
        <div className="hidden items-center gap-7 text-sm font-bold text-[#667086] md:flex">
          <a href="#features">Features</a>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/proof/rajat">Proof Page</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden min-h-10 items-center rounded-full px-4 text-sm font-black text-[#18233a] sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#18233a] px-4 text-sm font-black text-white shadow-[0_14px_34px_rgba(24,35,58,0.16)] hover:text-white"
          >
            Start
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
