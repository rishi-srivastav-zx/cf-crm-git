"use server";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, signIn, signOut } = NextAuth({
    trustHost: true,
    providers: [
        Credentials({
            async authorize(credentials) {
                const { username, password } = credentials;

                // Basic validation
                if (!username || !password) {
                    throw new Error("Email and password are required.");
                }

                // Mock users (for demo)
                const users = [
                    {
                        id: 1,
                        name: "Rishi",
                        email: "exe@example.com",
                        password: "123456",
                        role: "dashboard",
                    },
                    {
                        id: 2,
                        name: "Grd User",
                        email: "exe@example2.com",
                        password: "123456",
                        role: "grd-dashboard",
                    },
                ];

                const user = users.find(
                    (u) => u.email === username && u.password === password
                );

                if (!user) {
                    throw new Error("User not found or invalid credentials");
                }

                // Return user object to session
                return user;
            },
        }),
    ],
});
