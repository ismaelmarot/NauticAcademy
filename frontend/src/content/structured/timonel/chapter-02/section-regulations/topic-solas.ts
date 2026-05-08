import { Topic } from '@/content/types';

export const topic: Topic = {
  id: 'solas',
  title: 'El Convenio SOLAS - Salvaguarda de la Vida en el Mar',
  readingTime: 9,
  audioTime: '8:00',

  content: [
    { type: 'title', text: 'Introducción' },
    { type: 'paragraph', text: 'El Convenio SOLAS (Safety Of Life At Sea) es la normativa internacional que establece requisitos mínimos para garantizar la seguridad humana en el mar.' },
    { type: 'paragraph', text: 'Su objetivo es asegurar que embarcaciones y tripulaciones cuenten con elementos de seguridad necesarios para sobrevivir en caso de accidente: chalecos, balsas salvavidas, señales y luces de emergencia.' },

    { type: 'subtitle', text: 'Historia' },
    { type: 'paragraph', text: 'Tras el hundimiento del RMS Titanic en 1912, se evidenció la falta de seguridad en el transporte marítimo. En 1914 se firmó el primer Convenio en Londres, pero su entrada en vigor se vio limitada por la Primera Guerra Mundial.' },
    { type: 'paragraph', text: 'Versión de 1929 adoptada en 1933. Versión de 1948 incorporó mejoras tras la Segunda Guerra Mundial (protección contra fuego, blindaje equipos, mejora supervivencia).' },
    { type: 'paragraph', text: 'Versión de 1960 entró en vigor en 1965. Versión SOLAS 1974 entró en vigor el 25 de mayo de 1980. Actualmente se actualiza mediante enmiendas dinámicas.' },

    { type: 'subtitle', text: 'La IMO y el Convenio' },
    { type: 'paragraph', text: 'La IMO (International Maritime Organization) administra el convenio desde 1960. Los Estados miembros comprometen cumplir estándares de construcción, equipamiento y operación.' },
    { type: 'paragraph', text: 'Aunque nació para marina mercante, sus estándares marcaron el "seguridad razonable" para toda embarcación, incluyendo náutica deportiva. Chalecos, balsas, bengalas, luces y señales siguen sus criterios.' }
  ],

  quiz: [
    {
      question: '¿Qué significa SOLAS?',
      options: [
        'Safety Of Life At Sea',
        'Sistema Of Life At Sea',
        'Seguridad Of Life At Sea',
        'Safety Of Life Aquatic System'
      ],
      correctAnswer: 0,
      explanation: 'SOLAS significa "Safety Of Life At Sea" (Seguridad de la Vida en el Mar). Es el convenio internacional más importante sobre seguridad marítima.'
    },
    {
      question: '¿Qué catástrofe impulsó el primer Convenio SOLAS?',
      options: [
        'Hundimiento del Andrea Doria',
        'Hundimiento del RMS Titanic',
        'Segunda Guerra Mundial',
        'Accidente en el Canal de la Mancha'
      ],
      correctAnswer: 1,
      explanation: 'El hundimiento del RMS Titanic en 1912 evidenció la falta de seguridad y impulsó la creación del primer Convenio SOLAS en 1914.'
    },
    {
      question: '¿Qué organización administra el Convenio SOLAS actualmente?',
      options: ['OMI', 'IMCO', 'CARP', 'IALA'],
      correctAnswer: 0,
      explanation: 'La IMO (International Maritime Organization) administra el Convenio SOLAS desde la versión de 1960 hasta la actualidad.'
    }
  ]
};
