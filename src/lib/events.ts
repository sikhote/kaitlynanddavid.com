import DinnerIcon from "@/components/icons/DinnerIcon";
import FamilyIcon from "@/components/icons/FamilyIcon";
import WeddingIcon from "@/components/icons/WeddingIcon";
import type { Event } from "@/lib/types";

export const events: Event[] = [
  {
    title: "Welcome Dinner",
    date: "Monday, November 2, 2026",
    time: "6:00 pm - 9:00 pm",
    location: "Yanni's Bar & Grill",
    website: "https://yannisbarandgrill.com",
    address: "12015 Scripps Highlands Dr, San Diego, CA 92131",
    questions: [{ type: "Will attend" }],
    Icon: FamilyIcon,
    description:
      "Come join us for a casual dinner at a delicious mediterranean restaurant. Parking can be found in the restaurant's lot.",
  },
  {
    title: "Ceremony",
    date: "Tuesday, November 3, 2026",
    time: "3:00 pm - 3:30 pm",
    location: "The Wedding Bowl",
    website:
      "https://www.sandiego.gov/park-and-recreation/parks/regional/shoreline/cuvier",
    address: "590 Coast S Blvd, La Jolla, CA 92037",
    questions: [{ type: "Will attend" }],
    Icon: WeddingIcon,
    description:
      "Our ceremony is next to the shores of La Jolla and will begin promptly. Parking along the beach or surrounding streets is suggested. It may be a little difficult to find a close spot.",
  },
  {
    title: "Reception",
    date: "Tuesday, November 3, 2026",
    time: "4:00 pm - 8:00 pm",
    location: "The Marine Room",
    website: "https://www.marineroom.com",
    address: "1950 Spindrift Dr, La Jolla, CA 92037",
    Icon: DinnerIcon,
    questions: [
      { type: "Will attend" },
      {
        type: "Dinner option",
        options: ["Salmon", "Chicken", "Vegetarian"],
      },
    ],
    description:
      "Join us for dinner and cake as we watch the waves roll in. Parking can be found in the restaurant's lot or surrounding streets.",
  },
];
