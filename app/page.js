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

          {/* JURIDISCH */}

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
