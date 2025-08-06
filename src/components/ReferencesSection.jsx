import { useState, useEffect } from "react";

const references = [
  {
    name: "Acme Corp",
    industry: "Teknoloji",
    desc: "Kurumsal web projesi, özel yazılım geliştirme ve dijital dönüşüm süreçleri.",
    logo: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Acme Corp"
        className="w-16 h-16 rounded-2xl object-contain bg-white shadow-lg p-2"
      />
    ),
    project: "E-Ticaret Platformu",
    duration: "6 Ay",
    technologies: ["React", "Node.js", "MongoDB"],
    rating: 5,
    testimonial: "Mükemmel iş çıkardılar, çok memnunuz!"
  },
  {
    name: "BetaSoft",
    industry: "Fintech",
    desc: "Mobil uygulama ve UI/UX danışmanlığı ile kullanıcı deneyimi optimizasyonu.",
    logo: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
        alt="BetaSoft"
        className="w-16 h-16 rounded-2xl object-contain bg-white shadow-lg p-2"
      />
    ),
    project: "Mobil Bankacılık App",
    duration: "8 Ay",
    technologies: ["React Native", "Firebase", "Stripe"],
    rating: 5,
    testimonial: "Profesyonel yaklaşım ve kaliteli kod!"
  },
  {
    name: "Delta Medya",
    industry: "Medya",
    desc: "Dijital dönüşüm ve teknoloji danışmanlığı ile içerik yönetim sistemi.",
    logo: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt="Delta Medya"
        className="w-16 h-16 rounded-2xl object-contain bg-white shadow-lg p-2"
      />
    ),
    project: "CMS Platformu",
    duration: "4 Ay",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    rating: 5,
    testimonial: "Hızlı ve güvenilir çözümler!"
  },
];

export default function ReferencesSection() {
  return (
    <section id="references" className="relative py-32 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 px-4 overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-tl from-purple-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-200/10 via-purple-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path fill="url(#refsGradient)" fillOpacity="0.08" d="M0,160L1440,320L1440,0L0,0Z" />
          <defs>
            <linearGradient id="refsGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-green-700 font-medium text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Başarılı Projeler
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Referanslarımız
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Royatek Yazılım olarak, farklı sektörlerden müşterilerimizle başarılı projeler gerçekleştirdik. 
            Her projede kalite, güvenilirlik ve müşteri memnuniyeti odaklı çalışıyoruz.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Tamamlanan Proje</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
            <div className="text-gray-600 font-medium">Mutlu Müşteri</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Yıllık Deneyim</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">%100</div>
            <div className="text-gray-600 font-medium">Müşteri Memnuniyeti</div>
          </div>
        </div>

        {/* References Grid */}
        <div className="grid gap-8 lg:gap-10 xl:grid-cols-3">
          {references.map((ref, i) => (
            <div
              key={ref.name}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {ref.logo}
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {ref.name}
                      </h3>
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full text-xs font-medium text-blue-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {ref.industry}
                      </div>
                    </div>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(ref.rating)].map((_, index) => (
                      <svg key={index} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-700">Proje:</span>
                    <span className="text-sm font-medium text-gray-700">{ref.project}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-700">Süre:</span>
                    <span className="text-sm font-medium text-gray-700">{ref.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-700">Teknolojiler:</span>
                    <div className="flex gap-1">
                      {ref.technologies.map((tech, index) => (
                        <span key={tech} className="px-2 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700 border border-blue-200/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {ref.desc}
                </p>

                {/* Testimonial */}
                <div className="relative p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200/50">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p className="text-sm text-gray-700 font-medium italic">
                      "{ref.testimonial}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}
