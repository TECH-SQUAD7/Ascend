# Ascend

Ascend is a premium, Vercel-ready Next.js landing site for Ascend Founder Stream applications and a free public waitlist.

Ascend helps people turn skills, ideas, and existing businesses into revenue by choosing a path, packaging an offer, creating a 7-day revenue sprint, and moving toward practical customer action.

## Current Scope

- Light/white anime-sketch inspired landing page
- Free waitlist form connected to the shared Google Apps Script webhook
- Founder Stream tier selection for Bronze, Platinum, and Elite
- One application form for all paid tiers
- Google Apps Script webhook support for saving waitlist and application rows to separate Google Sheet tabs
- Loading, success, and error states for forms
- No on-site payment collection
- No Razorpay, Stripe, Supabase, login, dashboard, or Discord access yet
- No income, job, salary, equity, or employment guarantees

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Config Files

Form webhook config lives in:

```bash
src/config/forms.ts
```

It uses this shape:

```ts
export const formsConfig = {
  applicationsEndpoint: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
};
```

The current project points `applicationsEndpoint` to the live Google Apps Script Web App URL. The same endpoint handles both free waitlist and Founder Stream application submissions. The payload includes `formType` so Google Apps Script can route rows to the correct tab.

Tier prices live in:

```bash
src/config/payments.ts
```

Social/contact placeholders live in:

```bash
src/config/links.ts
```

## Free Waitlist Flow

The free waitlist is separate from Founder Stream.

- Free Waitlist: anyone can join for early updates, product access, and Income Path Finder updates.
- Founder Stream: paid founding membership application flow for Bronze, Platinum, and Elite.

The free waitlist form posts JSON to `formsConfig.applicationsEndpoint` with:

```ts
{
  formType: "waitlist",
  timestamp,
  fullName,
  email,
  selectedPathInterest,
  source: "ascend-landing",
  pageUrl
}
```

The Apps Script should append those rows to a `Waitlist` tab with these columns:

```text
Timestamp, Full Name, Email, Selected Path/Interest, Source, Page URL
```

If the endpoint is empty or still set to `REPLACE_WITH_GOOGLE_APPS_SCRIPT_WEB_APP_URL`, the site falls back to local success mode.

## Application Flow

1. User chooses Bronze, Platinum, or Elite.
2. User fills the application form.
3. The site posts JSON to `formsConfig.applicationsEndpoint`.
4. The payload includes `formType: "application"` so Apps Script can save it to the `Applications` tab.
5. If the endpoint is still the placeholder, the site falls back to local success mode.

Bronze and Platinum success:

```text
Application received. Payment details will be sent shortly.
```

Elite success:

```text
Elite application received. Selected applicants will receive next steps.
```

No payment is collected on-site.

The application payload includes:

- formType: `application`
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

The Apps Script should append application rows to an `Applications` tab with these columns:

```text
Timestamp, Full Name, Email, WhatsApp, Selected Tier, User Type, Goal Type, Skills, Current Stage, Biggest Challenge, Revenue Goal, Country, Notes, Source, Page URL
```

## Google Sheets Setup

1. Create a Google Sheet named `Ascend Applications`.
2. Add two tabs:

```text
Waitlist
Applications
```

3. Add these columns to the `Waitlist` tab:

```text
Timestamp, Full Name, Email, Selected Path/Interest, Source, Page URL
```

4. Add these columns to the `Applications` tab:

```text
Timestamp, Full Name, Email, WhatsApp, Selected Tier, User Type, Goal Type, Skills, Current Stage, Biggest Challenge, Revenue Goal, Country, Notes, Source, Page URL
```

5. In the Sheet, open `Extensions > Apps Script`.
6. Create a Google Apps Script webhook that accepts POST JSON.
7. In Apps Script, route `formType === "waitlist"` to the `Waitlist` tab and `formType === "application"` to the `Applications` tab.
8. Deploy the script as a Web App.
9. Copy the Web App URL.
10. Paste it into `src/config/forms.ts`.

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
4. Confirm `applicationsEndpoint` in `src/config/forms.ts` points to the deployed Apps Script Web App URL.
5. Replace public links in `src/config/links.ts`.
6. Set the production domain to `ascend.crevu.in`.
7. Deploy.
