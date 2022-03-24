import Game from "../Game/Game";
import "./navbar.css";
function Navbar() {
  return (
    <div className="nav-container">
        
      <a className="tuto-nav" href="">
        Tutoriels
      </a>
      <a className="game-nav" href={Game}>
        Jeux
      </a>
      <a className="boutique-nav" href="">
        Boutique
      </a>
    </div>
  );
}

export default Navbar;
