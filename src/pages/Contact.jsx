import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, MessageCircle, Sparkles, Instagram } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = ({ lang }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const whatsappNumber = '201062485133';
  const emails = ['support@Zynara.com'];
  const instagramHandle = '@Zynara_official';
  const taxNumber = '312864606484703';

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
        text: lang === 'ar' ? 'شكراً لتواصلك معنا' : 'Thank you for contacting us',
        background: '#1e293b',
        color: '#fff',
        confirmButtonColor: '#8B5CF6',
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
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              {lang === 'ar' ? 'تواصل مع فريقنا' : 'Get In Touch'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Cards */}
          <div className="space-y-5">
            <div className="group p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:-translate-x-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-emerald-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  <span>{lang === 'ar' ? 'الفيوم - المحمدية' : 'Fayoum - El Mohamadeya'}</span>
                </span>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:-translate-x-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
                  dir="ltr"
                >
                  +20 106 248 5133{' '}
                </a>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:-translate-x-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors break-all"
                  dir="ltr"
                >
                  {instagramHandle}
                </a>
              </div>
            </div>

            {emails.map((email, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:-translate-x-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {lang === 'ar' ? 'رقم التسجيل الضريبي' : 'Tax Registration No'}
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-mono">{taxNumber}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 p-8 shadow-xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
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
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all dark:text-white"
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
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all dark:text-white"
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
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center gap-2"
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
