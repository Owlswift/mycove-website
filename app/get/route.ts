import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL, SITE_URL } from "@/lib/api";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.zsolutionsit.mycove&hl=en";
export const APP_STORE_URL = "https://apps.apple.com/us/app/mycove/id6807980590";

/** nginx sets X-Real-IP to the actual visitor (see mycove-deploy's nginx config) — this is a different request than the server-to-server one we're about to make to mycove-api, so that request's own X-Real-IP would otherwise just be this website container's address. */
function getVisitorIp(request: NextRequest): string | undefined {
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim();
}

/**
 * A QR code can't tell which store page to open by itself — it just
 * encodes a URL. This route is that URL: the printed/displayed QR code
 * always points here, and this reads the scanning device's user agent to
 * send an iPhone to the App Store and everything else (Android, by far
 * the common case for a Nigerian estate) to Play. A desktop browser
 * hitting this directly (no store to redirect to) lands on the
 * homepage's download section instead of a dead end.
 *
 * Every hit is recorded (platform, user agent, the visitor's real IP) via
 * a fire-and-forget POST to mycove-api — not awaited, so a slow or down
 * analytics endpoint never adds latency to the redirect the visitor is
 * actually waiting on, and never turns a scan into a dead end either.
 */
export async function GET(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";
  const ip = getVisitorIp(request);

  const platform = /iphone|ipad|ipod/i.test(ua) ? "IOS" : /android/i.test(ua) ? "ANDROID" : "OTHER";

  void fetch(`${API_BASE_URL}/platform/qr-scans`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ platform, userAgent: ua, ip }),
  }).catch(() => {});

  if (platform === "IOS") {
    return NextResponse.redirect(APP_STORE_URL, { status: 302 });
  }
  if (platform === "ANDROID") {
    return NextResponse.redirect(PLAY_STORE_URL, { status: 302 });
  }

  return NextResponse.redirect(`${SITE_URL}/#download`, { status: 302 });
}
