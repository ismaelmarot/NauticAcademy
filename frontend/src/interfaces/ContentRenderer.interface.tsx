import { ContentBlock } from './ContentBlock.interface'

export interface ContentRendererProps {
    content: ContentBlock[];
    activeIndex?: number;
}