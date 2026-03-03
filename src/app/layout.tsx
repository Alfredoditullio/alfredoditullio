import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio - Alfredo Di Tullio",
  description: "Portafolio web profesional de Alfredo Di Tullio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* FontAwesome */}
        <link rel="stylesheet" href="/assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css" />
        {/* Poppins Font */}
        <link rel="stylesheet" href="/assets/fonts/poppins/poppins.css" />
        {/* Original Styles */}
        <link rel="stylesheet" href="/assets/css/normalize.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <div className="layout">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
