"use client";

import Image from "next/image";
import { FormEvent, MouseEvent, ReactNode, useState } from "react";
import { ascendPaths, faqs, membershipTiers } from "@/src/config/content";
import { formsConfig } from "@/src/config/forms";
import { linksConfig } from "@/src/config/links";
import { paymentConfig } from "@/src/config/payments";

type TierId = (typeof membershipTiers)[number]["id"];
type ModalState =
  | { type: "payment"; tier: Extract<TierId, "bronze" | "platinum"> }
  | { type: "onboarding"; tier: Extract<TierId, "bronze" | "platinum"> }
  | { type: "elite" }
  | null;

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
    title: "Join Founder Stream",
    copy: "Start executing alongside other founders, with feedback and tooling.",
  },
];

const tierLabel: Record<Extract<TierId, "bronze" | "platinum">, string> = {
  bronze: "Bronze - Founder Stream",
  platinum: "Platinum - Builder Stream",
};

export function AscendLanding() {
  const [modal, setModal] = useState<ModalState>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  const closeModal = () => {
    setModal(null);
    setSuccessMessage("");
  };

  const submitSuccess = (event: FormEvent<HTMLFormElement>, message: string) => {
    event.preventDefault();
    // TODO: Connect this form to Google Sheets, Formspree, or a database when backend collection is ready.
    setSuccessMessage(message);
  };

  const submitWaitlist = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Connect the free waitlist to Formspree using formsConfig.formspreeEndpoint.
    // TODO: Or connect the free waitlist to Google Sheets using formsConfig.googleSheetsWebhook.
    // TODO: Supabase can be added later if Ascend needs database-backed waitlist management.
    setWaitlistSuccess(true);
  };

  return (
    <main className="bg-paper text-ink">
      <Nav />

      <section className="hero-scene relative isolate min-h-[960px] overflow-hidden px-5 pt-24 sm:px-8 lg:px-10">
        <DoodleCloud className="left-[1.2%] top-[10%] w-32 sm:w-44" />
        <DoodleCloud className="right-[4%] top-[15%] hidden w-48 sm:block" />
        <DoodleCloud className="left-[32%] top-[22%] hidden w-28 opacity-70 lg:block" />
        <SunDoodle />
        <Birds />

        <div className="mx-auto flex max-w-5xl flex-col items-center pt-20 text-center">
          <div className="rounded-full border border-ink bg-white/75 px-5 py-2 text-base text-ink shadow-soft">
            ✦ Free waitlist and Founder Stream are open
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
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          subtitle="Three tiers. Limited seats. Founding access to Ascend while we build the MVP — with the support and tools to start now."
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
                onClick={() =>
                  tier.id === "elite"
                    ? setModal({ type: "elite" })
                    : setModal({ type: "payment", tier: tier.id })
                }
                className="btn-primary mt-10 w-full"
              >
                {tier.id === "elite" ? "Apply for Elite" : `Join ${tier.name}`}
              </button>
            </TiltCard>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-4xl rounded-[1.35rem] border border-ink bg-white px-8 py-7 text-center text-lg leading-8 text-muted shadow-soft">
          Ascend does not guarantee income, jobs, salary, equity, or employment.
          Founder Stream is founding access to early resources, support, and the
          Ascend community.
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
                Free Waitlist ≠ Founder Stream
              </p>
              <p className="mt-3 text-lg leading-8 text-muted">
                The free waitlist is for updates and early product access.
                Founder Stream is the paid founding membership with resources,
                Discord access, and support.
              </p>
            </div>
          </div>

          <TiltCard className="ink-card bg-white p-7 sm:p-9">
            {waitlistSuccess ? (
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
                    onClick={() => setWaitlistSuccess(false)}
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
                <WaitlistInput label="WhatsApp number" name="whatsapp" />
                <label className="grid gap-2 text-sm font-bold text-muted">
                  Interested path
                  <select required className="form-field">
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
                <WaitlistTextarea
                  label="Skill / idea / business description"
                  name="description"
                />
                <WaitlistTextarea label="Biggest blocker" name="blocker" />
                <label className="grid gap-2 text-sm font-bold text-muted">
                  Future willingness to pay
                  <select required className="form-field">
                    <option value="">Choose one</option>
                    {[
                      "₹0 for now",
                      "₹150 Founder Stream",
                      "₹1,500 Builder Stream",
                      "Not sure yet",
                    ].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <p className="text-sm leading-6 text-muted">
                  Current mode: {formsConfig.mode}. This form shows a local
                  success state until an integration is connected.
                </p>
                <button className="btn-primary w-full">Join Free Waitlist</button>
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
            <a href={linksConfig.discord}>Discord</a>
            <a href={`mailto:${linksConfig.contactEmail}`}>Contact</a>
          </div>
          <p className="text-muted">© 2026 Crevu Labs</p>
        </div>
      </footer>

      {modal ? (
        <Modal onClose={closeModal}>
          {modal.type === "payment" ? (
            <PaymentModal
              tier={modal.tier}
              onPaid={() => {
                setSuccessMessage("");
                setModal({ type: "onboarding", tier: modal.tier });
              }}
            />
          ) : null}
          {modal.type === "onboarding" ? (
            <OnboardingModal
              tier={modal.tier}
              successMessage={successMessage}
              onSubmit={(event) =>
                submitSuccess(
                  event,
                  "You are marked as submitted. We will verify payment and send next steps manually.",
                )
              }
            />
          ) : null}
          {modal.type === "elite" ? (
            <EliteModal
              successMessage={successMessage}
              onSubmit={(event) =>
                submitSuccess(
                  event,
                  "Elite application submitted. We will review fit before sharing payment instructions.",
                )
              }
            />
          ) : null}
        </Modal>
      ) : null}
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 bg-paper/96 px-5 py-6 backdrop-blur sm:px-8 lg:px-12">
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
            Join
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
      className={`doodle-float absolute text-muted ${className}`}
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
      className="doodle-float absolute left-[63%] top-[18%] hidden h-16 w-16 text-coral sm:block"
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
      className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-coral"
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
      className="absolute left-[20%] top-[34%] h-10 w-24 text-ink"
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
      className="absolute bottom-0 left-0 h-[360px] w-full text-muted"
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
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[1.5rem] border-2 border-ink bg-paper p-6 shadow-ink sm:p-8">
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

function PaymentModal({
  tier,
  onPaid,
}: {
  tier: Extract<TierId, "bronze" | "platinum">;
  onPaid: () => void;
}) {
  return (
    <div>
      <p className="font-hand text-3xl font-bold text-coral">Manual payment</p>
      <h2 className="mt-2 font-hand text-5xl font-bold">{tierLabel[tier]}</h2>
      <p className="mt-4 text-lg leading-8 text-muted">
        Manual payment is a temporary founding-access flow.
      </p>
      <div className="mt-7 grid gap-5 sm:grid-cols-[0.85fr_1.15fr]">
        <div className="qr-placeholder" aria-label="QR image placeholder">
          <Image
            src={paymentConfig.qrImageUrl}
            alt="Payment QR placeholder"
            width={176}
            height={176}
            className="h-44 w-44 rounded-[1rem] border-2 border-ink bg-white object-cover"
          />
        </div>
        <div className="rounded-[1.25rem] border-2 border-ink bg-white p-5 shadow-soft">
          <p className="font-hand text-3xl font-bold text-coral">UPI details</p>
          <p className="mt-3 font-bold">UPI ID: {paymentConfig.upiId}</p>
          <p className="mt-2 font-bold">Name: {paymentConfig.upiName}</p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Placeholder QR path: {paymentConfig.qrImageUrl}
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Pay manually, save your screenshot, then continue to onboarding.
          </p>
          {/* TODO: Replace manual payment with Razorpay, Stripe, or verified payment links. */}
          <button type="button" onClick={onPaid} className="btn-primary mt-5">
            I&apos;ve paid
          </button>
        </div>
      </div>
    </div>
  );
}

function OnboardingModal({
  tier,
  successMessage,
  onSubmit,
}: {
  tier: Extract<TierId, "bronze" | "platinum">;
  successMessage: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div>
      <p className="font-hand text-3xl font-bold text-coral">Member onboarding</p>
      <h2 className="mt-2 font-hand text-5xl font-bold">{tierLabel[tier]}</h2>
      <FormShell
        fields={[
          "Name",
          "Email",
          "WhatsApp",
          "Chosen path",
          "Skill",
          "Current stage",
          "Biggest blocker",
          "Discord username",
          "Payment screenshot placeholder",
        ]}
        buttonLabel="Submit onboarding"
        onSubmit={onSubmit}
      />
      {successMessage ? <SuccessNotice message={successMessage} /> : null}
    </div>
  );
}

function EliteModal({
  successMessage,
  onSubmit,
}: {
  successMessage: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div>
      <p className="font-hand text-3xl font-bold text-coral">Elite application</p>
      <h2 className="mt-2 font-hand text-5xl font-bold">
        Apply for Ascend Circle
      </h2>
      <FormShell
        fields={[
          "Name",
          "Email",
          "WhatsApp",
          "Current project/business",
          "Goal",
          "Why they want Elite",
          "Expected support",
        ]}
        buttonLabel="Submit application"
        multiline
        onSubmit={onSubmit}
      />
      {successMessage ? <SuccessNotice message={successMessage} /> : null}
    </div>
  );
}

function FormShell({
  fields,
  buttonLabel,
  multiline,
  onSubmit,
}: {
  fields: string[];
  buttonLabel: string;
  multiline?: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      {fields.map((field) => (
        <label key={field} className="grid gap-2 text-sm font-bold text-muted">
          {field}
          {multiline || field.length > 18 ? (
            <textarea
              required
              rows={3}
              className="rounded-[1rem] border-2 border-ink bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-peach"
              placeholder={field}
            />
          ) : (
            <input
              required
              className="h-12 rounded-[1rem] border-2 border-ink bg-white px-4 outline-none transition focus:ring-4 focus:ring-peach"
              placeholder={field}
            />
          )}
        </label>
      ))}
      {/* TODO: Connect submissions to Google Sheets, Formspree, Airtable, or a backend. */}
      <button className="btn-primary mt-2">{buttonLabel}</button>
    </form>
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

function WaitlistTextarea({ label, name }: { label: string; name: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-muted">
      {label}
      <textarea
        required
        name={name}
        rows={4}
        className="form-field min-h-28 py-3"
        placeholder={label}
      />
    </label>
  );
}

function SuccessNotice({ message }: { message: string }) {
  return (
    <div className="mt-5 rounded-[1.25rem] border-2 border-ink bg-sky-soft p-4 text-sm font-bold leading-6 text-ink">
      {message}
    </div>
  );
}
