import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Code, Palette, Layers } from 'lucide-react';

const Projects = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

  const content = {
    en: {
      title: 'Our Portfolio',
      subtitle: 'Our Best Work',
      description:
        'Every project we deliver reflects our work quality and our clients trust in us.',
      viewText: 'View Projects',
      close: 'Close',
      headline: 'Featured Projects',
    },
    ar: {
      title: 'أعمالنا',
      subtitle: 'أفضل ما قدمنا',
      description:
        'كل مشروع بنقدمه هو انعكاس لجودة شغلنا واهتمامنا بأدق التفاصيل. أعمالنا بتوضح خبرتنا وثقة عملائنا فينا.',
      viewText: 'استعرض المشاريع',
      close: 'إغلاق',
      headline: 'مشاريع مميزة',
    },
  };

  const current = content[lang] || content.en;

  const logo1 = require('../Assets/logo1.png');
  const logo2 = require('../Assets/logo2.png');
  const logo3 = require('../Assets/logo3.png');
  const logo4 = require('../Assets/logo4.png');
  const logo5 = require('../Assets/logo5.png');

  const categories = [
    {
      id: 'logos',
      titleAr: 'تصميم شعارات',
      titleEn: 'Logos Design',
      icon: <Palette className="w-10 h-10" />,
      cover: require('../Assets/25.jpeg'),
      images: [
        require('../Assets/1.jpeg'),
        require('../Assets/2.jpeg'),
        require('../Assets/3.jpeg'),
        require('../Assets/4.jpeg'),
        require('../Assets/5.jpeg'),
        require('../Assets/6.jpeg'),
        require('../Assets/7.jpeg'),
        require('../Assets/9.jpeg'),
        require('../Assets/10.jpeg'),
        require('../Assets/11.jpeg'),
        require('../Assets/12.jpeg'),
        require('../Assets/13.jpeg'),
        require('../Assets/15.jpeg'),
        require('../Assets/17.jpeg'),
        require('../Assets/18.jpeg'),
        require('../Assets/19.jpeg'),
        require('../Assets/22.jpeg'),
        require('../Assets/23.jpeg'),
        require('../Assets/24.jpeg'),
        require('../Assets/25.jpeg'),
        require('../Assets/27.jpeg'),
      ],
    },
    {
      id: 'social',
      titleAr: 'تصميمات سوشيال ميديا',
      titleEn: 'Social Media Designs',
      icon: <Layers className="w-10 h-10" />,
      cover: require('../Assets/8.jpeg'),
      images: [
        require('../Assets/8.jpeg'),
        require('../Assets/14.jpeg'),
        require('../Assets/16.jpeg'),
        require('../Assets/20.jpeg'),
        require('../Assets/21.jpeg'),
        require('../Assets/26.jpeg'),
        require('../Assets/28.jpeg'),
      ],
    },
    {
      id: 'software',
      titleAr: 'مشاريع برمجية',
      titleEn: 'Software Projects',
      icon: <Code className="w-10 h-10" />,
      cover: require('../Assets/logo2.png'),
      images: [],
      isExternal: true,
      externalLinks: [
        {
          name: 'Chicken Store',
          nameAr: 'متجر تشيكن',
          url: 'https://chicken-one.com/',
          logo: logo2,
        },
        {
          name: 'Cashier System',
          nameAr: 'نظام كاشير',
          url: 'https://cashier-vert.vercel.app/',
          logo: logo1,
        },
        {
          name: 'Cosmetics Store',
          nameAr: 'متجر مستحضرات تجميل',
          url: 'https://cosmetics-flame-three.vercel.app/',
          logo: logo4,
        },
        {
          name: 'El-Zawy Store',
          nameAr: 'متجر الزاوي',
          url: 'https://elzawy-new.com/',
          logo: logo3,
        },
        {
          name: 'Aruqah Real Estate',
          nameAr: 'عروقة العقارية',
          url: 'https://aruqah.vercel.app/',
          logo: logo5,
        },
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const openCategory = (category) => {
    setSelectedCategory(category);
    document.body.style.overflow = 'hidden';
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
    setZoomedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section dir={lang === 'ar' ? 'rtl' : 'ltr'} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00AEEF]/5 via-transparent to-[#00FF99]/5 dark:from-[#003366]/20"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00AEEF]/10 to-[#00FF99]/10 border border-[#00AEEF]/20 mb-4">
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-sm font-medium text-[#00AEEF]">{current.subtitle}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00AEEF] via-[#4A90E2] to-[#00FF99] bg-clip-text text-transparent">
              {current.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-[#00FF99] mx-auto mt-4 rounded-full"></div>
            <p
              className={`text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {current.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                onClick={() => openCategory(cat)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <img
                  src={cat.cover}
                  alt=""
                  className="w-full h-72 object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent flex flex-col items-center justify-end pb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#00AEEF] to-[#003366] flex items-center justify-center mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {cat.icon}
                  </div>
                  <span className="text-white font-bold text-2xl mb-2 text-center px-4">
                    {lang === 'ar' ? cat.titleAr : cat.titleEn}
                  </span>
                  <button className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium border border-white/30 hover:bg-[#00AEEF] hover:border-[#00AEEF] transition-all duration-300">
                    {current.viewText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
          onClick={() => zoomedImageIndex === null && closeCategoryModal()}
        >
          <div
            className="relative bg-gradient-to-br from-[#1A1A1A] to-[#003366] rounded-2xl w-full max-w-6xl max-h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#00AEEF]/30 bg-[#1A1A1A]/50">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00AEEF] to-[#00FF99] bg-clip-text text-transparent">
                {lang === 'ar' ? selectedCategory.titleAr : selectedCategory.titleEn}
              </h3>
              <button
                onClick={closeCategoryModal}
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-red-600 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              {selectedCategory.isExternal ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCategory.externalLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 rounded-xl bg-white/10 hover:bg-[#00AEEF]/20 border border-[#00AEEF]/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4">
                        {/* Logo */}
                        <div className="w-14 h-14 rounded-xl bg-white/10 p-2 flex items-center justify-center overflow-hidden">
                          <img
                            src={link.logo}
                            alt={link.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-semibold text-lg">
                              {lang === 'ar' ? link.nameAr : link.name}
                            </span>
                            <span className="text-[#00AEEF] group-hover:text-[#00FF99] transition-colors">
                              →
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mt-1 break-all">{link.url}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedCategory.images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setZoomedImageIndex(idx)}
                      className="cursor-pointer rounded-xl overflow-hidden border-2 border-transparent hover:border-[#00AEEF] transition-all duration-300 hover:scale-105"
                    >
                      <img src={img} alt="" className="w-full h-40 object-contain" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Zoom modal for images */}
      {zoomedImageIndex !== null && selectedCategory && !selectedCategory.isExternal && (
        <div
          className="fixed inset-0 bg-black/95 z-[70] flex items-center justify-center"
          onClick={closeCategoryModal}
        >
          <img
            src={selectedCategory.images[zoomedImageIndex]}
            alt=""
            className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeCategoryModal}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center"
          >
            <X size={24} className="text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImageIndex(
                (prev) =>
                  (prev - 1 + selectedCategory.images.length) % selectedCategory.images.length
              );
            }}
            className="absolute left-6 w-12 h-12 rounded-full bg-slate-800 hover:bg-[#00AEEF] flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImageIndex((prev) => (prev + 1) % selectedCategory.images.length);
            }}
            className="absolute right-6 w-12 h-12 rounded-full bg-slate-800 hover:bg-[#00AEEF] flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default Projects;
