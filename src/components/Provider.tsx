'use client';

import { createTheme, type InputProps, MantineProvider } from '@mantine/core';

const errorColor = 'var(--mantine-color-teal-7)';

const theme = createTheme({
  defaultRadius: 0,
  fontFamily: 'var(--font-sans)',
  headings: {
    sizes: {
      h1: {
        fontWeight: '100',
        fontSize: '3rem',
        lineHeight: 'calc(3rem * 1.2)',
      },
    },
  },
  spacing: {
    xxs: '4px',
  },
  primaryColor: 'gray',
  primaryShade: 9,
  components: {
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
