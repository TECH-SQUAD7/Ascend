"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import {
  proofPageSections,
  publicSkills,
  publicStats,
  timelineItems,
} from "./data";
import {
  AccentLabel,
  AnimatedPage,
  EchoLogo,
  LineArtBackground,
  SkillTag,
  SketchCard,
  TimelineItem,
} from "./shared";

export function PublicRajatProofPage() {
  return (
    <AnimatedPage className="relative min-h-screen overflow-hidden bg-[#fffdf8] text-[#18233a]">
      <LineArtBackground />
      <header className="relative z-10 px-5 pt-5 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between rounded-full border border-[#e5ded3] bg-white/78 px-4 py-3 shadow-[0_18px_58px_rgba(24,35,58,0.07)] backdrop-blur-xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black text-[#667086]"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>
          <EchoLogo />
          <Link
            href="/signup"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#18233a] px-4 text-sm font-black text-white hover:text-white"
          >
            Build yours
            <ExternalLink className="size-4" />
          </Link>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-[1180px] px-5 py-14 sm:px-8 lg:px-12">
        <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <AccentLabel>Public proof page</AccentLabel>
            <h1 className="mt-7 text-[4rem] font-semibold leading-[0.86] tracking-[-0.075em] sm:text-[5.5rem]">
              Rajat Sharma
            </h1>
            <p className="mt-5 text-xl font-bold text-[#667086]">
              AI Product Builder
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#667086]">
              I build products that turn ideas into real-world impact.
            </p>
          </div>
          <SketchCard className="p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {publicStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] p-5 text-center"
                >
                  <p className="text-4xl font-semibold tracking-[-0.06em] text-[#18233a]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a92a2]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SketchCard>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <SketchCard className="p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#ffd0c3] bg-[#fff0eb] text-[#c9533e]">
                <Sparkles className="size-5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a92a2]">
                  Featured project
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  Ascend - AI for Freelancers
                </h2>
                <p className="mt-4 text-sm leading-6 text-[#667086]">
                  A focused AI product experience for freelancers building
                  proof, offers, lead workflows, and calm client systems.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {proofPageSections.map((section) => {
                const Icon = section.icon;

                return (
                  <div
                    key={section.title}
                    className="rounded-[1rem] border border-[#ede7dc] bg-[#fbfaf6] p-4"
                  >
                    <span className="grid size-9 place-items-center rounded-full border border-[#cfe5f8] bg-[#edf8ff] text-[#2f719e]">
                      <Icon className="size-4" />
                    </span>
                    <p className="mt-4 font-semibold tracking-[-0.02em]">
                      {section.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#667086]">
                      {section.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </SketchCard>

          <SketchCard className="p-6">
            <p className="text-sm font-black text-[#18233a]">Skills</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {publicSkills.map((skill, index) => (
                <SkillTag
                  key={skill}
                  label={skill}
                  tone={index % 3 === 0 ? "blue" : index % 3 === 1 ? "lavender" : "mint"}
                />
              ))}
            </div>
          </SketchCard>
        </section>

        <section className="mt-10">
          <div className="mb-6">
            <AccentLabel>Timeline</AccentLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em]">
              Recent proof
            </h2>
          </div>
          <div className="relative grid gap-5 border-l border-[#ded9cf] pl-4 sm:pl-8">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.title} {...item} index={index} />
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#e5ded3] px-5 py-9 text-center text-sm font-bold text-[#667086]">
        Powered by ECHO
      </footer>
    </AnimatedPage>
  );
}
