import type { Metadata } from "next";
import "./globals.css";
import MantineProviders from "./components/MantineProviders";
import SessionProvider from "./components/SessionProvider";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js application with Prisma and NextAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <MantineProviders>
          <SessionProvider>{children}</SessionProvider>
        </MantineProviders>
      </body>
    </html>
  );
}
