import React, { useState } from 'react'
import {
  SectionHeader,
  VhfSearch,
  VhfCategoryCard,
  VhfCategoryTitle,
  VhfGrid,
  VhfItem,
  VhfItemHeader,
  VhfChannel,
  VhfFrequency,
  VhfDesc,
} from '../../Home.styles'

const CATEGORIES: { title: string; channels: { ch: string; tx: string; rx: string; desc: string }[] }[] = [
  {
    title: 'Socorro, Urgencia y Seguridad',
    channels: [
      { ch: '16', tx: '156.800', rx: '156.800', desc: 'Socorro, urgencia, seguridad y llamada. Vigilancia obligatoria.' },
      { ch: '06', tx: '156.300', rx: '156.300', desc: 'Inter-seguridad. Comunicaciones entre barcos.' },
      { ch: '13', tx: '156.650', rx: '156.650', desc: 'Puente a puente. Maniobras y seguridad de navegación.' },
      { ch: '67', tx: '156.375', rx: '156.375', desc: 'Búsqueda y rescate (SAR).' },
      { ch: '22A', tx: '157.100', rx: '161.700', desc: 'Coordinación de búsqueda y rescate (SAR).' },
      { ch: '70', tx: '156.525', rx: '156.525', desc: 'Llamada digital DSC (solo digital).' },
    ],
  },
  {
    title: 'Trabajo y Navegación',
    channels: [
      { ch: '08', tx: '156.400', rx: '156.400', desc: 'Trabajo general entre barcos.' },
      { ch: '09', tx: '156.450', rx: '156.450', desc: 'Llamada y trabajo general.' },
      { ch: '10', tx: '156.500', rx: '156.500', desc: 'Trabajo general.' },
      { ch: '11', tx: '156.550', rx: '156.550', desc: 'Trabajo general.' },
      { ch: '68', tx: '156.425', rx: '156.425', desc: 'Trabajo general.' },
      { ch: '69', tx: '156.475', rx: '156.475', desc: 'Trabajo general.' },
      { ch: '72', tx: '156.625', rx: '156.625', desc: 'Trabajo general.' },
      { ch: '77', tx: '156.875', rx: '156.875', desc: 'Trabajo general.' },
    ],
  },
  {
    title: 'Puertos y Operaciones Portuarias',
    channels: [
      { ch: '12', tx: '156.600', rx: '156.600', desc: 'Operaciones portuarias.' },
      { ch: '14', tx: '156.700', rx: '156.700', desc: 'Operaciones portuarias.' },
      { ch: '20', tx: '157.000', rx: '161.600', desc: 'Operaciones portuarias.' },
      { ch: '73', tx: '156.675', rx: '156.675', desc: 'Operaciones portuarias.' },
      { ch: '74', tx: '156.725', rx: '156.725', desc: 'Operaciones portuarias.' },
      { ch: '79', tx: '156.975', rx: '161.575', desc: 'Operaciones portuarias.' },
      { ch: '80', tx: '157.025', rx: '161.625', desc: 'Operaciones portuarias.' },
    ],
  },
  {
    title: 'Potencia Limitada',
    channels: [
      { ch: '15', tx: '156.750', rx: '156.750', desc: 'Potencia limitada (≤ 1W).' },
      { ch: '17', tx: '156.850', rx: '156.850', desc: 'Potencia limitada (≤ 1W).' },
      { ch: '75', tx: '156.775', rx: '156.775', desc: 'Potencia limitada, guarda del canal 16.' },
      { ch: '76', tx: '156.825', rx: '156.825', desc: 'Potencia limitada, guarda del canal 16.' },
    ],
  },
  {
    title: 'Sistemas Automáticos',
    channels: [
      { ch: '87', tx: '157.375', rx: '157.375', desc: 'AIS (Automatic Identification System).' },
      { ch: '88', tx: '157.425', rx: '157.425', desc: 'AIS (Automatic Identification System).' },
    ],
  },
]

type Props = {
  theme: any
}

export const VhfSection: React.FC<Props> = ({ theme }) => {
  const [search, setSearch] = useState('')

  const filtered = CATEGORIES.map((cat) => ({
    ...cat,
    channels: cat.channels.filter(
      (c) =>
        c.ch.toLowerCase().includes(search.toLowerCase()) ||
        c.desc.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.channels.length > 0)

  return (
    <>
      <SectionHeader $theme={theme}>
        Canales VHF Marítimos
      </SectionHeader>

      <VhfSearch
        $theme={theme}
        type='text'
        placeholder='Buscar canal...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((cat) => (
        <VhfCategoryCard key={cat.title} $theme={theme}>
          <VhfCategoryTitle $theme={theme}>
            {cat.title}
          </VhfCategoryTitle>
          <VhfGrid>
            {cat.channels.map((item) => (
              <VhfItem key={item.ch} $theme={theme}>
                <VhfItemHeader>
                  <VhfChannel>CH {item.ch}</VhfChannel>
                  <VhfFrequency>{item.tx} / {item.rx} MHz</VhfFrequency>
                </VhfItemHeader>
                <VhfDesc $theme={theme}>{item.desc}</VhfDesc>
              </VhfItem>
            ))}
          </VhfGrid>
        </VhfCategoryCard>
      ))}
    </>
  )
}
