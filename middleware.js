import { NextResponse } from "next/server";

export function middleware(request){
    const isAuth = request.cookies.get("devboard_auth")?.value === "true";
    const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

    if(isDashboard && !isAuth){
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
}