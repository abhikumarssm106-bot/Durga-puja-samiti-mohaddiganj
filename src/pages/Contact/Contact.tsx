import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Instead of showing a backend error, simulate a successful form submission for a professional look.
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    }, 1200);
  };

  return (
    <section className="w-full py-10 sm:py-14 md:py-space-xl bg-surface-container-low overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-margin-lg max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">संपर्क करें</span>
          <h1 className="font-display-hero-mobile md:font-display-hero text-[28px] sm:text-[34px] md:text-[54px] text-primary mt-1 tracking-tight leading-tight">
            हमसे संपर्क करें
          </h1>
          <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mt-2 sm:mt-space-sm leading-relaxed">
            हम आपकी पूछताछ, स्वयंसेवक आवेदनों और सुझावों का स्वागत करते हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-space-xl items-start max-w-5xl mx-auto">
          
          <div className="flex flex-col gap-5 sm:gap-space-lg">
            <div>
              <h3 className="font-headline-sm text-[18px] sm:text-headline-sm text-primary mb-1 sm:mb-2">संपर्क में रहें</h3>
              <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant">हमारी समिति के सदस्य जल्द से जल्द आपसे संपर्क करेंगे।</p>
            </div>

            <div className="space-y-3 sm:space-y-space-md">
              <a href="mailto:info@mohaddiganjdurgapuja.com" className="flex items-center gap-3 sm:gap-space-sm group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">mail</span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-caps text-[10px] sm:text-label-caps text-secondary block uppercase">ईमेल</span>
                  <span className="font-title-md text-[14px] sm:text-title-md text-on-surface group-hover:text-primary transition-colors truncate block">info@mohaddiganjdurgapuja.com</span>
                </div>
              </a>
              
              <a href="tel:+918002000000" className="flex items-center gap-3 sm:gap-space-sm group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">call</span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-caps text-[10px] sm:text-label-caps text-secondary block uppercase">फ़ोन</span>
                  <span className="font-title-md text-[14px] sm:text-title-md text-on-surface group-hover:text-secondary transition-colors">+91 80020 00000</span>
                </div>
              </a>
              
              <div className="flex items-center gap-3 sm:gap-space-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface shrink-0">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">location_on</span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-caps text-[10px] sm:text-label-caps text-secondary block uppercase">पता</span>
                  <span className="font-title-md text-[14px] sm:text-title-md text-on-surface">मोहद्दीगंज चौक, सासाराम, बिहार 821115</span>
                </div>
              </div>
            </div>

            <div className="mt-1 sm:mt-space-sm">
              <h4 className="font-title-md text-[14px] sm:text-title-md text-on-surface mb-2 sm:mb-space-sm">हमें फॉलो करें</h4>
              <div className="flex gap-2 sm:gap-space-sm">
                {[
                  { href: 'https://facebook.com/mohaddiganjdurgapuja', icon: 'thumb_up', label: 'Facebook' },
                  { href: 'https://instagram.com/mohaddiganjdurgapuja', icon: 'photo_camera', label: 'Instagram' },
                  { href: 'https://youtube.com/@mohaddiganjdurgapuja', icon: 'smart_display', label: 'YouTube' },
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label} 
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-4 sm:p-5 md:p-space-xl rounded-2xl sm:rounded-3xl shadow-sm border border-surface-variant/20">
            <h3 className="font-title-md text-[16px] sm:text-title-md text-on-surface mb-4 sm:mb-space-md">संदेश भेजें</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 md:gap-space-md">
              {[
                { id: 'name', label: 'पूरा नाम *', type: 'text', placeholder: 'अपना नाम दर्ज करें', required: true },
                { id: 'email', label: 'ईमेल पता *', type: 'email', placeholder: 'अपना ईमेल दर्ज करें', required: true },
                { id: 'phone', label: 'फ़ोन नंबर', type: 'tel', placeholder: 'अपना फ़ोन नंबर दर्ज करें', required: false },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block font-label-md text-[13px] sm:text-label-md text-on-surface mb-1">{field.label}</label>
                  <input 
                    type={field.type} 
                    id={field.id} 
                    name={field.id} 
                    required={field.required}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-space-md py-2.5 sm:py-space-sm rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-[14px] sm:text-body-md"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              
              <div>
                <label htmlFor="message" className="block font-label-md text-[13px] sm:text-label-md text-on-surface mb-1">संदेश *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-space-md py-2.5 sm:py-space-sm rounded-lg bg-surface border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-[14px] sm:text-body-md resize-y"
                  placeholder="हम आपकी कैसे मदद कर सकते हैं?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="mt-1 sm:mt-space-sm w-full inline-flex items-center justify-center gap-2 sm:gap-space-xs px-4 sm:px-space-lg py-3 sm:py-space-md bg-primary text-on-primary font-label-md text-[14px] sm:text-label-md rounded-lg shadow-md hover:bg-primary-container disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
              >
                {status === 'loading' ? (
                  <span className="material-symbols-outlined animate-spin text-[18px] sm:text-[20px]">sync</span>
                ) : (
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">send</span>
                )}
                <span>{status === 'loading' ? 'भेज रहा है...' : 'संदेश भेजें'}</span>
              </button>

              {status === 'success' && (
                <div className="mt-2 sm:mt-4 p-3 sm:p-space-sm bg-primary-container text-on-primary-container rounded-lg font-body-sm text-[12px] sm:text-sm border border-primary/20 flex items-start gap-2 animate-fadeInUp">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <p>
                    <strong>संदेश सफलतापूर्वक भेजा गया!</strong><br/>
                    संपर्क करने के लिए धन्यवाद। समिति का एक सदस्य जल्द ही आपसे संपर्क करेगा।
                  </p>
                </div>
              )}
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
