import "./ReaderLayout.css";

export default function ReaderLayout({
  children,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) {
  return (
    <div className="reader-layout">
      <button
        className="nav-button left"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Página anterior"
      >
        <svg
          width="28"
          height="49"
          viewBox="0 0 28 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.61215 22.8572C-0.203489 23.6437 -0.203486 24.9501 0.612152 25.7366L23.7309 48.0296C25.0009 49.2543 27.1191 48.3543 27.1191 46.5899L27.1191 2.00383C27.1191 0.239494 25.0009 -0.66055 23.7309 0.564135L0.61215 22.8572Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div className="center-panel">{children}</div>

      <button
        className="nav-button right"
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Próxima página"
      >
        <svg
          width="28"
          height="49"
          viewBox="0 0 28 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.507 22.8572C27.3226 23.6437 27.3226 24.9501 26.507 25.7366L3.38827 48.0296C2.11822 49.2543 -1.23341e-06 48.3543 -1.15629e-06 46.5899L7.9263e-07 2.00383C8.69752e-07 0.239494 2.11823 -0.66055 3.38827 0.564135L26.507 22.8572Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
