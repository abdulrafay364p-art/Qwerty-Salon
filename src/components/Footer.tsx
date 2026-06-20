import { Link } from 'react-router-dom'
import { Scissors, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1714] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-[#1a1714]">
              <Scissors size={20} strokeWidth={2.2} />
            </span>
            <span className="font-serif text-2xl font-bold text-white">
              Qwerty<span className="gold-text-gradient"> Saloon</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Where elegance meets artistry. A sanctuary of beauty, wellness, and
            refined self-care in the heart of the city.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:border-[#d4af6a] hover:bg-[#d4af6a] hover:text-[#1a1714]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-5 font-serif text-lg text-white">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About Us', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((l) => (
              <li key={l.name}>
                <Link
                  to={l.path}
                  className="transition-colors duration-300 hover:text-[#d4af6a]"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-5 font-serif text-lg text-white">Services</h4>
          <ul className="space-y-3 text-sm">
            {['Hair Styling', 'Spa & Massage', 'Facial Care', 'Nail Artistry', 'Bridal Packages'].map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors duration-300 hover:text-[#d4af6a]">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 font-serif text-lg text-white">Visit Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-[#d4af6a]" />
              <span>24 Velvet Lane, Downtown District, City 10001</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-[#d4af6a]" />
              <span>+1 (212) 555-0148</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-[#d4af6a]" />
              <span>hello@qwertysaloon.com</span>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 text-[#d4af6a]" />
              <span>Mon–Sat: 9AM – 9PM<br />Sun: 10AM – 6PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Qwerty Saloon. Crafted with elegance. All rights reserved.
      </div>
    </footer>
  )
}
