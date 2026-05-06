import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToHomeButton = ({ lang }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) setVisible(homeSection.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
      className={`fixed bottom-6 z-50 ${lang === 'ar' ? 'right-6' : 'left-6'} w-12 h-12 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#00FF99] text-[#1A1A1A] shadow-xl hover:shadow-[#00AEEF]/50 transition-all duration-300 flex items-center justify-center hover:-translate-y-1`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToHomeButton;
