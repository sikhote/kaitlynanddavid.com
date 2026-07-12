"use client";

import { Anchor, Text, Title } from "@mantine/core";
import { events } from "@/lib/events";

export default function Page() {
  return (
    <ul className="flex flex-col text-center gap-15">
      {[[events[0]], [events[1], events[2]]].map((events) => (
        <li className="flex flex-col" key={events[0].title}>
          <Title order={2}>{events[0].date}</Title>
          <ul className="flex flex-col gap-10">
            {events.map(
              ({
                title,
                description,
                location,
                address,
                time,
                website,
                Icon,
              }) => (
                <li key={title} className="flex flex-col gap-3">
                  <div className="w-[100px] mx-auto mb-[-30px] mt-[-10px]">
                    <Icon />
                  </div>
                  <div>
                    <Title order={3}>{title}</Title>
                    <Text>{time}</Text>
                  </div>
                  <div>
                    <Anchor underline="hover" href={website}>
                      <Title order={5}>{location}</Title>
                    </Anchor>
                    <Anchor
                      underline="always"
                      href={`https://www.google.com/maps/search/?api=1&query=${address}`}
                    >
                      {address}
                    </Anchor>
                  </div>
                  <Text
                    mx="auto"
                    className="max-w-xs w-full"
                    textWrap="balance"
                  >
                    {description}
                  </Text>
                </li>
              ),
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
}
