import { NextResponse } from "next/server";
import { formsConfig } from "@/src/config/forms";

type FormPayload = {
  formType?: string;
};

export async function POST(request: Request) {
  let payload: FormPayload;

  try {
    payload = (await request.json()) as FormPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  if (payload.formType !== "waitlist" && payload.formType !== "application") {
    return NextResponse.json(
      { success: false, error: "Invalid form type." },
      { status: 400 },
    );
  }

  const endpoint = formsConfig.applicationsEndpoint?.trim();

  if (!endpoint || endpoint === "REPLACE_WITH_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
    // TODO: Paste the deployed Google Apps Script Web App URL into src/config/forms.ts.
    return NextResponse.json({ success: true, localSuccess: true });
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
      error?: string;
    } | null;

    if (!response.ok || result?.success === false) {
      return NextResponse.json(
        {
          success: false,
          error: result?.error ?? "Google Apps Script webhook failed.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not reach Google Apps Script webhook." },
      { status: 502 },
    );
  }
}
