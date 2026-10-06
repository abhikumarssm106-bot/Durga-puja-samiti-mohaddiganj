import { announcementsData } from '../../data/announcements';

const Announcements = () => {
  const bgColors = ['bg-primary-fixed', 'bg-secondary-fixed', 'bg-surface-container-highest', 'bg-tertiary-fixed'];
  const textColors = ['text-primary', 'text-secondary', 'text-on-surface', 'text-tertiary'];

  return (
    <section className="w-full py-10 sm:py-14 md:py-space-xl bg-surface-container-low overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-margin-lg max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">भक्त सूचना बोर्ड</span>
          <h1 className="font-display-hero-mobile md:font-display-hero text-[28px] sm:text-[34px] md:text-[54px] text-primary mt-1 tracking-tight leading-tight">
            घोषणाएं
          </h1>
          <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mt-2 sm:mt-space-sm leading-relaxed">
            मोहद्दीगंज में आगामी शरदोत्सव समारोह के लिए नवीनतम समय, मुहूर्त और महत्वपूर्ण सूचनाओं के साथ अपडेट रहें।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-space-lg max-w-5xl mx-auto">
          {announcementsData.map((announcement, index) => {
            const colorIdx = index % 4;

            return (
              <div 
                key={announcement.id} 
                className="bg-surface-container-lowest p-4 sm:p-5 md:p-space-lg rounded-xl sm:rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden active:scale-[0.99] transition-transform"
              >
                {announcement.important && (
                  <div className="absolute top-0 right-0 bg-error text-on-error px-2.5 sm:px-3 py-0.5 sm:py-1 font-label-caps text-[9px] sm:text-[10px] uppercase font-bold rounded-bl-lg tracking-widest">
                    महत्वपूर्ण
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-space-sm mt-1 sm:mt-2">
                    <span className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${bgColors[colorIdx]} flex items-center justify-center ${textColors[colorIdx]}`}>
                      <span className="material-symbols-outlined text-[20px] sm:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {announcement.icon || 'notifications'}
                      </span>
                    </span>
                    <span className="font-label-caps text-[10px] sm:text-label-caps text-secondary font-bold">{announcement.category}</span>
                  </div>
                  <h3 className="font-title-md text-[17px] sm:text-[20px] md:text-[22px] text-primary mb-1 sm:mb-2 leading-snug">{announcement.title}</h3>
                  <p className="font-body-md text-[12px] sm:text-[13px] md:text-body-md text-on-surface-variant mt-1 sm:mt-space-xs leading-relaxed">
                    {announcement.description}
                  </p>
                </div>
                <div className="mt-3 sm:mt-space-lg pt-2 sm:pt-space-sm bg-surface-container-low p-2 sm:p-space-sm rounded-lg flex items-center gap-1.5 sm:gap-space-xs text-on-surface font-label-md text-[11px] sm:text-[12px] md:text-label-md">
                  <span className={`material-symbols-outlined text-[14px] sm:text-[18px] ${textColors[colorIdx]}`}>alarm</span>
                  <span>{announcement.date} {announcement.time && `· ${announcement.time}`}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        {announcementsData.length === 0 && (
          <div className="text-center py-10 sm:py-space-xl text-on-surface-variant bg-surface-container-lowest rounded-xl sm:rounded-2xl">
            <span className="material-symbols-outlined text-[40px] sm:text-[48px] mb-3 sm:mb-4 opacity-50">notifications_off</span>
            <p className="text-sm sm:text-base">इस समय कोई नई घोषणा नहीं है।</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Announcements;
