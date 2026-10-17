import Image from "next/image";

export const metadata = {
  title: "Klachtenregeling | KeurFit",
  description:
    "Informatie over de klachtenregeling van KeurFit.",
};

export default function KlachtenregelingPage() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a href="/" className="brandLogo" aria-label="KeurFit home">
            <Image
              src="/keurfit-logo.png"
              alt="KeurFit"
              width={220}
              height={220}
              className="headerLogo"
            />
          </a>

          <nav>
            <a href="/">← Terug naar KeurFit</a>
          </nav>
        </div>
      </header>

      <section className="section">
        <div className="container legalPage">
          <p className="eyebrow">KLACHTEN & GESCHILLEN</p>

          <h1 className="sectionTitle">
            Heeft u een klacht?
          </h1>

          <p className="intro">
            Wij vinden het belangrijk dat u tevreden bent over uw
            behandeling en onze dienstverlening. Bent u ergens niet
            tevreden over? Laat het ons weten.
          </p>

          <div className="legalContent">
            <h2>1. Bespreek uw klacht met ons</h2>

            <p>
              Heeft u een klacht, bent u ergens ontevreden over of vindt
              u dat iets beter had gekund? Neem dan bij voorkeur eerst
              rechtstreeks contact met KeurFit op.
            </p>

            <p>
              Veel vragen, misverstanden of klachten kunnen op deze
              manier snel worden besproken en opgelost.
            </p>

            <h2>2. Een klacht indienen</h2>

            <p>
              U kunt een klacht indienen via de contactgegevens die op
              onze website staan.
            </p>

            <p>
              Vermeld daarbij voldoende informatie om uw klacht te kunnen
              beoordelen, maar verstuur via gewone e-mail bij voorkeur
              geen onnodige uitgebreide medische informatie.
            </p>

            <h2>3. Onafhankelijke klachtenfunctionaris</h2>

            <p>
              Komt u er met ons niet uit of wilt u ondersteuning bij het
              bespreken van uw klacht? Dan kunt u gebruikmaken van een
              onafhankelijke klachtenfunctionaris.
            </p>

            <div className="notice">
              <strong>Wordt vóór praktijkstart aangevuld:</strong>
              <br />
              naam klachtenorganisatie / klachtenfunctionaris
              <br />
              contactgegevens
              <br />
              website
            </div>

            <p>
              De klachtenfunctionaris kan u informeren over uw
              mogelijkheden en ondersteunen bij het zoeken naar een
              oplossing.
            </p>

            <h2>4. Geschilleninstantie</h2>

            <p>
              Wanneer een klacht niet naar tevredenheid kan worden
              opgelost, kan een geschil onder de daarvoor geldende
              voorwaarden worden voorgelegd aan de erkende
              geschilleninstantie waarbij KeurFit is aangesloten.
            </p>

            <div className="notice">
              <strong>Wordt vóór praktijkstart aangevuld:</strong>
              <br />
              naam erkende geschilleninstantie
              <br />
              contactgegevens
              <br />
              website
            </div>

            <h2>5. Klacht over persoonsgegevens</h2>

            <p>
              Heeft uw klacht betrekking op de verwerking van uw
              persoonsgegevens of medische gegevens? Neem dan contact met
              ons op zodat wij uw klacht kunnen onderzoeken.
            </p>

            <p>
              U kunt daarnaast een klacht indienen bij de Autoriteit
              Persoonsgegevens.
            </p>

            <h2>6. Tuchtrecht</h2>

            <p>
              Voor BIG-geregistreerde zorgverleners kan daarnaast het
              wettelijk tuchtrecht van toepassing zijn. De
              klachtenregeling beperkt de wettelijke mogelijkheden van
              een cliënt om gebruik te maken van andere beschikbare
              procedures niet.
            </p>

            <h2>7. Zorgvuldig omgaan met klachten</h2>

            <p>
              Klachten worden zorgvuldig en vertrouwelijk behandeld.
              Informatie over een klacht wordt alleen gebruikt en gedeeld
              voor zover dit noodzakelijk of wettelijk toegestaan is voor
              de behandeling van de klacht.
            </p>

            <p className="legalDate">
              <strong>Versie: oktober 2026</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
