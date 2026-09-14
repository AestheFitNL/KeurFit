import './globals.css';

export const metadata = {
  metadataBase: new URL('https://keurfit.nl'),
  title: { default: 'Rijbewijskeuring Nijmegen | KeurFit', template: '%s | KeurFit' },
  description: 'KeurFit in Nijmegen: rijbewijskeuringen, medische CBR-keuringen en algemene sportkeuringen door een BIG-geregistreerd arts.',
  keywords: ['rijbewijskeuring Nijmegen','keuringsarts Nijmegen','CBR keuring Nijmegen','rijbewijskeuring 75+ Nijmegen','medische keuring rijbewijs Nijmegen','CBR keurend arts Nijmegen','ZorgDomein rijbewijskeuring','sportkeuring Nijmegen','medische keuring Nijmegen','medische verklaring arts Nijmegen','verzekeringskeuring Nijmegen','onafhankelijke arts Nijmegen'],
  alternates: { canonical: '/' },
  openGraph: { title: 'KeurFit | Rijbewijskeuring Nijmegen', description: 'CBR rijbewijskeuringen in Nijmegen door een BIG-geregistreerd arts.', locale: 'nl_NL', type: 'website' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  const schema = {
    '@context':'https://schema.org','@type':'MedicalBusiness',name:'KeurFit',url:'https://keurfit.nl',
    description:'Rijbewijskeuringen, sportkeuringen, medische verklaringen en bepaalde verzekeringskeuringen in Nijmegen door een BIG-geregistreerd arts.',legalName:'AestheFit',vatID:'NL005374477B91',
    areaServed:[{ '@type':'City',name:'Nijmegen' },{ '@type':'City',name:'Wijchen' },{ '@type':'City',name:'Beuningen' },{ '@type':'City',name:'Groesbeek' }],
    medicalSpecialty:'GeneralPractice'
  };
  return <html lang="nl"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
