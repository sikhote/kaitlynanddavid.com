'use client';

import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';

export default function Page() {
  return (
    <Flex direction="column" gap={{ base: 'xl' }} align="center">
      <Text w="100%" maw={500} ta="center">
        We hope you can attend our intimate celebration. Please reference this
        website for the most up to date event details.
      </Text>
      <Box maw={500}>
        <Image
          src="/assets/kaitlyn-and-david.jpg"
          alt="Kaitlyn & David"
          width={0}
          height={0}
          sizes="500px"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Flex>
  );
}
