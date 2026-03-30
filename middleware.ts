import { NextResponse, type NextRequest } from "next/server";

const protectedPaths = ["/dashboard", "/api/upload", "/api/files", "/api/analyze", "/api/results", "/api/reports", "/api/auth/me"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("enerlytics_token")?.value;

  const needsAuth = protectedPaths.some((prefix) => pathname.startsWith(prefix));
  if (!needsAuth) return NextResponse.next();

  if (!token) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const url = new URL("/login", request.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"]
};
