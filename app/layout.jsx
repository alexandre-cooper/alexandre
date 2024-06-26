import { Inter } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({subsets:['latin']});

export const metadata = {
  title: "Alexandre Brasil",
  description: "Desenolvedor Web and Mobile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
        attribute="class" defaultTheme="light"
        >
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>     
    </html>
  );
}
