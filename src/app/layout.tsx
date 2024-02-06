import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import AppModalContextProvider from "@/Context/ModalContext";
import { ToastContainer } from "react-toastify";
import StyledComponentsRegistry from "./registry";
import StoreProvider from "@/state/StoreProvider";

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
        <StoreProvider>
          <StyledComponentsRegistry>
            <AppModalContextProvider>
              <div>{children}</div>
            </AppModalContextProvider>
          </StyledComponentsRegistry>
        </StoreProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
