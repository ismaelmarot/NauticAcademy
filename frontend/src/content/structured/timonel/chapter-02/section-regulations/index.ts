import { Section } from '@/content/types';
import { topic as solas } from './topic-solas';
import { topic as buoyage } from './topic-buoyage';
import { topic as collreg } from './topic-collreg';
import { topic as environment } from './topic-environment';
import { topic as riodepla } from './topic-riodepla';

export const section: Section = {
  id: 'regulations',
  title: 'Marco Normativo',
  topics: [solas, buoyage, collreg, environment, riodepla]
};
