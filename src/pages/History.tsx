import { Compass, Mountain, TreePine, Flag } from 'lucide-react';

export default function History() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://placehold.co/1920x600/4C7000/FFF?text=Our+History)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
                The history of Tanyigbe is a testament to the enduring spirit of the Eʋe people. Our ancestors embarked on a remarkable journey that would shape the identity of our community for generations to come.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Like many Eʋe communities, our forebears migrated from Notsie (in present-day Togo) during the great Eʋe exodus. This migration, driven by the quest for freedom and better living conditions, led them through challenging terrains and countless obstacles.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                After a long journey, our ancestors discovered the fertile hills of what is now the Hohoe district. Captivated by the land's potential and natural beauty, they established settlements that would eventually grow into the four divisions we know today as the Tanyigbe Traditional Area.
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
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">The Exodus</h3>
              <p className="text-gray-700">
                Departure from Notsie in search of freedom and new opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">The Trek</h3>
              <p className="text-gray-700">
                A challenging journey through forests and mountains seeking a new homeland
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TreePine className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-700">
                Finding the fertile hills and establishing the first settlements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1F2937] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flag className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Foundation</h3>
              <p className="text-gray-700">
                Building our four divisions and establishing the Tanyigbe Traditional Area
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
                Upon settling in our current location, our ancestors established a system of traditional governance that has endured to this day. The leadership structure honors both our Eʋe heritage and the unique needs of our community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Each of the four divisions is led by a chief who works in consultation with elders and the community. Together, they form the traditional council that guides Tanyigbe, making decisions that balance respect for custom with the demands of modern development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This governance structure has been instrumental in maintaining unity across our divisions and ensuring that every voice is heard in matters affecting our traditional area.
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
                As proud members of the Eʋe ethnic group, we share a rich cultural heritage with other Eʋe communities across Ghana and Togo. Our language, traditions, and customs connect us to a broader family while maintaining our unique Tanyigbe identity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Eʋe people are known for their complex drumming traditions, particularly the Agbadza dance, which remains a central part of our cultural celebrations. We take pride in preserving these artistic traditions and passing them down to younger generations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our traditional religion and spiritual practices, though now coexisting with Christianity, continue to shape our worldview and inform our relationship with the land and each other.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Eʋe language remains the primary language of daily life in Tanyigbe, serving as a living link to our ancestors and a foundation for our cultural identity.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Early Settlement</h3>
              <p className="text-lg text-gray-700">
                Establishment of the first permanent settlements in the Tanyigbe area, marking the beginning of our recorded history in this region.
              </p>
            </div>

            <div className="border-l-4 border-[#4C7000] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Formation of the Four Divisions</h3>
              <p className="text-lg text-gray-700">
                Recognition and formal organization of Tanyigbe-Etoe, Tanyigbe-Gbogame, Tanyigbe-Avedome, and Tanyigbe-Dugame as distinct but united divisions.
              </p>
            </div>

            <div className="border-l-4 border-[#FF4516] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Colonial Era</h3>
              <p className="text-lg text-gray-700">
                Navigation of the challenges and opportunities presented by British colonial rule, while maintaining our traditional structures and cultural identity.
              </p>
            </div>

            <div className="border-l-4 border-[#1F2937] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Post-Independence Development</h3>
              <p className="text-lg text-gray-700">
                Embrace of Ghana's independence and active participation in national development while strengthening our local institutions and preserving our heritage.
              </p>
            </div>

            <div className="border-l-4 border-[#E2A201] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Modern Era</h3>
              <p className="text-lg text-gray-700">
                Contemporary development initiatives, diaspora engagement, and efforts to balance modernization with cultural preservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Honoring Our Past, Building Our Future
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The story of Tanyigbe is one of perseverance, unity, and unwavering commitment to our identity. As we honor the sacrifices and achievements of our ancestors, we remain dedicated to building a future worthy of their legacy.
            </p>
            <p className="text-2xl font-serif text-[#E2A201]">
              "Míawo tɔgbuiwo ƒe nu siwo wowɔ la, míaɖo ŋku edzi ɣe sia ɣi"
            </p>
            <p className="text-lg text-gray-300 mt-4">
              We will always remember the deeds of our ancestors
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
