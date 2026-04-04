import { useState, useEffect, useRef } from 'react';
import { Building2, Users2, Target, Sparkles, CheckCircle2, Zap } from 'lucide-react';

const About = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const content = {
    en: {
      title: 'Who We Are',
      subtitle: 'Redefining Construction Excellence',
      description:
        'Aruqah delivers cutting-edge, reliable, and innovative projects across residential, commercial, and industrial sectors, including:',
      services: [
        'Modern designs and advanced engineering plans for finishing works',
        'Smart electrical, plumbing, and marble foundation systems',
        'Premium gypsum, paint, aluminum, and wooden finishes',
        'Comprehensive maintenance for public and private facilities',
      ],
      tabs: [
        {
          title: 'Mission',
          icon: <Target className="w-4 h-4" />,
          content: 'To revolutionize construction through innovation, sustainability, and unwavering quality.',
        },
        {
          title: 'Vision',
          icon: <Building2 className="w-4 h-4" />,
          content: 'To become the most trusted name in modern infrastructure and smart construction.',
        },
        {
          title: 'Values',
          icon: <Users2 className="w-4 h-4" />,
          content: 'Innovation, integrity, collaboration, and excellence drive everything we do.',
        },
      ],
      why: ['Cutting-Edge Technology', 'Zero-Delay Delivery', 'Transparent Pricing', 'Custom Solutions'],
    },
    ar: {
      title: 'من نحن',
      subtitle: 'نعيد تعريف التميز في البناء',
      description:
        'تقدم أروقة مشاريع مبتكرة وموثوقة في القطاعات السكنية والتجارية والصناعية، وتشمل:',
      services: [
        'تصميمات عصرية وخطط هندسية متقدمة للتشطيبات',
        'أنظمة تأسيس ذكية للكهرباء والسباكة والرخام',
        'تشطيبات فاخرة من الجبس والدهانات والألمنيوم',
        'صيانة شاملة للمرافق العامة والخاصة',
      ],
      tabs: [
        {
          title: 'رسالتنا',
          icon: <Target className="w-4 h-4" />,
          content: 'إحداث ثورة في البناء من خلال الابتكار والاستدامة والجودة.',
        },
        {
          title: 'رؤيتنا',
          icon: <Building2 className="w-4 h-4" />,
          content: 'أن نصبح الاسم الأكثر ثقة في البنية التحتية الحديثة.',
        },
        {
          title: 'قيمنا',
          icon: <Users2 className="w-4 h-4" />,
          content: 'الابتكار، النزاهة، التعاون، والتميز.',
        },
      ],
      why: ['تقنية متطورة', 'تسليم فوري', 'أسعار شفافة', 'حلول مخصصة'],
    },
  };

  const current = content[lang] || content.en;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-emerald-50/30 dark:from-blue-950/20 dark:to-emerald-950/20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{current.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            {current.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          {current.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-3">
            {current.services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex flex-wrap gap-3 mb-6">
              {current.tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? 'bg-gradient-to-r from-purple-600 to-emerald-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-slate-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/50'
                  }`}
                >
                  {tab.icon}
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-emerald-50 dark:from-purple-950/30 dark:to-emerald-950/30 border-l-4 border-purple-500">
              <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                {current.tabs[activeTab].content}
              </p>
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            {lang === 'ar' ? 'لماذا نتميز؟' : 'Why Choose Us?'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {current.why.map((item, i) => (
              <div
                key={i}
                className="group text-center p-5 rounded-xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
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