'use client';

import { Anchor, Box, Stack, Text, Title } from '@mantine/core';
import { events } from '@/lib/events';

export default function Page() {
  return (
    <Stack align="center" gap="lg" ta="center">
      <Title order={2}>{events[0].date}</Title>
      <Stack component="ul" gap="xl">
        {events.map(
          ({ title, description, location, address, times, website, Icon }) => (
            <Stack component="li" key={title} gap="md" align="center">
              <Box w="80px" mt="-10px" mb="-30px">
                <Icon />
              </Box>
              <Box>
                <Title order={3}>{title}</Title>
                {times.map((time) => (
                  <Text key={time}>{time}</Text>
                ))}
              </Box>
              <Box>
                <Anchor underline="hover" href={website}>
                  <Title order={5}>{location}</Title>
                </Anchor>
                <Anchor
                  underline="always"
                  href={`https://www.google.com/maps/search/?api=1&query=${address}`}
                >
                  {address}
                </Anchor>
              </Box>
              <Text maw={400} w="100%" textWrap="balance">
                {description}
              </Text>
            </Stack>
          ),
        )}
      </Stack>
    </Stack>
  );
}
