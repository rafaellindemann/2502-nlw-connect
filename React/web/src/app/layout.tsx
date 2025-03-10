import './globals.css'
import type { Metadata } from "next";
import { Montserrat, Oxanium } from 'next/font/google';

export const metadata: Metadata = {
  title: "devstage",
  description: "Generated by create next app",
};

const oxanium = Oxanium({
  weight: ['500', '600'], // pesoslá do style guide
  subsets: ['latin'], // apenas para o português, sem pesar carregando todos os caracteres do mundo
  variable: '--font-oxanium', // nome da variável CSS para a fonte
})
const montserrat = Montserrat({
  weight: ['400', '600'], // pesoslá do style guide
  subsets: ['latin'], // apenas para o português, sem pesar carregando todos os caracteres do mundo
  variable: '--font-montserrat', // nome da variável CSS para a fonte
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className='bg-gray-900 text-gray-100 antialiased'>{children}</body>
    </html>
  );
}
