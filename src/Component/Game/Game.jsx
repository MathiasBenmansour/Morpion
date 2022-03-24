import "./game.css";
import { nav, Link } from "react-router-dom";


function Game() {
  return (
    <div className="menu-games">
      <nav className="listing-games">
        <Link  className="snake"
        to="Snake">Snake 
        </Link>
        <Link 
        className="morpion"
        to="Morpion">
          Morpion 
        </Link>
      </nav>
    </div>
  );
}

export default Game;
