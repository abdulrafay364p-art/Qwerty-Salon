import { motion } from 'framer-motion'
import { Check, ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal, SectionLabel } from '../components/Reveal'
import { services } from '../lib/data'

const packages = [
  {
    name: 'The Classic',
    price: '$120',
    desc: 'A perfect introduction to Qwerty luxury.',
    features: ['Signature haircut & style', 'Express facial treatment', 'Complimentary beverage', '30-min scalp massage'],
    featured: false,
  },
  {
    name: 'The Radiance',
    price: '$280',
    desc: 'Our most popular full transformation package.',
    features: ['Cut, color & blow-dry', '90-min luxury facial', 'Spa manicure & pedicure', 'Aromatherapy shoulder massage', 'Take-home care kit'],
    featured: true,
  },
  {
    name: 'The Bridal',
    price: '$650',
    desc: 'Complete bridal & event glamour experience.',
    features: ['Bridal hair trial & styling', 'Full-face event makeup', 'Pre-wedding spa ritual', 'Nail art for the occasion', 'Priority booking & lounge', 'Champagne & canapés'],
    featured: false,
  },
]

export default function Services() {
  return (
    <div>
      {/* HEADER */}
      <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/products.jpg" alt="Beauty products" className="h-full w-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-[#1a1714]/75" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Our Menu</SectionLabel>
            <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl md:text-7xl">
              Our <span className="gold-text-gradient">Services</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-white/65">
              Every service is a ritual — performed by experts, designed around you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-6">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <div
                className={`grid items-center gap-10 md:grid-cols-2 ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full bg-[#1a1714]/80 px-4 py-2 text-xs text-[#e8c87a] backdrop-blur">
                    <Clock size={14} /> {s.duration}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#b8893b]">
                    {String(i + 1).padStart(2, '0')} — Service
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-[#1a1714] sm:text-4xl">{s.name}</h2>
                  <p className="mt-4 leading-relaxed text-[#1a1714]/70">{s.description}</p>
                  <ul className="mt-5 space-y-2">
                    {['Premium products', 'Expert specialists', 'Serene private suite'].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#1a1714]/70">
                        <Check size={16} className="text-[#b8893b]" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-6">
                    <span className="font-serif text-3xl font-bold gold-text-gradient">{s.price}</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1a1714] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#b8893b]"
                    >
                      Book <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-[#1a1714] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-14 text-center">
              <SectionLabel>Curated For You</SectionLabel>
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
                Signature <span className="gold-text-gradient">Packages</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.12}>
                <div
                  className={`relative h-full rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                    p.featured
                      ? 'gold-gradient text-[#1a1714] shadow-2xl shadow-[#d4af6a]/20'
                      : 'bg-white/5 text-white border border-white/10 hover:border-[#d4af6a]/40'
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1a1714] px-4 py-1 text-xs uppercase tracking-wider text-[#d4af6a]">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-serif text-2xl font-bold">{p.name}</h3>
                  <p className={`mt-2 text-sm ${p.featured ? 'text-[#1a1714]/70' : 'text-white/60'}`}>{p.desc}</p>
                  <p className="mt-5 font-serif text-5xl font-bold">{p.price}</p>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={16} className={`mt-0.5 shrink-0 ${p.featured ? 'text-[#1a1714]' : 'text-[#d4af6a]'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 block rounded-full py-3 text-center text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                      p.featured
                        ? 'bg-[#1a1714] text-white hover:bg-black'
                        : 'gold-gradient text-[#1a1714]'
                    }`}
                  >
                    Select Package
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
