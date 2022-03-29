import Morpion from "../../images/projects/morpion.jpg";
import office from "../../images/projects/meilleure-chaise-gamer.jpg";
import dofous from "../../images/projects/dofous-kamous.jpeg";

import "./projects.css";

export default function Project() {
  return (
    <div className="container-project">
      <h1 className="title-home">Liste des Projets</h1>

      <div className="movie-idle">
        <iframe
          width="460"
          height="315"
          src="https://www.youtube.com/embed/TSYGiQ-1Vi4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        
        ></iframe>
        <h1 className="list-project">
          <li className="morpion-container">Morpion</li>

          <img className="img-morpion" src={Morpion} alt="Jeux du Morpion" />
        </h1>

        <article className="project-office">
          <li>Office-Gaming</li>
          <img className="img-office" src={office} alt="chaise-de-bureau" />
        </article>
       
          <article className="project-dofous">
            <li>
              <a href="https://dofous-kamous.surge.sh/">Dofus-Kamous</a>
            </li>
              <img className="img-dofus" src={dofous} alt="img-dofous" />
          </article>
        
      </div>
    </div>
  );
}
