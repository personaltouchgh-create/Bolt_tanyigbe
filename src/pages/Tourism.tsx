import { Mountain, Droplets, TreePine, Camera, Map, Info } from 'lucide-react';

export default function Tourism() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#4C7000] to-[#E2A201]">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Tourism & Attractions</h1>
          <p className="text-xl md:text-2xl">Discover the Natural Wonders of Our Region</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gateway to Natural Beauty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tanyigbe's location in the scenic Volta Region places you at the heart of some of Ghana's most spectacular natural attractions. From the highest peak to the tallest waterfall, adventure awaits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Waterfalls</h3>
              <p className="text-gray-700">Stunning cascades including West Africa's tallest waterfall</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Mountains</h3>
              <p className="text-gray-700">Hike to Ghana's highest peak and beyond</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TreePine className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Forest Trails</h3>
              <p className="text-gray-700">Canopy walks and nature trails through lush forests</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/screenshot_2025-12-05_234830 copy copy copy.png"
                alt="Wli Waterfalls"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Droplets className="text-white" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Wli Waterfalls
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The crown jewel of the Volta Region, Wli Waterfalls (also known as Agumatsa) is the highest waterfall in West Africa. Located just a short distance from Tanyigbe, this spectacular 80-meter cascade is a must-see for any visitor to the region.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Highlights:</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span>Scenic 45-minute walk through lush tropical forest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span>Swimming in the natural pool at the base of the falls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span>Fruit bat colony viewing (largest in West Africa)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span>Local guides sharing knowledge of flora and fauna</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span>Upper and lower falls trails for adventurous hikers</span>
                </li>
              </ul>

              <div className="bg-[#4C7000] bg-opacity-10 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Best Time to Visit:</strong> May to October when water flow is strongest
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mountain className="text-white" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mount Afadja (Afadjato)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Standing at 885 meters above sea level, Mount Afadja is Ghana's highest mountain. The challenging but rewarding hike offers breathtaking panoramic views of Ghana and Togo, making it a favorite for adventure seekers and nature lovers.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect:</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span>Challenging 2-3 hour hike to the summit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span>Stunning views spanning two countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span>Diverse ecosystems from lowland to montane forest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span>Rare butterfly species and unique birdlife</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span>Summit certificate and registration book</span>
                </li>
              </ul>

              <div className="bg-[#E2A201] bg-opacity-10 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Fitness Level:</strong> Moderate to challenging. Good physical fitness recommended.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-first md:order-last">
              <img
                src="/screenshot_2025-12-06_001430 copy copy copy.png"
                alt="Mount Afadja"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/screenshot_2025-12-06_001744.png"
                alt="Amedzofe Canopy Walkway"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TreePine className="text-white" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Amedzofe Canopy Walkway
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Located in Ghana's highest village, Amedzofe, this 350-meter-long canopy walkway offers a unique perspective of the forest. Suspended 30 meters above the ground, it provides an unforgettable bird's-eye view of the lush canopy and valley below.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Features:</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span>Thrilling suspended walkway through the treetops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span>Observation towers at strategic points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span>Bird watching opportunities (over 70 species)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span>Scenic views of Lake Volta and surrounding mountains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span>Educational signage about forest ecology</span>
                </li>
              </ul>

              <div className="bg-[#FF4516] bg-opacity-10 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Good for:</strong> Families, photographers, nature enthusiasts, and those seeking a less strenuous adventure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Planning Your Visit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Make the most of your trip to Tanyigbe and the surrounding attractions with these helpful tips.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-[#E2A201] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Map className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Getting There</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• From Accra: 4-5 hours by road</li>
                <li>• Via Hohoe: 30-45 minutes to Tanyigbe</li>
                <li>• Public transport available</li>
                <li>• Private hire recommended for flexibility</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-[#4C7000] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Info className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">What to Bring</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Comfortable hiking shoes</li>
                <li>• Light, breathable clothing</li>
                <li>• Water and snacks</li>
                <li>• Camera for amazing photo opportunities</li>
                <li>• Sunscreen and insect repellent</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-[#FF4516] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Camera className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Local Guides</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Experienced guides available</li>
                <li>• Knowledge of local flora and fauna</li>
                <li>• Safety and navigation expertise</li>
                <li>• Cultural insights and stories</li>
                <li>• Reasonable rates, tips appreciated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E2A201] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accommodation & Amenities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Where to Stay</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Hohoe:</strong> Various hotels and guesthouses with modern amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Wli:</strong> Budget-friendly lodges near the waterfalls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Amedzofe:</strong> Mountain lodges with spectacular views</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Tanyigbe:</strong> Community homestays for authentic cultural immersion</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Additional Activities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cultural tours of Tanyigbe divisions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Traditional craft workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Local cuisine tasting experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Community festivals (especially TAYAFEST)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Farm visits and agricultural tours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Experience Tanyigbe Hospitality
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Beyond the natural attractions, visiting Tanyigbe means experiencing the warmth and hospitality of our community. Whether you're here for adventure, cultural immersion, or simply to connect with nature, you'll find a welcoming spirit that makes every visit memorable.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Come explore the wonders of our region—where Ghana's highest peaks meet its warmest hearts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
