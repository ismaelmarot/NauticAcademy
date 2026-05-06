import { Section } from '@/content/types';
import { topic as hullDeckDimensions } from './topic-hull-deck-dimensions';
import { topic as rigging } from './topic-rigging';
import { topic as woodenShips } from './topic-wooden-ships';
import { topic as materials } from './topic-materials';
import { topic as sailTypes } from './topic-sail-types';
import { topic as riggingTypes } from './topic-rigging-types';
import { topic as buoyancyStability } from './topic-buoyancy-stability';

export const section: Section = {
  id: 'concepts',
  title: 'Conceptos Elementales',
  topics: [
    hullDeckDimensions,
    rigging,
    woodenShips,
    materials,
    sailTypes,
    riggingTypes,
    buoyancyStability
  ]
};
