// SEO Configuration for Royatek Yazılım
export const seoConfig = {
  // Site Information
  siteName: "Royatek Yazılım",
  siteUrl: "https://royatek-yazilim.vercel.app",
  siteDescription: "Modern yazılım çözümleri ile işletmenizin dijital dönüşümünü hızlandırıyoruz. Web ve mobil uygulama geliştirme hizmetleri.",
  
  // Default Meta Tags
  defaultTitle: "Royatek Yazılım - Modern Yazılım Çözümleri | Web & Mobil Uygulama Geliştirme",
  defaultDescription: "Royatek Yazılım olarak, işletmenize özel web ve mobil yazılım çözümleriyle dijital dönüşümünüzü hızlandırıyoruz. React, Node.js ve modern teknolojilerle güvenilir projeler geliştiriyoruz.",
  defaultKeywords: "yazılım, web geliştirme, mobil uygulama, dijital dönüşüm, teknoloji danışmanlığı, istanbul yazılım şirketi, react, node.js, javascript, typescript, frontend, backend, fullstack, e-ticaret, cms, api",
  
  // Page Specific Meta Tags
  pages: {
    home: {
      title: "Royatek Yazılım - Modern Yazılım Çözümleri | Web & Mobil Uygulama Geliştirme",
      description: "İşletmenize özel web ve mobil yazılım çözümleriyle dijital dönüşümünüzü hızlandırıyoruz. Modern teknolojilerle güvenilir projeler.",
      keywords: "yazılım şirketi, web geliştirme, mobil uygulama, dijital dönüşüm, istanbul"
    },
    about: {
      title: "Hakkımızda - Royatek Yazılım | Profesyonel Yazılım Geliştirme",
      description: "2018'den beri yazılım dünyasına yenilikçi çözümler sunuyoruz. Kurumsal ve bireysel müşterilerimize modern teknolojilerle hizmet veriyoruz.",
      keywords: "hakkımızda, yazılım şirketi, deneyim, vizyon, misyon"
    },
    services: {
      title: "Hizmetlerimiz - Royatek Yazılım | Web, Mobil ve Danışmanlık",
      description: "Web yazılım, mobil uygulama geliştirme ve teknoloji danışmanlığı hizmetlerimizle işinizi büyütün.",
      keywords: "web geliştirme, mobil uygulama, danışmanlık, hizmetler, yazılım çözümleri"
    },
    contact: {
      title: "İletişim - Royatek Yazılım | Teklif Alın ve Projenizi Başlatın",
      description: "Projeniz hakkında konuşmak, teklif almak veya sadece merhaba demek için bizimle iletişime geçin.",
      keywords: "iletişim, teklif, proje, yazılım danışmanlığı, istanbul"
    }
  },
  
  // Social Media
  social: {
    twitter: "@royatekyazilim",
    facebook: "royatekyazilim",
    linkedin: "company/royatek-yazilim",
    instagram: "royatekyazilim"
  },
  
  // Contact Information
  contact: {
    phone: "+90 212 222 22 22",
    email: "info@royatekyazilim.com",
    address: "Barbaros Mah. İnönü Cad. No: 123, Ataşehir / İstanbul",
    workingHours: "Pazartesi - Cuma: 09:00 - 18:00"
  },
  
  // Business Information
  business: {
    name: "Royatek Yazılım",
    founded: "2018",
    location: "İstanbul, Türkiye",
    services: ["Web Geliştirme", "Mobil Uygulama", "Danışmanlık"],
    technologies: ["React", "Node.js", "JavaScript", "TypeScript", "Vue.js", "Flutter"]
  }
};

// SEO Helper Functions
export const generateMetaTags = (page = 'home') => {
  const config = seoConfig.pages[page] || seoConfig.pages.home;
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    ogTitle: config.title,
    ogDescription: config.description,
    ogImage: `${seoConfig.siteUrl}/og-image.jpg`,
    ogUrl: seoConfig.siteUrl,
    twitterTitle: config.title,
    twitterDescription: config.description,
    twitterImage: `${seoConfig.siteUrl}/og-image.jpg`
  };
};

// Schema.org Structured Data
export const generateStructuredData = (type = 'organization') => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": seoConfig.business.name,
    "url": seoConfig.siteUrl,
    "logo": `${seoConfig.siteUrl}/logo.png`,
    "description": seoConfig.siteDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barbaros Mah. İnönü Cad. No: 123",
      "addressLocality": "Ataşehir",
      "addressRegion": "İstanbul",
      "postalCode": "34746",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": seoConfig.contact.phone,
      "contactType": "customer service",
      "email": seoConfig.contact.email
    },
    "sameAs": [
      `https://www.linkedin.com/${seoConfig.social.linkedin}`,
      `https://github.com/${seoConfig.social.linkedin}`,
      `https://twitter.com/${seoConfig.social.twitter}`
    ]
  };
  
  return baseData;
}; 