import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata = {
  title: "Landing Page",
  description: "Landing Page for My Company",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en" >
      <body suppressHydrationWarning={true} className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable)}>{children}</body>
    </html>
  );
}
