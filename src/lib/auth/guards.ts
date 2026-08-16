import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const requireAuth = async function () {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/signin");
  return session;
};

export const requireUnauth = async function () {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect("/");
};
