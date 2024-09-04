// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  // const token = req.cookies.get("token");
  // console.log("cookies", req.cookies.get("token"));

  // if (!token) {
  //   return NextResponse.redirect(new URL("/email", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Define routes that require authentication
};
