import { useScrollProgress } from "./hooks/useScrollReveal";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ReferencesSection from "./components/ReferencesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

function App() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Ana içeriğe geç
      </a>

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex flex-col transition-colors duration-300">
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <Header />

        <main id="main-content" role="main">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ReferencesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />

        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
