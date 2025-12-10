import { MapPin, Users, Building2, Home } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://placehold.co/1920x600/E2A201/FFF?text=About+Tanyigbe)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">About Tanyigbe</h1>
          <p className="text-xl md:text-2xl">Discover Our Community and Heritage</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Tanyigbe Traditional Area
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Tanyigbe is a vibrant Eʋe community located in the Volta Region of Ghana, nestled in the scenic hills near Hohoe. Our traditional area represents the unity and strength of four distinct divisions, each contributing to the rich tapestry of our shared heritage.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are a people bound by common ancestry, shared values, and an unwavering commitment to progress while preserving our cultural identity.
            </p>
          </div>

          <div className="bg-[#E2A201] bg-opacity-10 rounded-lg p-8 mb-16">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={48} className="text-[#E2A201]" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-gray-900 text-center mb-4">Location & Geography</h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Situated in the lush highlands of the Volta Region, Tanyigbe benefits from fertile lands, abundant rainfall, and proximity to some of Ghana's most stunning natural attractions, including the Wli Waterfalls and Mount Afadja.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Four Divisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              United under one traditional area, each division maintains its unique character while contributing to our collective strength.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Home className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Tanyigbe-Etoe</h3>
              <p className="text-gray-700 leading-relaxed">
                The paramount division and seat of traditional authority, Etoe serves as the administrative center of the Tanyigbe Traditional Area. Home to the paramount chief, it embodies leadership, governance, and the unity that binds all four divisions together.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Tanyigbe-Aveme</h3>
              <p className="text-gray-700 leading-relaxed">
                Known for its strong agricultural foundation and vibrant community spirit, Aveme plays a vital role in food production and cultural preservation. The division is celebrated for its dedication to maintaining traditional farming practices alongside modern techniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Tanyigbe-Bator</h3>
              <p className="text-gray-700 leading-relaxed">
                Bator is distinguished by its rich cultural heritage and deep connection to traditional customs. This division serves as a guardian of ancestral knowledge and plays a central role in preserving the spiritual and cultural practices that define the Tanyigbe identity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#1F2937] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Tanyigbe-Dzigbe</h3>
              <p className="text-gray-700 leading-relaxed">
                Dzigbe represents the industrious nature of the Tanyigbe people, with strong emphasis on communal development and education. The division is known for its progressive outlook while maintaining deep respect for tradition and cultural values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#E2A201] mb-2">Unity</h3>
                  <p className="text-lg text-gray-700">
                    Despite our four divisions, we stand as one people with a shared destiny and common purpose.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#4C7000] mb-2">Heritage</h3>
                  <p className="text-lg text-gray-700">
                    We honor and preserve the traditions, language, and customs passed down through generations.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#FF4516] mb-2">Progress</h3>
                  <p className="text-lg text-gray-700">
                    We embrace development and innovation while maintaining our cultural identity and values.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Community</h3>
                  <p className="text-lg text-gray-700">
                    We support each other, celebrate together, and work collectively toward a better future.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/491354591_1229152408784317_3726456993382028091_n.jpg"
                alt="Tanyigbe Community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Motto
            </h2>
            <p className="text-3xl md:text-4xl font-serif mb-8 text-[#E2A201]">
              "Deka kple Dzotsotso"
            </p>
            <p className="text-2xl md:text-3xl mb-6">
              Unity and Progress
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              These words guide our journey as a community. We believe that through unity, we achieve strength, and through progress, we secure a prosperous future for generations to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
