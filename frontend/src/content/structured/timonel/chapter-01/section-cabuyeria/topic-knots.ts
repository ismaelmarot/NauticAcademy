import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'knots',
  title: 'Los Nudos',
  readingTime: 19,
  audioTime: '17:45',

  content: [
    { type: 'title', text: 'Definiciones' },
    { type: 'paragraph', text: 'Para comprender la técnica en el armado de nudos, conviene familiarizarse primero con el vocabulario asociado.' },
    { type: 'paragraph', text: 'Respecto del cabo en sí mismo, y más allá de sus materiales, se lo define por su "mena", que refiere a la medida de su circunferencia. La mena se calcula multiplicando su diámetro por 3,1416 (π).' },
    { type: 'paragraph', text: 'Los extremos de los cabos toman el nombre de "chicotes". Luego, cualquier curva hecha en el tramo interno del cabo se llama "seno". Si un seno se hace cruzando el cabo, se lo denomina también "lazo".' },
    { type: 'paragraph', text: '"Afirmar" o "hacer firme" un cabo quiere decir que se está sujetando o atando el chicote a un punto fijo. El "firme" o extremo firme refiere a la sección del cabo que continúa desde el nudo con el que se lo afirmó.' },
    { type: 'paragraph', text: '"Adujar" un cabo significa enrollarlo en forma prolija, generalmente con el objeto de estibarlo. Las "aduja" refiere a cada una de las vueltas que se le ha dado al cabo mientras se lo enrolla. Para que las cocas (vueltas cerradas o rulos) desaparezcan, hay que sacudir el cabo como si se diera un latigazo.' },
    { type: 'paragraph', text: 'Las "galletas" son otro de los problemas clásicos de los cabos, y refieren a los enredos difíciles de "aclarar" (desenredar).' },
    { type: 'paragraph', text: 'Una vez que se ha adujado un cabo, se lo puede "azocar" con varias vueltas de cabo en la mitad de la aduja o cerca de uno de sus extremos. Un cabo estará azocado cuando se lo ajusta contra otro.' },
    { type: 'paragraph', text: 'Los nudos utilizados en la náutica se caracterizan por su facilidad para ser armados y desarmados, y la imposibilidad de deshacerse por sí solos. Se diferencian según se realicen "por seno" o "por chicote".' },

    { type: 'title', text: 'El Nudo Llano' },
    { type: 'paragraph', text: 'El nudo llano es uno de los más simples y antiguos que existen, y se utiliza generalmente para unir por sus chicotes dos cabos de un mismo grosor, para atar cosas que no estén sometidas a esfuerzos, pues con cabos suaves o de distinta mena este nudo tiende a soltarse.' },
    { type: 'paragraph', text: 'El nudo llano se hace armando dos medios nudos. El primer medio nudo se realiza de izquierda a derecha, el segundo se hace pasando de derecha a izquierda, de forma que ambos chicotes queden del mismo lado.' },
    { type: 'paragraph', text: 'Si el nudo es llano pero los chicotes quedan en lados opuestos ya no es un nudo llano, sino que es un "nudo de ladrón" o "nudo de cabo de vela". Si queda levantado y desigual, es un "nudo de la abuelita". Ninguno de estos nudos es seguro y no deben ser utilizados en la náutica.' },

    { type: 'title', text: 'El Nudo Vuelta de Escota' },
    { type: 'paragraph', text: 'El nudo de vuelta de escota o de empalme de escota se utiliza para unir cabos de distinta mena. Se lo solía utilizar también para atar las escotas a los puños de las velas, por su rapidez para hacerlo y deshacerlo.' },
    { type: 'paragraph', text: 'Al igual que el nudo llano, éste no es totalmente seguro y puede desarmarse en condiciones de tensión, por lo que también se recomienda terminar el chicote con nudos de tope o antideslizantes si va a utilizarse en situaciones de tracción.' },

    { type: 'title', text: 'Nudo Lasca u Ocho' },
    { type: 'paragraph', text: 'El nudo lasca, también conocido como nudo en ocho por su forma, se utiliza como nudo de tope y es muy fácil de realizar con cabos de cualquier mena.' },
    { type: 'paragraph', text: 'Los nudos de tope, como éste, se utilizan para impedir que el cabo se salga de donde ha sido enhebrado o para tener un punto de apoyo para poder tirar de él con la mano.' },

    { type: 'title', text: 'Nudo de Fraile' },
    { type: 'paragraph', text: 'El nudo de fraile, también llamado nudo vuelta de guirnalda o medio nudo múltiple, cumple la misma función que el nudo lasca, aunque es un poco más complejo de armar.' },
    { type: 'paragraph', text: 'Se lo utiliza también como nudo de tope para terminar los chicotes de los cabos, particularmente cuando se desea generar una traba en el chicote para que este no se escape de su posición o bien para crear un mango que permita tirar de él más cómodamente.' },

    { type: 'title', text: 'Nudo Ballestrinque' },
    { type: 'paragraph', text: 'El nudo ballestrinque o nudo del barquero es ideal para afirmar un cabo a otro objeto, como por ejemplo un poste, una argolla o una barra, además es posible ajustar su longitud muy fácilmente, inclusive luego de haberse hecho el nudo.' },
    { type: 'paragraph', text: 'El nudo ballestrinque se mantiene firme mientras esté en tensión, sin embargo, suele desarmarse cuando se lo somete a tirones intermitentes, por lo que no se lo considera confiable para efectuar amarres. Se puede realizar de dos formas: por seno (en la mano) o por chicote (sobre el objeto).' },

    { type: 'title', text: 'Nudo Margarita' },
    { type: 'paragraph', text: 'El nudo margarita es básicamente un nudo de lazo que se utiliza para acortar un cabo o para hacer un arreglo de fortuna (de emergencia) en un cabo dañado o que está a punto de cortarse.' },

    { type: 'title', text: 'Nudo Corredizo' },
    { type: 'paragraph', text: 'El nudo corredizo o nudo de lazo simple se utiliza para enlazar un objeto y azocarlo.' },

    { type: 'title', text: 'Nudo As de Guía' },
    { type: 'paragraph', text: 'El nudo as de guía es un lazo fijo (no corredizo) y uno de los más importantes y mejor conocidos por los navegantes, pues se lo utiliza para amarrar objetos, mover aparejos, elevar cargas, y para trabajos de salvamento.' },
    { type: 'paragraph', text: 'Sus principales ventajas son que no se desliza, no se afloja, ni muerde el cabo y es fácil de realizar, fuerte y estable. Puede servir también como nudo corredizo, que queda abierto tan pronto como desaparece la tensión en la línea.' },
    { type: 'paragraph', text: 'Según su finalidad, se puede armar de diversas formas: por chicote, en la mano, al objeto, en la cintura, por seno y doble por seno.' },

    { type: 'title', text: 'Nudo de Vuelta de Cornamusa' },
    { type: 'paragraph', text: 'El nudo de vuelta de cornamusa o nudo de vuelta de maniobra es el más adecuado para hacer firme un cabo a una cornamusa o una bita.' }
  ],

  quiz: [
    {
      question: '¿Qué es un "chicote" en un cabo?',
      options: ['El centro del cabo', 'El extremo del cabo', 'Un nudo en el cabo', 'La circunferencia del cabo'],
      correctAnswer: 1,
      explanation: 'Los chicotes son los extremos del cabo, mientras que el tramo interno se llama seno.'
    },
    {
      question: '¿Para qué se utiliza el nudo llano?',
      options: ['Hacer firme a un poste', 'Unir dos cabos del mismo grosor', 'Acortar un cabo', 'Hacer un lazo corredizo'],
      correctAnswer: 1,
      explanation: 'El nudo llano se utiliza para unir por sus chicotes dos cabos de un mismo grosor.'
    },
    {
      question: '¿Qué nudo se utiliza para hacer firme un cabo a un poste o argolla?',
      options: ['Nudo llano', 'Nudo lasca', 'Nudo ballestrinque', 'Nudo margarita'],
      correctAnswer: 2,
      explanation: 'El nudo ballestrinque o del barquero es ideal para afirmar un cabo a un objeto como un poste o argolla.'
    },
    {
      question: '¿Qué nudo es un lazo fijo que no se desliza?',
      options: ['Nudo corredizo', 'Nudo as de guía', 'Nudo margarita', 'Nudo de fraile'],
      correctAnswer: 1,
      explanation: 'El nudo as de guía es un lazo fijo que no se desliza, no se afloja y es uno de los más importantes para navegantes.'
    }
  ]
};
