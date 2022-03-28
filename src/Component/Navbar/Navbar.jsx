import "./navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <NavLink to="/tutorial" className="tuto-nav">
          Tutoriels
        </NavLink>
        <NavLink to="/games" className="game-nav">
          Jeux
        </NavLink>
        <NavLink to="/boutique" className="boutique-nav">
          Boutique
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
