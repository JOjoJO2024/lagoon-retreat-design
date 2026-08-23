export type Lang = "it" | "en" | "de";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

type Dict = {
  nav: { gallery: string; about: string; amenities: string; experiences: string; location: string; book: string };
  hero: { eyebrow: string; subtitle: string; cta: string };
  gallery: {
    eyebrow: string; title: string;
    pool: string; openspace: string; living: string; sofa: string; kitchen: string; mural: string; balcony: string; entrance: string;
    bedroom: string; bedroomYellow: string; bathroom: string; hallway: string;
  };
  features: { pine: string; pool: string; beach: string; ferry: string };
  about: {
    eyebrow: string; title: string;
    p1: string; p2a: string; mural: string; p2b: string; marble: string; p2c: string; yellow: string; p2d: string; teal: string; p2e: string;
    sqm: string; guests: string; bedroom: string; balcony: string;
  };
  amenities: { eyebrow: string; title: string; items: string[] };
  experiences: {
    eyebrow: string; title: string;
    narrative: (
      | { type: "text"; value: string }
      | { type: "link"; value: string; query: string }
    )[];
  };
  contact: { whatsappCta: string; callIt: string; callDe: string };
  location: {
    eyebrow: string; title: string;
    address: string; tagline: string;
    beach: string; venice: string; murano: string;
    openMaps: string;
  };
  footer: { tagline: string; cta: string; rights: string };
};

export const translations: Record<Lang, Dict> = {
  it: {
    nav: { gallery: "Galleria", about: "L'appartamento", amenities: "Comfort", experiences: "Esperienze", location: "Dove siamo", book: "Prenota" },
    hero: { eyebrow: "Cavallino Treporti · Venezia", subtitle: "Una fuga rilassante tra Venezia e il mare", cta: "Prenota Ora" },
    gallery: {
      eyebrow: "All'interno",
      title: "Uno sguardo intorno",
      pool: "La Piscina",
      openspace: "Open-Space",
      living: "Soggiorno",
      sofa: "Salotto & Divano",
      kitchen: "Cucina Moderna",
      mural: "Murale Lagunare",
      balcony: "Balcone",
      entrance: "Ingresso",
      bedroom: "Camera Matrimoniale",
      bedroomYellow: "Camera Giallo Senape",
      bathroom: "Bagno Lagunare",
      hallway: "Corridoio & Armadi",
    },
    features: { pine: "Vista sulla pineta", pool: "Piscina", beach: "Spiaggia a piedi", ferry: "5 min dal ferry per Venezia" },
    about: {
      eyebrow: "L'appartamento",
      title: "Luminoso, colorato e ispirato alla laguna",
      p1: "Un moderno open-space di 62 mq che ospita fino a 4 persone, progettato con una palette giocosa presa in prestito direttamente dalla laguna veneziana e dalla calda luce dell'Adriatico.",
      p2a: "Il soggiorno è caratterizzato da un ",
      mural: "murale ad acquerello con bolle teal",
      p2b: " — gocce blu che danzano sull'intonaco bianco, la nostra firma visiva. La cucina sfoggia ",
      marble: "piani in effetto marmo",
      p2c: " abbinati a mobili color salvia, mentre la camera da letto è avvolta da una ",
      yellow: "parete giallo senape",
      p2d: ". Il bagno brilla con ",
      teal: "piastrelle teal lagunari",
      p2e: " — un promemoria quotidiano che il mare è proprio fuori.",
      sqm: "62 mq", guests: "Fino a 4 ospiti", bedroom: "1 camera da letto", balcony: "Balcone privato",
    },
    amenities: {
      eyebrow: "Ogni comfort",
      title: "Comfort essenziali",
      items: [
        "Piscina condominiale",
        "Vista sulla pineta",
        "Spiaggia a piedi",
        "Aria condizionata",
        "Cucina completa",
        "Macchina da caffè",
        "Wi-Fi veloce",
        "Smart TV",
        "Lavatrice",
        "Parcheggio privato",
        "Self check-in",
        "Balcone privato",
      ],
    },
    experiences: {
      eyebrow: "Oltre il rifugio",
      title: "Esperienze ed Escursioni",
      narrative: [
        { type: "text", value: "A pochi passi dall'appartamento puoi raggiungere " },
        { type: "link", value: "Venezia e la Laguna", query: "Piazza+San+Marco,+Venezia" },
        { type: "text", value: " in ferry, rilassarti sulla " },
        { type: "link", value: "Spiaggia e nella pineta", query: "Spiaggia+Cavallino+Treporti,+Venezia" },
        { type: "text", value: ", praticare " },
        { type: "link", value: "Attività all'aperto", query: "Oasi+Naturalistica+Cavallino+Treporti" },
        { type: "text", value: " in bici o kayak, oppure scoprire il " },
        { type: "link", value: "Cibo e il vino", query: "Restaurants+Cavallino+Treporti,+Venezia" },
        { type: "text", value: " del territorio." },
      ],
    },
    contact: { whatsappCta: "WhatsApp per prenotazioni", callIt: "Italia", callDe: "Deutschland" },
    location: {
      eyebrow: "Dove trovarci",
      title: "Posizione",
      address: "Via Paolo Thaon di Revel 58",
      tagline: "Cavallino Treporti, Venezia · Italia",
      beach: "→ Spiaggia", venice: "→ Venezia", murano: "→ Ferry Murano",
      openMaps: "Apri in Google Maps",
    },
    footer: { tagline: "Dove la laguna incontra il mare", cta: "Prenota Ora", rights: "Cavallino Treporti, Venezia" },
  },
  en: {
    nav: { gallery: "Gallery", about: "The Apartment", amenities: "Amenities", experiences: "Experiences", location: "Location", book: "Book" },
    hero: { eyebrow: "Cavallino Treporti · Venice", subtitle: "A relaxing escape between Venice and the sea", cta: "Book Now" },
    gallery: {
      eyebrow: "Inside",
      title: "A look around",
      pool: "The Pool",
      openspace: "Open-Space",
      living: "Living Room",
      sofa: "Sofa & Lounge",
      kitchen: "Modern Kitchen",
      mural: "Lagoon Mural",
      balcony: "Balcony",
      entrance: "Entrance",
      bedroom: "Master Bedroom",
      bedroomYellow: "Mustard Bedroom",
      bathroom: "Lagoon Bathroom",
      hallway: "Hallway & Wardrobes",
    },
    features: { pine: "Pine forest views", pool: "Swimming pool", beach: "Beach walkable", ferry: "5 min from Venice ferry" },
    about: {
      eyebrow: "The apartment",
      title: "Bright, colorful & inspired by the lagoon",
      p1: "A 62 sqm modern open-space retreat hosting up to 4 guests, designed with a playful palette borrowed straight from the Venetian lagoon and the warm Adriatic light.",
      p2a: "The living room features a hand-painted ",
      mural: "watercolor bubble-dot wall",
      p2b: " — teal droplets dancing across white plaster, our signature visual identity. The kitchen wears ",
      marble: "marble-effect countertops",
      p2c: " paired with sage cabinetry, while the bedroom is wrapped in a ",
      yellow: "warm mustard accent wall",
      p2d: ". The bathroom glows with ",
      teal: "teal lagoon floor tiles",
      p2e: " — a daily reminder that the sea is just outside.",
      sqm: "62 sqm", guests: "Up to 4 guests", bedroom: "1 bedroom", balcony: "Private balcony",
    },
    amenities: {
      eyebrow: "Every comfort",
      title: "Essential comforts",
      items: [
        "Shared swimming pool",
        "Pine forest views",
        "Beach walkable",
        "Air conditioning",
        "Full kitchen",
        "Coffee machine",
        "Fast Wi-Fi",
        "Smart TV",
        "Washing machine",
        "Private parking",
        "Self check-in",
        "Private balcony",
      ],
    },
    experiences: {
      eyebrow: "Beyond the retreat",
      title: "Experiences & Excursions",
      items: [
        { title: "Venice & Lagoon", desc: "Direct ferry access to St. Mark's, Murano glass workshops, the colorful houses of Burano, and unforgettable sunset tours.", mapLabel: "Open in Maps", mapQuery: "Piazza+San+Marco,+Venezia" },
        { title: "Beach & Nature", desc: "Long sandy beaches just a short walk away, fragrant pine forest paths, and Adriatic sunsets you'll never forget.", mapLabel: "Open in Maps", mapQuery: "Spiaggia+Cavallino+Treporti,+Venezia" },
        { title: "Outdoor Activities", desc: "Bike rentals along scenic coastal routes, kayak excursions through quiet lagoon canals, and birdwatching in the nature reserve.", mapLabel: "Open in Maps", mapQuery: "Oasi+Naturalistica+Cavallino+Treporti" },
        { title: "Food & Wine", desc: "Authentic Venetian cuisine, the freshest seafood from the Adriatic, and the sacred ritual of an evening spritz aperitivo.", mapLabel: "Open in Maps", mapQuery: "Restaurants+Cavallino+Treporti,+Venezia" },
      ],
    },
    contact: { whatsappCta: "WhatsApp for bookings", callIt: "Italy", callDe: "Germany" },
    location: {
      eyebrow: "Where to find us",
      title: "Location",
      address: "Via Paolo Thaon di Revel 58",
      tagline: "Cavallino Treporti, Venice · Italy",
      beach: "→ Beach", venice: "→ Venice", murano: "→ Murano ferry",
      openMaps: "Open in Google Maps",
    },
    footer: { tagline: "Where the lagoon meets the sea", cta: "Book Now", rights: "Cavallino Treporti, Venice" },
  },
  de: {
    nav: { gallery: "Galerie", about: "Wohnung", amenities: "Komfort", experiences: "Erlebnisse", location: "Lage", book: "Buchen" },
    hero: { eyebrow: "Cavallino Treporti · Venedig", subtitle: "Eine erholsame Auszeit zwischen Venedig und dem Meer", cta: "Jetzt Buchen" },
    gallery: {
      eyebrow: "Innenansicht",
      title: "Ein Blick ins Innere",
      pool: "Der Pool",
      openspace: "Offener Wohnraum",
      living: "Wohnzimmer",
      sofa: "Sofa & Lounge",
      kitchen: "Moderne Küche",
      mural: "Lagunen-Wandbild",
      balcony: "Balkon",
      entrance: "Eingang",
      bedroom: "Hauptschlafzimmer",
      bedroomYellow: "Senfgelbes Schlafzimmer",
      bathroom: "Lagunen-Badezimmer",
      hallway: "Flur & Schränke",
    },
    features: { pine: "Blick auf den Pinienwald", pool: "Schwimmbad", beach: "Strand zu Fuß erreichbar", ferry: "5 Min. zur Fähre nach Venedig" },
    about: {
      eyebrow: "Die Wohnung",
      title: "Hell, farbenfroh & von der Lagune inspiriert",
      p1: "Ein moderner offener Wohnraum von 62 qm für bis zu 4 Gäste, gestaltet mit einer verspielten Farbpalette, die direkt von der venezianischen Lagune und dem warmen Adrialicht inspiriert ist.",
      p2a: "Das Wohnzimmer zeichnet sich durch eine ",
      mural: "handgemalte Aquarell-Punktwand",
      p2b: " aus — türkisfarbene Tropfen tanzen über weißen Putz, unsere unverwechselbare Note. Die Küche trägt ",
      marble: "Arbeitsplatten in Marmoroptik",
      p2c: " kombiniert mit salbeigrünen Schränken, während das Schlafzimmer in eine ",
      yellow: "warme senfgelbe Akzentwand",
      p2d: " gehüllt ist. Das Bad strahlt mit ",
      teal: "türkisen Lagunenfliesen",
      p2e: " — eine tägliche Erinnerung daran, dass das Meer direkt vor der Tür liegt.",
      sqm: "62 qm", guests: "Bis zu 4 Gäste", bedroom: "1 Schlafzimmer", balcony: "Privater Balkon",
    },
    amenities: {
      eyebrow: "Jeder Komfort",
      title: "Wesentliche Annehmlichkeiten",
      items: [
        "Gemeinschaftspool",
        "Blick auf den Pinienwald",
        "Strand zu Fuß",
        "Klimaanlage",
        "Voll ausgestattete Küche",
        "Kaffeemaschine",
        "Schnelles WLAN",
        "Smart TV",
        "Waschmaschine",
        "Privatparkplatz",
        "Self Check-in",
        "Privater Balkon",
      ],
    },
    experiences: {
      eyebrow: "Jenseits der Wohnung",
      title: "Erlebnisse & Ausflüge",
      items: [
        { title: "Venedig & Lagune", desc: "Direkter Fährzugang zum Markusplatz, Glasbläsereien in Murano, die bunten Häuser von Burano und unvergessliche Sonnenuntergangstouren.", mapLabel: "In Maps öffnen", mapQuery: "Piazza+San+Marco,+Venezia" },
        { title: "Strand & Natur", desc: "Lange Sandstrände nur wenige Schritte entfernt, duftende Pinienwald-Pfade und unvergessliche Adria-Sonnenuntergänge.", mapLabel: "In Maps öffnen", mapQuery: "Spiaggia+Cavallino+Treporti,+Venezia" },
        { title: "Outdoor-Aktivitäten", desc: "Fahrradverleih entlang malerischer Küstenrouten, Kajakausflüge durch ruhige Lagunenkanäle und Vogelbeobachtung im Naturschutzgebiet.", mapLabel: "In Maps öffnen", mapQuery: "Oasi+Naturalistica+Cavallino+Treporti" },
        { title: "Essen & Wein", desc: "Authentische venezianische Küche, fangfrischer Fisch aus der Adria und das heilige Ritual des abendlichen Spritz.", mapLabel: "In Maps öffnen", mapQuery: "Restaurants+Cavallino+Treporti,+Venezia" },
      ],
    },
    contact: { whatsappCta: "WhatsApp für Buchungen", callIt: "Italien", callDe: "Deutschland" },
    location: {
      eyebrow: "So finden Sie uns",
      title: "Lage",
      address: "Via Paolo Thaon di Revel 58",
      tagline: "Cavallino Treporti, Venedig · Italien",
      beach: "→ Strand", venice: "→ Venedig", murano: "→ Murano-Fähre",
      openMaps: "In Google Maps öffnen",
    },
    footer: { tagline: "Wo die Lagune auf das Meer trifft", cta: "Jetzt Buchen", rights: "Cavallino Treporti, Venedig" },
  },
};
