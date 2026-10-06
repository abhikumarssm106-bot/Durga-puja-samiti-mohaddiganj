import { useState, useEffect, useCallback, useRef } from 'react';
import { galleryData } from '../../data/gallery';

const Gallery = () => {
  const categories = ['सभी', 'समिति सदस्य', 'पूजा तैयारियां', 'स्वागत एवं बैनर'];
  const [activeCategory, setActiveCategory] = useState('सभी');
  
  const filteredImages = activeCategory === 'सभी' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Touch/swipe handling for lightbox
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) showNext();
      else showPrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, showPrev, showNext]);

  return (
    <>
      <section className="w-full py-10 sm:py-14 md:py-space-xl bg-surface overflow-hidden">
        <div className="w-full px-4 sm:px-6 md:px-margin-lg max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">दृश्य संग्रह</span>
          <h1 className="font-display-hero-mobile md:font-display-hero text-[28px] sm:text-[34px] md:text-[54px] text-primary mt-1 tracking-tight leading-tight">
            उत्सव गैलरी
          </h1>
          <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mt-2 sm:mt-space-sm leading-relaxed">
            विभिन्न वर्षों के मोहद्दीगंज दुर्गा पूजा के दिव्य क्षणों, जीवंत सांस्कृतिक प्रदर्शनों और भव्यता का अन्वेषण करें।
          </p>
        </div>

        {/* Filter - horizontally scrollable on mobile */}
        <div className="flex overflow-x-auto gap-2 sm:gap-space-sm mb-6 sm:mb-8 md:mb-space-xl -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-label-md text-[12px] sm:text-[14px] transition-colors shrink-0 whitespace-nowrap active:scale-95 ${
                activeCategory === cat 
                  ? 'bg-primary text-on-primary' 
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid - 2 columns on mobile, scaling up */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-space-md">
          {filteredImages.map((img, index) => (
            <div 
              key={img.id} 
              className="relative rounded-xl sm:rounded-2xl overflow-hidden group shadow-sm bg-surface-container aspect-square cursor-pointer active:scale-[0.98] transition-transform"
              onClick={() => setLightboxIndex(index)}
            >
              <img 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src={img.src} 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 md:p-space-md text-inverse-on-surface transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-label-caps text-[9px] sm:text-label-caps text-secondary uppercase">{img.category}</span>
                <p className="font-title-md text-[12px] sm:text-[14px] md:text-title-md mt-0.5 sm:mt-1 leading-tight line-clamp-2">{img.title}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-10 sm:py-space-xl text-on-surface-variant">
            <span className="material-symbols-outlined text-[40px] sm:text-[48px] mb-3 sm:mb-4 opacity-50">photo_library</span>
            <p className="text-sm sm:text-base">इस श्रेणी के लिए कोई चित्र नहीं मिला।</p>
          </div>
        )}

      </div>
    </section>

    {/* Lightbox - with swipe support for mobile */}
    {lightboxIndex !== null && (
      <div 
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fadeIn"
        onClick={() => setLightboxIndex(null)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10" style={{ top: `calc(env(safe-area-inset-top) + 0.75rem)` }}>
          <button 
            onClick={() => setLightboxIndex(null)}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors active:scale-95"
            aria-label="Close lightbox"
          >
            <span className="material-symbols-outlined text-[24px] sm:text-[28px]">close</span>
          </button>
        </div>

        {/* Image counter */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-white/80 text-xs sm:text-sm font-medium" style={{ top: `calc(env(safe-area-inset-top) + 0.75rem)` }}>
          {lightboxIndex + 1} / {filteredImages.length}
        </div>
        
        {/* Desktop nav arrows */}
        <button 
          onClick={(e) => { e.stopPropagation(); showPrev(); }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10 hidden md:flex"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-[24px] sm:text-[28px]">chevron_left</span>
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); showNext(); }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10 hidden md:flex"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-[24px] sm:text-[28px]">chevron_right</span>
        </button>

        <div 
          className="w-full max-w-5xl max-h-screen p-3 sm:p-4 flex flex-col items-center justify-center relative" 
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={filteredImages[lightboxIndex].src} 
            alt={filteredImages[lightboxIndex].alt} 
            className="max-w-full max-h-[70vh] sm:max-h-[80vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="mt-3 sm:mt-4 text-center text-white max-w-2xl px-2">
            <p className="font-title-md text-[16px] sm:text-[18px] md:text-[20px]">{filteredImages[lightboxIndex].title}</p>
            <p className="font-body-sm text-white/60 text-[12px] sm:text-[13px] mt-1">{filteredImages[lightboxIndex].alt}</p>
            <div className="font-label-caps uppercase mt-1.5 sm:mt-2 text-secondary text-[10px] sm:text-[12px]">
              {filteredImages[lightboxIndex].category} · {filteredImages[lightboxIndex].year}
            </div>
          </div>

          {/* Mobile swipe hint */}
          <div className="mt-3 flex items-center gap-2 text-white/40 text-[11px] md:hidden">
            <span className="material-symbols-outlined text-[14px]">swipe</span>
            <span>स्वाइप करें</span>
          </div>
        </div>
      </div>
    )}

    </>
  );
};

export default Gallery;
