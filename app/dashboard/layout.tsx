import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DashboardShell } from "@/src/components/echo/dashboard-shell";

export const metadata: Metadata = {
  title: "Dashboard | ECHO",
  description: "ECHO dashboard UI shell with mock proof-of-work data.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
