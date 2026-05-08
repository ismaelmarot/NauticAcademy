import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'docking',
  title: 'Atracar y Zarpar',
  readingTime: 17,
  audioTime: '15:30',

  content: [
    { type: 'title', text: 'Las Marinas' },
    { type: 'paragraph', text: 'Muelles fijos: No varían con el nivel del agua. Resistentes pero requieren precauciones para dar longitud suficiente a los cabos. Dificultan embarque/desembarque en bajantes.' },
    { type: 'paragraph', text: 'Muelles flotantes: Suben y bajan con el nivel del agua. El barco siempre está a la misma altura. Facilitan amarre, zarpada y embarque. Más sensibles al oleaje.' },
    { type: 'paragraph', text: 'Elementos de amarre: Noray (grande, muelle fijo), Bolardo (mediano, acero inoxidable), Bita (dos columnas verticales), Cornamusas (acero inoxidable, muelle flotante), Cáncamos/Argollas (pequeños, botes).' },

    { type: 'subtitle', text: 'Los Cabos de Amarre (Estachas)' },
    { type: 'paragraph', text: 'Generalmente de poliester, grosor considerable. Preferibles retorcidos por su elasticidad, reduciendo esfuerzos.' },
    { type: 'paragraph', text: 'Largos: En dirección longitudinal. Largo de proa (impide ir a popa) y largo de popa (impide ir a proa).' },
    { type: 'paragraph', text: 'Springs: Dirección contraria a los largos. Spring de proa (impide ir a proa) y spring de popa (impide ir a popa). Evitan movimientos longitudinales.' },
    { type: 'paragraph', text: 'Traveses: Perpendiculares al barco. Evitan que se separe del muelle.' },
    { type: 'paragraph', text: 'Coderas: De proa o popa, amarran a banda contraria al atraque. Mantienen el barco separado del muelle cuando hay viento/mar.' },

    { type: 'subtitle', text: 'Maniobra de Zarpada' },
    { type: 'paragraph', text: 'Planeamiento: Pronóstico meteorológico y mareológico. Verificar estado del barco, elementos de seguridad, documentación y provisiones.' },
    { type: 'paragraph', text: 'Preparación: Barco listo para navegar, motor encendido en neutro, velas montadas. Informar plan a tripulación, comunicación a viva voz.' },
    { type: 'paragraph', text: 'Ejecución: Soltar amarras, velocidad de seguridad, recuperar cabos, retirar defensas, adujar cabos, liberar cubierta. Navegar a motor hasta aguas abiertas.' },

    { type: 'subtitle', text: 'Maniobra de Atraque' },
    { type: 'paragraph', text: 'Preparación: Explicar plan a tripulación, asignar tareas. Preparar cabos, defensas, bichero. Arriar velamen, liberar cubierta, reducir a velocidad de seguridad, colocar defensas.' },
    { type: 'paragraph', text: 'Ejecución: Encimar el muelle (proa o popa según convenga). Pasar motor a punto muerto. Tripulantes en bandas con defensas. Tomar amarras exteriores primero (boyas/pilotes), luego al muelle.' },
    { type: 'paragraph', text: 'Amarre en muelle a sotavento: Dejar ancla a prudente distancia, soltar cabo de fondeo, aproximar popa al muelle, tomar largo de proa. Soltar amarras y zarpar usando fondeo para ayuda.' },
    { type: 'paragraph', text: 'Si el muelle no es flotante, dejar suficiente cabo libre para acompañar mareas. Señalizar con orinque si se uso ancla adicional.' }
  ],

  quiz: [
    {
      question: '¿Qué cabo evita que el barco se separe del muelle?',
      options: ['Largo', 'Spring', 'Través', 'Codera'],
      correctAnswer: 2,
      explanation: 'Los traveses trabajan perpendicularmente al barco y su función es evitar que se separe del muelle.'
    },
    {
      question: '¿Cuál es la velocidad mínima para controlar el barco?',
      options: [
        'Velocidad máxima',
        'Velocidad de crucero',
        'Velocidad de seguridad',
        'Punto muerto'
      ],
      correctAnswer: 2,
      explanation: 'La velocidad de seguridad es la mínima en la que el barco puede navegar sin perder el gobierno.'
    },
    {
      question: '¿Qué son los "orinques" en amarre?',
      options: [
        'Defensas del barco',
        'Cabos de amarre a boyas',
        'Señalización de ancla auxiliar para ayuda en atraque',
        'Luces de navegación'
      ],
      correctAnswer: 2,
      explanation: 'Se usa el orinque para marcar la posición del ancla auxiliar cuando se amarra usando fondeo a sotavento.'
    }
  ]
};
