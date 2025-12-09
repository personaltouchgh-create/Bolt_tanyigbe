import { useState } from 'react';
import { Globe, Users, Heart, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Diaspora() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    division: '',
    location: '',
    profession: '',
    interests: '',
    receiveUpdates: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('diaspora_registrations')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone || null,
            division_of_origin: formData.division,
            current_location: formData.location,
            profession: formData.profession || null,
            contribution_interests: formData.interests || null,
            receive_updates: formData.receiveUpdates,
          }
        ]);

      if (error) throw error;

      alert('Thank you for registering with the Diaspora Network! We will keep you updated on events and opportunities.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        division: '',
        location: '',
        profession: '',
        interests: '',
        receiveUpdates: true
      });
    } catch (error) {
      console.error('Error submitting registration:', error);
      alert('There was an error submitting your registration. Please try again or contact us directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://placehold.co/1920x600/E2A201/FFF?text=Diaspora+Network)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Diaspora Network</h1>
          <p className="text-xl md:text-2xl">Tanyigbe Sons & Daughters Across the Globe</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              No Matter Where You Are, You're Part of Tanyigbe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Accra to London, New York to Toronto, Sydney to Dubai—Tanyigbe people are making their mark across the world while staying connected to their roots.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#E2A201] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-700">
                Our people span six continents, bringing Tanyigbe values to every corner of the world
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#4C7000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Strong Network</h3>
              <p className="text-gray-700">
                Connect with fellow Tanyigbe people wherever you are through our diaspora associations
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#FF4516] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Giving Back</h3>
              <p className="text-gray-700">
                Diaspora contributions drive major development projects back home
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#1F2937] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Stay Connected</h3>
              <p className="text-gray-700">
                Regular updates, events, and communication keep you engaged with home
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
                Diaspora Associations
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tanyigbe diaspora associations exist in major cities around the world, providing a home away from home where you can connect with fellow community members, celebrate our culture, and coordinate contributions to development back home.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">North America</h3>
                  <p className="text-gray-700">Active chapters in New York, Washington DC, Toronto, and other major cities</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Europe</h3>
                  <p className="text-gray-700">Strong presence in London, Amsterdam, Hamburg, and other European centers</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Ghana (Urban Centers)</h3>
                  <p className="text-gray-700">Accra, Kumasi, and other cities host Tanyigbe residents maintaining strong ties</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Other Regions</h3>
                  <p className="text-gray-700">Growing communities in Australia, Middle East, and across Africa</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x600/4C7000/FFF?text=Diaspora+Community"
                alt="Diaspora Community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ways to Stay Engaged
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Distance doesn't diminish your connection to Tanyigbe. Here's how you can stay involved and make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E2A201] bg-opacity-10 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Financial Contributions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Support development projects through regular or one-time donations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fund scholarships for students</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Contribute to infrastructure improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Support healthcare and emergency needs</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#4C7000] bg-opacity-10 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Skills & Expertise</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Offer professional advice and mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Share technical expertise for projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide career guidance to youth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Connect opportunities and networks</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FF4516] bg-opacity-10 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Community Participation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Join your local diaspora association</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Attend and organize cultural events</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Participate in decision-making forums</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Help coordinate group activities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Cultural Ambassadorship</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Teach Eʋe language to your children</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Share our culture in your community</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Organize TAYAFEST celebrations abroad</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Maintain traditions in your household</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E2A201] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Register with the Diaspora Network
              </h2>
              <p className="text-xl text-gray-600">
                Let us know where you are and how you'd like to be involved. Registration helps us keep you informed about events, opportunities, and developments back home.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Division of Origin *</label>
                    <select
                      name="division"
                      required
                      value={formData.division}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                    >
                      <option value="">Select your division</option>
                      <option value="etoe">Tanyigbe-Etoe</option>
                      <option value="gbogame">Tanyigbe-Gbogame</option>
                      <option value="avedome">Tanyigbe-Avedome</option>
                      <option value="dugame">Tanyigbe-Dugame</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Location (City, Country) *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., London, United Kingdom"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Profession / Field of Work</label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">How would you like to contribute?</label>
                  <textarea
                    name="interests"
                    rows={4}
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="Tell us about your interests, skills, or how you'd like to support Tanyigbe..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="receiveUpdates"
                    name="receiveUpdates"
                    checked={formData.receiveUpdates}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="receiveUpdates" className="text-sm text-gray-700">
                    I'd like to receive updates about Tanyigbe events, development projects, and community news
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E2A201] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Registering...' : 'Register with Diaspora Network'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              You're Always Welcome Home
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              While you may be thousands of miles away, Tanyigbe will always be home. We welcome you back for visits, festivals, retirement, or simply to reconnect with your roots. Your experiences abroad enrich our community, and your connection to home keeps our traditions alive.
            </p>
            <p className="text-2xl font-serif text-[#E2A201]">
              "Aƒe le nya me, eye ame le aƒe me"
            </p>
            <p className="text-lg text-gray-300 mt-4">
              There's a home in the world, and a person at home
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
