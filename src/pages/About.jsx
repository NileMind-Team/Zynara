import { useState, useEffect, useRef } from 'react';
import { Target, Sparkles, CheckCircle2, Zap, Globe, Code, Palette } from 'lucide-react';

const About = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const content = {
    en: {
      title: 'Who We Are',
      subtitle: 'ZINARA MEDIA',
      description:
        'At ZINARA MEDIA, we are not just a design and development company, we are success partners for our clients. Specialized in professional website design and development, in addition to graphic design services that make any brand stand out.',
      services: [
        'Professional modern websites compatible with all devices',
        'Focus on converting visitors into customers',
        'Attractive designs that express brand identity',
        'High speed and SEO optimized',
      ],
      tabs: [
        {
          title: 'Mission',
          icon: <Target className="w-4 h-4" />,
          content:
            'To help every client have a unique and distinctive identity through innovative design and development solutions that achieve real results.',
        },
        {
          title: 'Vision',
          icon: <Globe className="w-4 h-4" />,
          content:
            'To become the most trusted name in web design and development in the region, known for quality and results.',
        },
        {
          title: 'Values',
          icon: <Code className="w-4 h-4" />,
          content:
            'Quality, innovation, transparency, client success, and attention to every detail.',
        },
      ],
      why: ['Professional Team', 'Premium Quality', 'Focus on Results', 'Fast Delivery'],
    },
    ar: {
      title: 'من نحن',
      subtitle: 'ZINARA MEDIA',
      description:
        'في ZINARA MEDIA (ZINARA MEDIA) إحنا مش مجرد شركة تصميم وبرمجة، إحنا شركاء نجاح لعملائنا. متخصصين في تصميم وبرمجة المواقع بشكل احترافي، بالإضافة إلى تقديم خدمات الجرافيك ديزاين اللي بتخلي أي براند يبان بشكل مميز وقوي.',
      services: [
        'تصميم وبرمجة مواقع احترافية عصرية متوافقة مع كل الأجهزة',
        'نركز على تحويل الزوار لعملاء',
        'تصميمات جذابة واحترافية تعبر عن هوية البراند',
        'سرعة عالية ومهيأة لمحركات البحث (SEO)',
      ],
      tabs: [
        {
          title: 'رسالتنا',
          icon: <Target className="w-4 h-4" />,
          content:
            'مساعدة كل عميل في الحصول على هوية مختلفة ومميزة من خلال حلول تصميم وبرمجة مبتكرة تحقق نتائج حقيقية.',
        },
        {
          title: 'رؤيتنا',
          icon: <Globe className="w-4 h-4" />,
          content:
            'أن نصبح الاسم الأكثر ثقة في تصميم وبرمجة المواقع في المنطقة، والمعروفين بالجودة والنتائج.',
        },
        {
          title: 'قيمنا',
          icon: <Palette className="w-4 h-4" />,
          content: 'الجودة، الابتكار، الشفافية، نجاح العميل، والاهتمام بأدق التفاصيل.',
        },
      ],
      why: ['فريق محترف', 'جودة عالية Premium', 'نركز على النتائج', 'سرعة في التنفيذ'],
    },
  };

  const current = content[lang] || content.en;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`py-20 relative overflow-hidden transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/5 via-transparent to-[#00AEEF]/5 dark:from-[#003366]/20 dark:to-[#00AEEF]/20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00AEEF]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00FF99]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00AEEF]/10 to-[#00FF99]/10 border border-[#00AEEF]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-sm font-medium text-[#00AEEF]">{current.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00AEEF] via-[#003366] to-[#00FF99] bg-clip-text text-transparent mb-4">
            {current.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-[#00FF99] mx-auto rounded-full"></div>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          {current.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-3">
            {current.services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#00FF99] flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-[#1A1A1A]" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-[#00AEEF] dark:group-hover:text-[#00AEEF] transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white/50 dark:bg-[#1A1A1A]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#00AEEF]/20 shadow-xl">
            <div className="flex flex-wrap gap-3 mb-6">
              {current.tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? 'bg-gradient-to-r from-[#00AEEF] to-[#003366] text-white shadow-lg shadow-[#00AEEF]/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-[#00AEEF]/20'
                  }`}
                >
                  {tab.icon}
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#00AEEF]/10 to-[#00FF99]/10 dark:from-[#003366]/30 dark:to-[#00AEEF]/30 border-l-4 border-[#00AEEF]">
              <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                {current.tabs[activeTab].content}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-[#00AEEF] to-[#003366] bg-clip-text text-transparent mb-8">
            {lang === 'ar' ? 'لماذا تختار ZINARA MEDIA؟' : 'Why Choose ZINARA MEDIA?'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {current.why.map((item, i) => (
              <div
                key={i}
                className="group text-center p-5 rounded-xl bg-white/40 dark:bg-[#1A1A1A]/40 backdrop-blur-sm border border-white/20 hover:border-[#00AEEF]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#00FF99] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
