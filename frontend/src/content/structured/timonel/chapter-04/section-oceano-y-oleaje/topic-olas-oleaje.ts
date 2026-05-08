import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'olas-oleaje',
  title: 'Las Ondas, las Olas y el Oleaje',
  readingTime: 7,

  content: [
    { type: 'title', text: 'Las Ondas, las Olas y el Oleaje' },
    { type: 'subtitle', text: 'Definiciones' },
    { type: 'subtitle', text: 'Parámetros de las olas' },
    { type: 'paragraph', text: 'Al paso de las olas, las moléculas de agua experimentan un movimiento de vaivén horizontal en la dirección de propagación de la onda —hacia adelante y hacia atrás— y un movimiento vertical —hacia arriba y hacia abajo—. Como resultado de la combinación de ambos desplazamientos, las partículas de agua describen un movimiento orbital aproximadamente circular, regresando casi al mismo punto donde se encontraban al inicio del ciclo. En cada órbita se produce un avance neto muy pequeño del agua en la dirección de propagación de la onda, quedando la partícula en una posición apenas más adelantada.' },
    { type: 'paragraph', text: 'La "cresta" de la ola es su punto más alto, mientras que el "seno" es la zona más baja entre dos crestas consecutivas. La distancia entre dos crestas sucesivas se denomina "longitud de onda", y la diferencia de altura entre una cresta y un seno corresponde a la "altura de la ola". La "amplitud" es la medida del desplazamiento máximo de la superficie del agua respecto de su posición media, en sentido perpendicular a la dirección de propagación.' },
    { type: 'paragraph', text: 'El "período" es el intervalo de tiempo que transcurre entre el paso de dos crestas consecutivas por un mismo punto. La velocidad de propagación de la onda se calcula dividiendo la longitud de onda por el período.' },
    { type: 'paragraph', text: 'El autor dijo que el viento es la principal causa del oleaje, y como quizás a Usted le interese tanto como a mí, le pregunté qué otras causas hay, y me respondió lo siguiente.' },
    { type: 'subtitle', text: 'La Pororoca' },
    { type: 'paragraph', text: 'Otra causa son los terremotos y erupciones volcánicas submarinas que producen desplazamientos del fondo, generando desde pequeñas ondas hasta los conocidos "tsunamis". Lo bueno es que no suceden a menudo.' },
    { type: 'paragraph', text: 'El choque entre la corriente de un río caudaloso y la corriente de marea oceánica, en la desembocadura del río al mar, forma también ondas empinadas y hasta olas rompientes. La "Pororoca"  en Brasil es un ejemplo de este fenómeno. Se produce cuando la marea entrante del océano Atlántico penetra en el estuario del Amazonas, avanzando río arriba, enfrentándose al caudal del río, produciendo ondas.' },
    { type: 'subtitle', text: 'El oleaje' },
    { type: 'paragraph', text: 'Tal como se ha indicado, las olas son provocadas principalmente por el viento, cuya fricción sobre la superficie del agua produce su arrastre. La zona donde el viento comienza a transferir energía al agua y a generar oleaje se denomina "zona generadora".' },
    { type: 'paragraph', text: 'Con vientos del orden de 5 a 6 nudos, ese arrastre inicial comienza a formar olas con inercia suficiente como para producir el desplazamiento del agua superficial. Hasta aproximadamente los 10 nudos de viento, las olas crecen de manera relativamente uniforme tanto en altura como en longitud de onda. Por encima de los 10 nudos, las olas tienden a crecer más en altura que en longitud, aumentando su pendiente. Cuanto mayor es la altura de las olas, mayor es también la cantidad de energía que pueden extraer del viento.' },
    { type: 'paragraph', text: 'En consecuencia, los mayores oleajes se producen cuando estas tres condiciones se cumplen de manera simultánea y sostenida.' },
    { type: 'paragraph', text: 'Las olas disipan su energía de diversas formas. Una parte de su energía puede transformarse en corrientes superficiales, dando origen a las denominadas corrientes de deriva. Otra parte se disipa por fricción con el aire, en un proceso inverso al que les dio origen. Cuando el viento contrario es suficientemente intenso, puede provocar la ruptura prematura de las crestas.' },
    { type: 'paragraph', text: 'La energía del oleaje termina disipándose principalmente al alcanzar fondos poco profundos o al llegar a la costa. En esta etapa final, las olas sufren transformaciones significativas antes de romper, incrementando su pendiente y encrespándose al interactuar con irregularidades de la franja costera, como bancos de arena, rocas o arrecifes.' },
    { type: 'paragraph', text: 'La contraola, o resaca, es el efecto producido por el agua que, impulsada por las olas hasta la orilla, retorna hacia el mar. Este flujo genera una onda en sentido opuesto al del oleaje entrante, que se disipa progresivamente o interactúa con las olas siguientes a corta distancia de la costa.' },
    { type: 'subtitle', text: 'Oleaje del Río de la Plata' },
    { type: 'paragraph', text: 'La caracterización del oleaje del Río de la Plata es un trabajo complejo debido a las características físicas y geográficas del río y su lecho. Tal es así, que las condiciones mediante las cuales se generan y propagan las olas dentro del río varían de acuerdo con el sector que se considere.' },
    { type: 'paragraph', text: 'En el Río de la Plata Medio y Superior, por tratarse básicamente de aguas confinadas, la generación de olas por vientos locales es en la práctica el mecanismo dominante, y dada la poca profundidad del río, no logran tomar gran altura.' },
    { type: 'paragraph', text: 'A su vez, las olas que llegan a las costas, rebotan en ella generando otra ola de menor altura, que se propaga nuevamente aguas adentro, con dirección cruzada a la del flujo de olas producidas por el viento.' },
    { type: 'paragraph', text: 'En el Río de la Plata Exterior, las olas oceánicas que llegan a su desembocadura se disipan rápidamente a medida que se propagan hacia el interior, también debido a las muy bajas profundidades del río.' },
    { type: 'paragraph', text: 'El efecto de ola cruzada también ocurre en este sector del río, pero generando olas de menor frecuencia.' },
    { type: 'subtitle', text: 'Predicción del Oleaje' },
    { type: 'subtitle', text: 'Pronóstico de oleaje del SHN' },
    { type: 'paragraph', text: 'Además de consultar el pronóstico meteorológico, es una buena práctica incorporar al planeamiento de la navegación el análisis del pronóstico de oleaje, ya que una situación de buen tiempo en una zona determinada no garantiza necesariamente que el oleaje presente condiciones favorables.' },
    { type: 'paragraph', text: 'Los servicios hidrográficos son los encargados de elaborar predicciones sobre la altura, el período y la dirección del oleaje en sus respectivas áreas de responsabilidad.' },
    { type: 'paragraph', text: 'Para ello se emplean distintos modelos matemáticos, todos ellos alimentados por las predicciones de viento de superficie, normalmente referidas a la cota estándar de 10 metros de altura, generadas por los sistemas de predicción meteorológica.' },
    { type: 'paragraph', text: 'El resultado de estos modelos se presenta habitualmente en tablas, gráficos o cartas, que indican la altura significativa de las olas, su período y su dirección de propagación.' },
  ],

  quiz: [
    {
      question: '¿Cuál es la principal causa del oleaje?',
      options: ['Los terremotos submarinos', 'El viento', 'Las mareas', 'La rotación terrestre'],
      correctAnswer: 1,
      explanation: 'El viento es la principal causa del oleaje. Su fricción sobre la superficie del agua produce el arrastre que genera las olas.'
    },
    {
      question: '¿Cómo se denomina la zona donde el viento comienza a generar oleaje?',
      options: ['Zona de disipación', 'Zona de rompiente', 'Zona generadora', 'Zona de resaca'],
      correctAnswer: 2,
      explanation: 'La zona donde el viento comienza a transferir energía al agua y a generar oleaje se denomina \'zona generadora\'.'
    },
    {
      question: '¿Qué es la \'Pororoca\'?',
      options: ['Un tipo de ola generada por tsunami', 'El oleaje producido por el choque entre una corriente fluvial y la marea oceánica', 'Una corriente marina fría', 'Un instrumento de medición de olas'],
      correctAnswer: 1,
      explanation: 'La Pororoca es un fenómeno en Brasil donde la marea entrante del Atlántico penetra en el estuario del Amazonas, produciendo ondas empinadas.'
    },
  ]
};
