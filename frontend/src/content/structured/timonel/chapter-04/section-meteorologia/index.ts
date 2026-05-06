import { Section } from '@/content/types';
import { topic as laTierra } from './topic-la-tierra';
import { topic as laAtmosfera } from './topic-la-atmosfera';
import { topic as anticiclonesCiclones } from './topic-anticiclones-ciclones';
import { topic as presionAtmosferica } from './topic-presion-atmosferica';
import { topic as temperatura } from './topic-temperatura';
import { topic as humedadRelativa } from './topic-humedad-relativa';
import { topic as viento } from './topic-viento';
import { topic as lasBrisas } from './topic-las-brisas';
import { topic as lasNubes } from './topic-las-nubes';
import { topic as nieblas } from './topic-nieblas';
import { topic as frentesPolares } from './topic-frentes-polares';
import { topic as sudestada } from './topic-sudestada';
import { topic as pampero } from './topic-pampero';
import { topic as zondaFohn } from './topic-zonda-fohn';
import { topic as pronostico } from './topic-pronostico';
import { topic as herramientasPronostico } from './topic-herramientas-pronostico';

export const section: Section = {
  id: 'meteorologia',
  title: 'Meteorología',
  topics: [
    laTierra,
    laAtmosfera,
    anticiclonesCiclones,
    presionAtmosferica,
    temperatura,
    humedadRelativa,
    viento,
    lasBrisas,
    lasNubes,
    nieblas,
    frentesPolares,
    sudestada,
    pampero,
    zondaFohn,
    pronostico,
    herramientasPronostico
  ]
};
