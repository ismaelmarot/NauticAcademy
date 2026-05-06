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

interface ContentBlock {
  type: 'title' | 'paragraph' | 'list';
  text?: string;
  items?: string[];
}

interface ContentRendererProps {
  content: ContentBlock[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const { theme } = useThemeLanguage();

  return (
    <Container $theme={theme}>
      {content.map((block, index) => {
        if (block.type === 'title') {
          return <Title key={index} $theme={theme}>{block.text}</Title>;
        }
        if (block.type === 'list' && block.items) {
          return (
            <List key={index} $theme={theme}>
              {block.items.map((item, i) => (
                <ListItem key={i} $theme={theme}>{item}</ListItem>
              ))}
            </List>
          );
        }
        return <Paragraph key={index} $theme={theme}>{block.text}</Paragraph>;
      })}
    </Container>
  );
};

export default ContentRenderer;
