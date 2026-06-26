import type { Metadata } from "next";
import { PublicRajatProofPage } from "@/src/components/echo/public-proof-page";

export const metadata: Metadata = {
  title: "Rajat Sharma | ECHO Proof",
  description:
    "Public proof page for Rajat Sharma, AI Product Builder, powered by ECHO.",
};

export default function Page() {
  return <PublicRajatProofPage />;
}
