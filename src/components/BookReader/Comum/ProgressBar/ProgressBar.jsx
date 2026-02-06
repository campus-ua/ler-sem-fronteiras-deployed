import "./ProgressBar.css";
import joyImg from "../../../../assets/avatar.png";

export default function ProgressBar({ current, total }) {
  const progress = (current / (total - 1)) * 100;

  return (
    <div className="progress-container">
      <div className="progress-line">
        <div className="progress-avatar" style={{ left: `${progress}%` }}>
          <img src={joyImg} alt="Progresso" />
        </div>
      </div>
    </div>
  );
}
