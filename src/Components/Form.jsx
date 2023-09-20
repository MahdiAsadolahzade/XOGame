import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm"; 
import UserIcon from "../assets/Icons/UserIcon";
import Panel from "./Panel"; 

function Form(props) {
  const { themeMode } = props;
  const [showPanel, setShowPanel] = useState(false); 
  const [loggedInUsername, setLoggedInUsername] = useState(
    localStorage.getItem("loggedInUsername") || ""
  ); 

  const handleLogin = () => {
    setShowPanel(true); 
  };

  const handleLogout = () => {
    setShowPanel(false); 
  };

  useEffect(() => {
    localStorage.setItem("loggedInUsername", loggedInUsername);
  }, [loggedInUsername]);

  return (
    <div className="login/out-form flex flex-row items-center">
      {showPanel ? (
        <Panel show={showPanel} onClose={handleLogout} loggedInUsername={loggedInUsername} isDarkMode={themeMode}>
          <LoginForm isDarkMode={themeMode} loggedInUsername={loggedInUsername} setLoggedInUsername={setLoggedInUsername}/>
        </Panel>
      ) : (
        <button onClick={handleLogin} className="rounded-[15px] p-2 mx-2 flex items-center">
          <UserIcon></UserIcon>
          <div>
            {loggedInUsername ? loggedInUsername : null}
          </div>
        </button>
      )}
    </div>
  );
}

export default Form;
