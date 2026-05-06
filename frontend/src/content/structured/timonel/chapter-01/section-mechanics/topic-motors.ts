import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'motors',
  title: 'Los Motores',
  readingTime: 23,
  audioTime: '21:30',

  content: [
    { type: 'title', text: 'Sistemas de Propulsión' },
    { type: 'paragraph', text: 'Actualmente existen varios métodos para producir la energía mecánica que permite propulsar una embarcación.' },
    { type: 'paragraph', text: 'Uno de ellos es el vapor de agua, donde la presión se utiliza para mover turbinas o pistones. El vapor es generado en calderas de combustión externa. Históricamente se usaba madera y carbón, ahora combustibles derivados del petróleo y vegetales. Los rompehielos, submarinos y portaviones nucleares utilizan turbinas de vapor con reactores nucleares.' },
    { type: 'paragraph', text: 'Otro método son los motores de combustión interna, también conocidos como motores a explosión o motores de pistón. El combustible se quema dentro del motor en una reacción explosiva que mueve pistones, haciendo girar un eje vinculado a la hélice.' },
    { type: 'paragraph', text: 'Mediados de la década del 2020 han comenzado a aparecer motores eléctricos, que toman energía desde bancos de baterías.' },

    { type: 'title', text: 'Tipos de Motores' },
    { type: 'paragraph', text: 'La forma más simple de clasificar a los motores es según el tipo de combustible. Los más comunes son los motores nafteros (nafta) y gasoleros (diésel). Estos pueden ser de dos tiempos o de cuatro tiempos.' },
    { type: 'paragraph', text: 'El tiempo define cada movimiento de recorrido (carrera) que el pistón realiza dentro del cilindro. Un motor de dos tiempos completa el ciclo en dos carreras, mientras que el de cuatro tiempos necesita el doble.' },

    { type: 'title', text: 'Ciclo de Trabajo de un Motor a Nafta de Cuatro Tiempos' },
    { type: 'paragraph', text: 'En los motores de cuatro tiempos, cada pistón efectúa cuatro carreras dentro del cilindro, mientras el cigüeñal da dos revoluciones para completar un ciclo.' },
    { type: 'paragraph', text: 'Admisión: El pistón baja, se abre la válvula de admisión y entra la mezcla de nafta y aire. El ciclo se completa cuando el pistón llega al punto muerto inferior.' },
    { type: 'paragraph', text: 'Compresión: Con la válvula cerrada, el pistón sube comprimiendo la mezcla. Al llegar al punto máximo superior está lista para producir trabajo.' },
    { type: 'paragraph', text: 'Expansión: Con las válvulas cerradas, la bujía provoca una chispa que hace explotar la mezcla. Los gases empujan el pistón hacia abajo, trasladando el movimiento a la biela, luego al cigüeñal y al eje de salida.' },
    { type: 'paragraph', text: 'Escape: El pistón sube comprimiendo los gases resultantes que salen por la válvula de escape hacia el múltiple.' },
    { type: 'paragraph', text: 'Solo el ciclo de expansión aporta energía motriz. El rendimiento máximo es de aproximadamente 27%, lo que significa que solo esa proporción de la energía de la explosión se traduce en fuerza motriz.' },

    { type: 'title', text: 'Ciclo de Trabajo de un Motor Diésel de Cuatro Tiempos' },
    { type: 'paragraph', text: 'Los ciclos son exactamente los mismos que los nafteros. Las diferencias están en el fluido combustible, cómo ingresa al cilindro y el método de encendido.' },
    { type: 'paragraph', text: 'Admisión: Solo ingresa aire filtrado. El combustible diésel se incorpora por un inyector en la siguiente carrera.' },
    { type: 'paragraph', text: 'Compresión: El pistón comprime el aire, incrementando su temperatura. Al llegar al punto límite superior, el inyector permite el ingreso de diésel, que se enciende automáticamente por la alta temperatura (sin chispa eléctrica).' },
    { type: 'paragraph', text: 'Expansión: El pistón retrocede empujado por la explosión, transmitiendo la fuerza al cigüeñal y al eje de transmisión.' },
    { type: 'paragraph', text: 'Escape: El pistón comprime y expulsa los gases por la válvula de escape.' },
    { type: 'paragraph', text: 'El rendimiento de un motor diésel es de aproximadamente 35%. Cuentan con bomba de inyección para regular el caudal y elevar la presión, e inyector que vaporiza el combustible en forma de aerosol.' },

    { type: 'title', text: 'Ciclo de Trabajo de un Motor a Nafta de Dos Tiempos' },
    { type: 'paragraph', text: 'Los motores de dos tiempos realizan las cuatro etapas en dos carreras del pistón. No tienen válvulas, usan lumbreras.' },
    { type: 'paragraph', text: 'Admisión y Compresión: En la carrera de ascenso se crea vacío en el carter que induce la entrada de mezcla (nafta, aire y aceite). El pistón bloquea la lumbrera de escape y comprime el combustible hasta el punto máximo superior.' },
    { type: 'paragraph', text: 'Expansión y Escape: La bujía provoca la explosión, el pistón desciende dejando libre la lumbrera de escape y comprimiendo la nueva mezcla en el carter, empujándola hacia el cilindro. La entrada de mezcla desplaza los gases de combustión que salen por la lumbrera de escape.' },
    { type: 'paragraph', text: 'El aceite lubricante debe agregarse a la mezcla ya que no tienen carter con lubricante (motores de carter seco). Por cada giro del cigüeñal se cumple un ciclo completo.' },

    { type: 'title', text: 'Diferencias entre un Motor Diésel y uno de Nafta' },
    { type: 'paragraph', text: 'Los motores nafteros tienen una relación de compresión de 1:10 y operan a ~300º C. Los diésel trabajan a 1:22 y alcanzan 500º C a 600º C.' },
    { type: 'paragraph', text: 'En los nafteros el encendido es por chispa eléctrica (bujía) y necesitan batería. En los diésel el encendido es por alta temperatura al comprimir el aire. La mezcla en nafteros se produce en el carburador, en diésel ocurre directamente en el cilindro mediante el inyector.' },

    { type: 'title', text: 'Potencia' },
    { type: 'paragraph', text: 'La potencia se expresa en HP (horse power). La potencia bruta es la fuerza máxima a máximas revoluciones, sin considerar pérdidas en la transmisión.' },
    { type: 'paragraph', text: 'La potencia neta o en el eje considera estas pérdidas y será entre 10% a 15% menor que la bruta. Un motor de 100 HP bruta tendrá entre 85 y 90 HP neta.' },

    { type: 'title', text: 'Sistema de Refrigeración' },
    { type: 'paragraph', text: 'La función es enfriar y mantener estable la temperatura de los componentes. Los motores operan a ~300º C (nafteros) y 500-600º C (gasoleros). Sin refrigeración, los metales se ablandarían y el motor se fundiría.' },
    { type: 'paragraph', text: 'Circuito Cerrado: Sistema indirecto con circuito interno (agua tratada o líquido refrigerante) y circuito externo (agua del mar o río). Requiere dos bombas, aísla al motor de la corrosión, mantiene temperatura constante (~45º C entrada, ~70º C salida).' },
    { type: 'paragraph', text: 'Circuito Abierto: El agua que enfría es tomada directamente del medio. Solo requiere una bomba. Se usa en motores fuera de borda pequeños y motores internos de baja complejidad.' },

    { type: 'title', text: 'Motores Internos y Fuera de Borda' },
    { type: 'paragraph', text: 'Los motores internos son adecuados para barcos de esloras importantes, permiten montar alternadores para baterías, compresores de aire acondicionado o heladeras.' },
    { type: 'paragraph', text: 'Los motores fuera de borda integran motor, transmisión y hélice en un solo equipo. Son más compactos, ideales para barcos sin espacio para motor interno. Generalmente son nafteros de 2 o 4 tiempos, más livianos y de fácil mantenimiento. Tienen patas largas para llevar la hélice a la profundidad compatible con el calado del velero.' },
    { type: 'paragraph', text: 'La normativa ambiental impide el uso de motores de dos tiempos en aguas protegidas por contaminación. Los modelos pequeños pueden arrancar manualmente (cordel) y no requieren baterías para las bujías.' },

    { type: 'title', text: 'Motores Eléctricos' },
    { type: 'paragraph', text: 'Utilizan energía eléctrica de bancos de baterías recargadas por paneles solares, generadores eólicos o hidráulicos.' },
    { type: 'paragraph', text: 'Ventajas: Ecológicos (no consumen combustibles contaminantes), mantenimiento mínimo (pocas partes móviles), no usan cajas de cambio (torque directo), ocupan menos espacio, son silenciosos.' },
    { type: 'paragraph', text: 'Desventajas: Autonomía limitada por capacidad de baterías y régimen de uso, recarga lenta (varias horas), costo inicial elevado, las baterías añaden peso y tienen vida útil limitada. La infraestructura eléctrica en puertos no siempre está disponible para travesías largas.' }
  ],

  quiz: [
    {
      question: '¿Cuál es el rendimiento máximo de un motor naftero de 4 tiempos?',
      options: ['15%', '27%', '35%', '50%'],
      correctAnswer: 1,
      explanation: 'El rendimiento máximo de un motor naftero de 4 tiempos es de aproximadamente 27%, lo que significa que solo esa proporción de la energía se traduce en fuerza motriz.'
    },
    {
      question: '¿Cómo se enciende la mezcla en un motor diésel?',
      options: ['Por chispa eléctrica de bujía', 'Por alta temperatura al comprimir el aire', 'Por una vela incandescente', 'Por un carburador'],
      correctAnswer: 1,
      explanation: 'En los motores diésel el encendido ocurre automáticamente por la alta temperatura reinante dentro del cilindro cuando el aire comprimido alcanza los 500-600º C.'
    },
    {
      question: '¿Qué tipo de motor utiliza lumbreras en lugar de válvulas?',
      options: ['Motor diésel de 4 tiempos', 'Motor naftero de 4 tiempos', 'Motor naftero de 2 tiempos', 'Motor eléctrico'],
      correctAnswer: 2,
      explanation: 'Los motores de dos tiempos no cuentan con válvulas de admisión o escape, usan lumbreras para la entrada y salida de gases.'
    },
    {
      question: '¿Qué porcentaje de la potencia bruta representa la potencia neta?',
      options: ['85% a 90%', '50% a 60%', '95% a 100%', '70% a 75%'],
      correctAnswer: 0,
      explanation: 'La potencia neta o en el eje es entre 10% a 15% menor que la potencia bruta, representando entre el 85% y 90% de ésta.'
    },
    {
      question: '¿Cuál es la principal ventaja de los motores eléctricos?',
      options: ['Mayor potencia que los de combustión', 'No requieren mantenimiento', 'Son ecológicos y silenciosos', 'Tienen mayor autonomía'],
      correctAnswer: 2,
      explanation: 'Los motores eléctricos son ecológicos (no consumen combustibles contaminantes), tienen mínimo mantenimiento y son silenciosos.'
    }
  ]
};
