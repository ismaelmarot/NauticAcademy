import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'desvio-compas',
  title: 'El desvío del compás, su estima y cálculo',
  readingTime: 6,
  audioTime: '05:00',

  content: [
    { type: 'title', text: 'El Desvío del Compás, su Estima y Cálculo' },
    { type: 'paragraph', text: 'En todas las embarcaciones existen elementos metálicos o con propiedades magnéticas —como una caja de herramientas, los parlantes de los equipos de audio o el propio motor— que influyen en el campo magnético del compás, desviando su orientación hacia uno u otro lado del Norte magnético, que es la dirección a la que debería apuntar.' },
    { type: 'paragraph', text: 'En los barcos construidos en acero este efecto suele ser aún más notable, ya que el casco mismo actúa como una gran masa metálica que altera el campo magnético local.' },
    { type: 'paragraph', text: 'Estos desvíos del compás deben ser medidos y registrados, ya que junto con la declinación magnética influyen directamente en la exactitud de la navegación, sea en su gobierno, operando con el compás del barco, o en las tareas de ploteo de la derrota, al utilizar la pínula o compás de mano.' },
    { type: 'paragraph', text: 'Es fundamental tenerlos en cuenta al realizar los cálculos de rumbos y marcaciones, pues afectan su conversión a valores verdaderos, y viceversa.' },
    { type: 'title', text: 'Definición del Desvío del Compás' },
    { type: 'paragraph', text: 'En los cálculos, al desvío del compás se lo indica con la letra griega "δ" —delta minúscula—.' },
    { type: 'list', items: [
      'Símbolo: δ (letra griega delta minúscula)',
      'Es: ángulo horizontal',
      'Medido desde: Norte magnético',
      'En sentido: Este u Oeste',
      'Hasta: línea de crujía',
      'Valor: 0º a 180º siendo por convención positiva al Este y negativa al Oeste'
    ]},
    { type: 'paragraph', text: 'El desvío del compás es un ángulo horizontal, que se mide desde el Norte magnético hacia la línea de crujía o el Norte que marca el compás, tomando valores de 0º a 180º, con signo positivo o negativo dependiendo de si el desvío ocurre al Este u Oeste del Norte verdadero respectivamente.' },
    { type: 'title', text: 'Cómo Estimar el Desvío del Compás' },
    { type: 'paragraph', text: 'En embarcaciones pequeñas, de tipo deportivas o recreativas, en las que no se dispone habitualmente de instrumentos de compensación ni se requiere una precisión tan rigurosa como en los buques que responden a estándares comerciales, se utiliza un procedimiento simplificado —pero igualmente eficiente— para estimar el desvío del compás.' },
    { type: 'paragraph', text: 'El proceso se resuelve durante una navegación que, idealmente, debe realizarse en aguas abiertas para asegurarse que están libres de interferencias magnéticas externas como las que se encontrarían cerca de las costas, tales como muelles metálicos, líneas eléctricas, u otras embarcaciones próximas.' },
    { type: 'paragraph', text: 'El método consiste en navegar sobre una referencia de la cual se conozca a ciencia cierta sus rumbos verdaderos, como por ejemplo una enfilación que esté marcada en la carta, líneas de rumbos entre dos puntos notables fijos —como torres o edificios— o una ruta definida por GPS.' },
    { type: 'paragraph', text: 'En ese proceso se debe recorrer esa ruta en una dirección y luego en la contraria, tomando nota en ambos casos de los rumbos verdaderos y de compás a los que se ha navegado. Luego, si fuera posible, debe repetirse el mismo proceso navegando en rumbos verdaderos perpendiculares a los anteriores.' },
    { type: 'paragraph', text: 'Terminado el proceso, se tendrá una lista de cuatro pares de valores, compuestos por un rumbo verdadero asociado a un rumbo de compás.' },
    { type: 'paragraph', text: 'Luego, despejando el desvío del compás "δ" de la igualdad fundamental que relaciona el mundo verdadero con el mundo magnético: Rv = Rc + Dm + δ, obtenemos la fórmula: δ = Rv - Rc - Dm.' },
    { type: 'title', text: 'Ejemplo de Cálculo del Desvío' },
    { type: 'paragraph', text: 'Supongamos que se va a navegar dos enfilaciones; una en sentido 100°-280° y la otra en sentido 010°-190°, en una zona donde la declinación magnética —Dm— es de -10°.' },
    { type: 'paragraph', text: 'Paso 1 — Colectar datos: navegar las dos enfilaciones, en un sentido y luego en el inverso, anotando para cada uno la lectura de rumbo compás. Por ejemplo: lectura 1: Rv 000º → Rc 011º; lectura 2: Rv 180º → Rc 191º; lectura 3: Rv 090º → Rc 100º; lectura 4: Rv 270º → Rc 281º.' },
    { type: 'paragraph', text: 'Paso 2 — Resolver el cálculo de los desvíos: aplicando la fórmula δ = Rv - Rc - Dm para cada lectura con Dm = -10º: lectura 1: δ = 000º - 011º - (-10º) = -1º; lectura 2: δ = 180º - 191º - (-10º) = -1º; lectura 3: δ = 090º - 100º - (-10º) = 0º; lectura 4: δ = 270º - 281º - (-10º) = -1º.' },
    { type: 'paragraph', text: 'Paso 3 — Calcular el desvío del compás: el proceso formal consiste en calcular el promedio de esos desvíos: δ = (-1º + -1º + 0º + -1º) / 4 = -3º / 4 = -0,75º ≈ -1º (redondeado al valor absoluto más próximo). El resultado es que el desvío del barco es de -1º, o lo que es lo mismo, 1ºW.' },
    { type: 'title', text: 'Método Alternativo Simplificado' },
    { type: 'paragraph', text: 'Un método más simple requiere una aplicación de navegación o GPS, como la mayoría de las disponibles para smartphones o tablets. Con la aplicación instalada, configúrela para que le muestre el rumbo magnético al que estará navegando, y salga al agua.' },
    { type: 'paragraph', text: 'Ya navegando, compare el rumbo magnético que le informa la aplicación con el que le muestra el compás del barco. La diferencia que exista entre uno y otro será el desvío del compás.' },
    { type: 'title', text: 'Comentarios y Buenas Prácticas' },
    { type: 'list', items: [
      'Es esperable que un compás tenga un leve desvío, incluso luego de haber sido compensado. Lo importante es que el desvío sea pequeño, estable y conocido',
      'En una embarcación deportiva o recreativa, un compás en buen estado y correctamente instalado puede presentar un desvío aceptable de hasta 2º a un lado u otro del Norte magnético',
      'Si el desvío es mayor a 5º, conviene revisar la instalación en búsqueda de elementos que estén interfiriendo el campo magnético del compás',
      'La declinación magnética tiene un valor negativo en muchas zonas del hemisferio sur, por eso se la anota con su signo. Recuerde que la resta de un término negativo resulta en un valor que termina sumándose'
    ]}
  ],

  quiz: [
    {
      question: '¿Con qué letra griega se indica el desvío del compás?',
      options: ['φ (phi)', 'δ (delta minúscula)', 'ω (omega)', 'Δ (delta mayúscula)'],
      correctAnswer: 1,
      explanation: 'El desvío del compás se indica con la letra griega δ (delta minúscula).'
    },
    {
      question: '¿Cuál es la fórmula para calcular el desvío del compás?',
      options: ['δ = Rv + Rc + Dm', 'δ = Rv - Rc - Dm', 'δ = Rc - Rv + Dm', 'δ = Dm - Rv + Rc'],
      correctAnswer: 1,
      explanation: 'Despejando de la ecuación fundamental Rv = Rc + Dm + δ, obtenemos: δ = Rv - Rc - Dm.'
    },
    {
      question: '¿Cuál es el desvío aceptable para un compás en una embarcación deportiva?',
      options: ['Hasta 0º', 'Hasta 2º', 'Hasta 10º', 'Hasta 15º'],
      correctAnswer: 1,
      explanation: 'En una embarcación deportiva o recreativa, un compás en buen estado y correctamente instalado puede presentar un desvío aceptable de hasta 2º a un lado u otro del Norte magnético.'
    },
    {
      question: '¿Qué se debe hacer si el desvío del compás es mayor a 5º?',
      options: ['Ignorarlo', 'Ajustar la velocidad', 'Revisar la instalación buscando interferencias magnéticas', 'Cambiar de carta náutica'],
      correctAnswer: 2,
      explanation: 'Si el desvío es mayor a 5º, conviene revisar la instalación en búsqueda de elementos que estén interfiriendo el campo magnético del compás.'
    }
  ]
};
