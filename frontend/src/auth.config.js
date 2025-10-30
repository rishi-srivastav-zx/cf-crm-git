import { NextResponse } from "next/server";

export const authConfig = {
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            console.log("Authorized callback triggered");

            // If not logged in
            if (!auth || !auth.user) {
                console.log("No auth session found — allowing public routes");
                return true;
            }

            const email = auth.user.email;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            const isOnGrdDashboard =
                nextUrl.pathname.startsWith("/grd-dashboard");

            // Redirect based on user
            if (email === "exe@example.com" && !isOnDashboard) {
                return NextResponse.redirect(new URL("/dashboard", nextUrl));
            }

            if (email === "exe@example2.com" && !isOnGrdDashboard) {
                return NextResponse.redirect(
                    new URL("/grd-dashboard", nextUrl)
                );
            }

            return true;
        },
    },
    providers: [],
};
