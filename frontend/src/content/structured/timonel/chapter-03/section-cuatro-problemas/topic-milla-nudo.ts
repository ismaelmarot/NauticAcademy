import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'milla-nudo',
  title: 'La milla marina y el Nudo',
  readingTime: 12,
  audioTime: '11:00',

  content: [
    { type: 'title', text: 'La Milla Marina y el Nudo' },
    { type: 'paragraph', text: 'Para poder navegar con precisión, es imprescindible dominar las unidades de medida propias de la navegación. La milla marina y el nudo son las unidades fundamentales de distancia y velocidad en el mar, y su comprensión es la base para todos los cálculos de navegación.' },
    { type: 'subtitle', text: 'La Milla Marina (Milla Náutica)' },
    { type: 'list', items: [
      'Definición: es la longitud de un minuto de arco de meridiano terrestre (1\' de latitud)',
      'Equivalencia: 1 milla marina = 1.852 metros (estandarizada internacionalmente)',
      'Símbolo: M (a veces "nm" por nautical mile en inglés)',
      'Se mide sobre la escala de latitud de la carta náutica, nunca sobre la de longitud',
      'Como la Tierra no es una esfera perfecta, la longitud real de un minuto de meridiano varía ligeramente con la latitud, pero se usa el valor promedio de 1.852 m'
    ]},
    { type: 'paragraph', text: 'La milla marina es la unidad de distancia universal en la navegación. En la carta náutica, las distancias se miden siempre sobre la escala de latitud lateral, ya que un minuto de latitud equivale a una milla marina en cualquier punto del globo. Esto no ocurre con la longitud, ya que la separación entre meridianos disminuye al acercarse a los polos.' },
    { type: 'subtitle', text: 'El Cable' },
    { type: 'list', items: [
      'Definición: la décima parte de una milla marina',
      'Equivalencia: 1 cable = 185,2 metros',
      'Se usa para distancias cortas, especialmente en navegación costera y maniobras de puerto',
      'También se usa para expresar la profundidad del mar y la visibilidad'
    ]},
    { type: 'paragraph', text: 'El cable es una unidad práctica para distancias cortas. Por ejemplo, cuando se dice que un faro está a 5 cables de distancia, significa que está a 0,5 millas marinas (926 metros). Es especialmente útil en maniobras portuarias y en la navegación cerca de la costa.' },
    { type: 'subtitle', text: 'El Nudo' },
    { type: 'list', items: [
      'Definición: una milla marina por hora',
      'Equivalencia: 1 nudo = 1,852 km/h = 0,514 m/s',
      'Símbolo: kn (del inglés "knot")',
      'Es la unidad de velocidad usada en navegación marítima y aeronáutica',
      'NUNCA se dice "nudos por hora" — el nudo ya es una velocidad (millas por hora)'
    ]},
    { type: 'paragraph', text: 'El nudo es la unidad de velocidad fundamental en el mar. Cuando un buque navega a 10 nudos, significa que recorre 10 millas marinas en una hora, es decir, 18.520 metros por hora. Es un error muy común decir "nudos por hora"; lo correcto es simplemente "nudos".' },
    { type: 'subtitle', text: 'Historia de la corredera (log line)' },
    { type: 'paragraph', text: 'La palabra "nudo" proviene del antiguo método de medición de velocidad a bordo de los veleros, llamado la corredera de barquilla. Este rudimentario pero ingenioso instrumento consistía en:' },
    { type: 'list', items: [
      'Un trozo de madera en forma de cuarto de círculo (barquilla) lastrado para mantenerse vertical en el agua',
      'Una cuerda (la línea de la corredera) con nudos equidistantes',
      'Los nudos estaban separados por la distancia que el barco recorría en un intervalo de tiempo fijo',
      'Se lanzaba la barquilla al agua por la popa y se dejaba correr la cuerda',
      'Se contaban los nudos que pasaban por los dedos durante un tiempo medido con un ampolla de arena (generalmente 28 segundos)',
      'El número de nudos contados equivalía a la velocidad del buque en millas por hora',
      'De aquí proviene la expresión "navegar a X nudos"'
    ]},
    { type: 'paragraph', text: 'Aunque hoy en día la velocidad se mide con correderas electrónicas, pitot o GPS, la terminología ha perdurado y el nudo sigue siendo la unidad universal de velocidad en el mar.' },
    { type: 'subtitle', text: 'Cómo medir y trazar distancias en la carta náutica' },
    { type: 'paragraph', text: 'Para medir distancias sobre la carta náutica se sigue un procedimiento sencillo:' },
    { type: 'list', items: [
      'Se abre el compás de puntas secas entre los dos puntos de interés',
      'Se traslada el compás a la escala de latitud (escala vertical en la carta)',
      'Se lee la cantidad de minutos de latitud que abarca la apertura del compás',
      'Cada minuto equivale a una milla marina',
      'Para distancias mayores, se pueden dar "pasos" con el compás, contando cuántas veces cabe una abertura fija en la distancia',
      'Para trazar una distancia conocida desde un punto, se ajusta el compás en la escala de latitud a la distancia deseada y se marca sobre la carta'
    ]},
    { type: 'paragraph', text: 'Recordar: siempre se mide sobre la escala de latitud, y a la altura de la latitud media de la zona de navegación, para mayor precisión.' }
  ],

  quiz: [
    {
      question: '¿Cuántos metros equivale una milla marina?',
      options: ['1.000 metros', '1.609 metros', '1.852 metros', '2.000 metros'],
      correctAnswer: 2,
      explanation: 'Una milla marina equivale a 1.852 metros, que es la longitud promedio de un minuto de arco de meridiano terrestre.'
    },
    {
      question: '¿Qué es un cable en navegación?',
      options: ['Una milla marina completa', 'La décima parte de una milla marina (185,2 m)', 'Cien metros', 'Diez millas marinas'],
      correctAnswer: 1,
      explanation: 'El cable es la décima parte de una milla marina, equivalente a 185,2 metros. Se usa para distancias cortas en navegación costera.'
    },
    {
      question: '¿Por qué se llama "nudo" a la unidad de velocidad en el mar?',
      options: ['Porque el barco hace nudos en el agua', 'Por el antiguo método de la corredera con nudos en la cuerda', 'Porque los marineros hacían nudos para celebrar', 'Por la forma del instrumento de medición'],
      correctAnswer: 1,
      explanation: 'El nombre proviene de la corredera de barquilla, un antiguo instrumento que medía la velocidad contando los nudos de una cuerda que pasaban durante un tiempo fijo medido con una ampolla de arena.'
    },
    {
      question: '¿Sobre qué escala de la carta náutica se deben medir las distancias?',
      options: ['Sobre la escala de longitud', 'Sobre la escala de latitud', 'Sobre la rosa de los vientos', 'Sobre cualquier escala, es lo mismo'],
      correctAnswer: 1,
      explanation: 'Las distancias se miden siempre sobre la escala de latitud porque un minuto de latitud equivale a una milla marina en cualquier punto del globo. La escala de longitud no sirve porque la distancia entre meridianos varía con la latitud.'
    }
  ]
};
