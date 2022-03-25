import Navbar from "../Navbar/Navbar";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="container">
        <h1 className="title">Online-Games</h1>
        <img src="Logo" alt="" />
        <div className="modale-log">
          <button className="btn-log">Connexion</button>
        </div>
      </div>

      <Navbar />
      <div className="presentation-site">
        <h1 className="description">
          Bienvenue sur le projet Online-Games ce projet a pour but de
          m'améliorer et surtout de vous faire profiter de jeux que je développe
        </h1>
      </div>
      <div className="redirect-log">
        <h1 className="title-redirect">Veuillez Vous connecter</h1>
      </div>
    </div>
  );
}

export default Home;
