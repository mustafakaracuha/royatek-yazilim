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
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReferencesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
