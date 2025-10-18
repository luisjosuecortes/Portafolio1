import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Pagina Personal de Luis Cortes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
