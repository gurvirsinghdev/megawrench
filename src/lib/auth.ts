import prismaClient from "@/lib/prisma-client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: prismaAdapter(prismaClient, {
    provider: "postgresql",
  }),
  emailAndPassword: { enabled: true },
});
