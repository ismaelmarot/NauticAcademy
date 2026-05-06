import { Section } from '@/content/types';
import { topic as cartasNauticas } from './topic-cartas-nauticas';
import { topic as elementosDibujo } from './topic-elementos-dibujo';
import { topic as coordenadas } from './topic-coordenadas';

export const section: Section = {
  id: 'cartografia',
  title: 'Cartografía',
  topics: [
    cartasNauticas,
    elementosDibujo,
    coordenadas
  ]
};
