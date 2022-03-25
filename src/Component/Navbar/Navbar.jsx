
import "./navbar.css";
function Navbar() {
  return (
    <div className="nav-container">
        
      <a className="tuto-nav" href="tutorial">
        Tutoriels
      </a>
      <a className="game-nav" href="games">
        Jeux
      </a>
      <a className="boutique-nav" href="boutique">
        Boutique
      </a>
    </div>
  );
}

export default Navbar;
