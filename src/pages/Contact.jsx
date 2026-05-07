import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, MessageCircle, Sparkles, Instagram, Facebook } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = ({ lang }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const whatsappNumber = '201152093245';
  const emails = ['zynaramedia09@gmail.com'];
  const instagramHandle = '@zynara_media';
  const facebookHandle = 'ZynaraMedia';
  const tiktokHandle = '@zynaramedia09';
  const tiktokUrl = 'https://tiktok.com/@zynaramedia09';
  const address = {
    ar: 'القاهرة - مصر الجديدة - بجوار مستشفى هليوبوليس',
    en: 'Cairo - Heliopolis - Next to Heliopolis Hospital',
  };

  // TikTok Icon Component
  const TikTokIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: lang === 'ar' ? 'تم الإرسال بنجاح!' : 'Sent Successfully!',
        text:
          lang === 'ar' ? 'شكراً لتواصلك مع ZINARA MEDIA' : 'Thank you for contacting ZINARA MEDIA',
        background: '#1A1A1A',
        color: '#fff',
        confirmButtonColor: '#00AEEF',
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`py-20 relative overflow-hidden transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#003366]/10 via-transparent to-[#00AEEF]/10 dark:from-[#003366]/20 dark:to-[#00AEEF]/20"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#00AEEF]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#00FF99]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00AEEF]/10 to-[#00FF99]/10 border border-[#00AEEF]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-sm font-medium text-[#00AEEF]">
              {lang === 'ar' ? 'تواصل مع فريقنا' : 'Get In Touch'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00AEEF] via-[#4A90E2] to-[#00FF99] bg-clip-text text-transparent">
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-[#00FF99] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'خلّنا نبدأ مشروعك وننقله لمستوى أقوى. تواصل مع ZINARA MEDIA الآن.'
              : "Let's start your project and take it to the next level. Contact ZINARA MEDIA now."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Info Cards */}
          <div className="space-y-5">
            <div className="group p-6 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-500 hover:-translate-x-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#003366] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {address[lang]}
                </span>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 hover:border-[#00FF99]/50 transition-all duration-500 hover:-translate-x-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00FF99] to-[#00AEEF] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#00FF99] transition-colors"
                  dir="ltr"
                >
                  +20 115 209 3245
                </a>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-500 hover:-translate-x-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#003366] flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <a
                  href="https://www.instagram.com/zynara_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#00AEEF] transition-colors"
                >
                  {instagramHandle}
                </a>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-500 hover:-translate-x-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#003366] to-[#00AEEF] flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <a
                  href="https://www.facebook.com/share/1DvLFUyjyk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#00AEEF] transition-colors"
                >
                  {facebookHandle}
                </a>
              </div>
            </div>

            {emails.map((email, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-500 hover:-translate-x-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#00FF99] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-[#00AEEF] transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              </div>
            ))}

            {/* TikTok Card - Same style as others */}
            <div className="group p-6 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 hover:border-[#00FF99]/50 transition-all duration-500 hover:-translate-x-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#003366] to-[#00AEEF] flex items-center justify-center">
                  <TikTokIcon />
                </div>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#00FF99] transition-colors"
                >
                  {tiktokHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Form - Now height fits content automatically */}
          <div className="rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 p-8 shadow-xl h-fit">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00AEEF] to-[#00FF99] bg-clip-text text-transparent mb-6">
              {lang === 'ar' ? 'أرسل رسالة' : 'Send a Message'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  required
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 outline-none transition-all dark:text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  required
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 outline-none transition-all dark:text-white"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={lang === 'ar' ? 'رسالتك...' : 'Your Message...'}
                  required
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 outline-none transition-all resize-none dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#003366] text-white font-semibold hover:shadow-lg hover:shadow-[#00AEEF]/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {loading
                  ? lang === 'ar'
                    ? 'جار الإرسال...'
                    : 'Sending...'
                  : lang === 'ar'
                    ? 'إرسال'
                    : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
