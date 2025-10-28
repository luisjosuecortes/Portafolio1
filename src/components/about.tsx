"use client";

import { useState, useEffect, useRef } from "react";

export function About() {
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

  return (
    <section
      ref={sectionRef}
      id="acerca"
      className={`min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda - Imagen */}
        <div className="flex justify-center lg:justify-start animate-fade-up">
          <div className="w-96 h-[32rem] lg:w-[30rem] lg:h-[40rem] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/me2.jpg"
              alt="Luis Cortés"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Columna derecha - Información */}
        <div className="space-y-8">
          <div className="transform transition-all duration-700 ease-out hover:scale-105" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.3s forwards' : 'none',
                 opacity: 0 
               }}>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Acerca de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 animate-pulse">
                Mí
              </span>
            </h2>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.4s forwards' : 'none',
                 opacity: 0 
               }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Luis Cortés
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Estudiante de Inteligencia Artificial en sus últimos semestres en
              la Universidad Autónoma del Estado de Morelos. Apasionado por la
              programación, el desarrollo web y la ciencia de datos.
            </p>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.5s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full animate-pulse" /> Educación
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="hover:text-gray-900 transition-colors">
                <span className="font-semibold">
                  Universidad Autónoma del Estado de Morelos (UAEM)
                </span>
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">Licenciatura en Inteligencia Artificial</p>
              <p className="text-sm hover:text-gray-900 transition-colors">Actualmente estudiando</p>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.6s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full animate-pulse" /> Experiencia
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="hover:text-gray-900 transition-colors">
                <span className="font-semibold">
                  Asistente en Investigación
                </span>{" "}
                - UAEM CINC Morelos
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">
                Proyectos en Ciencia de Datos y su aplicación en Series de
                Tiempo (EEG, MEG, fMRI, Ritmo Cardíaco)
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">2025 – Actualmente</p>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.7s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full animate-pulse" /> Habilidades Técnicas
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "AI/ML",
                "PyTorch",
                "TypeScript",
                "React",
                "Node.js",
                "Git",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-300 transform hover:rotate-1"
                  style={{
                    animation: isVisible ? `fadeUp 0.5s ease-out ${0.8 + index * 0.05}s forwards` : 'none',
                    opacity: 0
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

