import { useState } from 'react';
import { scheduleData } from '../../data/schedule';

const Schedule = () => {
  // Get unique days
  const days = Array.from(new Set(scheduleData.map(item => item.day)));
  const [activeDay, setActiveDay] = useState(days[0]);

  const filteredSchedule = scheduleData.filter(item => item.day === activeDay);

  return (
    <section className="w-full py-10 sm:py-14 md:py-space-xl bg-surface-container-low overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-margin-lg max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">पवित्र समय</span>
          <h1 className="font-display-hero-mobile md:font-display-hero text-[28px] sm:text-[34px] md:text-[54px] text-primary mt-1 tracking-tight leading-tight">
            पूजा कार्यक्रम
          </h1>
          <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mt-2 sm:mt-space-sm leading-relaxed">
            दिव्य समारोहों में हमारे साथ शामिल हों। कृपया ध्यान दें कि हमारे पंडितों द्वारा सटीक चंद्र तिथि गणना के आधार पर समय में मामूली बदलाव हो सकते हैं।
          </p>
        </div>

        {/* Day tabs - horizontal scrollable on mobile */}
        <div className="flex overflow-x-auto pb-2 sm:pb-space-sm mb-6 sm:mb-8 md:mb-space-xl gap-2 sm:gap-space-sm justify-start md:justify-center scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`whitespace-nowrap px-4 sm:px-space-lg py-2 sm:py-space-sm rounded-full font-label-md text-[13px] sm:text-label-md transition-all shrink-0 active:scale-95 ${
                activeDay === day 
                  ? 'bg-primary text-on-primary shadow-md' 
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-highest'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/20 ml-5 sm:ml-[28px] md:ml-0 md:border-none space-y-4 sm:space-y-5 md:space-y-space-lg">
            {filteredSchedule.map((item) => {
              const icons: Record<string, string> = {
                'Morning': 'wb_sunny',
                'Afternoon': 'restaurant',
                'Evening': 'wb_twilight',
                'Night': 'bedtime'
              };
              const categoryMap: Record<string, string> = {
                'Morning': 'सुबह',
                'Afternoon': 'दोपहर',
                'Evening': 'शाम',
                'Night': 'रात'
              };
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row gap-3 sm:gap-space-md md:gap-space-xl items-start group">
                  <div className="absolute md:relative left-[-29px] sm:left-[-41px] md:left-0 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shadow-sm border-[3px] sm:border-4 border-surface-container-low shrink-0 z-10 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[12px] sm:text-[16px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {icons[item.category] || 'event'}
                    </span>
                  </div>
                  
                  <div className="flex-1 bg-surface-container-lowest p-3 sm:p-4 md:p-space-lg rounded-xl sm:rounded-2xl shadow-sm border border-surface-variant/20 hover:shadow-md transition-shadow w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-space-sm mb-1.5 sm:mb-space-sm">
                      <div className="flex items-center gap-2 sm:gap-space-sm flex-wrap">
                        <span className="font-headline-sm text-[16px] sm:text-[18px] md:text-headline-sm text-primary">{item.time}</span>
                        <span className="px-2 sm:px-space-sm py-0.5 sm:py-1 bg-surface-variant rounded text-on-surface-variant font-label-caps text-[9px] sm:text-[10px] uppercase">
                          {categoryMap[item.category] || item.category}
                        </span>
                      </div>
                      <span className="font-label-md text-[11px] sm:text-[12px] md:text-label-md text-secondary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] sm:text-[16px]">location_on</span>
                        {item.venue}
                      </span>
                    </div>
                    
                    <h3 className="font-title-md text-[14px] sm:text-[16px] md:text-title-md text-on-surface mb-1 sm:mb-2">{item.title}</h3>
                    <p className="font-body-md text-[12px] sm:text-[13px] md:text-body-md text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
