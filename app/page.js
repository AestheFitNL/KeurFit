import Image from "next/image";
import SimplyBookWidget from "./components/SimplyBookWidget";

export default function Home() {
  return (
    <main>
      {/* HEADER */}

      <header className="header">
        <div className="container nav">
          <a href="/" className="brandLogo" aria-label="KeurFit home">
            <Image
              src="/keurfit-logo.png"
              alt="KeurFit Rijbewijskeuringen"
              width={220}
              height={220}
              priority
              className="headerLogo"
            />
          </a>

          <nav>
            <a href="#rijbewijskeuringen">Rijbewijskeuringen</a>
            <a href="#overige-keuringen">Overige keuringen</a>
            <a href="#voorbereiding">Voorbereiding</a>
            <a href="#tarieven">Tarieven</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">MEDISCHE KEURINGEN NIJMEGEN</p>

            <h1>
              Snel en zorgvuldig
              <span>medisch gekeurd.</span>
            </h1>

            <p className="lead">
              Rijbewijskeuringen, sportkeuringen en andere medische
              keuringen door een BIG-geregistreerd arts in Nijmegen.
              Persoonlijk, zorgvuldig en duidelijk.
            </p>

            <div className="buttons">
              <a href="#rijbewijskeuringen" className="button">
                Bekijk de keuringen
              </a>

              <a href="#voorbereiding" className="button secondary">
                Wat moet ik meenemen?
              </a>
            </div>

            <div className="trust">
              <span>✓ BIG-geregistreerd arts</span>
              <span>✓ Nijmegen</span>
              <span>✓ Persoonlijke aandacht</span>
            </div>
          </div>

          <div className="heroLogoCard">
            <Image
              src="/keurfit-logo.png"
              alt="KeurFit"
              width={520}
              height={520}
              priority
              className="heroLogo"
            />
          </div>
        </div>
      </section>

      {/* RIJBEWIJSKEURINGEN */}

      <section id="rijbewijskeuringen" className="section">
        <div className="container">
          <p className="eyebrow">RIJBEWIJSKEURINGEN</p>

          <h2 className="sectionTitle">
            Medische keuringen voor uw rijbewijs
          </h2>

          <p className="intro">
            Bij KeurFit kunt u terecht voor verschillende medische
            rijbewijskeuringen. De verwijzing van het CBR is altijd
            leidend bij de vraag welk type arts de keuring moet uitvoeren.
          </p>

          <div className="cards">
            <article className="card">
              <div className="cardIcon">75</div>

              <h3>75+ rijbewijskeuring</h3>

              <p>
                Medische keuring voor het verlengen van uw rijbewijs vanaf
                75 jaar.
              </p>

              <strong>15 minuten · €55</strong>

              <br />

              <a href="#voorbereiding-75">
                Bekijk voorbereiding →
              </a>
            </article>

            <article className="card">
              <div className="cardIcon">M</div>

              <h3>Medische rijbewijskeuring tot 75 jaar</h3>

              <p>
                Voor een CBR-verwijzing waarbij een algemeen keurend arts
                de medische keuring mag uitvoeren.
              </p>

              <strong>15 minuten · €55</strong>

              <br />

              <a href="#voorbereiding-tot75">
                Bekijk voorbereiding →
              </a>
            </article>

            <article className="card">
              <div className="cardIcon">✓</div>

              <h3>CBR-artsenformulieren</h3>

              <p>
                Bepaalde medische artsenformulieren kunnen door een
                algemeen BIG-geregistreerd arts worden ingevuld.
              </p>

              <a href="#voorbereiding-tot75">
                Bekijk wat u nodig heeft →
              </a>
            </article>
          </div>

          <div className="notice">
            <strong>Let op:</strong> vraagt het CBR expliciet om een
            psychiater, neuroloog, oogarts, cardioloog, bedrijfsarts of
            andere specifieke specialist, dan moet de beoordeling door
            die arts worden uitgevoerd.
          </div>
        </div>
      </section>

      {/* OVERIGE KEURINGEN */}

      <section id="overige-keuringen" className="section soft">
        <div className="container">
          <p className="eyebrow">OVERIGE MEDISCHE KEURINGEN</p>

          <h2 className="sectionTitle">
            Ook voor andere medische keuringen
          </h2>

          <p className="intro">
            Naast rijbewijskeuringen kunt u bij KeurFit terecht voor
            basis sportkeuringen, KNAF-keuringen en
            verzekeringskeuringen.
          </p>

          <div className="cards">
            <article className="card">
              <div className="cardIcon">S</div>

              <h3>Basis sportkeuring</h3>

              <p>
                Medische basisbeoordeling voorafgaand aan sport,
                sportdeelname of een sportevenement.
              </p>

              <strong>15 minuten · €60</strong>

              <br />

              <a href="#voorbereiding-sport">
                Bekijk voorbereiding →
              </a>
            </article>

            <article className="card">
              <div className="cardIcon">K</div>

              <h3>KNAF-keuring</h3>

              <p>
                Medische keuring voor deelname aan de autosport en de
                aanvraag van een KNAF-licentie.
              </p>

              <strong>15 minuten · €60</strong>

              <br />

              <a href="#voorbereiding-knaf">
                Bekijk voorbereiding →
              </a>
            </article>

            <article className="card">
              <div className="cardIcon">V</div>

              <h3>Verzekeringskeuring</h3>

              <p>
                Medische keuring in het kader van een verzekering,
                afhankelijk van de gevraagde beoordeling.
              </p>

              <strong>30 minuten</strong>

              <br />

              <a href="#voorbereiding-verzekering">
                Bekijk voorbereiding →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CBR STAPPENPLAN */}

      <section id="voorbereiding" className="section">
        <div className="container">
          <p className="eyebrow">RIJBEWIJSKEURING</p>

          <h2 className="sectionTitle">
            Zo werkt uw rijbewijskeuring
          </h2>

          <p className="intro">
            Voor een rijbewijskeuring via het CBR doorloopt u eerst een
            aantal stappen. Zo voorkomt u dat tijdens de afspraak
            documenten of gegevens ontbreken.
          </p>

          <div className="steps">
            <div className="step">
              <span>1</span>

              <div>
                <h3>Vul de Gezondheidsverklaring in</h3>

                <p>
                  Start via Mijn CBR en vul daar uw Gezondheidsverklaring
                  in. Het CBR bepaalt vervolgens welke medische
                  beoordeling nodig is.
                </p>

                <a
                  href="https://www.cbr.nl/nl/rijbewijs-houden/nl/gezondheidsverklaring"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Naar informatie over de Gezondheidsverklaring →
                </a>
              </div>
            </div>

            <div className="step">
              <span>2</span>

              <div>
                <h3>Ontvang uw verwijzing</h3>

                <p>
                  Na beoordeling van uw Gezondheidsverklaring ontvangt u
                  van het CBR informatie over de benodigde keuring en,
                  indien van toepassing, ZorgDomein-code(s).
                </p>
              </div>
            </div>

            <div className="step">
              <span>3</span>

              <div>
                <h3>Plan uw afspraak</h3>

                <p>
                  Vervolgens kunt u een afspraak bij KeurFit plannen.
                  De online agenda en betaling worden binnenkort aan de
                  website toegevoegd.
                </p>
              </div>
            </div>

            <div className="step">
              <span>4</span>

              <div>
                <h3>Bereid uw keuring voor</h3>

                <p>
                  Controleer hieronder wat u voor uw type keuring moet
                  meenemen. Zo kunnen we de keuring tijdens uw afspraak
                  zo volledig mogelijk uitvoeren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAT MOET U MEENEMEN */}

      <section className="section soft">
        <div className="container">
          <p className="eyebrow">GOED VOORBEREID</p>

          <h2 className="sectionTitle">
            Wat moet u meenemen?
          </h2>

          <p className="intro">
            De voorbereiding verschilt per keuring. Bekijk hieronder
            wat u voor uw afspraak nodig heeft.
          </p>

          {/* 75+ ALTIJD OPEN */}

          <div
            id="voorbereiding-75"
            className="card preparationOpen"
            style={{ marginBottom: "18px" }}
          >
            <div className="cardIcon">75</div>

            <h3>75+ rijbewijskeuring</h3>

            <p>
              Heeft u de Gezondheidsverklaring ingevuld en heeft het CBR
              u verwezen voor een 75+ keuring? Neem dan het volgende mee:
            </p>

            <ul>
              <li>
                <strong>Geldig identiteitsbewijs:</strong> paspoort,
                ID-kaart of rijbewijs.
              </li>

              <li>
                <strong>ZorgDomein-code van het CBR.</strong> Deze ontvangt
                u nadat u de Gezondheidsverklaring heeft ingevuld en het
                CBR uw aanvraag heeft verwerkt.
              </li>

              <li>
                <strong>Actueel medicatieoverzicht van de apotheek.</strong>{" "}
                Neem dit ook mee wanneer u op dit moment geen medicijnen
                gebruikt.
              </li>

              <li>
                <strong>Een kleine hoeveelheid verse urine.</strong> Vang
                deze maximaal 2 uur vóór uw afspraak op en neem de urine
                mee in een schoon, goed afgesloten potje.
              </li>

              <li>
                <strong>Bril of contactlenzen</strong> wanneer u deze
                gebruikt. Draagt u contactlenzen? Neem dan ook de sterkte
                van uw lenzen mee.
              </li>

              <li>
                <strong>Relevante medische informatie,</strong> bijvoorbeeld
                een recente brief van uw behandelend specialist.
              </li>
            </ul>
          </div>

          {/* TOT 75 INKLAPBAAR */}

          <details
            id="voorbereiding-tot75"
            className="preparationDetails"
          >
            <summary>
              <div className="preparationSummaryLeft">
                <div className="cardIcon">M</div>

                <div>
                  <h3>Medische rijbewijskeuring tot 75 jaar</h3>
                  <p>Bekijk wat u moet meenemen</p>
                </div>
              </div>

              <span className="preparationPlus">+</span>
            </summary>

            <div className="preparationContent">
              <p>
                Bent u door het CBR verwezen voor een medische
                beoordeling? Neem dan het volgende mee:
              </p>

              <ol>
                <li>
                  <strong>Geldig identiteitsbewijs.</strong>
                </li>

                <li>
                  <strong>
                    CBR-verwijsbrief met alle ZorgDomein-codes
                  </strong>{" "}
                  en eventuele papieren formulieren.
                </li>

                <li>
                  <strong>Actueel medicatieoverzicht</strong> als u
                  medicijnen gebruikt.
                </li>

                <li>
                  <strong>Bril of contactlenzen.</strong> Bij
                  contactlenzen neemt u ook de sterkte mee.
                </li>

                <li>
                  <strong>Relevante medische informatie,</strong>{" "}
                  bijvoorbeeld een recente specialistenbrief.
                </li>
              </ol>

              <div className="notice">
                <strong>Controleer uw CBR-verwijzing.</strong> Heeft u
                meerdere ZorgDomein-codes ontvangen? Neem deze allemaal
                mee.
              </div>
            </div>
          </details>

          {/* SPORT INKLAPBAAR */}

          <details
            id="voorbereiding-sport"
            className="preparationDetails"
          >
            <summary>
              <div className="preparationSummaryLeft">
                <div className="cardIcon">S</div>

                <div>
                  <h3>Basis sportkeuring</h3>
                  <p>Bekijk voorbereiding en download het formulier</p>
                </div>
              </div>

              <span className="preparationPlus">+</span>
            </summary>

            <div className="preparationContent">
              <p>
                Voor de basis sportkeuring vragen we u vooraf onze
                gezondheidsverklaring in te vullen. Download het
                formulier, vul het thuis in en neem het ingevuld mee
                naar uw afspraak.
              </p>

              <div className="buttons">
                <a
                  href="/KeurFit-Gezondheidsverklaring-Sportkeuring.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Download gezondheidsverklaring
                </a>
              </div>

              <h3>Neem daarnaast mee:</h3>

              <ul>
                <li>
                  <strong>
                    Het volledig ingevulde KeurFit-formulier.
                  </strong>
                </li>

                <li>
                  <strong>Een geldig identiteitsbewijs.</strong>
                </li>

                <li>
                  <strong>Een actueel medicatieoverzicht.</strong>
                </li>

                <li>
                  <strong>Een kleine hoeveelheid verse urine.</strong>{" "}
                  Neem deze mee in een schoon en goed afgesloten potje.
                </li>

                <li>
                  <strong>Bril of contactlenzen</strong> indien van
                  toepassing. Bij contactlenzen bij voorkeur ook de
                  sterkte.
                </li>

                <li>
                  <strong>Relevante medische informatie,</strong>{" "}
                  bijvoorbeeld een recente brief van een behandelend
                  specialist.
                </li>
              </ul>

              <p>
                Heeft de sportbond, organisator of andere instantie een
                eigen medisch formulier? Neem dit dan ook mee naar de
                afspraak.
              </p>
            </div>
          </details>

          {/* KNAF INKLAPBAAR */}

          <details
            id="voorbereiding-knaf"
            className="preparationDetails"
          >
            <summary>
              <div className="preparationSummaryLeft">
                <div className="cardIcon">K</div>

                <div>
                  <h3>KNAF-keuring</h3>
                  <p>Bekijk voorbereiding en download het KNAF-formulier</p>
                </div>
              </div>

              <span className="preparationPlus">+</span>
            </summary>

            <div className="preparationContent">
              <p>
                Voor een KNAF-keuring gebruikt u het officiële
                KNAF-keuringsformulier. Download het formulier vooraf en
                vul het gedeelte dat voor de aanvrager/deelnemer bestemd
                is alvast thuis in.
              </p>

              <div className="buttons">
                <a
                  href="https://anyday-alaska-01.ams3.cdn.digitaloceanspaces.com/knaf/media/KNAF/2026/Keuringsformulier-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Download KNAF-keuringsformulier 2026
                </a>
              </div>

              <h3>Neem naar de afspraak mee:</h3>

              <ul>
                <li>
                  <strong>Het KNAF-keuringsformulier.</strong> Vul uw
                  eigen gedeelte vooraf zo volledig mogelijk in.
                </li>

                <li>
                  <strong>Een geldig identiteitsbewijs.</strong>
                </li>

                <li>
                  <strong>Een actueel medicatieoverzicht.</strong>
                </li>

                <li>
                  <strong>Een kleine hoeveelheid verse urine.</strong>{" "}
                  Neem deze mee in een schoon en goed afgesloten potje.
                </li>

                <li>
                  <strong>Bril of contactlenzen</strong> indien van
                  toepassing. Bij contactlenzen bij voorkeur ook de
                  sterkte.
                </li>

                <li>
                  <strong>Relevante medische informatie</strong> wanneer
                  dit voor de keuring van belang kan zijn.
                </li>
              </ul>

              <div className="notice">
                <strong>Let op:</strong> afhankelijk van het type
                KNAF-licentie kunnen aanvullende onderzoeken of
                documenten nodig zijn. Controleer daarom vooraf de eisen
                die voor uw licentie gelden.
              </div>
            </div>
          </details>

          {/* VERZEKERING INKLAPBAAR */}

          <details
            id="voorbereiding-verzekering"
            className="preparationDetails"
          >
            <summary>
              <div className="preparationSummaryLeft">
                <div className="cardIcon">V</div>

                <div>
                  <h3>Verzekeringskeuring</h3>
                  <p>Bekijk wat u moet meenemen</p>
                </div>
              </div>

              <span className="preparationPlus">+</span>
            </summary>

            <div className="preparationContent">
              <p>
                Bij een verzekeringskeuring bepaalt de verzekeraar welke
                informatie en onderzoeken nodig zijn.
              </p>

              <ul>
                <li>
                  <strong>Een geldig identiteitsbewijs.</strong>
                </li>

                <li>
                  <strong>
                    Alle formulieren en documenten van uw verzekeraar.
                  </strong>
                </li>

                <li>
                  <strong>Een actueel medicatieoverzicht</strong> indien
                  relevant voor de gevraagde keuring.
                </li>

                <li>
                  <strong>Relevante medische informatie</strong> wanneer
                  de verzekeraar hierom vraagt.
                </li>
              </ul>

              <p>
                Controleer vooraf goed welke formulieren uw verzekeraar
                heeft meegestuurd en neem deze mee naar de afspraak.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* CBR */}

      <section className="section dark">
        <div className="container">
          <p className="eyebrow light">CBR-KEURING</p>

          <h2 className="sectionTitle">
            Het CBR beslist over uw rijgeschiktheid
          </h2>

          <p
            className="intro"
            style={{ color: "#c7d9d1" }}
          >
            KeurFit verricht de medische beoordeling en rapporteert de
            relevante bevindingen. Het CBR neemt daarna de uiteindelijke
            beslissing over uw rijgeschiktheid.
          </p>
        </div>
      </section>

      {/* TARIEVEN */}

      <section id="tarieven" className="section">
        <div className="container">
          <p className="eyebrow">TARIEVEN</p>

          <h2 className="sectionTitle">
            Transparante tarieven
          </h2>

          <p className="intro">
            Alle vermelde tarieven zijn consumentenprijzen inclusief btw,
            voor zover btw van toepassing is.
          </p>

          <div className="cards">
            <article className="card priceCard">
              <p className="smallTitle">RIJBEWIJSKEURING</p>

              <h3>75+ rijbewijskeuring</h3>

              <p className="price">€55</p>

              <p>15 minuten</p>

              <a href="#voorbereiding-75">
                Bekijk voorbereiding →
              </a>
            </article>

            <article className="card priceCard featuredPrice">
              <p className="smallTitle">RIJBEWIJSKEURING</p>

              <h3>Medische keuring tot 75 jaar</h3>

              <p className="price">€55</p>

              <p>15 minuten</p>

              <a href="#voorbereiding-tot75">
                Bekijk voorbereiding →
              </a>
            </article>

            <article className="card priceCard">
              <p className="smallTitle">SPORT</p>

              <h3>Basis sportkeuring</h3>

              <p className="price">€60</p>

              <p>15 minuten</p>

              <a href="#voorbereiding-sport">
                Bekijk voorbereiding →
              </a>
            </article>

            <article className="card priceCard">
              <p className="smallTitle">AUTOSPORT</p>

              <h3>KNAF-keuring</h3>

              <p className="price">€60</p>

              <p>15 minuten</p>

              <a href="#voorbereiding-knaf">
                Bekijk voorbereiding →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section id="faq" className="section soft">
        <div className="container">
          <p className="eyebrow">VEELGESTELDE VRAGEN</p>

          <h2 className="sectionTitle">
            Veelgestelde vragen
          </h2>

          <div className="faq">
            <details>
              <summary>
                Wat moet ik meenemen naar een 75+ rijbewijskeuring?
              </summary>

              <p>
                Neem een geldig identiteitsbewijs, uw ZorgDomein-code,
                een actueel medicatieoverzicht van de apotheek, een
                kleine hoeveelheid verse urine van maximaal 2 uur oud,
                uw bril of gegevens over de sterkte van uw contactlenzen
                en relevante medische informatie mee. Neem het
                medicatieoverzicht ook mee wanneer u geen medicijnen
                gebruikt.
              </p>
            </details>

            <details>
              <summary>
                Waar krijg ik mijn ZorgDomein-code?
              </summary>

              <p>
                U start met het invullen van de Gezondheidsverklaring
                bij het CBR. Wanneer een medische keuring nodig is,
                ontvangt u van het CBR de benodigde verwijzing en
                ZorgDomein-code(s).
              </p>
            </details>

            <details>
              <summary>
                Wat moet ik meenemen als ik jonger ben dan 75 jaar?
              </summary>

              <p>
                Neem een geldig identiteitsbewijs, de volledige
                CBR-verwijsbrief met alle ZorgDomein-codes en eventuele
                papieren formulieren mee. Gebruikt u medicijnen? Neem
                dan ook een actueel medicatieoverzicht mee. Daarnaast
                neemt u uw bril of contactlenzen, de sterkte van uw
                lenzen en relevante medische informatie mee.
              </p>
            </details>

            <details>
              <summary>
                Moet ik urine meenemen?
              </summary>

              <p>
                Voor de 75+ rijbewijskeuring vragen we u een kleine
                hoeveelheid verse urine mee te nemen die maximaal 2 uur
                vóór de afspraak is opgevangen. Ook voor de basis
                sportkeuring en KNAF-keuring vragen we u verse urine
                mee te nemen.
              </p>
            </details>

            <details>
              <summary>
                Moet ik voor de sportkeuring vooraf een formulier invullen?
              </summary>

              <p>
                Ja. Download de KeurFit Gezondheidsverklaring voor de
                basis sportkeuring, vul deze vooraf volledig in en neem
                het formulier mee naar uw afspraak.
              </p>
            </details>

            <details>
              <summary>
                Welk formulier heb ik nodig voor een KNAF-keuring?
              </summary>

              <p>
                Gebruik het officiële KNAF-keuringsformulier voor 2026.
                Download het formulier vooraf en vul het gedeelte voor
                de aanvrager/deelnemer thuis alvast zo volledig mogelijk
                in. Neem het formulier vervolgens mee naar de keuring.
              </p>
            </details>

            <details>
              <summary>
                Hoe lang duurt een rijbewijskeuring?
              </summary>

              <p>
                Voor een standaard rijbewijskeuring reserveren we
                ongeveer 15 minuten.
              </p>
            </details>

            <details>
              <summary>
                Wie beslist uiteindelijk of ik rijgeschikt ben?
              </summary>

              <p>
                Het CBR neemt de uiteindelijke beslissing over uw
                rijgeschiktheid. KeurFit voert de medische beoordeling
                uit en rapporteert de relevante bevindingen.
              </p>
            </details>
          </div>
        </div>
      </section>

    {/* AFSPRAAK MAKEN */}

<section id="afspraak" className="section appointment">
  <div className="container">
    <p className="eyebrow">AFSPRAAK MAKEN</p>

    <h2 className="sectionTitle">
      Plan uw afspraak bij KeurFit
    </h2>

    <p className="intro">
      Kies hieronder de gewenste keuring en een beschikbaar moment.
      U kunt uw afspraak direct online plannen.
    </p>

    <div className="bookingCard">
      <SimplyBookWidget />
    </div>
  </div>
</section>

      {/* FOOTER */}

      <footer>
        <div className="container footer">
          {/* KEURFIT */}

          <div>
            <Image
              src="/keurfit-logo.png"
              alt="KeurFit"
              width={200}
              height={200}
              className="footerLogoImage"
            />

            <p>
              Rijbewijskeuringen en medische keuringen door een
              BIG-geregistreerd arts in Nijmegen.
            </p>
          </div>

          {/* BEDRIJFSGEGEVENS */}

          <div>
            <strong>KeurFit</strong>

            <p>Onderdeel van AestheFit</p>
            <p>KVK: 99164752</p>
            <p>BTW-id: NL005374477B91</p>
            <p>Nijmegen</p>
          </div>

          {/* NAVIGATIE */}

          <div>
            <strong>Navigatie</strong>

            <a href="#rijbewijskeuringen">
              Rijbewijskeuringen
            </a>

            <a href="#overige-keuringen">
              Overige keuringen
            </a>

            <a href="#voorbereiding">
              Voorbereiding
            </a>

            <a href="#tarieven">
              Tarieven
            </a>

            <a href="#faq">
              Veelgestelde vragen
            </a>
          </div>

          {/* INFORMATIE */}

          <div>
            <strong>Informatie</strong>

            <a href="/privacy">
              Privacyverklaring
            </a>

            <a href="/algemene-voorwaarden">
              Algemene voorwaarden
            </a>

            <a href="/klachtenregeling">
              Klachtenregeling
            </a>

            <a href="/cookies">
              Cookiebeleid
            </a>
          </div>
        </div>

        <div className="copyright">
          © 2026 KeurFit · onderdeel van AestheFit
        </div>
      </footer>
    </main>
  );
}
