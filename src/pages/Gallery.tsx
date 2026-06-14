import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Culture
  { id: 1, src: '/gemini_generated_image_zc992mzc992mzc99.webp', alt: 'His Royal Highness Togbega Kodi Adiko VI', category: 'Culture' },
  { id: 4, src: '/476316223_1169596868073205_3511019283656705740_n.jpg', alt: 'Traditional Ceremony', category: 'Culture' },
  { id: 6, src: '/480937541_1187395832959975_5640828220721013428_n.jpg', alt: 'Cultural Event', category: 'Culture' },
  { id: 9, src: '/493059710_1229153082117583_6095061872545654825_n.jpg', alt: 'Cultural Celebration', category: 'Culture' },
  { id: 13, src: '/6.jpg', alt: 'Cultural Heritage', category: 'Culture' },
  { id: 14, src: '/8.jpg', alt: 'Traditional Setting', category: 'Culture' },
  { id: 19, src: '/93.jpg', alt: 'Cultural Practice', category: 'Culture' },
  { id: 23, src: '/WhatsApp_Image_2026-05-20_at_09.50.19_(1).jpeg', alt: 'Paramount Chief at Durbar', category: 'Culture' },
  { id: 25, src: '/205855838_333748261658074_5783774750889541290_n.jpg', alt: 'Togbe Kwasi Adiko V Portrait', category: 'Culture' },
  { id: 30, src: '/WhatsApp_Image_2026-05-20_at_09.50.18_(1).jpeg', alt: 'Queenmother in Traditional Procession', category: 'Culture' },
  { id: 31, src: '/WhatsApp_Image_2026-05-20_at_09.50.19_(2).jpeg', alt: 'Chiefs at Cultural Gathering', category: 'Culture' },
  { id: 34, src: '/WhatsApp_Image_2026-05-20_at_09.50.20.jpeg', alt: 'Sword Ceremony Celebration', category: 'Culture' },
  { id: 36, src: '/WhatsApp_Image_2026-05-20_at_09.50.29_(1).jpeg', alt: 'Traditional Gold Regalia', category: 'Culture' },
  { id: 39, src: '/WhatsApp_Image_2026-05-20_at_09.50.24_(2).jpeg', alt: 'Traditional Elders in Ritual', category: 'Culture' },
  { id: 40, src: '/WhatsApp_Image_2026-05-20_at_09.50.20_(2).jpeg', alt: 'Enstoolment Ceremony', category: 'Culture' },
  { id: 41, src: '/WhatsApp_Image_2026-05-20_at_09.50.18.jpeg', alt: 'Divisional Chiefs Portrait', category: 'Culture' },
  { id: 43, src: '/WhatsApp_Image_2026-05-20_at_09.50.17_(2).jpeg', alt: 'Traditional Enstoolment Rites', category: 'Culture' },
  { id: 48, src: '/WhatsApp_Image_2026-05-20_at_09.50.18_(2).jpeg', alt: 'Newly Enstooled Chief with Elders', category: 'Culture' },
  { id: 49, src: '/WhatsApp_Image_2026-05-20_at_09.50.19.jpeg', alt: 'Traditional Oath Ceremony', category: 'Culture' },
  { id: 51, src: '/WhatsApp_Image_2026-05-20_at_09.50.23_(2).jpeg', alt: 'Young Girls in Traditional Attire', category: 'Culture' },
  { id: 55, src: '/WhatsApp_Image_2026-05-20_at_09.50.16_(1).jpeg', alt: 'Paramount Chief at Grand Durbar', category: 'Culture' },
  { id: 58, src: '/474825966_635021709046857_7858920453452825259_n.jpg', alt: 'Togbega Kodi Adiko VI in Royal Regalia', category: 'Culture' },
  { id: 59, src: '/WhatsApp_Image_2026-05-20_at_09.50.22_(2).jpeg', alt: 'Togbe Kodi Adiko V in Kente', category: 'Culture' },
  { id: 61, src: '/WhatsApp_Image_2026-05-20_at_09.50.16.jpeg', alt: 'Traditional Libation Ceremony', category: 'Culture' },
  { id: 62, src: '/WhatsApp_Image_2026-05-20_at_09.50.17.jpeg', alt: 'Elders Greeting at Durbar', category: 'Culture' },
  { id: 24, src: '/WhatsApp_Image_2026-05-20_at_09.50.25.jpeg', alt: 'Traditional Council Group Photo', category: 'Culture' },
  { id: 50, src: '/WhatsApp_Image_2026-05-20_at_09.50.24_(3).jpeg', alt: 'Community Women at Cultural Gathering', category: 'Culture' },
  { id: 63, src: '/gallery/uncategorized/473804318_635023142380047_3697497549138263300_n.jpg', alt: 'Togbega Kodi Adiko VI Portrait I', category: 'Culture' },
  { id: 64, src: '/gallery/uncategorized/475081060_635023069046721_5902693056686679833_n.jpg', alt: 'Togbega Kodi Adiko VI Portrait II', category: 'Culture' },
  { id: 65, src: '/gallery/uncategorized/474080324_635023035713391_3431691159067954397_n.jpg', alt: 'Togbega Kodi Adiko VI Portrait III', category: 'Culture' },
  { id: 66, src: '/gallery/uncategorized/475081889_635023029046725_730733320212879841_n.jpg', alt: 'Togbega Kodi Adiko VI at Durbar', category: 'Culture' },
  { id: 68, src: '/gallery/uncategorized/475122631_635023032380058_6059448603563783698_n.jpg', alt: 'Togbega Kodi Adiko VI Portrait IV', category: 'Culture' },
  { id: 69, src: '/gallery/uncategorized/474712704_635023025713392_324684039358275883_n.jpg', alt: 'Togbega Kodi Adiko VI Close-Up', category: 'Culture' },
  { id: 70, src: '/gallery/uncategorized/474748758_635023132380048_6664869511482016120_n.jpg', alt: 'Togbega Kodi Adiko VI Portrait V', category: 'Culture' },
  { id: 71, src: '/gallery/uncategorized/474825966_635021709046857_7858920453452825259_n.jpg', alt: 'Togbega Kodi Adiko VI Waving', category: 'Culture' },
  { id: 72, src: '/gallery/uncategorized/WhatsApp_Image_2026-05-20_at_09.50.22_(2).jpeg', alt: 'Togbe Kodi Adiko V in Kente Cloth', category: 'Culture' },
  // Yam Festival Cultural Ceremony
  { id: 100, src: '/gallery/uncategorized/57.jpg', alt: 'Yam Festival — Spirit Dancer with Yellow Scepter', category: 'Culture' },
  { id: 101, src: '/gallery/uncategorized/58.jpg', alt: 'Yam Festival — Chief in Traditional Regalia', category: 'Culture' },
  { id: 102, src: '/gallery/uncategorized/59.jpg', alt: 'Yam Festival — Women Carrying Offerings', category: 'Culture' },
  { id: 103, src: '/gallery/uncategorized/60.jpg', alt: 'Yam Festival — Women in Red Traditional Procession', category: 'Culture' },
  { id: 104, src: '/gallery/uncategorized/61.jpg', alt: 'Yam Festival — Spirit Dancer with Gold Staff', category: 'Culture' },
  { id: 105, src: '/gallery/uncategorized/62.jpg', alt: 'Yam Festival — Spirit Dancer at Durbar Grounds', category: 'Culture' },
  { id: 106, src: '/gallery/uncategorized/63.jpg', alt: 'Yam Festival — Elder in Ceremonial Red Hat', category: 'Culture' },
  { id: 107, src: '/gallery/uncategorized/64.jpg', alt: 'Yam Festival — Women Seated in Red Attire', category: 'Culture' },
  { id: 108, src: '/gallery/uncategorized/65.jpg', alt: 'Yam Festival — Traditional Warriors with Leopard Skin', category: 'Culture' },
  { id: 109, src: '/gallery/uncategorized/66.jpg', alt: 'Yam Festival — Three Warriors with Spears and Shields', category: 'Culture' },
  { id: 110, src: '/gallery/uncategorized/67.jpg', alt: 'Yam Festival — Warrior with Shield and Spear Portrait', category: 'Culture' },
  { id: 111, src: '/gallery/uncategorized/68.jpg', alt: 'Yam Festival — Woman Carrying Calabash', category: 'Culture' },
  { id: 112, src: '/gallery/uncategorized/69.jpg', alt: 'Yam Festival — Women Performing with Gourds', category: 'Culture' },
  { id: 113, src: '/gallery/uncategorized/70.jpg', alt: 'Yam Festival — Drummer in Traditional Red Cloth', category: 'Culture' },
  { id: 114, src: '/gallery/uncategorized/71.jpg', alt: 'Yam Festival — Warriors with Yellow Spears', category: 'Culture' },
  { id: 115, src: '/gallery/uncategorized/72.jpg', alt: 'Yam Festival — Spirit Dancer in Leopard Hat', category: 'Culture' },
  // Durbar & Procession
  { id: 120, src: '/gallery/uncategorized/8.jpg', alt: 'Durbar — Chief in Red Leopard Hat Under Royal Umbrella', category: 'Culture' },
  { id: 121, src: '/gallery/uncategorized/9.jpg', alt: 'Tanyigbe Durbar — Procession with Ceremonial Bowl', category: 'Culture' },
  { id: 122, src: '/gallery/uncategorized/12.jpg', alt: 'Chief Raising Fist in Traditional Street Procession', category: 'Culture' },
  { id: 123, src: '/gallery/uncategorized/13.jpg', alt: 'Elder Woman in Traditional Beads at Ceremony', category: 'Culture' },
  { id: 124, src: '/gallery/uncategorized/14.jpg', alt: 'Chief in Cowrie Crown Speaking with Guest', category: 'Culture' },
  { id: 125, src: '/gallery/uncategorized/15.jpg', alt: 'Women in Kente and Gold Beads at Traditional Gathering', category: 'Culture' },
  { id: 126, src: '/gallery/uncategorized/16.jpg', alt: 'Community Gathering Under Canopy in Traditional Attire', category: 'Culture' },
  { id: 127, src: '/gallery/uncategorized/17.jpg', alt: 'Elder Chief Holding Golden Staff with Elders', category: 'Culture' },
  { id: 128, src: '/gallery/uncategorized/18.jpg', alt: 'Smiling Chief in Kente Regalia at Procession', category: 'Culture' },
  { id: 129, src: '/gallery/uncategorized/19.jpg', alt: 'Chief in Kente Cloth Holding Ceremonial Rattle', category: 'Culture' },
  { id: 130, src: '/gallery/uncategorized/21.jpg', alt: 'Queenmother Smiling at Traditional Gathering', category: 'Culture' },
  { id: 131, src: '/gallery/uncategorized/22.jpg', alt: 'Woman in Kente and Coral Beads at Outdoor Ceremony', category: 'Culture' },
  { id: 132, src: '/gallery/uncategorized/23.jpg', alt: 'Woman in Green Kente with Gold Jewelry at Gathering', category: 'Culture' },
  { id: 133, src: '/gallery/uncategorized/25.jpg', alt: 'Community Dignitaries Seated at Outdoor Gathering', category: 'Culture' },
  { id: 134, src: '/gallery/uncategorized/26.jpg', alt: 'Chief in Cowrie Crown with Guest at Ceremony', category: 'Culture' },
  { id: 135, src: '/gallery/uncategorized/27.jpg', alt: 'Young Woman in Kente at Traditional Ceremony', category: 'Culture' },
  { id: 136, src: '/gallery/uncategorized/28.jpg', alt: 'Woman in Kente Attire at Traditional Gathering', category: 'Culture' },
  { id: 137, src: '/gallery/uncategorized/29.jpg', alt: 'Yam Festival — Warrior with Black Face Paint and Gold Spear', category: 'Culture' },
  // Events
  { id: 3, src: '/475764112_1168645144835044_4633959021770456733_n.jpg', alt: 'TAYAFEST Celebration', category: 'Events' },
  { id: 7, src: '/491354591_1229152408784317_3726456993382028091_n.jpg', alt: 'Traditional Dance Performance', category: 'Events' },
  { id: 10, src: '/533048130_1314207883612102_7986478633305916107_n.jpg', alt: 'Festival Performance', category: 'Events' },
  { id: 26, src: '/WhatsApp_Image_2026-05-20_at_09.50.19_(3).jpeg', alt: 'Traditional Drumming Procession', category: 'Events' },
  { id: 28, src: '/WhatsApp_Image_2026-05-20_at_09.50.27_(3).jpeg', alt: 'Citation Award Ceremony', category: 'Events' },
  { id: 32, src: '/WhatsApp_Image_2026-05-20_at_09.50.27_(2).jpeg', alt: 'Citation Presentation Ceremony', category: 'Events' },
  { id: 33, src: '/WhatsApp_Image_2026-05-20_at_09.50.21_(2).jpeg', alt: 'Festival Procession Through Town', category: 'Events' },
  { id: 38, src: '/WhatsApp_Image_2026-05-20_at_09.50.20_(3).jpeg', alt: 'Women in Festival March', category: 'Events' },
  { id: 44, src: '/WhatsApp_Image_2026-05-20_at_09.50.21.jpeg', alt: 'Togbe Kodi Adiko VI 5th Anniversary Crowd', category: 'Events' },
  { id: 47, src: '/WhatsApp_Image_2026-05-20_at_09.50.22_(3).jpeg', alt: 'Anniversary Football Competition Medals', category: 'Events' },
  { id: 52, src: '/WhatsApp_Image_2026-05-20_at_09.50.21_(2) copy.jpeg', alt: 'Festival Street Procession', category: 'Events' },
  { id: 54, src: '/WhatsApp_Image_2026-05-20_at_09.50.21_(3).jpeg', alt: 'Welcome Home Togbe Kodi Adiko VI Banner', category: 'Events' },
  { id: 56, src: '/WhatsApp_Image_2026-05-20_at_09.50.23.jpeg', alt: 'Football Trophy Celebration', category: 'Events' },
  { id: 60, src: '/WhatsApp_Image_2026-05-20_at_09.50.16_(2).jpeg', alt: 'Community Leaders Meeting', category: 'Events' },
  { id: 2, src: '/476224992_1170021084697450_390316064744204993_n.jpg', alt: 'Tanyigbe Community Gathering', category: 'Events' },
  { id: 5, src: '/476610156_1170020774697481_3737999403323565257_n.jpg', alt: 'Community Gathering', category: 'Events' },
  { id: 8, src: '/491399177_1229152465450978_4812860042655025826_n.jpg', alt: 'Community Members at Event', category: 'Events' },
  { id: 18, src: '/48.jpg', alt: 'Community Event', category: 'Events' },
  { id: 67, src: '/gallery/uncategorized/475149727_635023019046726_515713267222607892_n.jpg', alt: 'Grand Durbar Gathering', category: 'Events' },
  // Health Walk
  { id: 76, src: '/gallery/uncategorized/76.jpg', alt: 'Annual Health Walk — Community March', category: 'Events' },
  { id: 77, src: '/gallery/uncategorized/77.jpg', alt: 'Annual Health Walk — Celebrations at the Finish', category: 'Events' },
  { id: 78, src: '/gallery/uncategorized/78.jpg', alt: 'Annual Health Walk — Community Leaders Participating', category: 'Events' },
  { id: 79, src: '/gallery/uncategorized/79.jpg', alt: 'Annual Health Walk — Participants in Motion', category: 'Events' },
  { id: 80, src: '/gallery/uncategorized/80.jpg', alt: 'Annual Health Walk — March Through Tanyigbe', category: 'Events' },
  { id: 81, src: '/gallery/uncategorized/81.jpg', alt: 'Annual Health Walk — Pink Team Group Photo', category: 'Events' },
  { id: 82, src: '/gallery/uncategorized/82.jpg', alt: 'Annual Health Walk — Lady Smiling at the Walk', category: 'Events' },
  { id: 83, src: '/gallery/uncategorized/83.jpg', alt: 'Annual Health Walk — Leaders Address the Crowd', category: 'Events' },
  { id: 84, src: '/gallery/uncategorized/84.jpg', alt: 'Annual Health Walk — Child Participant in Tanyigbe World T-Shirt', category: 'Events' },
  { id: 85, src: '/gallery/uncategorized/85.jpg', alt: 'Annual Health Walk — Youth Participants', category: 'Events' },
  { id: 86, src: '/gallery/uncategorized/86.jpg', alt: 'Annual Health Walk — Tanyigbe World Youth Group', category: 'Events' },
  { id: 87, src: '/gallery/uncategorized/87.jpg', alt: 'Annual Health Walk — Large Crowd Marching', category: 'Events' },
  { id: 88, src: '/gallery/uncategorized/88.jpg', alt: 'Annual Health Walk — Leaders Speaking to Crowd', category: 'Events' },
  { id: 89, src: '/gallery/uncategorized/89.jpg', alt: 'Annual Health Walk — Marchers Along the Route', category: 'Events' },
  { id: 90, src: '/gallery/uncategorized/90.jpg', alt: 'Annual Health Walk — Community March Procession', category: 'Events' },
  { id: 91, src: '/gallery/uncategorized/91.jpg', alt: 'Annual Health Walk — Enthusiastic Crowd of Walkers', category: 'Events' },
  { id: 92, src: '/gallery/uncategorized/92.jpg', alt: 'Annual Health Walk — Walkers at Tanyigbe Kpoo', category: 'Events' },
  { id: 93, src: '/gallery/uncategorized/93.jpg', alt: 'Annual Health Walk — Group of Ladies Walking', category: 'Events' },
  { id: 94, src: '/gallery/uncategorized/94.jpg', alt: 'Annual Health Walk — Community Gathering on the Route', category: 'Events' },
  { id: 116, src: '/gallery/uncategorized/73.jpg', alt: 'Annual Health Walk — Leaders and Participants Walking', category: 'Events' },
  { id: 117, src: '/gallery/uncategorized/74.jpg', alt: 'Annual Health Walk — Chief Walking with Pink Team', category: 'Events' },
  { id: 118, src: '/gallery/uncategorized/75.jpg', alt: 'Annual Health Walk — Chief Addressing the Crowd', category: 'Events' },
  { id: 119, src: '/gallery/uncategorized/76 copy.jpg', alt: 'Annual Health Walk — Community Leaders Speaking', category: 'Events' },
  // NorDU Beauty Pageant
  { id: 138, src: '/gallery/uncategorized/10.jpg', alt: 'NorDU Beauty Pageant — Chief Speaking at Grand Finale', category: 'Events' },
  { id: 139, src: '/gallery/uncategorized/11.jpg', alt: 'NorDU Beauty Pageant — Paramount Chief Addressing the Crowd', category: 'Events' },
  // Developments
  { id: 11, src: '/1.jpg', alt: 'Tanyigbe Landscape', category: 'Developments' },
  { id: 12, src: '/2.jpg', alt: 'Community Infrastructure', category: 'Developments' },
  { id: 15, src: '/20.jpg', alt: 'Community Life', category: 'Developments' },
  { id: 16, src: '/24.jpg', alt: 'Local Development', category: 'Developments' },
  { id: 17, src: '/36.jpg', alt: 'Tanyigbe View', category: 'Developments' },
  { id: 20, src: '/screenshot_2025-12-05_234830_copy1.png', alt: 'Wli Waterfalls (Near Tanyigbe)', category: 'Developments' },
  { id: 21, src: '/screenshot_2025-12-06_001430_copy2.png', alt: 'Mount Afadja (Near Tanyigbe)', category: 'Developments' },
  { id: 22, src: '/screenshot_2025-12-06_001918.png', alt: 'Amedzofe Canopy Walk (Near Tanyigbe)', category: 'Developments' },
  { id: 37, src: '/WhatsApp_Image_2026-05-20_at_09.50.25_(3).jpeg', alt: 'Community Member in Garden', category: 'Developments' },
  { id: 46, src: '/WhatsApp_Image_2026-05-20_at_09.50.25_(2).jpeg', alt: 'Tree Planting Initiative', category: 'Developments' },
  { id: 53, src: '/WhatsApp_Image_2026-05-20_at_09.50.25_(1).jpeg', alt: 'Tree Planting Volunteer', category: 'Developments' },
  { id: 57, src: '/WhatsApp_Image_2026-05-20_at_09.50.22_(1).jpeg', alt: 'Community Reforestation Group', category: 'Developments' },
  // Health
  { id: 29, src: '/WhatsApp_Image_2026-05-20_at_09.50.29.jpeg', alt: 'Breast Cancer Awareness Screening', category: 'Health' },
  { id: 45, src: '/WhatsApp_Image_2026-05-20_at_09.50.28_(2).jpeg', alt: 'Community Health Outreach', category: 'Health' },
  // Education
  { id: 27, src: '/WhatsApp_Image_2026-05-20_at_09.50.27_(1).jpeg', alt: 'Children Face Painting Activity', category: 'Education' },
  { id: 35, src: '/WhatsApp_Image_2026-05-20_at_09.50.27.jpeg', alt: 'Children Playing Board Games', category: 'Education' },
  { id: 42, src: '/WhatsApp_Image_2026-05-20_at_09.50.26.jpeg', alt: 'Student Prize Giving Ceremony', category: 'Education' },
];

const categories = ['All', 'Culture', 'Events', 'Developments', 'Health', 'Education'];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[previousIndex]);
  };

  const goToNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-[#E2A201] to-[#4C7000]">
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center mb-4">
            <ImageIcon size={64} className="text-white opacity-90" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl md:text-2xl">Capturing the Spirit of Tanyigbe</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Our Visual Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore moments from our festivals, cultural celebrations, and daily life in the Tanyigbe community.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#E2A201] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm mb-1">{image.alt}</p>
                    <span className="inline-block bg-[#E2A201] text-white text-xs px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#E2A201] transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-[#E2A201] transition-colors p-2 bg-black bg-opacity-50 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-[#E2A201] transition-colors p-2 bg-black bg-opacity-50 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          <div
            className="max-w-7xl max-h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6 bg-black bg-opacity-70 px-6 py-4 rounded-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.alt}</h3>
              <span className="inline-block bg-[#E2A201] text-white text-sm px-4 py-2 rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
