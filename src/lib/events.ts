import DinnerIcon from '@/components/icons/DinnerIcon';
// import FamilyIcon from '@/components/icons/FamilyIcon';
import WeddingIcon from '@/components/icons/WeddingIcon';
import type { Event } from '@/lib/types';

export const events: Event[] = [
  {
    title: 'Ceremony',
    date: 'Tuesday, November 3, 2026',
    times: ['3:00 pm'],
    location: 'The Wedding Bowl (aka Cuvier Park)',
    website:
      'https://www.sandiego.gov/park-and-recreation/parks/regional/shoreline/cuvier',
    address: '590 Coast S Blvd, La Jolla, CA 92037',
    questions: [{ type: 'Will attend' }],
    Icon: WeddingIcon,
    description:
      'Our ceremony will begin promptly at 3:00 pm. Please plan accordingly.',
  },
  {
    title: 'Reception',
    date: 'Tuesday, November 3, 2026',
    times: ['4:00 pm - Cocktail hour', '5:00 pm - Dinner'],
    location: 'The Marine Room',
    website: 'https://www.marineroom.com',
    address: '1950 Spindrift Dr, La Jolla, CA 92037',
    Icon: DinnerIcon,
    questions: [
      { type: 'Will attend' },
      {
        type: 'Dinner option',
        options: ['Salmon', 'Chicken', 'Vegetarian'],
      },
    ],
    description:
      'Join us for cocktails, dinner, and cake as we watch the waves roll in.',
  },
];
