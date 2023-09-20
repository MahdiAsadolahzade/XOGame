function GameTitle(props) {
    const {themeMode} = props;

    return ( 
        <div className="font-bold text-xl">
            <span className={`text-4xl ${themeMode?"text-teal-500":"text-rose-500"}`}>X</span>
            <span className={`text-4xl ${themeMode?"text-orange-400":"text-sky-500"}`}>O</span>
            Game
        </div>
     );
}

export default GameTitle;