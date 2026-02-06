import "./PictoView.css";

export default function PictoView({ data, mode = "split" }) {
  return (
    <div className={`picto-view mode-${mode}`}>
      <div className="illustration-container">
        <img src={data.illustration} alt="Ilustração do livro" />
      </div>

      <div className="picto-container">
        <img src={data.pictogram} alt={data.text} />
      </div>
    </div>
  );
}
