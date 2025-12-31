import { Crown, Users, MapPin, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TanyigbeDzafe() {
  const clans = [
    'Dzaƒeho',
    'Dzaƒenyigbe',
    'Agudza',
  ];

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#1F2937] to-[#E2A201]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link to="/culture/tayafest" className="hover:text-[#E2A201] transition">TAYAFEST</Link>
            <span className="mx-2">/</span>
            <span>Tanyigbe Dzaƒe</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Tanyigbe Dzaƒe</h1>
          <p className="text-xl md:text-2xl">Division of the Tanyigbe Traditional Area</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Tanyigbe Dzaƒe
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Dzaƒe is the fourth division of Tanyigbe. Its name means "House of Dza," after one of its founding ancestors. Historically, the people of Dzaƒe were known for their role in safeguarding the community during times of conflict, forming the rear guard in defence of Tanyigbe.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              This responsibility earned them the appellation <span className="font-bold text-[#1F2937]">"Adexemegbeawo, wóme ƒoa gbe o,"</span> referring to those who guard the rear, that they don't disappoint.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Dzaƒe holds the <span className="font-bold text-[#E2A201]">Megbefia stool</span>, the fourth-highest traditional authority in Tanyigbe. The division is made up of three clans, namely Dzaƒeho, Dzaƒenyigbe, and Agudza. Dzaƒe is historically significant as one of the earliest divisions to relocate to the present Tanyigbe site in the late 1920s.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1F2937]/10 to-[#E2A201]/10 rounded-xl p-6 text-center">
              <div className="bg-[#1F2937] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Clans</h3>
              <p className="text-gray-700">{clans.length} clans</p>
            </div>

            <div className="bg-gradient-to-br from-[#1F2937]/10 to-[#E2A201]/10 rounded-xl p-6 text-center">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Position</h3>
              <p className="text-gray-700">Fourth division</p>
            </div>

            <div className="bg-gradient-to-br from-[#1F2937]/10 to-[#E2A201]/10 rounded-xl p-6 text-center">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Traditional Role</h3>
              <p className="text-gray-700">Rear guard defenders</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-br from-[#1F2937] to-[#E2A201] p-4 rounded-full mb-6">
              <Crown className="text-white" size={48} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Traditional Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Following the transition of the Divisional Chief and right-hand chief to the land of the ancestors, the left-hand chief serves as Acting Divisional Chief
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 max-w-3xl mx-auto">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> The division is currently under acting leadership pending the installation of a substantive Divisional Chief.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#1F2937] to-[#E2A201] flex items-center justify-center">
                <Crown className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#1F2937] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Acting Divisional Chief
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Togbe Kwasi Debrah II</h3>
                <p className="text-[#1F2937] font-semibold mb-4">Acting Chief of Tanyigbe Dzaƒe</p>
                <p className="text-gray-700 leading-relaxed">
                  Serving as acting chief, maintaining the division's traditions and leadership.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#E2A201] to-[#4C7000] flex items-center justify-center">
                <Shield className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#E2A201] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Acting Tsiami
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Tsiami Kojo Amegah</h3>
                <p className="text-[#E2A201] font-semibold mb-4">Acting Traditional Spokesperson</p>
                <p className="text-gray-700 leading-relaxed">
                  Serving as acting spokesperson, preserving cultural protocols during this transitional period.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#FF4516] to-[#1F2937] flex items-center justify-center">
                <Heart className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#FF4516] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Divisional Queenmother
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Mama Yawa Sunu II</h3>
                <p className="text-[#FF4516] font-semibold mb-4">Queenmother of Tanyigbe Dzaƒe</p>
                <p className="text-gray-700 leading-relaxed">
                  Providing maternal guidance and wisdom, nurturing the division with compassion.
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
              The Three Clans of Dzaƒe
            </h2>

            <div className="bg-gradient-to-r from-[#1F2937]/10 to-[#E2A201]/10 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The Dzaƒe division is composed of three clans. Each clan maintains its unique identity while contributing to the defensive strength and unity of the division.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {clans.map((clan, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-[#1F2937]"></div>
                    <span className="text-gray-900 font-medium text-lg">{clan}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Historical Significance</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#1F2937]">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                    <Shield className="mr-2 text-[#1F2937]" size={24} />
                    Defenders of the Community
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Historically, the people of Dzaƒe were known for their role in safeguarding the community during times of conflict, forming the rear guard in defence of Tanyigbe. This critical responsibility reflects their courage and reliability.
                  </p>
                  <p className="text-xl font-bold text-[#1F2937] text-center py-4">
                    "Adexemegbeawo, wóme ƒoa gbe o"
                  </p>
                  <p className="text-gray-600 text-center text-sm">
                    Those who guard the rear, that they don't disappoint
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#E2A201]">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                    <MapPin className="mr-2 text-[#E2A201]" size={24} />
                    Early Settlers
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Dzaƒe is historically significant as one of the earliest divisions to relocate to the present Tanyigbe site in the late 1920s, underscoring its role in the community's settlement history and demonstrating pioneering spirit.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#E2A201]/10 to-[#1F2937]/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">The Megbefia Stool</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dzaƒe holds the <span className="font-bold text-[#E2A201]">Megbefia stool</span>, representing the fourth-highest traditional authority in Tanyigbe. This position reflects the division's important role in the traditional governance structure of the Tanyigbe Traditional Area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1F2937] to-[#4C7000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Guardians of Tanyigbe's Heritage
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              As one of the earliest settlers and traditional defenders of the community, Tanyigbe Dzaƒe continues to play a vital role in preserving and promoting the cultural heritage of the Tanyigbe Traditional Area.
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
