import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (lang === 'ar') {
      document.title = 'ZINARA MEDIA - تصميم وبرمجة مواقع احترافية';
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          'content',
          'ZINARA MEDIA - شركة متخصصة في تصميم وبرمجة المواقع والجرافيك ديزين، نقدم حلولاً رقمية مبتكرة لعملائنا في مصر والوطن العربي.'
        );
    } else {
      document.title = 'ZINARA MEDIA - Professional Web Design & Development';
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          'content',
          'ZINARA MEDIA - Professional web design and development company, specializing in modern websites and graphic design solutions.'
        );
    }
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [lang]);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          darkMode ? 'bg-[#1A1A1A]' : 'bg-white'
        }`}
      >
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#00FF99]/30 border-t-[#00FF99] rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-[#00AEEF] rounded-full animate-spin"
            style={{ animationDuration: '0.8s' }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#1A1A1A] transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
