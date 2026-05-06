import { useState, useEffect } from 'react';
import slide1 from '../Assets/30.jpg';
import slide2 from '../Assets/29.jpg';
import slide3 from '../Assets/31.jpg';
import slide4 from '../Assets/32.jpg';

const Slider = ({ lang }) => {
  const slides = {
    en: [
      {
        id: 1,
        title: 'ZINARA MEDIA',
        subtitle: 'Your Success Partner in Design & Development',
        image: slide1,
        buttonText: 'About Us',
        targetId: 'about',
      },
      {
        id: 2,
        title: 'Web Development',
        subtitle: 'Professional modern websites that convert visitors to customers',
        image: slide2,
        buttonText: 'Our Work',
        targetId: 'projects',
      },
      {
        id: 3,
        title: 'Graphic Design',
        subtitle: 'Attractive designs that express your brand identity',
        image: slide3,
        buttonText: 'Services',
        targetId: 'services',
      },
      {
        id: 4,
        title: 'Start Your Project',
        subtitle: "Let's take your business to the next level",
        image: slide4,
        buttonText: 'Contact',
        targetId: 'contact',
      },
    ],
    ar: [
      {
        id: 1,
        title: 'ZINARA MEDIA',
        subtitle: 'شريك نجاحك في التصميم والبرمجة',
        image: slide1,
        buttonText: 'من نحن',
        targetId: 'about',
      },
      {
        id: 2,
        title: 'تطوير الويب',
        subtitle: 'مواقع احترافية عصرية تحول الزوار لعملاء',
        image: slide2,
        buttonText: 'أعمالنا',
        targetId: 'projects',
      },
      {
        id: 3,
        title: 'التصميم الجرافيكي',
        subtitle: 'تصميمات جذابة تعبر عن هوية علامتك التجارية',
        image: slide3,
        buttonText: 'خدماتنا',
        targetId: 'services',
      },
      {
        id: 4,
        title: 'ابدا مشروعك',
        subtitle: 'ننقل مشروعك لمستوى أقوى',
        image: slide4,
        buttonText: 'اتصل بنا',
        targetId: 'contact',
      },
    ],
  };

  const [current, setCurrent] = useState(0);
  const currentSlides = slides[lang] || slides.en;

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % currentSlides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [currentSlides.length]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="relative w-full h-screen overflow-hidden"
    >
      {currentSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${index === current ? 'opacity-100 z-20 scale-100' : 'opacity-0 z-10 scale-105'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-[#003366]/60 to-transparent flex items-center">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="max-w-2xl">
                <div className="w-20 h-1 bg-gradient-to-r from-[#00AEEF] to-[#00FF99] mb-6"></div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-[#00AEEF] font-light mb-8">
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => handleScroll(slide.targetId)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#003366] text-white font-semibold hover:shadow-xl hover:shadow-[#00AEEF]/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {currentSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${current === i ? 'w-12 bg-[#00FF99]' : 'w-6 bg-white/50 hover:bg-[#00AEEF]/70'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
