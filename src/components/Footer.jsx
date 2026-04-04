import { Mail, MessageCircle, MapPin, Instagram } from 'lucide-react';
import bg from '../Assets/footer.jpeg';
import logo from '../Assets/logo.png';

const Footer = ({ lang = 'ar' }) => {
  const whatsappNumber = '201062485133';
  const emails = ['support@Aruqah.com'];
  const phoneNumber = '+20 106 248 5133';
  const instagramHandle = '@Aruqah_official';
  const taxNumber = '312864606484703';

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

  return (
    <footer
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
          filter: 'brightness(0.75) contrast(0.9)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <img src={logo} alt="Logo" className="w-28 mb-4" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              {lang === 'ar' ? 'أروقة' : 'Aruqah'}
            </h3>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              {lang === 'ar'
                ? 'بناء المستقبل بجودة وإتقان'
                : 'Building the future with quality and precision'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks[lang].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              {lang === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{lang === 'ar' ? 'الفيوم - المحمدية' : 'Fayoum - El Mohamadeya'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
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
                  )}{' '}
                </a>
              </div>
              {emails.map((email) => (
                <div key={email} className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-3 text-base mb-3">
                <Instagram className="w-4 h-4 text-purple-400" />
                <a
                  href="https://instagram.com/BreatyWomen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors break-all"
                >
                  {instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Tax Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              {lang === 'ar' ? 'الرقم الضريبي' : 'Tax Info'}
            </h4>
            <div className="p-4 rounded-xl bg-white/5 border border-purple-500/20">
              <p className="text-xs text-gray-400 mb-1">
                {lang === 'ar' ? 'رقم التسجيل' : 'Registration No'}
              </p>
              <p className="text-sm font-mono text-purple-300">{taxNumber}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-purple-500/20 text-center text-gray-500 text-sm">
          © 2026 {lang === 'ar' ? 'أروقة' : 'Aruqah'}.{' '}
          {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
