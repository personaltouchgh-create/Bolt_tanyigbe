import { useEffect, useState, useRef } from 'react';
import { X, Heart } from 'lucide-react';

interface GoodwillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GoodwillModal({ isOpen, onClose }: GoodwillModalProps) {
  const [timeLeft, setTimeLeft] = useState(15);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && !isPaused) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            onClose();
            return 15;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isOpen, isPaused, onClose]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleClose = () => {
    setTimeLeft(15);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400 p-8 text-center">
            <Heart className="text-white mx-auto mb-4" size={48} />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
              Goodwill Message
            </h2>
            <p className="text-white text-lg">
              From the Traditional Council and People of Tanyigbe
            </p>
          </div>

          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400 rounded-full blur-xl opacity-30"></div>
                <img
                  src="/48 copy.jpg"
                  alt="His Royal Highness Togbega Kodi Adiko VI"
                  className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                His Royal Highness Togbega Kodi Adiko VI
              </h3>
              <p className="text-lg text-gray-600">
                Paramount Chief, Tanyigbe Traditional Area
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                On behalf of the Traditional Council and the people of Tanyigbe, we extend warm greetings to all residents, friends, and well-wishers of our community.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Tanyigbe's strength lies in its people, shared values, and rich heritage. As we honour our history and culture, we also reaffirm our collective commitment to unity, peace, and development. Together, we can continue to build a community that supports education, wellbeing, and opportunities for present and future generations.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                We welcome all who seek to engage with Tanyigbe in the spirit of cooperation, respect, and shared progress.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-base font-bold text-gray-900">His Royal Highness Togbega Kodi Adiko VI</p>
              <p className="text-sm text-gray-600">Paramount Chief, Tanyigbe Traditional Area</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-sm text-gray-500">
                {!isPaused && (
                  <span>Auto-closing in {timeLeft} seconds...</span>
                )}
                {isPaused && (
                  <span>Timer paused</span>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleClose}
                  className="px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
