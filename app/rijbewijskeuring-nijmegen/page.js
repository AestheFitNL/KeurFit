export const metadata = {
  title: "Rijbewijskeuring Nijmegen | KeurFit",
  description:
    "Rijbewijskeuring in Nijmegen door een BIG-geregistreerd arts. Voor 75+ keuringen en CBR-keuringen waarbij een algemeen keurend arts volstaat.",
  alternates: {
    canonical: "/rijbewijskeuring-nijmegen",
  },
};

const bookingUrl = "https://cal.com/ali-kumas-2t9ulq/15min";

export default function RijbewijskeuringNijmegen() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a href="/" className="logo">
            <span className="logoK">K</span>
            <span>
              Keur<span>Fit</span>
            </span>
          </a>

          <nav>
            <a href="/">Home</a>
            <a href="#keuringen">Keuringen</a>
            <a href="#meenemen">Meenemen</a>
            <a href="#faq">FAQ</a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navButton"
            >
              Afspraak maken
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">RIJBEWIJSKEURING NIJMEGEN</p>

            <h1>
              Rijbewijskeuring in Nijmegen
              <span>Snel, duidelijk en persoonlijk.</span>
            </h1>

            <p className="lead">
              Heeft u een medische keuring nodig voor uw rijbewijs? Bij KeurFit
              kunt u in Nijmegen terecht voor verschillende rijbewijskeuringen
              die door een BIG-geregistreerd arts mogen worden uitgevoerd.
            </p>

            <div className="buttons">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Plan uw afspraak
              </a>

              <a href="#keuringen" className="button secondary">
                Bekijk de keuringen
              </a>
            </div>

            <div className="trust">
              <span>✓ BIG-geregistreerd arts</span>
              <span>✓ Nijmegen</span>
              <span>✓ Online afspraak maken</span>
            </div>
          </div>

          <div className="infoCard">
            <p className="smallTitle">PRAKTISCHE INFORMATIE</p>
            <h2>Wat neemt u mee?</h2>

            <ul>
              <li>Geldig legitimatiebewijs</li>
              <li>CBR-verwijsbrief, indien van toepassing</li>
              <li>ZorgDomein-code(s), indien ontvangen</li>
              <li>Bril of contactlenzen, indien van toepassing</li>
              <li>Actueel medicatieoverzicht indien relevant</li>
            </ul>

            <p className="cardText">
              Staat in uw CBR-brief een specifieke specialist genoemd? Neem dan
              vooraf contact op om te controleren of KeurFit de keuring kan
              uitvoeren.
            </p>
          </div>
        </div>
      </section>

      <section id="keuringen" className="section">
        <div className="container">
          <p className="eyebrow">WELKE KEURINGEN?</p>

          <h2 className="sectionTitle">
            Voor verschillende CBR- en rijbewijskeuringen
          </h2>

          <p className="intro">
            Welke arts uw keuring mag uitvoeren, hangt af van de verwijzing van
            het CBR. Als in de verwijzing een algemeen keurend arts wordt
            gevraagd, kan KeurFit de keuring in veel gevallen uitvoeren.
          </p>

          <div className="cards">
            <article className="card">
              <div className="cardIcon">75</div>
              <h3>75+ rijbewijskeuring</h3>
              <p>
                Medische keuring voor het verlengen van uw rijbewijs vanaf 75
                jaar.
              </p>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan 75+ keuring →
              </a>
            </article>

            <article className="card">
              <div className="cardIcon">+</div>
              <h3>CBR-keuring op verwijzing</h3>
              <p>
                Heeft u een verwijzing ontvangen van het CBR? De verwijsbrief
                bepaalt welk type arts de beoordeling moet uitvoeren.
              </p>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan afspraak →
              </a>
            </article>

            <article className="card">
              <div className="cardIcon">✓</div>
              <h3>Aanvullende artsenformulieren</h3>
              <p>
                Bepaalde medische CBR-formulieren kunnen door een algemeen
                BIG-geregistreerd arts worden ingevuld.
              </p>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan afspraak →
              </a>
            </article>
          </div>

          <div className="notice">
            <strong>Let op:</strong> als het CBR expliciet een psychiater,
            neuroloog, oogarts, cardioloog, bedrijfsarts of andere specifieke
            arts vraagt, kan KeurFit deze keuring niet als algemene
            rijbewijskeuring uitvoeren.
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container twoColumns">
          <div>
            <p className="eyebrow">KEURING IN NIJMEGEN</p>

            <h2 className="sectionTitle">
              Dichtbij voor Nijmegen en omgeving
            </h2>
          </div>

          <div className="aboutText">
            <p>
              KeurFit richt zich op rijbewijskeuringen in Nijmegen en de
              omliggende regio.
            </p>

            <p>
              De praktijk is geschikt voor cliënten uit onder andere Nijmegen,
              Lent, Beuningen, Wijchen, Malden, Berg en Dal en Groesbeek.
            </p>

            <p>
              Het exacte praktijkadres wordt bij de afspraak gecommuniceerd.
            </p>
          </div>
        </div>
      </section>

      <section id="meenemen" className="section">
        <div className="container">
          <p className="eyebrow">VOORBEREIDING</p>

          <h2 className="sectionTitle">
            Zo bereidt u zich voor op uw rijbewijskeuring
          </h2>

          <div className="steps">
            <div className="step">
              <span>1</span>

              <div>
                <h3>Lees uw CBR-brief</h3>
                <p>
                  Controleer welke arts of welk type keuring het CBR van u
                  vraagt.
                </p>
              </div>
            </div>

            <div className="step">
              <span>2</span>

              <div>
                <h3>Plan uw afspraak</h3>
                <p>
                  Kies online een beschikbaar moment voor uw medische keuring.
                </p>
              </div>
            </div>

            <div className="step">
              <span>3</span>

              <div>
                <h3>Neem documenten mee</h3>
                <p>
                  Neem uw legitimatie, CBR-documenten en eventuele
                  ZorgDomein-code mee.
                </p>
              </div>
            </div>

            <div className="step">
              <span>4</span>

              <div>
                <h3>Medische beoordeling</h3>
                <p>
                  Tijdens de afspraak verricht de arts de benodigde medische
                  beoordeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <p className="eyebrow light">BELANGRIJK</p>

          <h2 className="sectionTitle">
            De arts keurt, het CBR beslist
          </h2>

          <p className="intro" style={{ color: "#c7d9d1" }}>
            Tijdens de rijbewijskeuring rapporteert de arts de relevante
            medische bevindingen. Het CBR beoordeelt vervolgens of u voldoet aan
            de eisen voor rijgeschiktheid.
          </p>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <p className="eyebrow">VEELGESTELDE VRAGEN</p>

          <h2 className="sectionTitle">
            Veelgestelde vragen over rijbewijskeuringen
          </h2>

          <div className="faq">
            <details>
              <summary>Wanneer heb ik een rijbewijskeuring nodig?</summary>
              <p>
                Bijvoorbeeld wanneer u 75 jaar of ouder bent en uw rijbewijs
                wilt verlengen, of wanneer het CBR vanwege uw medische situatie
                aanvullende informatie nodig heeft.
              </p>
            </details>

            <details>
              <summary>Kan ik iedere CBR-keuring bij KeurFit laten doen?</summary>
              <p>
                Nee. De CBR-verwijzing bepaalt welk type arts de keuring moet
                uitvoeren. Sommige beoordelingen moeten door een specifieke
                medisch specialist worden gedaan.
              </p>
            </details>

            <details>
              <summary>Hoe lang duurt een afspraak?</summary>
              <p>
                Een standaard rijbewijskeuring wordt momenteel ingepland voor
                ongeveer 15 minuten. Bij uitgebreidere beoordelingen kan meer
                tijd nodig zijn.
              </p>
            </details>

            <details>
              <summary>Moet ik mijn CBR-documenten meenemen?</summary>
              <p>
                Ja. Neem uw verwijsbrief en eventuele ZorgDomein-code(s) mee.
              </p>
            </details>

            <details>
              <summary>Beslist KeurFit of ik mag blijven rijden?</summary>
              <p>
                Nee. KeurFit verricht de medische beoordeling. Het CBR neemt de
                uiteindelijke beslissing over uw rijgeschiktheid.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section appointment">
        <div className="container appointmentInner">
          <div>
            <p className="eyebrow">AFSPRAAK MAKEN</p>
            <h2>Rijbewijskeuring in Nijmegen</h2>
            <p>
              Kies direct online een beschikbaar moment voor uw keuring.
            </p>
          </div>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Bekijk beschikbare tijden
          </a>
        </div>
      </section>

      <footer>
        <div className="container footer">
          <div>
            <div className="logo footerLogo">
              <span className="logoK">K</span>
              <span>
                Keur<span>Fit</span>
              </span>
            </div>

            <p>
              Rijbewijskeuringen en medische keuringen door een
              BIG-geregistreerd arts in Nijmegen.
            </p>
          </div>

          <div>
            <strong>KeurFit</strong>
            <p>Onderdeel van AestheFit</p>
            <p>KVK: 99164752</p>
            <p>BTW-id: NL005374477B91</p>
            <p>Nijmegen</p>
          </div>

          <div>
            <strong>Navigatie</strong>
            <a href="/">Home</a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Afspraak maken
            </a>
          </div>
        </div>

        <div className="copyright">
          © 2026 KeurFit · onderdeel van AestheFit
        </div>
      </footer>

      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobileAppointment"
      >
        Afspraak maken
      </a>
    </main>
  );
}
