import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Guía de Relaciones | Tu Compañero Emocional",
  description: "Encuentra orientación y apoyo para tu relación a través de nuestro asistente AI empático y comprensivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
      </head>
      <body className={`${poppins.className} min-h-screen bg-white text-gray-900 antialiased`}>
        <main className={lora.className}>
          {children}
        </main>
      </body>
    </html>
  );
}
