import Image from "next/image";

export default function Home() {
  return (
    <main>
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
            <a href="#werkwijze">Werkwijze</a>
            <a href="#faq">FAQ</a>

            <a href="#afspraak" className="navButton">
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
              Snel en zorgvuldig
              <span>medisch gekeurd.</span>
            </h1>

            <p className="lead">
              Rijbewijskeuringen en andere medische keuringen door een
              BIG-geregistreerd arts in Nijmegen. Persoonlijk, duidelijk en
              eenvoudig online te plannen.
            </p>

            <div className="buttons">
              <a href="#afspraak" className="button">
                Afspraak maken
              </a>

              <a href="#rijbewijskeuringen" className="button secondary">
                Bekijk de keuringen
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

      <section id="rijbewijskeuringen" className="section">
        <div className="container">
          <p className="eyebrow">RIJBEWIJSKEURINGEN</p>

          <h2 className="sectionTitle">
            Medische keuringen voor uw rijbewijs
          </h2>

          <p className="intro">
            Bij KeurFit kunt u terecht voor verschillende rijbewijskeuringen.
            De verwijzing van het CBR is altijd leidend bij de vraag welk type
            arts de keuring moet uitvoeren.
          </p>

          <div className="cards">
            <article className="card">
              <div className="cardIcon">75</div>

              <h3>75+ rijbewijskeuring</h3>

              <p>
                Medische keuring voor het verlengen van uw rijbewijs vanaf
                75 jaar.
              </p>

              <a href="/75-plus-keuring">
                Meer over de 75+ keuring →
              </a>
            </article>

            <article className="card">
              <div className="cardIcon">+</div>

              <h3>CBR-keuring op verwijzing</h3>

              <p>
                Heeft u van het CBR een verwijzing ontvangen? Wanneer een
                algemeen keurend arts volstaat, kunt u in veel gevallen bij
                KeurFit terecht.
              </p>

              <a href="/cbr-keuring">
                Meer over CBR-keuringen →
              </a>
            </article>

            <article className="card">
              <div className="cardIcon">✓</div>

              <h3>CBR-artsenformulieren</h3>

              <p>
                Bepaalde medische artsenformulieren kunnen door een algemeen
                BIG-geregistreerd arts worden ingevuld.
              </p>

              <a href="/rijbewijskeuring-nijmegen">
                Meer over rijbewijskeuringen →
              </a>
            </article>
          </div>

          <div className="notice">
            <strong>Let op:</strong> vraagt het CBR expliciet om een
            psychiater, neuroloog, oogarts, cardioloog, bedrijfsarts of andere
            specifieke specialist, dan moet de beoordeling door die arts worden
            uitgevoerd.
          </div>
        </div>
      </section>

      <section id="overige-keuringen" className="section soft">
        <div className="container">
          <p className="eyebrow">OVERIGE MEDISCHE KEURINGEN</p>

          <h2 className="sectionTitle">
            Ook voor andere medische beoordelingen
          </h2>

          <p className="intro">
            Naast rijbewijskeuringen wil KeurFit ook andere medische keuringen
            aanbieden in Nijmegen.
          </p>

          <div className="cards">
            <article className="card">
              <div className="cardIcon">S</div>
              <h3>Sportkeuring</h3>
              <p>
                Medische beoordeling voorafgaand aan sport, inspanning of
                deelname aan een evenement.
              </p>
            </article>

            <article className="card">
              <div className="cardIcon">M</div>
              <h3>Medische verklaring</h3>
              <p>
                Onafhankelijke medische beoordeling wanneer een medische
                verklaring nodig is.
              </p>
            </article>

            <article className="card">
              <div className="cardIcon">V</div>
              <h3>Verzekeringskeuring</h3>
              <p>
                Medische keuring in het kader van een verzekering, afhankelijk
                van de gevraagde beoordeling.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="werkwijze" className="section">
        <div className="container">
          <p className="eyebrow">WERKWIJZE</p>

          <h2 className="sectionTitle">
            Een keuring in vier eenvoudige stappen
          </h2>

          <div className="steps">
            <div className="step">
              <span>1</span>
              <div>
                <h3>Kies uw keuring</h3>
                <p>
                  Controleer welke medische keuring of beoordeling u nodig
                  heeft.
                </p>
              </div>
            </div>

            <div className="step">
              <span>2</span>
              <div>
                <h3>Plan online een afspraak</h3>
                <p>
                  Kies hieronder via de agenda een beschikbaar moment.
                </p>
              </div>
            </div>

            <div className="step">
              <span>3</span>
              <div>
                <h3>Kom naar de keuring</h3>
                <p>
                  Neem uw legitimatie en relevante documenten mee naar de
                  afspraak.
                </p>
              </div>
            </div>

            <div className="step">
              <span>4</span>
              <div>
                <h3>Medische beoordeling</h3>
                <p>
                  De arts voert de benodigde beoordeling uit en verwerkt de
                  relevante medische bevindingen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container twoColumns">
          <div>
            <p className="eyebrow">KEURFIT</p>

            <h2 className="sectionTitle">
              Medische keuringen met persoonlijke aandacht
            </h2>
          </div>

          <div className="aboutText">
            <p>
              KeurFit is gericht op toegankelijke medische keuringen in
              Nijmegen en omgeving.
            </p>

            <p>
              De keuringen worden uitgevoerd door een BIG-geregistreerd arts,
              met aandacht voor duidelijke uitleg en zorgvuldige medische
              beoordeling.
            </p>

            <p>
              KeurFit is er voor cliënten uit Nijmegen en omliggende plaatsen
              zoals Lent, Beuningen, Wijchen, Malden, Berg en Dal en Groesbeek.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <p className="eyebrow light">CBR-KEURING</p>

          <h2 className="sectionTitle">
            Het CBR beslist over uw rijgeschiktheid
          </h2>

          <p className="intro" style={{ color: "#c7d9d1" }}>
            KeurFit verricht de medische beoordeling en rapporteert de
            relevante bevindingen. Het CBR neemt daarna de uiteindelijke
            beslissing over uw rijgeschiktheid.
          </p>
        </div>
      </section>

              <section className="section">
  <div className="container">
    <p className="eyebrow">TARIEVEN</p>

    <h2 className="sectionTitle">
      Voordelig medisch gekeurd in Nijmegen
    </h2>

    <p className="intro">
      Transparante tarieven zonder verrassingen. Alle onderstaande bedragen zijn
      inclusief btw.
    </p>

    <div className="cards">
      <article className="card priceCard">
        <p className="smallTitle">75+ RIJBEWIJSKEURING</p>
        <h3>75+ keuring</h3>

        <p className="price">
          €50
          <span> incl. btw</span>
        </p>

        <p>
          Voor de medische rijbewijskeuring vanaf 75 jaar.
        </p>

        <a href="#afspraak">
          Plan uw keuring →
        </a>
      </article>

      <article className="card priceCard featuredPrice">
        <p className="smallTitle">CBR KEUREND ARTS</p>
        <h3>CBR-keuring</h3>

        <p className="price">
          €50
          <span> incl. btw</span>
        </p>

        <p>
          Voor een CBR-verwijzing waarbij een algemeen keurend arts volstaat.
        </p>

        <a href="#afspraak">
          Plan uw keuring →
        </a>
      </article>

      <article className="card priceCard">
        <p className="smallTitle">AANVULLEND</p>
        <h3>Extra CBR-formulier</h3>

        <p className="price">
          vanaf €25
          <span> incl. btw</span>
        </p>

        <p>
          Wanneer tijdens dezelfde afspraak aanvullende beoordeling of een
          aanvullend formulier nodig is.
        </p>

        <a href="#afspraak">
          Afspraak maken →
        </a>
      </article>
    </div>

    <div className="notice">
      <strong>Goed om te weten:</strong> wanneer een keuring uitgebreider is
      dan een standaard afspraak of extra tijd vereist, wordt dit vooraf met u
      besproken.
    </div>
  </div>
</section>
        
      <section id="faq" className="section">
        <div className="container">
          <p className="eyebrow">VEELGESTELDE VRAGEN</p>

          <h2 className="sectionTitle">
            Veelgestelde vragen
          </h2>

          <div className="faq">
            <details>
              <summary>Kan ik bij KeurFit terecht voor een 75+ keuring?</summary>
              <p>
                Ja. Een 75+ rijbewijskeuring kan door een BIG-geregistreerd arts
                worden uitgevoerd.
              </p>
            </details>

            <details>
              <summary>Kan KeurFit iedere CBR-keuring uitvoeren?</summary>
              <p>
                Nee. De verwijzing van het CBR bepaalt welk type arts de keuring
                moet uitvoeren.
              </p>
            </details>

            <details>
              <summary>Wat moet ik meenemen naar een rijbewijskeuring?</summary>
              <p>
                Neem uw legitimatiebewijs, CBR-documenten, eventuele
                ZorgDomein-code(s) en indien relevant uw bril, contactlenzen en
                medicatieoverzicht mee.
              </p>
            </details>

            <details>
              <summary>Hoe lang duurt een rijbewijskeuring?</summary>
              <p>
                Voor een standaard rijbewijskeuring wordt momenteel ongeveer
                15 minuten gereserveerd.
              </p>
            </details>

            <details>
              <summary>Wie beslist uiteindelijk of ik rijgeschikt ben?</summary>
              <p>
                Het CBR neemt de uiteindelijke beslissing over uw
                rijgeschiktheid.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="afspraak" className="section appointment bookingSection">
        <div className="container">
          <div className="bookingIntro">
            <p className="eyebrow">AFSPRAAK MAKEN</p>

            <h2 className="sectionTitle">
              Plan direct uw rijbewijskeuring
            </h2>

            <p className="intro">
              Kies hieronder een beschikbare datum en tijd. U blijft gewoon op
              de website van KeurFit.
            </p>
          </div>

          <div className="calEmbed">
            <iframe
              src="https://cal.com/ali-kumas-2t9ulq/15min?embed=1"
              title="Plan uw afspraak bij KeurFit"
              loading="lazy"
              allow="payment"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer">
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

          <div>
            <strong>KeurFit</strong>
            <p>Onderdeel van AestheFit</p>
            <p>KVK: 99164752</p>
            <p>BTW-id: NL005374477B91</p>
            <p>Nijmegen</p>
          </div>

          <div>
            <strong>Navigatie</strong>
            <a href="/rijbewijskeuring-nijmegen">
              Rijbewijskeuring Nijmegen
            </a>
            <a href="/75-plus-keuring">
              75+ rijbewijskeuring
            </a>
            <a href="/cbr-keuring">
              CBR-keuring
            </a>
            <a href="#afspraak">
              Afspraak maken
            </a>
          </div>
        </div>

        <div className="copyright">
          © 2026 KeurFit · onderdeel van AestheFit
        </div>
      </footer>

      <a href="#afspraak" className="mobileAppointment">
        Afspraak maken
      </a>
    </main>
  );
}
