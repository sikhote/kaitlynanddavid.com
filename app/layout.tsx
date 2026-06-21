import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { sans, cursive } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Kaitlyn & David",
  description: "The wedding website for Kaitlyn Holt & David Sinclair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${cursive.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center py-10">
        <div className="pb-10 font-cursive text-4xl ">Kaitlyn + David</div>
        <Nav />
        <main className="pt-10 max-w-4xl">{children}</main>
      </body>
    </html>
  );
}
