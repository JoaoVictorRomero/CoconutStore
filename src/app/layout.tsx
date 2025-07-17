import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { Pre_footer } from "./_components/pre_footer"


export const metadata: Metadata = {
  title: "CoconutStore",
  description: "Lojas de cocos oficiais",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
  icons: [{ rel: "icon", url: "/logo.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Navbar/>

        <TRPCReactProvider>{children}</TRPCReactProvider>

        <Pre_footer
        tipo = "Nossa Equipe"
        />

        <Pre_footer
        tipo = "Entre em Contato"
        />

        <Pre_footer
        tipo = "Por que Escolher a CoconutStore?"
        />

        <Footer/>

      </body>
    </html>
  );
}
