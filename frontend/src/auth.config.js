import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export const authConfig = {
    pages: {
        signIn: "/signin",
        dashboard: "/dashboard",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            console.log("Called authorized method of auth config");
            console.log("Logging auth data: ", auth);
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            console.log('Dashboard Page',isOnDashboard)
            // If user is trying to access dashboard
            if (isOnDashboard) {
                return isLoggedIn; // Allow if logged in, redirect to signin if not
            } else if(isLoggedIn) {
                console.log('Redirecting to Dashboard')
                return Response.redirect('http://localhost:3000/dashboard')
            }

            // If user is logged in and trying to access other pages (like signin)
            if (
                isLoggedIn &&
                (nextUrl.pathname === "/" || nextUrl.pathname === "/signin")
            ) {
                return NextResponse.rewrite(new URL("/dashboard", nextUrl));
            }

            return true; // Allow access to other pages
        },
    },
    providers: [], // Add providers with an empty array for now
};