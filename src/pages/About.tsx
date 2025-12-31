import { MapPin, Users, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#E2A201] to-[#4C7000]">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">About Tanyigbe</h1>
          <p className="text-xl md:text-2xl">Discover Our Community and Heritage</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Tanyigbe Traditional Area
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Tanyigbe is an Eʋe community located in the Ho district of the Volta Region, Ghana. The traditional area comprises four divisions united under one paramount stool, with a shared commitment to preserving our heritage while embracing development.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our community is governed by traditional leadership structures that honor both our Eʋe heritage and the unique identity of each division.
            </p>
          </div>

          <div className="bg-[#E2A201] bg-opacity-10 rounded-lg p-8 mb-16">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={48} className="text-[#E2A201]" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-gray-900 text-center mb-4">Location</h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Located in the Ho district of the Volta Region, Ghana, Tanyigbe is part of the historic Eʋe settlement area with proximity to significant regional landmarks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Four Divisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              United under one traditional area, each division maintains its unique character while contributing to our collective strength.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/divisions/anyigbe"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E2A201] to-[#FF4516] opacity-90"></div>
              <div className="relative p-8 h-64 flex flex-col items-center justify-center text-white">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-center">Tanyigbe Anyigbe</h3>
                <p className="text-sm text-white text-opacity-90 text-center mb-4">Explore Leadership & Governance</p>
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>

            <Link
              to="/divisions/etoe"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4C7000] to-[#2F5300] opacity-90"></div>
              <div className="relative p-8 h-64 flex flex-col items-center justify-center text-white">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Landmark className="text-white" size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-center">Tanyigbe Etoe</h3>
                <p className="text-sm text-white text-opacity-90 text-center mb-4">Explore Leadership & Governance</p>
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>

            <Link
              to="/divisions/atidze"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4516] to-[#D63600] opacity-90"></div>
              <div className="relative p-8 h-64 flex flex-col items-center justify-center text-white">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-center">Tanyigbe Atidze</h3>
                <p className="text-sm text-white text-opacity-90 text-center mb-4">Explore Leadership & Governance</p>
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>

            <Link
              to="/divisions/dzafe"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C5F2D] to-[#1D3F1E] opacity-90"></div>
              <div className="relative p-8 h-64 flex flex-col items-center justify-center text-white">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Landmark className="text-white" size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-center">Tanyigbe Dzafe</h3>
                <p className="text-sm text-white text-opacity-90 text-center mb-4">Explore Leadership & Governance</p>
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#E2A201] mb-2">Traditional Governance</h3>
                  <p className="text-lg text-gray-700">
                    The Tanyigbe Traditional Area is governed by a paramount chief and a council of divisional chiefs, maintaining the traditional leadership structure of the Eʋe people.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#4C7000] mb-2">Cultural Identity</h3>
                  <p className="text-lg text-gray-700">
                    As part of the Eʋe ethnic group, Tanyigbe shares language, customs, and cultural practices with other Eʋe communities in Ghana and Togo.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#FF4516] mb-2">Community Structure</h3>
                  <p className="text-lg text-gray-700">
                    The four divisions work together under one traditional authority, each maintaining its identity while contributing to collective development.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Development Focus</h3>
                  <p className="text-lg text-gray-700">
                    The community prioritizes education, healthcare, and infrastructure development while preserving cultural heritage.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/491354591_1229152408784317_3726456993382028091_n.jpg"
                alt="Tanyigbe Community"
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
              The Tanyigbe Community
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The Tanyigbe Traditional Area operates under a traditional governance system with a paramount chief serving as the head of the four divisions.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Each division is represented in the traditional council, ensuring balanced decision-making and preservation of cultural practices across the community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
