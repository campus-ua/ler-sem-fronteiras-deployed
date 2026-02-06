import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import BookIntro from "../components/BookIntro/BookIntro";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <BookIntro onStart={() => navigate("/amigo")} />
    </>
  );
}
