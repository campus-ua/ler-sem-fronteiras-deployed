import "./ViewModeSelector.css";

export default function ViewModeSelector({ activeMode, onChangeMode }) {
  const modes = [
    {
      id: "left",
      icon: (
        <svg
          width="47"
          height="42"
          viewBox="0 0 47 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 0H41C44.3137 0 47 2.68629 47 6V36C47 39.3137 44.3137 42 41 42H6C2.68629 42 0 39.3137 0 36V6C0 2.68629 2.68629 0 6 0ZM6 3C4.34315 3 3 4.34314 3 6V36C3 37.6568 4.34315 39 6 39H41C42.6569 39 44 37.6569 44 36V6C44 4.34315 42.6569 3 41 3H6Z"
            fill="currentColor"
          />
          <rect
            x="7"
            y="23"
            width="14"
            height="12"
            rx="2"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "split",
      icon: (
        <svg
          width="47"
          height="42"
          viewBox="0 0 47 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5.875C0 4.31685 0.618971 2.82252 1.72075 1.72075C2.82252 0.618971 4.31685 0 5.875 0H41.125C42.6831 0 44.1775 0.618971 45.2792 1.72075C46.381 2.82252 47 4.31685 47 5.875V35.25C47 36.8081 46.381 38.3025 45.2792 39.4042C44.1775 40.506 42.6831 41.125 41.125 41.125H5.875C4.31685 41.125 2.82252 40.506 1.72075 39.4042C0.618971 38.3025 0 36.8081 0 35.25V5.875ZM24.9687 2.9375V38.1875H41.125C41.9041 38.1875 42.6512 37.878 43.2021 37.3271C43.753 36.7762 44.0625 36.0291 44.0625 35.25V5.875C44.0625 5.09593 43.753 4.34876 43.2021 3.79787C42.6512 3.24699 41.9041 2.9375 41.125 2.9375H24.9687ZM22.0312 2.9375H5.875C5.09593 2.9375 4.34876 3.24699 3.79787 3.79787C3.24699 4.34876 2.9375 5.09593 2.9375 5.875V35.25C2.9375 36.0291 3.24699 36.7762 3.79787 37.3271C4.34876 37.878 5.09593 38.1875 5.875 38.1875H22.0312V2.9375Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "right",
      icon: (
        <svg
          width="47"
          height="42"
          viewBox="0 0 47 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 0H41C44.3137 0 47 2.68629 47 6V36C47 39.3137 44.3137 42 41 42H6C2.68629 42 0 39.3137 0 36V6C0 2.68629 2.68629 0 6 0ZM6 3C4.34315 3 3 4.34314 3 6V36C3 37.6568 4.34315 39 6 39H41C42.6569 39 44 37.6569 44 36V6C44 4.34315 42.6569 3 41 3H6Z"
            fill="currentColor"
          />
          <rect
            x="26"
            y="23"
            width="14"
            height="12"
            rx="2"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="view-mode-selector">
      {modes.map((mode) => (
        <button
          key={mode.id}
          className={`mode-btn ${activeMode === mode.id ? "active" : ""}`}
          onClick={() => onChangeMode(mode.id)}
          aria-label={`Modo ${mode.id}`}
        >
          {mode.icon}
        </button>
      ))}
    </div>
  );
}
