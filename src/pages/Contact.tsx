import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again or contact us directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://placehold.co/1920x600/E2A201/FFF?text=Contact+Us)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl">We'd Love to Hear From You</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you have questions, want to contribute to our development projects, or simply want to connect with the Tanyigbe community, we're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#E2A201] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-700">
                      Tanyigbe Traditional Area<br />
                      Hohoe Municipality<br />
                      Volta Region, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#4C7000] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-700">
                      Main Line: +233 XX XXX XXXX<br />
                      Traditional Council: +233 XX XXX XXXX<br />
                      Development Office: +233 XX XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#FF4516] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-700">
                      General Inquiries: <a href="mailto:info@tanyigbe.org" className="text-[#E2A201] hover:underline">info@tanyigbe.org</a><br />
                      Development Projects: <a href="mailto:development@tanyigbe.org" className="text-[#E2A201] hover:underline">development@tanyigbe.org</a><br />
                      Diaspora Network: <a href="mailto:diaspora@tanyigbe.org" className="text-[#E2A201] hover:underline">diaspora@tanyigbe.org</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1F2937] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Facebook className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                    <p className="text-gray-700">
                      Follow us for updates, event announcements, and community news:<br />
                      <a href="#" className="text-[#E2A201] hover:underline">Facebook: Tanyigbe Traditional Area</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-[#E2A201] bg-opacity-10 rounded-lg p-6">
                <h4 className="font-serif text-2xl font-bold text-gray-900 mb-4">Office Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <p className="text-sm mt-4">
                    Traditional Council meetings are held on the first Saturday of each month
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg shadow-lg p-8">
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="development">Development Projects</option>
                      <option value="diaspora">Diaspora Network</option>
                      <option value="tourism">Tourism Information</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donation Information</option>
                      <option value="cultural">Cultural Events</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E2A201] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} className="mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Division Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Each of our four divisions has dedicated leadership. For specific inquiries related to a particular division, you can reach out directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 text-center">Tanyigbe-Etoe</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p className="text-center"><strong>Chief's Palace</strong></p>
                <p>Contact: +233 XX XXX XXXX</p>
                <p>Email: etoe@tanyigbe.org</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 text-center">Tanyigbe-Gbogame</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p className="text-center"><strong>Chief's Palace</strong></p>
                <p>Contact: +233 XX XXX XXXX</p>
                <p>Email: gbogame@tanyigbe.org</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 text-center">Tanyigbe-Avedome</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p className="text-center"><strong>Chief's Palace</strong></p>
                <p>Contact: +233 XX XXX XXXX</p>
                <p>Email: avedome@tanyigbe.org</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-[#1F2937] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 text-center">Tanyigbe-Dugame</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p className="text-center"><strong>Chief's Palace</strong></p>
                <p>Contact: +233 XX XXX XXXX</p>
                <p>Email: dugame@tanyigbe.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E2A201] bg-opacity-10 rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visit Us
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                The best way to experience Tanyigbe is to visit us in person. Whether you're coming for tourism, cultural exploration, or to reconnect with your roots, you'll find a warm welcome waiting for you.
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                We can arrange guided tours of our four divisions, visits to local attractions, participation in cultural activities, and meetings with traditional leaders and community members.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@tanyigbe.org"
                  className="inline-flex items-center justify-center bg-[#E2A201] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  <Mail size={20} className="mr-2" />
                  Email Us
                </a>
                <a
                  href="tel:+233XXXXXXXXX"
                  className="inline-flex items-center justify-center border-2 border-[#E2A201] text-[#E2A201] px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#E2A201] hover:text-white transition-colors"
                >
                  <Phone size={20} className="mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl font-serif text-[#E2A201] mb-2">
              "Míewoa ame sia ame"
            </p>
            <p className="text-lg text-gray-300">
              We welcome everyone
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
