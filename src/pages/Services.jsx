import { useState, useEffect, useRef } from 'react';
import { Code, Palette, Globe, Sparkles, Smartphone, BarChart3, Shield } from 'lucide-react';

const Services = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'What We Offer',
      description:
        'We provide comprehensive design and development solutions that help your business stand out and achieve real results.',
      items: [
        {
          icon: <Code className="w-12 h-12" />,
          title: 'Web Development',
          desc: 'Professional modern websites compatible with all devices, focusing on converting visitors to customers.',
        },
        {
          icon: <Palette className="w-12 h-12" />,
          title: 'Graphic Design',
          desc: 'Attractive professional designs that express your brand identity and make you stand out.',
        },
        {
          icon: <Smartphone className="w-12 h-12" />,
          title: 'Mobile Friendly',
          desc: '100% responsive designs that work perfectly on all devices and screen sizes.',
        },
        {
          icon: <BarChart3 className="w-12 h-12" />,
          title: 'SEO Optimization',
          desc: 'Search engine optimized websites to help you reach more customers.',
        },
        {
          icon: <Shield className="w-12 h-12" />,
          title: 'Secure Solutions',
          desc: 'Secure and reliable web solutions with high performance standards.',
        },
        {
          icon: <Globe className="w-12 h-12" />,
          title: 'Digital Identity',
          desc: "Complete digital identity solutions that reflect your brand's unique personality.",
        },
      ],
    },
    ar: {
      title: 'خدماتنا',
      subtitle: 'ماذا نقدم',
      description: 'نقدم حلول تصميم وبرمجة متكاملة تساعد أعمالك على التميز وتحقيق نتائج حقيقية.',
      items: [
        {
          icon: <Code className="w-12 h-12" />,
          title: 'تطوير الويب',
          desc: 'مواقع احترافية عصرية متوافقة مع كل الأجهزة، مع التركيز على تحويل الزوار لعملاء.',
        },
        {
          icon: <Palette className="w-12 h-12" />,
          title: 'التصميم الجرافيكي',
          desc: 'تصميمات جذابة واحترافية تعبر عن هوية البراند وتخلي شكلك مميز.',
        },
        {
          icon: <Smartphone className="w-12 h-12" />,
          title: 'متوافق مع الجوال',
          desc: 'تصميمات متجاوبة 100% تعمل بشكل مثالي على جميع الأجهزة.',
        },
        {
          icon: <BarChart3 className="w-12 h-12" />,
          title: 'تهيئة لمحركات البحث',
          desc: 'مواقع مهيأة لمحركات البحث لتساعدك في الوصول لعملاء أكثر.',
        },
        {
          icon: <Shield className="w-12 h-12" />,
          title: 'حلول آمنة',
          desc: 'حلول ويب آمنة وموثوقة بأداء عالي الجودة.',
        },
        {
          icon: <Globe className="w-12 h-12" />,
          title: 'هوية رقمية',
          desc: 'حلول هوية رقمية متكاملة تعكس شخصية علامتك التجارية الفريدة.',
        },
      ],
    },
  };

  const current = content[lang] || content.en;

  return (
    <section
      ref={sectionRef}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`py-20 relative overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 via-transparent to-[#003366]/5 dark:from-[#00AEEF]/10 dark:to-[#003366]/10"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00AEEF]/10 to-[#00FF99]/10 border border-[#00AEEF]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-sm font-medium text-[#00AEEF]">{current.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00AEEF] via-[#003366] to-[#00FF99] bg-clip-text text-transparent">
            {current.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-[#00FF99] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            {current.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-[#00AEEF]/10"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#003366] flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
