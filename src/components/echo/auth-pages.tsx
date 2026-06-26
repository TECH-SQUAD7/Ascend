"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Globe2,
  LoaderCircle,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { AnimatedPage, EchoLogo, LineArtBackground, SketchCard } from "./shared";

const roles = ["Student", "Creator", "Founder", "Developer", "Designer"] as const;
type Role = (typeof roles)[number];

export function LoginPage() {
  const { loading, enterDashboard } = useDemoAuth();

  return (
    <AuthShell
      title="Welcome back."
      copy="Demo access routes you into the proof workspace. No password is stored yet."
      footer={
        <>
          New to ECHO?{" "}
          <Link href="/signup" className="font-black text-[#18233a]">
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={enterDashboard} className="grid gap-4">
        <button
          type="button"
          onClick={() => enterDashboard()}
          disabled={loading}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#e5ded3] bg-white text-sm font-black text-[#18233a] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Globe2 className="size-4" />
          Continue with Google
        </button>
        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-[#9aa1af]">
          <span className="h-px flex-1 bg-[#e5ded3]" />
          or
          <span className="h-px flex-1 bg-[#e5ded3]" />
        </div>
        <AuthInput
          icon={Mail}
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <AuthInput
          icon={LockKeyhole}
          label="Password"
          name="password"
          type="password"
          placeholder="********"
          autoComplete="current-password"
        />
        <SubmitButton loading={loading} idleLabel="Login" loadingLabel="Opening dashboard" />
      </form>
    </AuthShell>
  );
}

export function SignupPage() {
  const { loading, enterDashboard } = useDemoAuth();
  const [selectedRole, setSelectedRole] = useState<Role>("Founder");

  return (
    <AuthShell
      title="Create your proof graph."
      copy="Pick your role and enter the peaceful demo workspace. Real accounts come later."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-black text-[#18233a]">
            Login
          </Link>
        </>
      }
    >
      <form onSubmit={enterDashboard} className="grid gap-4">
        <AuthInput
          icon={UserRound}
          label="Name"
          name="name"
          type="text"
          placeholder="Rajat Sharma"
          autoComplete="name"
        />
        <AuthInput
          icon={Mail}
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <AuthInput
          icon={LockKeyhole}
          label="Password"
          name="password"
          type="password"
          placeholder="Create a password"
          autoComplete="new-password"
        />
        <div>
          <p className="mb-3 text-sm font-black text-[#18233a]">Role</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {roles.map((role) => {
              const selected = role === selectedRole;

              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  aria-pressed={selected}
                  className={`min-h-11 rounded-full border px-3 text-sm font-bold transition hover:-translate-y-0.5 ${
                    selected
                      ? "border-[#ffd0c3] bg-[#fff0eb] text-[#c9533e] shadow-[0_10px_28px_rgba(201,83,62,0.08)]"
                      : "border-[#e5ded3] bg-white text-[#667086] hover:text-[#18233a]"
                  }`}
                >
                  {role}
                </button>
              );
            })}
          </div>
          <input type="hidden" name="role" value={selectedRole} />
        </div>
        <SubmitButton
          loading={loading}
          idleLabel="Create my proof graph"
          loadingLabel="Creating demo graph"
        />
      </form>
    </AuthShell>
  );
}

function useDemoAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const enterDashboard = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      router.push("/dashboard");
    }, 420);
  };

  return { loading, enterDashboard };
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
  name,
  type,
  placeholder,
  autoComplete,
}: {
  icon: LucideIcon;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-black text-[#18233a]">
      {label}
      <span className="flex min-h-12 items-center gap-3 rounded-[1rem] border border-[#e5ded3] bg-white px-4 text-[#667086] shadow-[0_10px_28px_rgba(24,35,58,0.04)]">
        <Icon className="size-4 shrink-0" />
        <input
          required
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="h-10 min-w-0 flex-1 bg-transparent text-sm text-[#18233a] outline-none placeholder:text-[#a5adba]"
        />
      </span>
    </label>
  );
}

function SubmitButton({
  loading,
  idleLabel,
  loadingLabel,
}: {
  loading: boolean;
  idleLabel: string;
  loadingLabel: string;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#18233a] px-5 text-sm font-black text-white shadow-[0_16px_40px_rgba(24,35,58,0.17)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-75"
    >
      {loading ? (
        <>
          <LoaderCircle className="size-4 animate-spin" />
          {loadingLabel}
        </>
      ) : (
        <>
          {idleLabel}
          <ArrowRight className="size-4" />
        </>
      )}
    </button>
  );
}
