import "./game.css";
import { nav, Link } from "react-router-dom";


function Game() {
  

  return (
    <div className="bg-Game">
    <div className="menu-games">
      <nav className="listing-games">
        <Link 
        className="morpion"
        to="Morpion">
          Morpion 
        </Link>
        <Link  className="snake"
        to="Snake">Snake 
        </Link>
      </nav>
    </div>
    </div>
  );
}

export default Game;
