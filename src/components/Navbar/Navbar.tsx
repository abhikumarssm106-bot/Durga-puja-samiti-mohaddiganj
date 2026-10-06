import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'schedule', 'gallery', 'venue', 'contact', 'announcements'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { name: 'मुखपृष्ठ', path: '#home', id: 'home', icon: 'home' },
    { name: 'हमारे बारे में', path: '#about', id: 'about', icon: 'info' },
    { name: 'कार्यक्रम', path: '#schedule', id: 'schedule', icon: 'event' },
    { name: 'गैलरी', path: '#gallery', id: 'gallery', icon: 'photo_library' },
    { name: 'घोषणाएं', path: '#announcements', id: 'announcements', icon: 'campaign' },
    { name: 'स्थान', path: '#venue', id: 'venue', icon: 'location_on' },
    { name: 'संपर्क', path: '#contact', id: 'contact', icon: 'mail' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Small delay to let body unlock scroll before navigating
    setTimeout(() => {
      const targetId = path.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-inverse-surface/90 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent backdrop-blur-sm'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="h-16 sm:h-20 w-full px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4 max-w-[1400px] mx-auto">
          <a 
            href="#home" 
            className="flex items-center gap-2 sm:gap-3 z-50 min-w-0" 
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <img 
              alt="Mohaddiganj Durga Puja Emblem" 
              className="h-8 sm:h-10 w-auto object-contain drop-shadow-md shrink-0" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1V1rStYQOYMV9P_WCwa8Ox15LSXTcKa1_vbXynzZTrmh1pN6RbBs53H8FlBrVef_dIhN_C_7nsezXHILakwXosjpeQZiVdhanAC4A2Ndcmg8iyWD6YgrgpghKbhiCWAmLMHvxMJFke9yfecxHVak0DkAd_PAoUyaV8Nas9flIykncpiJGXSLJBBl5umcRuHgyapBml83LG22L7VYGyc5w7j1yxRhaLJ8Z4-tpc6LKg6AvIaYVZu1mjSUw"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-display-hero text-[15px] sm:text-[18px] leading-tight tracking-wide text-white truncate">
                दुर्गा पूजा समिति
              </span>
              <span className="font-title-md text-[11px] sm:text-[13px] tracking-wide text-[#F2C94C] truncate">
                मोहद्दीगंज
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`transition-colors py-2 text-sm font-medium whitespace-nowrap ${
                  activeSection === link.id 
                    ? 'text-[#F2C94C] border-b-2 border-[#F2C94C]' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all bg-white/10 hover:bg-white/20 active:scale-95 text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 xl:hidden animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Menu Panel */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[320px] bg-surface flex flex-col overflow-y-auto shadow-2xl animate-slideInRight"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              paddingTop: `calc(env(safe-area-inset-top) + 4.5rem)`,
              paddingBottom: 'env(safe-area-inset-bottom)' 
            }}
          >
            <nav className="flex flex-col px-4 sm:px-6 gap-1">
              {navLinks.map((link, index) => (
                <a 
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all active:scale-[0.98] animate-fadeInUp stagger-${index + 1} ${
                    activeSection === link.id 
                      ? 'bg-primary/10 text-primary font-bold' 
                      : 'text-on-surface-variant hover:bg-surface-container active:bg-surface-container-high'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${
                    activeSection === link.id ? 'text-primary' : 'text-outline'
                  }`} style={{ fontVariationSettings: activeSection === link.id ? "'FILL' 1" : "'FILL' 0" }}>
                    {link.icon}
                  </span>
                  <span className="font-title-md text-[16px]">{link.name}</span>
                  {activeSection === link.id && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
                  )}
                </a>
              ))}
            </nav>
            
            {/* CTA Button in mobile menu */}
            <div className="mt-6 px-4 sm:px-6">
              <a 
                href="#schedule" 
                onClick={(e) => handleNavClick(e, '#schedule')}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-on-primary rounded-xl font-label-md text-[15px] shadow-md active:scale-[0.98] transition-transform"
              >
                <span className="material-symbols-outlined text-[18px]">event</span>
                कार्यक्रम देखें
              </a>
            </div>
            
            {/* Footer info in mobile menu */}
            <div className="mt-auto px-4 sm:px-6 py-6 border-t border-surface-variant/30">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                <span className="text-[13px]">मोहद्दीगंज, सासाराम, बिहार</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://facebook.com/mohaddiganjdurgapuja" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors active:scale-95" aria-label="Facebook">
                  <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                </a>
                <a href="https://instagram.com/mohaddiganjdurgapuja" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors active:scale-95" aria-label="Instagram">
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </a>
                <a href="tel:+918002000000" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-on-secondary transition-colors active:scale-95" aria-label="Phone">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
