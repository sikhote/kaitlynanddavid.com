'use client';

import { Button, Card, Flex, Stack, Text } from '@mantine/core';

export default function Page() {
  return (
    <Stack gap="xl" ta="center">
      <Text>Thanks for considering purchasing a gift for us!</Text>
      <Flex gap="xl">
        {[
          {
            title: 'Honeymoon Fund',
            href: 'https://www.paypal.com/pool/9rKoiIW3yg?sr=wccr12588',
            linkLabel: 'Donate to Fund',
          },
          {
            title: 'Crate & Barrel',
            href: 'https://www.crateandbarrel.com/gift-registry/kaitlyn-holt-and-david-sinclair/r7612588',
            linkLabel: 'View Registry',
          },
        ].map(({ title, href, linkLabel }) => (
          <Card shadow="sm" padding="lg" withBorder key={href} w={200}>
            <Text fw={500}>{title}</Text>
            <Button
              component="a"
              color="blue"
              fullWidth
              mt="md"
              href={href}
              target="_blank"
            >
              {linkLabel}
            </Button>
          </Card>
        ))}
      </Flex>
    </Stack>
  );
}
