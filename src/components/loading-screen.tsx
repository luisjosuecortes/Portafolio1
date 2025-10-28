"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [lettersVisible, setLettersVisible] = useState(0);

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Animación de letras
    const lettersInterval = setInterval(() => {
      setLettersVisible((prev) => {
        if (prev >= 14) {
          clearInterval(lettersInterval);
          return 14;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(lettersInterval);
    };
  }, []);

  const name = "Bienvenido";
  const letters = name.split("");

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* Grid de fondo con patrones fijos */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[20%] animate-float" style={{ animationDelay: "0s", animationDuration: "3s" }} />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[50%] animate-float" style={{ animationDelay: "1s", animationDuration: "4s" }} />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[50%] left-[80%] animate-float" style={{ animationDelay: "2s", animationDuration: "3s" }} />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[15%] animate-float" style={{ animationDelay: "0.5s", animationDuration: "5s" }} />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[90%] left-[70%] animate-float" style={{ animationDelay: "1.5s", animationDuration: "4s" }} />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[25%] left-[75%] animate-float" style={{ animationDelay: "0.8s", animationDuration: "3.5s" }} />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[35%] animate-float" style={{ animationDelay: "1.2s", animationDuration: "4.5s" }} />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[85%] left-[55%] animate-float" style={{ animationDelay: "0.3s", animationDuration: "3.2s" }} />
      </div>

      {/* Líneas decorativas diagonales */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-px bg-white transform rotate-12 animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-px bg-white transform -rotate-12 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-0 left-0 w-96 h-px bg-white transform -rotate-12 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 right-0 w-96 h-px bg-white transform rotate-12 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Círculos decorativos */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 border border-white/10 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
        <div className="absolute w-72 h-72 border border-white/10 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
        <div className="absolute w-48 h-48 border border-white/10 rounded-full animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
      </div>

      {/* Esquinas decorativas con cuadrados */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 w-20 h-20 border border-white animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute top-8 right-8 w-16 h-16 border border-white animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-8 left-8 w-16 h-16 border border-white animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "1s" }} />
        <div className="absolute bottom-8 right-8 w-20 h-20 border border-white animate-pulse" style={{ animationDuration: "3s", animationDelay: "1.5s" }} />
      </div>

      {/* Líneas horizontales y verticales decorativas */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white animate-pulse" style={{ animationDelay: "0.2s" }} />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-white animate-pulse" style={{ animationDelay: "0.4s" }} />
        <div className="absolute left-1/4 top-0 w-px h-full bg-white animate-pulse" style={{ animationDelay: "0.6s" }} />
        <div className="absolute right-1/4 top-0 w-px h-full bg-white animate-pulse" style={{ animationDelay: "0.8s" }} />
      </div>

      {/* Formas geométricas flotantes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-12 h-12 border-2 border-white rotate-45 animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-32 left-24 w-16 h-16 border-2 border-white rotate-45 animate-pulse" style={{ animationDuration: "3s", animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-32 w-10 h-10 border-2 border-white rotate-12 animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-24 right-40 w-12 h-12 border-2 border-white rotate-12 animate-pulse" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
        <div className="absolute top-36 left-40 w-14 h-14 border-2 border-white rotate-45 animate-pulse" style={{ animationDuration: "3.5s" }} />
      </div>

      {/* Rayos de luz decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-white to-transparent animate-pulse" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-0 left-1/2 w-px h-32 bg-gradient-to-t from-white to-transparent animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute left-0 top-1/2 w-32 h-px bg-gradient-to-r from-white to-transparent animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute right-0 top-1/2 w-32 h-px bg-gradient-to-l from-white to-transparent animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Partículas adicionales pequeñas */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => {
          const positions = [
            { top: "8%", left: "12%" }, { top: "15%", left: "88%" },
            { top: "25%", left: "5%" }, { top: "35%", left: "95%" },
            { top: "45%", left: "2%" }, { top: "55%", left: "98%" },
            { top: "65%", left: "8%" }, { top: "75%", left: "92%" },
            { top: "85%", left: "3%" }, { top: "92%", left: "97%" },
            { top: "8%", left: "45%" }, { top: "92%", left: "55%" },
            { top: "15%", left: "65%" }, { top: "85%", left: "35%" },
            { top: "50%", left: "15%" }
          ];
          return (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                top: positions[i]?.top,
                left: positions[i]?.left,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          );
        })}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Nombre animado */}
        <div className="flex gap-2 mb-8">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`text-6xl md:text-8xl font-bold text-white transform transition-all duration-500 ${
                index < lettersVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        {/* Barra de progreso */}
        <div className="relative w-80 md:w-96">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Efecto brillante */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
          {/* Indicador de porcentaje */}
          <div className="absolute right-0 top-3 text-xs text-gray-500 font-mono">
            {progress}%
          </div>
        </div>

        {/* Texto inferior con animación */}
        <div className="mt-8">
          <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase font-light">
            {progress < 100 ? "Cargando" : "Listo"}
          </p>
          <div className="flex gap-1 mt-2 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

