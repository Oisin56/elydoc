import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug") || "/";
  const draft = await draftMode();
  draft.disable();
  return NextResponse.redirect(new URL(slug, request.url));
}
