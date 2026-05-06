import { Section } from '@/content/types';
import { topic as rumbos } from './topic-rumbos';
import { topic as derivaAbatimiento } from './topic-deriva-abatimiento';
import { topic as millaNudo } from './topic-milla-nudo';
import { topic as calculosDistancia } from './topic-calculos-distancia';
import { topic as mareas } from './topic-mareas';
import { topic as profundidad } from './topic-profundidad';
import { topic as pinulaSextante } from './topic-pinula-sextante';
import { topic as lineasPosicion } from './topic-lineas-posicion';
import { topic as metodosPosicionamiento } from './topic-metodos-posicionamiento';
import { topic as navCostera } from './topic-nav-costera';
import { topic as navEstima } from './topic-nav-estima';
import { topic as navElectronica } from './topic-nav-electronica';

export const section: Section = {
  id: 'cuatro-problemas',
  title: 'Los Cuatro Problemas de la Navegación',
  topics: [
    rumbos,
    derivaAbatimiento,
    millaNudo,
    calculosDistancia,
    mareas,
    profundidad,
    pinulaSextante,
    lineasPosicion,
    metodosPosicionamiento,
    navCostera,
    navEstima,
    navElectronica
  ]
};
