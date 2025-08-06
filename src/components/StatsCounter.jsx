import React, { useState, useEffect, useRef } from 'react';

const StatsCounter = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targetValues = {
    projects: 150,
    clients: 89,
    satisfaction: 98,
    experience: 6
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 saniye
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounters = () => {
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          projects: Math.floor(targetValues.projects * progress),
          clients: Math.floor(targetValues.clients * progress),
          satisfaction: Math.floor(targetValues.satisfaction * progress),
          experience: Math.floor(targetValues.experience * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          // Final values
          setCounters(targetValues);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    animateCounters();
  }, [isVisible]);

  const stats = [
    {
      icon: "🚀",
      value: counters.projects,
      suffix: "+",
      label: "Tamamlanan Proje",
      description: "Başarıyla tamamladığımız proje sayısı"
    },
    {
      icon: "👥",
      value: counters.clients,
      suffix: "+",
      label: "Mutlu Müşteri",
      description: "Hizmet verdiğimiz müşteri sayısı"
    },
    {
      icon: "⭐",
      value: counters.satisfaction,
      suffix: "%",
      label: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin memnuniyet oranı"
    },
    {
      icon: "📅",
      value: counters.experience,
      suffix: " Yıl",
      label: "Deneyim",
      description: "Sektördeki deneyim yılımız"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sayılarla <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Royatek</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yılların deneyimi ve başarısı ile müşterilerimize en iyi hizmeti sunuyoruz
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group-hover:scale-105">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-2xl font-bold text-gray-600">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter; 