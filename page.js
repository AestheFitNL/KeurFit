export const metadata = {
  title: 'Overige medische keuringen Nijmegen | KeurFit',
  description: 'Sportkeuringen, medische verklaringen door een onafhankelijke arts en verzekeringskeuringen in Nijmegen. KeurFit: BIG-geregistreerd arts, duidelijke werkwijze en afspraak op aanvraag.',
  keywords: ['sportkeuring Nijmegen','medische verklaring arts Nijmegen','onafhankelijke arts Nijmegen','verzekeringskeuring Nijmegen','medische keuring Nijmegen','keuringsarts Nijmegen','huisartsverklaring Nijmegen'],
  alternates: { canonical: '/overige-keuringen' }
};

const categories = [
  {
    title: 'Sportkeuringen',
    text: 'Algemene medische sportkeuring voor recreatieve en fanatieke sporters, met anamnese, basiscontroles en gericht lichamelijk onderzoek.',
    bullets: ['Medische anamnese', 'Bloeddruk en pols', 'Hart- en longonderzoek', 'Gericht onderzoek bewegingsapparaat', 'Verslag of formulier waar passend']
  },
  {
    title: 'Medische verklaringen / huisartsformulieren',
    text: 'Heeft u een medische verklaring of formulier nodig waarvoor uw eigen huisarts geen beoordeling kan of wil afgeven? KeurFit kan als onafhankelijke arts beoordelen of het formulier kan worden ingevuld.',
    bullets: ['Onafhankelijke medische beoordeling', 'Formulieren voor opleiding, sport of organisatie', 'Gerichte anamnese en lichamelijk onderzoek', 'Vooraf controle van eisen aan de arts', 'Geen verklaring als specifieke specialist vereist is']
  },
  {
    title: 'Verzekeringskeuringen',
    text: 'Medische keuringen in opdracht van een verzekeraar, tussenpersoon of medisch adviseur, voor zover de aanvraag door een algemeen keurend arts mag worden uitgevoerd.',
    bullets: ['Anamnese en lichamelijk onderzoek', 'Metingen volgens keuringsopdracht', 'Invullen van aangeleverde keuringsformulieren', 'Rapportage volgens de instructies van de opdrachtgever', 'Vooraf beoordeling van de keuringsopdracht']
  }
];

export default function OverigeKeuringen(){return <main>
  <header className="navWrap"><nav className="nav container"><a className="brand" href="/"><img src="/keurfit-logo.png" alt="KeurFit"/><span>KeurFit</span></a><div className="navLinks"><a href="/#keuringen">Rijbewijskeuringen</a><a href="/overige-keuringen">Overige keuringen</a><a href="/#tarieven">Tarieven</a><a href="/#faq">FAQ</a><a className="button small" href="#afspraak-overig">Afspraak maken</a></div></nav></header>

  <section className="hero subHero"><div className="container heroGrid"><div><div className="eyebrow">Overige medische keuringen • Nijmegen</div><h1>Medische keuringen in <span>Nijmegen</span></h1><p className="lead">Naast rijbewijskeuringen kunt u bij KeurFit terecht voor sportkeuringen, medische verklaringen door een onafhankelijke arts en bepaalde verzekeringskeuringen.</p><div className="heroActions"><a className="button" href="#afspraak-overig">Afspraak maken</a><a className="button secondary" href="#aanbod">Bekijk het aanbod</a></div><div className="trustRow"><span>✓ BIG-geregistreerd arts</span><span>✓ Onafhankelijke beoordeling</span><span>✓ Nijmegen</span></div></div><div className="heroCard"><h2>Heeft u een formulier?</h2><p>Stuur een keuringsformulier of opdracht bij voorkeur vóór de afspraak op.</p><ul><li>We controleren welke artsenkwalificatie vereist is</li><li>We beoordelen welke onderzoeken nodig zijn</li><li>U weet vooraf of KeurFit de keuring volledig kan uitvoeren</li></ul><p className="muted">Zo voorkomt u een onnodige afspraak.</p></div></div></section>

  <section id="aanbod" className="section"><div className="container"><div className="sectionHead"><div className="eyebrow">Overige keuringen</div><h2>Waarvoor kunt u bij KeurFit terecht?</h2><p>De inhoud van een keuring hangt af van het doel en de eisen van de organisatie die om de verklaring of keuring vraagt.</p></div><div className="cards otherCards">{categories.map((c)=><article className="serviceCard detailedCard" key={c.title}><div className="icon">✓</div><h3>{c.title}</h3><p>{c.text}</p><ul>{c.bullets.map((b)=><li key={b}>{b}</li>)}</ul><a className="textLink" href="#afspraak-overig">Plan deze keuring →</a></article>)}</div><div className="notice"><strong>Belangrijk:</strong> sommige verklaringen of keuringen mogen alleen worden uitgevoerd door een specifieke specialist, sportarts, bedrijfsarts of andere aangewezen arts. Stuur het formulier of de keuringsopdracht vooraf op; KeurFit bevestigt eerst of de keuring binnen het aanbod valt.</div></div></section>

  <section className="section soft"><div className="container split"><div><div className="eyebrow">Onafhankelijke arts</div><h2>Medische verklaring nodig?</h2><p className="lead smallLead">Uw eigen huisarts geeft vaak geen verklaring af waarin hij of zij een oordeel moet geven over geschiktheid, belastbaarheid of gezondheid voor een bepaald doel. Een onafhankelijke arts kan in bepaalde situaties wél een afzonderlijke beoordeling uitvoeren.</p></div><div className="localCard"><h3>Stuur het formulier vooraf</h3><p>Mail of upload het formulier voordat u boekt. Dan kunnen we vooraf beoordelen of KeurFit de verklaring mag afgeven en welke gegevens of onderzoeken nodig zijn.</p><a className="button secondary" href="#afspraak-overig">Keuring aanvragen</a></div></div></section>

  <section className="section local"><div className="container"><div className="sectionHead"><div className="eyebrow">Nijmegen & omgeving</div><h2>Een keuringsarts dichtbij</h2><p>De praktijk richt zich op Nijmegen en omliggende plaatsen zoals Lent, Beuningen, Wijchen, Malden, Berg en Dal en Groesbeek. De definitieve praktijklocatie wordt toegevoegd zodra deze vaststaat.</p></div></div></section>

  <section id="afspraak-overig" className="section ctaSection"><div className="container cta"><div><div className="eyebrow">Afspraak maken</div><h2>Plan uw medische keuring</h2><p>Geef bij uw aanvraag aan om welk type keuring het gaat en stuur een eventueel formulier of keuringsopdracht vooraf mee.</p></div><div className="ctaButtons"><a className="button" href="mailto:afspraak@keurfit.nl?subject=Afspraak%20overige%20medische%20keuring">Afspraak maken</a><span className="placeholder">Online agenda kan later direct aan deze knop worden gekoppeld.</span></div></div></section>

  <a className="mobileBook" href="#afspraak-overig">Afspraak maken</a>

  <footer><div className="container footerGrid"><div><div className="brand footerBrand"><img src="/keurfit-logo.png" alt="KeurFit"/><span>KeurFit</span></div><p>Medische keuringen in Nijmegen door een BIG-geregistreerd arts.</p></div><div><b>Diensten</b><a href="/#keuringen">Rijbewijskeuringen</a><a href="/overige-keuringen">Sportkeuringen</a><a href="/overige-keuringen">Medische verklaringen</a><a href="/overige-keuringen">Verzekeringskeuringen</a></div><div><b>Bedrijfsgegevens</b><span>AestheFit</span><span>KVK 99164752</span><span>BTW-id NL005374477B91</span><span>Nijmegen</span></div></div><div className="container legal">KeurFit is een label van AestheFit. De inhoud van een keuring is afhankelijk van het doel en eventuele eisen van de aanvragende organisatie.</div></footer>
</main>}
