import { useState, useEffect, useRef } from "react";
import { HardHat, PaintRoller, Ruler, Sparkles, ArrowRight } from "lucide-react";

const Services = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      title: "Our Expertise",
      subtitle: "Comprehensive Construction Solutions",
      description: "Delivering excellence across every phase of your project with cutting-edge technology and unmatched craftsmanship.",
      items: [
        { icon: <HardHat className="w-12 h-12" />, title: "Structural Foundations", desc: "Robust foundation systems engineered for longevity and safety." },
        { icon: <PaintRoller className="w-12 h-12" />, title: "Premium Finishing", desc: "Elegant interior and exterior finishes that exceed expectations." },
        { icon: <Ruler className="w-12 h-12" />, title: "Smart Engineering", desc: "Innovative design solutions using BIM and advanced analytics." },
      ],
    },
    ar: {
      title: "خبراتنا",
      subtitle: "حلول بناء شاملة",
      description: "نقدم التميز في كل مرحلة من مراحل مشروعك بأحدث التقنيات والحرفية التي لا تضاهى.",
      items: [
        { icon: <HardHat className="w-12 h-12" />, title: "أسس هيكلية", desc: "أنظمة أساسية قوية مصممة لطول العمر والأمان." },
        { icon: <PaintRoller className="w-12 h-12" />, title: "تشطيبات فاخرة", desc: "تشطيبات داخلية وخارجية أنيقة تفوق التوقعات." },
        { icon: <Ruler className="w-12 h-12" />, title: "هندسة ذكية", desc: "حلول تصميم مبتكرة باستخدام نمذجة معلومات البناء." },
      ],
    },
  };

  const current = content[lang] || content.en;

  return (
    <section ref={sectionRef} dir={lang === "ar" ? "rtl" : "ltr"} className={`py-20 relative overflow-hidden transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-purple-50/30 dark:from-emerald-950/20 dark:to-purple-950/20"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{current.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            {current.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">{current.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {current.items.map((item, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-emerald-500 flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium text-sm group-hover:gap-3 transition-all">
                <span>{lang === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;