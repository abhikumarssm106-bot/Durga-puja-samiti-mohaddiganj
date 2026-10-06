import { useState, useEffect } from 'react';

import heroBg from '../../assets/hero-bg.jpg';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to Oct 11, 2026 (or this year's Navratri)
    const targetDate = new Date('October 11, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Image with Gradients */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={heroBg}
          alt="Maa Durga Background" 
          className="w-full h-full object-cover object-[75%_center] sm:object-center opacity-80"
        />
        {/* Dark gradient from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 sm:to-transparent"></div>
        {/* Bottom gradient - stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 sm:from-black/90 sm:via-transparent sm:to-transparent"></div>
        {/* Top gradient for navbar readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>
      </div>

      <div 
        className="relative z-10 w-full px-4 sm:px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center justify-center text-center py-24 sm:py-28 md:py-32"
        style={{ paddingTop: `calc(env(safe-area-inset-top) + 5rem)` }}
      >
        
        <div className="flex flex-col items-center">
          <span 
            className="material-symbols-outlined text-[#F2C94C] text-[28px] sm:text-[36px] md:text-[40px] mb-2 drop-shadow-md" 
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            local_florist
          </span>
          <div className="text-white/90 tracking-widest font-medium mb-3 sm:mb-4 text-xs sm:text-sm md:text-base uppercase flex items-center gap-2 sm:gap-3 drop-shadow-md">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F2C94C]/80"></span>
            || जय माता दी ||
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F2C94C]/80"></span>
          </div>
          
          <h1 className="font-display-hero flex flex-col items-center justify-center text-center font-bold tracking-normal drop-shadow-2xl">
            <span className="block text-[32px] sm:text-5xl md:text-6xl lg:text-[76px] text-white leading-snug sm:leading-normal">
              दुर्गा पूजा
            </span>
            <span className="block text-[#F2C94C] text-[28px] sm:text-[44px] md:text-6xl lg:text-[76px] leading-snug sm:leading-normal mt-1.5 sm:mt-2.5 md:mt-3">
              समिति मोहद्दीगंज
            </span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-white/90 font-medium text-xs sm:text-sm md:text-base mt-4 sm:mt-6 drop-shadow-md">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="material-symbols-outlined text-[#F2C94C] text-[16px] sm:text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            <span>मोहद्दीगंज, सासाराम</span>
          </div>
          <span className="hidden sm:block text-white/50">|</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="material-symbols-outlined text-[#F2C94C] text-[16px] sm:text-[20px]">calendar_month</span>
            <span>11 अक्टूबर 2026</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 w-full justify-center mt-2 sm:mt-3 drop-shadow-md">
          <span className="text-[#F2C94C] text-xs sm:text-sm">-◇-</span>
          <p className="text-white italic text-xs sm:text-sm md:text-base font-light">भक्ति और उल्लास में एकजुट</p>
          <span className="text-[#F2C94C] text-xs sm:text-sm">-◇-</span>
        </div>

        {/* Countdown Timer */}
        <div className="mt-5 sm:mt-8 border border-white/20 bg-black/50 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 w-full max-w-lg sm:max-w-2xl mx-auto shadow-2xl">
          <p className="text-white/90 text-center mb-3 sm:mb-4 md:mb-5 text-[11px] sm:text-xs md:text-sm tracking-widest font-medium">दुर्गा पूजा शुरू होने में...</p>
          <div className="flex justify-between items-center text-center px-1 sm:px-2 md:px-6">
            {[
              { value: timeLeft.days, label: 'दिन', isAccent: false },
              { value: timeLeft.hours, label: 'घंटे', isAccent: false },
              { value: timeLeft.minutes, label: 'मिनट', isAccent: false },
              { value: timeLeft.seconds, label: 'सेकंड', isAccent: true },
            ].map((item, i) => (
              <div key={item.label} className="contents">
                {i > 0 && <div className="w-[1px] h-8 sm:h-10 md:h-12 bg-white/15 shrink-0" />}
                <div className="flex flex-col items-center justify-center flex-1 min-w-0">
                  <span className={`text-2xl sm:text-3xl md:text-5xl font-semibold tabular-nums ${item.isAccent ? 'text-[#F2C94C]' : 'text-white'}`}>
                    {formatNumber(item.value)}
                  </span>
                  <span className={`text-[9px] sm:text-[10px] md:text-xs tracking-widest mt-0.5 sm:mt-1 uppercase font-medium ${item.isAccent ? 'text-[#F2C94C]/90' : 'text-white/70'}`}>
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 w-full flex justify-center">
          <a 
            href="#schedule" 
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-[#F2C94C] text-black font-bold text-sm sm:text-base rounded-full shadow-[0_0_20px_rgba(242,201,76,0.4)] hover:shadow-[0_0_30px_rgba(242,201,76,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>दर्शन करें</span>
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_forward</span>
          </a>
        </div>

      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 animate-bounce hidden sm:flex">
        <div className="w-[22px] h-[34px] border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#F2C94C] rounded-full animate-ping"></div>
        </div>
        <span className="material-symbols-outlined text-white/50 text-[18px] mt-1">arrow_downward</span>
      </div>

    </section>
  );
};

export default Hero;
