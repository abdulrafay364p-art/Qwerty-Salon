import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Quote, MapPin, Clock, Phone } from 'lucide-react'
import { Reveal, SectionLabel } from '../components/Reveal'
import { services, testimonials, stats } from '../lib/data'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/salon-interior.jpg"
            alt="Qwerty Saloon interior"
            className="h-full w-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1714]/80 via-[#1a1714]/50 to-[#1a1714]/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#d4af6a]">
              Luxury Beauty & Wellness Sanctuary
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Where Beauty
              <br />
              <span className="gold-text-gradient">Becomes Art</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Step into Qwerty Saloon — a haven of refined elegance where master
              artistry, premium products, and serene ambiance create your most
              radiant self.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#1a1714] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#d4af6a]/30"
              >
                Book Appointment
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#d4af6a] hover:text-[#d4af6a]"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-[#d4af6a]"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden bg-[#1a1714] py-5">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, set) => (
            <div key={set} className="flex gap-12">
              {['Hair Styling', 'Spa Therapy', 'Facial Care', 'Nail Artistry', 'Bridal Glam', 'Skin Rejuvenation'].map((t) => (
                <span key={t} className="flex items-center gap-12 font-serif text-2xl text-white/40">
                  {t}
                  <span className="text-[#d4af6a]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* INTRO / ABOUT PREVIEW */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src="/images/reception.jpg"
                alt="Qwerty Saloon reception"
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl gold-gradient p-6 text-[#1a1714] shadow-xl sm:block">
                <p className="font-serif text-4xl font-bold">15+</p>
                <p className="text-xs uppercase tracking-wider">Years of Artistry</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionLabel>Welcome to Qwerty</SectionLabel>
            <h2 className="font-serif text-4xl font-bold text-[#1a1714] sm:text-5xl">
              A Sanctuary of <span className="gold-text-gradient">Elegance</span> & Care
            </h2>
            <p className="mt-6 leading-relaxed text-[#1a1714]/70">
              For over a decade, Qwerty Saloon has redefined the beauty experience.
              We blend time-honored techniques with modern innovation, using only
              the finest products in a space designed to calm the senses and
              elevate the spirit.
            </p>
            <p className="mt-4 leading-relaxed text-[#1a1714]/70">
              Our team of award-winning stylists, therapists, and aestheticians
              are devoted to one mission — helping you look and feel extraordinary.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-[#b8893b] transition-colors hover:text-[#1a1714]"
            >
              Discover Our Story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1a1714] py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-serif text-5xl font-bold gold-text-gradient">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-14 text-center">
              <SectionLabel>What We Offer</SectionLabel>
              <h2 className="font-serif text-4xl font-bold text-[#1a1714] sm:text-5xl">
                Signature <span className="gold-text-gradient">Services</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.id} delay={i * 0.12}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/70 to-transparent" />
                    <p className="absolute bottom-4 left-5 text-sm uppercase tracking-wider text-[#e8c87a]">
                      {s.price}
                    </p>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl font-bold text-[#1a1714]">{s.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#1a1714]/65">{s.description}</p>
                    <Link
                      to="/services"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#b8893b] transition-colors hover:text-[#1a1714]"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#b8893b] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#b8893b] transition-all duration-300 hover:bg-[#b8893b] hover:text-white"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED IMAGE BANNER */}
      <section className="relative flex min-h-[460px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/spa-room.jpg" alt="Spa room" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#1a1714]/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Quote size={48} className="mx-auto mb-6 text-[#d4af6a]" />
            <p className="font-serif text-2xl leading-relaxed text-white/90 sm:text-3xl md:text-4xl">
              “Beauty begins the moment you decide to be yourself, and we are
              here to help you shine in your own exquisite way.”
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#d4af6a]">
              The Qwerty Philosophy
            </p>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-14 text-center">
              <SectionLabel>Loved By Many</SectionLabel>
              <h2 className="font-serif text-4xl font-bold text-[#1a1714] sm:text-5xl">
                Client <span className="gold-text-gradient">Stories</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-[#d4af6a] text-[#d4af6a]" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-[#1a1714]/70">“{t.quote}”</p>
                  <div className="mt-6 border-t border-[#1a1714]/10 pt-4">
                    <p className="font-serif text-lg font-bold text-[#1a1714]">{t.name}</p>
                    <p className="text-xs uppercase tracking-wider text-[#b8893b]">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1714] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Ready to Be <span className="gold-text-gradient">Pampered?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Reserve your moment of luxury. Our team is ready to craft an
              experience tailored entirely to you.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#1a1714] transition-all duration-300 hover:scale-105"
              >
                Book Now <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+12125550148"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#d4af6a] hover:text-[#d4af6a]"
              >
                <Phone size={16} /> Call Us
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-wider text-white/40">
              <span className="flex items-center gap-2"><MapPin size={14} /> 24 Velvet Lane</span>
              <span className="flex items-center gap-2"><Clock size={14} /> Open 7 Days</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
