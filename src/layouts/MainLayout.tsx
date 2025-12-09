import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Mail, Phone, MapPin } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  onDonateClick: () => void;
  onVolunteerClick: () => void;
}

export default function MainLayout({ children, onDonateClick, onVolunteerClick }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
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
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-[#E2A201] transition-colors flex items-center">
                  About <ChevronDown size={16} className="ml-1" />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg mt-2 w-80 border border-gray-100">
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">About Tanyigbe</h3>
                      <div className="grid gap-3">
                        <Link
                          to="/about"
                          className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-colors"
                        >
                          <div className="font-semibold text-gray-900">Overview</div>
                          <div className="text-sm text-gray-600">Learn about our community</div>
                        </Link>
                        <Link
                          to="/history"
                          className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-colors"
                        >
                          <div className="font-semibold text-gray-900">History & Heritage</div>
                          <div className="text-sm text-gray-600">Our migration story</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('culture')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-[#E2A201] transition-colors flex items-center">
                  Culture <ChevronDown size={16} className="ml-1" />
                </button>
                {activeDropdown === 'culture' && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg mt-2 w-80 border border-gray-100">
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Culture & Traditions</h3>
                      <div className="grid gap-3">
                        <Link
                          to="/culture"
                          className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-colors"
                        >
                          <div className="font-semibold text-gray-900">Festivals</div>
                          <div className="text-sm text-gray-600">TAYAFEST and traditions</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('development')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-[#E2A201] transition-colors flex items-center">
                  Development <ChevronDown size={16} className="ml-1" />
                </button>
                {activeDropdown === 'development' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg mt-2 w-[600px] border border-gray-100">
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Development Initiatives</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <Link
                            to="/development#education"
                            className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-colors"
                          >
                            <div className="font-semibold text-gray-900">Education</div>
                            <div className="text-sm text-gray-600">BECE support & scholarships</div>
                          </Link>
                          <Link
                            to="/development#health"
                            className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-colors"
                          >
                            <div className="font-semibold text-gray-900">Health</div>
                            <div className="text-sm text-gray-600">Medical facilities & programs</div>
                          </Link>
                        </div>
                        <div className="space-y-3">
                          <Link
                            to="/development#infrastructure"
                            className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-colors"
                          >
                            <div className="font-semibold text-gray-900">Infrastructure</div>
                            <div className="text-sm text-gray-600">Roads & water projects</div>
                          </Link>
                          <Link
                            to="/development#agriculture"
                            className="block px-4 py-3 rounded-md hover:bg-[#E2A201] hover:bg-opacity-10 transition-colors"
                          >
                            <div className="font-semibold text-gray-900">Agriculture</div>
                            <div className="text-sm text-gray-600">Cocoa & food security</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
                to="/contact"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive('/contact') ? 'text-[#E2A201] font-semibold' : 'text-gray-700 hover:text-[#E2A201]'
                }`}
              >
                Contact
              </Link>

              <button
                onClick={onVolunteerClick}
                className="ml-2 bg-[#4C7000] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Volunteer
              </button>

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

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/history"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  History
                </Link>
                <Link
                  to="/culture"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Culture
                </Link>
                <Link
                  to="/development"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Development
                </Link>
                <Link
                  to="/diaspora"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Diaspora
                </Link>
                <Link
                  to="/tourism"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tourism
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <button
                  onClick={() => {
                    onVolunteerClick();
                    setIsMenuOpen(false);
                  }}
                  className="mx-4 bg-[#4C7000] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Volunteer
                </button>
                <button
                  onClick={() => {
                    onDonateClick();
                    setIsMenuOpen(false);
                  }}
                  className="mx-4 bg-[#FF4516] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Donate / Support
                </button>
              </div>
            </div>
          )}
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
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-[#E2A201] transition-colors">About Us</Link></li>
                <li><Link to="/history" className="text-gray-300 hover:text-[#E2A201] transition-colors">History</Link></li>
                <li><Link to="/culture" className="text-gray-300 hover:text-[#E2A201] transition-colors">Culture</Link></li>
                <li><Link to="/development" className="text-gray-300 hover:text-[#E2A201] transition-colors">Development</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link to="/diaspora" className="text-gray-300 hover:text-[#E2A201] transition-colors">Diaspora Network</Link></li>
                <li><Link to="/tourism" className="text-gray-300 hover:text-[#E2A201] transition-colors">Tourism</Link></li>
                <li><button onClick={onVolunteerClick} className="text-gray-300 hover:text-[#E2A201] transition-colors">Volunteer</button></li>
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
                  <span>info@tanyigbe.org</span>
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
