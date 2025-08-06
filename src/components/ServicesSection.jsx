import { useScrollReveal } from "../hooks/useScrollReveal";

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
  const [headerRef, headerRevealed] = useScrollReveal({ delay: 200 });
  const [service1Ref, service1Revealed] = useScrollReveal({ delay: 300 });
  const [service2Ref, service2Revealed] = useScrollReveal({ delay: 500 });
  const [service3Ref, service3Revealed] = useScrollReveal({ delay: 700 });

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
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerRevealed ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-[60px]'
          }`}
        >
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
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const refs = [service1Ref, service2Ref, service3Ref];
            const revealed = [service1Revealed, service2Revealed, service3Revealed];
            
            return (
              <div
                key={service.title}
                ref={refs[index]}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover-float ${
                  revealed[index] ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-[60px]'
                }`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{service.subtitle}</p>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* CTA Button */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector('#contact');
                      if (el) {
                        const headerHeight = 80;
                        const targetPosition = el.offsetTop - headerHeight;
                        window.scrollTo({
                          top: targetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 group-hover:from-blue-700 group-hover:to-purple-700"
                  >
                    <span>Detayları Gör</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
