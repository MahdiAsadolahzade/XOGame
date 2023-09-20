import React, { useState, useEffect } from "react";
import "./XOGame.css";

function Game({ darkMode, boardSize }) {
  const [squares, setSquares] = useState(Array(boardSize ** 2).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);
  const [computersTurn, setComputersTurn] = useState(false);

  useEffect(() => {
    const calculateWinner = (squares) => {
      const size = Math.sqrt(squares.length);
      const lines = [];

      // افقی
      for (let i = 0; i < size; i++) {
        const line = [];
        for (let j = 0; j < size; j++) {
          line.push(i * size + j);
        }
        lines.push(line);
      }

      // عمودی
      for (let i = 0; i < size; i++) {
        const line = [];
        for (let j = 0; j < size; j++) {
          line.push(i + j * size);
        }
        lines.push(line);
      }

      // قطر اصلی
      const mainDiagonal = [];
      for (let i = 0; i < size; i++) {
        mainDiagonal.push(i * (size + 1));
      }
      lines.push(mainDiagonal);

      // قطر فرعی
      const sideDiagonal = [];
      for (let i = 0; i < size; i++) {
        sideDiagonal.push((i + 1) * (size - 1));
      }
      lines.push(sideDiagonal);

      for (const line of lines) {
        switch (size) {
          case 3:
            const [a, b, c] = line;
            if (
              squares[a] &&
              squares[a] === squares[b] &&
              squares[a] === squares[c]
            ) {
              return squares[a];
            }
            break;
          case 4:
            const [a1, b1, c1, d1] = line;
            if (
              squares[a1] &&
              squares[a1] === squares[b1] &&
              squares[a1] === squares[c1] &&
              squares[a1] === squares[d1]
            ) {
              return squares[a1];
            }
            break;
          case 5:
            const [a2, b2, c2, d2, e2] = line;
            if (
              squares[a2] &&
              squares[a2] === squares[b2] &&
              squares[a2] === squares[c2] &&
              squares[a2] === squares[d2] &&
              squares[a2] === squares[e2]
            ) {
              return squares[a2];
            }
            break;
          default:
            break;
        }
      }

      if (!squares.includes(null)) {
        setDraw(true);
      }

      return null;
    };

    const makeComputerMove = () => {
      setTimeout(() => {
        if (!xIsNext && !draw && !winner) {
          const emptySquares = squares.reduce(
            (acc, val, idx) => (val === null ? acc.concat(idx) : acc),
            []
          );
          const randomIndex = Math.floor(Math.random() * emptySquares.length);
          const randomSquare = emptySquares[randomIndex];

          const squaresCopy = [...squares];
          squaresCopy[randomSquare] = "O"; // نماینده کامپیوتر
          setSquares(squaresCopy);
          setXIsNext(true); // تغییر نوبت به نوبت کاربر
          setComputersTurn(false);
        }
      }, 1000); // تأخیر 1 ثانیه برای حرکت کامپیوتر
    };

    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(winner);
    } else if (computersTurn) {
      makeComputerMove();
    }
  }, [squares, boardSize, xIsNext, draw, winner, computersTurn]);

  useEffect(() => {
    // وقتی که اندازه بورد تغییر می‌کند، بازی را ریست کنید
    resetGame();
  }, [boardSize]); // boardSize به وابستگی‌ها اضافه شده است

  const handleClick = (i) => {
    if (winner || squares[i] || (!xIsNext && !winner) || computersTurn) return;

    const squaresCopy = [...squares];
    squaresCopy[i] = "X"; // نماینده کاربر
    setSquares(squaresCopy);
    setXIsNext(false); // تغییر نوبت به نوبت کامپیوتر
    setComputersTurn(true);
  };

  const resetGame = () => {
    setSquares(Array(boardSize ** 2).fill(null));
    setXIsNext(true);
    setWinner(null);
    setDraw(false);
    setComputersTurn(false);
  };

  const renderSquare = (i) => {
    const squareClass = squares[i]
      ? `square ${squares[i]} ${darkMode ? "dark-mode" : "light-mode"}`
      : `square ${darkMode ? "dark-mode" : "light-mode"}`;
    return (
      <div
        className={`text-3xl w-[9vw] h-[7vh] m-1 ${squareClass}`}
        onClick={() => handleClick(i)}
      >
        {squares[i]}
      </div>
    );
  };

  return (
    <div className={`XOGame ${darkMode ? "dark-mode" : ""} text-center`}>
      <div className={`game-board grid grid-cols-${boardSize}  gap-1`}>
        {Array.from({ length: boardSize }).map((_, i) => (
          <div key={i} className="board-row flex justify-center">
            {Array.from({ length: boardSize }).map((_, j) =>
              renderSquare(i * boardSize + j)
            )}
          </div>
        ))}
      </div>

      <div className="game-info">
        <div className="text-2xl mb-4">
          {winner
            ? winner === "X"
              ? " You win!"
              : "Computer wins!"
            : draw
            ? "Draw!"
            : ` player: ${xIsNext ? "X (You)" : "O (Computer)"}`}
        </div>
        <div>
          <button
            onClick={() => resetGame()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
