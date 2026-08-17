import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/Layout';
import { cursive, sans, sans2 } from '@/lib/fonts';
import '@mantine/core/styles.css';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import Provider from '@/components/Provider';

export const metadata: Metadata = {
  title: 'Kaitlyn & David',
  description: 'The wedding website for Kaitlyn Holt & David Sinclair.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${sans2.variable} ${cursive.variable} h-full antialiased`}
      {...mantineHtmlProps}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <ColorSchemeScript />
      </head>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
