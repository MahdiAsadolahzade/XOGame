import XOGame from "./PCMode/XOGame";
import { useState , useEffect } from "react";


function PCMode({ darkMode }) {
  const [boardSize, setBoardSize] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className={`pc-mode-container  ${darkMode ? "dark" : "light"}`}>
      {!gameStarted ? (
        <div className="pc-mode-content">
          <div className="flex justify-center items-center">
          <h3 className="text-xl font-semibold mb-4">
            Choose Board Size:
          </h3>
          </div>
          <div className="radio-options space-y-2">
            <label className="inline-flex m-2 items-center space-x-2">
              <input
                type="radio"
                value={3}
                checked={boardSize === 3}
                onChange={() => setBoardSize(3)}
                className="form-radio text-blue-500"
              />
              <span className="text-lg">3x3</span>
            </label>
            <label className="inline-flex m-2 items-center  space-x-2">
              <input
                type="radio"
                value={4}
                checked={boardSize === 4}
                onChange={() => setBoardSize(4)}
                className="form-radio text-blue-500"
              />
              <span className="text-lg">4x4</span>
            </label>
            <label className="inline-flex m-2 items-center space-x-2">
              <input
                type="radio"
                value={5}
                checked={boardSize === 5}
                onChange={() => setBoardSize(5)}
                className="form-radio text-blue-500"
              />
              <span className="text-lg">5x5</span>
            </label>
          </div>
          <div className="flex flex-row justify-center items-center">
          <button
            onClick={handleStartGame}
            className="bg-blue-500  text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
          >
            Start Game
          </button>
          </div>
        </div>
      ) : (
        <XOGame darkMode={darkMode} boardSize={boardSize} />
      )}
    </div>
  );
}

export default PCMode;
