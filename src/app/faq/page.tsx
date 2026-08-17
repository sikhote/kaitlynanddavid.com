'use client';

import { Flex, Text, Title } from '@mantine/core';

export default function Page() {
  return (
    <Flex
      component="ul"
      direction="column"
      gap={{ base: 'xl' }}
      pt={{ base: 'lg' }}
      align="center"
      ta="center"
    >
      <li>
        <Title order={4}>What is the attire for the wedding?</Title>
        <Text textWrap="balance" maw={600} w="100%">
          Cocktail! We’d love to see our family and friends dress up with us.
        </Text>
      </li>
      <li>
        <Title order={4}>Is the wedding outdoors?</Title>
        <Text textWrap="balance" maw={600} w="100%">
          Our ceremony will take place on a grassy lawn near La Jolla shores.
          Cocktail hour and dinner will be indoors.
        </Text>
      </li>
      <li>
        <Title order={4}>How's the weather in early November?</Title>
        <Text textWrap="balance" maw={600} w="100%">
          Typically, daytime highs range from the mid-60s to low 70s°F, dropping
          into the low-to-mid 50s°F at night.
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
        <Title order={4}>Where should I park?</Title>
        <Text textWrap="balance" maw={600} w="100%">
          For our ceremony at the wedding bowl you can park in the surrounding
          streets. It shouldn’t be too busy on a Tuesday afternoon but it is
          near the beach and parking can be limited. You may need to walk a
          block or two.
          <br />
          <br />
          For cocktail hour and dinner at the Marine Room there is a small lot
          in front of the restaurant with available parking. Additional parking
          can be found in the surrounding streets. We recommend carpooling when
          possible.
        </Text>
      </li>
      <li>
        <Title order={4}>When should I RSVP by?</Title>
        <Text textWrap="balance" maw={600} w="100%">
          October 1st!
        </Text>
      </li>
    </Flex>
  );
}
