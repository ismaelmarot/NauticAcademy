export interface ContentBlock {
  type: 'title' | 'paragraph' | 'list' | 'image';
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
}

export interface Topic {
  id: string;
  title: string;
  readingTime: number;
  audioTime?: string;
  content: ContentBlock[];
  quiz?: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Section {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Chapter {
  id: string;
  title: string;
  sections: Section[];
}
