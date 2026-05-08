import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'anchoring',
  title: 'Fondeo',
  readingTime: 15,
  audioTime: '13:30',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'Fondear es la maniobra mediante la cual el barco queda afirmado al fondo mediante una o más anclas, asegurando que no se soltará quedando a la deriva.' },

    { type: 'subtitle', text: 'El Aparejo de Fondeo' },
    { type: 'paragraph', text: 'Conjunto de elementos para mantener la embarcación fija: ancla, grillete, cadena o tramo de cadena y cabo, y orinque.' },
    { type: 'paragraph', text: 'La cadena cumple doble función: enlaza ancla con barco y agrega peso para soporte. En barcos pequeños se reemplaza parte por cabo de nylon o poliester para reducir peso.' },
    { type: 'paragraph', text: 'El orinque señala la ubicación del ancla y ayuda a recuperarla si está trabada. Consiste en un cabo fino con boyarín (idealmente luminoso).' },
    { type: 'paragraph', text: 'Especificaciones mínimas por eslora: 18 pies (6kg, cadena 8mm, cabo 10mm), 24 pies (10kg, 10mm, 14mm), 34 pies (14kg, 10mm, 14mm), 52 pies (20kg, 12mm, 18mm).' },

    { type: 'subtitle', text: 'Fondeo de Trabajo y de Respeto' },
    { type: 'paragraph', text: 'Mínimo 2 aparejos: trabajo (principal, ancla mayor, cadena/cabo más largo) y respeto (secundario, ancla menor o diferente). Ambos siempre armados y separados (uno en proa, otro en popa).' },

    { type: 'subtitle', text: 'Maniobra de Fondeo' },
    { type: 'paragraph', text: 'Elección del área: profundidad adecuada, protegida de vientos y corrientes, sin tráfico, con espacio para bornear (girar libremente).' },
    { type: 'paragraph', text: 'Aproximación: Navegar contra viento o corriente, aminorar a velocidad mínima de gobierno, arriar vela de proa. Preparar aparejo (liberar catalina, verificar malacate o preparar estacha manual).' },
    { type: 'paragraph', text: 'Suelta del fondeo: Barco sin arrancada, motor en neutro. Soltar ancla controladamente. Una vez que hizo cabeza (se afirmó), largar cadena/cabo hasta 3 veces la profundidad como mínimo.' },
    { type: 'paragraph', text: 'Verificar que no garree (arrastre del ancla). Si garrea, filar más cadena o cambiar de zona. Controlar el borneo (movimiento circular cuando cambia viento/corriente).' },
    { type: 'paragraph', text: 'Señalización: De día marca circular negra. De noche luz blanca todo horizonte de 360º en el tope del palo.' },

    { type: 'subtitle', text: 'Levantar el Fondeo' },
    { type: 'paragraph', text: 'Preparar barco (encender motor o izar velas). Quitar amortiguador si estaba. Activar malacate o recuperar manualmente hasta liberar ancla del fondo. Estibar todo el aparejo. Zarpar con motor o velas.' },

    { type: 'subtitle', text: 'Fondeo de Seguridad' },
    { type: 'paragraph', text: 'Fondeo engalgado: Dos anclas en línea (una detrás de otra). Buen nivel de resistencia, ideal cuando viento/corriente son estables.' },
    { type: 'paragraph', text: 'Fondeo a barbas de gato: Dos anclas formando ángulo en la proa, previniendo cambios de dirección del viento o corriente. Una ancla a cada banda según rotación esperada.' }
  ],

  quiz: [
    {
      question: '¿Qué longitud de cadena/cabo se debe soltar mínimo?',
      options: [
        'Igual a la profundidad',
        'El doble de la profundidad',
        'Tres veces la profundidad',
        'Cinco veces la profundidad'
      ],
      correctAnswer: 2,
      explanation: 'Se debe soltar cadena o cabo hasta lograr una longitud igual a tres veces la profundidad del sitio como mínimo, una vez que el ancla hizo cabeza.'
    },
    {
      question: '¿Qué es el orinque?',
      options: [
        'Un tipo de ancla',
        'Cabo con boyarín que señala y ayuda a recuperar el ancla',
        'La cadena del fondeo',
        'El malacate de proa'
      ],
      correctAnswer: 1,
      explanation: 'El orinque consiste en un aparejo con boyarín que señala la ubicación del ancla y ayuda a recuperarla si está trabada en el fondo.'
    },
    {
      question: '¿Qué es "hacer cabeza"?',
      options: [
        'Izar el ancla',
        'Que el ancla se afirmó al fondo notándose que el barco dejó de retroceder',
        'Soltar el ancla al agua',
        'Virar con el ancla'
      ],
      correctAnswer: 1,
      explanation: 'Hacer cabeza significa que el ancla se afirmó al fondo, notándose que la embarcación dejó de retroceder.'
    },
    {
      question: '¿Qué es el fondeo a barbas de gato?',
      options: [
        'Un solo ancla con cadena extra',
        'Dos anclas formando un ángulo en la proa',
        'Fondeo solo con cabo',
        'Usar la hélice como freno'
      ],
      correctAnswer: 1,
      explanation: 'El fondeo a barbas de gato usa dos anclas colocadas formando un ángulo en la proa, previniendo cambios de dirección del viento o corriente.'
    }
  ]
};
