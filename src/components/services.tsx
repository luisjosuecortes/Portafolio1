"use client";

import { useState, useEffect, useRef } from "react";

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creación de aplicaciones web modernas y responsivas con las últimas tecnologías",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20V10" />
          <path d="M18 20V12" />
          <path d="M6 20V8" />
          <path d="M3 4h18v4H3z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Inteligencia Artificial",
      description: "Desarrollo de modelos de IA y machine learning para soluciones innovadoras",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05" />
          <path d="M12 22.08V12" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Full Stack",
      description: "Soluciones completas desde el backend hasta el frontend, optimizadas y escalables",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 3H2v4h6V3z" />
          <path d="M22 3h-6v4h6V3z" />
          <path d="M8 13H2v4h6v-4z" />
          <path d="M22 13h-6v4h6v-4z" />
          <path d="M12 17v4" />
          <path d="M16 7v4" />
          <path d="M12 1V3" />
          <path d="M16 11v2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className={`min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 transition-opacity duration-1000 relative overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Animación de fondo flotante */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-32 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "0s", animationDuration: "3s" }} />
        <div className="absolute top-40 right-20 w-1 h-24 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "1s", animationDuration: "4s" }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-40 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "2s", animationDuration: "3.5s" }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-20 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "0.5s", animationDuration: "4.5s" }} />
        <div className="absolute bottom-20 right-1/4 w-2 h-28 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "1.5s", animationDuration: "3s" }} />
        <div className="absolute top-1/2 left-1/3 w-1 h-36 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "2.5s", animationDuration: "4s" }} />
        <div className="absolute bottom-1/3 right-10 w-2 h-32 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "0.8s", animationDuration: "3.5s" }} />
        <div className="absolute top-20 right-1/2 w-1 h-24 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "1.8s", animationDuration: "4s" }} />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Servicios</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que puedo hacer por ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-3 transform overflow-hidden ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-full blur-2xl group-hover:from-gray-900/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a 
            href="https://instagram.com/penguinxlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border-2 border-black text-black px-10 py-5 rounded-full flex items-center gap-3 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-lg font-semibold"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span>Contratame</span>
          </a>
        </div>
      </div>
    </section>
  );
}

