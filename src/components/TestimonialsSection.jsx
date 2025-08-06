import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Elif Yılmaz",
    title: "Proje Yöneticisi",
    company: "Acme Corp",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    comment: "Royatek Yazılım ile çalışmak harikaydı. Hızlı, güvenilir ve yaratıcı çözümler sundular. Tüm süreç boyunca iletişimleri çok iyiydi!",
    rating: 5,
    project: "E-Ticaret Platformu",
    duration: "6 Ay"
  },
  {
    name: "Ahmet Demir",
    title: "CTO",
    company: "BetaSoft",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    comment: "Ekibin teknik bilgisi ve modern yaklaşımları sayesinde projemiz sorunsuz ve zamanında tamamlandı. Kesinlikle tavsiye ederim!",
    rating: 5,
    project: "Mobil Bankacılık App",
    duration: "8 Ay"
  },
  {
    name: "Zeynep Kaya",
    title: "Girişimci",
    company: "StartupX",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    comment: "UI/UX tasarım ve mobil uygulama geliştirme konusunda beklentilerimin çok üzerinde bir iş çıkardılar. Teşekkürler Royatek Yazılım!",
    rating: 5,
    project: "Sosyal Medya App",
    duration: "4 Ay"
  },
  {
    name: "Mehmet Şahin",
    title: "Dijital Pazarlama Uzmanı",
    company: "Delta Medya",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    comment: "Referanslarımız arasında Royatek Yazılım ile çalışmak büyük bir ayrıcalıktı. Sonuçlar mükemmel!",
    rating: 5,
    project: "CMS Platformu",
    duration: "5 Ay"
  },
  {
    name: "Ayşe Korkmaz",
    title: "Yazılım Geliştirici",
    company: "TechCo",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    comment: "Ekibin ilgisi ve desteği sayesinde projemiz başarıyla hayata geçti. Herkese tavsiye ederim!",
    rating: 5,
    project: "Web Uygulaması",
    duration: "3 Ay"
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const getVisible = () => {
    const arr = [];
    for (let i = 0; i < perView; i++) {
      arr.push(testimonials[(index + i) % testimonials.length]);
    }
    return arr;
  };

  const goToIndex = (newIndex) => {
    setIndex(newIndex);
    clearTimeout(timeoutRef.current);
  };

  const prev = () => {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    clearTimeout(timeoutRef.current);
  };

  const next = () => {
    setIndex((i) => (i + 1) % testimonials.length);
    clearTimeout(timeoutRef.current);
  };

  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 px-4 overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-200/10 via-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path fill="url(#testimonialsGradient)" fillOpacity="0.1" d="M0,160L1440,320L1440,0L0,0Z" />
          <defs>
            <linearGradient id="testimonialsGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Müşteri Deneyimleri
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-700 via-blue-600 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Ne Diyorlar?
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Müşterilerimizin deneyimleri ve geri bildirimleri bizim için en değerli ödül. 
            Her projede kalite, güvenilirlik ve müşteri memnuniyeti odaklı çalışıyoruz.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-blue-100 text-blue-700 rounded-full shadow-lg transition-all duration-300 hidden lg:flex items-center justify-center group"
            aria-label="Önceki yorum"
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-blue-100 text-blue-700 rounded-full shadow-lg transition-all duration-300 hidden lg:flex items-center justify-center group"
            aria-label="Sonraki yorum"
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid gap-8 transition-all duration-700" style={{gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))`}}>
            {getVisible().map((t, i) => (
              <div
                key={t.name}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                          {t.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">{t.title}</p>
                        <p className="text-xs text-blue-600 font-semibold">{t.company}</p>
                      </div>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, index) => (
                        <svg key={index} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-purple-700">Proje:</span>
                      <span className="text-sm font-medium text-gray-700">{t.project}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-purple-700">Süre:</span>
                      <span className="text-sm font-medium text-gray-700">{t.duration}</span>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="relative">
                    <svg className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p className="text-gray-700 text-base leading-relaxed font-medium italic pl-6">
                      "{t.comment}"
                    </p>
                  </div>

                  {/* Verified Badge */}
                  <div className="mt-6 flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-200/50">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-semibold text-green-700">Doğrulanmış Müşteri</span>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-gradient-to-r from-purple-600 to-blue-600 scale-125 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Yoruma geç: ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
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
