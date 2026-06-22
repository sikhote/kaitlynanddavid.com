import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { sans, cursive } from "@/lib/fonts";
import "@mantine/core/styles.css";
import Provider from "@/components/Provider";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

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
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body className="min-h-full flex flex-col items-center py-10">
        <Provider>
          <div className="pb-10 font-cursive text-4xl ">Kaitlyn + David</div>
          <Nav />
          <main className="pt-10 max-w-4xl">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
