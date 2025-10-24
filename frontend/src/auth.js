"use server";

import { z } from "zod";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

async function getUser(email) {
    try {
        // const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
        return user[0];
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw new Error("Failed to fetch user.");
    }
}

export const { auth, signIn, signOut } = NextAuth({
    trustHost: true,
    providers: [
        Credentials({
            async authorize(credentials) {
                // const validator = z
                //   .object({
                //     username: z.string().email(),
                //     password: z.string().min(6),
                //   })
                //   .safeParse(credentials);

                // if (validator.success) {
                // const { username, password } = validator.data;
                // if (username === "exe@example.com" && password === "123456") {
                return {
                    id: 1,
                    name: "Rishi",
                    email: "exe@example.com",
                };
                // }
                // }
                // return null;
            },
        }),
    ],
});
