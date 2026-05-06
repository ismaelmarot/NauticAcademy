import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'declinacion-magnetica',
  title: 'La declinación magnética y su cálculo',
  readingTime: 12,
  audioTime: '11:00',

  content: [
    { type: 'title', text: 'La Declinación Magnética y su Cálculo' },
    { type: 'paragraph', text: 'El compás magnético, como instrumento fundamental de la navegación, se orienta siguiendo el campo magnético terrestre, lo cual hace que la dirección que señala su fiel no coincida exactamente con el Norte verdadero —también denominado Norte geográfico—, sino con el Norte magnético, un punto que varía con el tiempo y con el lugar.' },
    { type: 'paragraph', text: 'Esta diferencia angular entre ambas direcciones recibe el nombre de declinación magnética.' },
    { type: 'paragraph', text: 'La declinación magnética no es un valor fijo: cambia según la ubicación del observador sobre la superficie terrestre y evoluciona lentamente a lo largo de los años por las variaciones del campo magnético del planeta. Conocerla y aplicarla correctamente es esencial para transformar los rumbos magnéticos en rumbos verdaderos, y viceversa, y así mantener la precisión en la navegación.' },
    { type: 'title', text: 'La Declinación Magnética' },
    { type: 'paragraph', text: 'El hecho de que los polos geográficos y magnéticos no coincidan hace que las direcciones de los respectivos Nortes —el geográfico verdadero y el magnético— sean diferentes, pues en cualquier lugar del planeta se tendrá siempre al compás o la brújula apuntando al Norte magnético mientras que el Norte verdadero estará en otra dirección distinta, existiendo entre las direcciones a uno y otro un ángulo denominado declinación magnética.' },
    { type: 'paragraph', text: 'De acuerdo con este razonamiento puede decirse que el ángulo de declinación magnética representa el desvío en las direcciones que marcan los compases y las brújulas, y que es la diferencia angular entre el Norte magnético al que apuntan estos instrumentos respecto del Norte verdadero.' },
    { type: 'list', items: [
      'Símbolo: Dm',
      'Es: ángulo horizontal',
      'Medido desde: Punto cardinal Norte, o Norte Verdadero',
      'En sentido: Este u Oeste',
      'Hasta: el Norte Magnético',
      'Valor: 000º a 180º, siendo por convención positiva al Este y negativa al Oeste'
    ]},
    { type: 'paragraph', text: 'El valor del ángulo de la declinación magnética será entonces el que exista entre el Norte verdadero y el Norte magnético. El valor de la declinación magnética se mide en grados, minutos y segundos, de 0º a 180º, y por convención es positiva cuando el Norte magnético está al Este del Norte verdadero y negativa en el caso contrario.' },
    { type: 'paragraph', text: 'Debe tenerse en cuenta, además, que la declinación magnética no es constante en todos los sitios, pues las líneas de flujo del campo magnético terrestre alteran su recorrido en función de diversos factores, donde uno de los más importantes es la composición de los elementos ferromagnéticos del suelo.' },
    { type: 'paragraph', text: 'Esas variaciones de la dirección del campo magnético pueden ser muy significativas en algunas regiones. Por ejemplo, la declinación en la zona del Río de la Plata, para el año 2017, era de 8º 52\' W —ocho grados y cincuenta y dos minutos al Oeste— mientras que para Ushuaia era de 12º 25\' E y para Ciudad del Cabo, en Sudáfrica, era de 25º 13\' W.' },
    { type: 'title', text: 'La Rosa de Declinación Magnética en las Cartas Náuticas' },
    { type: 'paragraph', text: 'Las cartas náuticas informan la declinación magnética de la zona a la que refieren apelando a una Rosa de los Vientos específica, consistente en un círculo graduado en 360º, dividido en cuatro sectores, y con una línea destacada que apunta al Norte verdadero o geográfico.' },
    { type: 'paragraph', text: 'La información relativa a la declinación magnética se indica en una Rosa más pequeña, superpuesta a la primera, también graduada en 360º, que apunta al Norte magnético.' },
    { type: 'paragraph', text: 'La línea que apunta al Norte magnético tendrá una leyenda indicando el valor de la declinación magnética para el año de publicación de la carta, y la variación anual de dicha declinación. Por ejemplo: "8º 40\' W 2016 (9\' W)".' },
    { type: 'paragraph', text: 'Esto significa que la declinación para el año 2016, que es el de publicación de la carta, es de 8º 40\' W —ocho grados y cuarenta minutos hacia el Oeste del Norte verdadero— y que varía 9\' W —nueve minutos de arco hacia el Oeste— cada año.' },
    { type: 'paragraph', text: 'Tenga en cuenta que esos 8º 40\' W es la Dm —declinación magnética— para el año 2016, y específicamente para el área cubierta por esa carta náutica. De acuerdo con lo explicado, la declinación magnética puede variar sensiblemente de un área a otra, e inclusive no es extraño que en cartas que cubren grandes áreas encuentre más de una Rosa con distinta declinación informada en cada una de ellas.' },
    { type: 'title', text: 'Procedimiento para Calcular la Declinación Magnética para un Mes y Año Dado' },
    { type: 'paragraph', text: 'Veamos cómo se resuelve la cuestión, paso a paso, planteando un caso de uso típico: asumir que estamos en el año 2025, y que deseamos averiguar cuál es la declinación magnética para el mes de julio de ese año.' },
    { type: 'paragraph', text: 'Paso 1 — Colectar los datos de trabajo: debemos recoger los datos de la declinación magnética indicada en la carta náutica de la zona donde vamos a operar. Por ejemplo: Dm: 8º 40\' W 2016 (9\' W).' },
    { type: 'paragraph', text: 'Paso 2 — Calcular la diferencia de años y meses a compensar: la información de declinación magnética indicada en las cartas náuticas refiere siempre —salvo que se indique lo contrario— al mes de enero de su año de publicación. Convertimos los meses a fracciones de año: año objetivo = 2025 + 6/12 = 2025,5. Diferencia de años = 2025,5 - 2016 = 9,5 años.' },
    { type: 'paragraph', text: 'Paso 3 — Calcular la diferencia Δ de Dm para el año y mes requerido: se multiplica la variación anual de declinación magnética informada en la carta por la diferencia de años. ΔDm = 9\' W x 9,5 años = -9\' x 9,5 = -85,5\' = -1º 25,5\'. El resultado es que la ΔDm entre la correspondiente al mes y año de la carta y el mes y año planteado es de -1º 25,5\' o lo que es lo mismo, 1º 25,5\' W.' },
    { type: 'paragraph', text: 'Paso 4 — Calcular la declinación magnética para la fecha objetivo: Dm julio 2025 = Dm carta + ΔDm = 8º 40\' W + -1º 25,5\' = -8º 40\' + -1º 25,5\' = -10º 5,5\'. El resultado es que la declinación magnética para julio de 2025 será de -10º 5,5\', o lo que es lo mismo, 10º 5,5\' W.' },
    { type: 'title', text: 'Consideraciones Prácticas' },
    { type: 'list', items: [
      'La declinación magnética resultante puede ser redondeada al valor de grado más cercano, ya que los compases magnéticos del barco generalmente solo permiten trabajar con valores enteros de grados',
      'En la práctica puede trabajarse corrigiendo simplemente por la diferencia de cantidad de años, redondeando al valor de grado más próximo, pues la diferencia en el resultado final es despreciable',
      'Dado que la Dm de un lugar varía con el tiempo, convendrá siempre trabajar con las cartas de edición más reciente',
      'Para evitar errores, siempre será más simple operar con valores decimales y sexagesimales con su signo, en lugar de hacerlo con valores cardinales'
    ]}
  ],

  quiz: [
    {
      question: '¿Qué es la declinación magnética?',
      options: ['La distancia entre los polos', 'El ángulo entre el Norte verdadero y el Norte magnético', 'La inclinación de la aguja del compás', 'La variación anual del campo magnético'],
      correctAnswer: 1,
      explanation: 'La declinación magnética es la diferencia angular entre el Norte verdadero (geográfico) y el Norte magnético al que apuntan los compases y brújulas.'
    },
    {
      question: '¿Qué indica "8º 40\' W 2016 (9\' W)" en la rosa de declinación de una carta?',
      options: ['La posición del barco en 2016', 'La Dm era 8º 40\' W en 2016 y varía 9\' W por año', 'La profundidad del área', 'La velocidad del viento'],
      correctAnswer: 1,
      explanation: 'Indica que la declinación magnética para el año 2016 era de 8º 40\' W y que varía 9 minutos de arco hacia el Oeste cada año.'
    },
    {
      question: '¿Por convención, cuándo es positiva la declinación magnética?',
      options: ['Cuando el Norte magnético está al Oeste del Norte verdadero', 'Cuando el Norte magnético está al Este del Norte verdadero', 'Siempre es positiva', 'Nunca es positiva'],
      correctAnswer: 1,
      explanation: 'Por convención, la declinación magnética es positiva cuando el Norte magnético está al Este del Norte verdadero y negativa en el caso contrario.'
    },
    {
      question: '¿Para qué mes del año refiere la declinación magnética indicada en las cartas náuticas?',
      options: ['Junio', 'Diciembre', 'Enero', 'El mes de publicación'],
      correctAnswer: 2,
      explanation: 'La información de declinación magnética indicada en las cartas náuticas refiere siempre —salvo que se indique lo contrario— al mes de enero de su año de publicación.'
    }
  ]
};
