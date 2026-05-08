import { Section } from '@/content/types';
import { topic as lineaDeVida } from './topic-linea-de-vida';
import { topic as arnes } from './topic-arnes';
import { topic as chaleco } from './topic-chaleco';
import { topic as salvavidasCircular } from './topic-salvavidas-circular';
import { topic as plbAis } from './topic-plb-ais';
import { topic as olas } from './topic-olas';
import { topic as cospasSarsat } from './topic-cospas-sarsat';

export const section: Section = {
  id: 'elementos-de-seguridad',
  title: 'Elementos de Seguridad',
  topics: [
    lineaDeVida,
    arnes,
    chaleco,
    salvavidasCircular,
    plbAis,
    olas,
    cospasSarsat
  ]
};
