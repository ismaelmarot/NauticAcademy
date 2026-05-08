import React from 'react'

import { KNOTS_DATA } from '@/constants'

import {
  SectionHeader,
  KnotsGrid,
  KnotCard,
  KnotHeader,
  KnotImage,
  KnotInfo,
  KnotTitle,
  KnotDescription,
  KnotPlayOverlay,
  KnotImageWrapper,
} from '../../Home.styles'

type Props = {
  theme: any
}

export const KnotsSection: React.FC<Props> = ({
  theme,
}) => {
  return (
    <>
      <SectionHeader $theme={theme}>
        Nudos
      </SectionHeader>

      <KnotsGrid>
        {KNOTS_DATA.map((knot) => (
          <KnotCard
            key={knot.id}
            $theme={theme}
          >
            <KnotHeader>
              <KnotImageWrapper>
                <KnotImage
                  src={knot.image}
                  alt={knot.name}
                />

                <KnotPlayOverlay
                  $theme={theme}
                  href={knot.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ▶
                </KnotPlayOverlay>
              </KnotImageWrapper>

              <KnotInfo>
                <KnotTitle $theme={theme}>
                  {knot.name}
                </KnotTitle>

                <KnotDescription $theme={theme}>
                  {knot.description}
                </KnotDescription>
              </KnotInfo>
            </KnotHeader>
          </KnotCard>
        ))}
      </KnotsGrid>
    </>
  )
}