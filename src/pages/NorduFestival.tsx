import { Calendar, Users, Music, MapPin } from 'lucide-react';

export default function NorduFestival() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/476316223_1169596868073205_3511019283656705740_n.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">NORDU Festival</h1>
          <p className="text-xl md:text-2xl">Celebrating Community Heritage</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About NORDU Festival
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              NORDU is a community festival celebrated in the Tanyigbe Traditional Area, bringing together members from all four divisions and diaspora community members.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The festival serves as an important gathering that strengthens community bonds and provides opportunities for cultural expression and community development initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Annual Event</h3>
              <p className="text-gray-700">
                Held annually as part of the traditional area's cultural calendar
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Community Unity</h3>
              <p className="text-gray-700">
                Brings together all four divisions and diaspora members
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Cultural Display</h3>
              <p className="text-gray-700">
                Features traditional Eʋe music, dance, and cultural performances
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#1F2937] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Traditional Area</h3>
              <p className="text-gray-700">
                Celebrated within the Tanyigbe Traditional Area in Hohoe District
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Festival Activities
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#E2A201] mb-2">Traditional Ceremonies</h3>
                  <p className="text-lg text-gray-700">
                    The festival includes traditional ceremonies conducted by the paramount chief and traditional council.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#4C7000] mb-2">Cultural Performances</h3>
                  <p className="text-lg text-gray-700">
                    Traditional Eʋe dances and music performances showcase the community's cultural heritage.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#FF4516] mb-2">Community Gathering</h3>
                  <p className="text-lg text-gray-700">
                    The festival provides opportunities for community members to reconnect and discuss development initiatives.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/491354591_1229152408784317_3726456993382028091_n.jpg"
                alt="NORDU Festival Celebration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Join the Celebration
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              NORDU Festival welcomes community members from all four divisions and diaspora to participate in celebrating our shared heritage and strengthening community bonds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
