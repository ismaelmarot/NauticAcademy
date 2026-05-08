import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'varaduras',
  title: 'Varaduras',
  readingTime: 5,

  content: [
    { type: 'title', text: 'Control de Averías: Varaduras' },
    { type: 'subtitle', text: 'Introducción' },
    { type: 'paragraph', text: 'Se denomina varadura a la situación en la que una embarcación queda apoyada total o parcialmente sobre el fondo, ya sea de manera voluntaria o involuntaria, quedando impedida de navegar.' },
    { type: 'subtitle', text: 'Varadura.' },
    { type: 'paragraph', text: 'Para curiosos...' },
    { type: 'paragraph', text: 'Efectivamente, existen otros lugares del mundo donde los navegantes deben estar permanentemente atentos a la altura de la marea y a la información que marca la ecosonda, ya que la escasa profundidad es una condición habitual y no una situación excepcional.' },
    { type: 'paragraph', text: 'Velero de quillote doble.' },
    { type: 'paragraph', text: 'Por ejemplo, en el Mar del Norte, las zonas costeras de los Países Bajos, Alemania, Dinamarca e Inglaterra se caracterizan por presentar extensas áreas de aguas someras y mareas de gran amplitud, lo que hace que el riesgo de quedar varado sea permanente. En estas regiones incluso se diseñan embarcaciones específicas, como los veleros de quillote doble, pensados para poder quedar apoyados sobre el fondo en posición vertical durante la bajamar.' },
    { type: 'paragraph', text: 'De manera similar, las costas de Finlandia y Suecia en el Golfo de Botnia, en el Mar Báltico, así como la Bahía de Chesapeake y el Delta del Mississippi en los Estados Unidos de América, presentan amplias zonas de poca profundidad, donde la navegación deportiva se desarrolla en condiciones muy similares a las que enfrentan habitualmente los navegantes del Río de la Plata.' },
    { type: 'subtitle', text: 'Prevención' },
    { type: 'paragraph', text: 'Toda varadura implica riesgos para la estructura de la embarcación, por lo que debe ser evitada en la medida de lo posible.' },
    { type: 'paragraph', text: 'En la navegación deportiva, las varaduras suelen estar asociadas a errores de navegación, lectura incorrecta de las cartas náuticas, desconocimiento de la zona, fallas en la planificación de la derrota o variaciones imprevistas del nivel del agua en ríos y estuarios, producidas por cambios no revisados en las condiciones meteorológicas.' },
    { type: 'paragraph', text: 'Las varaduras pueden producirse sobre fondos de arena, barro, grava, roca o coral, y su gravedad dependerá tanto de la naturaleza del fondo como de las condiciones ambientales y del estado de la embarcación. Evidentemente, el riesgo no será el mismo si el barco toca fondo navegando sobre un lecho de barro o arena fina a baja velocidad, que si encalla sobre un arrecife de coral o una restinga rocosa corriendo a 18 nudos.' },
    { type: 'subtitle', text: 'Varadura increíblemente grave.' },
    { type: 'paragraph', text: 'Luego, cuando planifique una navegación hacia un destino desconocido, tómese el tiempo necesario para actualizar las cartas náuticas de la zona, consultar derroteros y a otros navegantes, y definir una ruta segura en función del calado de su embarcación y del margen de seguridad requerido. Considere también las mareas del lugar y comprenda cómo estas pueden afectar su derrota y las zonas donde eventualmente podría fondear.' },
    { type: 'subtitle', text: 'Control de Daños' },
    { type: 'paragraph', text: 'Si la varadura fuese más severa, amenazando con extenderse en el tiempo, será momento entonces de comenzar a evaluar otras tácticas en función de las condiciones del suelo, la marea y la meteorología.' },
    { type: 'paragraph', text: 'Escorar el velero.' },
    { type: 'paragraph', text: 'En aguas someras, la siguiente opción lógica en veleros será la de escorar la embarcación al máximo, llevando toda la tripulación a la banda de sotavento, dejando solo al timonel dentro del cockpit a cargo del timón y el motor. Para aumentar aún más la escora, podrá sentar algún tripulante en la botavara, sacándola luego hacia afuera del barco hasta que quede perpendicular a la línea de crujía.' },
    { type: 'paragraph', text: 'Si la marea bajase al punto de obligar al barco a quedar recostado en el fondo, deberá tratarse de prevenir daños en el casco y prestarse atención al momento en el que el agua comience a subir nuevamente para soltarlo del suelo. Si no se hiciera esto, el golpe de las olas terminará agravando la varadura, enterrando el barco aún más en el lecho si es blando al mismo tiempo que va inundando su interior, y todo podría finalizar con el barco hundido cuando la marea llegue a la pleamar.' },
    { type: 'paragraph', text: '¿Alguna vez se quedó parado en la orilla del mar?' },
    { type: 'paragraph', text: '¿Notó cómo los pies se van enterrando en la arena a medida que van y vienen las olita' },
    { type: 'paragraph', text: 'Barco hundido en la arena.' },
    { type: 'paragraph', text: 'Bueno... eso sucede porque al licuarse el suelo bajo sus pies con cada pasada de las olas, su peso empuja hacia abajo cayendo lenta pero constantemente en esas arenas movedizas.' },
    { type: 'paragraph', text: 'Si luego de cavar la zanja le quedase tiempo, continúe extendiéndola hacia aguas navegables buscando crear un camino de salida de la varadura.' },
    { type: 'paragraph', text: 'Anclado para salir de la varadura.' },
    { type: 'paragraph', text: 'Esto es muy importante hacerlo cuando se trate de zonas rocosas, pues en caso de varar en ellas, el barco estará sujeto a un serio riesgo de sufrir roturas y daños mayores, producidos por el oleaje que lo empujará contra las piedras.' },
    { type: 'paragraph', text: 'En cualquier caso, luego de una varadura será conveniente realizar una revisión de la estructura del barco, especialmente en la obra viva, para verificar que no ha sufrido daños, y si los tuviese, efectuar las reparaciones necesarias.' },
    { type: 'paragraph', text: 'Cabuyería: Tipos de cabos y su aplicación.' },
    { type: 'paragraph', text: 'Técnicas de Fondeo.' },
  ],

  quiz: [
    {
      question: '¿Qué es una varadura?',
      options: ['El barco choca contra otro barco', 'El barco queda accidentalmente varado en fondo marino o fluvial', 'El barco se queda sin combustible', 'El barco pierde el timón'],
      correctAnswer: 1,
      explanation: 'Una varadura ocurre cuando la embarcación toca fondo o queda accidentalmente varada en fondo marino, fluvial o lacustre.'
    },
    {
      question: '¿Cuál es la primera acción ante una varadura?',
      options: ['Dar marcha atrás a toda potencia', 'Detener la marcha y evaluar la situación', 'Saltar al agua para empujar', 'Llamar a un remolcador'],
      correctAnswer: 1,
      explanation: 'Lo primero es detener la marcha para evitar empeorar la situación y evaluar el estado del casco y las condiciones circundantes.'
    },
  ]
};