import type { FC, SVGProps } from "react";

export type EventQuestion =
  | { type: "Will attend"; options?: never }
  | { type: "Dinner option"; options: string[] };

export type Event = {
  title: string;
  date: string;
  time: string;
  location: string;
  website: string;
  address: string;
  questions: EventQuestion[];
  Icon: FC<SVGProps<SVGSVGElement>>;
  description: string;
};

export type Party = string[];
