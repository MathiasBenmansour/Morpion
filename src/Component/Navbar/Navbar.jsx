
import "./navbar.css";
import { Link, navLink } from "react-router-dom";
function Navbar() {
  
  return (
    <div className="nav-container">
    <nav>
      <Navlink to ="/tutorial" className="tuto-nav">
         Tutoriels
      </Navlink>
      <Navlink to ="/games" className="game-nav">
         Jeux
      </Navlink>
      <Navlink to ="/boutique" className="boutique-nav">
      Boutique
      </Navlink>
      
    </nav>
        
      
       
     
      
    </div>
  );
}

export default Navbar;
