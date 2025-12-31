import { Crown, Users, MapPin, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TanyigbeEtoe() {
  const communities = [
    'Community 1',
    'Community 2',
    'Community 3',
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
            <p className="text-xl text-gray-700 leading-relaxed">
              Tanyigbe Etoe is one of the four divisions of the Tanyigbe Traditional Area, with a rich history and vibrant cultural heritage. The division is home to several communities united under traditional governance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#4C7000]/10 to-[#FF4516]/10 rounded-xl p-6 text-center">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Communities</h3>
              <p className="text-gray-700">{communities.length} communities</p>
            </div>

            <div className="bg-gradient-to-br from-[#4C7000]/10 to-[#FF4516]/10 rounded-xl p-6 text-center">
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Population</h3>
              <p className="text-gray-700">Growing community</p>
            </div>

            <div className="bg-gradient-to-br from-[#4C7000]/10 to-[#FF4516]/10 rounded-xl p-6 text-center">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Heritage</h3>
              <p className="text-gray-700">Rich cultural legacy</p>
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
              The divisional chief and queenmother provide guidance and leadership to the communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-80 bg-gradient-to-br from-[#4C7000] to-[#FF4516] flex items-center justify-center">
                <Crown className="text-white opacity-20" size={120} />
              </div>
              <div className="p-8">
                <div className="inline-block bg-[#4C7000] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Divisional Chief
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">Togbe [Name]</h3>
                <p className="text-[#4C7000] font-semibold mb-4">Chief of Tanyigbe Etoe</p>
                <p className="text-gray-700 leading-relaxed">
                  Leading the division with wisdom and dedication to preserving cultural heritage while promoting community development.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-80 bg-gradient-to-br from-[#FF4516] to-[#4C7000] flex items-center justify-center">
                <Heart className="text-white opacity-20" size={120} />
              </div>
              <div className="p-8">
                <div className="inline-block bg-[#FF4516] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Divisional Queenmother
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">Mama [Name]</h3>
                <p className="text-[#FF4516] font-semibold mb-4">Queenmother of Tanyigbe Etoe</p>
                <p className="text-gray-700 leading-relaxed">
                  Providing maternal guidance and wisdom, nurturing the community with compassion and cultural knowledge.
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
              Communities Under Tanyigbe Etoe
            </h2>

            <div className="bg-gradient-to-r from-[#4C7000]/10 to-[#FF4516]/10 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The Tanyigbe Etoe division comprises several communities, each with its own unique character while united under shared traditions and governance.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {communities.map((community, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-[#4C7000]"></div>
                    <span className="text-gray-900 font-medium">{community}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Traditional Governance Structure</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4C7000] flex items-center justify-center flex-shrink-0">
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Divisional Chief</h4>
                    <p className="text-gray-700">Oversees all communities within the division and coordinates with the Paramount Chief</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF4516] flex items-center justify-center flex-shrink-0">
                    <Heart className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Divisional Queenmother</h4>
                    <p className="text-gray-700">Provides maternal leadership and guidance on cultural and social matters</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E2A201] flex items-center justify-center flex-shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Council of Elders</h4>
                    <p className="text-gray-700">Advises on traditional matters and helps maintain cultural practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1F2937] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Community Representatives</h4>
                    <p className="text-gray-700">Leaders from each community ensuring local needs are addressed</p>
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
              Part of Tanyigbe's Rich Heritage
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Tanyigbe Etoe continues to play a vital role in preserving and promoting the cultural heritage of the Tanyigbe Traditional Area.
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
