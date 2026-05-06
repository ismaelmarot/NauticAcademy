import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'collreg',
  title: 'El RIPA - Reglamento Internacional para la Prevención de Abordajes',
  readingTime: 46,
  audioTime: '42:00',

  content: [
    { type: 'title', text: 'Antecedentes' },
    { type: 'paragraph', text: 'Tras la colisión del SS Andrea Doria con el MS Stockholm en 1956, se impulsó la creación de reglas unificadas. En 1960 se adoptó COLREG 1960. En 1972 se adoptó el Reglamento Internacional para Prevenir Abordajes (RIPA/COLREG), entrando en vigor el 1 de julio de 1977.' },

    { type: 'title', text: 'Estructura del RIPA' },
    { type: 'paragraph', text: '5 Partes y 4 Anexos:' },
    { type: 'list', items: [
      'Parte A: Generalidades (Ámbito, Responsabilidad, Definiciones)',
      'Parte B: Reglas de Rumbo y Gobierno',
      'Parte C: Luces y Marcas',
      'Parte D: Embarcaciones con Capacidad de Maniobra Restringida',
      'Parte E: Exenciones'
    ]},

    { type: 'title', text: 'Parte A: Generalidades' },
    { type: 'paragraph', text: 'Regla 1: Aplicable a todos los buques, sin distinción. Regla 2: El cumplimiento no exime de responsabilidad. Regla 3: Define buque, buque de propulsión mecánica, velero, dedicado a pesca, hidroavión, sin gobierno, con capacidad de maniobra restringida.' },

    { type: 'title', text: 'Parte B: Reglas de Rumbo y Gobierno' },
    { type: 'paragraph', text: 'Regla 4: Aplicable en cualquier condición de visibilidad. Regla 5: Mantener vigilancia eficaz. Regla 6: Velocidad de seguridad. Regla 7: Riesgo de abordaje (la duda implica riesgo).' },
    { type: 'paragraph', text: 'Regla 8: Maniobras para evitar abordaje (oportunas, claramente perceptibles). Regla 9: Canales angostos (prioridad según capacidad de maniobra). Regla 10: Dispositivos de Separación de Tráfico (DST/TS).' },
    { type: 'paragraph', text: 'Regla 11: Aplicable cuando buques se ven a la vista. Regla 12: Buques de vela (babor cede a estribor; barlovento cede a sotavento). Regla 13: Buque que alcanza (debe mantenerse apartado).' },
    { type: 'paragraph', text: 'Regla 14: Vuelta encontrada (cada uno cede a estribor). Regla 15: Cruce (el que tiene al otro por su banda de estribor tiene prioridad). Regla 16: Buque que cede el paso. Regla 17: Buque que sigue a rumbo.' },

    { type: 'title', text: 'Parte C: Luces y Marcas' },
    { type: 'paragraph', text: 'Regla 20: Luces de navegación (visibilidad reducida). Regla 21: Definiciones (Tope, Costado, Alcance, Remolque, Todo Horizonte, Centellante). Regla 22: Alcances mínimos según eslora.' },
    { type: 'paragraph', text: 'Regla 23: Luces buques propulsión mecánica. Regla 24: Remolcando/empujando. Regla 25: Veleros y remo. Regla 26: Pesca. Regla 27: Sin gobierno/capacidad restringida. Regla 28: DST. Regla 29: Práctico. Regla 30: Fondeados/varados. Regla 31: Hidroaviones.' },

    { type: 'title', text: 'Parte D: Ayudas Acústicas' },
    { type: 'paragraph', text: 'Regla 32: Definiciones (Pito, pitada corta/larga). Regla 33: Equipo para señales acústicas. Regla 34: Señales de maniobra (pitadas: 1 corta = caigo estribor, 2 cortas = caigo babor, 3 cortas = marcha atrás).' },

    { type: 'title', text: 'Parte E: Exenciones' },
    { type: 'paragraph', text: 'Regla 35: Veleros en regata. Regla 36: Señales para llamar atención. Regla 37: Emergencia. Regla 38: Enmiendas.' }
  ],

  quiz: [
    {
      question: '¿Qué suceso impulsó la creación del RIPA moderno?',
      options: [
        'Hundimiento del Titanic',
        'Colisión Andrea Doria - Stockholm',
        'Segunda Guerra Mundial',
        'Accidente en el Canal de Panamá'
      ],
      correctAnswer: 1,
      explanation: 'La colisión del SS Andrea Doria con el MS Stockholm en 1956 frente a Nantucket impulsó la adopción de reglas unificadas, resultando en el RIPA.'
    },
    {
      question: 'Según la Regla 12, ¿quién cede el paso entre dos veleros?',
      options: [
        'El que recibe viento por babor',
        'El que recibe viento por estribor',
        'El de mayor eslora',
        'El que navega a mayor velocidad'
      ],
      correctAnswer: 0,
      explanation: 'Entre dos veleros: quien recibe viento por babor debe ceder el paso. Si mismo viento, el de barlovento cede al de sotavento.'
    },
    {
      question: '¿Qué indica la Regla 13 sobre "buque que alcanza"?',
      options: [
        'Tiene prioridad de paso',
        'Debe mantenerse apartado del buque alcanzado',
        'Debe ceder el paso siempre',
        'Puede invocar cambios de rumbo'
      ],
      correctAnswer: 1,
      explanation: 'El buque que alcanza a otro debe mantenerse apartado. La responsabilidad de evitar el abordaje recae siempre en quien viene desde atrás.'
    },
    {
      question: '¿Qué señal acústica indica "caigo a estribor"?',
      options: [
        'Una pitada corta',
        'Dos pitadas cortas',
        'Tres pitadas cortas',
        'Una pitada larga'
      ],
      correctAnswer: 1,
      explanation: 'Según Regla 34: 1 pitada corta = caigo a estribor. 2 pitadas cortas = caigo a babor. 3 pitadas = marcha atrás.'
    },
    {
      question: '¿Cuándo es aplicable la Parte B del RIPA?',
      options: [
        'Solo de noche',
        'En cualquier condición de visibilidad',
        'Solo con visibilidad reducida',
        'Solo cuando se ven a la vista'
      ],
      correctAnswer: 1,
      explanation: 'Según Regla 4, las reglas de la Parte B se aplican en cualquier condición de visibilidad, sin excepción.'
    }
  ]
};
