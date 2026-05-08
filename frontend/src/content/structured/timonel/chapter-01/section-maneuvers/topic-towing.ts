import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'towing',
  title: 'Remolque y Empuje',
  readingTime: 12,
  audioTime: '11:00',

  content: [
    { type: 'title', text: 'Remolque' },
    { type: 'paragraph', text: 'Maniobra donde un barco arrastra a otro. Aparejo de remolque: cabo, cable o cadena que une remolcador con remolcado.' },
    { type: 'paragraph', text: 'Situaciones usuales: Ayuda a embarcaciones con averías o sin combustible, remolque de veleros de competición desde sus amarras hasta zona de regata.' },
    { type: 'paragraph', text: 'PRECAUCIÓN: Si le piden remolque, tienen una emergencia. Ayude sin comprometer su propia seguridad y la de su tripulación.' },

    { type: 'subtitle', text: 'Lanzamiento y Recepción del Cabo' },
    { type: 'paragraph', text: 'Cabo de remolque: Poliester retorcido o trenzado, grosor suficiente. Pata de gallo en remolcador (forma de "Y" desde cornamusas de popa hacia un punto central).' },
    { type: 'paragraph', text: 'En remolcado: firme a cornamusas de proa. Puede usar pata de gallo menor para distribuir fuerza.' },
    { type: 'paragraph', text: 'Lanzamiento: Aclarar cabo, adujas amplias, lanzar con movimiento controlado. Longitud mínima: 1 eslora en aguas tranquilas, más en marejada (para que ambos barcos estén sobre el mismo seno de la ola).' },
    { type: 'paragraph', text: 'Cabo guía: Si no pueden acercarse, lanzar cabo fino con objeto pesado o flotante para luego traer el cabo de remolque.' },

    { type: 'subtitle', text: 'Remolque por Arrastre' },
    { type: 'paragraph', text: 'Remolcado: Informar cuando está listo. Timón funcional = mantener alineación. Velas bajas, botavara a crujía. Atender comandos del remolcador. NO filar cabo durante navegación.' },
    { type: 'paragraph', text: 'Remolcador: Aproximarse paralelo, velocidad lenta y constante. No aceleraciones violentas ni reducciones repentinas (tirones). Evitar que cabo se hunda y vaya a la hélice. Regular extensión según oleaje (ambos barcos sobre mismo seno de ola).' },

    { type: 'subtitle', text: 'Remolque Abarloado' },
    { type: 'paragraph', text: 'Barcos al costado, uno al lado del otro. Exclusivo para aguas calmas y protegidas (puertos, marinas). Mínimo 3 cabos: largo de proa, spring de proa (desde remolcador), través de popa (ajustable).' },
    { type: 'paragraph', text: 'Remolcador: Acercarse a la aleta del remolcado. En canales, abarloarse a babor del remolcado para ver mejor tráfico (navegar por estribor). Colocar defensas. Lanzar largo de proa, luego través de popa. Ajustar ángulo: proa remolcado inclinada hacia crujía del remolcador.' },
    { type: 'paragraph', text: 'Remolcado: Defensas colocadas, estático con velas bajas. Seguir instrucciones del remolcador durante toda la navegación.' }
  ],

  quiz: [
    {
      question: '¿Qué es la "pata de gallo" en remolque?',
      options: [
        'Un tipo de nudo',
        'Aparejo en "Y" desde popa del remolcador',
        'El cabo para recibir la orden',
        'Una defensa especial'
      ],
      correctAnswer: 1,
      explanation: 'La pata de gallo es un aparejo en forma de "Y" formado por un cabo cuyos dos extremos se toman a las cornamusas de popa del remolcador.'
    },
    {
      question: '¿Qué NO debe hacer el barco remolcado durante la navegación?',
      options: [
        'Mantener alineación',
        'Comunicarse con el remolcador',
        'Filar el cabo de remolque',
        'Mantener velas bajas'
      ],
      correctAnswer: 2,
      explanation: 'NO se debe filar el cabo de remolque mientras los barcos están en navegación, eso puede causar accidentes graves.'
    },
    {
      question: '¿En qué condiciones es exclusivo el remolque abarloado?',
      options: [
        'En alta mar con olas grandes',
        'En aguas calmas y protegidas (puertos)',
        'Solo de noche',
        'Con vientos fuertes'
      ],
      correctAnswer: 1,
      explanation: 'El remolque abarloado es exclusivo para aguas calmas y protegidas como puertos o marinas, para evitar riesgos de roturas.'
    }
  ]
};
