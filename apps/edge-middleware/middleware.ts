import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The country to block from accessing the secret page
const BLOCKED_COUNTRY = "US";

// Trigger this middleware to run on the `/b` route
export const config = {
  matcher: "/b",
};

export function middleware(req: NextRequest) {
  // Extract country. Default to US if not found.
  const country = (req.geo && req.geo.country) || "US";

  console.log(`Visitor from ${country}`);

  // Specify the correct route based on the requests location
  if (country === BLOCKED_COUNTRY) {
    req.nextUrl.pathname = "/b";
  } else {
    req.nextUrl.pathname = `/a`;
  }

  // Rewrite to URL
  return NextResponse.rewrite(req.nextUrl);
}
