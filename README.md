# KeurFit

KeurFit is een medische keuringspraktijk in Nijmegen, gericht op rijbewijskeuringen en andere medische keuringen.

De website is gebouwd met **Next.js** en wordt gedeployed via **Vercel**.

## Diensten

KeurFit richt zich onder andere op:

* 75+ rijbewijskeuringen
* CBR-keuringen waarbij een algemeen keurend arts volstaat
* CBR-artsenformulieren
* Sportkeuringen
* Medische verklaringen
* Verzekeringskeuringen

Bij CBR-keuringen is de verwijzing van het CBR altijd leidend. Wanneer het CBR expliciet een specifieke medisch specialist of bedrijfsarts vraagt, wordt de keuring niet als algemene keuring uitgevoerd.

## Technologie

De website gebruikt:

* Next.js
* React
* Vercel
* Cal.com voor online afspraken

## Projectstructuur

```text
KeurFit/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── robots.js
│   ├── sitemap.js
│   │
│   ├── rijbewijskeuring-nijmegen/
│   │   └── page.js
│   │
│   ├── 75-plus-keuring/
│   │   └── page.js
│   │
│   └── cbr-keuring/
│       └── page.js
│
├── public/
│   └── keurfit-logo.png
│
├── package.json
└── README.md
```

## Lokaal starten

Installeer eerst de dependencies:

```bash
npm install
```

Start daarna de ontwikkelserver:

```bash
npm run dev
```

Open vervolgens:

```text
http://localhost:3000
```

## Productie-build

```bash
npm run build
npm run start
```

## Deployment

De website wordt automatisch via Vercel gedeployed wanneer wijzigingen naar de gekoppelde GitHub-repository worden gepusht.

## Online afspraken

Voor rijbewijskeuringen wordt gebruikgemaakt van Cal.com.

De huidige boekingslink voor KeurFit is:

```text
https://cal.com/ali-kumas-2t9ulq/15min
```

## SEO

De website bevat onder andere:

* Pagina-specifieke metadata
* Canonical URL's
* `robots.txt`
* XML-sitemap
* Lokale SEO voor Nijmegen
* Structured data via Schema.org
* Specifieke landingspagina's voor rijbewijskeuringen

Belangrijke pagina's:

```text
/
 /rijbewijskeuring-nijmegen
 /75-plus-keuring
 /cbr-keuring
```

## Organisatie

KeurFit is onderdeel van AestheFit.

**KvK:** 99164752
**BTW-id:** NL005374477B91

## Belangrijk

KeurFit verricht medische beoordelingen. Bij rijbewijskeuringen neemt het CBR de uiteindelijke beslissing over de rijgeschiktheid.

## Status

De website is momenteel in ontwikkeling. Onder andere tarieven, contactgegevens, praktijklocatie en aanvullende keuringspagina's worden nog verder uitgewerkt.
