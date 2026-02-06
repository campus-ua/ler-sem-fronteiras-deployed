import "./CloseButton.css";

export default function CloseButton({ onClick, type = "button" }) {
  return (
    <button
      className="close-button"
      type={type}
      onClick={onClick}
      aria-label="Fechar leitor"
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.0721 3.78579L20.8218 17.036L34.0721 30.2863L30.2863 34.0721L17.036 20.8218L3.78579 34.0721L0 30.2863L13.2503 17.036L0 3.78579L3.78579 0L17.036 13.2503L30.2863 0L34.0721 3.78579Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
