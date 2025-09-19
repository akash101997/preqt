import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, origin } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;
  const isAuthenticated = Boolean(token);
  const verifyOtp = request.cookies.get("verifyOtp")?.value == "true";

  const securePaths = [
    "/",
    "/account",
    "/account/:path*",
    "/community",
    "/community/:path*",
    // "/deals",
    // "/deals/:path*",
    "/private-deals",
    "/private-deals/:path*",
    "/transaction-page",
    "/transaction-page/:path*",
    "/events",
  ];
  // Debug authentication status

  // Public paths (always accessible)
  const publicPaths = [
    "/signin",
    "/signup",
    "/forget-password",
    "/reset-password",
  ];

  if (!verifyOtp && pathname == "/otp") {
    return NextResponse.redirect(new URL("/signin", origin));
  }
  if (
    isAuthenticated &&
    (pathname === "/signin" ||
      pathname === "/signup" ||
      pathname.startsWith("/forget-password") ||
      pathname.startsWith("/reset-password"))
  ) {
    return NextResponse.redirect(new URL("/deals", origin));
  }

  if (
    isAuthenticated &&
    (pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/deals", origin));
  }


  // Rule 2: If NOT authenticated and trying to access secure paths → redirect to /signin
  const isAccessingSecurePath = securePaths.some((path) => {
    if (path.endsWith("/:path*")) {
      const base = path.replace("/:path*", "");
      return pathname.startsWith(base);
    }
    return pathname === path;
  });

  if (!isAuthenticated && isAccessingSecurePath) {
    return NextResponse.redirect(new URL("/signin", origin));
  }

  // Otherwise → allow
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/signin",
    "/signup",
    "/reset-password/:path*",
    "/forget-password",
    "/account/:path*",
    "/community/:path*",
    // "/deals/:path*",
    "/private-deals/:path*",
    "/transaction-page/:path*",
    "/events",
    "/otp"
  ],
};
