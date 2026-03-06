import Button from "../Button/Button";
import "./BookIntro.css";
import BookCover from "../../assets/capa-hip-hop.png";

import nemaImg from "../../assets/friend-button/nema.png";
import lunaImg from "../../assets/friend-button/luna.png";
import rafaImg from "../../assets/friend-button/rafa.png";
import biaImg from "../../assets/friend-button/bia.png";

const friendsList = [
  { id: "nema", name: "Áudio", image: nemaImg },
  { id: "luna", name: "Pictogramas", image: lunaImg },
  { id: "rafa", name: "LGP", image: rafaImg },
  { id: "bia", name: "Texto", image: biaImg },
];

export default function BookIntro({ onStart }) {
  return (
    <section className="book">
      <div className="book-content">
        <div className="book-cover">
          <img src={BookCover} alt="Capa do livro Hip Hop" />
        </div>

        <div className="book-text">
          <p className="book-description">
            Conhece a Hip e o Hop, uma dupla cheia de energia que prova que, na
            dança e na vida, o que importa é o talento e o coração! Entre
            piruetas e rimas, eles convidam-te a entrar numa aventura onde o
            treino leva à perfeição e a música serve para mudar o mundo.
          </p>
          <p className="book-description">
            <strong>Uma história sem barreiras:</strong> Este livro foi pensado
            para que todos possam fazer parte da tripulação! Podes mergulhar
            nesta aventura através de:
          </p>
          <div className="friends-container">
            {friendsList.map((friend) => (
              <div key={friend.id} className="friend-info">
                <img src={friend.image} alt={friend.name} />
                <p>{friend.name}</p>
              </div>
            ))}
          </div>

          <Button onClick={onStart}>Embarcar nesta viagem!</Button>
        </div>
      </div>
    </section>
  );
}
