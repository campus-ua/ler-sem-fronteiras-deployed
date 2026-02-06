import "./Hero.css";
import Logo from "../../assets/logo.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-welcome">
          <strong>Bem-vindo ao</strong>
        </p>

        <div className="hero-logo">
          <img src={Logo} alt="Ler sem Fronteiras" />
        </div>

        <p className="hero-subtitle">
          Aqui podes viajar pelos vários mundos da leitura,
          <br />
          em boa companhia!
        </p>
      </div>
    </section>
  );
}
