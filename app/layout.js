import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://keurfit.nl"),

  title: {
    default: "Rijbewijskeuring Nijmegen | KeurFit",
    template: "%s | KeurFit"
  },

  description:
    "Rijbewijskeuring in Nijmegen door een BIG-geregistreerd arts. 75+ keuringen, CBR-keuringen, sportkeuringen, medische verklaringen en verzekeringskeuringen.",

  keywords: [
    "rijbewijskeuring Nijmegen",
    "rijbewijskeuring 75+ Nijmegen",
    "75 plus keuring Nijmegen",
    "CBR keuring Nijmegen",
    "keuringsarts Nijmegen",
    "medische keuring Nijmegen",
    "sportkeuring Nijmegen",
    "verzekeringskeuring Nijmegen",
    "medische verklaring Nijmegen"
  ],

  alternates: {
    canonical: "/"
  },

  openGraph: {
    title: "KeurFit | Rijbewijskeuring Nijmegen",
    description:
      "Rijbewijskeuringen en andere medische keuringen door een BIG-geregistreerd arts in Nijmegen.",
    url: "https://keurfit.nl",
    siteName: "KeurFit",
    locale: "nl_NL",
    type: "website"
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "KeurFit",
    description:
      "Rijbewijskeuringen en andere medische keuringen door een BIG-geregistreerd arts.",
    url: "https://keurfit.nl",
    areaServed: {
      "@type": "City",
      name: "Nijmegen"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nijmegen",
      addressCountry: "NL"
    },
    parentOrganization: {
      "@type": "Organization",
      name: "AestheFit",
      taxID: "NL005374477B91"
    }
  };

  return (
    <html lang="nl">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </body>
    </html>
  );
}
