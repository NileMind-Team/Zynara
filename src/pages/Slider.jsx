import { useState, useEffect } from 'react';
import slide1 from '../Assets/1.jpg';
import slide2 from '../Assets/2.jpg';
import slide3 from '../Assets/3.jpg';
import slide4 from '../Assets/4.jpg';

const Slider = ({ lang }) => {
  const slides = {
    en: [
      { id: 1, title: 'Building Tomorrow', subtitle: 'Innovative construction solutions for a sustainable future', image: slide1, buttonText: 'Explore', targetId: 'about' },
      { id: 2, title: 'Excellence Delivered', subtitle: 'Every project, every detail, every time', image: slide2, buttonText: 'View Work', targetId: 'projects' },
      { id: 3, title: 'Smart Solutions', subtitle: 'Cutting-edge engineering for modern living', image: slide3, buttonText: 'Our Services', targetId: 'services' },
      { id: 4, title: 'Your Vision, Our Mission', subtitle: 'Transforming ideas into iconic structures', image: slide4, buttonText: 'Contact', targetId: 'contact' },
    ],
    ar: [
      { id: 1, title: 'نبني الغد', subtitle: 'حلول بناء مبتكرة لمستقبل مستدام', image: slide1, buttonText: 'استكشف', targetId: 'about' },
      { id: 2, title: 'التميز المتسلم', subtitle: 'كل مشروع، كل تفصيلة، في كل مرة', image: slide2, buttonText: 'أعمالنا', targetId: 'projects' },
      { id: 3, title: 'حلول ذكية', subtitle: 'هندسة متطورة للحياة العصرية', image: slide3, buttonText: 'خدماتنا', targetId: 'services' },
      { id: 4, title: 'رؤيتك.. مهمتنا', subtitle: 'نحول الأفكار إلى صروح أيقونية', image: slide4, buttonText: 'اتصل بنا', targetId: 'contact' },
    ],
  };

  const [current, setCurrent] = useState(0);
  const currentSlides = slides[lang] || slides.en;

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % currentSlides.length), 5000);
    return () => clearInterval(interval);
  }, [currentSlides.length]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section dir={lang === 'ar' ? 'rtl' : 'ltr'} className="relative w-full h-screen overflow-hidden">
      {currentSlides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-all duration-1000 ${index === current ? 'opacity-100 z-20 scale-100' : 'opacity-0 z-10 scale-105'}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent flex items-center">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="max-w-2xl">
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mb-6"></div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h2>
                <p className="text-xl md:text-2xl text-purple-300 font-light mb-8">{slide.subtitle}</p>
                <button onClick={() => handleScroll(slide.targetId)} className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {currentSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1 rounded-full transition-all duration-300 ${current === i ? 'w-12 bg-purple-500' : 'w-6 bg-white/50 hover:bg-purple-500/70'}`} />
        ))}
      </div>
    </section>
  );
};

export default Slider;