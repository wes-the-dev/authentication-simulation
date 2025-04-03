import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Authenticator",
  description: "Simulating a Sign in and Sign Out experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className=''>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
