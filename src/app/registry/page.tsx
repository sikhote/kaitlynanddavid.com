'use client';

import { Box, Button, Flex, Grid, Paper, Text, Title } from '@mantine/core';

export default function Page() {
  return (
    <Flex gap={{ base: 'xl' }} direction="column" ta="center" align="center">
      <Text>Thanks for considering a gift for us!</Text>
      <Grid gap={{ base: 'xl' }} component="ul" w="100%" maw={400}>
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
            <Paper component="li" withBorder>
              <Box p="lg">
                <Title order={4}>{title}</Title>
                {description && <Text>{description}</Text>}
              </Box>
              <Button component="a" fullWidth href={href} target="_blank">
                {linkLabel}
              </Button>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
}
