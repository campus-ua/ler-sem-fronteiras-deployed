import Button from "../Button/Button";
import "./BookIntro.css";
import BookCover from "../../assets/capa-hip-hop.png";

export default function BookIntro({ onStart }) {
  return (
    <section className="book">
      <div className="book-content">
        <div className="book-cover">
          <img src={BookCover} alt="Capa do livro Hip Hop" />
        </div>

        <div className="book-text">
          <p className="book-description">
            Esta história mostra-te como aplicares o famoso ditado, “Se a vida
            te dá limões, faz limonada!” Fala sobre a vida de um limão que fez
            tudo para fazer parte da melhor limonada do mercado.
          </p>

          <Button onClick={onStart}>Embarcar nesta viagem!</Button>
        </div>
      </div>
    </section>
  );
}
