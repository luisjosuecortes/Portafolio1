"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/loading-screen";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Deshabilitar scroll durante la carga
    document.body.style.overflow = "hidden";

    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Permitir que la transición del loader se complete
      setTimeout(() => {
        setShowContent(true);
        // Habilitar scroll después de que el contenido esté visible
        document.body.style.overflow = "auto";
      }, 500);
    }, 2000); // 2 segundos de animación

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div
        className={`transform transition-all duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}

