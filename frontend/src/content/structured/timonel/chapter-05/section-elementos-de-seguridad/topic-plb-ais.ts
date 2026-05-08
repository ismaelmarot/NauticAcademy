import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'plb-ais',
  title: 'Radiobaliza PLB y Sistema AIS',
  readingTime: 4,

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'Aunque surgieron inicialmente para uso profesional, su tamaño reducido, autonomía y facilidad de uso las han vuelto cada vez más comunes entre las tripulaciones de embarcaciones que realizan singladuras de media y larga distancia.' },
    { type: 'paragraph', text: 'PLBs AIS.' },
    { type: 'paragraph', text: '¿Cómo Funcionan?' },
    { type: 'paragraph', text: 'Las PLB AIS son dispositivos relativamente pequeños, que pueden ser montados en el chaleco salvavidas o el arnés, o inclusive ser llevadas en un bolsillo, sin demasiadas molestias para al usuario.' },
    { type: 'paragraph', text: 'Hombre al agua con PLB AIS.' },
    { type: 'paragraph', text: 'En la pantalla del receptor AIS, el sistema muestra un nuevo blanco móvil con el nombre “MOB ACTIVE” u otro similar, junto con la posición, rumbo y distancia al náufrago, lo que permite orientar la maniobra de rescate con gran precisión.' },
    { type: 'paragraph', text: 'En conjunto, el sistema ofrece una respuesta rápida, autónoma y localizada, lo que lo convierte en una herramienta de seguridad especialmente valiosa en la navegación costera o en zonas de tráfico marítimo, donde el sistema AIS siempre está operativo y con tráfico.' },
    { type: 'paragraph', text: 'Hombre al agua en pantalla del AIS.' },
    { type: 'paragraph', text: 'Las PLB AIS pueden activarse de dos modos: manualmente o de forma automática, dependiendo de la marca y modelo, y de la manera en que estén instaladas.' },
    { type: 'paragraph', text: 'En los modelos manuales, el usuario debe extraer la antena y presionar el botón de activación, lo que pone en marcha la transmisión AIS y el receptor GPS interno. En cambio, los modelos automáticos están pensados para integrarse en chalecos salvavidas autoinflables, en los que la baliza queda asegurada dentro de un compartimiento que se libera al inflarse el chaleco tras la caída al agua. En ese momento, el contacto con el agua o la apertura del compartimento activa automáticamente el dispositivo, que comienza a emitir la señal AIS y la posición GPS sin necesidad de intervención del náufrago.' },
    { type: 'paragraph', text: 'Los equipos de activación automática, por el otro lado, son justamente útiles en situaciones de emergencia súbita o pérdida de conciencia, ya que garantiza que la señal de alerta se emitirá incluso si la persona no puede activarla por sus propios medios.' },
    { type: 'paragraph', text: 'A modo de resumen, las PLB AIS representan una de las soluciones más eficaces y realistas para mejorar la seguridad individual en la navegación deportiva y recreativa.' },
    { type: 'paragraph', text: 'Su capacidad de enviar una señal precisa, visible por cualquier embarcación cercana equipada con AIS, las convierte en un vínculo directo entre el navegante y la ayuda más próxima. No reemplazan otros medios de socorro, pero complementan al conjunto de dispositivos de emergencia ofreciendo una respuesta inmediata y localizada.' },
    { type: 'paragraph', text: 'En la siguiente nota continuaremos entonces con el tratamiento de este los elementos de seguridad de a bordo.' },
    { type: 'paragraph', text: 'Cabuyería: Tipos de cabos y su aplicación.' },
    { type: 'paragraph', text: 'Técnicas de Fondeo.' },
  ],

  quiz: [
    {
      question: '¿Qué significa PLB?',
      options: ['Personal Life Buoy', 'Personal Locator Beacon', 'Primary Location Beacon', 'Portable Light Buoy'],
      correctAnswer: 1,
      explanation: 'PLB significa Personal Locator Beacon, un dispositivo de localización personal que emite una señal de socorro.'
    },
    {
      question: '¿Qué información transmite el sistema AIS en una emergencia?',
      options: ['Solo la posición del barco', 'La identidad, posición, rumbo y velocidad de la embarcación', 'Solo el nombre del barco', 'La temperatura del agua'],
      correctAnswer: 1,
      explanation: 'El AIS (Automatic Identification System) transmite la identidad, posición, rumbo y velocidad de la embarcación, lo que facilita la localización en emergencias.'
    },
  ]
};