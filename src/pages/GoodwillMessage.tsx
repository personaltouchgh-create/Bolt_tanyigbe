import { Heart, Users, Shield, Sparkles } from 'lucide-react';

export default function GoodwillMessage() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/533048130_1314207883612102_7986478633305916107_n.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Goodwill Message</h1>
          <p className="text-xl md:text-2xl">From the Paramount Chief and Traditional Council</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#E2A201] bg-opacity-10 rounded-full p-6 mb-6">
                <Shield size={64} className="text-[#E2A201]" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Togbe Kodi Adiko VI
              </h2>
              <p className="text-xl text-gray-600">
                Paramount Chief of Tanyigbe Traditional Area
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E2A201] via-[#4C7000] to-[#FF4516] p-1 rounded-lg shadow-xl mb-12">
              <div className="bg-white p-8 md:p-12 rounded-lg">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6 font-serif italic">
                    "On behalf of the people of Tanyigbe, Gbélé-Nyamprobiawo, I extend warm greetings and solidarity to all communities participating in the 2025 NorDU Festival."
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As descendants of courageous ancestors who journeyed from Ŋɔtsie seeking freedom and prosperity, we understand the power of unity and cultural preservation.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our community's founding motto <span className="font-bold text-[#E2A201]">'ta ko ayi anyigba'</span> - <span className="font-bold">'except death'</span> - reflects our unwavering commitment to progress and cultural continuity. Today, we celebrate not only our rich heritage but also our collective strength as Norvisi communities.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    May this festival strengthen the bonds among our communities, promote peace and understanding, and inspire our youth to embrace their cultural identity while pursuing modern development. We welcome all visitors to experience our hospitality, learn our history, and join us in celebrating the diversity that makes our region unique.
                  </p>

                  <p className="text-xl text-gray-900 leading-relaxed font-semibold">
                    Together, we build a stronger, more united NorDU for future generations.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-lg font-bold text-gray-900">Togbe Kodi Adiko VI</p>
                  <p className="text-gray-600">Paramount Chief of Tanyigbe Traditional Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Commitment to Unity
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={40} />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">Community Unity</h4>
                <p className="text-gray-700">
                  Strengthening bonds among Norvisi communities through shared heritage and collective celebration
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-white" size={40} />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">Cultural Preservation</h4>
                <p className="text-gray-700">
                  Honoring our ancestors' journey from Ŋɔtsie and maintaining our cultural identity for future generations
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-white" size={40} />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">Progress & Development</h4>
                <p className="text-gray-700">
                  Inspiring youth to embrace cultural heritage while pursuing modern development and opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <p className="text-4xl md:text-5xl font-serif font-bold text-[#E2A201] mb-4">
                Ta ko ayi anyigba
              </p>
              <p className="text-2xl md:text-3xl font-semibold mb-6">
                Except Death
              </p>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              This founding motto reflects the unwavering determination and resilience of the Tanyigbe people. It symbolizes our commitment to progress, cultural continuity, and the collective strength that has sustained our community through generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
