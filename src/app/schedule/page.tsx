'use client';

import { Anchor, Box, Flex, Text, Title } from '@mantine/core';
import { events } from '@/lib/events';
import { h2Props, h4Props } from '@/lib/fonts';

export default function Page() {
  return (
    <>
      <Title {...h2Props}>{events[0].date}</Title>
      <Flex direction="column" component="ul" gap={{ base: 48 }} ta="center">
        {events.map(
          ({ title, description, location, address, times, website, Icon }) => (
            <Flex component="li" direction="column" key={title} align="center">
              <Box w={80}>
                <Icon />
              </Box>
              <Title order={3} style={{ fontFamily: 'var(--font-cursive)' }}>
                {title}
              </Title>
              <Anchor underline="hover" href={website} mt={{ base: 'xl' }}>
                <Title {...h4Props}>{location}</Title>
              </Anchor>
              <Text>
                {times.map((time) => (
                  <span key={time}>
                    {time}
                    <br />
                  </span>
                ))}
              </Text>
              <Anchor
                underline="always"
                href={`https://www.google.com/maps/search/?api=1&query=${address}`}
              >
                {address}
              </Anchor>
              <Text maw={400} w="100%" textWrap="balance" mt={{ base: 'md' }}>
                {description}
              </Text>
            </Flex>
          ),
        )}
      </Flex>
    </>
  );
}
