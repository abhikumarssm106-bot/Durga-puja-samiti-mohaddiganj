const Footer = () => {
  return (
    <footer 
      className="w-full bg-inverse-surface text-inverse-on-surface py-10 sm:py-14 lg:py-24 border-t-4 border-primary"
      style={{ paddingBottom: `calc(env(safe-area-inset-bottom) + 2.5rem)` }}
    >
      <div className="w-full px-4 sm:px-6 md:px-margin-lg max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-space-xl">
          
          <div className="flex flex-col gap-space-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[20px] sm:text-[24px]">temple_hindu</span>
              <span className="font-headline-sm text-[18px] sm:text-headline-sm text-surface-bright tracking-tight">मोहद्दीगंज दुर्गा पूजा</span>
            </div>
            <p className="font-body-sm text-[12px] sm:text-body-sm text-surface-variant mt-1 sm:mt-2 leading-relaxed opacity-80">
              सासाराम, बिहार के ऐतिहासिक हृदय में भक्ति, शाश्वत शाक्त अनुष्ठानों, जीवंत संस्कृति और एकजुट सामुदायिक भावना का जश्न मनाना।
            </p>
            <div className="flex items-center gap-2 sm:gap-space-sm mt-3 sm:mt-space-md">
              <a href="https://facebook.com/mohaddiganjdurgapuja" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-variant/10 flex items-center justify-center hover:bg-primary transition-colors text-surface-bright active:scale-95" aria-label="Facebook">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">thumb_up</span>
              </a>
              <a href="https://instagram.com/mohaddiganjdurgapuja" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-variant/10 flex items-center justify-center hover:bg-primary transition-colors text-surface-bright active:scale-95" aria-label="Instagram">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">photo_camera</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-[14px] sm:text-title-md text-surface-bright mb-1 sm:mb-2">त्वरित लिंक</h4>
            <a href="#schedule" className="font-body-sm text-[12px] sm:text-body-sm text-surface-variant hover:text-secondary transition-colors py-0.5">पूजा कार्यक्रम</a>
            <a href="#gallery" className="font-body-sm text-[12px] sm:text-body-sm text-surface-variant hover:text-secondary transition-colors py-0.5">उत्सव गैलरी</a>
            <a href="#announcements" className="font-body-sm text-[12px] sm:text-body-sm text-surface-variant hover:text-secondary transition-colors py-0.5">घोषणाएं</a>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-[14px] sm:text-title-md text-surface-bright mb-1 sm:mb-2">समिति</h4>
            <a href="#about" className="font-body-sm text-[12px] sm:text-body-sm text-surface-variant hover:text-secondary transition-colors py-0.5">हमारे बारे में</a>
            <a href="#contact" className="font-body-sm text-[12px] sm:text-body-sm text-surface-variant hover:text-secondary transition-colors py-0.5">संपर्क जानकारी</a>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-[14px] sm:text-title-md text-surface-bright mb-1 sm:mb-2">हमसे मिलें</h4>
            <p className="font-body-sm text-[12px] sm:text-body-sm text-surface-variant opacity-80 leading-relaxed">
              मोहद्दीगंज चौक (पुराने देवी स्थान के पास),<br />
              सासाराम, रोहतास,<br />
              बिहार 821115
            </p>
            <a href="mailto:info@mohaddiganjdurgapuja.com" className="font-body-sm text-[12px] sm:text-body-sm text-surface-variant hover:text-secondary transition-colors mt-1 sm:mt-2 flex items-center gap-1.5 sm:gap-2 break-all">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px] shrink-0">mail</span>
              info@mohaddiganjdurgapuja.com
            </a>
            <a href="tel:+918002000000" className="font-body-sm text-[12px] sm:text-body-sm text-surface-variant hover:text-secondary transition-colors flex items-center gap-1.5 sm:gap-2">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px] shrink-0">call</span>
              +91 80020 00000
            </a>
          </div>

        </div>

        <div className="w-full mt-8 sm:mt-space-xl pt-4 sm:pt-space-md border-t border-surface-variant/20 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-space-sm">
          <p className="font-body-sm text-[11px] sm:text-body-sm text-surface-variant opacity-60 text-center sm:text-left">
            &copy; {new Date().getFullYear()} मोहद्दीगंज दुर्गा पूजा समिति। सर्वाधिकार सुरक्षित।
          </p>
          <p className="font-body-sm text-[11px] sm:text-body-sm text-surface-variant opacity-60">
            जय माता दी
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
