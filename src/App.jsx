import { useScrollProgress } from "./hooks/useScrollReveal";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ReferencesSection from "./components/ReferencesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50">
        Ana içeriğe geç
      </a>
      
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
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
      </div>
    </>
  );
}

export default App;
