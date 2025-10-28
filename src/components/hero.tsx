"use client";

import { useState, useEffect } from "react";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [opacity, setOpacity] = useState(1);

  const phrases = ["Inteligencia Artificial", "Desarrollador Web"];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (currentCharIndex <= phrases[currentPhraseIndex].length) {
        setDisplayedText(phrases[currentPhraseIndex].slice(0, currentCharIndex));
        currentCharIndex++;
        timeoutId = setTimeout(typeText, 100);
      } else {
        // Cuando termine de escribir, esperar 2 segundos, hacer fade out
        timeoutId = setTimeout(() => {
          setOpacity(0);
          timeoutId = setTimeout(() => {
            // Cambiar a la siguiente frase
            currentPhraseIndex = (currentPhraseIndex + 1) % 2;
            currentCharIndex = 0;
            setDisplayedText("");
            setOpacity(1);
            // Empezar a escribir la nueva frase
            setTimeout(typeText, 100);
          }, 300);
        }, 2000);
      }
    };

    typeText();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Columna izquierda - Información */}
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transform transition-all duration-700 hover:scale-105">
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 animate-pulse">
                Luis
              </span>
            </h1>

            <div className="relative animate-fade-up-delay-200">
              <div
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-mono font-bold text-gray-900 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg border border-gray-200 shadow-sm transition-opacity duration-300 inline-block whitespace-nowrap"
                style={{ opacity }}
              >
                {displayedText}
                <span className="animate-pulse text-blue-600">|</span>
              </div>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl font-light tracking-wide transform transition-all duration-700 hover:translate-x-2 hover:text-gray-900">
            Soy estudiante de <span className="font-semibold text-gray-900 bg-gradient-to-r from-gray-100 to-transparent px-2 py-1 rounded">Inteligencia Artificial</span> y desarrollador web. Me
            apasiona crear, aprender y llevar mis ideas a la realidad a través
            de la programación y creatividad.
          </p>

          <div className="flex gap-4 animate-fade-up-delay-400">
            <a 
              href="https://instagram.com/penguinxlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-black text-black px-8 py-4 rounded-full flex items-center gap-3 hover:bg-black hover:text-white hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <svg
                width="20"
                height="20"
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
              <span className="font-medium">Contratar</span>
            </a>
            <a 
              href="/cv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
            >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-y-1 transition-transform"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="font-medium">Descargar CV</span>
          </a>
          </div>

          <div className="border-t border-gray-200 pt-8 transform transition-all duration-500 hover:border-gray-300">
            <p className="text-xs font-semibold text-gray-500 mb-3 tracking-widest uppercase hover:text-gray-900 transition-colors duration-300">
              Sígueme
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 transition-all hover:scale-125 hover:rotate-12 transform duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-all hover:scale-125 hover:rotate-12 transform duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-all hover:scale-125 hover:rotate-12 transform duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="flex justify-center lg:justify-end animate-fade-up-delay-600">
          <div className="group relative w-[22rem] h-[22rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 border border-gray-100" />
            <div className="absolute inset-4 rounded-2xl overflow-hidden pointer-events-none">
              <img
                src="/me.jpg"
                alt="Luis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

