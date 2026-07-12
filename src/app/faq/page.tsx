"use client";

import { Anchor, Text, Title } from "@mantine/core";

export default function Page() {
  return (
    <ul className="flex flex-col gap-10 items-center text-center max-w-lg w-full">
      <li>
        <Title order={4}>What will the Reception look like?</Title>
        <Text textWrap="balance">
          Our reception will be an extended dinner, cutting the cake, and lots
          of catching up!
        </Text>
      </li>
      <li>
        <Title order={4}>
          What time should I arrive on the day of the Ceremony?
        </Title>
        <Text textWrap="balance">
          We suggest arriving at 2:15 pm or earlier. This should allow enough
          time to park, walk over, enjoy the view, and be ready at 3:00 pm.
        </Text>
      </li>
      <li>
        <Title order={4}>Can I learn more about the Welcome Dinner?</Title>
        <Text textWrap="balance">
          Of course! We will reserve a patio at Yanni's, where we plan to enjoy
          a nice meal with everyone, catch up with folks, and enjoy their Budino
          desserts. Parking should be fairly easy. Feel free to browse the menu
          ahead of time at their{" "}
          <Anchor href="https://yannisbarandgrill.com">website</Anchor>.
        </Text>
      </li>
    </ul>
  );
}
