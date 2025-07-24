import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { Pre_footer } from "./_components/pre_footer"
import { NossaHistoria } from "./_components/nossa_historia";
import { Intro_pag_sobre } from "./_components/intro_pag_sobre";
import { Generico_card_sobre } from "./_components/generico_card_sobre";


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
        

        <TRPCReactProvider>{children}</TRPCReactProvider>


        <NossaHistoria/>

        <Footer/>

      </body>
    </html>
  );
}
