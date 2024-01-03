import { ClerkProvider, SignedIn, SignIn, SignedOut } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickMove",
  description: "Book Your Cars with Ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <SignedIn>
            <Navbar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
