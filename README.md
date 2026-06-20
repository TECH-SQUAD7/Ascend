# Ascend

Ascend is a premium, Vercel-ready Next.js landing site for Ascend Founder Stream applications and a free public waitlist.

Ascend helps people turn skills, ideas, and existing businesses into revenue by choosing a path, packaging an offer, creating a 7-day revenue sprint, and moving toward practical customer action.

## Current Scope

- Light/white anime-sketch inspired landing page
- Free waitlist form with local success state
- Founder Stream tier selection for Bronze, Platinum, and Elite
- One application form for all paid tiers
- Google Apps Script webhook support for saving applications to Google Sheets
- Loading, success, and error states for applications
- No on-site payment collection
- No Razorpay, Stripe, Supabase, login, dashboard, or Discord access yet
- No income, job, salary, equity, or employment guarantees

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Config Files

Application webhook config lives in:

```bash
src/config/forms.ts
```

It currently contains:

```ts
export const formsConfig = {
  applicationsEndpoint: "REPLACE_WITH_GOOGLE_APPS_SCRIPT_WEB_APP_URL",
};
```

Tier prices live in:

```bash
src/config/payments.ts
```

Social/contact placeholders live in:

```bash
src/config/links.ts
```

## Application Flow

1. User chooses Bronze, Platinum, or Elite.
2. User fills the application form.
3. The site posts JSON to `formsConfig.applicationsEndpoint`.
4. If the endpoint is still the placeholder, the site falls back to local success mode.
5. Success message shown:

```text
Application received. We’ve sent you the payment link/details. Please check your email or WhatsApp.
```

Bronze and Platinum show:

```text
Payment link/details will be sent shortly.
```

Elite shows:

```text
Elite applications are reviewed before payment.
```

No payment is collected on-site.

## Google Sheets Setup

1. Create a Google Sheet named `Ascend Applications`.
2. Add these columns:

```text
Timestamp, Full Name, Email, WhatsApp, Selected Tier, User Type, Goal Type, Skills, Current Stage, Biggest Challenge, Revenue Goal, Country, Notes, Source, Page URL
```

3. In the Sheet, open `Extensions > Apps Script`.
4. Create a Google Apps Script webhook that accepts POST JSON and appends a row to the sheet.
5. Deploy the script as a Web App.
6. Copy the Web App URL.
7. Paste it into:

```bash
src/config/forms.ts
```

Example:

```ts
export const formsConfig = {
  applicationsEndpoint: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
};
```

The application payload includes:

- timestamp
- fullName
- email
- whatsapp
- selectedTier
- userType
- goalType
- skills
- currentStage
- biggestChallenge
- revenueGoal
- country
- notes
- source: `ascend-landing`
- pageUrl

## Free Waitlist

The free waitlist is separate from Founder Stream.

- Free Waitlist: anyone can join for early updates, product access, and Income Path Finder updates.
- Founder Stream: paid founding membership application flow for Bronze, Platinum, and Elite.

Right now, the free waitlist form shows a local success state only. It does not send data anywhere yet.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Quality Checks

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

## Vercel Deployment

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. No environment variables are required for the current frontend-only build.
4. Replace `applicationsEndpoint` in `src/config/forms.ts`.
5. Replace public links in `src/config/links.ts`.
6. Set the production domain to `ascend.crevu.in`.
7. Deploy.
