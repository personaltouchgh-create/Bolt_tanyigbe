import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Heart, Calendar, Handshake, TreePine } from 'lucide-react';

export default function Tayafest() {
  useEffect(() => {
    document.title = 'TAYAFEST - Tanyigbe Yam Festival | Annual Cultural Celebration in Tanyigbe Traditional Area';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'TAYAFEST is the annual Tanyigbe Yam Festival celebrating agricultural heritage, cultural traditions, and community unity. Join us for customary rites, thanksgiving ceremonies, and cultural activities in the Volta Region of Ghana.');
    }
  }, []);

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/475764112_1168645144835044_4633959021770456733_n.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/90"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 bg-[#E2A201] px-6 py-2 rounded-full">
            <Sparkles size={20} />
            <span className="font-semibold">Annual Cultural Celebration</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            TAYAFEST
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">The Tanyigbe Yam Festival</p>
          <div className="w-24 h-1 bg-[#E2A201] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Celebrating agricultural heritage, cultural traditions, and community unity in the heart of Tanyigbe
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Festival of Heritage and Unity
              </h2>
              <div className="w-20 h-1 bg-[#E2A201] mx-auto mb-8"></div>
            </div>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <div className="bg-gradient-to-r from-[#E2A201]/10 to-[#4C7000]/10 rounded-2xl p-8 border-l-4 border-[#E2A201]">
                <p className="text-xl leading-relaxed">
                  The Tanyigbe Yam Festival (TAYAFEST) is one of the most significant annual events in Tanyigbe, rooted in the community's agricultural heritage and cultural history. Yam (<em className="font-semibold">ete</em>) symbolises sustenance, prosperity, and gratitude for the harvest.
                </p>
              </div>

              <p className="text-xl leading-relaxed">
                The festival is marked by customary rites and communal activities that honour tradition, express thanksgiving, and strengthen social bonds. It also provides an opportunity for reflection, reconciliation, and collective planning for the year ahead.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#4C7000]">
                <p className="text-xl leading-relaxed">
                  Beyond celebration, TAYAFEST brings together residents, visitors, and the Tanyigbe diaspora to reconnect with heritage and reaffirm shared values of unity and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#E2A201] to-[#4C7000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              The Heart of TAYAFEST
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experience the essence of our cultural celebration through these pillars
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-[#E2A201] to-[#4C7000] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <TreePine className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Agricultural Heritage</h3>
              <p className="text-gray-700 leading-relaxed">
                Celebrating the yam harvest and our deep connection to the land that sustains us, honouring generations of farmers and agricultural traditions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-[#E2A201] to-[#4C7000] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Customary Rites</h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional ceremonies and rituals that connect us to our ancestors, express gratitude for the harvest, and honour our cultural practices.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-[#E2A201] to-[#4C7000] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Thanksgiving</h3>
              <p className="text-gray-700 leading-relaxed">
                A time to give thanks for the harvest, for our community's wellbeing, and for the blessings that sustain us throughout the year.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-[#E2A201] to-[#4C7000] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Social Bonds</h3>
              <p className="text-gray-700 leading-relaxed">
                Strengthening relationships within our community, fostering unity among all four divisions, and building bridges across generations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-[#E2A201] to-[#4C7000] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Handshake className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Reconciliation</h3>
              <p className="text-gray-700 leading-relaxed">
                An opportunity for reflection, conflict resolution, and coming together in peace to strengthen our collective future.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-[#E2A201] to-[#4C7000] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Planning Ahead</h3>
              <p className="text-gray-700 leading-relaxed">
                Collective discussions about development, setting community goals, and charting the course for Tanyigbe's continued progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-6">
                <span className="inline-block bg-[#E2A201] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Cultural Celebration
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Bringing Our Community Together
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  TAYAFEST is more than a festival—it is a homecoming, a reunion, and a reaffirmation of who we are as a people. The celebration draws together residents from all corners of Tanyigbe Traditional Area, welcoming home those who have traveled near and far.
                </p>
                <p>
                  Visitors from across Ghana and the Tanyigbe diaspora around the world return to participate in this special occasion, creating a vibrant tapestry of shared memories, cultural exchange, and renewed connections.
                </p>
                <p>
                  Through music, dance, traditional ceremonies, and communal gatherings, TAYAFEST embodies the spirit of Tanyigbe—honoring our past, celebrating our present, and building our future together.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#E2A201] to-[#4C7000] rounded-3xl opacity-20 blur-xl"></div>
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/491399177_1229152465450978_4812860042655025826_n.jpg"
                    alt="TAYAFEST Cultural Celebration with Traditional Dance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Four Divisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TAYAFEST unites all four divisions of the Tanyigbe Traditional Area in celebration. Explore each division's unique heritage and traditional governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/divisions/anyigbe"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-[#E2A201] to-[#4C7000] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <Users className="text-white opacity-20 absolute" size={120} />
                <div className="relative z-10 text-center text-white p-6">
                  <h3 className="font-serif text-2xl font-bold">Anyigbe</h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-700 mb-4">Explore the traditional governance and communities of Tanyigbe-Anyigbe</p>
                <span className="text-[#E2A201] font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>

            <Link
              to="/divisions/etoe"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-[#4C7000] to-[#FF4516] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <Users className="text-white opacity-20 absolute" size={120} />
                <div className="relative z-10 text-center text-white p-6">
                  <h3 className="font-serif text-2xl font-bold">Etoe</h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-700 mb-4">Discover the heritage and leadership of Tanyigbe-Etoe</p>
                <span className="text-[#4C7000] font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>

            <Link
              to="/divisions/atidze"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-[#FF4516] to-[#E2A201] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <Users className="text-white opacity-20 absolute" size={120} />
                <div className="relative z-10 text-center text-white p-6">
                  <h3 className="font-serif text-2xl font-bold">Atidze</h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-700 mb-4">Experience the culture and traditions of Tanyigbe-Atidze</p>
                <span className="text-[#FF4516] font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>

            <Link
              to="/divisions/dzafe"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-[#1F2937] to-[#E2A201] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <Users className="text-white opacity-20 absolute" size={120} />
                <div className="relative z-10 text-center text-white p-6">
                  <h3 className="font-serif text-2xl font-bold">Dzafe</h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-700 mb-4">Meet the leaders and communities of Tanyigbe-Dzafe</p>
                <span className="text-[#1F2937] font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E2A201] to-[#4C7000]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block bg-[#E2A201] px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Join Us
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
              Experience TAYAFEST
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Whether you are a resident, a visitor, or part of the Tanyigbe diaspora, TAYAFEST welcomes you to reconnect with heritage, celebrate tradition, and be part of our community's ongoing story of unity and development.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#E2A201] mb-2">100+</div>
                <div className="text-gray-400">Years of Tradition</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#E2A201] mb-2">4</div>
                <div className="text-gray-400">Divisions United</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#E2A201] mb-2">1000+</div>
                <div className="text-gray-400">Participants Annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
