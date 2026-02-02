import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Instagram, Youtube, Music, Mail, Phone, MapPin } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  onDonateClick: () => void;
}

export default function MainLayout({ children, onDonateClick }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedMenus, setMobileExpandedMenus] = useState<Set<string>>(new Set());
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileSubmenu = (menu: string) => {
    setMobileExpandedMenus(prev => {
      const newSet = new Set(prev);
      if (newSet.has(menu)) {
        newSet.delete(menu);
      } else {
        newSet.add(menu);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img
                src="/tanyibe-logo-011.png"
                alt="Tanyigbe Traditional Area"
                className="h-16 w-16 object-contain"
              />
              <span className="font-serif text-xl font-bold text-gray-900 hidden md:block">
                TANYIGBE
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-[#E2A201] transition-colors flex items-center group">
                  About
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${
                      activeDropdown === 'about' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 w-80 transition-all duration-300 ease-out origin-top ${
                    activeDropdown === 'about'
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                  style={{ paddingTop: '0.5rem' }}
                >
                  <div className="bg-white shadow-xl rounded-lg border border-gray-100 p-4">
                    <div className="grid gap-2">
                      <Link
                        to="/about/goodwill-message"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Goodwill Message</div>
                        <div className="text-sm text-gray-600">From the Paramount Chief</div>
                      </Link>
                      <Link
                        to="/about"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Welcome to Tanyigbe</div>
                        <div className="text-sm text-gray-600">Learn about our community</div>
                      </Link>
                      <Link
                        to="/history"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Our History & Heritage</div>
                        <div className="text-sm text-gray-600">Our migration story</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('divisions')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-[#E2A201] transition-colors flex items-center group">
                  Divisions
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${
                      activeDropdown === 'divisions' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 w-80 transition-all duration-300 ease-out origin-top ${
                    activeDropdown === 'divisions'
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                  style={{ paddingTop: '0.5rem' }}
                >
                  <div className="bg-white shadow-xl rounded-lg border border-gray-100 p-4">
                    <div className="grid gap-2">
                      <Link
                        to="/divisions/anyigbe"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Tanyigbe Anyigbe</div>
                        <div className="text-sm text-gray-600">Most senior division</div>
                      </Link>
                      <Link
                        to="/divisions/etoe"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Tanyigbe Etoe</div>
                        <div className="text-sm text-gray-600">Right-Hand Chief</div>
                      </Link>
                      <Link
                        to="/divisions/atidze"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Tanyigbe Atidze</div>
                        <div className="text-sm text-gray-600">Left-Hand Chief</div>
                      </Link>
                      <Link
                        to="/divisions/dzafe"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Tanyigbe Dzaƒe</div>
                        <div className="text-sm text-gray-600">Fourth division</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/culture"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/culture') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Culture
              </Link>

              <Link
                to="/development"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/development') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Development
              </Link>

              <Link
                to="/diaspora"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/diaspora') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Diaspora Network
              </Link>

              <Link
                to="/blog"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/blog') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Publications
              </Link>

              <Link
                to="/gallery"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/gallery') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Gallery
              </Link>

              <button
                onClick={onDonateClick}
                className="bg-[#FF4516] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Donate
              </button>
            </div>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div
            className={`lg:hidden border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-1">
              <div>
                <button
                  onClick={() => toggleMobileSubmenu('about')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <span>About</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileExpandedMenus.has('about') ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileExpandedMenus.has('about') ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      to="/about/goodwill-message"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Goodwill Message
                    </Link>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Welcome to Tanyigbe
                    </Link>
                    <Link
                      to="/history"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our History & Heritage
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => toggleMobileSubmenu('divisions')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <span>Divisions</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileExpandedMenus.has('divisions') ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileExpandedMenus.has('divisions') ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      to="/divisions/anyigbe"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tanyigbe Anyigbe
                    </Link>
                    <Link
                      to="/divisions/etoe"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tanyigbe Etoe
                    </Link>
                    <Link
                      to="/divisions/atidze"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tanyigbe Atidze
                    </Link>
                    <Link
                      to="/divisions/dzafe"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tanyigbe Dzaƒe
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/culture"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Culture
              </Link>

              <Link
                to="/development"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Development
              </Link>

              <Link
                to="/diaspora"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Diaspora Network
              </Link>

              <Link
                to="/blog"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Publications
              </Link>

              <Link
                to="/gallery"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onDonateClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full mx-4 bg-[#FF4516] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
                  style={{ width: 'calc(100% - 2rem)' }}
                >
                  Donate / Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow mt-20">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/tanyibe-logo-011.png"
                  alt="Tanyigbe Traditional Area"
                  className="h-16 w-16 object-contain"
                />
                <h3 className="font-serif text-xl font-bold text-[#E2A201]">Tanyigbe Traditional Area</h3>
              </div>
              <p className="text-gray-300 mb-4">Preserving heritage, building future</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#E2A201] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#E2A201] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#E2A201] transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#E2A201] transition-colors">
                  <Music size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-[#E2A201] transition-colors">Welcome to Tanyigbe</Link></li>
                <li><Link to="/history" className="text-gray-300 hover:text-[#E2A201] transition-colors">History & Heritage</Link></li>
                <li><Link to="/culture" className="text-gray-300 hover:text-[#E2A201] transition-colors">Culture</Link></li>
                <li><Link to="/development" className="text-gray-300 hover:text-[#E2A201] transition-colors">Development</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-[#E2A201] transition-colors">Publications</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link to="/diaspora" className="text-gray-300 hover:text-[#E2A201] transition-colors">Diaspora Network</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-[#E2A201] transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-[#E2A201] transition-colors">Contact Us</Link></li>
                <li><button onClick={onDonateClick} className="text-gray-300 hover:text-[#E2A201] transition-colors">Donate</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                  <span>Tanyigbe Traditional Area<br />Volta Region, Ghana</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-2" />
                  <span>+233 24 040 2187</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2" />
                  <span>info@tanyigbe.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Tanyigbe Traditional Area. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
