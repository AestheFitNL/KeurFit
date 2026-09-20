"use client";

import Image from "next/image";
import { useState } from "react";

const keuringen = [
  {
    id: "75plus",
    icon: "75",
    naam: "75+ rijbewijskeuring",
    duur: 15,
    prijs: 55,
    omschrijving: "Voor het verlengen van het rijbewijs vanaf 75 jaar.",
  },
  {
    id: "medisch-tot-75",
    icon: "M",
    naam: "Medische rijbewijskeuring tot 75 jaar",
    duur: 15,
    prijs: 55,
    omschrijving:
      "Medische rijbewijskeuring wanneer een algemeen keurend arts volstaat.",
  },
  {
    id: "sport",
    icon: "S",
    naam: "Basis sportkeuring",
    duur: 15,
    prijs: 60,
    omschrijving:
      "Medische basisbeoordeling voor sport, inspanning of deelname.",
  },
  {
    id: "knaf",
    icon: "K",
    naam: "KNAF-keuring",
    duur: 15,
    prijs: 60,
    omschrijving: "Medische keuring voor deelname aan de autosport.",
  },
  {
    id: "verzekering",
    icon: "V",
    naam: "Verzekeringskeuring",
    duur: 30,
    prijs: null,
    omschrijving:
      "Medische keuring in het kader van een verzekering.",
  },
];

const tijden = [
  "09:00",
  "09:15",
  "09:30",
  "09:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
];

function BookingPlanner() {
  const [keuring, setKeuring] = useState(null);
  const [datum, setDatum] = useState("");
  const [tijd, setTijd] = useState("");

  const [gegevens, setGegevens] = useState({
    naam: "",
    geboortedatum: "",
    email: "",
    telefoon: "",
  });

  const geselecteerd = keuringen.find((item) => item.id === keuring);

  function wijzigGegevens(event) {
    setGegevens({
      ...gegevens,
      [event.target.name]: event.target.value,
    });
  }

  function verstuur(event) {
    event.preventDefault();

    if (!geselecteerd) {
      alert("Kies eerst het type keuring.");
      return;
    }

    if (!datum || !tijd) {
      alert("Kies een datum en tijd.");
      return;
    }

    alert(
      `Afspraak geselecteerd:\n\n${geselecteerd.naam}\n${datum} om ${tijd}`
    );
  }

  return (
    <div className="bookingShell">

      {/* STAP 1 */}

      <div className="bookingStep">
        <div className="bookingStepHeader">
          <span className="bookingStepNumber">1</span>

          <div>
            <h3>Kies uw keuring</h3>
            <p className="bookingStepDescription">
              Selecteer waarvoor u een afspraak wilt maken.
            </p>
          </div>
        </div>

        <div className="appointmentTypes">
          {keuringen.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`appointmentType ${
                keuring === item.id ? "selected" : ""
              }`}
              onClick={() => {
                setKeuring(item.id);
                setTijd("");
              }}
            >
              <div className="bookingTypeIcon">{item.icon}</div>

              <div>
                <span className="appointmentTypeTitle">
                  {item.naam}
                </span>

                <span className="appointmentTypeDescription">
                  {item.omschrijving}
                </span>

                <span className="appointmentTypeMeta">
                  <span>{item.duur} minuten</span>

                  <span>•</span>

                  <span className="appointmentTypePrice">
                    {item.prijs
                      ? `€${item.prijs}`
                      : "Prijs afhankelijk van keuring"}
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* STAP 2 */}

      <div
        className={`bookingStep ${
          !geselecteerd ? "bookingDisabled" : ""
        }`}
      >
        <div className="bookingStepHeader">
          <span className="bookingStepNumber">2</span>

          <div>
            <h3>Kies datum en tijd</h3>

            <p className="bookingStepDescription">
              Kies een beschikbaar moment voor uw keuring.
            </p>
          </div>
        </div>

        <div className="bookingDateTime">

          <div className="calendarBox">

            <label className="bookingDateLabel">
              Datum
            </label>

            <input
              type="date"
              className="bookingDateInput"
              value={datum}
              min={new Date().toISOString().split("T")[0]}
              onChange={(event) => {
                setDatum(event.target.value);
                setTijd("");
              }}
              disabled={!geselecteerd}
            />

            {geselecteerd && (
              <div className="selectedServiceMini">
                <span>{geselecteerd.naam}</span>

                <strong>
                  {geselecteerd.duur} min
                </strong>
              </div>
            )}

          </div>

          <div className="timeBox">

            {!datum ? (
              <div className="emptyTimes">

                <div className="emptyTimesIcon">
                  ◷
                </div>

                <strong>Kies eerst een datum</strong>

                <p>
                  Daarna verschijnen hier de beschikbare tijden.
                </p>

              </div>
            ) : (
              <>
                <h4>Beschikbare tijden</h4>

                <p className="selectedDate">
                  Kies het tijdstip dat u het beste uitkomt.
                </p>

                <div className="timeSlots">

                  {tijden.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`timeSlot ${
                        tijd === slot ? "selected" : ""
                      }`}
                      onClick={() => setTijd(slot)}
                    >
                      {slot}
                    </button>
                  ))}

                </div>
              </>
            )}

          </div>

        </div>
      </div>

      {/* STAP 3 */}

      <form className="bookingStep" onSubmit={verstuur}>

        <div className="bookingStepHeader">

          <span className="bookingStepNumber">3</span>

          <div>
            <h3>Uw gegevens</h3>

            <p className="bookingStepDescription">
              Vul uw gegevens in om de afspraak te bevestigen.
            </p>
          </div>

        </div>

        <div className="bookingForm">

          <div className="bookingField">

            <label>Naam</label>

            <input
              name="naam"
              type="text"
              placeholder="Voor- en achternaam"
              value={gegevens.naam}
              onChange={wijzigGegevens}
              required
            />

          </div>

          <div className="bookingField">

            <label>Geboortedatum</label>

            <input
              name="geboortedatum"
              type="date"
              value={gegevens.geboortedatum}
              onChange={wijzigGegevens}
              required
            />

          </div>

          <div className="bookingField">

            <label>E-mailadres</label>

            <input
              name="email"
              type="email"
              placeholder="naam@voorbeeld.nl"
              value={gegevens.email}
              onChange={wijzigGegevens}
              required
            />

          </div>

          <div className="bookingField">

            <label>Telefoonnummer</label>

            <input
              name="telefoon"
              type="tel"
              placeholder="06 12345678"
              value={gegevens.telefoon}
              onChange={wijzigGegevens}
              required
            />

          </div>

        </div>

        {geselecteerd && datum && tijd && (

          <div className="bookingSummary">

            <div>

              <span className="summaryLabel">
                UW AFSPRAAK
              </span>

              <strong>
                {geselecteerd.naam}
              </strong>

              <span>
                {datum} om {tijd} · {geselecteerd.duur} minuten
              </span>

            </div>

            {geselecteerd.prijs && (

              <strong className="summaryPrice">
                €{geselecteerd.prijs}
              </strong>

            )}

          </div>

        )}

        <button
          className="bookingButton"
          type="submit"
        >
          Afspraak bevestigen
          <span>→</span>
        </button>

        <p className="bookingPrivacy">
          Uw gegevens worden uitsluitend gebruikt voor het plannen en
          uitvoeren van uw afspraak.
        </p>

      </form>

    </div>
  );
}

export default function Home() {
  return (
    <main>

      {/* HEADER */}

      <header className="header">

        <div className="container nav">

          <a
            href="/"
            className="brandLogo"
            aria-label="KeurFit home"
          >

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

            <a href="#rijbewijskeuringen">
              Rijbewijskeuringen
            </a>

            <a href="#overige-keuringen">
              Overige keuringen
            </a>

            <a href="#werkwijze">
              Werkwijze
            </a>

            <a href="#faq">
              FAQ
            </a>

            <a
              href="#afspraak"
              className="navButton"
            >
              Afspraak maken
            </a>

          </nav>

        </div>

      </header>


      {/* HERO */}

      <section className="hero">

        <div className="container heroGrid">

          <div>

            <p className="eyebrow">
              RIJBEWIJSKEURING NIJMEGEN
            </p>

            <h1>
              Snel en zorgvuldig
              <span>medisch gekeurd.</span>
            </h1>

            <p className="lead">
              Rijbewijskeuringen en andere medische keuringen door
              een BIG-geregistreerd arts in Nijmegen. Persoonlijk,
              duidelijk en eenvoudig online te plannen.
            </p>

            <div className="buttons">

              <a
                href="#afspraak"
                className="button"
              >
                Afspraak maken
              </a>

              <a
                href="#rijbewijskeuringen"
                className="button secondary"
              >
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


      {/* RIJBEWIJS */}

      <section
        id="rijbewijskeuringen"
        className="section"
      >

        <div className="container">

          <p className="eyebrow">
            RIJBEWIJSKEURINGEN
          </p>

          <h2 className="sectionTitle">
            Medische keuringen voor uw rijbewijs
          </h2>

          <p className="intro">
            Bij KeurFit kunt u terecht voor verschillende
            rijbewijskeuringen. De verwijzing van het CBR is altijd
            leidend bij de vraag welk type arts de keuring moet
            uitvoeren.
          </p>

          <div className="cards">

            <article className="card">

              <div className="cardIcon">
                75
              </div>

              <h3>
                75+ rijbewijskeuring
              </h3>

              <p>
                Medische keuring voor het verlengen van uw rijbewijs
                vanaf 75 jaar.
              </p>

              <a href="#afspraak">
                Plan uw keuring →
              </a>

            </article>


            <article className="card">

              <div className="cardIcon">
                M
              </div>

              <h3>
                Medische rijbewijskeuring tot 75 jaar
              </h3>

              <p>
                Voor een CBR-verwijzing waarbij een algemeen keurend
                arts de medische keuring mag uitvoeren.
              </p>

              <a href="#afspraak">
                Plan uw keuring →
              </a>

            </article>


            <article className="card">

              <div className="cardIcon">
                ✓
              </div>

              <h3>
                CBR-artsenformulieren
              </h3>

              <p>
                Bepaalde medische artsenformulieren kunnen door een
                algemeen BIG-geregistreerd arts worden ingevuld.
              </p>

              <a href="#afspraak">
                Meer informatie →
              </a>

            </article>

          </div>

          <div className="notice">

            <strong>Let op:</strong> vraagt het CBR expliciet om een
            psychiater, neuroloog, oogarts, cardioloog, bedrijfsarts
            of andere specifieke specialist, dan moet de beoordeling
            door die arts worden uitgevoerd.

          </div>

        </div>

      </section>


      {/* OVERIGE KEURINGEN */}

      <section
        id="overige-keuringen"
        className="section soft"
      >

        <div className="container">

          <p className="eyebrow">
            OVERIGE MEDISCHE KEURINGEN
          </p>

          <h2 className="sectionTitle">
            Ook voor andere medische keuringen
          </h2>

          <p className="intro">
            Naast rijbewijskeuringen kunt u bij KeurFit terecht voor
            sport- en verzekeringskeuringen.
          </p>

          <div className="cards">

            <article className="card">

              <div className="cardIcon">
                S
              </div>

              <h3>
                Basis sportkeuring
              </h3>

              <p>
                Medische basisbeoordeling voorafgaand aan sport of
                inspanning.
              </p>

              <strong>
                15 minuten · €60
              </strong>

            </article>


            <article className="card">

              <div className="cardIcon">
                K
              </div>

              <h3>
                KNAF-keuring
              </h3>

              <p>
                Medische keuring voor deelname aan de autosport.
              </p>

              <strong>
                15 minuten · €60
              </strong>

            </article>


            <article className="card">

              <div className="cardIcon">
                V
              </div>

              <h3>
                Verzekeringskeuring
              </h3>

              <p>
                Medische keuring in het kader van een verzekering,
                afhankelijk van de gevraagde beoordeling.
              </p>

              <strong>
                30 minuten
              </strong>

            </article>

          </div>

        </div>

      </section>


      {/* WERKWIJZE */}

      <section
        id="werkwijze"
        className="section"
      >

        <div className="container">

          <p className="eyebrow">
            WERKWIJZE
          </p>

          <h2 className="sectionTitle">
            Een keuring in vier eenvoudige stappen
          </h2>

          <div className="steps">

            <div className="step">

              <span>1</span>

              <div>
                <h3>Kies uw keuring</h3>
                <p>
                  Selecteer de medische keuring die u nodig heeft.
                </p>
              </div>

            </div>


            <div className="step">

              <span>2</span>

              <div>
                <h3>Kies een moment</h3>
                <p>
                  Bekijk direct de beschikbare data en tijden.
                </p>
              </div>

            </div>


            <div className="step">

              <span>3</span>

              <div>
                <h3>Kom naar de keuring</h3>
                <p>
                  Neem uw legitimatie en relevante documenten mee.
                </p>
              </div>

            </div>


            <div className="step">

              <span>4</span>

              <div>
                <h3>Medische beoordeling</h3>
                <p>
                  De arts voert de benodigde medische beoordeling uit.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CBR */}

      <section className="section dark">

        <div className="container">

          <p className="eyebrow light">
            CBR-KEURING
          </p>

          <h2 className="sectionTitle">
            Het CBR beslist over uw rijgeschiktheid
          </h2>

          <p
            className="intro"
            style={{ color: "#c7d9d1" }}
          >
            KeurFit verricht de medische beoordeling en rapporteert
            de relevante bevindingen. Het CBR neemt daarna de
            uiteindelijke beslissing over uw rijgeschiktheid.
          </p>

        </div>

      </section>


      {/* TARIEVEN */}

      <section className="section">

        <div className="container">

          <p className="eyebrow">
            TARIEVEN
          </p>

          <h2 className="sectionTitle">
            Transparante tarieven
          </h2>

          <p className="intro">
            Duidelijke prijzen vooraf, zonder verrassingen.
          </p>

          <div className="cards">

            <article className="card priceCard">

              <p className="smallTitle">
                RIJBEWIJSKEURING
              </p>

              <h3>
                75+ rijbewijskeuring
              </h3>

              <p className="price">
                €55
              </p>

              <p>15 minuten</p>

              <a href="#afspraak">
                Plan uw keuring →
              </a>

            </article>


            <article className="card priceCard featuredPrice">

              <p className="smallTitle">
                RIJBEWIJSKEURING
              </p>

              <h3>
                Medische keuring tot 75 jaar
              </h3>

              <p className="price">
                €55
              </p>

              <p>15 minuten</p>

              <a href="#afspraak">
                Plan uw keuring →
              </a>

            </article>


            <article className="card priceCard">

              <p className="smallTitle">
                SPORT
              </p>

              <h3>
                Basis sportkeuring
              </h3>

              <p className="price">
                €60
              </p>

              <p>15 minuten</p>

              <a href="#afspraak">
                Plan uw keuring →
              </a>

            </article>


            <article className="card priceCard">

              <p className="smallTitle">
                AUTOSPORT
              </p>

              <h3>
                KNAF-keuring
              </h3>

              <p className="price">
                €60
              </p>

              <p>15 minuten</p>

              <a href="#afspraak">
                Plan uw keuring →
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* FAQ */}

      <section
        id="faq"
        className="section soft"
      >

        <div className="container">

          <p className="eyebrow">
            VEELGESTELDE VRAGEN
          </p>

          <h2 className="sectionTitle">
            Veelgestelde vragen
          </h2>

          <div className="faq">

            <details>

              <summary>
                Wat moet ik meenemen naar een rijbewijskeuring?
              </summary>

              <p>
                Neem uw legitimatiebewijs, CBR-documenten,
                ZorgDomein-code(s) en indien relevant uw bril,
                contactlenzen en medicatieoverzicht mee.
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
                Wie beslist of ik rijgeschikt ben?
              </summary>

              <p>
                Het CBR neemt uiteindelijk de beslissing over uw
                rijgeschiktheid.
              </p>

            </details>

          </div>

        </div>

      </section>


      {/* NIEUWE PLANNER */}

      <section
        id="afspraak"
        className="section appointment bookingSection"
      >

        <div className="container">

          <div className="bookingIntro">

            <p className="eyebrow">
              AFSPRAAK MAKEN
            </p>

            <h2 className="sectionTitle">
              Plan uw keuring
            </h2>

            <p className="intro">
              Kies eerst het type keuring. Daarna kiest u eenvoudig
              een beschikbaar moment.
            </p>

          </div>

          <BookingPlanner />

        </div>

      </section>


      {/* FOOTER */}

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

            <a href="#rijbewijskeuringen">
              Rijbewijskeuringen
            </a>

            <a href="#overige-keuringen">
              Sport- en overige keuringen
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


      <a
        href="#afspraak"
        className="mobileAppointment"
      >
        Afspraak maken
      </a>

    </main>
  );
}
