"use client";

import type { ReactNode } from "react";
import type { Route } from "next";

import { AuthUIProvider as BetterAuthUIProvider } from "@daveyplate/better-auth-ui";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { authClient } from "@/features/auth/client";

export function AuthUIProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <BetterAuthUIProvider
      onSessionChange={() => {
        // Clear router cache (protected routes)
        router.refresh();
      }}
      replace={(href) => router.replace(href as Route)}
      navigate={(href) => router.push(href as Route)}
      authClient={authClient}
      Link={Link}
    >
      {children}
    </BetterAuthUIProvider>
  );
}
