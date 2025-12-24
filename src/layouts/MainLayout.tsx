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
              <Link
                to="/"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-[#E2A201] transition-colors flex items-center group">
                  About Us
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
                  <div className="bg-white shadow-xl rounded-lg border border-gray-100 p-6">
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">About Tanyigbe</h3>
                    <div className="grid gap-3">
                      <Link
                        to="/about"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Overview</div>
                        <div className="text-sm text-gray-600">Learn about our community</div>
                      </Link>
                      <Link
                        to="/history"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">History & Heritage</div>
                        <div className="text-sm text-gray-600">Our migration story</div>
                      </Link>
                      <Link
                        to="/about/goodwill-message"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Goodwill Message</div>
                        <div className="text-sm text-gray-600">From the Paramount Chief</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('culture')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-[#E2A201] transition-colors flex items-center group">
                  Culture
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${
                      activeDropdown === 'culture' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 w-80 transition-all duration-300 ease-out origin-top ${
                    activeDropdown === 'culture'
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                  style={{ paddingTop: '0.5rem' }}
                >
                  <div className="bg-white shadow-xl rounded-lg border border-gray-100 p-6">
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Culture & Traditions</h3>
                    <div className="grid gap-3">
                      <Link
                        to="/culture"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Overview</div>
                        <div className="text-sm text-gray-600">Eʋe culture and traditions</div>
                      </Link>
                      <Link
                        to="/culture/governance"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">Traditional Governance</div>
                        <div className="text-sm text-gray-600">Leadership & customs</div>
                      </Link>
                      <div className="border-t border-gray-200 my-2"></div>
                      <div className="px-4 py-2">
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Festivals</div>
                      </div>
                      <Link
                        to="/culture/tayafest"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">TAYAFEST</div>
                        <div className="text-sm text-gray-600">Annual Yam Festival</div>
                      </Link>
                      <Link
                        to="/culture/nordu-festival"
                        className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-semibold text-gray-900">NORDU Festival</div>
                        <div className="text-sm text-gray-600">Community celebration</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('development')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-[#E2A201] transition-colors flex items-center group">
                  Development
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${
                      activeDropdown === 'development' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] transition-all duration-300 ease-out origin-top ${
                    activeDropdown === 'development'
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                  style={{ paddingTop: '0.5rem' }}
                >
                  <div className="bg-white shadow-xl rounded-lg border border-gray-100 p-6">
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Development Initiatives</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <Link
                          to="/development#education"
                          className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                        >
                          <div className="font-semibold text-gray-900">Education</div>
                          <div className="text-sm text-gray-600">BECE support & scholarships</div>
                        </Link>
                        <Link
                          to="/development#health"
                          className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                        >
                          <div className="font-semibold text-gray-900">Health</div>
                          <div className="text-sm text-gray-600">Medical facilities & programs</div>
                        </Link>
                        <Link
                          to="/development#infrastructure"
                          className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                        >
                          <div className="font-semibold text-gray-900">Infrastructure</div>
                          <div className="text-sm text-gray-600">Roads & water projects</div>
                        </Link>
                      </div>
                      <div className="space-y-3">
                        <Link
                          to="/development#agriculture"
                          className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                        >
                          <div className="font-semibold text-gray-900">Agriculture</div>
                          <div className="text-sm text-gray-600">Cocoa & food security</div>
                        </Link>
                        <Link
                          to="/development#distinguished-natives"
                          className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-all duration-200 hover:translate-x-1"
                        >
                          <div className="font-semibold text-gray-900">Distinguished Natives</div>
                          <div className="text-sm text-gray-600">Contributors to development</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/diaspora"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/diaspora') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Diaspora
              </Link>

              <Link
                to="/tourism"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/tourism') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Tourism
              </Link>

              <Link
                to="/blog"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/blog') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/contact') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Contact
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
              isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-1">
              <Link
                to="/"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => toggleMobileSubmenu('about')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <span>About Us</span>
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
                      to="/about"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      to="/history"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      History & Heritage
                    </Link>
                    <Link
                      to="/about/goodwill-message"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Goodwill Message
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => toggleMobileSubmenu('culture')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <span>Culture</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileExpandedMenus.has('culture') ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileExpandedMenus.has('culture') ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      to="/culture"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      to="/culture/governance"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Traditional Governance
                    </Link>
                    <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase">Festivals</div>
                    <Link
                      to="/culture/tayafest"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      TAYAFEST
                    </Link>
                    <Link
                      to="/culture/nordu-festival"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      NORDU Festival
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => toggleMobileSubmenu('development')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <span>Development</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileExpandedMenus.has('development') ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileExpandedMenus.has('development') ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      to="/development#education"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Education
                    </Link>
                    <Link
                      to="/development#health"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Health
                    </Link>
                    <Link
                      to="/development#infrastructure"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Infrastructure
                    </Link>
                    <Link
                      to="/development#agriculture"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Agriculture
                    </Link>
                    <Link
                      to="/development#distinguished-natives"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Distinguished Natives
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/diaspora"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Diaspora
              </Link>

              <Link
                to="/tourism"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Tourism
              </Link>

              <Link
                to="/blog"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
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
                <li><Link to="/about" className="text-gray-300 hover:text-[#E2A201] transition-colors">About Us</Link></li>
                <li><Link to="/history" className="text-gray-300 hover:text-[#E2A201] transition-colors">History</Link></li>
                <li><Link to="/culture" className="text-gray-300 hover:text-[#E2A201] transition-colors">Culture</Link></li>
                <li><Link to="/development" className="text-gray-300 hover:text-[#E2A201] transition-colors">Development</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-[#E2A201] transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link to="/diaspora" className="text-gray-300 hover:text-[#E2A201] transition-colors">Diaspora Network</Link></li>
                <li><Link to="/tourism" className="text-gray-300 hover:text-[#E2A201] transition-colors">Tourism</Link></li>
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
                  <span>+233 XX XXX XXXX</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2" />
                  <span>info@tanyigbe.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tanyigbe Traditional Area. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
