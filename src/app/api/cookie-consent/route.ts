import { NextResponse } from "next/server";

type ConsentValue = "accepted" | "rejected";

interface CookieConsentBody {
  value?: ConsentValue;
}

export async function POST(request: Request) {
  const response = NextResponse.json({ success: true });

  let value: ConsentValue = "accepted";
  try {
    const body = (await request.json()) as CookieConsentBody;
    if (body.value === "accepted" || body.value === "rejected") value = body.value;
  } catch {
    // no body; default to accepted for backwards compatibility
  }

  response.cookies.set("bestply-cookie-consent", value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

