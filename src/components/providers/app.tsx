import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/theme";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
