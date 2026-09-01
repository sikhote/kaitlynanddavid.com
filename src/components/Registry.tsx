'use client';

import { Box, Button, Flex, Grid, Paper, Text, Title } from '@mantine/core';
import { h4Props } from '@/lib/fonts';

export default function Registry() {
  return (
    <Flex gap={{ base: 'xl' }} direction="column" ta="center" align="center">
      <Grid
        gap={{ base: 'xl' }}
        component="ul"
        w="100%"
        maw={600}
        mt={{ base: 'lg' }}
      >
        {[
          {
            title: 'Honeymoon Fund',
            href: 'https://www.honeyfund.com/site/kaitlynanddavid',
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
        ].map(({ title, href, linkLabel }, i) => (
          <Grid.Col span={{ base: 12, xs: i === 0 ? 12 : 6 }} key={href}>
            <Paper component="li" withBorder>
              <Box p="lg">
                <Title {...h4Props}>{title}</Title>
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
