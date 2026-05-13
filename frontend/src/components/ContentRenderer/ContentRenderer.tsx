import React from 'react'
import { useThemeLanguage } from '@/context'
import { ContentRendererProps } from '@/interfaces'
import {
  Caption,
  Container,
  HighlightedListItem,
  HighlightedParagraph,
  HighlightedSubtitle,
  ImageContainer,
  List,
  StyledImage,
  Title
} from './ContentRender.styles'

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
          )
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
          )
        }
        if (block.type === 'image' && block.src) {
          return (
            <ImageContainer key={index} $theme={theme}>
              <StyledImage src={block.src} alt={block.alt || ''} />
              {block.caption && (
                <Caption $theme={theme}>{block.caption}</Caption>
              )}
            </ImageContainer>
          )
        }
        return (
          <HighlightedParagraph key={index} $theme={theme} $active={isActive}>
            {block.text}
          </HighlightedParagraph>
        )
      })}
    </Container>
  )
}

export default ContentRenderer