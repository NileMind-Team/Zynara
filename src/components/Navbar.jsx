import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import logoLight from '../Assets/logo.png';
import logoDark from '../Assets/logo.png';

const Navbar = ({ lang, setLang, darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const navLinks = {
    en: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'services', label: 'Services' },
      { id: 'contact', label: 'Contact' },
    ],
    ar: [
      { id: 'home', label: 'الرئيسية' },
      { id: 'about', label: 'من نحن' },
      { id: 'projects', label: 'المشاريع' },
      { id: 'services', label: 'الخدمات' },
      { id: 'contact', label: 'تواصل معنا' },
    ],
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#1A1A1A] shadow-lg border-b border-[#00AEEF]/20' : 'bg-[#1A1A1A]'
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo and Company Name */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleScroll('home')}
        >
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="w-12 h-14 object-contain"
          />
          <span className="text-white font-bold text-xl tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            ZINARA MEDIA
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks[lang].map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-gray-300 hover:text-[#00FF99] font-medium transition-colors relative group text-sm"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00AEEF] to-[#00FF99] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full hover:bg-[#00AEEF]/20 transition"
          >
            {darkMode ? (
              <Sun size={18} className="text-[#00FF99]" />
            ) : (
              <Moon size={18} className="text-[#00AEEF]" />
            )}
          </button>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#003366] text-white text-xs font-medium hover:shadow-lg transition"
          >
            <Globe size={14} /> {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>

        <button className="md:hidden text-gray-300" onClick={toggleMenu}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu - فقط الخلفية على المحتوى */}
      {menuOpen && (
        <>
          {/* Overlay شفاف يغطي الصفحة ويقفل السكرول */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={toggleMenu} />

          {/* محتوى المنيو - خلفية فقط على المحتوى نفسه */}
          <div className="fixed top-16 right-0 left-0 z-50">
            <div className="container mx-auto px-4">
              <div className="bg-[#1A1A1A] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden mx-2">
                {navLinks[lang].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className="w-full py-4 px-6 text-gray-300 hover:text-[#00FF99] hover:bg-gray-800/50 text-base font-medium border-b border-gray-800 last:border-b-0 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="flex gap-3 p-4 bg-gray-900/50">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex-1 py-2 rounded-xl bg-gray-800 flex items-center justify-center gap-2 text-sm text-white hover:bg-gray-700 transition"
                  >
                    {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                    <span>
                      {darkMode
                        ? lang === 'en'
                          ? 'Light'
                          : 'فاتح'
                        : lang === 'en'
                          ? 'Dark'
                          : 'داكن'}
                    </span>
                  </button>
                  <button
                    onClick={toggleLang}
                    className="flex-1 py-2 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#003366] text-white flex items-center justify-center gap-2 text-sm hover:shadow-lg transition"
                  >
                    <Globe size={16} /> {lang === 'en' ? 'AR' : 'EN'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
