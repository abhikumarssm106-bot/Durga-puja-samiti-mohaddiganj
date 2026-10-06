const Venue = () => {
  return (
    <section className="w-full py-10 sm:py-14 md:py-space-xl bg-surface overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-margin-lg max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">तीर्थयात्री मार्गदर्शिका</span>
          <h1 className="font-display-hero-mobile md:font-display-hero text-[28px] sm:text-[34px] md:text-[54px] text-primary mt-1 tracking-tight leading-tight">
            स्थान और दिशा-निर्देश
          </h1>
          <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mt-2 sm:mt-space-sm leading-relaxed">
            उत्सव के केंद्र तक अपना रास्ता खोजें। हम मोहद्दीगंज में हमारे साथ शामिल होने के लिए सभी भक्तों का स्वागत करते हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-space-lg items-start">
          
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-space-lg">
            <div className="bg-surface-container-lowest p-4 sm:p-5 md:p-space-lg rounded-xl sm:rounded-2xl shadow-sm border border-surface-variant/20">
              <h2 className="font-headline-sm text-[18px] sm:text-headline-sm text-primary mb-4 sm:mb-space-md">मोहद्दीगंज दुर्गा पूजा समिति</h2>
              
              <div className="space-y-4 sm:space-y-space-md">
                {[
                  {
                    icon: 'location_on',
                    title: 'पता',
                    content: (
                      <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mt-1">
                        मोहद्दीगंज चौक (पुराने देवी स्थान के पास),<br />
                        सासाराम, रोहतास,<br />
                        बिहार 821115,<br />
                        भारत
                      </p>
                    )
                  },
                  {
                    icon: 'directions_car',
                    title: 'पार्किंग',
                    content: (
                      <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mt-1">
                        मोहद्दीगंज हाई स्कूल ग्राउंड में निर्दिष्ट दोपहिया और चार पहिया पार्किंग उपलब्ध है (मुख्य पंडाल से लगभग 200 मीटर की पैदल दूरी)।
                      </p>
                    )
                  },
                  {
                    icon: 'train',
                    title: 'परिवहन',
                    content: (
                      <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mt-1">
                        सासाराम जंक्शन रेलवे स्टेशन से सिर्फ 1.5 किमी दूर। ई-रिक्शा और ऑटो-रिक्शा आसानी से उपलब्ध हैं।
                      </p>
                    )
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 sm:gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px] sm:text-[24px] shrink-0 mt-0.5">{item.icon}</span>
                    <div className="min-w-0">
                      <span className="font-title-md text-[14px] sm:text-title-md text-on-surface block">{item.title}</span>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 sm:mt-space-lg pt-4 sm:pt-space-md border-t border-surface-variant/30">
                <a 
                  href="https://maps.google.com/?q=Mohaddiganj+Sasaram+Bihar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 sm:gap-space-xs px-4 sm:px-space-lg py-3 sm:py-space-sm bg-primary text-on-primary font-label-md text-[13px] sm:text-label-md rounded-lg sm:rounded shadow-md hover:bg-primary-container transition-all active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">navigation</span>
                  <span>मानचित्र पर दिशा-निर्देश प्राप्त करें</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 h-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px]">
            <div className="w-full h-full bg-surface-container rounded-xl sm:rounded-2xl overflow-hidden shadow-sm flex items-center justify-center border-2 sm:border-4 border-surface-container-lowest">
              {/* Placeholder for iframe map */}
              <div className="flex flex-col items-center text-center p-4 sm:p-space-lg">
                <span className="material-symbols-outlined text-secondary text-[48px] sm:text-[64px] mb-2 sm:mb-space-sm">map</span>
                <p className="font-title-md text-[16px] sm:text-[18px] md:text-xl text-on-surface-variant">मानचित्र पूर्वावलोकन</p>
                <p className="font-body-md text-[12px] sm:text-[13px] md:text-body-md text-on-surface-variant mt-1 sm:mt-2 max-w-sm">
                  एक बार जब एक सटीक Google मानचित्र एम्बेड URL प्रदान किया जाता है, तो इसे इंटरैक्टिव नेविगेशन के लिए यहां प्रदर्शित किया जाएगा।
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Venue;
