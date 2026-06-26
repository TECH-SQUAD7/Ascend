import {
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Clock3,
  FileText,
  Folder,
  GitBranch,
  Globe2,
  Image,
  Layers,
  Lightbulb,
  Link2,
  Sparkles,
  Tags,
  TrendingUp,
  UploadCloud,
  WandSparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconItem = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

export const featureItems: IconItem[] = [
  {
    icon: UploadCloud,
    title: "Upload Evidence",
    copy: "Drop notes, screenshots, PDFs, links, and project files into one calm evidence library.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    copy: "Mock analysis turns raw work into summaries, achievements, skills, and quality signals.",
  },
  {
    icon: Tags,
    title: "Skills Extraction",
    copy: "Surface real capabilities with confidence levels and connected proof.",
  },
  {
    icon: GitBranch,
    title: "Proof Timeline",
    copy: "Organize projects, decisions, outcomes, and artifacts into a clean work history.",
  },
  {
    icon: TrendingUp,
    title: "Growth Graph",
    copy: "Track progress across consistency, evidence quality, and impact areas.",
  },
  {
    icon: Globe2,
    title: "Public Proof Page",
    copy: "Generate a polished public profile that shows proof instead of claims.",
  },
];

export const workSteps = [
  "Upload",
  "Analyze",
  "Organize",
  "Showcase",
] as const;

export const dashboardStats = [
  {
    icon: BadgeCheck,
    label: "Proof Score",
    value: "78/100",
    detail: "+9 this month",
    tone: "coral",
  },
  {
    icon: Tags,
    label: "Skills Detected",
    value: "7",
    detail: "3 high confidence",
    tone: "blue",
  },
  {
    icon: Sparkles,
    label: "Key Achievements",
    value: "6",
    detail: "2 ready to publish",
    tone: "lavender",
  },
  {
    icon: Layers,
    label: "Impact Areas",
    value: "4",
    detail: "Product, UX, AI, content",
    tone: "mint",
  },
] as const;

export const uploadTypes = [
  {
    icon: FileText,
    title: "Notes",
    copy: "Meeting notes, reflections, research logs.",
  },
  {
    icon: Image,
    title: "Screenshots",
    copy: "Interfaces, metrics, before and afters.",
  },
  {
    icon: FileText,
    title: "PDFs",
    copy: "Reports, briefs, case studies, proposals.",
  },
  {
    icon: Folder,
    title: "Project Files",
    copy: "Designs, docs, code folders, exports.",
  },
  {
    icon: Link2,
    title: "Links",
    copy: "Live pages, repos, demos, public posts.",
  },
] as const;

export const recentUploads = [
  {
    name: "Ascend landing page build",
    type: "Project Files",
    date: "Today",
    status: "Completed",
  },
  {
    name: "User research synthesis",
    type: "PDF",
    date: "Yesterday",
    status: "Analyzing",
  },
  {
    name: "Onboarding before-after",
    type: "Screenshots",
    date: "Jun 22",
    status: "Uploaded",
  },
  {
    name: "Content strategy notes",
    type: "Notes",
    date: "Jun 20",
    status: "Completed",
  },
] as const;

export const analysisSummary = [
  {
    icon: WandSparkles,
    title: "Demo analysis",
    value: "Evidence quality: High",
    copy: "The uploaded work shows strong product thinking, execution, and clear iteration loops.",
  },
  {
    icon: BadgeCheck,
    title: "Achievements",
    value: "6 detected",
    copy: "Three achievements are ready for public proof after a final wording review.",
  },
  {
    icon: Tags,
    title: "Skills",
    value: "7 detected",
    copy: "The strongest signals are product design, AI workflow design, and landing page strategy.",
  },
] as const;

export const extractedAchievements = [
  "Redesigned onboarding into a clearer first-session flow.",
  "Translated founder goals into product requirements and launch copy.",
  "Built a conversion-focused landing page with polished responsive UI.",
  "Organized research insights into a reusable content strategy document.",
] as const;

export const aiReasoning = [
  "Evidence includes both process artifacts and finished output.",
  "Skill signals repeat across research, product framing, and UI implementation.",
  "Impact is visible, but stronger metric snapshots would raise confidence.",
  "Recommended next proof: publish a concise case study for Ascend.",
] as const;

export const skills = [
  {
    name: "Product Strategy",
    confidence: 92,
    tone: "blue",
    evidence: "Feature prioritization, user flow decisions, product positioning.",
  },
  {
    name: "AI Workflow Design",
    confidence: 88,
    tone: "lavender",
    evidence: "Prompted analysis states, proof extraction flows, mock reasoning.",
  },
  {
    name: "Frontend UI",
    confidence: 84,
    tone: "mint",
    evidence: "Responsive dashboard screens and polished interaction states.",
  },
  {
    name: "Content Strategy",
    confidence: 79,
    tone: "coral",
    evidence: "Landing page copy, proof summaries, public profile structure.",
  },
  {
    name: "User Research",
    confidence: 74,
    tone: "blue",
    evidence: "Interview synthesis and onboarding insight documents.",
  },
  {
    name: "No-Code Systems",
    confidence: 69,
    tone: "lavender",
    evidence: "Workflow mapping and tool handoff documentation.",
  },
  {
    name: "Founder Storytelling",
    confidence: 66,
    tone: "mint",
    evidence: "Proof page narrative and achievement framing.",
  },
] as const;

export const timelineItems = [
  {
    title: "Redesigned onboarding flow",
    date: "Jun 24",
    type: "Product",
    copy: "Converted a scattered first-user experience into a guided flow with clearer next actions.",
    tags: ["UX", "Product", "Execution"],
  },
  {
    title: "User research & insights",
    date: "Jun 21",
    type: "Research",
    copy: "Synthesized founder interviews into blockers, motivation patterns, and product opportunities.",
    tags: ["Research", "Synthesis"],
  },
  {
    title: "Content strategy document",
    date: "Jun 18",
    type: "Strategy",
    copy: "Built a reusable messaging map for landing pages, proof cards, and onboarding copy.",
    tags: ["Content", "Positioning"],
  },
  {
    title: "Ascend landing page built",
    date: "Jun 14",
    type: "Build",
    copy: "Created a premium responsive landing page with soft sketchbook-inspired visual direction.",
    tags: ["Frontend", "Design"],
  },
] as const;

export const growthData = [
  { month: "Jan", score: 42 },
  { month: "Feb", score: 49 },
  { month: "Mar", score: 58 },
  { month: "Apr", score: 63 },
  { month: "May", score: 71 },
  { month: "Jun", score: 78 },
] as const;

export const recommendations = [
  {
    icon: Lightbulb,
    title: "Add before-after screenshots",
    copy: "Visual comparisons will make your onboarding proof easier to trust.",
  },
  {
    icon: BarChart3,
    title: "Attach one metric snapshot",
    copy: "A small conversion, activation, or usage signal can raise proof quality.",
  },
  {
    icon: Zap,
    title: "Publish one case study",
    copy: "Turn the Ascend build into a public proof card this week.",
  },
] as const;

export const publicStats = [
  { label: "Proofs", value: "12" },
  { label: "Skills", value: "7" },
  { label: "Impact Areas", value: "4" },
] as const;

export const publicSkills = [
  "AI Product Strategy",
  "Frontend UI",
  "Founder Storytelling",
  "Workflow Design",
  "User Research",
  "Content Systems",
] as const;

export const proofPageSections = [
  {
    icon: Bot,
    title: "Ascend - AI for Freelancers",
    copy: "A focused product experience for freelancers who need proof, offers, leads, and calm execution systems.",
  },
  {
    icon: Clock3,
    title: "Timeline proof",
    copy: "Evidence spans research, content strategy, UI implementation, and launch preparation.",
  },
  {
    icon: TrendingUp,
    title: "Growth signal",
    copy: "Proof score moved from 42 to 78 across six months of consistent project work.",
  },
] as const;
