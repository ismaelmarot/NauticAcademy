import { Section } from '@/content/types';
import { topic as luchaContraIncendios } from './topic-lucha-contra-incendios';
import { topic as viasDeAgua } from './topic-vias-de-agua';
import { topic as varaduras } from './topic-varaduras';
import { topic as desarboladuras } from './topic-desarboladuras';
import { topic as averiasDeTimon } from './topic-averias-de-timon';

export const section: Section = {
  id: 'control-de-averias',
  title: 'Control de Averías',
  topics: [
    luchaContraIncendios,
    viasDeAgua,
    varaduras,
    desarboladuras,
    averiasDeTimon
  ]
};
