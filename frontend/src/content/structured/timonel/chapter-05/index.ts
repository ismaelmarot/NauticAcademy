import { Chapter } from '@/content/types';
import { section as elementosDeSeguridad } from './section-elementos-de-seguridad';
import { section as aspectosSanitarios } from './section-aspectos-sanitarios';
import { section as controlDeAverias } from './section-control-de-averias';

export const chapter: Chapter = {
  id: 'chapter-05',
  title: 'Capítulo 05: Seguridad a Bordo',
  sections: [
    elementosDeSeguridad,
    aspectosSanitarios,
    controlDeAverias
  ]
};
