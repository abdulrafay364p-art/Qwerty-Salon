import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react'
import { Reveal, SectionLabel } from '../components/Reveal'

const services = ['Hair Styling', 'Spa & Massage', 'Facial Care', 'Nail Artistry', 'Bridal Package', 'Other']

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: services[0], date: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', phone: '', service: services[0], date: '', message: '' })
    }, 3500)
  }

  const inputClass =
    'w-full rounded-xl border border-[#1a1714]/15 bg-white px-4 py-3 text-sm text-[#1a1714] outline-none transition-all duration-300 focus:border-[#b8893b] focus:ring-2 focus:ring-[#d4af6a]/30'

  return (
    <div>
      {/* HEADER */}
      <section className="relative flex h-[45vh] min-h-[320px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/reception.jpg" alt="Salon reception" className="h-full w-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-[#1a1714]/75" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Get in Touch</SectionLabel>
            <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl md:text-7xl">
              Contact <span className="gold-text-gradient">Us</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* Info */}
          <Reveal>
            <div>
              <SectionLabel>Visit Qwerty</SectionLabel>
              <h2 className="font-serif text-4xl font-bold text-[#1a1714] sm:text-5xl">
                We'd Love to <span className="gold-text-gradient">Welcome You</span>
              </h2>
              <p className="mt-5 leading-relaxed text-[#1a1714]/70">
                Whether you're booking an appointment, inquiring about a package,
                or simply have a question — our team is here to help. Reach out
                and we'll respond within one business day.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { icon: MapPin, title: 'Our Location', lines: ['24 Velvet Lane, Downtown District', 'City 10001'] },
                  { icon: Phone, title: 'Call Us', lines: ['+1 (212) 555-0148', '+1 (212) 555-0149'] },
                  { icon: Mail, title: 'Email Us', lines: ['hello@qwertysaloon.com', 'bookings@qwertysaloon.com'] },
                  { icon: Clock, title: 'Opening Hours', lines: ['Mon – Sat: 9:00 AM – 9:00 PM', 'Sunday: 10:00 AM – 6:00 PM'] },
                ].map((c) => (
                  <div key={c.title} className="flex gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full gold-gradient text-[#1a1714]">
                      <c.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#1a1714]">{c.title}</h3>
                      {c.lines.map((l) => (
                        <p key={l} className="text-sm text-[#1a1714]/65">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#1a1714]">Book an Appointment</h3>
              <p className="mt-2 text-sm text-[#1a1714]/60">Fill in the form and we'll confirm your booking shortly.</p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center rounded-xl bg-[#f7f3ec] py-12 text-center"
                >
                  <div className="grid h-16 w-16 place-items-center rounded-full gold-gradient text-[#1a1714]">
                    <Check size={32} />
                  </div>
                  <h4 className="mt-4 font-serif text-2xl font-bold text-[#1a1714]">Booking Received!</h4>
                  <p className="mt-2 text-sm text-[#1a1714]/65">
                    Thank you, {form.name || 'guest'}. We'll be in touch shortly to confirm.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-[#1a1714]/60">Full Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-[#1a1714]/60">Phone</label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wider text-[#1a1714]/60">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-[#1a1714]/60">Service</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className={inputClass}
                      >
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-wider text-[#1a1714]/60">Preferred Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wider text-[#1a1714]/60">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputClass + ' resize-none'}
                      placeholder="Tell us about what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full gold-gradient py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#1a1714] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#d4af6a]/30"
                  >
                    Send Booking Request
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP STRIP */}
      <section className="bg-[#1a1714] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <SectionLabel>Find Us</SectionLabel>
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              In the Heart of the <span className="gold-text-gradient">City</span>
            </h2>
            <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Qwerty Saloon location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.70%2C-73.99%2C40.72&layer=mapnik"
                className="h-72 w-full grayscale"
                loading="lazy"
              />
            </div>
            <p className="mt-6 text-sm text-white/50">24 Velvet Lane, Downtown District, City 10001</p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
