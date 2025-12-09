import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    interests: '',
    availability: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('volunteers')
        .insert([
          {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            skills: formData.skills.split(',').map(s => s.trim()),
            areas_of_interest: [formData.interests],
            availability: formData.availability,
            experience: formData.message || null,
          }
        ]);

      if (error) throw error;

      alert('Thank you for your interest! We will contact you soon.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        skills: '',
        interests: '',
        availability: '',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Error submitting volunteer application:', error);
      alert('There was an error submitting your application. Please try again or contact us directly via email.');
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900">Volunteer with Us</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-lg text-gray-700 mb-6">
            Join us in making a difference in the Tanyigbe community. Whether you're local or in the diaspora, your skills and passion can help shape our future.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
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
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                Current Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                placeholder="City, Country"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-2">
                Skills & Expertise *
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                required
                placeholder="e.g., Teaching, Healthcare, Engineering, IT, Marketing"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-semibold text-gray-700 mb-2">
                Areas of Interest *
              </label>
              <select
                id="interests"
                name="interests"
                required
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
              >
                <option value="">Select an area</option>
                <option value="education">Education</option>
                <option value="health">Health & Medical</option>
                <option value="infrastructure">Infrastructure Development</option>
                <option value="agriculture">Agriculture</option>
                <option value="culture">Cultural Preservation</option>
                <option value="youth">Youth Development</option>
                <option value="technology">Technology & Innovation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                Availability *
              </label>
              <select
                id="availability"
                name="availability"
                required
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
              >
                <option value="">Select availability</option>
                <option value="full-time">Full-time (on-site)</option>
                <option value="part-time">Part-time (on-site)</option>
                <option value="remote">Remote volunteer</option>
                <option value="occasional">Occasional events</option>
                <option value="summer">Summer/Holiday periods</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Why do you want to volunteer?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your motivation and how you'd like to contribute..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E2A201] focus:border-transparent"
              ></textarea>
            </div>

            <div className="bg-[#E2A201] bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• We'll review your application within 5-7 business days</li>
                <li>• You'll receive an email with next steps</li>
                <li>• We may schedule a brief call to discuss opportunities</li>
                <li>• Welcome to the Tanyigbe volunteer family!</li>
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#4C7000] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} className="mr-2" />
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
