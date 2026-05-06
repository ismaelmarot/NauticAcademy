import { Section } from '@/content/types';
import { topic as sailParts } from './topic-sail-parts';
import { topic as mainsail } from './topic-mainsail';
import { topic as headsailTypes } from './topic-headsail-types';
import { topic as sailTypesLoading } from './topic-sail-types-loading';
import { topic as trueApparentWind } from './topic-true-apparent-wind';
import { topic as windAngles } from './topic-wind-angles';
import { topic as sailTrimTheory } from './topic-sail-trim-theory';
import { topic as mainsailTrim } from './topic-mainsail-trim';
import { topic as headsailTrim } from './topic-headsail-trim';
import { topic as spinnakerTrim } from './topic-spinnaker-trim';

export const section: Section = {
  id: 'sails',
  title: 'El Velamen',
  topics: [
    sailParts,
    mainsail,
    headsailTypes,
    sailTypesLoading,
    trueApparentWind,
    windAngles,
    sailTrimTheory,
    mainsailTrim,
    headsailTrim,
    spinnakerTrim
  ]
};
