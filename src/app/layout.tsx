import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import { Navbar } from "@/components/layout/Navbar/Navbar";
import './globals.css';
import globals from './globals.module.css'; 

const poppinsRegular = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins-regular'
});
const poppinsSemiBold = Poppins({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-poppins-semibold'
});

export const metadata: Metadata = {
  title: "EcoRED",
  description: "Aplicación EcoRED",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body 
        className={`${poppinsRegular.variable} ${poppinsSemiBold.variable} ${globals.body}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}