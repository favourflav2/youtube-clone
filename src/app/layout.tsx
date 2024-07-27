import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar/NavBar";
import ThemesProvider from "./providers/ThemesProvider/ThemesProvider";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// suppressHyradtionWarning ... since nextjs use SSR ... the themes set on server may be different to whats set on client .... and we would get an error if we didnt have this set up

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemesProvider>
          <NavBar />
          {children}
        </ThemesProvider>
      </body>
    </html>
  );
}
