export interface ContentBlock {
    type: 'title' | 'subtitle' | 'paragraph' | 'list' | 'image';
    text?: string;
    items?: string[];
    src?: string;
    alt?: string;
    caption?: string;
}