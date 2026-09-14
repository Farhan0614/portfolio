"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// The provider MUST render on the server: next-themes ships an inline
// <script> that sets the theme class before first paint. A "mounted"
// guard here (returning children early) would defer the provider to a
// client-only render, and React never executes scripts it inserts on
// the client — that's what caused the "script tag" console error.
// Hydration safety is already handled by suppressHydrationWarning
// on <html> in app/layout.js.
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
