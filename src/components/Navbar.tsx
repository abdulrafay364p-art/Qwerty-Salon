import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Scissors } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a1714]/95 backdrop-blur-md py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-[#1a1714] transition-transform duration-500 group-hover:rotate-12">
            <Scissors size={20} strokeWidth={2.2} />
          </span>
          <span className="font-serif text-2xl font-bold tracking-wide text-white">
            Qwerty<span className="gold-text-gradient"> Saloon</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative text-sm uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active ? 'text-[#d4af6a]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#d4af6a] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full border border-[#d4af6a]/60 px-6 py-2 text-xs uppercase tracking-[0.2em] text-[#d4af6a] transition-all duration-300 hover:bg-[#d4af6a] hover:text-[#1a1714] md:inline-block"
        >
          Book Now
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-[#1a1714] transition-all duration-500 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-sm uppercase tracking-[0.2em] ${
                  location.pathname === link.path ? 'text-[#d4af6a]' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="rounded-full gold-gradient px-8 py-2 text-xs uppercase tracking-[0.2em] text-[#1a1714]"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
