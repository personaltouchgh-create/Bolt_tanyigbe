import { Shield, Users, Scale, BookOpen, Crown, Heart } from 'lucide-react';

export default function TraditionalGovernance() {
  const paramountChiefs = [
    {
      name: 'Togbe Kodi Adiko I',
      title: 'Founding Leader',
      description: 'The founding Paramount Chief who established the traditional governance structure of Tanyigbe',
      era: 'Founding Era'
    },
    {
      name: 'Togbe Fiakpoe Adiko II',
      title: '2nd Paramount Chief',
      description: 'Continued the legacy of traditional leadership and community development',
      era: 'Early Period'
    },
    {
      name: 'Togbe Apatsi Adiko III',
      title: '3rd Paramount Chief',
      description: 'Strengthened traditional institutions and cultural preservation',
      era: 'Mid Period'
    },
    {
      name: 'Togbe Goto Kwasi Adiko IV',
      title: '4th Paramount Chief',
      description: 'During his reign, the first church was established in 1908, marking a significant milestone in the community',
      era: '1908 Era'
    },
    {
      name: 'Togbe Kwasi Adiko V',
      title: '5th Paramount Chief',
      description: 'NorDU founding member and first chairman, instrumental in regional unity and development',
      era: 'Modern Era'
    },
    {
      name: 'Togbe Kodi Adiko VI',
      title: 'Current Paramount Chief',
      description: 'Leading Tanyigbe Traditional Area into the future while preserving rich cultural heritage',
      era: 'Present',
      image: '/48 copy.jpg',
      current: true
    }
  ];

  const queenMothers = [
    {
      name: 'Mama Ama Adiko I',
      title: 'First Queen Mother',
      description: 'Pioneering leader who established the Queen Mother institution in Tanyigbe',
      era: 'Founding Era'
    },
    {
      name: 'Mama Klu Adiko II',
      title: 'Current Queen Mother',
      description: 'Providing maternal leadership and guidance to the community',
      era: 'Present',
      image: '/480937541_1187395832959975_5640828220721013428_n.jpg',
      current: true
    }
  ];

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/476610156_1170020774697481_3737999403323565257_n.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Traditional Governance</h1>
          <p className="text-xl md:text-2xl">Leadership, Legacy, and Customary Practices</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              A Legacy of Distinguished Leadership
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Tanyigbe Traditional Area has been blessed with visionary leaders who have guided the community through generations, preserving our rich cultural heritage while embracing progress and development.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              From our founding to the present day, our Paramount Chiefs and Queen Mothers have embodied the values of unity, wisdom, and service that define our community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#E2A201] via-[#4C7000] to-[#FF4516]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white p-4 rounded-full mb-6">
              <Crown className="text-[#E2A201]" size={48} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Current Leadership
            </h2>
            <p className="text-xl text-white opacity-90">
              Guiding Tanyigbe Traditional Area in the 21st Century
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition hover:scale-105">
              <div className="relative h-96">
                <img
                  src="/48 copy.jpg"
                  alt="Togbe Kodi Adiko VI"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="inline-block bg-[#E2A201] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                    Current Paramount Chief
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">Togbe Kodi Adiko VI</h3>
                <p className="text-[#E2A201] font-semibold mb-4">Paramount Chief of Tanyigbe Traditional Area</p>
                <p className="text-gray-700 leading-relaxed">
                  Leading the community with vision and wisdom, Togbe Kodi Adiko VI continues the distinguished legacy of his predecessors while guiding Tanyigbe into a prosperous future.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition hover:scale-105">
              <div className="relative h-96">
                <img
                  src="/480937541_1187395832959975_5640828220721013428_n.jpg"
                  alt="Mama Klu Adiko II"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="inline-block bg-[#4C7000] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                    Current Queen Mother
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">Mama Klu Adiko II</h3>
                <p className="text-[#4C7000] font-semibold mb-4">Queen Mother of Tanyigbe Traditional Area</p>
                <p className="text-gray-700 leading-relaxed">
                  Providing maternal wisdom and guidance, Mama Klu Adiko II serves as a pillar of strength and compassion for the entire community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Lineage of Paramount Chiefs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six distinguished leaders have guided Tanyigbe through its rich history, each contributing to our community's growth and cultural preservation
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E2A201] via-[#4C7000] to-[#FF4516] hidden md:block"></div>

              <div className="space-y-12">
                {paramountChiefs.map((chief, index) => (
                  <div key={index} className="relative">
                    <div className="md:ml-20">
                      <div className={`bg-white rounded-xl shadow-xl p-8 transition-all hover:shadow-2xl ${chief.current ? 'border-4 border-[#E2A201]' : ''}`}>
                        <div className="absolute left-8 top-8 w-8 h-8 bg-[#E2A201] rounded-full border-4 border-white hidden md:block transform -translate-x-16">
                          <div className="absolute inset-0 rounded-full bg-[#E2A201] animate-ping opacity-20"></div>
                        </div>

                        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                          <div>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                              {chief.name}
                            </h3>
                            <p className="text-[#E2A201] font-semibold text-lg">{chief.title}</p>
                          </div>
                          <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            chief.current
                              ? 'bg-[#E2A201] text-white'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {chief.era}
                          </div>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed">
                          {chief.description}
                        </p>

                        {chief.current && (
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-600 italic">
                              Current leader of Tanyigbe Traditional Area
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-br from-[#E2A201] via-[#4C7000] to-[#FF4516] p-4 rounded-full mb-6">
              <Heart className="text-white" size={48} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Queen Mothers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maternal leadership providing wisdom, guidance, and compassion to the community
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {queenMothers.map((queenMother, index) => (
              <div key={index} className={`bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg p-8 md:p-12 ${
                queenMother.current ? 'border-4 border-[#4C7000]' : ''
              }`}>
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                      {queenMother.name}
                    </h3>
                    <p className="text-[#4C7000] font-semibold text-xl">{queenMother.title}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    queenMother.current
                      ? 'bg-[#4C7000] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {queenMother.era}
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {queenMother.description}
                </p>

                {queenMother.current && (
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                      Serving the community with maternal wisdom and compassion
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Traditional Authority Structure
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The Tanyigbe Traditional Area operates under a hierarchical governance system that maintains continuity with traditional Eʋe governance while adapting to contemporary administrative requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">The Paramount Chief</h3>
              <p className="text-gray-700 leading-relaxed">
                The highest traditional authority representing unity across all four divisions of Tanyigbe, serving as the primary traditional leader and custodian of cultural heritage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Divisional Chiefs</h3>
              <p className="text-gray-700 leading-relaxed">
                Chiefs from Tanyigbe Etoe, Tanyigbe Aveme, Tanyigbe Bator, and Tanyigbe Dzigbe oversee local affairs and coordinate with the paramount chief on community matters.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Scale className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Council of Elders</h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional council comprising chiefs and elders providing guidance on customary matters, dispute resolution, and community development based on Eʋe traditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-[#1F2937] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Customary Functions</h3>
              <p className="text-gray-700 leading-relaxed">
                Handling land disputes, cultural ceremonies, traditional festivals, and serving as a vital link between the community and district administrative structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Traditional Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <div className="bg-gradient-to-br from-[#E2A201] to-[#4C7000] rounded-xl shadow-lg p-8 text-white transform transition hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4">Dispute Resolution</h3>
                  <p className="leading-relaxed opacity-90">
                    Traditional authorities handle disputes according to Eʋe customary law, providing mediation and resolution services that maintain community harmony.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-[#4C7000] to-[#FF4516] rounded-xl shadow-lg p-8 text-white transform transition hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4">Land Management</h3>
                  <p className="leading-relaxed opacity-90">
                    Traditional leaders oversee customary land matters, including land allocation, boundary disputes, and ensuring proper use of communal lands.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-[#FF4516] to-[#E2A201] rounded-xl shadow-lg p-8 text-white transform transition hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4">Cultural Ceremonies</h3>
                  <p className="leading-relaxed opacity-90">
                    The traditional authority presides over important cultural ceremonies and festivals that preserve Eʋe customs and strengthen community identity.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-[#1F2937] via-[#4C7000] to-[#E2A201] rounded-xl shadow-lg p-8 text-white transform transition hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4">Community Development</h3>
                  <p className="leading-relaxed opacity-90">
                    Traditional leaders collaborate with district authorities and development partners to promote education, healthcare, infrastructure, and economic advancement.
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
              Bridging Tradition and Modernity
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              The traditional governance system works alongside the district administrative structure, ensuring that customary practices are preserved while the community benefits from modern governance and development initiatives.
            </p>
            <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-2xl font-serif font-bold text-[#E2A201]">
                "Honoring the Past, Leading the Present, Inspiring the Future"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
