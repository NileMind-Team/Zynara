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
      document.title = 'أروقة - حلول عقارية مبتكرة';
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          'content',
          'أروقة - بيع، شراء وتأجير العقارات في السعودية مع حلول مبتكرة وموثوقة تناسب احتياجاتك العقارية.'
        );
    } else {
      document.title = 'Aruqah - Innovative Real Estate Solutions';
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          'content',
          'Aruqah - Buy, sell, and rent properties in Saudi Arabia with innovative and trusted real estate solutions tailored to your needs.'
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
          darkMode ? 'bg-slate-900' : 'bg-slate-50'
        }`}
      >
        <div className="relative">
          <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-500 rounded-full animate-spin" style={{ animationDuration: '0.8s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;