'use client';

import { Text, Title } from '@mantine/core';

export default function Page() {
  return (
    <ul className="flex flex-col gap-10 items-center text-center max-w-lg w-full">
      <li>
        <Title order={4}>What is the dress code?</Title>
        <Text textWrap="balance">
          Cocktail attire! The wedding bowl has grass and can be quite windy, if
          wearing heels you may want to consider a block shoe as well as layers.
        </Text>
      </li>
      <li>
        <Title order={4}>
          Is dinner served to the table or is it a buffet style?
        </Title>
        <Text textWrap="balance">Table service!</Text>
      </li>
      <li>
        <Title order={4}>What is the suggested parking?</Title>
        <Text textWrap="balance">
          In general, parking in La Jolla can be limited. Consider carpooling or
          using rideshare if available.
        </Text>
      </li>
      <li>
        <Title order={4}>Do I get a plus one?</Title>
        <Text textWrap="balance">
          To keep our wedding as small and intimate as possible, only guests
          named on your invitation are invited!
        </Text>
      </li>
      <li>
        <Title order={4}>When should I RSVP by?</Title>
        <Text textWrap="balance">October 1st!</Text>
      </li>
      <li>
        <Title order={4}>Are you registered? Where?</Title>
        <Text textWrap="balance">
          We are very fortunate with all that we have and do not expect any
          gifts. If you do want to give a gift, consider a donation to honeymoon
          fund!
        </Text>
      </li>
    </ul>
  );
}
