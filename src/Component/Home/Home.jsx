import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import "./home.css";

function Home() {
  const [log, setLog] = useState(false);

  const openLog = () => {
    setLog(!log);
    console.log(log);
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">Online-Games</h1>
        <img src="Logo" alt="" />
        <div className="modale-log">
          <button className="btn-log" onClick={openLog}>
            Connexion
          </button>
        </div>
      </div>

      <Navbar />
      <div className="presentation-site">
        <h1 className="description">
          Hello ! Bienvenue sur mon Porte-folio , il regroupe essentiellement
          les projets que je développe.
        </h1>
      </div>
      <div className="redirect-log">
        <h1 className="title-redirect">Fight !</h1>
        {log && (
          <div className="form-log">
            <div className="field-wrapper-mail">
              <input
                name="email"
                value={""}
                onChange={""}
                type="text"
                id="title"
                placeholder="Email"
                className=""
              />
            </div>

            <div className="field-wrapper-pwd">
              <input
                name="password"
                value={""}
                onChange={""}
                type="password"
                id="title"
                placeholder="Mot de passe"
                className=""
              />
            </div>
            <div className="button-wrapper">
              <button type="submit" className="btn-send">
                Se connecter
              </button>
              <button onClick={""} name="inscription" className="btn-send">
                Inscription
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
