import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "รับเหมาก่อสร้างครบวงจร | ถมดิน ก่อกำแพงกันดิน เทพื้นคอนกรีต | Theeraphong Construction",
  description: " รับเหมาก่อสร้างมืออาชีพ ให้บริการถมดิน ก่อสร้างกำแพงกันดิน รั้ว เทพื้นคอนกรีต ครบวงจร ด้วยทีมช่างประสบการณ์กว่า 10 ปี มั่นใจคุณภาพและมาตรฐานงานก่อสร้าง พร้อมให้คำปรึกษาฟรี",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
