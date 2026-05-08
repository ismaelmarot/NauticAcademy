import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'nav-costera',
  title: 'Métodos de posicionamiento en navegación costera',
  readingTime: 25,
  audioTime: '23:00',

  content: [
    { type: 'title', text: 'Métodos de Posicionamiento en Navegación Costera' },
    { type: 'paragraph', text: 'La navegación costera es aquella que se realiza con referencias visibles de la costa: faros, cerros, boyas, enfilaciones y otros puntos notables. Es el tipo de navegación más intuitivo y preciso, siempre que haya visibilidad y referencias identificables. Los métodos de posicionamiento costero se basan en obtener líneas de posición (LOP) y cruzarlas para fijar la posición del buque.' },
    { type: 'subtitle', text: 'Posición por dos demoras' },
    { type: 'paragraph', text: 'Es el método más básico de posicionamiento costero. Consiste en tomar la demora a dos objetos costeros identificables y trazar las líneas de posición sobre la carta:' },
    { type: 'list', items: [
      'Se identifican dos objetos costeros en la carta (faros, puntas, cerros)',
      'Se toma la demora a cada objeto con pínula, taxímetro o compás',
      'Se convierten las demoras a verdaderas (aplicando Vt)',
      'Se trazan las líneas de posición desde cada objeto en dirección inversa (demora ± 180°)',
      'El punto de intersección de ambas LOP es la posición del buque (fix)',
      'El ángulo ideal entre las dos demoras es cercano a 90° para mayor precisión',
      'Con ángulos muy pequeños (< 30°) o muy grandes (> 150°) la precisión disminuye notablemente'
    ]},
    { type: 'subtitle', text: 'Posición por tres o más demoras' },
    { type: 'paragraph', text: 'Cuando se toman tres o más demoras, la posición se obtiene con mayor confianza, ya que permite detectar errores:' },
    { type: 'list', items: [
      'Se toman demoras a tres o más objetos costeros',
      'Idealmente, los objetos deben estar separados entre 60° y 120°',
      'Las tres LOP raramente se cruzan en un punto exacto (forman un triángulo)',
      'El triángulo pequeño indica buena precisión; el centro se toma como fix',
      'Un triángulo grande indica error en alguna observación o identificación errónea del objeto',
      'Con cuatro o más demoras se puede identificar cuál observación es errónea'
    ]},
    { type: 'subtitle', text: 'Demoras sucesivas a un mismo punto (Método del arco capaz)' },
    { type: 'paragraph', text: 'Cuando solo se dispone de un objeto costero visible, se puede obtener una posición mediante demoras sucesivas:' },
    { type: 'list', items: [
      'Se toma una primera demora al objeto y se anota la hora',
      'Se navega un tiempo conocido a rumbo y velocidad constantes',
      'Se toma una segunda demora al mismo objeto y se anota la hora',
      'Se traslada la primera LOP la distancia navegada en la dirección del rumbo',
      'La intersección de la primera LOP trasladada con la segunda LOP da la posición',
      'Este método se conoce también como "running fix" o fix por traslado'
    ]},
    { type: 'subtitle', text: 'Posicionamiento por enfilación' },
    { type: 'paragraph', text: 'La enfilación es uno de los métodos más precisos de posicionamiento costero:' },
    { type: 'list', items: [
      'Cuando dos objetos se alinean visualmente, el buque está sobre la línea que los une',
      'La enfilación se traza directamente en la carta uniendo ambos objetos',
      'Se combina con otra LOP (demora, sonda, distancia) para obtener un fix',
      'Las enfilaciones marcadas en la carta (luces de enfilación) indican el eje del canal',
      'Es extremadamente precisa porque no depende de la medición de ángulos'
    ]},
    { type: 'subtitle', text: 'Posicionamiento por demoras y marcaciones' },
    { type: 'paragraph', text: 'Las demoras y marcaciones se usan indistintamente para obtener LOP, pero se calculan de forma diferente:' },
    { type: 'list', items: [
      'Demora: ángulo desde el norte al objeto (se mide directamente con pínula)',
      'Marcación: ángulo desde la proa al objeto (se convierte a demora: Demora = Rumbo + Marcación)',
      'Ambas se trazan como LOP en la carta',
      'Las demoras son preferibles porque no dependen del rumbo del buque',
      'Las marcaciones son útiles cuando la pínula no está disponible'
    ]},
    { type: 'subtitle', text: 'Posicionamiento por sondaje (batimetría)' },
    { type: 'paragraph', text: 'El sondaje puede usarse como línea de posición o como verificación de la posición estimada:' },
    { type: 'list', items: [
      'Se mide la profundidad con la ecosonda',
      'Se compara con las isóbatas de la carta',
      'Navegar sobre una isóbata conocida es una LOP (línea de posición por profundidad)',
      'La "línea de sondas": tomar varias sondas y comparar el perfil con la carta',
      'El tipo de fondo (arena, roca, fango) puede confirmarse con la sondaleza y compararse con la carta',
      'Es especialmente útil en condiciones de poca visibilidad o de noche'
    ]},
    { type: 'subtitle', text: 'El arco capaz (ángulo horizontal)' },
    { type: 'paragraph', text: 'El arco capaz es un método de posicionamiento que utiliza el ángulo horizontal entre dos objetos costeros:' },
    { type: 'list', items: [
      'Se mide el ángulo horizontal entre dos objetos con el sextante',
      'El buque se encuentra sobre un arco circular que pasa por ambos objetos',
      'Con un segundo ángulo horizontal (a otro par de objetos) se obtiene un fix',
      'Es un método preciso que no depende del compás ni del rumbo del buque',
      'Se construye gráficamente en la carta usando geometría del arco capaz',
      'El centro del arco se determina trazando perpendiculares a las cuerdas'
    ]},
    { type: 'subtitle', text: 'Abreviaturas de posición en la carta y bitácora' },
    { type: 'paragraph', text: 'En la navegación se utilizan abreviaturas estandarizadas para indicar el tipo de posición obtenida:' },
    { type: 'list', items: [
      'GPS/Fix: posición obtenida por GPS o fix por cruce de LOP (círculo)',
      'LOP: línea de posición individual (segmento de línea)',
      'DR/Est: posición estimada (dead reckoning), marcada con un triángulo',
      'Rdr: posición por radar',
      'Cel: posición por navegación celestial/astronómica',
      'EP: estimated position — posición estimada corregida por efectos conocidos de corriente y viento',
      'Cada tipo de posición se simboliza de forma diferente en la carta para claridad'
    ]},
    { type: 'paragraph', text: 'La navegación costera combina estos métodos según las circunstancias. Un navegante experimentado sabe cuál método es más preciso en cada situación y siempre cruza información de múltiples fuentes para confirmar su posición.' }
  ],

  quiz: [
    {
      question: '¿Cuál es el ángulo ideal entre dos demoras para obtener la mejor precisión?',
      options: ['10°', '90°', '170°', '45°'],
      correctAnswer: 1,
      explanation: 'El ángulo ideal entre dos demoras es cercano a 90°. Con ángulos muy pequeños (< 30°) o muy grandes (> 150°), las líneas de posición se cortan de forma tangencial y la precisión disminuye notablemente.'
    },
    {
      question: '¿Qué es un "running fix" o fix por traslado?',
      options: ['Una posición por GPS en movimiento', 'Una posición obtenida trasladando una LOP por la distancia navegada entre dos observaciones', 'Un fix con tres demoras', 'Una posición estimada'],
      correctAnswer: 1,
      explanation: 'El running fix se obtiene tomando una demora, navegando un tiempo, tomando otra demora al mismo objeto, y trasladando la primera LOP la distancia navegada. La intersección con la segunda LOP da la posición.'
    },
    {
      question: '¿Por qué la enfilación es tan precisa como LOP?',
      options: ['Porque usa GPS', 'Porque no depende de la medición de ángulos, solo de la alineación visual', 'Porque usa el radar', 'Porque se mide con sextante'],
      correctAnswer: 1,
      explanation: 'La enfilación es extremadamente precisa porque se basa en la alineación visual de dos objetos. No requiere medir ángulos ni aplicar correcciones de compás.'
    },
    {
      question: '¿Qué símbolo se usa en la carta para una posición estimada (DR)?',
      options: ['Un círculo', 'Un cuadrado', 'Un triángulo', 'Una cruz'],
      correctAnswer: 2,
      explanation: 'La posición estimada (dead reckoning / DR) se marca en la carta con un triángulo. El fix por observación se marca con un círculo.'
    }
  ]
};
