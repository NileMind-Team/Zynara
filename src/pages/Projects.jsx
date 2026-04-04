import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Building2, Paintbrush, Sparkles } from 'lucide-react';

const Projects = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

  const content = {
    en: {
      title: 'Our Portfolio',
      subtitle: 'Where Innovation Meets Craftsmanship',
      description: 'Explore our award-winning construction and finishing projects.',
      viewText: 'Explore',
      close: 'Close',
      headline: 'Featured Works',
    },
    ar: {
      title: 'مشاريعنا',
      subtitle: 'حيث يلتقي الابتكار بالإتقان',
      description: 'استكشف مشاريعنا الحائزة على جوائز في البناء والتشطيب.',
      viewText: 'استكشف',
      close: 'إغلاق',
      headline: 'أعمال مميزة',
    },
  };

  const current = content[lang] || content.en;

  const categories = [
    {
      id: 'construction',
      titleAr: 'أعمال البناء',
      titleEn: 'Construction',
      icon: <Building2 className="w-10 h-10" />,
      cover: require('../Assets/project62.jpg'),
      images: Array.from({ length: 20 }, (_, i) => require(`../Assets/project${49 + i}.jpg`)),
    },
    {
      id: 'finishing',
      titleAr: 'أعمال التشطيب',
      titleEn: 'Finishing',
      icon: <Paintbrush className="w-10 h-10" />,
      cover: require('../Assets/project11.jpg'),
      images: Array.from({ length: 48 }, (_, i) => {
        const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,27,28,22,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];
        return require(`../Assets/project${nums[i]}.jpg`);
      }),
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
        <div className="absolute inset-0 bg-gradient-to-t from-purple-50/30 via-transparent to-emerald-50/30 dark:from-purple-950/20"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20 mb-4">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{current.subtitle}</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {current.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
            <p className={`text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {current.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                onClick={() => openCategory(cat)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <img src={cat.cover} alt="" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent flex flex-col items-center justify-end pb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-emerald-500 flex items-center justify-center mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {cat.icon}
                  </div>
                  <span className="text-white font-bold text-2xl mb-2">
                    {lang === 'ar' ? cat.titleAr : cat.titleEn}
                  </span>
                  <button className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium border border-white/30 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300">
                    {current.viewText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - same structure but with new colors */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4" onClick={() => zoomedImageIndex === null && closeCategoryModal()}>
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl w-full max-w-6xl max-h-[85vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center px-6 py-4 border-b border-purple-500/30 bg-slate-900/50">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                {lang === 'ar' ? selectedCategory.titleAr : selectedCategory.titleEn}
              </h3>
              <button onClick={closeCategoryModal} className="w-10 h-10 rounded-full bg-slate-700 hover:bg-red-600 flex items-center justify-center transition-all">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedCategory.images.map((img, idx) => (
                  <div key={idx} onClick={() => setZoomedImageIndex(idx)} className="cursor-pointer rounded-xl overflow-hidden border-2 border-transparent hover:border-purple-500 transition-all duration-300 hover:scale-105">
                    <img src={img} alt="" className="w-full h-40 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Zoom modal */}
      {zoomedImageIndex !== null && selectedCategory && (
        <div className="fixed inset-0 bg-black/95 z-[70] flex items-center justify-center" onClick={closeCategoryModal}>
          <img src={selectedCategory.images[zoomedImageIndex]} alt="" className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={closeCategoryModal} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center">
            <X size={24} className="text-white" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setZoomedImageIndex((prev) => (prev - 1 + selectedCategory.images.length) % selectedCategory.images.length); }} className="absolute left-6 w-12 h-12 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setZoomedImageIndex((prev) => (prev + 1) % selectedCategory.images.length); }} className="absolute right-6 w-12 h-12 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default Projects;