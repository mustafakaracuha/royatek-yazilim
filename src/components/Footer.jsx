const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
      </svg>
    ),
    color: "hover:text-blue-700",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.384 0-6.63-5.373-12-12-12z" />
      </svg>
    ),
    color: "hover:text-gray-900",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    color: "hover:text-pink-500",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    color: "hover:text-blue-400",
  },
];

const menu = [
  { name: "Anasayfa", href: "#hero" },
  { name: "Hakkımızda", href: "#about" },
  { name: "Hizmetler", href: "#services" },
  { name: "Referanslar", href: "#references" },
  { name: "Yorumlar", href: "#testimonials" },
  { name: "İletişim", href: "#contact" },
];

const services = [
  { name: "Web Geliştirme", href: "#services" },
  { name: "Mobil Uygulama", href: "#services" },
  { name: "UI/UX Tasarım", href: "#services" },
  { name: "Danışmanlık", href: "#services" },
];

const company = [
  { name: "Hakkımızda", href: "#about" },
  { name: "Kariyer", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Basın", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-t from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path fill="url(#footerGradient)" fillOpacity="0.1" d="M0,160L1440,320L1440,0L0,0Z" />
          <defs>
            <linearGradient id="footerGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-8 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Royatek Yazılım
                </h3>
                <p className="text-blue-200 text-sm">Modern Çözümler</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Yenilikçi yazılım çözümleriyle işinizi dijitalde büyütün. Web, mobil ve özel projelerde güvenilir partneriniz. 
              Modern teknolojilerle geleceği şekillendiriyoruz.
            </p>
            
            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-lg font-bold text-white mb-3">Bültenimize Katılın</h4>
              <p className="text-gray-300 text-sm mb-4">Teknoloji güncellemeleri ve özel teklifler için abone olun.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {menu.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              İletişim Bilgileri
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Barbaros Mah. İnönü Cad. No: 123, Ataşehir / İstanbul</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+902122222222" className="text-sm hover:text-blue-400 transition-colors">+90 212 222 22 22</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@royatekyazilim.com" className="text-sm hover:text-blue-400 transition-colors">info@royatekyazilim.com</a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Çalışma Saatleri
            </h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex justify-between">
                <span>Pazartesi - Cuma:</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Cumartesi:</span>
                <span>10:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Pazar:</span>
                <span>Kapalı</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Sosyal Medya
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Royatek Yazılım. Tüm hakları saklıdır.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Gizlilik Politikası</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Kullanım Şartları</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">KVKK</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
