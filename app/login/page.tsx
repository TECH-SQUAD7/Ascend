import type { Metadata } from "next";
import { LoginPage } from "@/src/components/echo/auth-pages";

export const metadata: Metadata = {
  title: "Login | ECHO",
  description: "Login to the ECHO proof-of-work demo shell.",
};

export default function Page() {
  return <LoginPage />;
}
