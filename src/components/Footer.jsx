import { Mail, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';
import bg from '../Assets/footer.jpg';
import logo from '../Assets/logo.png';

const Footer = ({ lang = 'ar' }) => {
  const whatsappNumber = '201152093245';
  const emails = ['zynaramedia09@gmail.com'];
  const phoneNumber = '+20 115 209 3245';
  const instagramHandle = '@zynara_media';
  const facebookHandle = 'ZynaraMedia';
  const tiktokHandle = '@zynaramedia09';
  const tiktokUrl = 'https://tiktok.com/@zynaramedia09';
  const address = {
    ar: 'القاهرة - مصر الجديدة - بجوار مستشفى هليوبوليس',
    en: 'Cairo - Heliopolis - Next to Heliopolis Hospital',
  };

  const quickLinks = {
    ar: [
      { label: 'الرئيسية', href: 'home' },
      { label: 'من نحن', href: 'about' },
      { label: 'المشاريع', href: 'projects' },
      { label: 'الخدمات', href: 'services' },
      { label: 'تواصل معنا', href: 'contact' },
    ],
    en: [
      { label: 'Home', href: 'home' },
      { label: 'About', href: 'about' },
      { label: 'Projects', href: 'projects' },
      { label: 'Services', href: 'services' },
      { label: 'Contact', href: 'contact' },
    ],
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // TikTok Icon Component
  const TikTokIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );

  return (
    <footer className="relative bg-[#1A1A1A] text-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#003366]/80 to-[#1A1A1A]/90"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <img src={logo} alt="Logo" className="w-28 mb-4" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00AEEF] to-[#00FF99] bg-clip-text text-transparent">
              ZINARA MEDIA
            </h3>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              {lang === 'ar'
                ? 'شركاء نجاح لعملائنا في التصميم والبرمجة'
                : 'Your success partners in design and development'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00AEEF]">
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks[lang].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-gray-400 hover:text-[#00FF99] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00AEEF]">
              {lang === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#00FF99]" />
                <span>{address[lang]}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-[#00FF99]" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00FF99] transition-colors"
                >
                  {lang === 'ar' ? (
                    <>
                      واتساب :
                      <span dir="ltr" className="ms-1">
                        {phoneNumber}
                      </span>
                    </>
                  ) : (
                    `WhatsApp: ${phoneNumber}`
                  )}
                </a>
              </div>
              {emails.map((email) => (
                <div key={email} className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-[#00AEEF]" />
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-400 hover:text-[#00AEEF] transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-3 text-sm">
                <Instagram className="w-4 h-4 text-[#00FF99]" />
                <a
                  href="https://www.instagram.com/zynara_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00FF99] transition-colors"
                >
                  {instagramHandle}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Facebook className="w-4 h-4 text-[#00AEEF]" />
                <a
                  href="https://www.facebook.com/share/1DvLFUyjyk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00AEEF] transition-colors"
                >
                  {facebookHandle}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <TikTokIcon />
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00FF99] transition-colors"
                >
                  {tiktokHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#00AEEF]/20 text-center text-gray-500 text-sm">
          © 2026 ZINARA MEDIA. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
