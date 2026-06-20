# Ascend

Ascend is a premium, Vercel-ready Next.js landing site for founding access to the Ascend Founder Stream membership.

Ascend helps people turn skills, ideas, and existing businesses into revenue by choosing a path, packaging an offer, creating a 7-day revenue sprint, and moving toward practical customer action.

## Current Scope

- Light/white anime-sketch inspired landing page
- Free waitlist form with local success state
- Founder Stream membership tiers
- Manual payment modal for Bronze and Platinum
- Elite application modal before payment
- Member onboarding modal after manual payment
- Success-state-only submissions
- Placeholder config for future links and payments
- Placeholder config for future form integrations
- No backend database
- No real payment gateway
- No income, job, salary, equity, or employment guarantees

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Config Files

Payment placeholders live in:

```bash
src/config/payments.ts
```

Social/contact/future form and payment links live in:

```bash
src/config/links.ts
```

Free waitlist integration placeholders live in:

```bash
src/config/forms.ts
```

Replace all `REPLACE_ME` values before launch.

## Free Waitlist

The free waitlist is separate from Founder Stream.

- Free Waitlist: anyone can join for early updates, product access, and Income Path Finder updates.
- Founder Stream: paid founding membership with extra resources, Discord access, and support.

Right now, the free waitlist form uses `mode: "local-success"` from `src/config/forms.ts`. Submitting the form only shows a polished success state in the browser. It does not send data anywhere yet.

## Connecting Formspree Later

1. Create a Formspree form.
2. Copy the endpoint URL.
3. Replace `formspreeEndpoint` in `src/config/forms.ts`.
4. Update the `submitWaitlist` handler in `src/components/ascend-landing.tsx` to `fetch(formsConfig.formspreeEndpoint, ...)`.
5. Keep the current success message after Formspree returns a successful response.

Google Sheets or Supabase can be connected later through the TODO comments in the same submit handler.

## Founder Stream Payments

Founder Stream payment still works manually:

- Bronze and Platinum buttons open a manual payment modal.
- The modal shows placeholder UPI/QR instructions from `src/config/payments.ts`.
- The “I've paid” button opens the member onboarding modal.
- Elite still opens an application form first, before payment.

No real payment gateway is connected yet.

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
4. Replace placeholders in `src/config/payments.ts` and `src/config/links.ts`.
5. Set the production domain to `ascend.crevu.in`.
6. Deploy.

## Future Integration TODOs

- Connect Bronze/Platinum payment flow to Razorpay, Stripe, or verified payment links.
- Connect free waitlist submissions to Formspree, Google Sheets, or Supabase.
- Connect onboarding submissions to Google Sheets, Formspree, Airtable, or a database.
- Connect Elite applications to Google Sheets, Formspree, Airtable, or a CRM.
- Replace the QR placeholder image at `public/payment-qr-placeholder.png`.
- Replace placeholder Discord/social/contact links.
