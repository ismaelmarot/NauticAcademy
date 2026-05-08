export const METEO_DATA: { category: string; links: { name: string; description: string; url: string }[] }[] = [
  {
    category: 'Viento y pronóstico marítimo',
    links: [
      { name: 'Windy', description: 'Visual para viento, lluvia, olas, presión y tormentas.', url: 'https://www.windy.com' },
      { name: 'PredictWind', description: 'Usado en navegación oceánica y regatas.', url: 'https://www.predictwind.com' },
      { name: 'Meteoblue', description: 'Pronósticos hiper detallados y mapas.', url: 'https://www.meteoblue.com' },
      { name: 'Ventusky', description: 'Similar a Windy, muy bueno visualmente.', url: 'https://www.ventusky.com' }
    ]
  },
  {
    category: 'Mareas y corrientes',
    links: [
      { name: 'Tides4Fishing', description: 'Mareas, sol/luna, pesca y actividad marítima.', url: 'https://www.tides4fishing.com' },
      { name: 'Tide Forecast', description: 'Predicción de mareas global.', url: 'https://www.tide-forecast.com' },
      { name: 'NOAA Tides & Currents', description: 'Muy técnico y preciso.', url: 'https://tidesandcurrents.noaa.gov' }
    ]
  },
  {
    category: 'Olas y swell',
    links: [
      { name: 'Magicseaweed', description: 'Surf y swell marítimo.', url: 'https://www.magicseaweed.com' },
      { name: 'Surfline', description: 'Cámaras, swell y olas en vivo.', url: 'https://www.surfline.com' },
      { name: 'Stormsurf', description: 'Excelente para analizar swell oceánico.', url: 'https://www.stormsurf.com' }
    ]
  },
  {
    category: 'Radar y tormentas',
    links: [
      { name: 'RainViewer', description: 'Radar de lluvia en tiempo real.', url: 'https://www.rainviewer.com' },
      { name: 'LightningMaps', description: 'Rayos en tiempo real.', url: 'https://www.lightningmaps.org' },
      { name: 'Zoom Earth', description: 'Satélite en vivo + tormentas + huracanes.', url: 'https://www.zoom.earth' }
    ]
  }
]