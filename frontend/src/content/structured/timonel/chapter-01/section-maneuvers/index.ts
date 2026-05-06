import { Section } from '@/content/types';
import { topic as tacking } from './topic-tacking';
import { topic as anchors } from './topic-anchors';
import { topic as anchoring } from './topic-anchoring';
import { topic as docking } from './topic-docking';
import { topic as towing } from './topic-towing';
import { topic as heavingTo } from './topic-heaving-to';
import { topic as mob } from './topic-mob';
import { topic as badWeather } from './topic-bad-weather';

export const section: Section = {
  id: 'maneuvers',
  title: 'Maniobras',
  topics: [tacking, anchors, anchoring, docking, towing, heavingTo, mob, badWeather]
};
