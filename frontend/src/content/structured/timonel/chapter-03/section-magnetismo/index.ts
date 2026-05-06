import { Section } from '@/content/types';
import { topic as causasVariaciones } from './topic-causas-variaciones';
import { topic as compasBrujula } from './topic-compas-brujula';
import { topic as declinacionMagnetica } from './topic-declinacion-magnetica';
import { topic as desvioCompas } from './topic-desvio-compas';

export const section: Section = {
  id: 'magnetismo-terrestre',
  title: 'Magnetismo Terrestre',
  topics: [
    causasVariaciones,
    compasBrujula,
    declinacionMagnetica,
    desvioCompas
  ]
};
