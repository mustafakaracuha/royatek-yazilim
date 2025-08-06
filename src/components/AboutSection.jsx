export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-white via-blue-50 to-purple-50 px-4 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path
            fill="url(#aboutsvg)"
            fillOpacity="0.15"
            d="M0,160L1440,320L1440,0L0,0Z"
          />
          <defs>
            <linearGradient id="aboutsvg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 z-10 relative animate-fade-in">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            Hakkımızda
          </h2>
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Royatek Yazılım, 2018 yılında yazılım dünyasına yenilikçi çözümler
            sunmak amacıyla kuruldu. Kurumsal ve bireysel müşterilerimize,
            modern teknolojilerle yüksek kaliteli yazılım projeleri
            geliştiriyoruz.
          </p>
          <p className="text-xl text-gray-700 font-medium">
            Vizyonumuz; güvenilir, sürdürülebilir ve kullanıcı odaklı dijital
            ürünlerle iş ortaklarımızın büyümesine katkı sağlamak. Teknolojiyi
            insan odaklı yaklaşımla birleştiriyor, her projede değer
            yaratıyoruz.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Royal Yazılım Ofis"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-blue-100"
          />
        </div>
      </div>
    </section>
  );
}
