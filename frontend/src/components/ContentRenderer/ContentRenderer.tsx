import React from 'react';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';

const Container = styled.div<{ $theme: any }>`
  padding: 16px;
  color: ${({ $theme }) => $theme.colors.text};
  line-height: 1.6;
`;

const Title = styled.h1<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: 16px;
  font-size: 24px;
`;

const Subtitle = styled.h2<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
`;

const Paragraph = styled.p<{ $theme: any }>`
  margin-bottom: 12px;
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 16px;
`;

const List = styled.ul<{ $theme: any }>`
  margin-bottom: 12px;
  padding-left: 20px;
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 16px;
`;

const ListItem = styled.li<{ $theme: any }>`
  margin-bottom: 6px;
`;

const ImageContainer = styled.figure<{ $theme: any }>`
  margin: 24px 0;
  text-align: center;
  border-radius: ${({ $theme }) => $theme.radius.md};
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
`;

const Caption = styled.figcaption<{ $theme: any }>`
  margin-top: 12px;
  font-size: 14px;
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-style: italic;
  line-height: 1.5;
`;

interface ContentBlock {
  type: 'title' | 'subtitle' | 'paragraph' | 'list' | 'image';
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
}

interface ContentRendererProps {
  content: ContentBlock[];
  activeIndex?: number;
}

const HighlightedParagraph = styled(Paragraph)<{ $active: boolean; $theme: any }>`
  background: ${({ $active, $theme }) =>
    $active ? $theme.colors.primaryLight : 'transparent'};
  border-radius: ${({ $active }) => ($active ? '8px' : '0')};
  padding: ${({ $active }) => ($active ? '4px 8px' : '0')};
  margin: ${({ $active }) => ($active ? '8px -8px' : '0 0 12px 0')};
  transition: all 0.3s ease;
`;

const HighlightedSubtitle = styled(Subtitle)<{ $active: boolean; $theme: any }>`
  background: ${({ $active, $theme }) =>
    $active ? $theme.colors.primaryLight : 'transparent'};
  border-radius: ${({ $active }) => ($active ? '8px' : '0')};
  padding: ${({ $active }) => ($active ? '4px 8px' : '0')};
  margin: ${({ $active }) => ($active ? '20px -8px 12px' : '24px 0 12px 0')};
  transition: all 0.3s ease;
`;

const HighlightedListItem = styled(ListItem)<{ $active: boolean; $theme: any }>`
  background: ${({ $active, $theme }) =>
    $active ? $theme.colors.primaryLight : 'transparent'};
  border-radius: ${({ $active }) => ($active ? '6px' : '0')};
  padding: ${({ $active }) => ($active ? '2px 6px' : '0')};
  margin: ${({ $active }) => ($active ? '4px -6px' : '0 0 6px 0')};
  transition: all 0.3s ease;
`;

const ContentRenderer: React.FC<ContentRendererProps> = ({ content, activeIndex }) => {
  const { theme } = useThemeLanguage();

  return (
    <Container $theme={theme}>
      {content.map((block, index) => {
        const isActive = activeIndex === index;

        if (block.type === 'title') {
          return <Title key={index} $theme={theme}>{block.text}</Title>;
        }
        if (block.type === 'subtitle') {
          return (
            <HighlightedSubtitle key={index} $theme={theme} $active={isActive}>
              {block.text}
            </HighlightedSubtitle>
          );
        }
        if (block.type === 'list' && block.items) {
          return (
            <List key={index} $theme={theme}>
              {block.items.map((item, i) => (
                <HighlightedListItem
                  key={i}
                  $theme={theme}
                  $active={isActive && i === 0}
                >
                  {item}
                </HighlightedListItem>
              ))}
            </List>
          );
        }
        if (block.type === 'image' && block.src) {
          return (
            <ImageContainer key={index} $theme={theme}>
              <StyledImage src={block.src} alt={block.alt || ''} />
              {block.caption && (
                <Caption $theme={theme}>{block.caption}</Caption>
              )}
            </ImageContainer>
          );
        }
        return (
          <HighlightedParagraph key={index} $theme={theme} $active={isActive}>
            {block.text}
          </HighlightedParagraph>
        );
      })}
    </Container>
  );
};

export default ContentRenderer;
