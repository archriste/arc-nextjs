import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Alain Christe | Developer",
  description: `Powered by Next.js`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`overscroll-none ${inter.variable}`}>
      <body className="overscroll-y-none">{children}</body>
    </html>
  );
}
