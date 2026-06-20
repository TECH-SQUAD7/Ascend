import { paymentConfig } from "./payments";

export const ascendPaths = [
  {
    title: "Start a Business",
    goal: "launch a small first version.",
    description:
      "Pick a real direction, define a tiny offer, and ship a starting point you can talk about.",
  },
  {
    title: "Become a Freelancer",
    goal: "land your first paying client.",
    description:
      "Package one clear service, set a price, and start outreach with scripts that don't feel weird.",
  },
  {
    title: "Become a Creator",
    goal: "build an audience and monetize.",
    description:
      "Choose a content lane, plan a posting rhythm, and design products your audience will actually buy.",
  },
  {
    title: "Launch an Agency",
    goal: "land a retainer.",
    description:
      "Define your niche, productize the service, and run a focused 30-day pipeline plan.",
  },
  {
    title: "Grow an Existing Business",
    goal: "unstick revenue.",
    description:
      "Audit what's working, find the next leverage point, and execute the change that actually moves the line.",
  },
  {
    title: "Create an Income Stream",
    goal: "a second source of income.",
    description:
      "Match a small income idea to your time and skill — and ship it without quitting anything.",
  },
];

export const membershipTiers = [
  {
    id: "bronze",
    name: "Bronze",
    stream: "Founder Stream",
    price: `$${paymentConfig.bronzePriceUSD}`,
    seats: "40 seats",
    duration: "60 days",
    access: "Application first; payment details after submission",
    note: "Best for getting your first clear revenue direction.",
    cta: "Apply for Bronze",
    featured: false,
    benefits: [
      "Revenue Path Finder assessment",
      "Recommended income path",
      "7-Day Revenue Sprint",
      "Starter toolkit: offer template, pricing guide, outreach scripts, first-client checklist",
      "Private product updates",
      "Vote on Ascend features",
      "Priority access to Ascend MVP",
      "60-day founder pricing lock",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    stream: "Builder Stream",
    price: `$${paymentConfig.platinumPriceUSD}`,
    seats: "15 seats",
    duration: "90 days",
    access: "Application first; payment details after submission",
    note: "Best for people who want more personal direction and feedback.",
    cta: "Apply for Platinum",
    featured: true,
    benefits: [
      "Everything in Bronze",
      "Personalized Revenue Opportunity Brief",
      "Recommended niche, offer positioning, starter pricing, ideal customer profile",
      "Personalized 30-day revenue roadmap",
      "One detailed feedback review on offer, portfolio, landing page, or outreach",
      "Priority application review",
      "One live group Builder Session each month for 3 months",
      "Early access to every Ascend beta feature",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    stream: "Ascend Circle",
    price: `$${paymentConfig.elitePriceUSD}`,
    seats: "5 seats",
    duration: "1 year",
    access: "Application reviewed before payment",
    note: "Best for deeper support across a full year of building.",
    cta: "Apply for Elite",
    featured: false,
    benefits: [
      "Everything in Platinum",
      "Deep business / income audit",
      "Custom 90-day growth and revenue plan",
      "Four 1:1 founder calls across the year (one per quarter, 45 min)",
      "Priority feedback within 24 business hours",
      "Two additional deep reviews across the year",
      "Early access to private Ascend experiments",
      "Eligibility for selected collaboration opportunities (based on contribution and fit)",
    ],
  },
] as const;

export const faqs = [
  {
    question: "What is Ascend?",
    answer:
      "Ascend is an AI business companion that helps you choose a revenue path, package what you can offer, and take real next steps toward income — whether that's first clients, customers, retainers, a monetized audience, or growing what you already have.",
  },
  {
    question: "Is Ascend a finished app?",
    answer:
      "No. Ascend is currently in founding access. Members receive resources, structured guidance, private updates, and early access as the MVP develops.",
  },
  {
    question: "What do Founder Stream members get?",
    answer:
      "Members receive path-finding resources, revenue sprint materials, founder updates, priority review based on tier, and early product access.",
  },
  {
    question: "Does Ascend guarantee revenue?",
    answer:
      "No. Ascend does not guarantee income, clients, jobs, employment, salary, equity, or business results. It provides direction, tools, and support.",
  },
  {
    question: "How do payments work right now?",
    answer:
      "No payment is collected on-site. Choose a tier, submit the application form, and payment link/details are sent by email or WhatsApp.",
  },
  {
    question: "How does Elite approval work?",
    answer:
      "Elite applications are reviewed before payment. If approved, payment link/details are sent after review.",
  },
  {
    question: "When does the MVP launch?",
    answer:
      "The MVP is being shaped with applicants and founding members. Early users get private updates and priority access as features become ready.",
  },
];
