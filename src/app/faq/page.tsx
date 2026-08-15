'use client';

import { Stack, Text, Title } from '@mantine/core';

export default function Page() {
  return (
    <Stack component="ul" gap="xl" align="center" ta="center">
      <li>
        <Title order={4}>What is the dress code?</Title>
        <Text textWrap="balance" maw={600} w="100%">
          Cocktail attire! The wedding bowl has grass—if wearing heels, you may
          want to consider a block shoe. It can be windy near the shore and
          layers may be helpful.
        </Text>
      </li>
      <li>
        <Title order={4}>
          Is dinner served to the table or is it a buffet style?
        </Title>
        <Text textWrap="balance" maw={600} w="100%">
          Table service!
        </Text>
      </li>
      <li>
        <Title order={4}>What is the suggested parking?</Title>
        <Text textWrap="balance" maw={600} w="100%">
          In general, parking in La Jolla can be limited. Consider carpooling or
          using rideshare if available.
        </Text>
      </li>
      <li>
        <Title order={4}>Do I get a plus one?</Title>
        <Text textWrap="balance" maw={600} w="100%">
          To keep our wedding as small and intimate as possible, only guests
          named on your invitation are invited!
        </Text>
      </li>
      <li>
        <Title order={4}>When should I RSVP by?</Title>
        <Text textWrap="balance" maw={600} w="100%">
          October 1st!
        </Text>
      </li>
    </Stack>
  );
}
