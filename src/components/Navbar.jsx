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
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white dark:bg-slate-900 shadow-lg' : 'bg-white dark:bg-slate-900'}`}>
      <div className="container mx-auto px-4 py-1 flex items-center justify-between h-13 md:h-14">
        <div className="cursor-pointer" onClick={() => handleScroll('home')}>
          <img src={darkMode ? logoDark : logoLight} alt="Logo" className="w-10 h-14 object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks[lang].map((link) => (
            <button key={link.id} onClick={() => handleScroll(link.id)} className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors relative group text-sm">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className="p-1.5 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/50 transition">
            {darkMode ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-purple-600" />}
          </button>
          <button onClick={toggleLang} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-emerald-600 text-white text-xs font-medium hover:shadow-lg transition">
            <Globe size={14} /> {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>

        <button className="md:hidden text-gray-700 dark:text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-12 bg-white dark:bg-slate-900 z-40 p-5 flex flex-col">
          {navLinks[lang].map((link) => (
            <button key={link.id} onClick={() => handleScroll(link.id)} className="py-3 text-gray-700 dark:text-gray-200 hover:text-purple-600 text-base font-medium border-b border-gray-100 dark:border-slate-800">
              {link.label}
            </button>
          ))}
          <div className="flex gap-3 mt-5 pt-5 border-t border-gray-100 dark:border-slate-800">
            <button onClick={() => setDarkMode(!darkMode)} className="flex-1 py-2 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center gap-2 text-sm">
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              <span>{darkMode ? (lang === 'en' ? 'Light' : 'فاتح') : (lang === 'en' ? 'Dark' : 'داكن')}</span>
            </button>
            <button onClick={toggleLang} className="flex-1 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-emerald-600 text-white flex items-center justify-center gap-2 text-sm">
              <Globe size={16} /> {lang === 'en' ? 'AR' : 'EN'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;