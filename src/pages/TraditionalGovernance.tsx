import { Shield, Users, Scale, BookOpen } from 'lucide-react';

export default function TraditionalGovernance() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/476610156_1170020774697481_3737999403323565257_n.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Traditional Governance</h1>
          <p className="text-xl md:text-2xl">Leadership and Customary Practices</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              The Traditional Authority Structure
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Tanyigbe Traditional Area operates under a hierarchical governance system typical of Eʋe communities. This structure maintains continuity with traditional Eʋe governance while adapting to contemporary administrative requirements within the Hohoe District.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The paramount chief serves as the overall traditional authority, supported by divisional chiefs from each of the four constituent divisions: Tanyigbe-Etoe, Tanyigbe-Aveme, Tanyigbe-Bator, and Tanyigbe-Dzigbe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">The Paramount Chief</h3>
              <p className="text-gray-700 leading-relaxed">
                The paramount chief is the highest traditional authority in the Tanyigbe Traditional Area, based in Tanyigbe-Etoe. This position represents the unity of all four divisions and serves as the primary traditional leader for the community.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Divisional Chiefs</h3>
              <p className="text-gray-700 leading-relaxed">
                Each of the four divisions has its own chief who oversees local affairs and represents the division in the traditional council. These chiefs work in coordination with the paramount chief on matters affecting the entire traditional area.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Scale className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Council of Elders</h3>
              <p className="text-gray-700 leading-relaxed">
                The traditional council comprises the paramount chief, divisional chiefs, and elders who provide guidance on customary matters, dispute resolution, and community development initiatives based on Eʋe traditions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[#1F2937] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Customary Functions</h3>
              <p className="text-gray-700 leading-relaxed">
                The traditional authority handles customary matters including land disputes, cultural ceremonies, traditional festivals, and serves as a link between the community and district administrative structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Traditional Practices
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Traditional authorities handle disputes according to Eʋe customary law, providing mediation and resolution services that maintain community harmony while respecting modern legal frameworks.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Land Management</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Traditional leaders oversee customary land matters, including land allocation, boundary disputes, and ensuring proper use of communal lands according to traditional practices.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Ceremonies</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The traditional authority presides over important cultural ceremonies and festivals that preserve Eʋe customs and strengthen community identity across all four divisions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Development</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Traditional leaders collaborate with district authorities and development partners to promote education, healthcare, infrastructure, and economic advancement within the traditional area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Bridging Tradition and Modernity
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The traditional governance system works alongside the district administrative structure, ensuring that customary practices are preserved while the community benefits from modern governance and development initiatives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
