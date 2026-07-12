"use client";

import { createTheme, type InputProps, MantineProvider } from "@mantine/core";

const errorColor = "var(--mantine-color-teal-7)";

const theme = createTheme({
  defaultRadius: 0,
  fontFamily: "var(--font-sans)",
  primaryColor: "gray",
  primaryShade: 9,
  components: {
    InputWrapper: {
      styles: {
        error: { color: errorColor },
      },
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
