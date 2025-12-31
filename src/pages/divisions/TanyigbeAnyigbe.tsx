import { Crown, Users, MapPin, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TanyigbeAnyigbe() {
  const clans = [
    'Kodivi',
    'Anyidoto',
    'ʋlivi',
    'Defeme',
  ];

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#E2A201] to-[#4C7000]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link to="/culture/tayafest" className="hover:text-[#E2A201] transition">TAYAFEST</Link>
            <span className="mx-2">/</span>
            <span>Tanyigbe Anyigbe</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Tanyigbe Anyigbe</h1>
          <p className="text-xl md:text-2xl">Division of the Tanyigbe Traditional Area</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Tanyigbe Anyigbe
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Anyigbe is the most senior division of Tanyigbe and derives its name from Anyigbemɛ, meaning "down the hill" or "lower end," referring to where its forebears first settled at Gborxome, the community's last settlement before the present location.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Anyigbe is made up of four clans: Kodivi, Anyidoto, ʋlivi, and Defeme, in order of seniority. The Kodivi clan, descendants of Togbe Kodi Adiko I, the first Fiaga of Tanyigbe, holds the Paramount Stool, making Anyigbe the seat of the Paramountcy.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The division is recognised for its unity and collective strength, reflected in its appellation <span className="font-bold text-[#E2A201]">"Adzasi Kotoko"</span>, which symbolises shared responsibility and solidarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#E2A201]/10 to-[#4C7000]/10 rounded-xl p-6 text-center">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Clans</h3>
              <p className="text-gray-700">{clans.length} clans in order of seniority</p>
            </div>

            <div className="bg-gradient-to-br from-[#E2A201]/10 to-[#4C7000]/10 rounded-xl p-6 text-center">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Paramountcy</h3>
              <p className="text-gray-700">Seat of the Paramount Stool</p>
            </div>

            <div className="bg-gradient-to-br from-[#E2A201]/10 to-[#4C7000]/10 rounded-xl p-6 text-center">
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Status</h3>
              <p className="text-gray-700">Most senior division</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-br from-[#E2A201] to-[#4C7000] p-4 rounded-full mb-6">
              <Crown className="text-white" size={48} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Traditional Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The divisional chief, Tsiami, and queenmother provide guidance and leadership to the division
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#E2A201] to-[#4C7000] flex items-center justify-center">
                <Crown className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#E2A201] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Divisional Chief
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Togbe Kwami Akoto V</h3>
                <p className="text-[#E2A201] font-semibold mb-4">Chief of Tanyigbe Anyigbe</p>
                <p className="text-gray-700 leading-relaxed">
                  Leading the most senior division with wisdom and dedication to preserving cultural heritage while promoting community development.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#4C7000] to-[#2F5300] flex items-center justify-center">
                <Shield className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#4C7000] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Tsiami
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Tsiami Xetor</h3>
                <p className="text-[#4C7000] font-semibold mb-4">Traditional Spokesperson</p>
                <p className="text-gray-700 leading-relaxed">
                  Serving as the traditional spokesperson and advisor, preserving and interpreting cultural protocols and traditions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#FF4516] to-[#D63600] flex items-center justify-center">
                <Heart className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#FF4516] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Divisional Queenmother
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Mama Amenorvi Hiadzi I</h3>
                <p className="text-[#FF4516] font-semibold mb-4">Queenmother of Tanyigbe Anyigbe</p>
                <p className="text-gray-700 leading-relaxed">
                  Providing maternal guidance and wisdom, nurturing the division with compassion and cultural knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              The Four Clans of Anyigbe
            </h2>

            <div className="bg-gradient-to-r from-[#E2A201]/10 to-[#4C7000]/10 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The Anyigbe division is composed of four clans, listed here in order of seniority. Each clan maintains its unique identity while contributing to the unity and strength of the division.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {clans.map((clan, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#E2A201] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-900 font-medium text-lg">{clan}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#E2A201]">
                <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                  <Crown className="mr-2 text-[#E2A201]" size={24} />
                  The Kodivi Clan and the Paramount Stool
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  The Kodivi clan, as descendants of Togbe Kodi Adiko I, the first Fiaga of Tanyigbe, holds the honor and responsibility of the Paramount Stool. This makes Anyigbe the seat of the Paramountcy for all of Tanyigbe, a position of great significance in the traditional governance structure.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Unity and Strength: "Adzasi Kotoko"</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The division's appellation, <span className="font-bold text-[#E2A201]">"Adzasi Kotoko"</span>, embodies the spirit of Anyigbe. This powerful phrase symbolises:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E2A201] flex items-center justify-center flex-shrink-0">
                      <Shield className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Shared Responsibility</h4>
                      <p className="text-gray-700">All members of the division work together for the common good, ensuring no one bears their burdens alone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4C7000] flex items-center justify-center flex-shrink-0">
                      <Heart className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Solidarity</h4>
                      <p className="text-gray-700">The unity of the four clans creates a strong, cohesive community that stands together through all circumstances</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF4516] flex items-center justify-center flex-shrink-0">
                      <Users className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Collective Strength</h4>
                      <p className="text-gray-700">The division's power comes from its unity, making Anyigbe a formidable and respected division within Tanyigbe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1F2937] to-[#4C7000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              The Most Senior Division
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              As the most senior division of Tanyigbe and the seat of the Paramountcy, Anyigbe holds a position of great honor and responsibility. From the first settlement at Gborxome to the present day, Anyigbe has been at the forefront of preserving and promoting the cultural heritage of the Tanyigbe Traditional Area.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              United under the appellation "Adzasi Kotoko," the four clans of Anyigbe continue to exemplify the values of shared responsibility, solidarity, and collective strength that define the Tanyigbe people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/culture/tayafest"
                className="inline-block bg-[#E2A201] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
              >
                Back to TAYAFEST
              </Link>
              <Link
                to="/culture"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Explore Our Culture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
