import React, { useState } from 'react'
import {
  SectionHeader,
  QCodeSearch,
  QCodeCategoryCard,
  QCodeCategoryTitle,
  QCodeGrid,
  QCodeItem,
  QCodeCode,
  QCodeDesc,
} from '../../Home.styles'

const CATEGORIES: { title: string; codes: { code: string; desc: string }[] }[] = [
  {
    title: 'Procedimiento y Comunicación',
    codes: [
      { code: 'QRA', desc: 'Nombre de la estación' },
      { code: 'QRB', desc: 'Distancia aproximada' },
      { code: 'QRG', desc: 'Frecuencia exacta' },
      { code: 'QRH', desc: 'Variación de frecuencia' },
      { code: 'QRI', desc: 'Tono de la señal' },
      { code: 'QRJ', desc: 'Señales débiles' },
      { code: 'QRK', desc: 'Inteligibilidad de la señal' },
      { code: 'QRL', desc: 'Estoy ocupado' },
      { code: 'QRM', desc: 'Interferencia' },
      { code: 'QRN', desc: 'Ruido atmosférico' },
      { code: 'QRO', desc: 'Aumentar potencia' },
      { code: 'QRP', desc: 'Disminuir potencia' },
      { code: 'QRQ', desc: 'Transmitir más rápido' },
      { code: 'QRS', desc: 'Transmitir más lento' },
      { code: 'QRT', desc: 'Dejar de transmitir' },
      { code: 'QRU', desc: 'No tengo nada para ti' },
      { code: 'QRV', desc: 'Estoy listo / Preparado' },
      { code: 'QRX', desc: 'Espere / Volveré a llamar' },
      { code: 'QRZ', desc: '¿Quién me llama?' },
      { code: 'QSA', desc: 'Intensidad de la señal' },
      { code: 'QSB', desc: 'La señal se desvanece' },
      { code: 'QSL', desc: 'Acuso recibo' },
      { code: 'QSO', desc: 'Comunicación directa' },
      { code: 'QSP', desc: 'Retransmitir mensaje' },
      { code: 'QSV', desc: 'Transmitir serie de señales' },
      { code: 'QSX', desc: 'Escuchar en esta frecuencia' },
      { code: 'QSY', desc: 'Cambiar de frecuencia' },
      { code: 'QSZ', desc: 'Transmitir cada palabra' },
      { code: 'QTC', desc: 'Tengo mensaje que transmitir' },
      { code: 'QTH', desc: 'Posición / Latitud y longitud' },
      { code: 'QTR', desc: 'Hora exacta' },
    ],
  },
  {
    title: 'Navegación y Meteorología',
    codes: [
      { code: 'QDM', desc: 'Rumbo magnético para ir hacia la estación' },
      { code: 'QDR', desc: 'Rumbo magnético desde la estación' },
      { code: 'QFE', desc: 'Presión atmosférica en la estación' },
      { code: 'QNH', desc: 'Presión atmosférica a nivel del mar' },
      { code: 'QTE', desc: 'Rumbo verdadero desde la estación' },
      { code: 'QUJ', desc: 'Rumbo verdadero para ir hacia la estación' },
    ],
  },
]

type Props = {
  theme: any
}

export const QCodeSection: React.FC<Props> = ({ theme }) => {
  const [search, setSearch] = useState('')

  const filtered = CATEGORIES.map((cat) => ({
    ...cat,
    codes: cat.codes.filter(
      (c) =>
        c.code.toLowerCase().includes(search.toLowerCase()) ||
        c.desc.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.codes.length > 0)

  return (
    <>
      <SectionHeader $theme={theme}>
        Código Q
      </SectionHeader>

      <QCodeSearch
        $theme={theme}
        type='text'
        placeholder='Buscar código Q...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((cat) => (
        <QCodeCategoryCard key={cat.title} $theme={theme}>
          <QCodeCategoryTitle $theme={theme}>
            {cat.title}
          </QCodeCategoryTitle>
          <QCodeGrid>
            {cat.codes.map((item) => (
              <QCodeItem key={item.code} $theme={theme}>
                <QCodeCode>{item.code}</QCodeCode>
                <QCodeDesc $theme={theme}>{item.desc}</QCodeDesc>
              </QCodeItem>
            ))}
          </QCodeGrid>
        </QCodeCategoryCard>
      ))}
    </>
  )
}
