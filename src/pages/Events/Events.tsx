import { eventsData } from '../../data/events';

const Events = () => {
  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)]">
      <section className="w-full py-10 sm:py-14 md:py-space-xl bg-surface overflow-hidden">
        <div className="w-full px-4 sm:px-6 md:px-margin-lg max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-space-xl">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Cultural Heritage</span>
            <h1 className="font-display-hero-mobile md:font-display-hero text-[28px] sm:text-[34px] md:text-[54px] text-primary mt-1 tracking-tight leading-tight">
              Cultural Events
            </h1>
            <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mt-2 sm:mt-space-sm leading-relaxed">
              Experience the vibrant spirit of Bihar through our curated cultural programs featuring classical music, folk dance, and spiritual recitals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-space-lg">
            {eventsData.map((event) => (
              <div key={event.id} className="rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container-low shadow-sm flex flex-col hover:shadow-md transition-shadow active:scale-[0.99]">
                <div className="h-40 sm:h-48 md:h-56 overflow-hidden bg-surface-container relative">
                  <img 
                    alt={event.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                    src={event.image} 
                    loading="lazy"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-surface/90 backdrop-blur-sm px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm text-primary font-label-md text-[11px] sm:text-[13px] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">calendar_month</span>
                    {event.date.split(',')[0]}
                  </div>
                </div>
                
                <div className="p-4 sm:p-5 md:p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-label-caps text-[10px] sm:text-label-caps text-secondary font-bold uppercase">{event.category}</span>
                    <h3 className="font-title-md text-[16px] sm:text-[18px] md:text-[20px] leading-tight text-on-surface mt-1.5 sm:mt-2 mb-2 sm:mb-3">{event.title}</h3>
                    <p className="font-body-sm text-[13px] sm:text-[14px] md:text-[15px] text-on-surface-variant leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 sm:mt-space-lg pt-3 sm:pt-space-md border-t border-surface-variant/30 flex flex-col gap-1.5 sm:gap-2">
                    <div className="flex items-center text-on-surface font-body-sm text-[12px] sm:text-[13px]">
                      <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-primary mr-1.5 sm:mr-2">schedule</span>
                      {event.time}
                    </div>
                    <div className="flex items-center text-on-surface font-body-sm text-[12px] sm:text-[13px] font-bold">
                      <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-secondary mr-1.5 sm:mr-2">location_on</span>
                      {event.venue}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default Events;
