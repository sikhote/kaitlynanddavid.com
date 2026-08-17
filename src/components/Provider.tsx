'use client';

import {
  Anchor,
  createTheme,
  type InputProps,
  MantineProvider,
} from '@mantine/core';

const errorColor = 'var(--mantine-color-teal-7)';

const theme = createTheme({
  defaultRadius: 0,
  fontFamily: 'var(--font-sans)',
  fontWeights: {
    regular: '300',
  },
  fontSizes: {
    xs: '.9rem',
    sm: '1.1rem',
    md: '1.3rem',
    lg: '1.5rem',
    xl: '1.7rem',
  },
  headings: {
    sizes: {
      h1: {
        fontWeight: '300',
        fontSize: '3.5rem',
        lineHeight: 'calc(3rem * 1.3)',
      },
      h2: {
        fontWeight: '300',
        fontSize: '1.5rem',
        lineHeight: 'calc(1.5rem * 1.3)',
      },
      h3: {
        fontWeight: '100',
        fontSize: '3.5rem',
        lineHeight: 'calc(2rem * 1.3)',
      },
      h4: {
        fontWeight: '800',
        fontSize: '1.5rem',
        lineHeight: 'calc(1.5rem * 1)',
      },
    },
  },
  spacing: {
    xxs: '4px',
  },
  primaryColor: 'gray',
  primaryShade: 9,
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        style: {
          textDecorationColor: 'var(--mantine-color-gray-4)',
          textDecorationThickness: 1,
          textUnderlineOffset: 6,
        },
      },
    }),
    InputWrapper: {
      styles: {
        error: { color: errorColor },
      },
      vars: () => ({
        label: { '--input-asterisk-color': errorColor },
      }),
    },
    Input: {
      styles: (_: never, props: InputProps) => ({
        input: {
          borderColor: props.error ? errorColor : undefined,
          color: props.error ? errorColor : undefined,
        },
      }),
    },
  },
});

export default function Provider({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
