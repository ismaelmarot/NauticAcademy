import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'olas',
  title: 'Sistema OLAS',
  readingTime: 3,

  content: [
    { type: 'title', text: 'Elementos de Seguridad: OLAS - Overboard Location Alert System' },
    { type: 'subtitle', text: 'Introducción' },
    { type: 'paragraph', text: 'Ecosistema OLAS.' },
    { type: 'paragraph', text: 'ACR Electronics' },
    { type: 'paragraph', text: '¿Cómo Funciona?' },
    { type: 'paragraph', text: 'Tag OLAS de pulsera.' },
    { type: 'paragraph', text: 'Mientras el tag personal permanezca dentro del rango de alcance de la red, el sistema considera que la persona está "a bordo". Cuando uno de los tags se aleja y queda fuera del alcance de la red, perdiéndose la señal Bluetooth durante más de unos segundos, el sistema interpreta que el tripulante ha caído al agua. En ese momento, El OLAS Core activa inmediata una alarma sonora y visual, alertando a toda la tripulación. Si hubiera aplicaciones móviles de OLAS vinculadas con el Core, estas también mostrarían en pantalla la posición GPS exacta donde se produjo la desconexión, permitiendo retornar rápidamente al punto del incidente.' },
    { type: 'paragraph', text: 'Pantallas de la App OLAS.' },
    { type: 'paragraph', text: 'Algunos modelos, como el OLAS Guardian, pueden integrarse con otros sistemas del barco para. por ejemplo, detener el motor o activar otros dispositivos de emergencia, siempre que estos estén conectados a la red OLAS. Por su parte, los OLAS Float-On combinan la función de baliza personal con una luz estroboscópica automática que se enciende al contacto con el agua, facilitando la localización nocturna del náufrago.' },
    { type: 'paragraph', text: 'La configuración completa suele tomar menos de 15 minutos. No se requieren herramientas especiales, ni antenas externas: el módulo integra todo lo necesario en su carcasa estanca. OLAS Guardian, que combina el Core con el corte de motor, requiere algo más de trabajo, pues es necesario conectar un par de cables adicionales al circuito de parada del motor, pero la operación sigue siendo muy simple y reversible.' },
    { type: 'paragraph', text: 'Como hemos visto, la plataforma OLAS se destaca por su simplicidad y fiabilidad, algo muy valorado en la náutica deportiva.' },
    { type: 'paragraph', text: 'Su instalación puede hacerse sin asistencia técnica especializada, en pocos minutos, y con herramientas básicas. Basta con elegir una ubicación protegida y central, conectarlo a la alimentación del barco y realizar el emparejamiento a nivel Bluetooth con los dispositivos personales.' },
    { type: 'paragraph', text: 'Una vez operativo, ofrece una red de seguridad discreta pero muy efectiva.' },
    { type: 'paragraph', text: 'En la siguiente nota continuaremos entonces con el tratamiento de este los elementos de seguridad de a bordo.' },
    { type: 'paragraph', text: 'Cabuyería: Tipos de cabos y su aplicación.' },
    { type: 'paragraph', text: 'Técnicas de Fondeo.' },
  ],

  quiz: [
    {
      question: '¿Qué significa OLAS?',
      options: ['Olas Largas de Alta Seguridad', 'On-scene Loudspeaker Alert System', 'Oceanic Location Alert System', 'Open Life Alert System'],
      correctAnswer: 1,
      explanation: 'OLAS significa On-scene Loudspeaker Alert System, un sistema de alerta por altavoz utilizado en operaciones de búsqueda y salvamento.'
    },
  ]
};