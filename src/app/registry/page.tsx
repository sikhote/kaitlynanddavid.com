'use client';

import { Box, Button, Flex, Grid, Paper, Text, Title } from '@mantine/core';

export default function Page() {
  return (
    <Flex gap={{ base: 'xl' }} direction="column" ta="center" align="center">
      <Text w="100%" maw={650}>
        Your love and support mean the world to us. If you'd like to help us
        start our next chapter, we've put together a few nice ways to do so
        below. Thank you for helping us build a home full of love, laughter, and
        fun in the kitchen.
      </Text>
      <Grid gap={{ base: 'xl' }} component="ul" w="100%" maw={600}>
        {[
          {
            title: 'Honeymoon Fund',
            description:
              "We've added a Honeymoon Fund to our registry as we get ready for our first big adventure post wedding - a trip to Italy, a place neither of us has explored before. If you'd like you can help us make the most of our trip with unforgettable dinners and moments of discovery as we travel across the country. Thank you for helping us build memories we'll treasure forever.",
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
