import GameModeIcons from "../assets/Icons/GameModeIcons";
import Icon from "../../public/Icon.svg"

function GameMode({ darkMode, setMode }) {
  
  return (
    <div className={`flex flex-col justify-center items-center `}>
       
      <div className="text-3xl  my-[40px]">
        <div 
        className="w-[200px] h-[200px]"
        style={{background:`url(${Icon})` , backgroundSize: "cover" }}>

        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center">
          <button
            className="rounded-full w-[10vw] min-w-[50px] flex justify-center items-center m-2 p-2 hover:bg-gray-300 transition duration-300"
            onClick={() => setMode("chat")}
          >
            {GameModeIcons.chat}
          </button>
          <div>Chat</div>
        </div>

        <div className="flex flex-col items-center ">
          <button
            className="rounded-full w-[10vw] min-w-[50px] flex justify-center items-center m-2 p-2 hover:bg-gray-300 transition duration-300"
            onClick={() => setMode("pc")}
          >
            {GameModeIcons.game}
          </button>
          <div>XO Game</div>
        </div>
      </div>
    </div>
  );
}

export default GameMode;
