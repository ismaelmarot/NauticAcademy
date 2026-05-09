import React from 'react'

import { LINKS_DATA } from '@/constants'

import {
  LinksGrid,
  LinkCategory,
  LinkCategoryTitle,
  LinkCard,
  LinkFavicon,
  LinkInfo,
  LinkTitle,
  LinkDescription,
  LinkArrow,
} from '../../Home.styles'

type Props = {
  theme: any
}

export const LinksSection: React.FC<Props> = ({
  theme,
}) => {
  return (
    <LinksGrid>
      {LINKS_DATA.map((cat) => (
        <LinkCategory
          key={cat.category}
          $theme={theme}
        >
          <LinkCategoryTitle $theme={theme}>
            {cat.category}
          </LinkCategoryTitle>

          {cat.links.map((link) => (
            <LinkCard
              key={link.name}
              $theme={theme}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkFavicon
                src={`https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=64`}
                alt={link.name}
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  img.style.display = 'none'
                  img.src = ''
                }}
              />

              <LinkInfo>
                <LinkTitle $theme={theme}>
                  {link.name}
                </LinkTitle>

                <LinkDescription $theme={theme}>
                  {link.description}
                </LinkDescription>
              </LinkInfo>

              <LinkArrow $theme={theme}>
                →
              </LinkArrow>
            </LinkCard>
          ))}
        </LinkCategory>
      ))}
    </LinksGrid>
  )
}