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

export const h1Props = {
  order: 1 as const,
  fz: { base: '2.5rem', xs: '3.5rem' },
  lh: { base: 'calc(2.5rem * 1.3)', xs: 'calc(3rem * 1.3)' },
};

export const h2Props = {
  order: 2 as const,
  lts: 3,
  tt: 'uppercase',
  fz: { base: '1.1rem', xs: '1.5rem' },
  lh: { base: 'calc(1.1rem * 1.3)', xs: 'calc(1.5rem * 1.3)' },
};

export const h4Props = {
  order: 4 as const,
  fz: { base: '1.3rem', xs: '1.5rem' },
  lh: { base: 'calc(1.3rem * 1)', xs: 'calc(1.5rem * 1)' },
};

export const sans2Props = {
  lts: 6,
  style: { fontFamily: 'var(--font-sans2)' },
  tt: 'uppercase',
};
