import { X, CreditCard, Building, Globe } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900">Support Tanyigbe</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-lg text-gray-700 mb-8">
            Your generous contribution helps us preserve our heritage and build a brighter future for the Tanyigbe community.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-[#E2A201] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#E2A201] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Mobile Money</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">MTN Mobile Money:</p>
                <p className="text-lg font-mono">024 040 2187</p>
                <p className="font-semibold mt-4">Vodafone Cash:</p>
                <p className="text-lg font-mono">054 868 2669</p>
                <p className="text-sm text-gray-600 mt-4">Name: Tanyigbe Development Fund</p>
              </div>
            </div>

            <div className="border-2 border-[#4C7000] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#4C7000] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Building className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Bank Transfer</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Bank Name:</p>
                <p>Ghana Commercial Bank</p>
                <p className="font-semibold mt-3">Account Number:</p>
                <p className="text-lg font-mono">XXXX XXXX XXXX</p>
                <p className="font-semibold mt-3">Account Name:</p>
                <p>Tanyigbe Traditional Council</p>
                <p className="font-semibold mt-3">Branch:</p>
                <p>Ho</p>
              </div>
            </div>

            <div className="border-2 border-[#FF4516] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#FF4516] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">International</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">WorldRemit:</p>
                <p className="mb-4">Send to Ghana</p>
                <p className="font-semibold">Recipient Details:</p>
                <p>Name: Tanyigbe Development</p>
                <p className="text-lg font-mono mt-2">024 040 2187</p>
                <p className="text-sm text-gray-600 mt-4">Available for pickup at any agent location</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Your Impact</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#E2A201] mr-2">•</span>
                <span>Support education through BECE scholarships and school supplies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E2A201] mr-2">•</span>
                <span>Improve healthcare facilities and medical equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E2A201] mr-2">•</span>
                <span>Build infrastructure including roads, water systems, and community centers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E2A201] mr-2">•</span>
                <span>Preserve cultural heritage and support TAYAFEST celebrations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E2A201] mr-2">•</span>
                <span>Boost agricultural development and food security initiatives</span>
              </li>
            </ul>
          </div>

          <p className="text-center text-gray-600 mt-6">
            For more information or to discuss larger contributions, please contact us at{' '}
            <a href="mailto:donations@tanyigbe.com" className="text-[#E2A201] hover:underline">
              donations@tanyigbe.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
