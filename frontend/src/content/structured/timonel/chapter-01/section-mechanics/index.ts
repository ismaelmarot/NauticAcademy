import { Section } from '@/content/types';
import { topic as motors } from './topic-motors';
import { topic as speedLength } from './topic-speed-length';
import { topic as batteries } from './topic-batteries';
import { topic as propellers } from './topic-propellers';

export const section: Section = {
  id: 'mechanics',
  title: 'Mecánica',
  topics: [motors, speedLength, batteries, propellers]
};
