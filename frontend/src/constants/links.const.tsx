export const LINKS_DATA: { category: string; links: { name: string; description: string; url: string }[] }[] = [
  {
    category: 'Cartas y navegación',
    links: [
      { name: 'MarineTraffic', description: 'Barcos en tiempo real.', url: 'https://www.marinetraffic.com' },
      { name: 'Navionics', description: 'Cartografía náutica interactiva.', url: 'https://webapp.navionics.com' },
      { name: 'OpenSeaMap', description: 'Mapa náutico open source.', url: 'https://www.openseamap.org' }
    ]
  },
  {
    category: 'Cámaras y condiciones en vivo',
    links: [
      { name: 'Windy Webcams', description: 'Webcams integradas con clima.', url: 'https://www.windy.com/-Webcams/webcams' },
      { name: 'Insecam', description: 'Algunas cámaras portuarias públicas.', url: 'https://www.insecam.org' }
    ]
  }
]