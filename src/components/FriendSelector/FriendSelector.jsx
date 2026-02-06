import { useState } from "react";
import FriendCard from "../FriendCard/FriendCard";
import "./FriendSelector.css";
import Button from "../Button/Button";
import nemaImg from "../../assets/friends-cards/friend-nema.png";
import lunaImg from "../../assets/friends-cards/friend-luna.png";
import rafaImg from "../../assets/friends-cards/friend-rafa.png";
import biaImg from "../../assets/friends-cards/friend-bia.png";
import cardImgAudio from "../../assets/friends-cards/card-audio.png";
import cardImgPicto from "../../assets/friends-cards/card-picto.png";
import cardImgLGP from "../../assets/friends-cards/card-lgp.png";

const friends = [
  {
    id: "nema",
    name: "NEMA",
    type: "Áudio",
    image: nemaImg,
    imageCard: cardImgAudio, // ALTERAR PARA AUDIO - MENSAGEM: "VIAJAR COM ESTE AMIGO"
  },
  {
    id: "luna",
    name: "LUNA",
    type: "Picto",
    image: lunaImg,
    imageCard: cardImgPicto,
  },
  {
    id: "rafa",
    name: "RAFA",
    type: "LGP",
    image: rafaImg,
    imageCard: cardImgLGP, // ALTERAR PARA GIF - MENSAGEM: "VIAJAR COM ESTE AMIGO"
  },
  {
    id: "bia",
    name: "BIA",
    type: "Texto",
    image: biaImg,
    imageCard: null,
  },
];

export default function FriendSelector({ onConfirm }) {
  const [selectedFriend, setSelectedFriend] = useState(null);

  function clearSelection() {
    setSelectedFriend(null);
  }

  return (
    <div className="friend-selector" onClick={clearSelection}>
      <div className="friends-grid">
        {friends.map((friend) => (
          <FriendCard
            key={friend.id}
            name={friend.name}
            type={friend.type}
            image={friend.image}
            imageCard={friend.imageCard}
            selected={selectedFriend === friend.id}
            disabled={selectedFriend !== null && selectedFriend !== friend.id}
            onSelect={() => setSelectedFriend(friend.id)}
          />
        ))}
      </div>

      <Button
        variant="black"
        disabled={!selectedFriend}
        onClick={(e) => {
          e.stopPropagation();
          onConfirm(selectedFriend);
        }}
      >
        Começar
      </Button>
    </div>
  );
}
