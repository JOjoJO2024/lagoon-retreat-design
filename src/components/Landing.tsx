import { useReveal } from "@/hooks/use-reveal";
import { BubbleDivider } from "@/components/BubbleDivider";
import heroPool from "@/assets/hero-pool.jpg";
import livingRoom from "@/assets/living-room.jpg";
import sofaLounge from "@/assets/sofa-lounge.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bedroom from "@/assets/bedroom.jpg";
import bathroom from "@/assets/bathroom.jpg";
import balcony from "@/assets/balcony.jpg";
import location from "@/assets/location.jpg";

const galleryItems = [
  { label: "🏊 The Pool", src: heroPool },
  { label: "🏠 Open-Space Living Room", src: livingRoom },
  { label: "🛋️ Sofa & Lounge Area", src: sofaLounge },
  { label: "🍳 Modern Kitchen", src: kitchen },
  { label: "🛏️ Master Bedroom", src: bedroom },
  { label: "🚿 Bathroom", src: bathroom },
  { label: "🌅 Balcony", src: balcony },
];

const keyFeatures = [
  { icon: "🌿", label: "Pine Forest Views" },
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "🏖️", label: "Beach Walkable" },
  { icon: "📍", label: "5 min from Venice ferry" },
];

const amenities = [
  { icon: "🌿", label: "Pine forest views" },
  { icon: "🏊", label: "Swimming pool" },
  { icon: "🏖️", label: "Beach walkable" },
  { icon: "🛋️", label: "Sofa bed (up to 4)" },
  { icon: "🛏️", label: "Double bed" },
  { icon: "🍳", label: "Full kitchen" },
  { icon: "☕", label: "Coffee machine" },
  { icon: "❄️", label: "A/C in all rooms" },
  { icon: "📺", label: "Smart TV" },
  { icon: "🧺", label: "Washing machine" },
  { icon: "🚗", label: "Private parking" },
  { icon: "🔑", label: "Self check-in" },
  { icon: "🌐", label: "Fast Wi-Fi" },
  { icon: "🏠", label: "Private balcony" },
];

const experiences = [
  {
    icon: "🛶",
    title: "Venice & Lagoon",
    desc: "Direct ferry access to St. Mark's, Murano glass workshops, the colorful houses of Burano, and unforgettable sunset tours across the lagoon.",
  },
  {
    icon: "🏖️",
    title: "Beach & Nature",
    desc: "Long sandy beaches just a short walk away, fragrant pine forest paths, and Adriatic sunsets you'll never forget.",
  },
  {
    icon: "🚴",
    title: "Outdoor Activities",
    desc: "Bike rentals along scenic coastal routes, kayak excursions through quiet lagoon canals, and birdwatching in the nature reserve.",
  },
  {
    icon: "🍝",
    title: "Food & Wine",
    desc: "Authentic Venetian cuisine, the freshest seafood from the Adriatic, and the sacred ritual of an evening spritz aperitivo.",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-in-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroPool}
          alt="Round swimming pool at golden hour with pine forest"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/85">
              Cavallino Treporti · Venezia
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-4xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Venice Lagoon
              <span className="block italic font-light">Beach &amp; Pool Retreat</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base text-white/90 sm:text-lg">
              A relaxing escape between Venice and the sea
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="#book"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-amber px-10 py-4 text-base font-semibold text-[oklch(0.25_0.04_60)] shadow-warm transition-transform hover:scale-105"
            >
              Book Now
            </a>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Inside the retreat</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">A look around</h2>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex gap-5 overflow-x-auto px-6 pb-6 scrollbar-hide snap-x snap-mandatory md:px-12">
            {galleryItems.map((item) => (
              <figure
                key={item.label}
                className="group relative flex-shrink-0 snap-start overflow-hidden rounded-3xl shadow-soft w-[280px] sm:w-[360px] md:w-[420px] h-[360px] md:h-[460px]"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1280}
                  height={960}
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
            {keyFeatures.map((f, i) => (
              <Reveal key={f.label} delay={i * 100}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm transition-colors hover:bg-white/10">
                  <div className="mb-4 text-5xl">{f.icon}</div>
                  <p className="font-serif text-lg">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BubbleDivider flip />

      {/* ABOUT */}
      <section className="py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">The apartment</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">
              Bright, colorful & inspired by the lagoon
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                A 62 sqm modern open-space retreat hosting up to 4 guests, designed
                with a playful palette borrowed straight from the Venetian lagoon
                and the warm Adriatic light.
              </p>
              <p>
                The living room features a hand-painted{" "}
                <span className="text-foreground font-medium">watercolor bubble-dot wall</span>{" "}
                — teal droplets dancing across white plaster, our signature visual
                identity. The kitchen wears{" "}
                <span className="text-foreground font-medium">marble-effect countertops</span>{" "}
                paired with sage cabinetry, while the master bedroom is wrapped in a
                <span className="text-foreground font-medium"> warm mustard-yellow accent wall</span>.
                The bathroom glows with{" "}
                <span className="text-foreground font-medium">teal lagoon floor tiles</span>{" "}
                — a daily reminder that the sea is just outside.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["62 sqm", "Up to 4 guests", "1 bedroom", "Private balcony"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <img src={livingRoom} alt="Living room with bubble-dot mural" loading="lazy" width={1280} height={960} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
              <div className="space-y-4 pt-10">
                <img src={bedroom} alt="Yellow bedroom" loading="lazy" width={1280} height={960} className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
                <img src={bathroom} alt="Teal bathroom" loading="lazy" width={1280} height={960} className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-[var(--marble)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Every comfort</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">Amenities</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {amenities.map((a, i) => (
              <Reveal key={a.label} delay={(i % 6) * 60}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-soft">
                  <span className="text-3xl">{a.icon}</span>
                  <span className="text-sm font-medium text-foreground md:text-base">{a.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BubbleDivider />

      {/* EXPERIENCES */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Beyond the retreat</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">Experiences & Excursions</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {experiences.map((e, i) => (
              <Reveal key={e.title} delay={(i % 2) * 120}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1">
                  <div className="bg-gradient-teal-amber p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/25 text-4xl backdrop-blur-sm">
                      {e.icon}
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
      <section className="bg-[var(--marble)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Where to find us</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">Location</h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            <Reveal className="lg:col-span-1">
              <div className="h-full rounded-3xl bg-[var(--teal-deep)] p-8 text-white shadow-soft md:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Address</p>
                <p className="mt-4 font-serif text-2xl leading-snug md:text-3xl">
                  Via Paolo Thaon di Revel 58
                </p>
                <p className="mt-1 text-white/85">Cavallino Treporti, Venezia · Italia</p>

                <div className="mt-8 space-y-3">
                  {[
                    { d: "5 min", t: "→ Beach" },
                    { d: "20 min", t: "→ Venice" },
                    { d: "15 min", t: "→ Murano ferry" },
                  ].map((b) => (
                    <div
                      key={b.t}
                      className="flex items-center justify-between rounded-full border border-white/20 bg-white/5 px-5 py-3"
                    >
                      <span className="font-serif text-lg text-[var(--amber-brand)]">{b.d}</span>
                      <span className="text-sm text-white/85">{b.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-2">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={location}
                  alt="Cavallino Treporti coast aerial view"
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.38_0.08_210/0.5)] via-transparent to-[oklch(0.78_0.15_75/0.25)]" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-3 backdrop-blur-sm">
                  <p className="font-serif text-lg text-foreground">📍 Cavallino Treporti</p>
                  <p className="text-xs text-muted-foreground">Where the lagoon meets the sea</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="book" className="bg-[var(--teal-deep)] py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl">Venice Lagoon Beach &amp; Pool Retreat</h2>
            <p className="mt-4 italic text-white/75 md:text-lg">
              Where the lagoon meets the sea
            </p>
            <a
              href="mailto:hello@venicelagoonretreat.it"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-amber px-10 py-4 text-base font-semibold text-[oklch(0.25_0.04_60)] shadow-warm transition-transform hover:scale-105"
            >
              Book Now
            </a>
            <div className="mt-14 border-t border-white/15 pt-8 text-sm text-white/55">
              © {new Date().getFullYear()} Venice Lagoon Retreat · Cavallino Treporti, Venezia
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
