"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Bot,
  ChevronDown,
  Clock3,
  FileUp,
  Globe2,
  LayoutDashboard,
  Menu,
  PanelLeft,
  Search,
  Settings,
  Tags,
  TrendingUp,
  UserRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { cx, EchoLogo } from "./shared";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/upload", label: "Upload Evidence", icon: FileUp },
  { href: "/dashboard/analysis", label: "AI Analysis", icon: Bot },
  { href: "/dashboard/skills", label: "Skills", icon: Tags },
  { href: "/dashboard/timeline", label: "Proof Timeline", icon: Clock3 },
  { href: "/dashboard/growth", label: "Growth Graph", icon: TrendingUp },
  { href: "/dashboard/proof", label: "Proof Page", icon: Globe2 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
] as const;

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#18233a]">
      <div className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-[#e5ded3] bg-white/78 px-4 py-5 backdrop-blur-xl lg:block">
        <Sidebar />
      </div>
      <div className="lg:pl-72">
        <Topbar />
        <div className="px-4 pb-10 pt-5 sm:px-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
}

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col">
      <Link href="/" className="flex items-center justify-between rounded-[1.2rem] border border-[#e5ded3] bg-[#fbfaf6] px-4 py-3">
        <EchoLogo />
        <PanelLeft className="size-4 text-[#8a92a2]" />
      </Link>
      <nav className="mt-7 grid gap-1.5">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cx(
                "flex min-h-11 items-center gap-3 rounded-[0.95rem] px-3 text-sm font-bold transition",
                active
                  ? "bg-[#18233a] text-white shadow-[0_14px_34px_rgba(24,35,58,0.16)]"
                  : "text-[#667086] hover:bg-[#fbfaf6] hover:text-[#18233a]",
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-[1.2rem] border border-[#e5ded3] bg-[#fbfaf6] p-4">
        <p className="text-[0.64rem] font-black uppercase tracking-[0.18em] text-[#8a92a2]">
          Demo shell
        </p>
        <p className="mt-2 text-sm leading-6 text-[#667086]">
          Mock data only. Uploads, analysis, and sharing are placeholder UI.
        </p>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e5ded3] bg-[#fffdf8]/86 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-[#e5ded3] bg-white text-[#18233a] lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </button>
        <Link href="/" className="lg:hidden">
          <EchoLogo />
        </Link>
        <div className="ml-auto hidden min-h-11 flex-1 max-w-xl items-center gap-3 rounded-full border border-[#e5ded3] bg-white px-4 shadow-[0_10px_28px_rgba(24,35,58,0.04)] md:flex lg:ml-0">
          <Search className="size-4 text-[#8a92a2]" />
          <input
            aria-label="Search proof workspace"
            placeholder="Search evidence, skills, projects..."
            className="h-10 min-w-0 flex-1 bg-transparent text-sm text-[#18233a] outline-none placeholder:text-[#9aa1af]"
          />
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-[#e5ded3] bg-white text-[#18233a] shadow-[0_10px_28px_rgba(24,35,58,0.04)]"
            aria-label="Notifications"
          >
            <Bell className="size-4" />
          </button>
          <button
            type="button"
            className="flex min-h-11 items-center gap-2 rounded-full border border-[#e5ded3] bg-white py-1 pl-1 pr-3 text-sm font-bold text-[#18233a] shadow-[0_10px_28px_rgba(24,35,58,0.04)]"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[#edf8ff] text-[#2f719e]">
              <UserRound className="size-4" />
            </span>
            <span className="hidden sm:inline">Rajat</span>
            <ChevronDown className="size-4 text-[#8a92a2]" />
          </button>
        </div>
      </div>
    </header>
  );
}
