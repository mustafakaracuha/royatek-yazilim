import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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

  // Scroll reveal hooks
  const [headerRef, headerRevealed] = useScrollReveal({ delay: 200 });
  const [carouselRef, carouselRevealed] = useScrollReveal({ delay: 400 });
  const [controlsRef, controlsRevealed] = useScrollReveal({ delay: 600 });

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
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-200/10 via-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path fill="url(#testimonialsGradient)" fillOpacity="0.1" d="M0,160L1440,320L1440,0L0,0Z" />
          <defs>
            <linearGradient id="testimonialsGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#3b82f6" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Müşteri Yorumları
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-700 via-blue-600 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Ne Diyorlar?
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Müşterilerimizin deneyimleri ve geri bildirimleri bizim için en değerli referans. 
            Her projede kalite ve müşteri memnuniyeti odaklı çalışıyoruz.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          ref={carouselRef}
          className={`relative mb-12 transition-all duration-1000 ${
            carouselRevealed ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-[60px]'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisible().map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${index + i}`}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 overflow-hidden hover-float"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Comment */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.title}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Proje:</span>
                      <span className="font-medium text-gray-900">{testimonial.project}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Süre:</span>
                      <span className="font-medium text-gray-900">{testimonial.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div 
          ref={controlsRef}
          className={`flex items-center justify-center gap-4 transition-all duration-1000 ${
            controlsRevealed ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-[60px]'
          }`}
        >
          {/* Previous Button */}
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
