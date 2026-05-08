import { Section } from '@/content/types';
import { topic as corrientesMarinas } from './topic-corrientes-marinas';
import { topic as olasOleaje } from './topic-olas-oleaje';

export const section: Section = {
  id: 'oceano-y-oleaje',
  title: 'Océano y Oleaje',
  topics: [
    corrientesMarinas,
    olasOleaje
  ]
};
