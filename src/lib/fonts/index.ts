import { Cormorant } from 'next/font/google';
import localFont from 'next/font/local';

export const cursive = localFont({
  variable: '--font-floral-hearts',
  src: './floral-hearts.ttf',
});

export const sans = Cormorant({
  variable: '--font-cormorant',
});

export const sans2 = localFont({
  variable: '--font-aire-bold-pro',
  src: './aire-bold-pro.ttf',
});

export const h2Props = {
  order: 2 as const,
  lts: 3,
  tt: 'uppercase',
};

export const sans2Props = {
  lts: 6,
  style: { fontFamily: 'var(--font-sans2)' },
  tt: 'uppercase',
};
