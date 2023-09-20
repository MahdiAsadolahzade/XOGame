import React, { useState, useEffect } from "react";
import GameMode from "./GameMode";
import ChatRoom from "./Chat";
import PCMode from "./PCMode";

function GameBox({ darkMode }) {
  const [mode, setMode] = useState(null);

 

  return (
    <div
      className={`Game-Box flex justify-center items-center mx-auto mt-[20px] w-[80vw] h-[80vh] ${
        darkMode
          ? "bg-[#1a1a1a] border-2 border-orange-500"
          : " bg-white border-2 border-sky-500"
      }`}
    >
      {mode === null ? (
        <GameMode darkMode={darkMode} setMode={setMode} />
      ) : mode === "chat" ? (
        <ChatRoom darkMode={darkMode} />
      ) : (
        <PCMode darkMode={darkMode} />
      )}
    </div>
  );
}

export default GameBox;
