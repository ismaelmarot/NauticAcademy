import { Chapter } from '@/content/types';
import { section as meteorologia } from './section-meteorologia';
import { section as oceanoYOleaje } from './section-oceano-y-oleaje';

export const chapter: Chapter = {
  id: 'chapter-04',
  title: 'Capítulo 04: Meteorología',
  sections: [
    meteorologia,
    oceanoYOleaje
  ]
};
