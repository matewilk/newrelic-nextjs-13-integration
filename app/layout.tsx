import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import newrelic from "newrelic";
import Script from "next/script";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Relic + Next.js Integration",
  description: "New Relic + Next.js Integration - by @matewilk",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-ignore
  if (!newrelic.agent.collector.isConnected()) {
    await new Promise((resolve) => {
      // @ts-ignore
      newrelic.agent.on("connected", resolve);
    });
  }

  const browserTimingHeader: string = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
    // @ts-ignore
    allowTransactionlessInjection: true,
  });

  return (
    <html lang="en">
      <Script
        id="newrelic-browser-agent-loader"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: browserTimingHeader,
        }}
      />
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
