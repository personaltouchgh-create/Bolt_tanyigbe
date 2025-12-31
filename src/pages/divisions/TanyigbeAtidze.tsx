import { Crown, Users, MapPin, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TanyigbeAtidze() {
  const clans = [
    'Gbordzeme',
    'Agbekavi',
    'Atsiaƒe',
    'Dodokpo',
    'Kportokoe',
  ];

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#FF4516] to-[#E2A201]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link to="/culture/tayafest" className="hover:text-[#E2A201] transition">TAYAFEST</Link>
            <span className="mx-2">/</span>
            <span>Tanyigbe Atidze</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Tanyigbe Atidze</h1>
          <p className="text-xl md:text-2xl">Division of the Tanyigbe Traditional Area</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Tanyigbe Atidze
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Atidze is the third division in seniority in Tanyigbe. Its name comes from the Eʋe words <span className="font-semibold italic">ati dze</span>, meaning "red tree," a reference to where its ancestors settled during the community's migration from Ŋɔtsie.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              When questioned about their distance from the main group, their leader explained that they were within sight under the red tree, which earned Atidze both its name and the appellation <span className="font-bold text-[#FF4516]">Kpɔƒeawo</span>, meaning those who are not hidden.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Atidze holds the traditional position of <span className="font-bold text-[#E2A201]">Miamefia</span>, the Left-Hand Chief of Tanyigbe, placing it third in command within the traditional hierarchy. It is the only division made up of five clans, namely Gbordzeme, Agbekavi, Atsiaƒe, Dodokpo, and Kportokoe, reflecting the breadth of its historical development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FF4516]/10 to-[#E2A201]/10 rounded-xl p-6 text-center">
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Clans</h3>
              <p className="text-gray-700">{clans.length} clans - the only division with five</p>
            </div>

            <div className="bg-gradient-to-br from-[#FF4516]/10 to-[#E2A201]/10 rounded-xl p-6 text-center">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Position</h3>
              <p className="text-gray-700">Third in seniority</p>
            </div>

            <div className="bg-gradient-to-br from-[#FF4516]/10 to-[#E2A201]/10 rounded-xl p-6 text-center">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Traditional Role</h3>
              <p className="text-gray-700">Miamefia - Left-Hand Chief</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-br from-[#FF4516] to-[#E2A201] p-4 rounded-full mb-6">
              <Crown className="text-white" size={48} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Traditional Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Following the transition of the Divisional Chief and right-hand chief to the land of the ancestors, the Left-Hand Chief serves as Acting Divisional Chief
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 max-w-3xl mx-auto">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> The division is currently under acting leadership pending the installation of a new substantive Divisional Chief.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#FF4516] to-[#E2A201] flex items-center justify-center">
                <Crown className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#FF4516] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Acting Divisional Chief
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Togbe Kwasi Sagatey V</h3>
                <p className="text-[#FF4516] font-semibold mb-4">Acting Chief of Tanyigbe Atidze</p>
                <p className="text-gray-700 leading-relaxed">
                  Serving as acting chief, maintaining the division's traditions and leadership as Miamefia.
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
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Tsiami Yao Ayittey</h3>
                <p className="text-[#E2A201] font-semibold mb-4">Traditional Spokesperson</p>
                <p className="text-gray-700 leading-relaxed">
                  Serving as spokesperson, preserving and interpreting cultural protocols.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#4C7000] to-[#FF4516] flex items-center justify-center">
                <Heart className="text-white opacity-20" size={100} />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#4C7000] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Divisional Queenmother
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Mama Ama Agbenkuma II</h3>
                <p className="text-[#4C7000] font-semibold mb-4">Queenmother of Tanyigbe Atidze</p>
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
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Nyornu Tsiami Doe Ayittey</h3>
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
              The Five Clans of Atidze
            </h2>

            <div className="bg-gradient-to-r from-[#FF4516]/10 to-[#E2A201]/10 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Atidze is the only division made up of five clans, reflecting the breadth of its historical development. Each clan maintains its unique identity while contributing to the unity and strength of the division.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {clans.map((clan, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#FF4516] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-900 font-medium text-lg">{clan}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#FF4516]">
                <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                  <Users className="mr-2 text-[#FF4516]" size={24} />
                  Unique Among the Divisions
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Atidze stands apart as the only division with five clans, a distinction that reflects its unique historical development and the diverse communities that have come together under the leadership of the Miamefia.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Origin and Identity</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#E2A201]">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                    <MapPin className="mr-2 text-[#E2A201]" size={24} />
                    The Red Tree
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The name Atidze comes from the Eʋe words <span className="font-semibold italic">ati dze</span>, meaning "red tree." During the community's migration from Ŋɔtsie, Atidze's ancestors settled under a distinctive red tree. When questioned about their distance from the main group, their leader explained that they were within sight, under the red tree.
                  </p>
                  <p className="text-xl font-bold text-[#FF4516] text-center py-4">
                    Kpɔƒeawo
                  </p>
                  <p className="text-gray-600 text-center text-sm">
                    Those who are not hidden
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#4C7000]">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                    <Shield className="mr-2 text-[#4C7000]" size={24} />
                    The Miamefia Position
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    As the <span className="font-bold text-[#E2A201]">Miamefia</span>, Atidze holds the position of Left-Hand Chief, placing it third in command within Tanyigbe's traditional hierarchy. This important role reflects the division's historical significance and its continued leadership in community affairs.
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
              The Left-Hand of Tanyigbe
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              As the third division in seniority and holder of the Miamefia stool, Tanyigbe Atidze continues to play a vital role in preserving and promoting the cultural heritage of the Tanyigbe Traditional Area. The division's five clans stand united as "Kpɔƒeawo" - those who are not hidden.
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
