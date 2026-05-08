import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'presion-atmosferica',
  title: 'Parámetros Atmosféricos: La Presión Atmosférica',
  readingTime: 10,
  content: [
    { type: 'title', text: 'Parámetros Atmosféricos: La Presión Atmosférica' },
    { type: 'subtitle', text: 'Introducción' },
    { type: 'paragraph', text: 'La presión atmosférica ocupa un lugar central porque gran parte de la dinámica del tiempo —vientos, formación de nubes, tormentas— surge precisamente de sus variaciones.' },
    { type: 'subtitle', text: 'Definiciones' },
    { type: 'paragraph', text: 'En física, la presión es la fuerza que un sólido, líquido o gas ejerce sobre una superficie. En meteorología, hablamos de presión atmosférica para referirnos a la fuerza ejercida por el peso de la masa de aire sobre todo lo que se encuentra en la superficie terrestre.' },
    { type: 'paragraph', text: 'Aunque solemos imaginar al aire como algo ligero, la atmósfera posee una masa considerable. Su distribución no es uniforme: cambia en función de la temperatura, la humedad y los movimientos verticales del aire. Como resultado, la presión varía de un lugar a otro, generando diferencias que hacen que grandes volúmenes de aire se muevan desde zonas de mayor presión hacia zonas de menor presión. Ese desplazamiento es, en esencia, lo que percibimos como viento.' },
    { type: 'subtitle', text: 'Unidades de Medida e Instrumentos' },
    { type: 'paragraph', text: 'La presión atmosférica se mide con un barómetro —tanto analógico como digital— mientras que el barógrafo permite registrar sus variaciones a lo largo del tiempo.' },
    { type: 'paragraph', text: 'Las unidades más utilizadas son el hectoPascal (hPa) y el milibar (mbar); ambas son equivalentes: 1 hPa = 1 mbar = 100 Pascales. En Argentina, como en la mayoría de los servicios meteorológicos del mundo, la unidad adoptada es el hectoPascal.' },
    { type: 'paragraph', text: 'El Pascal es la unidad de medida de presión del Sistema Internacional de Unidades.' },
    { type: 'subtitle', text: 'Isobaras e Isohipsas' },
    { type: 'paragraph', text: 'Los datos de presión atmosférica obtenidos en distintas estaciones meteorológicas permiten representar los campos de presión en las cartas y mapas meteorológicos.' },
    { type: 'subtitle', text: 'Isobaras' },
    { type: 'paragraph', text: 'Son líneas que unen puntos de igual presión atmosférica reducida al nivel de la superficie. Son las que se emplean en los mapas de tiempo en superficie.' },
    { type: 'subtitle', text: 'Isohipsas' },
    { type: 'paragraph', text: 'Son líneas que unen puntos de igual altura geopotencial en un determinado nivel de presión. Se utilizan en los mapas de altura para analizar la circulación en niveles medios y altos de la atmósfera.' },
    { type: 'paragraph', text: 'El plano de los 500 hPa, correspondiente aproximadamente a los 5.500 metros de altitud, es especialmente útil porque permite visualizar la circulación general del aire en altura, ya que influyen y empujan a las masas de aire en la superficie. En este nivel, el viento fluye casi paralelo a las isohipsas, siguiendo su curvatura, y en nuestras latitudes lo hace predominantemente desde el Oeste hacia el Este.' },
    { type: 'subtitle', text: 'Presión Atmosférica Media' },
    { type: 'paragraph', text: 'El valor de presión atmosférica media a nivel del mar es 1013,25 hPa, que corresponde a la denominada atmósfera estándar. Se trata de un promedio teórico, utilizado internacionalmente como referencia.' },
    { type: 'paragraph', text: 'Cualquier presión por encima de ese valor suele considerarse dentro del rango de un sistema de alta presión, mientras que los valores por debajo indican la presencia de una baja presión.' },
    { type: 'subtitle', text: 'Interpretación de las Isóbaras' },
    { type: 'paragraph', text: 'Para determinar si un conjunto de isóbaras representa una zona de alta o de baja presión, basta con observar los valores numéricos impresos sobre ellas y compararlos con el valor de presión media: 1013,25 hPa.' },
    { type: 'paragraph', text: 'Es importante tener en cuenta que puede haber excepciones: una zona redondeada con valores entre 1014 y 1018 hPa rodeada de valores de 1028 a 1032 hPa representa una baja presión relativa a las altas presiones que la rodean.' },
    { type: 'paragraph', text: 'Cuando las isóbaras se cierran en forma de óvalos o círculos concéntricos y los valores aumentan hacia el centro, estamos ante un anticiclón. Si los valores disminuyen hacia el centro, corresponde a un ciclón o depresión.' },
    { type: 'paragraph', text: 'La separación entre isóbaras indica el gradiente de presión. Cuanto más juntas aparecen, mayor es la diferencia de presión y más intenso será el viento.' },
    { type: 'paragraph', text: 'Para distinguir un anticiclón semipermanente de uno migratorio: los semipermanentes aparecen de manera reiterada en la misma región del planeta y mantienen posiciones bastante estables (entre los 25º y 35º de latitud). Los migratorios se desplazan con los sistemas frontales, moviéndose hacia el Noreste en el hemisferio Sur.' },
    { type: 'subtitle', text: 'Rangos Típicos de Presión' },
    { type: 'subtitle', text: 'Anticiclones Semipermanentes' },
    { type: 'paragraph', text: 'Suelen presentar valores entre 1018 y 1032 hPa, aunque en situaciones de fuerte subsidencia pueden superar los 1035 hPa.' },
    { type: 'subtitle', text: 'Anticiclones Migratorios' },
    { type: 'paragraph', text: 'En el hemisferio Sur, suelen presentar valores entre 1020 y 1030 hPa, y no es raro que superen los 1032 a 1035 hPa en situaciones de fuerte subsidencia. Su tránsito completo puede llevar entre cinco y siete días en promedio.' },
    { type: 'subtitle', text: 'Bajas Presiones Frontales' },
    { type: 'paragraph', text: 'Sus valores comunes oscilan entre 1000 y 1008 hPa, aunque pueden caer a 995 a 998 hPa cuando el sistema está bien desarrollado.' },
    { type: 'subtitle', text: 'Ciclones Extratropicales' },
    { type: 'paragraph', text: 'Los valores pueden descender por debajo de 990 hPa, y en casos intensos, alcanzar 970 a 980 hPa.' },
    { type: 'subtitle', text: 'Depresiones Tropicales y Ciclones Subtropicales' },
    { type: 'paragraph', text: 'En ciclones tropicales maduros —huracanes y tifones— la presión puede descender a valores extremos por debajo de 950 hPa.' }
  ],
  quiz: [
    {
      question: '¿Qué instrumento permite registrar las variaciones de presión atmosférica a lo largo del tiempo?',
      options: ['Barógrafo', 'Barómetro', 'Termómetro', 'Anemómetro'],
      correctAnswer: 0,
      explanation: 'El barógrafo registra las variaciones de presión en el tiempo, mientras que el barómetro mide la presión en un momento específico.'
    },
    {
      question: '¿Qué líneas unen puntos de igual altura geopotencial en un nivel de presión determinado?',
      options: ['Isohipsas', 'Isobaras', 'Isotermas', 'Isoyetas'],
      correctAnswer: 0,
      explanation: 'Las isohipsas unen puntos de igual altura geopotencial, usadas en mapas de altura, mientras que las isobaras unen puntos de igual presión en superficie.'
    },
    {
      question: '¿Cuál es el valor de presión atmosférica media a nivel del mar?',
      options: ['1013,25 hPa', '1000 hPa', '1032 hPa', '950 hPa'],
      correctAnswer: 0,
      explanation: 'La presión atmosférica media a nivel del mar es 1013,25 hPa, correspondiente a la atmósfera estándar internacional utilizada como referencia.'
    },
    {
      question: '¿Qué valores suelen presentar los anticiclones semipermanentes?',
      options: ['1018 a 1032 hPa', '1000 a 1008 hPa', '990 a 980 hPa', 'Menos de 950 hPa'],
      correctAnswer: 0,
      explanation: 'Los anticiclones semipermanentes suelen tener valores entre 1018 y 1032 hPa, pudiendo superar los 1035 hPa en situaciones de fuerte subsidencia.'
    }
  ]
};
