import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { auth } from "@/features/auth";

export async function getUser() {
  const getSessionResult = await auth.api.getSession({
    headers: await headers(),
  });

  if (!getSessionResult) {
    redirect("/auth/sign-in");
  }

  return getSessionResult.user;
}
