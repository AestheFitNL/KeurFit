import Image from "next/image";

export const metadata = {
  title: "Cookiebeleid | KeurFit",
  description:
    "Informatie over het gebruik van cookies op de website van KeurFit.",
};

export default function CookiebeleidPage() {
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
          <p className="eyebrow">JURIDISCHE INFORMATIE</p>

          <h1 className="sectionTitle">
            Cookiebeleid
          </h1>

          <p className="intro">
            Op deze pagina leest u hoe KeurFit cookies en vergelijkbare
            technieken gebruikt.
          </p>

          <div className="legalContent">
            <h2>1. Wat zijn cookies?</h2>

            <p>
              Cookies zijn kleine bestanden die bij het bezoeken van een
              website op uw apparaat kunnen worden opgeslagen.
            </p>

            <p>
              Cookies kunnen bijvoorbeeld noodzakelijk zijn voor de
              technische werking van een website of worden gebruikt om
              inzicht te krijgen in het gebruik van een website.
            </p>

            <h2>2. Functionele cookies</h2>

            <p>
              KeurFit kan functionele of technisch noodzakelijke cookies
              gebruiken om de website veilig en correct te laten werken.
            </p>

            <p>
              Voor technisch noodzakelijke cookies is niet altijd
              toestemming vereist.
            </p>

            <h2>3. Analytische cookies</h2>

            <p>
              Wanneer KeurFit in de toekomst analytische diensten
              gebruikt, wordt vooraf beoordeeld welke gegevens daarbij
              worden verwerkt en of hiervoor toestemming nodig is.
            </p>

            <p>
              Wanneer toestemming wettelijk vereist is, worden deze
              cookies pas geplaatst nadat u hiervoor toestemming heeft
              gegeven.
            </p>

            <h2>4. Marketingcookies</h2>

            <p>
              KeurFit plaatst geen marketingcookies waarvoor toestemming
              vereist is zonder eerst toestemming te vragen.
            </p>

            <h2>5. Externe diensten</h2>

            <p>
              In de toekomst kan de website gebruikmaken van externe
              diensten, bijvoorbeeld voor het maken van afspraken,
              betalingen of andere functionaliteiten.
            </p>

            <p>
              Wanneer dergelijke diensten cookies of vergelijkbare
              technieken gebruiken, wordt het cookiebeleid hierop
              aangepast en wordt waar nodig toestemming gevraagd.
            </p>

            <h2>6. Uw keuze wijzigen</h2>

            <p>
              Wanneer KeurFit cookies gebruikt waarvoor toestemming
              vereist is, krijgt u de mogelijkheid uw keuze te maken en
              waar nodig later te wijzigen.
            </p>

            <h2>7. Wijzigingen</h2>

            <p>
              Dit cookiebeleid kan worden aangepast wanneer de website
              of de gebruikte diensten veranderen.
            </p>

            <p>De meest actuele versie staat op deze website.</p>

            <p className="legalDate">
              <strong>Versie: oktober 2026</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
