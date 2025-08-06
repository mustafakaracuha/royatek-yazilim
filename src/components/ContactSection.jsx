import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setTimeout(() => setSent(false), 5000);
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Adres",
      content: "Barbaros Mah. İnönü Cad. No: 123, Ataşehir / İstanbul",
      link: "https://maps.google.com/?q=Barbaros+Mah.+İnönü+Cad.+No:+123,+Ataşehir,+İstanbul",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefon",
      content: "+90 212 222 22 22",
      link: "tel:+902122222222",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "E-posta",
      content: "info@royatekyazilim.com",
      link: "mailto:info@royatekyazilim.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 px-4 overflow-hidden"
    >
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 via-purple-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none">
          <path
            fill="url(#contactGradient)"
            fillOpacity="0.1"
            d="M0,160L1440,320L1440,0L0,0Z"
          />
          <defs>
            <linearGradient id="contactGradient" x1="0" y1="0" x2="1" y2="1">
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
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            İletişim
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Projenizi hayata geçirmek için hazırız. Aşağıdaki formu doldurun
            veya iletişim bilgilerimizden bize ulaşın.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info & Map */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-gray-600 hover:text-blue-700 transition-colors duration-300 font-medium"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-medium">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>


            {/* Social Media */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sosyal Medya
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    name: "LinkedIn",
                    icon: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z",
                  },
                  {
                    name: "GitHub",
                    icon: "M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.384 0-6.63-5.373-12-12-12z",
                  },
                  {
                    name: "Instagram",
                    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-1.308 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678-.058-1.28-.07-1.688-.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
                  },
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                    aria-label={social.name}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Mesaj Gönderin</h3>
                <p className="text-blue-100">
                  Projenizi birlikte hayata geçirelim
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      İsim *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Adınız Soyadınız"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-gray-700 bg-white/70 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="ornek@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-gray-700 bg-white/70 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+90 5XX XXX XX XX"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-gray-700 bg-white/70 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Şirket
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Şirket Adı"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-gray-700 bg-white/70 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Projeniz hakkında detayları paylaşın..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-gray-700 bg-white/70 resize-none transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl py-4 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Mesaj Gönder
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {sent && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-700 font-medium">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Mesajınız başarıyla iletildi! En kısa sürede size dönüş
                      yapacağız.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
