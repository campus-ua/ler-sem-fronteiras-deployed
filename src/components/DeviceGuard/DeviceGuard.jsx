import { useState, useEffect } from "react";

// Hook para detetar dispositivo e orientação
function useDeviceDetection() {
  const getState = () => {
    const ua = navigator.userAgent;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Deteção de mobile (telefone)
    const isMobile =
      /Android|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua) ||
      (width <= 768 &&
      height <= 1024 &&
      "ontouchstart" in window &&
      width < height
        ? true
        : width <= 480);

    // Deteção de tablet
    const isTablet =
      !isMobile &&
      (/iPad|Android/i.test(ua) ||
        (width >= 481 && width <= 1366 && "ontouchstart" in window));

    const isPortrait = height > width;

    return { isMobile, isTablet, isPortrait };
  };

  const [device, setDevice] = useState(getState);

  useEffect(() => {
    const handle = () => setDevice(getState());
    window.addEventListener("resize", handle);
    window.addEventListener("orientationchange", handle);
    return () => {
      window.removeEventListener("resize", handle);
      window.removeEventListener("orientationchange", handle);
    };
  }, []);

  return device;
}

// Ícone de telemóvel com X
function MobileIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect
        x="16"
        y="4"
        width="32"
        height="56"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="32" cy="52" r="2.5" fill="currentColor" />
      <line
        x1="22"
        y1="48"
        x2="42"
        y2="48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="24"
        y1="20"
        x2="40"
        y2="36"
        stroke="#ef4444"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="20"
        x2="24"
        y2="36"
        stroke="#ef4444"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Ícone de tablet a rodar
function RotateIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      {/* Tablet em portrait */}
      <rect
        x="26"
        y="8"
        width="28"
        height="44"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.35"
      />
      {/* Tablet em landscape */}
      <rect
        x="8"
        y="24"
        width="44"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="48" cy="38" r="2" fill="currentColor" />
      {/* Seta de rotação */}
      <path
        d="M18 14 Q10 22 14 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <polygon points="10,33 14,38 19,32" fill="currentColor" />
    </svg>
  );
}

// Ecrã de aviso — base
function WarningScreen({ icon, title, subtitle, accent }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0f",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      {/* Fundo decorativo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
          }}
        />
        {/* Linhas de grade subtis */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${(i + 1) * 12.5}%`,
              height: "1px",
              background: "rgba(255,255,255,0.03)",
            }}
          />
        ))}
      </div>

      {/* Conteúdo */}
      <div style={{ position: "relative", maxWidth: "380px" }}>
        {/* Ícone */}
        <div
          style={{
            color: accent,
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
            filter: `drop-shadow(0 0 20px ${accent}60)`,
          }}
        >
          {icon}
        </div>

        {/* Linha decorativa */}
        <div
          style={{
            width: "40px",
            height: "2px",
            background: accent,
            margin: "0 auto 1.5rem",
            borderRadius: "2px",
          }}
        />

        <h1
          style={{
            color: "#f5f0e8",
            fontSize: "1.4rem",
            fontWeight: "normal",
            letterSpacing: "0.04em",
            lineHeight: 1.4,
            margin: "0 0 1rem",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            color: "rgba(245,240,232,0.45)",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          {subtitle}
        </p>

        {/* Linha decorativa inferior */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "2.5rem",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "1px",
              background: "rgba(245,240,232,0.15)",
            }}
          />
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: accent,
              opacity: 0.6,
            }}
          />
          <div
            style={{
              width: "24px",
              height: "1px",
              background: "rgba(245,240,232,0.15)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function DeviceGuard({ children }) {
  const { isMobile, isTablet, isPortrait } = useDeviceDetection();

  if (isMobile) {
    return (
      <WarningScreen
        icon={<MobileIcon />}
        title="Dispositivo não suportado"
        subtitle="Esta aplicação foi desenhada para desktop e tablet. Por favor, acede através de um computador ou tablet para uma experiência completa."
        accent="#f59e0b"
      />
    );
  }

  if (isTablet && isPortrait) {
    return (
      <WarningScreen
        icon={<RotateIcon />}
        title="Roda o teu tablet"
        subtitle="Para uma melhor experiência, coloca o tablet na horizontal e desfruta da aplicação em modo paisagem."
        accent="#38bdf8"
      />
    );
  }

  return children;
}
