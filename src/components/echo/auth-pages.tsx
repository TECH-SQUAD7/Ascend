"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { AnimatedPage, EchoLogo, LineArtBackground, SketchCard } from "./shared";

const roles = ["Student", "Creator", "Founder", "Developer", "Designer"] as const;

export function LoginPage() {
  return (
    <AuthShell
      title="Welcome back."
      copy="Continue shaping your proof graph with mock evidence and demo analysis."
      footer={
        <>
          New to ECHO?{" "}
          <Link href="/signup" className="font-black text-[#18233a]">
            Create an account
          </Link>
        </>
      }
    >
      <button
        type="button"
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#e5ded3] bg-white text-sm font-black text-[#18233a]"
      >
        <Globe2 className="size-4" />
        Continue with Google
      </button>
      <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-[#9aa1af]">
        <span className="h-px flex-1 bg-[#e5ded3]" />
        or
        <span className="h-px flex-1 bg-[#e5ded3]" />
      </div>
      <AuthInput icon={Mail} label="Email" type="email" placeholder="you@example.com" />
      <AuthInput icon={LockKeyhole} label="Password" type="password" placeholder="********" />
      <button
        type="button"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#18233a] px-5 text-sm font-black text-white shadow-[0_16px_40px_rgba(24,35,58,0.17)]"
      >
        Login
        <ArrowRight className="size-4" />
      </button>
    </AuthShell>
  );
}

export function SignupPage() {
  return (
    <AuthShell
      title="Create your proof graph."
      copy="Pick your role and start with a demo proof workspace. No backend is connected yet."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-black text-[#18233a]">
            Login
          </Link>
        </>
      }
    >
      <AuthInput icon={UserRound} label="Name" type="text" placeholder="Rajat Sharma" />
      <AuthInput icon={Mail} label="Email" type="email" placeholder="you@example.com" />
      <AuthInput icon={LockKeyhole} label="Password" type="password" placeholder="Create a password" />
      <div>
        <p className="mb-3 text-sm font-black text-[#18233a]">Role</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {roles.map((role, index) => (
            <button
              key={role}
              type="button"
              className={`min-h-11 rounded-full border px-3 text-sm font-bold transition ${
                index === 2
                  ? "border-[#ffd0c3] bg-[#fff0eb] text-[#c9533e]"
                  : "border-[#e5ded3] bg-white text-[#667086] hover:text-[#18233a]"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#18233a] px-5 text-sm font-black text-white shadow-[0_16px_40px_rgba(24,35,58,0.17)]"
      >
        Create my proof graph
        <ArrowRight className="size-4" />
      </button>
    </AuthShell>
  );
}

function AuthShell({
  title,
  copy,
  footer,
  children,
}: {
  title: string;
  copy: string;
  footer: ReactNode;
  children: ReactNode;
}) {
  return (
    <AnimatedPage className="relative grid min-h-screen place-items-center overflow-hidden bg-[#fffdf8] px-5 py-10 text-[#18233a]">
      <LineArtBackground />
      <Link href="/" className="absolute left-5 top-5 z-10 sm:left-8 sm:top-8">
        <EchoLogo />
      </Link>
      <SketchCard className="relative z-10 w-full max-w-md p-6 sm:p-8">
        <div className="text-center">
          <EchoLogo className="justify-center" />
          <h1 className="mt-7 text-4xl font-semibold leading-[0.95] tracking-[-0.055em]">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#667086]">{copy}</p>
        </div>
        <div className="mt-8 grid gap-4">{children}</div>
        <p className="mt-7 text-center text-sm text-[#667086]">{footer}</p>
      </SketchCard>
    </AnimatedPage>
  );
}

function AuthInput({
  icon: Icon,
  label,
  type,
  placeholder,
}: {
  icon: LucideIcon;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-black text-[#18233a]">
      {label}
      <span className="flex min-h-12 items-center gap-3 rounded-[1rem] border border-[#e5ded3] bg-white px-4 text-[#667086] shadow-[0_10px_28px_rgba(24,35,58,0.04)]">
        <Icon className="size-4 shrink-0" />
        <input
          type={type}
          placeholder={placeholder}
          className="h-10 min-w-0 flex-1 bg-transparent text-sm text-[#18233a] outline-none placeholder:text-[#a5adba]"
        />
      </span>
    </label>
  );
}
