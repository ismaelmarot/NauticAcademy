import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'anchors',
  title: 'Las Anclas',
  readingTime: 24,
  audioTime: '22:00',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'El ancla es el elemento fundamental del aparejo de fondeo. Su misión es mantener el barco inmóvil respecto del fondo, aun cuando actúen el viento, olas o corriente.' },
    { type: 'paragraph', text: 'El ancla no mantiene el barco por su peso, sino por agarre y geometría, funcionando como una garra que impide que el velero garree mientras permanece fondeado.' },

    { type: 'title', text: 'Estructura de un Ancla' },
    { type: 'paragraph', text: 'Arganeo: Ojal o anillo que opera como punto de unión del ancla con el grillete. Debe ser robusto pues soporta la totalidad de la fuerza de tracción.' },
    { type: 'paragraph', text: 'Caña: Cuerpo central que conecta el arganeo con las uñas. Actúa como brazo de palanca para orientar las uñas y que se claven en el fondo.' },
    { type: 'paragraph', text: 'Cruz: Zona donde la caña se une con las uñas. Recibe grandes cargas al "morder" el fondo.' },
    { type: 'paragraph', text: 'Uñas: Superficies penetrantes que deben enterrarse y ofrecer agarre contra el fondo. Mayor superficie y mejor ángulo = mayor agarre.' },
    { type: 'paragraph', text: 'Mapas: Bordes o costillas que dan rigidez mecánica y forma a las uñas, evitando deformaciones y mejorando capacidad de corte.' },
    { type: 'paragraph', text: 'Cepo: Barra transversal que obliga al ancla a caer de costado, asegurando que una uña entre en contacto con el fondo. Tiene ojal auxiliar para el orinque.' },

    { type: 'title', text: 'Tipos de Anclas' },
    { type: 'paragraph', text: 'Danforth: Popular en embarcaciones deportivas. Dos uñas planas montadas sobre caña central. Gran agarre en arena y fango, poco peso, fácil estiba. Pierde eficiencia en fondos duros o con vegetación. Fortress es versión moderna en aluminio.' },
    { type: 'paragraph', text: 'CQR (Arado): Clásica y confiable. Cuerpo alargado con uña que se clava progresivamente. Capacidad de volver a afirmarse sola cuando cambia la tracción. Ideal para crucero.' },
    { type: 'paragraph', text: 'Bruce: Garra suavemente curvada, sin partes móviles. Se asienta rápido y orienta sola en dirección de tracción. Buen rendimiento en arena, fango y grava. Requiere fondos blandos para penetrar profundamente.' },
    { type: 'paragraph', text: 'Delta: Evolución de CQR. Cuerpo rígido de una sola pieza, centro de gravedad adelantado. Asienta rápido, agarre estable, ideal para veleros modernos.' },
    { type: 'paragraph', text: 'Almirantazgo (Inglesa): Dos uñas en "V" con cepo transversal. Buena para arena, barro, grava. Pesada y voluminosa, difícil estiba. Fue estándar de la marina británica en siglo XIX.' },
    { type: 'paragraph', text: 'Rezón: Similar a garra con varios brazos curvados. Plegable, ideal para rocas y enganches en zonas costeras. No apta para fondos blandos o fondeos prolongados.' },
    { type: 'paragraph', text: 'Hall: Dos uñas articuladas en cuerpo robusto. Pensada para buques mercantes, fondeo temporal y maniobra portuaria. Poca penetración profunda pero gran fiabilidad operativa.' },

    { type: 'title', text: 'Tipos de Fondo para cada Ancla' },
    { type: 'paragraph', text: 'Danforth: Excelente en arena y fango, regular en grava, mala en rocas y algas.' },
    { type: 'paragraph', text: 'CQR y Delta: Muy buena en arena y fango, buena en grava, regular en rocas y algas.' },
    { type: 'paragraph', text: 'Bruce: Muy buena en arena, fango y grava, regular en rocas y algas.' },
    { type: 'paragraph', text: 'Almirantazgo: Buena en arena, fango, grava y rocas. No apta para recreación.' },
    { type: 'paragraph', text: 'Rezón: Excelente en rocas, mala en fondos blandos. Ideal para enganches.' }
  ],

  quiz: [
    {
      question: '¿Cómo mantiene el ancla al barco firme?',
      options: [
        'Por su peso',
        'Por agarre y geometría (como una garra)',
        'Por la longitud de la cadena',
        'Por la fuerza del motor'
      ],
      correctAnswer: 1,
      explanation: 'El ancla no mantiene el barco por su peso, sino por agarre y geometría, funcionando como una garra que se entierra en el fondo.'
    },
    {
      question: '¿Qué ancla es ideal para arena y fango con poco peso?',
      options: ['CQR', 'Almirantazgo', 'Danforth', 'Rezón'],
      correctAnswer: 2,
      explanation: 'La Danforth ofrece mucho agarre en fondos blandos (arena/fango) con poco peso, ideal como ancla principal en zonas arenosas.'
    },
    {
      question: '¿Qué ancla se asienta sola y es popular en cruceros?',
      options: ['Hall', 'Bruce', 'Rezón', 'Almirantazgo'],
      correctAnswer: 1,
      explanation: 'La Bruce se asienta rápidamente sola en dirección de tracción, es muy popular en veleros de crucero por su versatilidad.'
    },
    {
      question: '¿Para qué sirve el cepo del ancla?',
      options: [
        'Para hacerla más pesada',
        'Para obligarla a caer de costado y que una uña toque el fondo',
        'Para conectar la cadena',
        'Para marcar la posición'
      ],
      correctAnswer: 1,
      explanation: 'El cepo obliga al ancla a caer de costado, asegurando que una de las uñas entre en contacto con el fondo y se entierre.'
    }
  ]
};
