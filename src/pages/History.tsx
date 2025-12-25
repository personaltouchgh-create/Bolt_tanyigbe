import { Compass, Mountain, TreePine, Flag } from 'lucide-react';

export default function History() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#4C7000] to-[#E2A201]">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Our History & Heritage</h1>
          <p className="text-xl md:text-2xl">A Journey of Resilience and Unity</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              The Migration Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Tanyigbe is an Eʋe community with roots in the broader Eʋe migration history. The Eʋe people trace their origins to Notsie in present-day Togo, from where various groups migrated to establish settlements across the Volta Region.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The Tanyigbe Traditional Area was established in the Hohoe District, where the community has maintained its presence for generations, developing its traditional governance structures and cultural practices.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Today, the community is organized into four divisions—Anyigbe, Etoe, Atidze, and Dzafe—united under one paramount chief.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            The Journey Timeline
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Eʋe Origins</h3>
              <p className="text-gray-700">
                Part of the broader Eʋe migration from Notsie in present-day Togo
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Migration Period</h3>
              <p className="text-gray-700">
                Settlement in the Volta Region as part of Eʋe migration patterns
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TreePine className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Settlement</h3>
              <p className="text-gray-700">
                Establishment of communities in the Hohoe District area
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1F2937] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flag className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Traditional Area Formation</h3>
              <p className="text-gray-700">
                Development of the four-division structure under one paramount stool
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/476610156_1170020774697481_3737999403323565257_n.jpg"
                alt="Traditional Leadership"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Traditional Governance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Tanyigbe Traditional Area operates under a hierarchical governance system typical of Eʋe communities. A paramount chief serves as the overall traditional authority, supported by divisional chiefs from each of the four divisions: Anyigbe, Etoe, Atidze, and Dzafe.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The traditional council comprises the paramount chief, divisional chiefs, and elders who provide guidance on customary matters, dispute resolution, and community development initiatives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This structure maintains continuity with traditional Eʋe governance while adapting to contemporary administrative requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E2A201] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              The Eʋe Heritage
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tanyigbe is part of the Eʋe ethnic group, one of Ghana's major ethnic groups with populations also in Togo and Benin. The Eʋe language (Eʋegbe) serves as the primary language of communication within the community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The community shares cultural practices common to Eʋe communities, including traditional music, dance forms such as Agbadza, and customary ceremonies that mark significant life events and seasonal celebrations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Like many Ghanaian communities, Tanyigbe has experienced religious transformation, with Christianity becoming predominant while traditional beliefs continue to influence cultural practices and worldview.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The preservation of Eʋe language and cultural practices remains important to community identity, particularly through festivals, traditional ceremonies, and educational initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Key Historical Milestones
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 border-[#E2A201] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Origins in Notsie</h3>
              <p className="text-lg text-gray-700">
                Our history traces back to the migration of the Ewe people from Notsie in present-day Togo, where our ancestors lived before embarking on a journey in search of freedom and better living conditions.
              </p>
            </div>

            <div className="border-l-4 border-[#4C7000] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Migration Journey</h3>
              <p className="text-lg text-gray-700">
                Along our journey, our people passed through areas such as Gbélé (near the Aburi Mountains) and Amamprobi in Akwapem, before moving through parts of the Volta region in search of fertile land, water, and security.
              </p>
            </div>

            <div className="border-l-4 border-[#FF4516] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Dzifadzi Episode</h3>
              <p className="text-lg text-gray-700">
                Our oral history recalls a significant episode at Dzifadzi, where two brothers became separated from the main group during the migration, compelling them to settle there and start their families. Tanyigbe remains connected to the Dzifadzi community.
              </p>
            </div>

            <div className="border-l-4 border-[#1F2937] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Settlement at Klɔbɔ (Gborkome or Old Town)</h3>
              <p className="text-lg text-gray-700">
                Our community settled for an extended period at Klɔbɔ (Gborxome or Old Town), where social structures, farming practices, and communal life were firmly established.
              </p>
            </div>

            <div className="border-l-4 border-[#E2A201] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Relocation to Our Present Home</h3>
              <p className="text-lg text-gray-700">
                In the late 20th century, our people relocated from the Old Town to our present location along the Ho-Kpalimé corridor, where Tanyigbe continues to grow and thrive today.
              </p>
            </div>

            <div className="border-l-4 border-[#4C7000] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Yam Festival (TAYAFEST)</h3>
              <p className="text-lg text-gray-700">
                Each year, usually in September, our community comes together to celebrate the Yam Festival, a key cultural milestone marked by thanksgiving, unity, and the reaffirmation of shared values and heritage.
              </p>
            </div>

            <div className="border-l-4 border-[#FF4516] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Community Today</h3>
              <p className="text-lg text-gray-700">
                Today, our community is organized into four divisions—Anyigbe, Etoe, Atidze, and Dzafe—and continues to advance education, health, culture, and community development through collective effort and cooperation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              The Tanyigbe Traditional Area Today
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The Tanyigbe Traditional Area operates within the Hohoe District administrative framework while maintaining its traditional governance structures. The community continues to preserve Eʋe cultural heritage through festivals, language maintenance, and traditional ceremonies.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Development priorities include education, healthcare infrastructure, agricultural advancement, and maintaining connections with diaspora community members who contribute to local development initiatives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
