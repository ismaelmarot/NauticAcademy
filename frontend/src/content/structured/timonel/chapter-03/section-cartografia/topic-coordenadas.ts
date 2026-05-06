import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'coordenadas',
  title: 'Sistemas de Coordenadas y las coordenadas geográficas',
  readingTime: 15,
  audioTime: '14:00',

  content: [
    { type: 'title', text: 'Sistemas de Coordenadas y las Coordenadas Geográficas' },
    { type: 'paragraph', text: 'Los sistemas de coordenadas son herramientas clásicas y fundamentales de la geometría, que permiten establecer de manera precisa la posición de un punto en un espacio determinado.' },
    { type: 'paragraph', text: 'Si el espacio considerado es una línea, bastará con tener un solo eje de coordenadas para definir la posición del punto, pues se trata de una única dimensión. En un plano se requieren dos ejes —dos dimensiones— generalmente perpendiculares entre sí, que permiten expresar posiciones mediante pares ordenados. En un espacio tridimensional se añaden tres ejes de referencia, lo que posibilita describir la ubicación de un punto en el volumen de la Tierra o en la atmósfera.' },
    { type: 'paragraph', text: 'Estos sistemas de coordenadas se utilizan exactamente de la misma forma en el ámbito de la cartografía náutica y son, por lo tanto, la base para representar con fidelidad la superficie terrestre sobre una carta. Gracias a ellos es posible expresar latitudes y longitudes, calcular rumbos, distancias y posiciones, y asegurar la compatibilidad entre las cartas, los instrumentos de navegación y los sistemas de posicionamiento global.' },
    { type: 'title', text: 'Tipos de Coordenadas' },
    { type: 'paragraph', text: 'Existen diferentes tipos de coordenadas, cada una adaptada a la aplicación que se desee realizar:' },
    { type: 'paragraph', text: 'Coordenadas Cartesianas: las coordenadas cartesianas o rectangulares se utilizan para ubicar un punto en un espacio mediante tres ejes perpendiculares entre sí, denominados X, Y y Z.' },
    { type: 'paragraph', text: 'Coordenadas Geográficas: son un tipo de coordenadas esféricas que, mediante los ejes de latitud y longitud, permiten definir con exactitud puntos sobre la superficie de la Tierra. Son las típicamente utilizadas en navegación marítima y aérea.' },
    { type: 'paragraph', text: 'Coordenadas Celestes: indican la posición de un cuerpo en la esfera celeste mediante el azimut y la declinación —que definen su orientación desde el Norte y la elevación sobre el ecuador celeste, respectivamente—, y se emplean principalmente en navegación astronómica.' },
    { type: 'paragraph', text: 'Coordenadas Ecuatoriales: también se utilizan para ubicar astros en la esfera celeste, pero se refieren al plano ecuatorial. Se expresan mediante ángulo horario y la declinación.' },
    { type: 'paragraph', text: 'En todos los casos, los sistemas de coordenadas deben estar referidos a un punto de origen, donde cada valor se considera cero. Este punto sirve como referencia común para poder medir y comparar posiciones dentro del mismo sistema.' },
    { type: 'title', text: 'Los Círculos Máximos y Menores' },
    { type: 'paragraph', text: 'Antes de definir los conceptos de latitud y longitud, es necesario comprender cómo se "dibuja" el esferoide terrestre desde el punto de vista geométrico. Aunque la percibimos como una esfera continua, para poder ubicarnos sobre su superficie resulta útil imaginar que está cubierta por una "red" de líneas que operan como ejes de coordenadas.' },
    { type: 'paragraph', text: 'Para construir esa red, se recurre a la idea de círculos trazados sobre la superficie terrestre. Estos círculos no existen físicamente, pero pueden imaginarse como si envolvieran el esferoide que representa a la Tierra en distintas direcciones.' },
    { type: 'paragraph', text: 'Círculos Máximos: son aquellos que dividen al esferoide terrestre en dos hemisferios exactamente iguales, pasando siempre por el centro de la Tierra. Representan el mayor perímetro posible que puede tener un círculo trazado sobre una esfera. En cartografía y navegación, todos los meridianos y el ecuador son ejemplos de círculos máximos.' },
    { type: 'paragraph', text: 'Círculos Menores: son aquellos que no pasan por el centro de la Tierra, y por lo tanto no dividen al esferoide en partes iguales. Son paralelos a algún círculo máximo, como ocurre con los paralelos de latitud, que se disponen en planos perpendiculares al eje terrestre y disminuyen de tamaño a medida que se alejan del ecuador hacia los polos.' },
    { type: 'title', text: 'Las Coordenadas Geográficas' },
    { type: 'paragraph', text: 'Cuando se sitúa un punto sobre la Tierra, en realidad se lo ubica sobre la superficie del esferoide terrestre teórico, que representa la forma del planeta adoptada para fines cartográficos. En este sistema, los ejes de referencia no son líneas rectas que se cruzan sobre un plano —como ocurre en las coordenadas cartesianas—, sino dos círculos máximos que se cortan entre sí en ángulo recto, cuyo punto de intersección se encuentra en el centro de la Tierra.' },
    { type: 'paragraph', text: 'Estos dos círculos máximos corresponden al Ecuador, que actúa como plano horizontal de referencia, y al meridiano de Greenwich, o Primer Meridiano, que constituye el plano vertical de referencia.' },
    { type: 'paragraph', text: 'La posición de un punto sobre la superficie terrestre se expresa mediante distancias angulares medidas desde esos planos fundamentales: una respecto al Ecuador y otra respecto al meridiano de Greenwich. Estas dos medidas angulares —independientes entre sí— definen las coordenadas geográficas de latitud y de longitud del punto y permiten ubicarlo con exactitud sobre el globo.' },
    { type: 'title', text: 'Los Paralelos y la Latitud' },
    { type: 'paragraph', text: 'El Ecuador es el círculo máximo que resulta de la intersección del plano ecuatorial con la superficie de la Tierra. Dicho plano pasa por el centro del planeta y es perpendicular a su eje de rotación, dividiendo a la Tierra en dos hemisferios: el hemisferio Norte y el hemisferio Sur.' },
    { type: 'paragraph', text: 'Si ese plano virtual se desplaza paralelamente hacia los polos, se generan infinitos círculos menores denominados paralelos, los cuales son perpendiculares al eje terrestre y disminuyen de tamaño a medida que se alejan del Ecuador.' },
    {
      type: 'list',
      items: [
        'Símbolo: φ (letra griega "phi" minúscula)',
        'Es: arco de meridiano',
        'Medido desde: Ecuador',
        'En sentido: Norte o Sur',
        'Hasta: el paralelo del observador o del punto de interés',
        'Valor: 00º a 90º, siendo por convención positiva al Norte y negativa al Sur'
      ]
    },
    { type: 'paragraph', text: 'La latitud es la distancia angular —es decir, el ángulo— medida entre el plano del ecuador y el plano del paralelo que pasa por el punto considerado, con vértice en el centro de la Tierra.' },
    { type: 'paragraph', text: 'En los cálculos se utiliza la letra griega "φ" —phi minúscula— para denominar la latitud.' },
    { type: 'title', text: 'Los Meridianos y la Longitud' },
    { type: 'paragraph', text: 'Los meridianos son círculos máximos que pasan por los polos y por el centro de la Tierra. Cada uno de ellos corta perpendicularmente a los paralelos y contiene el eje de rotación terrestre.' },
    { type: 'paragraph', text: 'El meridiano de Greenwich es el meridiano de referencia a partir del cual se miden las longitudes, tanto hacia el Este como hacia el Oeste.' },
    { type: 'paragraph', text: 'Se denomina meridiano del lugar, o meridiano del observador, al semimeridiano que pasa por el punto en que se encuentra el observador o el punto a medir, extendiéndose de un polo al otro y abarcando por lo tanto 180º.' },
    {
      type: 'list',
      items: [
        'Símbolo: ω (letra griega omega minúscula)',
        'Es: arco de Ecuador',
        'Medido desde: Meridiano de Greenwich',
        'En sentido: Este u Oeste',
        'Hasta: el meridiano del observador o del punto de interés',
        'Valor: 000º a 180º, siendo por convención positiva al Este y negativa al Oeste'
      ]
    },
    { type: 'paragraph', text: 'Tenga en cuenta que, según las definiciones de latitud y longitud, los grafos de la primera se expresan con dos dígitos, mientras que la segunda se lo hace con tres dígitos. Esta convención permite identificar rápidamente si una anotación de grados corresponde a una latitud o longitud.' },
    { type: 'title', text: 'Las Escalas de Latitud y Longitud' },
    { type: 'paragraph', text: 'Las cartas náuticas incluyen en sus márgenes las escalas de latitudes y longitudes, que permiten determinar con precisión la posición de un punto. Estas escalas están graduadas en grados, minutos y, en algunos casos, fracciones de minuto, de acuerdo con la escala general de la carta.' },
    { type: 'paragraph', text: 'En las cartas basadas en la proyección de Mercator, la escala de latitudes se representa sobre los márgenes laterales —derecho e izquierdo— de la carta, mientras que la escala de longitudes se ubica en los márgenes superior e inferior.' },
    { type: 'paragraph', text: 'Los minutos pueden estar fraccionados de distinta forma, dependiendo del tamaño de la carta. En algunas se los divide en 10 partes, con lo cual cada una de ellas equivale a 6" —seis segundos de arco— y en otras se lo hace en 5 partes, equivaliendo entonces cada una a 12" —doce segundos de arco—.' },
    { type: 'title', text: 'La Escala de Distancias' },
    { type: 'paragraph', text: 'La escala de latitudes tiene además una propiedad adicional: en la superficie terrestre, un minuto de arco de latitud, o lo que es lo mismo, un minuto de arco de meridiano, equivale a una milla náutica.' },
    { type: 'paragraph', text: 'Por este motivo, las distancias deben medirse siempre sobre la escala de latitudes, y no sobre la de longitudes, ya que solo en el ecuador ambos arcos son equivalentes. A medida que se avanza hacia los polos, los meridianos convergen, y los minutos de longitud se reducen en extensión real.' },
    { type: 'paragraph', text: 'Para mantener la precisión en la medición de distancias, éstas deben tomarse sobre la escala de latitudes correspondiente a la latitud media del tramo considerado.' },
    { type: 'title', text: 'El Meridiano de Greenwich como Referencia' },
    { type: 'paragraph', text: 'Durante siglos, cada potencia marítima utilizó su propio meridiano de referencia para medir la longitud. Los franceses tomaban como origen el meridiano que pasaba por París, los españoles el de San Fernando, en Cádiz, los portugueses el de Lisboa, y los británicos el de Greenwich.' },
    { type: 'paragraph', text: 'En 1884, se celebró en Washington la Conferencia Internacional del Meridiano, a la que asistieron representantes de 25 países con el fin de unificar el sistema de longitudes y establecer un meridiano "cero" común para todo el mundo. Tras analizar las opciones, se adoptó el meridiano que pasa por el Real Observatorio de Greenwich, en Inglaterra.' },
    { type: 'paragraph', text: 'Se decidió esto porque para ese momento más de dos tercios de las cartas y mapas náuticos del mundo ya usaban Greenwich como referencia, especialmente debido al dominio marítimo británico del siglo XIX, y que el Observatorio de Greenwich contaba con una de las series astronómicas y de tiempo más precisas y continuas del mundo.' }
  ],

  quiz: [
    {
      question: '¿Qué son los círculos máximos?',
      options: ['Círculos que no pasan por el centro de la Tierra', 'Círculos que dividen al esferoide terrestre en dos hemisferios iguales pasando por el centro', 'Círculos paralelos al ecuador', 'Círculos trazados sobre los polos'],
      correctAnswer: 1,
      explanation: 'Los círculos máximos son aquellos que dividen al esferoide terrestre en dos hemisferios exactamente iguales, pasando siempre por el centro de la Tierra.'
    },
    {
      question: '¿Cómo se simboliza la latitud?',
      options: ['ω (omega)', 'λ (lambda)', 'φ (phi)', 'θ (theta)'],
      correctAnswer: 2,
      explanation: 'La latitud se simboliza con la letra griega φ (phi minúscula) y se mide de 00º a 90º desde el Ecuador hacia el Norte o el Sur.'
    },
    {
      question: '¿Desde qué meridiano se mide la longitud?',
      options: ['Meridiano de París', 'Meridiano de San Fernando', 'Meridiano de Greenwich', 'Meridiano de Lisboa'],
      correctAnswer: 2,
      explanation: 'La longitud se mide desde el meridiano de Greenwich, que fue adoptado como meridiano de referencia 000º en la Conferencia Internacional del Meridiano de 1884.'
    },
    {
      question: '¿A cuántas millas náuticas equivale un minuto de arco de meridiano?',
      options: ['Media milla náutica', 'Una milla náutica', 'Dos millas náuticas', 'Depende de la latitud'],
      correctAnswer: 1,
      explanation: 'Un minuto de arco de latitud (o de meridiano) equivale exactamente a una milla náutica. Por este motivo las distancias deben medirse siempre sobre la escala de latitudes.'
    },
    {
      question: '¿Cuántos dígitos se utilizan para expresar la longitud?',
      options: ['Dos dígitos', 'Tres dígitos', 'Cuatro dígitos', 'Un dígito'],
      correctAnswer: 1,
      explanation: 'La longitud se expresa con tres dígitos (000º a 180º), mientras que la latitud se expresa con dos dígitos (00º a 90º). Esta convención permite identificar rápidamente si una anotación corresponde a latitud o longitud.'
    }
  ]
};
