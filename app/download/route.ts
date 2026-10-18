import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/api";

/** mycove.ng/download is the human-friendly URL people are told to visit; it
 * just drops them on the homepage's download section. */
export async function GET() {
  return NextResponse.redirect(`${SITE_URL}/#download`, { status: 302 });
}
