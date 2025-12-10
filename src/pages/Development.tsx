import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GraduationCap, Heart, Building, Sprout, Award, Globe } from 'lucide-react';

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
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://placehold.co/1920x600/4C7000/FFF?text=Development)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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

      <section id="education" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/533048130_1314207883612102_7986478633305916107_n.jpg"
                alt="Education"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Education Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Education is the foundation of progress. Tanyigbe Traditional Area boasts comprehensive educational facilities: 4 Kindergartens, 4 Primary Schools, 4 Junior High Schools, and 1 Senior High School. Our investment in education has produced many citizens with advanced degrees including PhDs, Professors, and various professional qualifications who contribute meaningfully to national development.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Education Initiatives:</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>BECE Support Programs:</strong> Providing study materials, extra classes, and exam preparation for all students preparing for basic education exams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Scholarship Fund:</strong> Financial assistance for brilliant but needy students to continue their education at secondary and tertiary levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Youth Development & ICT Centre:</strong> In partnership with Eban Capital, we're building a multipurpose Youth Development & ICT centre to equip the youth with modern skills and technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>School Infrastructure:</strong> Renovating classrooms, building libraries, and improving learning facilities across all four divisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Teacher Support:</strong> Incentives and accommodations to attract and retain quality teachers in our schools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E2A201] mr-2 text-xl">•</span>
                  <span><strong>Youth-Centered Programs:</strong> Our annual yam festival celebrations emphasize youth development, cultural preservation, and serve as homecoming events to inspire the next generation of leaders</span>
                </li>
              </ul>

              <div className="bg-[#E2A201] bg-opacity-10 rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-4">
                  "Education is not just about passing exams—it's about empowering our people to reach their full potential and contribute meaningfully to our community's development."
                </p>
                <p className="text-gray-700 text-sm">
                  Current leaders focus on developing the skills of youth while consciously mobilizing them to embrace our tradition, culture and customs as future leaders. Our annual yam festival celebrations emphasize these areas with youth-centered activities that also serve as homecoming events.
                </p>
              </div>
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
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400/FF4516/FFF?text=Healthcare+Services"
                alt="Healthcare"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="infrastructure" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400/4C7000/FFF?text=Infrastructure+Development"
                alt="Infrastructure"
                className="w-full h-full object-cover"
              />
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
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400/1F2937/FFF?text=Agriculture+Programs"
                alt="Agriculture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="distinguished-natives" className="py-20 bg-gradient-to-br from-[#1F2937] via-[#4C7000] to-[#E2A201] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="bg-white p-4 rounded-full">
                <Award className="text-[#E2A201]" size={48} />
              </div>
              <div className="bg-white p-4 rounded-full">
                <Globe className="text-[#4C7000]" size={48} />
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Distinguished Natives Contributing to Development
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Tanyigbe natives serve with distinction in various professional capacities across Ghana and internationally, making significant contributions to national development in political, cultural, educational, and professional sectors.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Gen. H. K Anyidoho (rtd)', field: 'Military & Public Service' },
                  { name: 'Captain Simon D.K Kpe', field: 'Military Service' },
                  { name: 'Sam Kabo', field: 'Public Service' },
                  { name: 'Seth D. Kpodo', field: 'Professional Service' },
                  { name: 'Togbe Kwasi Tutu II', field: 'Traditional Leadership' },
                  { name: 'Winfred K. Bimah', field: 'Professional Service' },
                  { name: 'P.D.K Abiwu', field: 'Public Service' },
                  { name: 'Mama (Dr) Abra Hokor I', field: 'Healthcare & Leadership' },
                  { name: 'Justice Wutor', field: 'Judiciary' },
                  { name: 'Ing Sammy Akuaku', field: 'Engineering' },
                  { name: 'Prof D. Dzansi', field: 'Academia' },
                  { name: 'Wisdom Kofi Xetor', field: 'Professional Service' },
                  { name: 'Prof V.C Wutor', field: 'Academia' },
                  { name: 'Victor Akudey', field: 'Professional Service' },
                  { name: 'Rev Emmanuel Tide', field: 'Religious Leadership' },
                  { name: 'Zikpuitor Enos Adiko Mensa', field: 'Public Service' },
                  { name: 'S.Y Akafia', field: 'Professional Service' },
                  { name: 'Emmanuel Kwami Wutor', field: 'Professional Service' },
                  { name: 'Hon. Ivy Adiko', field: 'Politics & Governance' },
                  { name: 'Robertson Kwasi Kpatsa', field: 'Professional Service' },
                  { name: 'Ms Dinah Adiko', field: 'Professional Service' },
                  { name: 'Koku Anyidoho', field: 'Politics & Communications' },
                  { name: 'Amorin Koto', field: 'Professional Service' },
                  { name: 'Aaron Danso', field: 'Professional Service' }
                ].map((person, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-l-4 border-[#E2A201] hover:shadow-lg transition-all hover:scale-105">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <Award className="text-[#E2A201]" size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#E2A201] transition-colors">
                            {person.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {person.field}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-[#E2A201] to-[#4C7000] rounded-xl p-8 text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">A Legacy of Excellence</h3>
                    <p className="text-lg leading-relaxed opacity-95">
                      These distinguished individuals, along with many more Tanyigbe natives, continue to bring honor to our community through their exceptional service and contributions across diverse fields. They serve as role models, demonstrating the values of excellence, dedication, and service that define the Tanyigbe spirit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 italic">
                  This list includes but is not limited to these distinguished names. Many more Tanyigbe sons and daughters continue to excel in various fields, contributing to the development of Ghana and beyond.
                </p>
              </div>
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
