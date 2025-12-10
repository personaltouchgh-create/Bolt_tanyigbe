import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Landmark } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/476224992_1170021084697450_390316064744204993_n.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Woezɔ na mi – Welcome to Tanyigbe
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4">
            One People • One Heritage • One Destiny
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            The Eʋe Community of Unity and Progress
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-[#E2A201] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center justify-center"
            >
              Discover Our Story
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/culture"
              className="bg-white text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Explore Our Culture
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Tanyigbe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A vibrant Eʋe community in the Volta Region of Ghana, united by our rich heritage and shared vision for the future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Community</h3>
              <p className="text-gray-700 mb-4">
                Four united divisions working together: Tanyigbe-Etoe, Tanyigbe-Aveme, Tanyigbe-Bator, and Tanyigbe-Dzigbe.
              </p>
              <Link to="/about" className="text-[#E2A201] font-semibold hover:underline inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Landmark className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Heritage</h3>
              <p className="text-gray-700 mb-4">
                A proud history of migration, resilience, and cultural preservation spanning generations of the Eʋe people.
              </p>
              <Link to="/history" className="text-[#4C7000] font-semibold hover:underline inline-flex items-center">
                Our History <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Future</h3>
              <p className="text-gray-700 mb-4">
                Building tomorrow through education, healthcare, infrastructure, and sustainable development initiatives.
              </p>
              <Link to="/development" className="text-[#FF4516] font-semibold hover:underline inline-flex items-center">
                Our Projects <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                TAYAFEST: Celebrating Our Culture
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every year, we come together to celebrate TAYAFEST, our signature cultural festival that showcases the vibrant traditions, music, dance, and unity of the Tanyigbe people.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From traditional Agbadza performances to our famous durbar of chiefs, TAYAFEST is where heritage meets celebration.
              </p>
              <Link
                to="/culture"
                className="inline-flex items-center bg-[#E2A201] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Explore Our Culture
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/475764112_1168645144835044_4633959021770456733_n.jpg"
                alt="TAYAFEST Celebration - Traditional ceremonial regalia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Join the Diaspora Network
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're in Accra, London, New York, or anywhere in the world, you're part of the Tanyigbe family. Connect with us and stay engaged with your roots.
          </p>
          <Link
            to="/diaspora"
            className="inline-flex items-center bg-[#E2A201] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Join the Network
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience Tanyigbe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the natural wonders and cultural treasures that make our region unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/screenshot_2025-12-05_234830 copy.png"
                alt="Wli Falls"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Wli Waterfalls</h3>
                <p className="text-gray-700 mb-4">
                  Experience the tallest waterfall in West Africa, a breathtaking natural wonder.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/screenshot_2025-12-06_001430 copy copy.png"
                alt="Mount Afadja"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Mount Afadja</h3>
                <p className="text-gray-700 mb-4">
                  Hike to the highest point in Ghana and witness stunning panoramic views.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/screenshot_2025-12-06_001918.png"
                alt="Canopy Walkway"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Amedzofe Canopy Walk</h3>
                <p className="text-gray-700 mb-4">
                  Walk among the treetops and experience the forest from a unique perspective.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/tourism"
              className="inline-flex items-center bg-[#4C7000] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Plan Your Visit
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
