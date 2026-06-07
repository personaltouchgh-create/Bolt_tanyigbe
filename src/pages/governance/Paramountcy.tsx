import { Crown, Shield, Star, Users } from 'lucide-react';

const highlights = [
  { icon: Crown, label: 'Paramount Chief', value: 'Togbega Kodi Adiko VI' },
  { icon: Star, label: 'Paramount Queenmother', value: 'Mamaga Klu Adiko II' },
  { icon: Shield, label: 'Traditional Area', value: 'Tanyigbe' },
  { icon: Users, label: 'Divisions', value: 'Anyigbe, Etoe, Atidze, Dzaƒe' },
];

export default function Paramountcy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[520px] overflow-hidden">
        <img
          src="/476224992_1170021084697450_390316064744204993_n.jpg"
          alt="Tanyigbe Traditional Area"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#E2A201] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Tanyigbe Traditional Area
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Paramountcy
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            The seat of traditional authority in Tanyigbe — upholding the customs, values, and dignity of the Eʋe people across generations.
          </p>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon size={28} className="text-[#E2A201] mx-auto mb-2" />
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{label}</p>
                <p className="text-white font-semibold text-sm leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-[#E2A201]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-serif text-xl italic">
            "The chief is not above the people — he is of the people, and for the people."
          </p>
          <p className="text-white/80 text-sm mt-2">— Eʋe Traditional Saying</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E2A201] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              His Royal Highness
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
              Togbega Kodi Adiko VI
            </h2>
            <p className="text-gray-500 mt-2 text-lg">Paramount Chief of Tanyigbe Traditional Area</p>
            <div className="mt-6 w-20 h-1 bg-[#E2A201] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Photo_2_.png"
                  alt="Togbega Kodi Adiko VI — Paramount Chief of Tanyigbe"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2">
                    <Crown size={18} className="text-[#E2A201]" />
                    <span className="text-white font-semibold text-sm">Paramount Chief</span>
                  </div>
                  <p className="text-white font-serif text-xl font-bold mt-1">Togbega Kodi Adiko VI</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-7 pt-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#E2A201] inline-block" />
                  The Office of the Paramount Chief
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The Paramount Chief stands as the highest traditional authority in the Tanyigbe Traditional Area, a position that commands deep reverence across the four divisions of Anyigbe, Etoe, Atidze, and Dzaƒe. Togbega Kodi Adiko VI holds this sacred office as custodian of Tanyigbe's laws, customs, and ancestral heritage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#E2A201] inline-block" />
                  Enstoolment & Lineage
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ascending to the paramount stool through the time-honoured rites of the Eʋe people, Togbega Kodi Adiko VI carries the distinguished Adiko royal line from Togbe Kodi Adiko I, Togbe Fiakpoe Adiko II, Togbe Apatsi Adiko III, Togbe Goto Kosi Adiko IV, and Togbe Kwasi Adiko V — a lineage that has steered the Tanyigbe people through migration, settlement, and growth. His enstoolment represents the continuity of a governance tradition stretching back centuries to the community's origins in Notsie.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#E2A201] inline-block" />
                  Role & Responsibilities
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  As paramount chief, Togbega Kodi Adiko VI presides over the traditional council, arbitrates disputes under customary law, and serves as the principal liaison between Tanyigbe and the national government. He champions community development, cultural preservation, and the welfare of both the home community and members of the diaspora, ensuring that Tanyigbe's identity and values endure for future generations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#E2A201] inline-block" />
                  Vision for Tanyigbe
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Under his leadership, the Tanyigbe Traditional Area pursues a vision that honours its ancestors while looking confidently forward — investing in education, health, infrastructure, and the empowerment of every son and daughter of Tanyigbe, at home and abroad.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-[#E2A201] rounded-r-lg p-5">
                <p className="text-gray-800 italic leading-relaxed">
                  "We honour the footprints of our ancestors by building a path worthy of our children."
                </p>
                <p className="text-[#E2A201] font-semibold text-sm mt-2">— Togbega Kodi Adiko VI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#E2A201] uppercase tracking-[0.2em] text-sm font-semibold mb-2">
              Royal Heritage
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
              Past Paramount Chief
            </h3>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="/480937541_1187395832959975_5640828220721013428_n.jpg"
                alt="Togbe Kwasi Adiko V — Past Paramount Chief of Tanyigbe"
                className="w-full h-[400px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <p className="text-[#E2A201] text-xs uppercase tracking-wider font-semibold mb-1">5th Paramount Chief</p>
                <p className="text-white font-serif text-lg font-bold">Togbe Kwasi Adiko V</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#4C7000] to-transparent" />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4C7000] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Her Royal Highness
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
              Mamaga Klu Adiko II
            </h2>
            <p className="text-gray-500 mt-2 text-lg">Paramount Queenmother of Tanyigbe Traditional Area</p>
            <div className="mt-6 w-20 h-1 bg-[#4C7000] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-7 pt-4 lg:order-1">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#4C7000] inline-block" />
                  The Office of the Paramount Queenmother
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The institution of the Queenmother — known in Eʋe as <em>Mamaga</em> — is one of the most revered in Eʋe traditional governance. Succeeding Mamaga Ama Adiko I, Mamaga Klu Adiko II serves as the Paramount Queenmother of Tanyigbe, standing as an equal pillar of authority alongside the Paramount Chief and embodying the feminine wisdom at the heart of communal life.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#4C7000] inline-block" />
                  Champion of Women & Community
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Mamaga Klu Adiko II is a tireless advocate for the welfare of women and children in Tanyigbe. She mediates disputes with empathy and wisdom, leads women's initiatives, and ensures that the voices of Tanyigbe's women are heard in all matters of community governance and development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#4C7000] inline-block" />
                  Counsel & Leadership
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  As a senior member of the traditional council, Her Royal Highness provides counsel on matters of custom, culture, and community cohesion. Her wisdom is sought in times of celebration and challenge alike, making her an indispensable force in the continuity and progress of the Tanyigbe Traditional Area.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-[#4C7000] rounded-r-lg p-5">
                <p className="text-gray-800 italic leading-relaxed">
                  "A community that lifts its women lifts itself. Tanyigbe's strength is in every one of its daughters."
                </p>
                <p className="text-[#4C7000] font-semibold text-sm mt-2">— Mamaga Klu Adiko II</p>
              </div>
            </div>

            <div className="lg:col-span-2 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/mamaga.jpeg"
                  alt="Mamaga Klu Adiko II — Paramount Queenmother of Tanyigbe"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-[#4C7000]" />
                    <span className="text-white font-semibold text-sm">Paramount Queenmother</span>
                  </div>
                  <p className="text-white font-serif text-xl font-bold mt-1">Mamaga Klu Adiko II</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure Overview */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            The Structure of Authority
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Tanyigbe's traditional governance is built on a dual-authority model — every level of leadership is shared between a chief and a queenmother, ensuring balanced representation and the full integration of both male and female wisdom in community decision-making.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: 'Paramount Level',
                male: 'Paramount Chief',
                female: 'Paramount Queenmother',
                color: '#E2A201',
              },
              {
                level: 'Divisional Level',
                male: 'Divisional Chiefs',
                female: 'Divisional Queenmothers',
                color: '#4C7000',
              },
              {
                level: 'Sub-Divisional Level',
                male: 'Sub-Divisional Chiefs',
                female: 'Sub-Divisional Queenmothers',
                color: '#FF4516',
              },
            ].map(({ level, male, female, color }) => (
              <div
                key={level}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:bg-white/10 transition-colors"
              >
                <div
                  className="w-10 h-1 rounded-full mb-4"
                  style={{ backgroundColor: color }}
                />
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color }}>
                  {level}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-gray-400 flex-shrink-0" />
                    <span className="text-white text-sm">{male}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-gray-400 flex-shrink-0" />
                    <span className="text-white text-sm">{female}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
