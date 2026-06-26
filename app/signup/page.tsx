import type { Metadata } from "next";
import { SignupPage } from "@/src/components/echo/auth-pages";

export const metadata: Metadata = {
  title: "Signup | ECHO",
  description: "Create your ECHO proof graph in the frontend demo shell.",
};

export default function Page() {
  return <SignupPage />;
}
