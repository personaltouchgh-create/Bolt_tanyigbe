import { Crown, Shield, Star, Users, Sword, Flame, BookOpen, Settings, Landmark, Network } from 'lucide-react';

export default function TraditionalGovernance() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="/476316223_1169596868073205_3511019283656705740_n.jpg"
          alt="Tanyigbe Traditional Governance"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#E2A201] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Tanyigbe Traditional Area
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Traditional Governance
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            A time-honoured system of governance where every office carries a sacred duty — to serve, protect, and preserve the Tanyigbe people across generations.
          </p>
        </div>
      </section>

      {/* Hierarchy diagram */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E2A201] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Traditional Governance
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
              Tanyigbe Traditional Governance Structure
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
              A layered system of authority — from the paramount stool to the council of elders — ensuring that Tanyigbe is governed with wisdom, balance, and ancestral fidelity.
            </p>
            <div className="mt-6 w-20 h-1 bg-[#E2A201] mx-auto rounded-full" />
          </div>

          {/* Apex — Paramount Chief */}
          <div className="flex justify-center mb-4">
            <div className="relative bg-[#E2A201] text-white rounded-2xl px-10 py-7 text-center shadow-xl max-w-sm w-full">
              <Crown size={32} className="mx-auto mb-3 text-white" />
              <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-1 text-white/80">Apex Authority</p>
              <p className="font-serif text-2xl font-bold">Paramount Chief</p>
              <p className="text-sm text-white/80 mt-1">Togbega Kodi Adiko VI</p>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-[#E2A201]" />
          </div>

          {/* Parallel — Paramount Queenmother + Divisional Chiefs */}
          <div className="grid md:grid-cols-2 gap-6 mb-4 max-w-3xl mx-auto">
            <div className="bg-[#4C7000] text-white rounded-xl px-8 py-6 text-center shadow-lg">
              <Star size={26} className="mx-auto mb-2 text-white" />
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/80 mb-1">Royal Counterpart</p>
              <p className="font-serif text-lg font-bold">Paramount Queenmother</p>
              <p className="text-sm text-white/80 mt-1">Mamaga Klu Adiko II</p>
            </div>
            <div className="bg-gray-800 text-white rounded-xl px-8 py-6 text-center shadow-lg">
              <Users size={26} className="mx-auto mb-2 text-white" />
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-1">Four Divisions</p>
              <p className="font-serif text-lg font-bold">Divisional Chiefs &amp; Queenmothers</p>
              <p className="text-sm text-gray-400 mt-1">Anyigbe · Etoe · Atidze · Dzaƒe</p>
            </div>
          </div>

          {/* Sub-Divisional */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-6 bg-gray-300" />
          </div>
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 border border-gray-200 rounded-xl px-10 py-5 text-center shadow max-w-sm w-full">
              <Shield size={22} className="mx-auto mb-2 text-gray-500" />
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Community Level</p>
              <p className="font-serif text-base font-bold text-gray-800">Sub-Divisional Chiefs &amp; Queenmothers</p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gray-200" />
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold px-2">Advisory &amp; Functional Offices</p>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* 6 Advisory/Functional Roles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Sword size={22} className="text-[#FF4516]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#FF4516] font-semibold">Military Authority</p>
                  <h3 className="font-serif text-xl font-bold text-gray-900">Awafiaga</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                The Awafiaga is the military commander of the Tanyigbe Traditional Area, charged with the physical protection of the paramountcy, the land, and its people. In times of conflict the Awafiaga leads the community's warriors; in times of peace, this office safeguards the territorial integrity of Tanyigbe and enforces the security decisions of the traditional council. The role combines physical courage with strategic counsel, making the Awafiaga a trusted arm of the paramount stool.
              </p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Flame size={22} className="text-[#E2A201]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#E2A201] font-semibold">High Priest</p>
                  <h3 className="font-serif text-xl font-bold text-gray-900">Anyinuô</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                The Anyinuô is the principal spiritual leader of the Tanyigbe community — the High Priest who stands as the living bridge between the living and the ancestors. This sacred office oversees all traditional religious rites, communal prayers, and libation ceremonies, invoking the blessing and protection of the forebears on the land and its people. The Anyinuô's counsel is indispensable before major community decisions, ensuring that every action is taken in spiritual alignment with the ancestral covenant.
              </p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Landmark size={22} className="text-[#4C7000]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#4C7000] font-semibold">Custodian of the Gods &amp; Ancestors</p>
                  <h3 className="font-serif text-xl font-bold text-gray-900">Ganuô</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                Where the Anyinuô leads communal worship, the Ganuô is the dedicated keeper of the shrines, sacred objects, and ancestral relics that embody the spirit and memory of the Tanyigbe forebears. The Ganuô maintains the sanctity of the traditional religious sites, performs the prescribed rites of propitiation, and ensures that the covenants made with the gods are honoured. This office is the living memory of Tanyigbe's spiritual heritage and a guardian against the desecration of sacred things.
              </p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Settings size={22} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold">Senior Administrative Deputy</p>
                  <h3 className="font-serif text-xl font-bold text-gray-900">Mankrado</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                The Mankrado is the head of the elders and is responsible for overseeing the implementation of the Traditional Council's resolutions. He ensures order, discipline, and adherence to protocol at all traditional ceremonies, gatherings, and within the community. A key aspect of his role is maintaining internal peace, security, and social cohesion, while helping to resolve disputes and uphold communal harmony.
              </p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={22} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-orange-600 font-semibold">Custodians of Tradition &amp; Succession</p>
                  <h3 className="font-serif text-xl font-bold text-gray-900">ZIKPUITOR (Stoolfather)</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                The Stoolfather is the custodian of a stool, the most sacred symbol of chieftaincy authority in Tanyigbe. Led by the Stoolfather of the Paramount Stool, the Stoolfathers safeguard the customs, protocols, and succession rites that guide the selection, nomination, and installation of chiefs. During periods of interregnum, they ensure continuity of governance and uphold the integrity of the traditional succession process. As custodians of oral history and customary law, they preserve the heritage, identity, and traditions of the Tanyigbe stools for future generations.
              </p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Network size={22} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Clan &amp; Community Representatives</p>
                  <h3 className="font-serif text-xl font-bold text-gray-900">Council of Elders</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                The Council of Elders is the deliberative body of the Tanyigbe Traditional Area, comprising senior representatives drawn from the community's clans, families, and sub-divisions. The Council provides collective wisdom on all matters of governance, development, dispute resolution, and community welfare. No major decision of the paramount stool is taken without the counsel of the elders. Their authority rests on lived experience, earned respect, and an unbroken commitment to the values and wellbeing of the Tanyigbe people.
              </p>
            </div>

          </div>

          {/* Closing note */}
          <div className="mt-16 bg-[#1a1a1a] rounded-2xl px-8 py-10 text-center max-w-3xl mx-auto">
            <Crown size={28} className="text-[#E2A201] mx-auto mb-4" />
            <p className="text-white font-serif text-xl italic leading-relaxed">
              "Every office in our governance structure exists for one purpose — the service, protection, and flourishing of the Tanyigbe people."
            </p>
            <p className="text-[#E2A201] font-semibold text-sm mt-4">— Tanyigbe Traditional Council</p>
          </div>
        </div>
      </section>
    </div>
  );
}
