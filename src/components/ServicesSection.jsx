const services = [
  {
    title: "Web Yazılım",
    subtitle: "Modern Web Uygulamaları",
    icon: (
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-500 to-blue-400 rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
          </svg>
        </div>
        <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
    ),
    desc: "Kurumsal ve özel web uygulamaları, hızlı ve güvenli altyapı ile profesyonel çözümler. React, Vue.js ve modern teknolojilerle geliştiriyoruz.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    features: ["Responsive Tasarım", "SEO Optimizasyonu", "Güvenlik", "Hızlı Performans"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Mobil Uygulama",
    subtitle: "iOS & Android Geliştirme",
    icon: (
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-400 rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <path d="M8 6h8" />
          </svg>
        </div>
        <div className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
    ),
    desc: "iOS ve Android için kullanıcı dostu, performanslı mobil uygulama geliştirme. React Native ve Flutter ile cross-platform çözümler.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    features: ["Cross-Platform", "Native Performans", "Push Bildirimler", "App Store Optimizasyonu"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Danışmanlık",
    subtitle: "Teknoloji Danışmanlığı",
    icon: (
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-400 rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="absolute -inset-2 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
    ),
    desc: "Dijital dönüşüm, yazılım mimarisi ve teknoloji danışmanlığı ile işinizi ileri taşıyın. Stratejik planlama ve roadmap oluşturma.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    features: ["Stratejik Planlama", "Mimari Tasarım", "Teknoloji Seçimi", "Roadmap Oluşturma"],
    gradient: "from-emerald-500 to-teal-600"
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 px-4 overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 via-purple-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path fill="url(#servicesGradient)" fillOpacity="0.1" d="M0,160L1440,320L1440,0L0,0Z" />
          <defs>
            <linearGradient id="servicesGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Hizmetlerimiz
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Neler Sunuyoruz?
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Royatek Yazılım olarak, işletmenize özel web ve mobil yazılım çözümleriyle dijital dönüşümünüzü hızlandırıyoruz. 
            Modern teknolojilerle, güvenilir ve kullanıcı dostu projeler geliştiriyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:gap-12 xl:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative p-8 lg:p-10">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>

                {/* Title & Subtitle */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    {service.subtitle}
                  </p>
                </div>

                {/* Image */}
                <div className="mb-6 relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 text-center">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn relative overflow-hidden`}
                  >
                    <span className="relative z-10">Teklif Al</span>
                    <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </a>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">7/24 Teknik Destek</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700 font-medium">%100 Memnuniyet Garantisi</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}
