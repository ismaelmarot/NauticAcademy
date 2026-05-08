import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'anticiclones-ciclones',
  title: 'Anticiclones y Ciclones',
  readingTime: 10,
  content: [
    { type: 'title', text: 'Anticiclones y Ciclones' },
    { type: 'subtitle', text: 'Algo Más Sobre las Masas de Aire' },
    { type: 'paragraph', text: 'Las masas de aire —los centros anticiclónicos— son grandes porciones de atmósfera con características físicas más o menos uniformes, cuya extensión puede abarcar varios miles de kilómetros, alcanzando alturas significativas, y que en su zona central reina el buen tiempo.' },
    { type: 'paragraph', text: 'Los anticiclones migratorios surgen de las altas polares y que una vez que se han puesto en marcha, avanzan con un rumbo general Noreste en el hemisferio Sur y Sureste en el hemisferio Norte, imponiendo a su paso las condiciones de temperatura y presión que llevan consigo.' },
    { type: 'paragraph', text: 'Cuando un anticiclón migratorio se desplace del continente hacia el mar, adquirirá las características propias de la masa marítima, incorporando humedad y modificando su temperatura. Y, por el contrario, cuando este anticiclón venga desde el océano y comience a pisar la masa continental, perderá esa humedad.' },
    { type: 'paragraph', text: 'La masa de aire también sufrirá alteraciones cuando, forzada por la orografía, deba ascender por el barlovento de una cadena de cerros o montañas, dando origen a formaciones de nubes.' },
    { type: 'subtitle', text: 'Anticiclones Semipermanentes' },
    { type: 'paragraph', text: 'Existen anticiclones que se ubican en zonas relativamente estables sobre los océanos:' },
    { type: 'list', items: ['ASPS: Anticiclón Semipermanente del Pacífico Sur', 'ASPN: Anticiclón Semipermanente del Pacífico Norte', 'ASAS: Anticiclón Semipermanente del Atlántico Sur', 'ASAN: Anticiclón Semipermanente del Atlántico Norte (Azores)', 'ASI: Anticiclón Semipermanente del Índico'] },
    { type: 'subtitle', text: 'Anticiclones Migratorios' },
    { type: 'paragraph', text: 'Los anticiclones migratorios se desprenden de las altas polares. Una vez en marcha, avanzan hacia el Noreste en el hemisferio Sur, imponiendo sus propias características de masa de aire: baja temperatura, humedad baja (relativo a la temperatura) y alta presión.' },
    { type: 'paragraph', text: 'El Anticiclón Migratorio se mueve impulsado por la circulación general de la atmósfera, que en el hemisferio sur tiene un desplazamiento general hacia el Noreste, y por los vientos de altura.' },
    { type: 'paragraph', text: 'Al avanzar, el Anticiclón Migratorio empuja el frente frío de un frente polar, o lo arrastra, hasta que la ciclogénesis a la que este pertenece, queda encapsulada por las condiciones de presión del semipermanente, y por las del propio migratorio, terminando con su existencia.' },
    { type: 'paragraph', text: 'La Cordillera de los Andes condiciona el avance de los anticiclones migratorios, obligándolos a circunnavegarla o a pasar por encima de ella, dependiendo de la altura de la masa de aire. El borde sur del anticiclón migratorio, al pasar por encima de la Patagonia, encuentra los vientos del Oeste, que pueden llegar a ser muy intensos en esa zona —especialmente los "50 rugientes"— y por lo tanto empujan el borde sur y ayudan al anticiclón a virar al Noreste.' },
    { type: 'paragraph', text: 'Luego, cuando los vientos del migratorio se encuentran con los vientos del semipermanente, la cortante ciclónica formada en esa zona de contacto produce un efecto de encapsulamiento que termina con la existencia de la ciclogénesis que viene siendo empujada.' },
    { type: 'subtitle', text: 'Ciclones' },
    { type: 'paragraph', text: 'En general, la formación de las bajas presiones tiene su origen en el ascenso del aire. Las fuentes principales de este proceso se ubican en zonas donde el aire caliente se ve forzado a ascender.' },
    { type: 'paragraph', text: 'En el hemisferio sur, el aire asciende alrededor del círculo polar antártico —especialmente entre los meridianos 85ºW y 130ºW—. Este ascenso forma un cinturón de baja presión circumpolar que rodea a la Antártida, y cuyos centros se desplazan con arrumbamiento general hacia el Noreste, siguiendo el camino de las corrientes de los vientos del Oeste.' },
    { type: 'paragraph', text: 'Otra zona de ascenso del aire se ubica al norte de la Argentina, en la región limítrofe con Bolivia y Paraguay, donde los vientos que pasan por encima de la Cordillera de los Andes —los "30 rugientes"— son forzados a ascender por la topografía, generando una zona de baja presión permanente en esa área geográfica.' },
    { type: 'paragraph', text: 'En otras regiones se pueden generar centros de baja presión, que pueden convertirse en depresiones, y que son más propensas a convertirse en ciclogénesis cuando son empujados contra zonas de alta presión, quedando semi-encerradas entre anticiclones, y donde la cortante ciclónica formada en el contacto con los vientos de los anticiclones, genera la ciclogénesis.' },
    { type: 'subtitle', text: 'Cuñas y Vaguadas' },
    { type: 'paragraph', text: 'En las cartas meteorológicas, además de los centros bien definidos de altas y bajas presiones, aparecen dos estructuras clave:' },
    { type: 'list', items: ['Cuñas: son prolongaciones alargadas de altas presiones que se extienden desde un anticiclón principal. Suelen estar asociadas a subsidencia, aire estable y tendencia a la mejora del tiempo.', 'Vaguadas: son extensiones alargadas de bajas presiones. Favorecen la inestabilidad, el aumento de nubosidad y precipitaciones.'] },
    { type: 'paragraph', text: 'Todos los frentes vienen apoyados en una vaguada, pero no todas las vaguadas traen un frente.' },
    { type: 'subtitle', text: 'Ley de Buys Ballot' },
    { type: 'paragraph', text: 'Es la ley que indica cómo determinar la ubicación de las zonas de alta y baja presión a partir de la dirección del viento.' },
    { type: 'paragraph', text: 'En el hemisferio sur, colocándose de espaldas al viento, la zona de alta presión se encuentra a la izquierda por la espalda, y la zona de baja presión se encuentra hacia adelante a la derecha.' }
  ],
  quiz: [
    {
      question: '¿Cuál es el Anticiclón Semipermanente del Atlántico Sur?',
      options: ['ASPS', 'ASAS', 'ASPN', 'ASI'],
      correctAnswer: 1,
      explanation: 'ASAS corresponde al Anticiclón Semipermanente del Atlántico Sur, mientras que ASPS es del Pacífico Sur, ASPN del Pacífico Norte y ASI del Índico.'
    },
    {
      question: '¿Dónde se forma el cinturón de baja presión circumpolar que rodea a la Antártida?',
      options: ['Alrededor del círculo polar antártico (85ºW a 130ºW)', 'Norte de Argentina', 'Zona de Convergencia Intertropical', '30º de latitud Sur'],
      correctAnswer: 0,
      explanation: 'El aire asciende alrededor del círculo polar antártico, formando un cinturón de baja presión que rodea a la Antártida, con centros que se desplazan al Noreste.'
    },
    {
      question: '¿Qué estructura meteorológica está asociada a subsidencia y mejora del tiempo?',
      options: ['Cuña', 'Vaguada', 'Frente', 'Ciclogénesis'],
      correctAnswer: 0,
      explanation: 'Las cuñas son prolongaciones de altas presiones asociadas a subsidencia, aire estable y tendencia a la mejora del tiempo, a diferencia de las vaguadas que favorecen inestabilidad.'
    },
    {
      question: 'Según la Ley de Buys Ballot en el hemisferio sur, ¿dónde se encuentra la baja presión si te colocas de espaldas al viento?',
      options: ['Hacia adelante a la derecha', 'A la izquierda por la espalda', 'Al frente', 'A la derecha por la espalda'],
      correctAnswer: 0,
      explanation: 'En el hemisferio sur, de espaldas al viento, la alta presión está a la izquierda por la espalda y la baja presión hacia adelante a la derecha.'
    }
  ]
};
