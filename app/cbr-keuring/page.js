export const metadata = {
  title: "CBR Keuring Nijmegen | Medische Rijbewijskeuring | KeurFit",
  description:
    "CBR medische keuring in Nijmegen door een BIG-geregistreerd arts. Voor verwijzingen waarbij een algemeen keurend arts volstaat. Plan eenvoudig online.",
  alternates: {
    canonical: "/cbr-keuring",
  },
};

const bookingUrl = "https://cal.com/ali-kumas-2t9ulq/15min";

export default function CbrKeuring() {
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
            <a href="/rijbewijskeuring-nijmegen">Rijbewijskeuringen</a>
            <a href="#werkwijze">Werkwijze</a>
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
            <p className="eyebrow">CBR KEURING NIJMEGEN</p>

            <h1>
              Medische CBR-keuring
              <span>in Nijmegen</span>
            </h1>

            <p className="lead">
              Heeft u van het CBR een verwijzing ontvangen voor een medische
              keuring? Bij KeurFit kunt u terecht wanneer de keuring door een
              algemeen BIG-geregistreerd keurend arts mag worden uitgevoerd.
            </p>

            <div className="buttons">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Plan CBR-keuring
              </a>

              <a href="#werkwijze" className="button secondary">
                Hoe werkt het?
              </a>
            </div>

            <div className="trust">
              <span>✓ BIG-geregistreerd arts</span>
              <span>✓ Nijmegen</span>
              <span>✓ CBR-verwijsbrief is leidend</span>
            </div>
          </div>

          <div className="infoCard">
            <p className="smallTitle">VOOR UW AFSPRAAK</p>

            <h2>Controleer uw CBR-brief</h2>

            <p>
              In uw verwijzing staat welk type arts de beoordeling moet
              uitvoeren. Staat er een algemeen keurend arts vermeld, dan kan
              KeurFit de keuring in veel gevallen uitvoeren.
            </p>

            <ul>
              <li>Neem uw CBR-verwijsbrief mee</li>
              <li>Neem eventuele ZorgDomein-code(s) mee</li>
              <li>Neem een geldig legitimatiebewijs mee</li>
              <li>Neem uw bril of contactlenzen mee indien relevant</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">CBR VERWIJZING</p>

          <h2 className="sectionTitle">
            Welke CBR-keuringen kan KeurFit uitvoeren?
          </h2>

          <p className="intro">
            Dit hangt af van de precieze verwijzing van het CBR. Bij sommige
            aandoeningen of vragen kan een algemeen keurend arts de benodigde
            medische informatie aanleveren. In andere situaties is een
            specifieke medisch specialist vereist.
          </p>

          <div className="cards">
            <article className="card">
              <div className="cardIcon">✓</div>
              <h3>Algemeen keurend arts</h3>
              <p>
                Staat in uw verwijzing dat de beoordeling door een algemeen
                keurend arts mag worden uitgevoerd? Dan kunt u in veel gevallen
                bij KeurFit terecht.
              </p>
            </article>

            <article className="card">
              <div className="cardIcon">?</div>
              <h3>Twijfel over uw verwijzing?</h3>
              <p>
                Als u niet zeker weet welke arts nodig is, kunt u uw verwijzing
                vooraf controleren voordat u een afspraak maakt.
              </p>
            </article>

            <article className="card">
              <div className="cardIcon">!</div>
              <h3>Specifieke specialist nodig</h3>
              <p>
                Vraagt het CBR expliciet om bijvoorbeeld een psychiater,
                neuroloog, cardioloog of oogarts, dan moet de beoordeling door
                die specialist worden uitgevoerd.
              </p>
            </article>
          </div>

          <div className="notice">
            <strong>Belangrijk:</strong> de tekst in uw CBR-verwijzing is altijd
            leidend. KeurFit bepaalt niet zelf welk type arts voor uw dossier
            vereist is.
          </div>
        </div>
      </section>

      <section id="werkwijze" className="section soft">
        <div className="container">
          <p className="eyebrow">WERKWIJZE</p>

          <h2 className="sectionTitle">
            Uw CBR-keuring stap voor stap
          </h2>

          <div className="steps">
            <div className="step">
              <span>1</span>
              <div>
                <h3>Lees uw verwijzing</h3>
                <p>
                  Controleer welk type arts het CBR voor uw medische beoordeling
                  vraagt.
                </p>
              </div>
            </div>

            <div className="step">
              <span>2</span>
              <div>
                <h3>Plan een afspraak</h3>
                <p>
                  Wanneer een algemeen keurend arts volstaat, kunt u online een
                  beschikbaar moment kiezen.
                </p>
              </div>
            </div>

            <div className="step">
              <span>3</span>
              <div>
                <h3>Medische beoordeling</h3>
                <p>
                  De arts bespreekt de relevante medische informatie en voert
                  waar nodig lichamelijk onderzoek uit.
                </p>
              </div>
            </div>

            <div className="step">
              <span>4</span>
              <div>
                <h3>Beoordeling door het CBR</h3>
                <p>
                  De medische informatie wordt volgens de juiste procedure
                  verwerkt. Het CBR neemt de uiteindelijke beslissing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoColumns">
          <div>
            <p className="eyebrow">WAT NEEMT U MEE?</p>

            <h2 className="sectionTitle">
              Goed voorbereid naar uw CBR-keuring
            </h2>
          </div>

          <div className="aboutText">
            <p>
              Neem in ieder geval uw geldige legitimatiebewijs en de
              CBR-verwijsbrief mee.
            </p>

            <p>
              Heeft u van het CBR een ZorgDomein-code ontvangen? Neem deze dan
              ook mee. Daarnaast kan een actueel medicatieoverzicht nuttig zijn.
            </p>

            <p>
              Draagt u een bril of contactlenzen, neem deze dan mee naar de
              afspraak wanneer dit voor uw keuring relevant is.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <p className="eyebrow light">RIJGESCHIKTHEID</p>

          <h2 className="sectionTitle">
            Het CBR neemt de definitieve beslissing
          </h2>

          <p className="intro" style={{ color: "#c7d9d1" }}>
            KeurFit verricht de medische beoordeling en rapporteert de
            relevante bevindingen. Het CBR beslist daarna of u voldoet aan de
            eisen voor rijgeschiktheid.
          </p>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <p className="eyebrow">VEELGESTELDE VRAGEN</p>

          <h2 className="sectionTitle">
            Veelgestelde vragen over een CBR-keuring
          </h2>

          <div className="faq">
            <details>
              <summary>Kan KeurFit iedere CBR-keuring uitvoeren?</summary>
              <p>
                Nee. Dit hangt af van de CBR-verwijzing. Wanneer het CBR een
                specifieke specialist vraagt, moet de beoordeling door die
                specialist worden uitgevoerd.
              </p>
            </details>

            <details>
              <summary>Hoe weet ik welke arts ik nodig heb?</summary>
              <p>
                Dit staat in de verwijzing of medische documenten die u van het
                CBR ontvangt.
              </p>
            </details>

            <details>
              <summary>Hoe lang duurt een CBR-keuring?</summary>
              <p>
                Voor een standaard afspraak wordt momenteel ongeveer 15 minuten
                ingepland. Bij uitgebreidere beoordelingen kan meer tijd nodig
                zijn.
              </p>
            </details>

            <details>
              <summary>Heb ik mijn ZorgDomein-code nodig?</summary>
              <p>
                Als u een ZorgDomein-code heeft ontvangen, neem deze dan mee
                naar uw afspraak.
              </p>
            </details>

            <details>
              <summary>Kan KeurFit bepalen of ik rijgeschikt ben?</summary>
              <p>
                Nee. KeurFit levert de medische beoordeling. Het CBR neemt de
                uiteindelijke beslissing over de rijgeschiktheid.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section appointment">
        <div className="container appointmentInner">
          <div>
            <p className="eyebrow">AFSPRAAK MAKEN</p>

            <h2>Plan uw CBR-keuring in Nijmegen</h2>

            <p>
              Controleer eerst of in uw verwijzing een algemeen keurend arts
              wordt gevraagd.
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
            <a href="/rijbewijskeuring-nijmegen">
              Rijbewijskeuring Nijmegen
            </a>
            <a href="/75-plus-keuring">75+ keuring</a>
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
        CBR-keuring plannen
      </a>
    </main>
  );
}
