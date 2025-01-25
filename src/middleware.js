import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/login" ||
    path === "/signup" ||
    path === "/verifyemail" ||
    path === "/resetPass" ||
    path === "/";
  const adminPath = path.slice(0, 6) === "/admin";
  const token = request.cookies.get("token")?.value || "";
  // Admin Role Protected Route
  if (token && adminPath) {
    function getJwtSecretKey() {
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error("JWT Secret key is not matched");
      }
      return new TextEncoder().encode(secret);
    }
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    if (!payload.isAdmin) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
  if (isPublicPath && token && path !== "/") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile",
    "/logout",
    "/admin",
    "/",
    "/login",
    "/signup",
    "/verifyemail",
    "/resetPass/:path",
  ],
};
