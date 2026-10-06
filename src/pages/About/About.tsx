const About = () => {
  return (
    <section className="w-full py-10 sm:py-14 md:py-space-xl bg-surface overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-margin-lg max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">हमारी विरासत</span>
          <h1 className="font-display-hero-mobile md:font-display-hero text-[28px] sm:text-[34px] md:text-[54px] text-primary mt-1 tracking-tight leading-tight">
            मोहद्दीगंज दुर्गा पूजा समिति के बारे में
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-space-xl items-start mb-8 sm:mb-10 md:mb-space-xl">
          <div className="flex flex-col gap-3 sm:gap-space-md">
            <h2 className="font-headline-md text-[22px] sm:text-headline-md text-primary">हमारी कहानी</h2>
            <div className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant leading-relaxed space-y-3 sm:space-y-4">
              <p>
                मोहद्दीगंज के दूरदर्शी बुजुर्गों द्वारा आधी सदी से भी पहले स्थापित, हमारी समिति पारंपरिक वैदिक पूजा को बनाए रखने के लिए प्रतिबद्ध एक गैर-लाभकारी सांस्कृतिक ट्रस्ट के रूप में कार्य करती है। 1970 में एक मामूली सामुदायिक सभा के रूप में जो शुरू हुआ, वह अब सासाराम, रोहतास जिले में सबसे प्रतिष्ठित सार्वजनिक दुर्गा पूजा समारोहों में से एक बन गया है।
              </p>
              <p>
                हमारी यात्रा अनगिनत निवासियों, स्थानीय व्यवसायों और लौटने वाले प्रवासियों की भक्ति से बुनी गई है जो नवरात्रि के दौरान मोहद्दीगंज को अपने आध्यात्मिक लंगर के रूप में देखते हैं।
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-52 sm:h-64 lg:h-auto lg:aspect-video bg-surface-container">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXnFzo1tEdnjgyEHUtIHrgKmTA8JhBYnmqtEMwywtr_WrgtWtzgWM8nWv56MRqKdtUUz23zI54IsVRelev57kQzPCci5wC_eKiRdyBXBdm9B7AYyEAdC5OLPV1nUNMvuUzgaHd1NLiK6av0XAPHZ899yOT9qyeDJJZ-Z7M1KLKJepEu6xgFHt0M6g1P7CnZD1lzZaM_XJQhy3GRYEbFLBgGo8OeppCO5RH_BFybfFglNi3LNBTMGGT" 
              alt="पंडाल की विरासत"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-space-xl items-start mb-8 sm:mb-10 md:mb-space-xl">
          <div className="rounded-2xl overflow-hidden shadow-lg h-52 sm:h-64 lg:h-auto lg:aspect-video bg-surface-container order-2 lg:order-1">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzD7EEMDBqFt6BQGY8abgM16W7Sva5UIpQaAHNqwUtlBoSXah7Lq40qLYdD6U9RmI23Ap4ZbGwri_e1CFdhgcbv-dp89MH7-cFisiu2BEWKAKM9vE3bPfDCEgkYIwWAAAM22tLwf0F3kcMBJEvd9Gqm7r2qX3SX9chDtmidN1j5SqtpOSngyFepjZ_-6kFF74PpAWq4bYGxuMPnKjbogeVmYshHkCWGgp33cV4WPZpV4Oi9f-WK0Zm" 
              alt="पारंपरिक अनुष्ठान"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-space-md order-1 lg:order-2">
            <h2 className="font-headline-md text-[22px] sm:text-headline-md text-primary">हमारी परंपरा</h2>
            <div className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant leading-relaxed space-y-3 sm:space-y-4">
              <p>
                हम शुद्ध शास्त्रीय अनुष्ठानों के प्रति अपनी प्रतिबद्धता में दृढ़ हैं। महा षष्ठी को कल्पारंभ से लेकर विजयादशमी को विसर्जन तक, प्रत्येक समारोह वैदिक आदेशों के अनुसार सख्ती से आयोजित किया जाता है।
              </p>
              <p>
                हमें अपने 'महा भोग' पर गर्व है - अत्यधिक स्वच्छता और भक्ति के साथ तैयार किया गया एक भव्य सामुदायिक भोज, जो जाति, पंथ या पृष्ठभूमि की परवाह किए बिना 30,000 से अधिक भक्तों को बिना शर्त परोसा जाता है।
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-5 sm:p-6 md:p-space-xl rounded-2xl sm:rounded-3xl mt-8 sm:mt-10 md:mt-space-xl">
          <h2 className="font-headline-md text-[22px] sm:text-headline-md text-primary text-center mb-5 sm:mb-6 md:mb-space-lg">हमारे मूल मूल्य</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-space-md">
            {[
              { icon: 'psychiatry', title: 'भक्ति', desc: 'माँ दुर्गा और उनकी शाश्वत कृपा के प्रति अटूट विश्वास और समर्पण।', color: 'primary' },
              { icon: 'history_edu', title: 'परंपरा', desc: 'पैतृक अनुष्ठानों और शाक्त पूजा के प्रामाणिक सार का संरक्षण।', color: 'secondary' },
              { icon: 'palette', title: 'संस्कृति', desc: 'लोक कलाओं, शास्त्रीय संगीत और स्थानीय शिल्प कौशल के लिए एक जीवंत मंच।', color: 'primary' },
              { icon: 'diversity_1', title: 'समुदाय', desc: 'सभी निवासियों के बीच एकता, स्वयंसेवा और आपसी सम्मान को बढ़ावा देना।', color: 'secondary' },
            ].map((item) => (
              <div key={item.title} className="bg-surface p-3 sm:p-4 md:p-space-md rounded-xl sm:rounded-2xl text-center shadow-sm">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-${item.color}/10 flex items-center justify-center mx-auto mb-2 sm:mb-space-sm`}>
                  <span className={`material-symbols-outlined text-[24px] sm:text-[28px] md:text-[32px] text-${item.color}`}>{item.icon}</span>
                </div>
                <h3 className="font-title-md text-[14px] sm:text-[16px] md:text-title-md text-on-surface mb-1 sm:mb-2">{item.title}</h3>
                <p className="font-body-sm text-[11px] sm:text-[12px] md:text-body-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
