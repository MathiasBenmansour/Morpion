import "./morpion.css";
import { useEffect, useRef, useState } from "react";

let score = 0;

const victorytemplate = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const nbCases = 9;
const initialMessage = "Partie en cours ...";
let initialArray = Array.from({ length: nbCases }, () => "");

export default function Morpion() {
  let player = ["X", "O"];
  const [div1, setDiv1] = useState(0);
  const [modal, setModal] = useState(false);
  let [cases, setCases] = useState(initialArray);
  const [finished, setFinished] = useState(false);
  const message = useRef(initialMessage);

  let namePlayer = div1 ? player[1] : player[0];

  const playerOne = (e) => {
    if (finished) return;
    if (e.target.innerText !== "") return;

    // Recup l'index de la case
    const index = e.target.getAttribute("data-index");

    let newCases = [...cases];
    newCases[index] = player[div1];
    setCases(newCases);

    //mise a jour du tour du joueur
    setDiv1((prev) => +!prev);
    winConditions();

    function winConditions() {
      for (let victorycondition of victorytemplate) {
        let val1 = newCases[victorycondition[0]];
        let val2 = newCases[victorycondition[1]];
        let val3 = newCases[victorycondition[2]];

        if (val1 === "" || val2 === "" || val3 === "") {
          continue;
        }
        if (player[0] === val1 && val2 && val2 === val3) {
          message.current = "Le joueur X a gagné";
          finishGame();
        } else if (player[1] === val1 && val2 && val2 === val3) {
          message.current = "Le joueur O a gagné";
          finishGame();
        }
      }
    }
  };

  // Faire une fonction qui Stop l'écriture de X ou O
  const finishGame = (e) => {
    setModal(!modal);
    setFinished(true);
  };

  const restartGame = (e) => {
    setCases(initialArray);
    setDiv1(div1);
    setFinished(false);
    message.current = initialMessage;
  };
  return (
    <>
      <h1 className="title-games"> Jeu du Morpion </h1>
      <div className="btn-games">
        <button className="clear-grille" onClick={restartGame}>
          Vider la grille
        </button>
        <button className="restart" onClick={restartGame}>
          Recommencer
        </button>
      </div>

      <h1 className="next-player">Tour du joueur {namePlayer}</h1>
      <h2 className="message-current">{message.current}</h2>
      <div className="container-morpion">
        {cases.map((value, i) => (
          <div key={i} className="box-1" onClick={playerOne} data-index={i}>
            {value}
          </div>
        ))}
      </div>
    </>
  );
}
