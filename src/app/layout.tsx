import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import AppModalContextProvider from "@/Context/ModalContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "Wow Todo",
  description: "Make a Wow Todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AppModalContextProvider>{children}</AppModalContextProvider>
        </StyledComponentsRegistry>
        <ToastContainer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
