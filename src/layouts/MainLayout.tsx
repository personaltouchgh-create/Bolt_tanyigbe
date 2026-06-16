import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Facebook, Instagram, Youtube, Music,
  Mail, Phone, MapPin, Lock, Crown, BookOpen, Globe, Users,
  Camera, Newspaper, Leaf, History, Heart, Landmark, Map,
  ChevronRight, TreePine, Scroll
} from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  onDonateClick: () => void;
}

const aboutItems = [
  {
    to: '/about/goodwill-message',
    icon: Crown,
    title: 'Goodwill Message',
    desc: 'From the Paramount Chief',
  },
  {
    to: '/about',
    icon: Landmark,
    title: 'Welcome to Tanyigbe',
    desc: 'Discover our community',
  },
  {
    to: '/history',
    icon: Scroll,
    title: 'History & Heritage',
    desc: 'Our migration story & roots',
  },
];

const leadershipItems = [
  {
    to: '/governance/paramountcy',
    icon: Crown,
    title: 'Paramountcy',
    desc: 'Paramount Chief & Queenmother',
  },
  {
    to: '/governance/traditional-governance',
    icon: Landmark,
    title: 'Traditional Governance',
    desc: 'Structure, offices & authority',
  },
];

const divisionItems = [
  { to: '/divisions/anyigbe', title: 'Tanyigbe Anyigbe', desc: 'Most senior division' },
  { to: '/divisions/etoe', title: 'Tanyigbe Etoe', desc: 'Right-Hand Chief' },
  { to: '/divisions/atidze', title: 'Tanyigbe Atidze', desc: 'Left-Hand Chief' },
  { to: '/divisions/dzafe', title: 'Tanyigbe Dzaƒe', desc: 'Fourth division' },
];

const mainLinks = [
  { to: '/culture', label: 'Culture', icon: History },
  { to: '/development', label: 'Development', icon: Leaf },
  { to: '/diaspora', label: 'Diaspora', icon: Globe },
  { to: '/blog', label: 'Publications', icon: Newspaper },
  { to: '/gallery', label: 'Gallery', icon: Camera },
];

export default function MainLayout({ children, onDonateClick }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Set<string>>(new Set());
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setActiveMega(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const openMega = (key: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveMega(key);
  };

  const closeMega = () => {
    hoverTimeout.current = setTimeout(() => setActiveMega(null), 120);
  };

  const keepMega = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  const toggleMobile = (key: string) => {
    setMobileExpanded(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top announcement bar */}
      <div className="hidden lg:flex bg-[#1a2e1a] text-gray-300 text-xs py-2 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <a href="tel:+233240402187" className="flex items-center gap-1.5 hover:text-[#E2A201] transition-colors">
              <Phone size={11} />
              +233 24 040 2187
            </a>
            <a href="mailto:info@tanyigbe.com" className="flex items-center gap-1.5 hover:text-[#E2A201] transition-colors">
              <Mail size={11} />
              info@tanyigbe.com
            </a>
            <span className="flex items-center gap-1.5 text-gray-400">
              <MapPin size={11} />
              Volta Region, Ghana
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-[#E2A201] transition-colors"><Facebook size={13} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#E2A201] transition-colors"><Instagram size={13} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#E2A201] transition-colors"><Youtube size={13} /></a>
            <a href="#" aria-label="TikTok" className="hover:text-[#E2A201] transition-colors"><Music size={13} /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        ref={navRef}
        className={`sticky top-0 left-0 right-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        {/* Gold accent line */}
        <div className="h-0.5 bg-gradient-to-r from-[#4C7000] via-[#E2A201] to-[#FF4516]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <img
                src="/tanyibe-logo-011.png"
                alt="Tanyigbe Traditional Area"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden md:block">
                <p className="font-serif text-base font-bold text-gray-900 leading-tight">TANYIGBE</p>
                <p className="text-[10px] text-gray-500 tracking-widest uppercase leading-tight">Traditional Area</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* About */}
              <div
                onMouseEnter={() => openMega('about')}
                onMouseLeave={closeMega}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeMega === 'about' || isActive('/about') || isActive('/history')
                      ? 'text-[#E2A201]'
                      : 'text-gray-700 hover:text-[#E2A201]'
                  }`}
                >
                  About
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeMega === 'about' ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Governance */}
              <div
                onMouseEnter={() => openMega('governance')}
                onMouseLeave={closeMega}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeMega === 'governance' || isActive('/governance') || isActive('/divisions')
                      ? 'text-[#E2A201]'
                      : 'text-gray-700 hover:text-[#E2A201]'
                  }`}
                >
                  Governance
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeMega === 'governance' ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Single links */}
              {mainLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(to) ? 'text-[#E2A201]' : 'text-gray-700 hover:text-[#E2A201]'
                  }`}
                >
                  {label}
                </Link>
              ))}

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/contact') ? 'text-[#E2A201]' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={onDonateClick}
                className="flex items-center gap-2 bg-[#FF4516] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#e03d12] transition-all duration-200 hover:shadow-md hover:-translate-y-px"
              >
                <Heart size={14} />
                Donate
              </button>
              <Link
                to="/admin/login"
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-md"
                title="Admin Login"
              >
                <Lock size={15} />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MEGA MENUS */}
        {/* About mega */}
        <div
          onMouseEnter={keepMega}
          onMouseLeave={closeMega}
          className={`absolute left-0 right-0 bg-white border-t border-gray-100 shadow-2xl transition-all duration-200 origin-top ${
            activeMega === 'about'
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-1 pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Left: Links */}
              <div className="col-span-2 grid grid-cols-1 gap-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">About Tanyigbe</p>
                {aboutItems.map(({ to, icon: Icon, title, desc }) => (
                  <Link
                    key={to}
                    to={to}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50 transition-all duration-200"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 group-hover:bg-[#E2A201] flex items-center justify-center transition-colors duration-200">
                      <Icon size={18} className="text-[#E2A201] group-hover:text-white transition-colors duration-200" />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-[#E2A201] transition-colors text-sm">{title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                    <ChevronRight size={14} className="ml-auto mt-1 text-gray-300 group-hover:text-[#E2A201] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                  </Link>
                ))}
              </div>

              {/* Right: Featured */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4C7000] to-[#2d4200] p-6 flex flex-col justify-end min-h-[200px]">
                <img
                  src="/gemini_generated_image_zc992mzc992mzc99.webp"
                  alt="Tanyigbe"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10">
                  <p className="text-[#E2A201] text-xs font-bold uppercase tracking-widest mb-1">Est. 16th Century</p>
                  <h3 className="text-white font-serif text-xl font-bold leading-tight mb-2">Tanyigbe Traditional Area</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">A proud Ewe community in the Volta Region of Ghana, preserving heritage and building community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Governance mega */}
        <div
          onMouseEnter={keepMega}
          onMouseLeave={closeMega}
          className={`absolute left-0 right-0 bg-white border-t border-gray-100 shadow-2xl transition-all duration-200 origin-top ${
            activeMega === 'governance'
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-1 pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Leadership column */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Leadership</p>
                <div className="space-y-2">
                  {leadershipItems.map(({ to, icon: Icon, title, desc }) => (
                    <Link
                      key={to}
                      to={to}
                      className="group flex items-start gap-3 p-4 rounded-xl hover:bg-amber-50 transition-all duration-200"
                    >
                      <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-amber-100 group-hover:bg-[#E2A201] flex items-center justify-center transition-colors duration-200">
                        <Icon size={16} className="text-[#E2A201] group-hover:text-white transition-colors duration-200" />
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-[#E2A201] transition-colors text-sm">{title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divisions column */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Divisions</p>
                <div className="grid grid-cols-2 gap-2">
                  {divisionItems.map(({ to, title, desc }) => (
                    <Link
                      key={to}
                      to={to}
                      className="group p-4 rounded-xl border border-gray-100 hover:border-[#E2A201] hover:bg-amber-50 transition-all duration-200"
                    >
                      <div className="w-7 h-7 rounded-md bg-green-100 group-hover:bg-[#4C7000] flex items-center justify-center mb-2 transition-colors duration-200">
                        <Map size={13} className="text-[#4C7000] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <p className="font-semibold text-gray-900 group-hover:text-[#E2A201] transition-colors text-xs leading-tight">{title}</p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-tight">{desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured panel */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2e1a] to-[#0d1a0d] p-6 flex flex-col justify-end min-h-[200px]">
                <img
                  src="/476316223_1169596868073205_3511019283656705740_n.jpg"
                  alt="Traditional Governance"
                  className="absolute inset-0 w-full h-full object-cover opacity-25"
                />
                <div className="relative z-10">
                  <p className="text-[#E2A201] text-xs font-bold uppercase tracking-widest mb-1">Traditional Leadership</p>
                  <h3 className="text-white font-serif text-lg font-bold leading-tight mb-2">Four-Division Structure</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Tanyigbe's governance is organized across four historic divisions, each with defined roles and responsibilities.</p>
                  <Link
                    to="/governance/traditional-governance"
                    className="inline-flex items-center gap-1 text-[#E2A201] text-xs font-semibold mt-3 hover:gap-2 transition-all duration-200"
                  >
                    Learn more <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden border-t border-gray-100 overflow-hidden transition-all duration-400 ease-in-out ${
            isMenuOpen ? 'max-h-[90vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-3 px-4 space-y-0.5">
            {/* About */}
            <div>
              <button
                onClick={() => toggleMobile('about')}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-800 font-medium text-sm rounded-lg hover:bg-gray-50 transition-colors"
              >
                About
                <ChevronDown size={16} className={`transition-transform duration-300 ${mobileExpanded.has('about') ? 'rotate-180 text-[#E2A201]' : 'text-gray-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded.has('about') ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 pb-2 space-y-0.5">
                  {aboutItems.map(({ to, title }) => (
                    <Link key={to} to={to} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-[#E2A201] hover:bg-amber-50 rounded-lg transition-all">
                      <ChevronRight size={13} className="text-gray-300" />
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Governance */}
            <div>
              <button
                onClick={() => toggleMobile('governance')}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-800 font-medium text-sm rounded-lg hover:bg-gray-50 transition-colors"
              >
                Governance
                <ChevronDown size={16} className={`transition-transform duration-300 ${mobileExpanded.has('governance') ? 'rotate-180 text-[#E2A201]' : 'text-gray-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded.has('governance') ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 pb-2 space-y-0.5">
                  {leadershipItems.map(({ to, title }) => (
                    <Link key={to} to={to} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-[#E2A201] hover:bg-amber-50 rounded-lg transition-all">
                      <ChevronRight size={13} className="text-gray-300" />
                      {title}
                    </Link>
                  ))}
                  <p className="px-4 pt-3 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Divisions</p>
                  {divisionItems.map(({ to, title }) => (
                    <Link key={to} to={to} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-[#E2A201] hover:bg-amber-50 rounded-lg transition-all">
                      <ChevronRight size={13} className="text-gray-300" />
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Single links */}
            {mainLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(to) ? 'text-[#E2A201] bg-amber-50' : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive('/contact') ? 'text-[#E2A201] bg-amber-50' : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-3 pb-4 border-t border-gray-100 mt-2 space-y-2">
              <button
                onClick={() => { onDonateClick(); setIsMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-2 bg-[#FF4516] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#e03d12] transition-colors"
              >
                <Heart size={15} />
                Donate / Support
              </button>
              <Link
                to="/admin/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
              >
                <Lock size={13} />
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/tanyibe-logo-011.png" alt="Tanyigbe Traditional Area" className="h-14 w-14 object-contain" />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#E2A201] leading-tight">Tanyigbe</h3>
                  <p className="text-gray-500 text-xs tracking-wide uppercase">Traditional Area</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">Preserving heritage, building the future for generations to come.</p>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E2A201] hover:text-white transition-all duration-200"><Facebook size={14} /></a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E2A201] hover:text-white transition-all duration-200"><Instagram size={14} /></a>
                <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E2A201] hover:text-white transition-all duration-200"><Youtube size={14} /></a>
                <a href="#" aria-label="TikTok" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E2A201] hover:text-white transition-all duration-200"><Music size={14} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">About</h4>
              <ul className="space-y-2.5">
                <li><Link to="/about" className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">Welcome to Tanyigbe</Link></li>
                <li><Link to="/history" className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">History & Heritage</Link></li>
                <li><Link to="/about/goodwill-message" className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">Goodwill Message</Link></li>
                <li><Link to="/culture" className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">Culture</Link></li>
                <li><Link to="/development" className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">Development</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li><Link to="/diaspora" className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">Diaspora Network</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">Gallery</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">Publications</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">Contact Us</Link></li>
                <li><button onClick={onDonateClick} className="text-gray-400 hover:text-[#E2A201] text-sm transition-colors">Donate</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#E2A201]" />
                  Tanyigbe Traditional Area<br />Volta Region, Ghana
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="flex-shrink-0 text-[#E2A201]" />
                  +233 24 040 2187
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={15} className="flex-shrink-0 text-[#E2A201]" />
                  info@tanyigbe.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-3">
            <p>&copy; 2026 Tanyigbe Traditional Area. All rights reserved.</p>
            <Link to="/admin/login" className="flex items-center gap-1.5 text-gray-600 hover:text-gray-400 transition-colors text-xs">
              <Lock size={12} />
              Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
