import { Chapter } from '@/content/types';
import { section as concepts } from './section-concepts';
import { section as cabuyeria } from './section-cabuyeria';
import { section as sails } from './section-sails';
import { section as mechanics } from './section-mechanics';
import { section as manevers } from './section-maneuvers';

export const chapter: Chapter = {
  id: 'chapter-01',
  title: 'Capítulo 01: El Barco',
  sections: [concepts, cabuyeria, sails, mechanics, manevers]
};
