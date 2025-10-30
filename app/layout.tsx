import type { Metadata } from "next";
import { Henny_Penny, LXGW_WenKai_Mono_TC } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./redux/ReduxProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const mainFont = LXGW_WenKai_Mono_TC({
  variable: "--font-main",
  weight: "400",
  subsets: ["cyrillic"],
});

const titleFont = Henny_Penny({
  variable: "--font-title",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Products page",
  description: "Products page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.variable} ${titleFont.variable} antialiased min-h-screen flex flex-col`}
      >
        <ReduxProvider>
          <Header />
          <main className="flex-1 w-full flex justify-evenly flex-wrap p-3">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
