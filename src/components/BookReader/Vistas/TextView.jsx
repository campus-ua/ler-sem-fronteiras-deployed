import { useState } from "react";
import "./TextView.css";

export default function TextView({ data, mode = "split" }) {
  const [zoom, setZoom] = useState(1);
  const [serif, setSerif] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const classes = `
    text-content
    ${serif ? "serif-font" : ""}
    ${uppercase ? "uppercase" : ""}
    ${highContrast ? "contrast" : ""}
  `;

  const showControls = mode === "split" || mode === "right";

  return (
    <div className={`text-view mode-${mode}`}>
      <div className="illustration-container">
        <img src={data.illustration} alt="Ilustração do livro" />
      </div>

      <div className="text-container">
        <div className={classes} style={{ transform: `scale(${zoom})` }}>
          {data.text}
        </div>

        {showControls && (
          <div className="text-controls">
            <button onClick={() => setZoom((z) => z + 0.1)}>＋</button>{" "}
            {/* alterar para svg */}
            <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.1))}>
              －
            </button>{" "}
            {/* alterar para svg */}
            <button
              className={serif ? "active" : ""}
              onClick={() => setSerif((s) => !s)}
            >
              Aa
            </button>
            <button
              className={uppercase ? "active" : ""}
              onClick={() => setUppercase((u) => !u)}
            >
              AA
            </button>
            <button
              className={highContrast ? "active" : ""}
              onClick={() => setHighContrast((h) => !h)}
            >
              ⚪⬛
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
