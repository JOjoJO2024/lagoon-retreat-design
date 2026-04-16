import { useReveal } from "@/hooks/use-reveal";
import { LangProvider, useLang } from "@/hooks/use-lang";
import { BubbleDivider } from "@/components/BubbleDivider";
import { LanguageDropdown } from "@/components/LanguageDropdown";

import realPool from "@/assets/real-pool.jpg";
import realBalcony from "@/assets/real-balcony.jpg";
import realLiving from "@/assets/real-living.jpg";
import realSofa from "@/assets/real-sofa.jpg";
import realKitchen from "@/assets/real-kitchen.jpg";
import realOpenspace from "@/assets/real-openspace.jpg";
import realMural from "@/assets/real-mural.jpg";
import realEntrance from "@/assets/real-entrance.jpg";
import realBedroom1 from "@/assets/real-bedroom-1.jpg";
import realBedroom2 from "@/assets/real-bedroom-2.jpg";
import realBedroom3 from "@/assets/real-bedroom-3.jpg";
import realBathroom2 from "@/assets/real-bathroom-2.jpg";
import realBathroom4 from "@/assets/real-bathroom-4.jpg";
import realHallway from "@/assets/real-hallway.jpg";
import location from "@/assets/location.jpg";

// Address coordinates for Google Maps
const MAPS_QUERY = "Via+Paolo+Thaon+di+Revel+58,+Cavallino+Treporti,+Venezia";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-in-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Header() {
  const { t } = useLang();
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 py-5 md:px-10 md:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="font-serif text-lg italic text-white drop-shadow-md md:text-xl">
          Cavallino Treporti
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/90 lg:flex">
          <a href="#gallery" className="hover:text-white transition-colors">{t.nav.gallery}</a>
          <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
          <a href="#amenities" className="hover:text-white transition-colors">{t.nav.amenities}</a>
          <a href="#experiences" className="hover:text-white transition-colors">{t.nav.experiences}</a>
          <a href="#location" className="hover:text-white transition-colors">{t.nav.location}</a>
        </nav>
        <LanguageDropdown variant="dark" />
      </div>
    </header>
  );
}

function LandingInner() {
  const { t } = useLang();

  const galleryItems = [
    { label: t.gallery.pool, src: realPool },
    { label: t.gallery.openspace, src: realOpenspace },
    { label: t.gallery.living, src: realLiving },
    { label: t.gallery.sofa, src: realSofa },
    { label: t.gallery.kitchen, src: realKitchen },
    { label: t.gallery.mural, src: realMural },
    { label: t.gallery.bedroomYellow, src: realBedroom1 },
    { label: t.gallery.bedroom, src: realBedroom2 },
    { label: t.gallery.bedroom, src: realBedroom3 },
    { label: t.gallery.bathroom, src: realBathroom2 },
    { label: t.gallery.bathroom, src: realBathroom4 },
    { label: t.gallery.hallway, src: realHallway },
    { label: t.gallery.balcony, src: realBalcony },
    { label: t.gallery.entrance, src: realEntrance },
  ];

  const features = [
    { mark: "I", label: t.features.pine },
    { mark: "II", label: t.features.pool },
    { mark: "III", label: t.features.beach },
    { mark: "IV", label: t.features.ferry },
  ];

  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={realPool}
          alt="Piscina del residence a Cavallino Treporti"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/85">
              {t.hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif italic text-5xl leading-[1.05] sm:text-7xl md:text-8xl lg:text-9xl">
              Cavallino
              <span className="block font-light not-italic tracking-wide text-white/95 text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
                Tre Porti
              </span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-base text-white/90 sm:text-lg">
              {t.hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="#book"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-amber px-10 py-4 text-base font-semibold text-[oklch(0.25_0.04_60)] shadow-warm transition-transform hover:scale-105"
            >
              {t.hero.cta}
            </a>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">{t.gallery.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">{t.gallery.title}</h2>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex gap-5 overflow-x-auto px-6 pb-6 scrollbar-hide snap-x snap-mandatory md:px-12">
            {galleryItems.map((item, i) => (
              <figure
                key={`${item.label}-${i}`}
                className="group relative flex-shrink-0 snap-start overflow-hidden rounded-3xl shadow-soft w-[280px] sm:w-[360px] md:w-[420px] h-[360px] md:h-[460px]"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.03_220/0.85)] via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 right-5 font-serif text-xl text-white md:text-2xl">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      <BubbleDivider />

      {/* KEY FEATURES */}
      <section className="bg-[var(--teal-deep)] py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {features.map((f, i) => (
              <Reveal key={f.label} delay={i * 100}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm transition-colors hover:bg-white/10">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--amber-brand)]/60 font-serif text-xl text-[var(--amber-brand)]">
                    {f.mark}
                  </div>
                  <p className="font-serif text-lg leading-snug">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BubbleDivider flip />

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">{t.about.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">
              {t.about.title}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>{t.about.p1}</p>
              <p>
                {t.about.p2a}
                <span className="text-foreground font-medium">{t.about.mural}</span>
                {t.about.p2b}
                <span className="text-foreground font-medium">{t.about.marble}</span>
                {t.about.p2c}
                <span className="text-foreground font-medium">{t.about.yellow}</span>
                {t.about.p2d}
                <span className="text-foreground font-medium">{t.about.teal}</span>
                {t.about.p2e}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[t.about.sqm, t.about.guests, t.about.bedroom, t.about.balcony].map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <img src={realMural} alt={t.gallery.mural} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
              <div className="space-y-4 pt-10">
                <img src={realKitchen} alt={t.gallery.kitchen} loading="lazy" className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
                <img src={realSofa} alt={t.gallery.sofa} loading="lazy" className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="bg-[var(--marble)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">{t.amenities.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">{t.amenities.title}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2 md:grid-cols-3">
            {t.amenities.items.map((label, i) => (
              <Reveal key={label} delay={(i % 6) * 50}>
                <div className="flex items-center gap-4 border-b border-border/60 py-4">
                  <span className="font-serif text-sm text-primary tabular-nums w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-shrink-0 w-6 bg-[var(--amber-brand)]" />
                  <span className="text-sm font-medium text-foreground md:text-base">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BubbleDivider />

      {/* EXPERIENCES */}
      <section id="experiences" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">{t.experiences.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">{t.experiences.title}</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {t.experiences.items.map((e, i) => (
              <Reveal key={e.title} delay={(i % 2) * 120}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1">
                  <div className="bg-gradient-teal-amber p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/30 font-serif text-xl text-white backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl text-foreground md:text-3xl">{e.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{e.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="bg-[var(--marble)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">{t.location.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">{t.location.title}</h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            <Reveal className="lg:col-span-1">
              <div className="flex h-full flex-col rounded-3xl bg-[var(--teal-deep)] p-8 text-white shadow-soft md:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Address</p>
                <p className="mt-4 font-serif text-2xl leading-snug md:text-3xl">
                  {t.location.address}
                </p>
                <p className="mt-1 text-white/85">{t.location.tagline}</p>

                <div className="mt-8 space-y-3">
                  {[
                    { d: "5 min", l: t.location.beach },
                    { d: "20 min", l: t.location.venice },
                    { d: "15 min", l: t.location.murano },
                  ].map((b) => (
                    <div key={b.l} className="flex items-center justify-between rounded-full border border-white/20 bg-white/5 px-5 py-3">
                      <span className="font-serif text-lg text-[var(--amber-brand)]">{b.d}</span>
                      <span className="text-sm text-white/85">{b.l}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-amber px-6 py-3 text-sm font-semibold text-[oklch(0.25_0.04_60)] transition-transform hover:scale-105"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {t.location.openMaps}
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.location.openMaps}
                className="relative block h-full min-h-[420px] overflow-hidden rounded-3xl shadow-soft"
              >
                <iframe
                  src={MAPS_EMBED}
                  title="Google Maps — Cavallino Treporti"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
                <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-foreground shadow-md backdrop-blur-sm">
                  📍 {t.location.openMaps}
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="book" className="bg-[var(--teal-deep)] py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif italic text-4xl md:text-6xl">Cavallino Tre Porti</h2>
            <p className="mt-4 italic text-white/75 md:text-lg">{t.footer.tagline}</p>
            <a
              href="mailto:hello@cavallinotreporti.it"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-amber px-10 py-4 text-base font-semibold text-[oklch(0.25_0.04_60)] shadow-warm transition-transform hover:scale-105"
            >
              {t.footer.cta}
            </a>
            <div className="mt-14 border-t border-white/15 pt-8 text-sm text-white/55">
              © {new Date().getFullYear()} Cavallino Tre Porti · {t.footer.rights}
            </div>
          </Reveal>
        </div>
      </footer>

      {/* Suppress unused location image import warning by keeping reference */}
      <link rel="preload" as="image" href={location} />
    </main>
  );
}

export function Landing() {
  return (
    <LangProvider>
      <LandingInner />
    </LangProvider>
  );
}
