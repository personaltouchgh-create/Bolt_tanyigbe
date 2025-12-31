import { Crown, Users, MapPin, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TanyigbeEtoe() {
  const clans = [
    'Vovoevi',
    'Sosoeme',
    'Avonyi',
    'Adeblevi',
  ];

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#4C7000] to-[#FF4516]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link to="/culture/tayafest" className="hover:text-[#E2A201] transition">TAYAFEST</Link>
            <span className="mx-2">/</span>
            <span>Tanyigbe Etoe</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Tanyigbe Etoe</h1>
          <p className="text-xl md:text-2xl">Division of the Tanyigbe Traditional Area</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Tanyigbe Etoe
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Etoe is the second division in seniority in Tanyigbe. Its name originates from the Eʋe word <span className="font-semibold italic">kɔtoe</span>, meaning "edge" or "boundary," reflecting where its ancestors settled at the outskirts of Gborxome.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Etoe holds the traditional role of <span className="font-bold text-[#4C7000]">Dusimefia</span>, the Right-Hand Chief of Tanyigbe, placing it second in command within the traditional hierarchy. The division consists of four clans, namely: Vovoevi, Sosoeme, Avonyi, and Adeblevi.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Etoe is recognised for its organisational strength and readiness to serve, an identity captured in its appellation <span className="font-bold text-[#FF4516]">"Genɛawo; miɛsu te le ntsu kple nyɔnu me."</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#4C7000]/10 to-[#FF4516]/10 rounded-xl p-6 text-center">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Clans</h3>
              <p className="text-gray-700">{clans.length} clans</p>
            </div>

            <div className="bg-gradient-to-br from-[#4C7000]/10 to-[#FF4516]/10 rounded-xl p-6 text-center">
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Position</h3>
              <p className="text-gray-700">Second in seniority</p>
            </div>

            <div className="bg-gradient-to-br from-[#4C7000]/10 to-[#FF4516]/10 rounded-xl p-6 text-center">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Traditional Role</h3>
              <p className="text-gray-700">Dusimefia - Right-Hand Chief</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-br from-[#4C7000] to-[#FF4516] p-4 rounded-full mb-6">
              <Crown className="text-white" size={48} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Traditional Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The divisional chief, Tsiami, and queenmother provide guidance and leadership to the division
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#4C7000] to-[#FF4516] flex items-center justify-center">
                <Crown className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#4C7000] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Divisional Chief
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Togbe Amewakunu Danku IV</h3>
                <p className="text-[#4C7000] font-semibold mb-4">Chief of Tanyigbe Etoe</p>
                <p className="text-gray-700 leading-relaxed">
                  Leading the division as Dusimefia, the Right-Hand Chief of Tanyigbe, with wisdom and dedication.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#E2A201] to-[#4C7000] flex items-center justify-center">
                <Shield className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#E2A201] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Tsiami
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Tsiami Komla Afesi</h3>
                <p className="text-[#E2A201] font-semibold mb-4">Traditional Spokesperson</p>
                <p className="text-gray-700 leading-relaxed">
                  Serving as the traditional spokesperson, preserving and interpreting cultural protocols.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#FF4516] to-[#4C7000] flex items-center justify-center">
                <Heart className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#FF4516] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Divisional Queenmother
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Mama Akosua Danku III</h3>
                <p className="text-[#FF4516] font-semibold mb-4">Queenmother of Tanyigbe Etoe</p>
                <p className="text-gray-700 leading-relaxed">
                  Providing maternal guidance and wisdom, nurturing the division with compassion.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#1F2937] to-[#E2A201] flex items-center justify-center">
                <Heart className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#1F2937] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Nyornu Tsiami
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Nyornu Tsiami Akosua Afesi</h3>
                <p className="text-[#1F2937] font-semibold mb-4">Queenmother's Spokesperson</p>
                <p className="text-gray-700 leading-relaxed">
                  Supporting the queenmother in maternal leadership and cultural guidance.
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
              The Four Clans of Etoe
            </h2>

            <div className="bg-gradient-to-r from-[#4C7000]/10 to-[#FF4516]/10 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The Etoe division is composed of four clans. Each clan maintains its unique identity while contributing to the organisational strength of the division.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {clans.map((clan, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-[#4C7000]"></div>
                    <span className="text-gray-900 font-medium text-lg">{clan}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Traditional Governance and Identity</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  As the <span className="font-bold text-[#4C7000]">Dusimefia</span>, Etoe holds the position of Right-Hand Chief, placing it second in command within Tanyigbe's traditional hierarchy. This important role reflects the division's historical significance and its continued leadership in community affairs.
                </p>
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#FF4516]">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                    <Shield className="mr-2 text-[#FF4516]" size={24} />
                    Organisational Strength
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Etoe is recognised for its organisational strength and readiness to serve. The division's appellation captures this identity:
                  </p>
                  <p className="text-xl font-bold text-[#FF4516] text-center py-4">
                    "Genɛawo; miɛsu te le ntsu kple nyɔnu me."
                  </p>
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
              The Right-Hand of Tanyigbe
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              As the second division in seniority and holder of the Dusimefia stool, Tanyigbe Etoe continues to play a vital role in the traditional governance and cultural preservation of the Tanyigbe Traditional Area.
            </p>
            <Link
              to="/culture/tayafest"
              className="inline-block bg-[#E2A201] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4C7000] transition"
            >
              Back to TAYAFEST
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
