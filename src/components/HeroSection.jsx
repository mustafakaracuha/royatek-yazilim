import { useScrollReveal } from "../hooks/useScrollReveal";

export default function HeroSection() {
  const [titleRef, titleRevealed] = useScrollReveal({ delay: 200 });
  const [subtitleRef, subtitleRevealed] = useScrollReveal({ delay: 400 });
  const [ctaRef, ctaRevealed] = useScrollReveal({ delay: 600 });
  const [imageRef, imageRevealed] = useScrollReveal({ delay: 300 });
  const [logosRef, logosRevealed] = useScrollReveal({ delay: 800 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 overflow-hidden" style={{height: '100vh'}}>
      {/* Hareketli blur shape */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400 via-purple-300 to-blue-200 rounded-full blur-3xl opacity-30 animate-pulse-slow z-0" />
      {/* Yavaşça hareket eden SVG shape */}
      <div className="absolute right-0 top-1/3 w-80 h-80 opacity-20 z-0 animate-move-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#a78bfa" d="M44.8,-67.2C58.7,-59.2,70.2,-48.2,75.2,-34.8C80.2,-21.4,78.7,-5.7,74.2,8.7C69.7,23.1,62.2,36.2,52.1,46.2C42,56.2,29.3,63.1,15.2,68.2C1.1,73.3,-14.4,76.6,-28.2,72.2C-42,67.8,-54.1,55.7,-62.2,41.2C-70.3,26.7,-74.4,9.8,-73.2,-6.2C-72,-22.2,-65.5,-37.3,-55.2,-46.7C-44.8,-56.2,-30.6,-59.9,-16.2,-65.2C-1.8,-70.5,12.8,-77.3,27.2,-77.2C41.6,-77.1,55.8,-70.2,44.8,-67.2Z" transform="translate(100 100)" /></svg>
      </div>
      {/* SVG dalga */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path fill="url(#gradient)" fillOpacity="0.25" d="M0,160L1440,320L1440,0L0,0Z" />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full px-4">
        {/* Sol: Başlık ve CTA */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 
            ref={titleRef}
            className={`text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-1000 ${
              titleRevealed ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-60px]'
            }`}
          >
            Modern Yazılım <br /> <span className="text-blue-700">Çözümleriyle</span> <br /> İşinizi Büyütün
          </h1>
          <p 
            ref={subtitleRef}
            className={`text-xl md:text-2xl text-gray-700 mb-8 font-medium transition-all duration-1000 delay-200 ${
              subtitleRevealed ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-60px]'
            }`}
          >
            Royatek Yazılım olarak, işletmenize özel web ve mobil yazılım çözümleriyle dijital dönüşümünüzü hızlandırıyoruz.
          </p>
          <a
            ref={ctaRef}
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
            className={`inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-bold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg relative group hover-float ${
              ctaRevealed ? 'animate-bounce-in' : 'opacity-0 scale-75'
            }`}
            style={{boxShadow: '0 0 24px 4px #a78bfa55'}}
          >
            <span>Hemen Teklif Al</span>
            <span className="ml-2 animate-bounce-x">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-lg group-hover:opacity-60 transition-all duration-300 -z-10"></span>
          </a>
          <div 
            ref={logosRef}
            className={`mt-8 text-gray-500 text-sm flex gap-4 items-center transition-all duration-1000 delay-500 ${
              logosRevealed ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-60px]'
            }`}
          >
            <span>Güvenilir markalar:</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo1" className="h-6 hover-float" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="logo2" className="h-6 hover-float" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="logo3" className="h-6 hover-float" />
          </div>
        </div>
        {/* Sağ: Modern görsel/mockup + kod overlay */}
        <div 
          ref={imageRef}
          className={`flex-1 flex justify-center items-center relative transition-all duration-1000 delay-300 ${
            imageRevealed ? 'animate-slide-in-right' : 'opacity-0 translate-x-[60px]'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
            alt="Royal Yazılım Hero Görsel"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-blue-100 hover-float"
          />
          {/* Kod bloğu overlay */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 bg-black/80 text-green-400 font-mono text-xs rounded-xl shadow-lg p-4 animate-fade-in delay-400 border border-green-300" style={{backdropFilter:'blur(2px)'}}>
            <div><span className="text-blue-400">function</span> <span className="text-green-300">geliştir</span>() {'{'}</div>
            <div className="pl-4">return <span className="text-yellow-300">"Royatek Yazılım ile modern çözümler"</span>;</div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
      {/* Aşağı kaydır ok animasyonu ve metin */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-fade-in delay-700 hover-float">
        <svg className="w-8 h-8 text-blue-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        <span className="text-xs text-blue-500 mt-2 tracking-wide">Daha fazla keşfet</span>
      </div>
      <style>{`
        @keyframes pulse-slow { 0%,100%{opacity:.4} 50%{opacity:.7} }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        @keyframes move-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(30px)} }
        .animate-move-slow { animation: move-slow 12s ease-in-out infinite; }
        @keyframes bounce-x { 0%,100%{transform:translateX(0)} 50%{transform:translateX(8px)} }
        .animate-bounce-x { animation: bounce-x 1.2s infinite; }
      `}</style>
    </section>
  );
} 