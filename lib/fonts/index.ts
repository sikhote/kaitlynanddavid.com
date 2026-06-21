import { Jost } from "next/font/google";
import localFont from "next/font/local";

export const cursive = localFont({
  variable: "--font-andrea-bellarosa",
  src: "./AndreaBellarosa.ttf",
});

export const sans = Jost({
  variable: "--font-jost",
});
