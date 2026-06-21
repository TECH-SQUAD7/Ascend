"use client";

import { FormEvent, MouseEvent, ReactNode, useState } from "react";
import { ascendPaths, faqs, membershipTiers } from "@/src/config/content";
import { formsConfig } from "@/src/config/forms";
import { linksConfig } from "@/src/config/links";

type TierId = (typeof membershipTiers)[number]["id"];
type ModalState = { type: "application"; tier: TierId } | null;
type SubmitState = "idle" | "loading" | "success" | "error";

const problemCards = [
  "You have skills but don't know what to sell.",
  "You have ideas but no offer.",
  "You have a business but it's stuck.",
  "You don't know how to price.",
  "You don't know where customers come from.",
  "You don't know what to do today.",
];

const howSteps = [
  {
    title: "Tell Ascend about you",
    copy: "Share your skills, time, budget, goal, and your biggest blocker.",
  },
  {
    title: "Get your path",
    copy: "Ascend recommends the income path that fits where you actually are.",
  },
  {
    title: "Get a revenue direction",
    copy: "An offer idea, pricing guidance, and a 7-day roadmap you can actually run.",
  },
  {
    title: "Apply for your tier",
    copy: "Submit one application. Payment details are sent after review or routing.",
  },
];

const userTypes = [
  "Student",
  "Freelancer",
  "Creator",
  "Founder",
  "Business Owner",
  "Other",
];

const goalTypes = [
  "Start a business",
  "Start freelancing",
  "Become a creator",
  "Launch an agency",
  "Grow existing business",
  "Create income stream",
];

export function AscendLanding() {
  const [modal, setModal] = useState<ModalState>(null);
  const [applicationStatus, setApplicationStatus] =
    useState<SubmitState>("idle");
  const [applicationError, setApplicationError] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<SubmitState>("idle");
  const [waitlistError, setWaitlistError] = useState("");

  const closeModal = () => {
    setModal(null);
    setApplicationStatus("idle");
    setApplicationError("");
  };

  const submitWaitlist = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setWaitlistStatus("loading");
    setWaitlistError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      formType: "waitlist",
      timestamp: new Date().toISOString(),
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      selectedPathInterest: String(formData.get("selectedPathInterest") || ""),
      source: "ascend-landing",
      pageUrl: window.location.href,
    };

    const endpoint = formsConfig.applicationsEndpoint?.trim();

    if (!endpoint || endpoint === "REPLACE_WITH_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
      // TODO: Paste the deployed Google Apps Script Web App URL into src/config/forms.ts.
      setWaitlistStatus("success");
      form.reset();
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
      } | null;

      if (!response.ok || result?.success === false) {
        throw new Error("Waitlist webhook failed.");
      }

      setWaitlistStatus("success");
      form.reset();
    } catch {
      setWaitlistStatus("error");
      setWaitlistError(
        "Something went wrong while joining the waitlist. Please try again.",
      );
    }
  };

  const submitApplication = async (
    event: FormEvent<HTMLFormElement>,
    selectedTier: TierId,
  ) => {
    event.preventDefault();
    setApplicationStatus("loading");
    setApplicationError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const tierData = membershipTiers.find((item) => item.id === selectedTier);
    const payload = {
      formType: "application",
      timestamp: new Date().toISOString(),
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      selectedTier: tierData?.name ?? selectedTier,
      userType: String(formData.get("userType") || ""),
      goalType: String(formData.get("goalType") || ""),
      skills: String(formData.get("skills") || ""),
      currentStage: String(formData.get("currentStage") || ""),
      biggestChallenge: String(formData.get("biggestChallenge") || ""),
      revenueGoal: String(formData.get("revenueGoal") || ""),
      country: String(formData.get("country") || ""),
      notes: String(formData.get("notes") || ""),
      source: "ascend-landing",
      pageUrl: window.location.href,
    };

    const endpoint = formsConfig.applicationsEndpoint?.trim();

    if (!endpoint || endpoint === "REPLACE_WITH_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
      // TODO: Paste the deployed Google Apps Script Web App URL into src/config/forms.ts.
      setApplicationStatus("success");
      form.reset();
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
      } | null;

      if (!response.ok || result?.success === false) {
        throw new Error("Application webhook failed.");
      }

      setApplicationStatus("success");
      form.reset();
    } catch {
      setApplicationStatus("error");
      setApplicationError(
        "Something went wrong while sending your application. Please try again.",
      );
    }
  };

  return (
    <main className="bg-paper text-ink">
      <Nav />

      <section className="hero-scene relative isolate min-h-[960px] overflow-hidden px-5 pt-10 sm:px-8 lg:px-10">
        <DoodleCloud className="left-[1.2%] top-[10%] w-32 sm:w-44" />
        <DoodleCloud className="right-[4%] top-[15%] hidden w-48 sm:block" />
        <DoodleCloud className="left-[32%] top-[22%] hidden w-28 opacity-70 lg:block" />
        <SunDoodle />
        <Birds />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center pt-20 text-center">
          <div className="rounded-full border border-ink bg-white/75 px-5 py-2 text-base text-ink shadow-soft">
            Founder Stream applications are open
          </div>
          <h1 className="mt-12 max-w-4xl text-balance font-hand text-[5.4rem] font-bold leading-[0.78] tracking-[-0.03em] text-ink sm:text-[7rem] lg:text-[8.6rem]">
            Turn your skills
            <span className="block pt-6 text-coral">into revenue.</span>
          </h1>
          <p className="mt-9 text-2xl text-muted">
            Your all-in-one AI business companion.
          </p>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-muted">
            Ascend helps you find the right income path, package what you can
            offer, and take the next action toward real revenue.
          </p>
          <div className="relative z-20 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#free-waitlist" className="btn-primary">
              Join Free Waitlist
            </a>
            <a href="#tiers" className="btn-secondary">
              Explore Founder Stream
            </a>
          </div>
          <p className="mt-8 max-w-2xl text-base text-muted">
            Founding access is limited. Built for people who want practical
            income progress.
          </p>
        </div>

        <MountainLine />
      </section>

      <section className="bg-paper px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading
          title="The quiet stuck-ness."
          subtitle="Most people aren't lazy. They're stuck between ambition and clarity — and the internet only sells louder confusion."
        />
        <div className="mx-auto mt-16 grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((problem, index) => (
            <TiltCard key={problem} className="ink-card min-h-32 p-7">
              <p className="text-xl leading-9 text-muted">
                <span className="mr-2 font-hand text-3xl font-bold text-coral">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {problem}
              </p>
            </TiltCard>
          ))}
        </div>
      </section>

      <section id="paths" className="relative bg-sky-soft px-5 py-28 sm:px-8 lg:px-10">
        <DoodleCloud className="right-[3%] top-14 hidden w-28 sm:block" />
        <SectionHeading
          title="Six paths up the mountain."
          subtitle="Ascend helps you pick the path that fits your skills, time, and stage — then walks it with you."
        />
        <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ascendPaths.map((path, index) => (
            <TiltCard key={path.title} className="ink-card min-h-80 p-10">
              <p className="font-hand text-6xl font-bold text-coral">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-hand text-4xl font-bold leading-none">
                {path.title}
              </h3>
              <p className="mt-5 font-hand text-xl font-bold text-coral">
                Goal: {path.goal}
              </p>
              <p className="mt-6 text-lg leading-8 text-muted">
                {path.description}
              </p>
            </TiltCard>
          ))}
        </div>
      </section>

      <section id="how" className="bg-paper px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading
          title="How Ascend works."
          subtitle="A calm, four-step climb. No hype, no overwhelm."
        />
        <div className="mx-auto mt-20 grid max-w-7xl gap-7 md:grid-cols-2 xl:grid-cols-4">
          {howSteps.map((step, index) => (
            <TiltCard key={step.title} className="ink-card min-h-72 p-9">
              <p className="font-hand text-7xl font-bold text-coral">
                {index + 1}
              </p>
              <h3 className="mt-7 font-hand text-3xl font-bold">
                {step.title}
              </h3>
              <p className="mt-5 text-lg leading-8 text-muted">{step.copy}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      <section id="tiers" className="relative bg-cream px-5 py-28 sm:px-8 lg:px-10">
        <SunMini />
        <SectionHeading
          title="Founder Stream."
          subtitle="Choose your tier, submit an application, and receive payment link/details after submission."
        />
        <div className="mx-auto mt-20 grid max-w-7xl gap-9 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <TiltCard
              key={tier.id}
              className={`ink-card flex min-h-[720px] flex-col p-9 ${
                tier.featured ? "ring-8 ring-peach/70" : ""
              }`}
            >
              <div>
                <h3 className="font-hand text-5xl font-bold">{tier.name}</h3>
                <p className="mt-2 text-lg text-muted">{tier.stream}</p>
                <p className="mt-10 font-hand text-6xl font-bold text-coral">
                  {tier.price}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="tag-pill">{tier.seats}</span>
                  <span className="tag-pill">{tier.duration}</span>
                  {tier.featured ? (
                    <span className="tag-pill bg-peach">Most chosen</span>
                  ) : null}
                  {tier.id === "elite" ? (
                    <span className="tag-pill bg-peach">Application first</span>
                  ) : null}
                </div>
                <p className="mt-5 text-lg leading-8 text-muted">
                  {tier.id === "elite"
                    ? "Elite applications are reviewed before payment."
                    : "Payment link/details will be sent shortly after application."}
                </p>
              </div>

              <ul className="mt-8 grid flex-1 gap-4 text-lg leading-7 text-ink">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="text-coral">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setModal({ type: "application", tier: tier.id })}
                className="btn-primary mt-10 w-full"
              >
                Apply for {tier.name}
              </button>
            </TiltCard>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-4xl rounded-[1.35rem] border border-ink bg-white px-8 py-7 text-center text-lg leading-8 text-muted shadow-soft">
          Ascend does not guarantee income, jobs, salary, equity, or employment.
          No payment is collected on-site. Payment link/details are sent after
          the application step.
        </p>
      </section>

      <section id="free-waitlist" className="relative bg-sky-soft px-5 py-28 sm:px-8 lg:px-10">
        <DoodleCloud className="left-[4%] top-16 hidden w-36 sm:block" />
        <DoodleCloud className="right-[5%] bottom-24 hidden w-44 opacity-70 lg:block" />
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-hand text-3xl font-bold text-coral">
              Free waitlist
            </p>
            <h2 className="mt-3 font-hand text-6xl font-bold leading-none sm:text-7xl">
              Not ready for Founder Stream yet?
            </h2>
            <p className="mt-7 text-xl leading-9 text-muted">
              Join the free Ascend waitlist and get early updates, product
              access, and the first public version of the Income Path Finder.
            </p>
            <div className="mt-8 rounded-[1.35rem] border-2 border-ink bg-white/85 p-6 shadow-ink">
              <p className="font-hand text-3xl font-bold">
                Free Waitlist != Founder Stream
              </p>
              <p className="mt-3 text-lg leading-8 text-muted">
                The free waitlist is for updates and early product access.
                Founder Stream is the paid founding membership with resources,
                application routing, and support.
              </p>
            </div>
          </div>

          <TiltCard className="ink-card bg-white p-7 sm:p-9">
            {waitlistStatus === "success" ? (
              <div className="grid min-h-[34rem] place-items-center text-center">
                <div>
                  <p className="font-hand text-6xl font-bold text-coral">
                    You&apos;re in.
                  </p>
                  <p className="mx-auto mt-5 max-w-xl text-xl leading-9 text-muted">
                    You&apos;re on the Ascend waitlist. We&apos;ll send early
                    access and Income Path Finder updates soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setWaitlistStatus("idle")}
                    className="btn-secondary mt-8"
                  >
                    Add another person
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submitWaitlist} className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <WaitlistInput label="Full name" name="fullName" />
                  <WaitlistInput label="Email" name="email" type="email" />
                </div>
                <label className="grid gap-2 text-sm font-bold text-muted">
                  Selected Path/Interest
                  <select required name="selectedPathInterest" className="form-field">
                    <option value="">Choose a path</option>
                    {[
                      "Start a Business",
                      "Become a Freelancer",
                      "Become a Creator",
                      "Launch an Agency",
                      "Grow Existing Business",
                      "Create an Income Stream",
                      "Not Sure Yet",
                    ].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                {waitlistStatus === "error" ? (
                  <div className="rounded-[1.25rem] border-2 border-ink bg-peach p-4 text-sm font-bold text-ink">
                    {waitlistError}
                  </div>
                ) : null}
                <button className="btn-primary w-full" disabled={waitlistStatus === "loading"}>
                  {waitlistStatus === "loading"
                    ? "Joining..."
                    : "Join Free Waitlist"}
                </button>
              </form>
            )}
          </TiltCard>
        </div>
      </section>

      <section id="faq" className="bg-paper px-5 py-28 sm:px-8 lg:px-10">
        <SectionHeading title="Honest answers." subtitle="No hype, no scripts." />
        <div className="mx-auto mt-16 grid max-w-4xl gap-5">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="ink-card group bg-white px-8 py-7 open:py-8"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-hand text-3xl font-bold">
                {faq.question}
                <span className="text-coral group-open:hidden">+</span>
                <span className="hidden text-coral group-open:inline">-</span>
              </summary>
              <p className="mt-8 text-lg leading-8 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-ink bg-paper px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-hand text-4xl font-bold">Ascend</p>
            <p className="mt-1 text-muted">by Crevu Labs</p>
          </div>
          <div className="flex flex-wrap gap-8 text-lg">
            <a href={linksConfig.instagram}>Instagram</a>
            <a href={linksConfig.x}>X</a>
            <a href={`mailto:${linksConfig.contactEmail}`}>Contact</a>
          </div>
          <p className="text-muted">© 2026 Crevu Labs</p>
        </div>
      </footer>

      {modal ? (
        <Modal onClose={closeModal}>
          <ApplicationModal
            tier={modal.tier}
            status={applicationStatus}
            error={applicationError}
            onSubmit={(event) => submitApplication(event, modal.tier)}
          />
        </Modal>
      ) : null}
    </main>
  );
}

function Nav() {
  return (
    <nav className="bg-paper px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1800px] grid-cols-[1fr_auto_1fr] items-center">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-hand text-4xl font-bold leading-none">Ascend</span>
          <span className="hidden text-sm text-muted sm:inline">by Crevu Labs</span>
        </a>
        <div className="hidden items-center gap-10 text-lg text-ink md:flex">
          <a href="#paths">Paths</a>
          <a href="#how">How it works</a>
          <a href="#tiers">Founder Stream</a>
          <a href="#free-waitlist">Free Waitlist</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex justify-end">
          <a href="#tiers" className="btn-nav">
            Apply
          </a>
        </div>
      </div>
    </nav>
  );
}

function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    event.currentTarget.style.setProperty("--rx", `${(-py * 5).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--ry", `${(px * 5).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--tx", `${(px * 8).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--ty", `${(py * 8).toFixed(2)}px`);
  };

  const handleLeave = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
    event.currentTarget.style.setProperty("--tx", "0px");
    event.currentTarget.style.setProperty("--ty", "0px");
  };

  return (
    <article
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </article>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="font-hand text-6xl font-bold leading-none sm:text-7xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-6 max-w-4xl text-xl leading-8 text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function DoodleCloud({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 190 70"
      className={`doodle-float pointer-events-none absolute text-muted ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 49H160C176 49 184 39 178 27C174 18 164 16 156 17C151 7 137 2 126 8C116 0 99 2 91 12C80 4 62 7 55 19C43 17 32 24 30 36C18 35 9 42 12 51C14 61 25 63 34 61"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunDoodle() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="doodle-float pointer-events-none absolute left-[63%] top-[18%] hidden h-16 w-16 text-coral sm:block"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="17" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * Math.PI) / 6;
        const x1 = 40 + Math.cos(angle) * 26;
        const y1 = 40 + Math.sin(angle) * 26;
        const x2 = 40 + Math.cos(angle) * 35;
        const y2 = 40 + Math.sin(angle) * 35;
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function SunMini() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="pointer-events-none absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-coral"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="17" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * Math.PI) / 6;
        const x1 = 40 + Math.cos(angle) * 26;
        const y1 = 40 + Math.sin(angle) * 26;
        const x2 = 40 + Math.cos(angle) * 35;
        const y2 = 40 + Math.sin(angle) * 35;
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function Birds() {
  return (
    <svg
      viewBox="0 0 120 40"
      className="pointer-events-none absolute left-[20%] top-[34%] h-10 w-24 text-ink"
      fill="none"
      aria-hidden="true"
    >
      <path d="M10 24c8-10 18-10 26 0c8-10 18-10 26 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M82 16c5-6 12-6 18 0c5-6 12-6 18 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

function MountainLine() {
  return (
    <svg
      viewBox="0 0 1920 350"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-28 left-0 z-0 h-[360px] w-full text-muted"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 300L290 70L480 215L770 0L1060 215L1340 45L1630 245L1920 120"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M720 78L770 0L825 84M1290 110L1340 45L1390 125"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path d="M0 345H1920" stroke="currentColor" strokeWidth="6" />
    </svg>
  );
}

function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/35 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[1.5rem] border-2 border-ink bg-paper p-6 shadow-ink sm:p-8">
        <div className="mb-5 flex justify-end">
          <button type="button" onClick={onClose} className="btn-secondary px-5 py-2">
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ApplicationModal({
  tier,
  status,
  error,
  onSubmit,
}: {
  tier: TierId;
  status: SubmitState;
  error: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const tierData = membershipTiers.find((item) => item.id === tier);

  if (!tierData) {
    return null;
  }

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <p className="font-hand text-6xl font-bold text-coral">
          {tier === "elite"
            ? "Elite application received."
            : "Application received."}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-xl leading-9 text-muted">
          {tier === "elite"
            ? "Selected applicants will receive next steps."
            : "Payment details will be sent shortly."}
        </p>
        {tier === "elite" ? (
          <p className="mx-auto mt-5 max-w-xl rounded-[1.25rem] border-2 border-ink bg-white p-5 text-lg leading-8 text-muted shadow-soft">
            Elite applications are reviewed before payment.
          </p>
        ) : (
          <p className="mx-auto mt-5 max-w-xl rounded-[1.25rem] border-2 border-ink bg-white p-5 text-lg leading-8 text-muted shadow-soft">
            Payment link/details will be sent shortly.
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <p className="font-hand text-3xl font-bold text-coral">
        Founder Stream application
      </p>
      <h2 className="mt-2 font-hand text-5xl font-bold">
        {tierData.name} - {tierData.price}
      </h2>
      <p className="mt-4 text-lg leading-8 text-muted">
        {tier === "elite"
          ? "Elite applications are reviewed before payment."
          : "Payment link/details will be sent shortly."}
      </p>

      <form onSubmit={onSubmit} className="mt-7 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput label="Full name" name="fullName" />
          <FormInput label="Email" name="email" type="email" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput label="WhatsApp number" name="whatsapp" />
          <label className="grid gap-2 text-sm font-bold text-muted">
            Selected tier
            <input
              readOnly
              name="selectedTier"
              value={tierData.name}
              className="form-field bg-sky-soft"
            />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormSelect label="User type" name="userType" options={userTypes} />
          <FormSelect label="Goal type" name="goalType" options={goalTypes} />
        </div>
        <FormTextarea label="Skills" name="skills" />
        <FormInput label="Current stage" name="currentStage" />
        <FormTextarea label="Biggest challenge" name="biggestChallenge" />
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput label="Revenue goal" name="revenueGoal" />
          <FormInput label="Country" name="country" />
        </div>
        <FormTextarea label="Notes" name="notes" required={false} />

        {error ? (
          <div className="rounded-[1.25rem] border-2 border-ink bg-peach p-4 text-sm font-bold text-ink">
            {error}
          </div>
        ) : null}

        <button className="btn-primary mt-2 w-full" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Submit application"}
        </button>
      </form>
    </div>
  );
}

function FormInput({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-muted">
      {label}
      <input required name={name} type={type} className="form-field" />
    </label>
  );
}

function FormSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-muted">
      {label}
      <select required name={name} className="form-field">
        <option value="">Choose one</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function FormTextarea({
  label,
  name,
  required = true,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-muted">
      {label}
      <textarea
        required={required}
        name={name}
        rows={3}
        className="form-field min-h-24 py-3"
      />
    </label>
  );
}

function WaitlistInput({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-muted">
      {label}
      <input
        required
        name={name}
        type={type}
        className="form-field"
        placeholder={label}
      />
    </label>
  );
}
