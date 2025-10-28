"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animación de entrada para el header
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = ["inicio", "acerca", "proyectos", "servicios"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
    }`}>
      <nav className="bg-white/95 backdrop-blur-md rounded-full shadow-xl border border-gray-100 px-2 py-2 sm:px-4 sm:py-3 flex items-center justify-around sm:justify-center sm:gap-2">
        <button
          onClick={() => scrollToSection("inicio")}
          className={`rounded-full px-3 py-2 sm:px-5 sm:py-2.5 flex items-center gap-1 sm:gap-2 transition-all duration-200 hover:scale-105 cursor-pointer ${
            activeSection === "inicio"
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="font-semibold hidden sm:inline text-xs sm:text-base">Inicio</span>
        </button>
        <button
          onClick={() => scrollToSection("acerca")}
          className={`rounded-full px-3 py-2 sm:px-5 sm:py-2.5 flex items-center gap-1 sm:gap-2 transition-all duration-200 hover:scale-105 cursor-pointer ${
            activeSection === "acerca"
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="font-semibold hidden sm:inline text-xs sm:text-base">Acerca</span>
        </button>
        <button
          onClick={() => scrollToSection("proyectos")}
          className={`rounded-full px-3 py-2 sm:px-5 sm:py-2.5 flex items-center gap-1 sm:gap-2 transition-all duration-200 hover:scale-105 cursor-pointer ${
            activeSection === "proyectos"
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          <span className="font-semibold hidden sm:inline text-xs sm:text-base">Proyectos</span>
        </button>
        <button
          onClick={() => scrollToSection("servicios")}
          className={`rounded-full px-3 py-2 sm:px-5 sm:py-2.5 flex items-center gap-1 sm:gap-2 transition-all duration-200 hover:scale-105 cursor-pointer ${
            activeSection === "servicios"
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          <span className="font-semibold hidden sm:inline text-xs sm:text-base">Servicios</span>
        </button>
      </nav>
    </header>
  );
}

