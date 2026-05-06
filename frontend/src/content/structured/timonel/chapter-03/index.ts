import { Chapter } from '@/content/types';
import { section as cartografia } from './section-cartografia';
import { section as magnetismoTerrestre } from './section-magnetismo';
import { section as cuatroProblemas } from './section-cuatro-problemas';

export const chapter: Chapter = {
  id: 'chapter-03',
  title: 'Capítulo 03: Navegación',
  sections: [cartografia, magnetismoTerrestre, cuatroProblemas]
};
