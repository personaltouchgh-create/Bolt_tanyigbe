import { Heart, Users, Sparkles, Sun } from 'lucide-react';

export default function GoodwillMessage() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100">
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
        <div className="absolute top-10 right-20 opacity-20">
          <Sun size={120} className="text-amber-400" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Sun size={80} className="text-orange-400" />
        </div>
        <div className="relative z-10 text-center px-4">
          <Heart className="text-[#E2A201] mx-auto mb-6" size={64} />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gray-900">Goodwill Message</h1>
          <p className="text-xl md:text-2xl text-gray-700">From the Traditional Council and People of Tanyigbe</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400 rounded-2xl blur-2xl opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img
                      src="/gemini_generated_image_zc992mzc992mzc99.webp"
                      alt="His Royal Highness Togbega Kodi Adiko VI in traditional regalia"
                      className="w-80 h-auto md:w-96 object-cover rounded-xl mx-auto"
                    />
                  </div>
                </div>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                His Royal Highness Togbega Kodi Adiko VI
              </h2>
              <p className="text-xl text-gray-600">
                Paramount Chief, Tanyigbe Traditional Area
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400 p-1 rounded-2xl shadow-2xl mb-12">
              <div className="bg-white p-8 md:p-12 rounded-2xl">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    On behalf of the Traditional Council and the people of Tanyigbe, we extend warm greetings to all residents, friends, and well-wishers of our community.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Tanyigbe's strength lies in its people, shared values, and rich heritage. As we honour our history and culture, we also reaffirm our collective commitment to unity, peace, and development. Together, we can continue to build a community that supports education, wellbeing, and opportunities for present and future generations.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    We welcome all who seek to engage with Tanyigbe in the spirit of cooperation, respect, and shared progress.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-lg font-bold text-gray-900">His Royal Highness Togbega Kodi Adiko VI</p>
                  <p className="text-gray-600">Paramount Chief, Tanyigbe Traditional Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border border-amber-100">
                <div className="bg-gradient-to-br from-amber-400 to-orange-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={40} />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">Unity & Peace</h4>
                <p className="text-gray-700">
                  Building solidarity among our people through shared values and collective commitment to harmony
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border border-amber-100">
                <div className="bg-gradient-to-br from-orange-400 to-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-white" size={40} />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">Heritage & Culture</h4>
                <p className="text-gray-700">
                  Honouring our history and preserving our rich cultural heritage for present and future generations
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border border-amber-100">
                <div className="bg-gradient-to-br from-yellow-400 to-amber-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-white" size={40} />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">Development & Progress</h4>
                <p className="text-gray-700">
                  Supporting education, wellbeing, and creating opportunities that benefit our entire community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Sun className="text-white/80 mx-auto mb-6" size={64} />
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Welcome to Tanyigbe
            </h3>
            <p className="text-xl leading-relaxed">
              We invite all who seek to engage with Tanyigbe in the spirit of cooperation, respect, and shared progress. Together, we build a stronger community for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
