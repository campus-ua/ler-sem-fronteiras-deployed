import "./Button.css";

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      <strong>{children}</strong>
    </button>
  );
}
