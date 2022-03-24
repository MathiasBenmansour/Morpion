import "./snake.css";
import { useState } from "react";


function Snake() {
  const [modal, setModal] = useState(true);

  function handleOnClick() {
    setModal(!modal);
  }

  function handleOffClick() {
  setModal(false)
  }

  return (
    <div className="bg-snake">
      {modal ? (
        <h1 className="title-snake">
          Jeux du serpent
          <div className="container-snake">
            <h1 className="run-snake">Lancer une partie</h1>

            <div className="btn-snake">
              <button className="on-snake" onClick={handleOnClick}>
                Oui
              </button>
              <button className="off-snake" onClick={handleOffClick}>
                Non
              </button>
            </div>
          </div>
        </h1>
      ) : (
        <div className="container-snake">
          <div className="Title-Snake">
            <h1 className="title-snake">Patience ... </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Snake;
