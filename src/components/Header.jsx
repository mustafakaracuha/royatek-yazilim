import { useState, useEffect } from "react";

const menu = [
  { name: "Anasayfa", href: "#hero" },
  { name: "Hakkımızda", href: "#about" },
  { name: "Hizmetler", href: "#services" },
  { name: "Referanslar", href: "#references" },
  { name: "Yorumlar", href: "#testimonials" },
  { name: "İletişim", href: "#contact" },
];

function scrollToSection(e, href, closeMenu, active, setActive) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  if (closeMenu) closeMenu();
  if (active !== href && setActive) setActive(href);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let found = menu[0].href;
      for (let i = 0; i < menu.length; i++) {
        const el = document.querySelector(menu[i].href);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            found = menu[i].href;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-[9998] transition-all duration-500 ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-2xl border-b border-blue-100/50"
          : "bg-gradient-to-r from-blue-50/95 via-white/98 to-purple-50/95 backdrop-blur-md"
      }`}
    >
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 select-none group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              Royatek <span className="text-gray-900">Yazılım</span>
            </span>
            <span className="text-xs text-gray-500 font-medium -mt-1">
              Modern Çözümler
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) =>
                scrollToSection(e, item.href, null, active, setActive)
              }
              className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                active === item.href
                  ? "text-blue-700 bg-blue-50/80 shadow-sm"
                  : "text-gray-700 hover:text-blue-700 hover:bg-gray-50/80"
              }`}
            >
              <span className="relative z-10 transition-transform duration-200 group-hover:scale-105">
                {item.name}
              </span>
              {active === item.href && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-xl border border-blue-200/50"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Teklif Al</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-gray-700 hover:text-blue-700 hover:bg-blue-100/50 transition-all duration-300 shadow-sm"
          onClick={() => setMobileOpen(true)}
          aria-label="Menüyü Aç"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
            onClick={() => setMobileOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-screen w-80 bg-white shadow-2xl border-l border-blue-100/50 transform transition-transform duration-300 animate-slide-in">
            <div className="p-6 bg-white">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-gray-900">
                    Royatek Yazılım
                  </span>
                </div>
                <button
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 flex items-center justify-center text-red-600 hover:text-red-700 transition-all duration-300 shadow-lg border border-red-200/50"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Menüyü Kapat"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-3">
                {menu.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) =>
                      scrollToSection(
                        e,
                        item.href,
                        () => setMobileOpen(false),
                        active,
                        setActive
                      )
                    }
                    className={`block px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                      active === item.href
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200/50 shadow-sm"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="#contact"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Hemen Teklif Al
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  İletişim Bilgileri
                </h4>
                <div className="text-sm text-gray-600 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium">+90 212 222 22 22</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium">info@royatekyazilim.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </header>
  );
}
