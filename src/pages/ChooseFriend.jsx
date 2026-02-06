import FriendSelector from "../components/FriendSelector/FriendSelector";
import { useNavigate } from "react-router-dom";
import "./ChooseFriend.css";

export default function ChooseFriend() {
  const navigate = useNavigate();

  function handleConfirm(friendId) {
    navigate("/ler", {
      state: { friend: friendId },
    });
  }

  return (
    <main className="choose-friend">
      <h1>Escolhe um amigo para viajar contigo!</h1>
      <p>
        Antes de começares a viajar, fica a conhecer quem
        <br />
        te pode acompanhar nas tuas viagens...
      </p>

      <FriendSelector onConfirm={handleConfirm} />
    </main>
  );
}
