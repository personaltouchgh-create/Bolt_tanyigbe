import { Calendar, Users, Music, Heart } from 'lucide-react';

export default function Tayafest() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/475764112_1168645144835044_4633959021770456733_n.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">TAYAFEST</h1>
          <p className="text-xl md:text-2xl">Tanyigbe Annual Yam Festival</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Yam Festival
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              TAYAFEST is an annual cultural celebration in the Tanyigbe Traditional Area that brings together community members from all four divisions and the diaspora.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The festival celebrates harvest season and serves as an important occasion for cultural expression, traditional ceremonies, and community development discussions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Annual Festival</h3>
              <p className="text-gray-700">
                Celebrated annually during the harvest season
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Community Reunion</h3>
              <p className="text-gray-700">
                Draws participants from all divisions and diaspora communities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Cultural Programs</h3>
              <p className="text-gray-700">
                Features traditional Eʋe music, dance, and ceremonial activities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#1F2937] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Heritage Celebration</h3>
              <p className="text-gray-700">
                Celebrates agricultural heritage and Eʋe cultural traditions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E2A201] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/491399177_1229152465450978_4812860042655025826_n.jpg"
                alt="TAYAFEST Celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">Festival Significance</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The yam holds cultural significance in Eʋe communities as a staple crop representing sustenance, agricultural productivity, and community prosperity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TAYAFEST provides an opportunity for community members living in other parts of Ghana and abroad to return home, reconnect with their roots, and participate in traditional celebrations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The festival includes traditional ceremonies conducted by the paramount chief and traditional council, along with cultural performances that showcase Eʋe heritage.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">Festival Components</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-[#E2A201] mb-3">Traditional Events</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ceremonial activities led by traditional authorities</li>
                  <li>• Agbadza and other Eʋe dance performances</li>
                  <li>• Traditional drumming ensembles</li>
                  <li>• Cultural displays from all four divisions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#4C7000] mb-3">Community Activities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Durbar of chiefs and traditional leaders</li>
                  <li>• Community development discussions</li>
                  <li>• Recognition of community achievements</li>
                  <li>• Youth and elder interactions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#FF4516] mb-3">Cultural Experience</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Traditional food preparation and sharing</li>
                  <li>• Craft and cultural exhibitions</li>
                  <li>• Storytelling and oral history sessions</li>
                  <li>• Yam presentation ceremonies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Diaspora Participation
            </h2>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TAYAFEST serves as a homecoming event for Tanyigbe community members living in Accra, other parts of Ghana, and internationally. The festival provides opportunities for diaspora members to:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 ml-6">
                <li>• Reconnect with family and community members</li>
                <li>• Participate in traditional ceremonies and cultural activities</li>
                <li>• Contribute to community development initiatives</li>
                <li>• Introduce younger generations to their cultural heritage</li>
                <li>• Engage in discussions about the community's future direction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Celebrating Heritage, Building Community
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              TAYAFEST represents the unity of the Tanyigbe Traditional Area, bringing together all four divisions in celebration of shared heritage, agricultural traditions, and community bonds that connect past, present, and future generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
