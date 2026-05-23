import React, { useState, useEffect, useCallback } from 'react'
import {
  SectionHeader,
  BuoyCategoryCard,
  BuoyCategoryTitle,
  BuoyCategoryBadge,
  BuoyGrid,
  BuoyCard,
  BuoyImage,
  BuoyImageWrapper,
  BuoyInfo,
  BuoyName,
  BuoyDetail,
  BuoyDetailLabel,
  LightboxOverlay,
  LightboxCard,
  LightboxImageWrapper,
  LightboxImage,
  LightboxBody,
  LightboxCategory,
  LightboxTitle,
  LightboxDivider,
  LightboxDetails,
  LightboxDetailRow,
  LightboxDetailLabel,
  LightboxDetailValue,
  LightboxClose,
} from '../../Home.styles'

type Buoy = {
  id: string
  name: string
  image: string
  details: { label: string; value: string }[]
}

type LightboxData = {
  buoy: Buoy
  category: string
}

const CATEGORIES: { title: string; badge: string; buoys: Buoy[] }[] = [
  {
    title: 'Boyas de Estribor',
    badge: 'Lado derecho al entrar',
    buoys: [
      {
        id: 'starboard-side',
        name: 'Boya Lateral de Estribor',
        image: '/images/buoys/starboard-side.png',
        details: [
          { label: 'Color', value: 'Verde' },
          { label: 'Marca de tope', value: 'Cono apuntando hacia arriba' },
          { label: 'Luz', value: 'Verde' },
          { label: 'Ritmo', value: 'Cualquier ritmo excepto el de boya aislada de peligro' },
        ],
      },
      {
        id: 'starboard-channel-steer',
        name: 'Boya de Canal Preferencial de Estribor',
        image: '/images/buoys/starboard-channel-steer.png',
        details: [
          { label: 'Color', value: 'Verde con una franja roja' },
          { label: 'Marca de tope', value: 'Cono apuntando hacia arriba' },
          { label: 'Luz', value: 'Verde / Roja' },
          { label: 'Ritmo', value: 'Cualquier ritmo excepto el de boya aislada de peligro' },
        ],
      },
      {
        id: 'starboard-safe-water',
        name: 'Boya de Aguas Seguras',
        image: '/images/buoys/starboard-safe-water.png',
        details: [
          { label: 'Color', value: 'Verde' },
          { label: 'Marca de tope', value: 'Cuadrado' },
          { label: 'Luz', value: 'Verde' },
          { label: 'Ritmo', value: 'Cualquier ritmo excepto el de boya aislada de peligro' },
        ],
      },
    ],
  },
  {
    title: 'Boyas de Babor',
    badge: 'Lado izquierdo al entrar',
    buoys: [
      {
        id: 'port-side',
        name: 'Boya Lateral de Babor',
        image: '/images/buoys/port-side.png',
        details: [
          { label: 'Color', value: 'Roja' },
          { label: 'Marca de tope', value: 'Cilindro' },
          { label: 'Luz', value: 'Roja' },
          { label: 'Ritmo', value: 'Cualquier ritmo excepto el de boya aislada de peligro' },
        ],
      },
      {
        id: 'port-channel-steer',
        name: 'Boya de Canal Preferencial de Babor',
        image: '/images/buoys/port-channel-steer.png',
        details: [
          { label: 'Color', value: 'Roja con una franja verde' },
          { label: 'Marca de tope', value: 'Cilindro' },
          { label: 'Luz', value: 'Roja / Verde' },
          { label: 'Ritmo', value: 'Cualquier ritmo excepto el de boya aislada de peligro' },
        ],
      },
      {
        id: 'port-safe-water',
        name: 'Boya de Aguas Seguras',
        image: '/images/buoys/port-safe-water.png',
        details: [
          { label: 'Color', value: 'Roja' },
          { label: 'Marca de tope', value: 'Cuadrado' },
          { label: 'Luz', value: 'Roja' },
          { label: 'Ritmo', value: 'Cualquier ritmo excepto el de boya aislada de peligro' },
        ],
      },
    ],
  },
  {
    title: 'Otras Señales',
    badge: '',
    buoys: [
      {
        id: 'danger-isolated',
        name: 'Boya de Peligro Aislado',
        image: '/images/buoys/danger-solated.png',
        details: [
          { label: 'Color', value: 'Negro con franjas rojas' },
          { label: 'Marca de tope', value: 'Dos esferas' },
          { label: 'Luz', value: 'Blanca' },
          { label: 'Ritmo', value: 'Grupo de dos destellos' },
        ],
      },
      {
        id: 'special-safe-water',
        name: 'Boya de Aguas Seguras Especial',
        image: '/images/buoys/special-safe-water.png',
        details: [
          { label: 'Color', value: 'Amarilla' },
          { label: 'Marca de tope', value: 'X amarilla' },
          { label: 'Luz', value: 'Amarilla' },
          { label: 'Ritmo', value: 'Cualquier ritmo excepto el de boya aislada de peligro' },
        ],
      },
      {
        id: 'special-buoy',
        name: 'Boya Especial',
        image: '/images/buoys/special-buoy.png',
        details: [
          { label: 'Color', value: 'Amarilla' },
          { label: 'Marca de tope', value: 'Cruz amarilla' },
          { label: 'Luz', value: 'Amarilla' },
          { label: 'Ritmo', value: 'Cualquier ritmo' },
        ],
      },
    ],
  },
  {
    title: 'Boyas Cardinales',
    badge: '',
    buoys: [
      {
        id: 'cardinal-north',
        name: 'Boya Cardinal Norte',
        image: '/images/buoys/cardinal-north.png',
        details: [
          { label: 'Color', value: 'Negro y amarillo' },
          { label: 'Marca de tope', value: 'Dos conos negros apuntando hacia arriba' },
          { label: 'Luz', value: 'Blanca' },
          { label: 'Ritmo', value: 'Grupo de destellos rápidos' },
        ],
      },
      {
        id: 'cardinal-east',
        name: 'Boya Cardinal Este',
        image: '/images/buoys/cardinal-east.png',
        details: [
          { label: 'Color', value: 'Negro y amarillo' },
          { label: 'Marca de tope', value: 'Dos conos negros base con base' },
          { label: 'Luz', value: 'Blanca' },
          { label: 'Ritmo', value: 'Grupo de destellos (3)' },
        ],
      },
      {
        id: 'cardinal-south',
        name: 'Boya Cardinal Sur',
        image: '/images/buoys/cardinal-south.png',
        details: [
          { label: 'Color', value: 'Negro y amarillo' },
          { label: 'Marca de tope', value: 'Dos conos negros apuntando hacia abajo' },
          { label: 'Luz', value: 'Blanca' },
          { label: 'Ritmo', value: 'Grupo de destellos (9) + destello largo' },
        ],
      },
      {
        id: 'cardinal-west',
        name: 'Boya Cardinal Oeste',
        image: '/images/buoys/cardinal-west.png',
        details: [
          { label: 'Color', value: 'Negro y amarillo' },
          { label: 'Marca de tope', value: 'Dos conos negros base con base' },
          { label: 'Luz', value: 'Blanca' },
          { label: 'Ritmo', value: 'Grupo de destellos (9)' },
        ],
      },
    ],
  },
]

type Props = {
  theme: any
}

export const BuoysSection: React.FC<Props> = ({ theme }) => {
  const [lightbox, setLightbox] = useState<LightboxData | null>(null)

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, close])

  return (
    <>
      <SectionHeader $theme={theme}>
        Balizamiento Marítimo
      </SectionHeader>

      {CATEGORIES.map((cat) => (
        <BuoyCategoryCard key={cat.title} $theme={theme}>
          <BuoyCategoryTitle $theme={theme}>
            {cat.title}
            {cat.badge && (
              <BuoyCategoryBadge $theme={theme}>
                {cat.badge}
              </BuoyCategoryBadge>
            )}
          </BuoyCategoryTitle>

          <BuoyGrid>
            {cat.buoys.map((buoy) => (
              <BuoyCard key={buoy.id} $theme={theme}>
                <BuoyImageWrapper onClick={() => setLightbox({ buoy, category: cat.title })}>
                  <BuoyImage
                    src={buoy.image}
                    alt={buoy.name}
                  />
                </BuoyImageWrapper>
                <BuoyInfo>
                  <BuoyName $theme={theme}>{buoy.name}</BuoyName>
                  {buoy.details.map((d) => (
                    <BuoyDetail key={d.label} $theme={theme}>
                      <BuoyDetailLabel>{d.label}:</BuoyDetailLabel> {d.value}
                    </BuoyDetail>
                  ))}
                </BuoyInfo>
              </BuoyCard>
            ))}
          </BuoyGrid>
        </BuoyCategoryCard>
      ))}

      {lightbox && (
        <LightboxOverlay $theme={theme} onClick={close}>
          <LightboxCard $theme={theme} onClick={(e) => e.stopPropagation()}>
            <LightboxClose onClick={close}>✕</LightboxClose>
            <LightboxImageWrapper>
              <LightboxImage src={lightbox.buoy.image} alt={lightbox.buoy.name} />
            </LightboxImageWrapper>
            <LightboxBody $theme={theme}>
              <LightboxCategory $theme={theme}>{lightbox.category}</LightboxCategory>
              <LightboxTitle $theme={theme}>{lightbox.buoy.name}</LightboxTitle>
              <LightboxDivider $theme={theme} />
              <LightboxDetails>
                {lightbox.buoy.details.map((d) => (
                  <LightboxDetailRow key={d.label}>
                    <LightboxDetailLabel $theme={theme}>{d.label}</LightboxDetailLabel>
                    <LightboxDetailValue $theme={theme}>{d.value}</LightboxDetailValue>
                  </LightboxDetailRow>
                ))}
              </LightboxDetails>
            </LightboxBody>
          </LightboxCard>
        </LightboxOverlay>
      )}
    </>
  )
}
