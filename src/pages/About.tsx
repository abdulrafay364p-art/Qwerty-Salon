import { motion } from 'framer-motion'
import { Award, Heart, Leaf, Gem, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal, SectionLabel } from '../components/Reveal'
import { team, stats } from '../lib/data'

const values = [
  { icon: Gem, title: 'Luxury in Detail', desc: 'Every element — from the linens to the lighting — is curated for an experience of pure indulgence.' },
  { icon: Heart, title: 'Genuine Care', desc: 'We listen first. Your comfort, preferences, and well-being guide everything we do.' },
  { icon: Leaf, title: 'Clean & Conscious', desc: 'Cruelty-free, eco-conscious products and rigorously sanitized tools for your peace of mind.' },
  { icon: Award, title: 'Award-Winning Team', desc: 'Internationally trained artists who treat their craft as a true art form.' },
]

export default function About() {
  return (
    <div>
      {/* HEADER */}
      <section className="relative flex h-[55vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hair-station.jpg" alt="Salon styling station" className="h-full w-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-[#1a1714]/75" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Our Story</SectionLabel>
            <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl md:text-7xl">
              About <span className="gold-text-gradient">Qwerty</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src="/images/facial-room.jpg"
                alt="Facial treatment room"
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[#1a1714] p-6 text-white shadow-xl sm:block">
                <p className="font-serif text-4xl font-bold gold-text-gradient">Est. 2012</p>
                <p className="text-xs uppercase tracking-wider text-white/60">A Legacy of Beauty</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionLabel>The Beginning</SectionLabel>
            <h2 className="font-serif text-4xl font-bold text-[#1a1714] sm:text-5xl">
              Crafted From a <span className="gold-text-gradient">Dream</span>
            </h2>
            <p className="mt-6 leading-relaxed text-[#1a1714]/70">
              Qwerty Saloon was born from a simple belief — that beauty is not
              a service, but an experience. Founded in 2012 by a collective of
              passionate artists, we set out to create a space where luxury feels
              personal and every visit feels like a retreat.
            </p>
            <p className="mt-4 leading-relaxed text-[#1a1714]/70">
              Today, we are an award-winning sanctuary trusted by thousands.
              Our doors open to a world of refined aesthetics, where master
              stylists, therapists, and aestheticians pour their hearts into
              making you feel extraordinary.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1a1714] px-7 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#b8893b]"
            >
              Visit Us <ArrowRight size={16} />
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

      {/* VALUES */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-14 text-center">
              <SectionLabel>What We Stand For</SectionLabel>
              <h2 className="font-serif text-4xl font-bold text-[#1a1714] sm:text-5xl">
                Our <span className="gold-text-gradient">Values</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#f7f3ec] transition-all duration-500 group-hover:gold-gradient">
                    <v.icon size={28} className="text-[#b8893b] transition-colors group-hover:text-[#1a1714]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1a1714]">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1a1714]/65">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#1a1714] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-14 text-center">
              <SectionLabel>The Artists</SectionLabel>
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
                Meet the <span className="gold-text-gradient">Team</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af6a]/40">
                  <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full gold-gradient font-serif text-3xl font-bold text-[#1a1714]">
                    {m.name.charAt(0)}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{m.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#d4af6a]">{m.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 text-center">
              <SectionLabel>A Glimpse Inside</SectionLabel>
              <h2 className="font-serif text-4xl font-bold text-[#1a1714] sm:text-5xl">
                Our <span className="gold-text-gradient">Space</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: '/images/salon-interior.jpg', label: 'Main Lounge' },
              { src: '/images/spa-room.jpg', label: 'Spa Suite' },
              { src: '/images/reception.jpg', label: 'Reception' },
              { src: '/images/pedicure.jpg', label: 'Nail Studio' },
            ].map((g, i) => (
              <Reveal key={g.label} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src={g.src}
                    alt={g.label}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-64"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1a1714]/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-serif text-lg text-white">{g.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
