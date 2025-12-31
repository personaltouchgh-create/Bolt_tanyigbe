import { Music, Utensils, Calendar, Sparkles } from 'lucide-react';

export default function Culture() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#FF4516] to-[#E2A201]">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Culture & Traditions</h1>
          <p className="text-xl md:text-2xl">Celebrating Our Eʋe Heritage</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Living Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our culture is not a relic of the past—it's a living, breathing expression of who we are as a people, celebrated daily and passed down through generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Music & Dance</h3>
              <p className="text-gray-700">
                Traditional Eʋe dances including Borborbor are performed during cultural celebrations and festivals
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Cuisine</h3>
              <p className="text-gray-700">
                Traditional Eʋe dishes like Akple or Banku with Fetri detsi, Fufu with various soups, and Abolo with fried fish
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Festivals</h3>
              <p className="text-gray-700">
                Annual festivals bring together community members from all four divisions and diaspora
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#1F2937] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Ceremonies</h3>
              <p className="text-gray-700">
                Traditional rites and ceremonies mark important life transitions and community events
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Traditional Cuisine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tanyigbe's culinary heritage reflects our Eʋe traditions with dishes that bring families and communities together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Akple & Banku</h3>
              <p className="text-gray-700 leading-relaxed">
                Akple or Banku served with Fetri detsi (okro soup or stew), Borbitadi, and other traditional sauces are staples at meals and celebrations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Fufu & Soups</h3>
              <p className="text-gray-700 leading-relaxed">
                Fufu prepared with various soups including light soup, palm nut soup, and groundnut soup remains a beloved traditional meal.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Abolo</h3>
              <p className="text-gray-700 leading-relaxed">
                Abolo served with fried fish and pepper sauce is a popular dish enjoyed across the community during gatherings and everyday meals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E2A201] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TAYAFEST
            </h2>
            <p className="text-2xl text-[#E2A201] font-serif mb-6">
              Tanyigbe Annual Yam Festival
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our signature cultural celebration bringing together all four divisions and the diaspora
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/476316223_1169596868073205_3511019283656705740_n.jpg"
                alt="TAYAFEST"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">The Grand Celebration</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TAYAFEST is more than a festival—it's a homecoming, a celebration of harvest, and a reaffirmation of our unity as a people. Held annually, it draws Tanyigbe sons and daughters from across Ghana and around the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The festival showcases the best of Eʋe culture: thundering drums, graceful traditional dances, colorful regalia, and the majestic durbar of chiefs. It's a time when old friendships are renewed, new connections are made, and our shared identity is celebrated.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The yam, central to the festival, symbolizes prosperity, hard work, and the sustenance provided by our fertile lands—values that continue to define the Tanyigbe spirit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">Festival Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-[#E2A201] mb-3">Traditional Performances</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Abeyoyro (hailing of abe)</li>
                  <li>• Zikpuiworwor (Stool rites performances)</li>
                  <li>• Borborbor drum competitions among divisions</li>
                  <li>• Gbormetsatsa competitions among divisions</li>
                  <li>• Traditional poetry and storytelling</li>
                  <li>• Youth cultural displays</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#4C7000] mb-3">Community Activities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Grand durbar of chiefs</li>
                  <li>• Health walk by all divisions to neighbouring communities</li>
                  <li>• Football competitions among divisions (male & female teams)</li>
                  <li>• Volleyball competitions among divisions (male & female teams)</li>
                  <li>• Community awards ceremony</li>
                  <li>• Development presentations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#FF4516] mb-3">Cultural Experience</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Traditional food fair</li>
                  <li>• Craft exhibitions</li>
                  <li>• Cultural education sessions</li>
                  <li>• Yam presentation ceremony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Traditional Arts & Crafts
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">Preserving Artistry</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tanyigbe is home to skilled artisans who keep traditional crafts alive. From intricate kente weaving to calabash carving, pottery, and beadwork, our craftspeople create functional art that connects us to our ancestors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                These crafts are more than commercial products; they're carriers of cultural knowledge, with techniques and meanings passed from generation to generation.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/491399177_1229152465450978_4812860042655025826_n.jpg"
                alt="Traditional Crafts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            The Eʋe Language
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our language is the soul of our culture. Eʋegbe (the Eʋe language) is a tonal language rich in proverbs, metaphors, and musical qualities. It's the primary language of daily life in Tanyigbe and the medium through which our cultural knowledge is transmitted.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We place great emphasis on teaching Eʋegbe to our children, recognizing that language preservation is cultural preservation. Through our schools, cultural programs, and family traditions, we ensure that each generation can speak the language of their ancestors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#E2A201] bg-opacity-10 rounded-lg p-6">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Common Eʋe Greetings</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><span className="font-semibold">Miawoezɔ:</span> Welcome (plural)</li>
                  <li><span className="font-semibold">Ŋdi na wò:</span> Good morning</li>
                  <li><span className="font-semibold">Ŋdɔ na wò:</span> Good afternoon</li>
                  <li><span className="font-semibold">Fiẽyi na wò:</span> Good evening</li>
                  <li><span className="font-semibold">Za ne nyo nawo / Na dor agbe:</span> Good night</li>
                  <li><span className="font-semibold">Akpe na wò:</span> Thank you</li>
                </ul>
              </div>

              <div className="bg-[#4C7000] bg-opacity-10 rounded-lg p-6">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Cultural Expressions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><span className="font-semibold">Dekawowor kple Ngoyiyi:</span> Unity and Progress</li>
                  <li><span className="font-semibold">Ame dekawo mienyo:</span> We are one people</li>
                  <li><span className="font-semibold">Fafa kple Lolo:</span> Peace and Love</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Traditional Ceremonies & Rites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Traditional ceremonies mark significant life events following Eʋe cultural practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Naming Ceremonies</h3>
              <p className="text-gray-700 leading-relaxed">
                Naming ceremonies are performed following Eʋe traditions, where newborns are formally introduced to the community and family.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Traditional Marriages</h3>
              <p className="text-gray-700 leading-relaxed">
                Marriage ceremonies follow Eʋe customary practices, including traditional rites that unite families within the community.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Funeral Rites</h3>
              <p className="text-gray-700 leading-relaxed">
                Funeral ceremonies are conducted according to Eʋe traditions and customs, honoring the departed and bringing together community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Culture in the Modern Age
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              While we embrace progress and modernity, we remain firmly rooted in our cultural identity. Our challenge and our triumph is in finding the balance—honoring tradition while adapting to the contemporary world.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Through cultural education programs, youth engagement initiatives, and diaspora connections, we ensure that Tanyigbe culture continues to thrive and evolve, remaining relevant for generations to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
