import type { ReactNode } from "react";

import { AuthUIProvider } from "@/components/providers/auth-ui";
import { ThemeProvider } from "@/components/providers/theme";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
      enableSystem
    >
      <AuthUIProvider>{children}</AuthUIProvider>
    </ThemeProvider>
  );
}
