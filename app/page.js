const rijbewijsKeuringen = [
  {
    title: "75+ rijbewijskeuring",
    text: "Medische rijbewijskeuring voor het verlengen van uw rijbewijs vanaf 75 jaar."
  },
  {
    title: "CBR-keuring op verwijzing",
    text: "Heeft u een verwijzing van het CBR ontvangen? Wij beoordelen vooraf of de keuring door onze arts kan worden uitgevoerd."
  },
  {
    title: "CBR artsenformulieren",
    text: "Verschillende aanvullende CBR-formulieren kunnen door een BIG-geregistreerd arts worden ingevuld."
  }
];

const overigeKeuringen = [
  {
    title: "Sportkeuring",
    text: "Een medische beoordeling voor sport en inspanning, afgestemd op uw situatie en het doel van de keuring."
  },
  {
    title: "Medische verklaring",
    text: "Een onafhankelijke medische beoordeling wanneer een verklaring van een onafhankelijke arts wordt gevraagd."
  },
  {
    title: "Verzekeringskeuring",
    text: "Medisch onderzoek in opdracht van of ten behoeve van een verzekeraar, volgens de ontvangen keuringsopdracht."
  }
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a href="/" className="logo">
            <span className="logoK">K</span>
            <span>Keur<span>Fit</span></span>
          </a>

          <nav>
            <a href="#rijbewijskeuringen">Rijbewijskeuringen</a>
            <a href="#overige">Overige keuringen</a>
            <a href="#tarieven">Tarieven</a>
            <a href="#over">Over KeurFit</a>
            <a href="#faq">FAQ</a>
            <a href="https://cal.com/ali-kumas-2t9ulq/15min" className="navButton">
              Afspraak maken
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">KEURINGSARTS IN NIJMEGEN</p>

            <h1>
              Rijbewijskeuring in Nijmegen
              <span>Snel en zorgvuldig geregeld.</span>
            </h1>

            <p className="lead">
              KeurFit biedt rijbewijskeuringen en andere medische keuringen
              door een BIG-geregistreerd arts in Nijmegen.
            </p>

            <div className="buttons">
              href="https://cal.com/ali-kumas-2t9ulq/15min" className="button">
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

          <div className="infoCard">
            <p className="smallTitle">RIJBEWIJSKEURING</p>
            <h2>Wat neemt u mee?</h2>

            <ul>
              <li>Geldig legitimatiebewijs</li>
              <li>CBR-verwijsbrief</li>
              <li>ZorgDomein-code(s), indien ontvangen</li>
              <li>Bril of contactlenzen indien van toepassing</li>
              <li>Actueel medicatieoverzicht indien relevant</li>
            </ul>

            <p className="cardText">
              Twijfelt u welke keuring u nodig heeft? Neem vooraf contact op.
            </p>
          </div>
        </div>
      </section>

      <section id="rijbewijskeuringen" className="section">
        <div className="container">
          <p className="eyebrow">RIJBEWIJSKEURINGEN</p>
          <h2 className="sectionTitle">
            Rijbewijskeuring door een arts in Nijmegen
          </h2>

          <p className="intro">
            Heeft het CBR u gevraagd om een medische keuring of moet u vanwege
            uw leeftijd worden gekeurd? Bij KeurFit kunt u terecht voor
            verschillende rijbewijskeuringen die door een algemeen
            BIG-geregistreerd arts mogen worden uitgevoerd.
          </p>

          <div className="cards">
            {rijbewijsKeuringen.map((item) => (
              <article className="card" key={item.title}>
                <div className="cardIcon">+</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="https://cal.com/ali-kumas-2t9ulq/15min">Plan deze keuring →</a>
              </article>
            ))}
          </div>

          <div className="notice">
            <strong>Goed om te weten:</strong> voor sommige CBR-keuringen is
            een specifieke medisch specialist, bedrijfsarts of andere
            aangewezen arts vereist. De CBR-verwijsbrief is daarom leidend.
          </div>
        </div>
      </section>

      <section id="overige" className="section soft">
        <div className="container">
          <p className="eyebrow">OVERIGE KEURINGEN</p>

          <h2 className="sectionTitle">
            Ook voor andere medische keuringen
          </h2>

          <p className="intro">
            Naast rijbewijskeuringen kunt u bij KeurFit terecht voor een aantal
            andere onafhankelijke medische keuringen in Nijmegen.
          </p>

          <div className="cards">
            {overigeKeuringen.map((item) => (
              <article className="card" key={item.title}>
                <div className="cardIcon">✓</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="https://cal.com/ali-kumas-2t9ulq/15min">Afspraak maken →</a>
              </article>
            ))}
          </div>

          <div className="notice">
            Heeft u een formulier of keuringsopdracht ontvangen? Stuur deze
            vooraf op. Wij controleren of de keuring door een algemeen
            BIG-geregistreerd arts mag worden uitgevoerd.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">WERKWIJZE</p>
          <h2 className="sectionTitle">In vier stappen geregeld</h2>

          <div className="steps">
            <div className="step">
              <span>1</span>
              <div>
                <h3>Maak een afspraak</h3>
                <p>Kies de keuring waarvoor u een afspraak wilt maken.</p>
              </div>
            </div>

            <div className="step">
              <span>2</span>
              <div>
                <h3>Neem uw documenten mee</h3>
                <p>
                  Neem uw legitimatie en eventuele CBR-documenten of
                  keuringsformulieren mee.
                </p>
              </div>
            </div>

            <div className="step">
              <span>3</span>
              <div>
                <h3>Medische keuring</h3>
                <p>
                  De arts verricht het onderzoek dat voor uw keuring nodig is.
                </p>
              </div>
            </div>

            <div className="step">
              <span>4</span>
              <div>
                <h3>Verwerking</h3>
                <p>
                  Het formulier of rapport wordt volgens de geldende procedure
                  verwerkt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tarieven" className="section soft">
        <div className="container">
          <p className="eyebrow">TARIEVEN</p>
          <h2 className="sectionTitle">Duidelijke tarieven</h2>

          <div className="priceBox">
            <div>
              <h3>75+ rijbewijskeuring</h3>
              <p>Inclusief benodigde medische beoordeling.</p>
            </div>
            <strong>Tarief volgt</strong>
          </div>

          <div className="priceBox">
            <div>
              <h3>Overige CBR-keuring</h3>
              <p>Afhankelijk van het aantal benodigde formulieren.</p>
            </div>
            <strong>Tarief volgt</strong>
          </div>

          <div className="priceBox">
            <div>
              <h3>Sportkeuring</h3>
              <p>Algemene medische sportkeuring.</p>
            </div>
            <strong>Tarief volgt</strong>
          </div>

          <div className="priceBox">
            <div>
              <h3>Overige medische keuring</h3>
              <p>Afhankelijk van de keuringsopdracht.</p>
            </div>
            <strong>Op aanvraag</strong>
          </div>
        </div>
      </section>

      <section id="over" className="section">
        <div className="container twoColumns">
          <div>
            <p className="eyebrow">OVER KEURFIT</p>
            <h2 className="sectionTitle">
              Medische keuringen zonder onnodig gedoe
            </h2>
          </div>

          <div className="aboutText">
            <p>
              KeurFit is een medische keuringspraktijk in Nijmegen. De
              keuringen worden uitgevoerd door een BIG-geregistreerd arts.
            </p>

            <p>
              We vinden het belangrijk dat u vooraf weet wat u moet meenemen,
              wat er tijdens de keuring gebeurt en wat de vervolgstappen zijn.
            </p>

            <p>
              Bij een CBR-keuring rapporteert de arts de relevante medische
              bevindingen. Het CBR neemt uiteindelijk de beslissing over uw
              rijgeschiktheid.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="section dark">
        <div className="container">
          <p className="eyebrow light">VEELGESTELDE VRAGEN</p>
          <h2 className="sectionTitle">Praktische informatie</h2>

          <div className="faq">
            <details>
              <summary>Waar vindt de keuring plaats?</summary>
              <p>
                De praktijk bevindt zich in Nijmegen. Het definitieve
                praktijkadres wordt bij de afspraak vermeld.
              </p>
            </details>

            <details>
              <summary>Wat moet ik meenemen naar een CBR-keuring?</summary>
              <p>
                Neem uw legitimatiebewijs, CBR-verwijsbrief,
                ZorgDomein-code(s), eventuele bril of contactlenzen en
                relevante medische informatie mee.
              </p>
            </details>

            <details>
              <summary>Kan ik voor iedere CBR-keuring bij KeurFit terecht?</summary>
              <p>
                Nee. Sommige keuringen moeten door een specifieke specialist
                of andere aangewezen arts worden uitgevoerd. Uw CBR-verwijsbrief
                bepaalt welk type arts nodig is.
              </p>
            </details>

            <details>
              <summary>Kan ik bij KeurFit een medische verklaring krijgen?</summary>
              <p>
                Dat hangt af van het doel van de verklaring. Stuur het
                formulier vooraf op, zodat we kunnen beoordelen of een
                onafhankelijke algemeen arts de beoordeling mag uitvoeren.
              </p>
            </details>

            <details>
              <summary>Wie bepaalt of ik rijgeschikt ben?</summary>
              <p>
                Het CBR neemt de uiteindelijke beslissing over uw
                rijgeschiktheid.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="afspraak" className="section appointment">
        <div className="container appointmentInner">
          <div>
            <p className="eyebrow">AFSPRAAK MAKEN</p>
            <h2>KeurFit Nijmegen</h2>
            <p>
              Plan een afspraak voor uw rijbewijskeuring of andere medische
              keuring.
            </p>
          </div>

          <a
  href="https://cal.com/ali-kumas-2t9ulq/15min"
  target="_blank"
  rel="noopener noreferrer"
  className="button"
>
  Plan direct een afspraak
</a>
        </div>
      </section>

      <footer>
        <div className="container footer">
          <div>
            <div className="logo footerLogo">
              <span className="logoK">K</span>
              <span>Keur<span>Fit</span></span>
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
            <strong>Keuringen</strong>
            <a href="#rijbewijskeuringen">Rijbewijskeuringen</a>
            <a href="#overige">Overige keuringen</a>
            <a href="https://cal.com/ali-kumas-2t9ulq/15min">Afspraak maken</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 KeurFit · onderdeel van AestheFit
        </div>
      </footer>

      <a href="https://cal.com/ali-kumas-2t9ulq/15min" className="mobileAppointment">
        Afspraak maken
      </a>
    </main>
  );
}
