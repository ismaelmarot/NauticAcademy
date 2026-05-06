import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'riodepla',
  title: 'Tratado del Río de la Plata y su Frente Marítimo',
  readingTime: 17,
  audioTime: '15:00',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'Firmado en Montevideo en noviembre de 1973 entre Argentina y Uruguay. Puso fin a más de un siglo de disputas sobre límites y jurisdicciones en el Río de la Plata.' },
    { type: 'paragraph', text: 'El Tratado creó la Comisión Administradora del Río de la Plata (CARP), organismo binacional que resuelve cuestiones de interés común: navegación, pesca, balizamiento, contaminación, operaciones de búsqueda y rescate.' },

    { type: 'title', text: 'Límites' },
    { type: 'paragraph', text: 'Límite con Río Uruguay: Paralelo de Punta Gorda (33º 54\' 58" S). Límite con Océano Atlántico: Línea recta Punta del Este (Uruguay) - Punta Rasa del Cabo San Antonio (Argentina).' },
    { type: 'paragraph', text: 'Línea Colonia del Sacramento (Uruguay) - Punta Lara (Argentina): divide cauces Superior y Medio. En cauce Superior: jurisdicción exclusiva 2 mn. En cauce Medio e Inferior: jurisdicción exclusiva 7 mn.' },
    { type: 'paragraph', text: 'Límite marítimo: Línea equidiistante a 1 mn de Punta del Este - Punta Rasa, proyectada al Atlántico. Más allá: Mar Territorial (12 mn), Zona Contigua (24 mn), Zona Económica Exclusiva (200 mn), Plataforma Continental.' },

    { type: 'title', text: 'Jurisdicciones' },
    { type: 'paragraph', text: 'En aguas de uso común (cauce central): prioridad según capacidad de maniobra, no según tamaño. Argentina y Uruguay mantienen derechos soberanos en sus ZEE.' },
    { type: 'paragraph', text: 'En zonas de jurisdicción exclusiva (2 y 7 mn): cada país ejerce derechos plenos. Buques menores a 20 metros ceden el paso a buques restringidos por su calado.' },

    { type: 'title', text: 'Navegación y Practicaje' },
    { type: 'paragraph', text: 'Libertad de navegación para buques de cualquier bandera. Obligación de llevar Práctico (Naturaleza argentina o uruguaya) en fondeaderos y accesos a puertos.' },

    { type: 'title', text: 'Pesca y Recursos' },
    { type: 'paragraph', text: 'Derecho exclusivo para explorar y explotar recursos vivos en zona de 12 mn. En frente marítimo: Zona común de pesca (200 mn) con reparto equitativo según riqueza ictícola.' },

    { type: 'title', text: 'Islas' },
    { type: 'paragraph', text: 'Isla Martín García: Bajo jurisdicción argentina, destinada a reserva natural. Isla de Flores, Isla de Lobos: Bajo jurisdicción uruguaya.' }
  ],

  quiz: [
    {
      question: '¿Qué organismo binacional creó el Tratado del Río de la Plata?',
      options: ['CARP', 'IALA', 'IMO', 'CARP'],
      correctAnswer: 0,
      explanation: 'El Tratado creó la Comisión Administradora del Río de la Plata (CARP), organismo binacional Argentina-Uruguay.'
    },
    {
      question: '¿Qué anchura tiene la zona de jurisdicción exclusiva en el cauce Medio?',
      options: ['2 millas náuticas', '7 millas náuticas', '12 millas náuticas', '200 millas náuticas'],
      correctAnswer: 1,
      explanation: 'En el cauce Medio e Inferior (desde línea Colonia-Punta Lara al Atlántico), la franja de jurisdicción exclusiva es de 7 mn.'
    },
    {
      question: '¿Qué significa la Isla Martín García?',
      options: [
        'Zona de pesca exclusiva',
        'Reserva natural bajo jurisdicción argentina',
        'Base naval uruguaya',
        'Zona de protección especial'
      ],
      correctAnswer: 1,
      explanation: 'La Isla Martín García está bajo jurisdicción argentina y está destinada exclusivamente a ser reserva natural para conservación de fauna y flora autóctona.'
    },
    {
      question: '¿Cuál es el límite con el Océano Atlántico?',
      options: [
        'Paralelo de Punta Gorda',
        'Línea Colonia - Punta Lara',
        'Línea Punta del Este - Punta Rasa',
        'Paralelo de Montevideo'
      ],
      correctAnswer: 2,
      explanation: 'El límite con el Océano Atlántico está dado por una línea recta que une Punta del Este (Uruguay) con Punta Rasa del Cabo San Antonio (Argentina).'
    }
  ]
};
