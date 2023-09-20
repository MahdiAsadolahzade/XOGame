// MainPage.js
import { useState, useEffect } from "react";
import Menu from "../src/Components/Menu";
import Background from "../src/Components/Background";
import GameBox from "../src/Components/GameBox";
import ProjectInfoPanel from "../src/Components/ProjectInfoPanel";
import "../src/Styles/PageTheme.css";
import InfoIcons from "../src/assets/Icons/InfoIcons";

function MainPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);

  const handleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("themeMode", newDarkMode ? "dark" : "light");
  };

  const toggleProjectInfo = () => {
    setShowProjectInfo(!showProjectInfo);
  };

  useEffect(() => {
    const storedThemeMode = localStorage.getItem("themeMode");
    if (storedThemeMode) {
      setDarkMode(storedThemeMode === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={`MainPage `}>
      <Menu handleTheme={handleTheme} themeMode={darkMode}></Menu>
      <Background darkMode={darkMode} />
      <GameBox darkMode={darkMode}></GameBox>

      <button
        className={`fixed bottom-0 right-0 m-4 p-2 bg-blue-500 hover:animate-ping text-white rounded-full shadow-md `}
        onClick={toggleProjectInfo}
      >
        {InfoIcons.info}
      </button>

      {showProjectInfo && <ProjectInfoPanel darkMode={darkMode} onClose={toggleProjectInfo} />}
    </div>
  );
}

export default MainPage;
