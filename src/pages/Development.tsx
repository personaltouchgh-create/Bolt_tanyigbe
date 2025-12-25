import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GraduationCap, Heart, Building, Sprout } from 'lucide-react';

export default function Development() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#4C7000] to-[#E2A201]">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Development Initiatives</h1>
          <p className="text-xl md:text-2xl">Building a Brighter Future Together</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progress rooted in our values, development that honors our heritage—we're building a Tanyigbe that provides opportunity, health, and prosperity for all while preserving what makes us unique.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <a href="#education" className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">Empowering through knowledge</p>
            </a>

            <a href="#health" className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Health</h3>
              <p className="text-gray-600">Ensuring wellness for all</p>
            </a>

            <a href="#infrastructure" className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Infrastructure</h3>
              <p className="text-gray-600">Building foundations</p>
            </a>

            <a href="#agriculture" className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="bg-[#1F2937] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Agriculture</h3>
              <p className="text-gray-600">Cultivating prosperity</p>
            </a>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="text-white" size={40} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Education & Youth Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Under the leadership of Togbe Kodi Adiko VI, sustained efforts have focused on strengthening education and expanding opportunities for young people in Tanyigbe
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/533048130_1314207883612102_7986478633305916107_n.jpg"
                alt="Education"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#E2A201] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E2A201] bg-opacity-10 rounded-lg p-3 flex-shrink-0">
                    <span className="text-3xl font-bold text-[#E2A201]">8</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Years of BECE Support</h3>
                    <p className="text-gray-700">
                      Eight consecutive years of comprehensive support for BECE candidates across all four basic schools, including learning materials, daily meals during examinations, mathematical sets, and full transportation to and from examination centres.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#4C7000] hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Learning Environment</h3>
                <p className="text-gray-700">
                  Provision of furniture to Tanyigbe Senior High School, contributing to better teaching and learning conditions.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#FF4516] hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Academic Excellence</h3>
                <p className="text-gray-700">
                  Strengthening the NorDU Junior High School Quiz Competition through partnership with UNIWIZ Foundation and other stakeholders to encourage learning, confidence, and healthy academic competition.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#E2A201] to-[#4C7000] rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">Youth Skills & ICT Development</h3>
                  <span className="bg-white text-[#E2A201] text-xs font-bold px-2 py-1 rounded">ONGOING</span>
                </div>
                <p className="leading-relaxed">
                  Ongoing efforts to establish a Youth Skills Development and ICT Centre in Tanyigbe to equip young people with practical skills, digital literacy, and pathways to employment and entrepreneurship.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#E2A201] to-[#4C7000] rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">A Holistic Approach to Youth Empowerment</h3>
              <p className="text-lg leading-relaxed">
                These initiatives reflect a comprehensive strategy that combines academic support with skills development and long-term youth empowerment, building a foundation for sustainable community development and preparing the next generation for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="health" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Healthcare Initiatives
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Good health is fundamental to community wellbeing. We've made significant progress with a newly built community clinic managed by a Physician Assistant, ensuring that every Tanyigbe resident has access to quality healthcare services close to home.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Health Programs:</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span><strong>Community Clinic:</strong> Our newly built clinic, professionally managed by a Physician Assistant, provides accessible primary healthcare services to all residents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span><strong>NHIS Registration Drives:</strong> Ensuring all community members are enrolled in the National Health Insurance Scheme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span><strong>Health Screening Programs:</strong> Regular free health checks for common conditions like diabetes, hypertension, and malaria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span><strong>Maternal Health:</strong> Special programs supporting pregnant women and new mothers with care and education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span><strong>Disease Prevention:</strong> Vaccination drives, sanitation education, and preventive health campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4516] mr-2 text-xl">•</span>
                  <span><strong>Emergency Response:</strong> Improving access to emergency medical care and ambulance services</span>
                </li>
              </ul>

              <div className="bg-[#FF4516] bg-opacity-10 rounded-lg p-6">
                <p className="text-gray-900 font-semibold">
                  "A healthy community is a productive community. We're committed to ensuring that healthcare is accessible and affordable for all our people."
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-[#FF4516] to-[#E2A201] flex items-center justify-center">
              <Heart className="text-white opacity-20" size={120} />
            </div>
          </div>
        </div>
      </section>

      <section id="infrastructure" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-[#4C7000] to-[#E2A201] flex items-center justify-center">
              <Building className="text-white opacity-20" size={120} />
            </div>
            <div>
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building className="text-white" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Infrastructure Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Strong infrastructure is the backbone of community development. A major milestone is the Tanyigbe town roads project—an initiative that began 10 years ago and has been persistently pursued through the years. This project has been awarded for construction under President John D. Mahama's government Big Push agenda, demonstrating our community's commitment to sustained advocacy for development.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Infrastructure Projects:</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span><strong>Town Roads Construction:</strong> Our decade-long advocacy has borne fruit with the Tanyigbe town roads project awarded under the Big Push agenda for construction, improving connectivity throughout our community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span><strong>Youth Development & ICT Centre:</strong> Multipurpose facility being built in partnership with Eban Capital to equip youth with modern skills and technology for the digital age</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span><strong>Water Systems:</strong> Expanding access to clean water through boreholes, pipe systems, and storage tanks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span><strong>Electricity Extension:</strong> Working to ensure all households have access to reliable electricity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span><strong>Community Centers:</strong> Building and renovating spaces for meetings, celebrations, and community activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4C7000] mr-2 text-xl">•</span>
                  <span><strong>Sanitation Systems:</strong> Installing proper waste management and public toilet facilities</span>
                </li>
              </ul>

              <div className="bg-[#4C7000] bg-opacity-10 rounded-lg p-6">
                <p className="text-gray-900 font-semibold">
                  "Good infrastructure doesn't just make life easier—it creates opportunities for economic growth and improves the wellbeing of every community member."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agriculture" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#1F2937] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sprout className="text-white" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Agricultural Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Agriculture is the lifeblood of our industrious community. The people of Tanyigbe engage in diverse economic activities including agriculture (both food and cash crops), masonry, carpentry, and trading. Cocoa stands as our main cash crop, while farm produce from Tanyigbe is primarily sold at the Ho market, contributing significantly to the regional economy.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Agriculture Programs:</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Cocoa Production:</strong> As our main cash crop, cocoa farming receives focused support through modern farming techniques, inputs, and rehabilitation programs to improve yields and quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Food Crop Production:</strong> Promoting cultivation of yam, cassava, maize, and vegetables for food security and commercial sale at Ho market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Market Linkages:</strong> Our strategic connection to Ho market provides farmers with reliable outlets for their produce, supporting the regional economy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Diverse Livelihoods:</strong> Supporting masonry, carpentry, and trading alongside agriculture to ensure economic diversity and resilience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Youth in Agriculture:</strong> Encouraging young people to see farming and related trades as viable and profitable careers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Farmer Training:</strong> Educational programs on modern farming techniques, pest management, and crop diversification to improve productivity</span>
                </li>
              </ul>

              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-gray-900 font-semibold">
                  "Agriculture feeds our families, sustains our economy, and connects us to our land. Investing in agriculture is investing in our future."
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-[#1F2937] to-[#4C7000] flex items-center justify-center">
              <Sprout className="text-white opacity-20" size={120} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E2A201] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl mb-8">
              These development initiatives require resources, expertise, and commitment. Whether through financial support, technical assistance, or volunteer time, your contribution makes a real difference.
            </p>
            <p className="text-lg mb-8">
              Join us in building a Tanyigbe where every child gets an education, every person has access to healthcare, infrastructure supports growth, and agriculture provides prosperity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#E2A201] px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
                Support Development
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-[#E2A201] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
