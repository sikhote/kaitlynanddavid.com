'use client';

import { Button, Card, Grid, Stack, Text } from '@mantine/core';

export default function Page() {
  return (
    <Stack gap="xl" ta="center" align="center">
      <Text>Thanks for considering purchasing a gift for us!</Text>
      <Grid gap="xl" component="ul" w="100%" maw={400}>
        {[
          {
            title: 'Honeymoon Fund',
            description: 'We are planning a trip to Italy next year',
            href: 'https://paypal.me/kaitlynanddavid',
            linkLabel: 'Donate to Fund',
          },
          {
            title: 'Crate & Barrel',
            href: 'https://www.crateandbarrel.com/gift-registry/kaitlyn-holt-and-david-sinclair/r7612588',
            linkLabel: 'View Registry',
          },
          {
            title: 'Pottery Barn',
            href: 'https://www.potterybarn.com/registry/7kvpjzsqgz/registry-list.html',
            linkLabel: 'View Registry',
          },
        ].map(({ title, description, href, linkLabel }, i) => (
          <Grid.Col span={i === 0 ? 12 : 6} key={href}>
            <Card component="li" shadow="sm" padding="lg" withBorder>
              <Text fw={500}>{title}</Text>
              {description && <Text>{description}</Text>}
              <Button
                component="a"
                fullWidth
                mt="md"
                href={href}
                target="_blank"
              >
                {linkLabel}
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
