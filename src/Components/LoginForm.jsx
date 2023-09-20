import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../assets/Icons/Loading";
const backendUrl = "https://xogame-backend-mahdiasadolahzade.onrender.com";

function LoginForm({
  onLogin,
  onBack,
  isDarkMode,
  loggedInUsername,
  setLoggedInUsername,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginPanelOpen, setIsLoginPanelOpen] = useState(true);
  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // اضافه کردن حالت "loading"

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUsername = localStorage.getItem("username");
    if (token) {
      setIsLoggedIn(true);
      setLoggedInUsername(savedUsername);
    }
  }, []);

  const validateInputs = () => {
    const errors = [];

    if (username.length < 5 || username.length > 8) {
      errors.push("Username must be between 5 and 8 characters.");
    }

    if (password.length < 4) {
      errors.push("Password must be at least 4 characters.");
    }

    return errors;
  };

  const handleLoginClick = () => {
    const errors = validateInputs();

    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    setIsLoading(true); // اضافه کردن حالت "loading"

    const data = {
      username: username,
      password: password,
    };

    axios
      .post(`${backendUrl}/login`, data)
      .then((response) => {
        const token = response.data.token;

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        setLoggedInUsername(username);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessages(["An error occurred. Please try again later."]);
      })
      .finally(() => {
        setIsLoading(false); // پایان حالت "loading"
      });
  };

  const handleRegisterClick = () => {
    const errors = validateInputs();

    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    setIsLoading(true); // اضافه کردن حالت "loading"

    const data = {
      username: username,
      password: password,
    };

    axios
      .post(`${backendUrl}/adduser`, data)
      .then((response) => {
        console.log("Registration Successful:", response.data);
        setIsLoginPanelOpen(true);
        setErrorMessages(["Registration successful."]);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessages(["An error occurred during registration."]);
      })
      .finally(() => {
        setIsLoading(false); // پایان حالت "loading"
      });
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handleWantToRegisterClick = () => {
    setIsLoginPanelOpen(!isLoginPanelOpen);
    setErrorMessages([]);
  };

  const handleClosePanel = () => {
    setIsLoginPanelOpen(true);
    setErrorMessages([]);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setLoggedInUsername("");
    window.location.reload();
  };

  return (
    <div
      className={`flex flex-col justify-center items-center ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } `}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className={`p-6 rounded-lg shadow-lg flex flex-col ${
          isDarkMode ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <h2
          className={`text-2xl font-semibold mb-4 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {isLoginPanelOpen ? "Login" : "Register"}
        </h2>

        <div className="flex flex-col space-y-4">
          {isLoading ? (
            <div className="mx-auto">
              <div className={`animate-spin ${isDarkMode?"text-white":"text-black"}`}>
                <Loading></Loading>
              </div>
            </div>
          ) : isLoggedIn ? (
            <div className="flex flex-col justify-center items-center">
              <button
                className={`bg-red-500 text-white rounded-lg p-2 m-2 hover:bg-red-600 transition duration-300 ${
                  isDarkMode ? "hover:bg-red-400" : "hover:bg-red-600"
                }`}
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <input
                className={`rounded-lg p-2 m-2 border focus:outline-none focus:ring focus:border-blue-300 ${
                  isDarkMode
                    ? "text-black border-gray-600"
                    : "text-black border-gray-300"
                }`}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onClick={handleInputClick}
              />
              <input
                className={`rounded-lg p-2 m-2 border focus:outline-none focus:ring focus:border-blue-300 ${
                  isDarkMode
                    ? "text-black border-gray-600"
                    : "text-black border-gray-300"
                }`}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={handleInputClick}
              />
              {errorMessages.length > 0 && (
                <div className="text-red-600">
                  {errorMessages.map((message, index) => (
                    <div key={index}>{message}</div>
                  ))}
                </div>
              )}
              {isLoginPanelOpen ? (
                <button
                  className={`bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-300 ${
                    isDarkMode ? "hover:bg-blue-400" : "hover:bg-blue-600"
                  }`}
                  onClick={handleLoginClick}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              ) : (
                <button
                  className={`bg-green-500 text-white rounded-lg p-2 hover:bg-green-600 transition duration-300 ${
                    isDarkMode ? "hover:bg-green-400" : "hover:bg-green-600"
                  }`}
                  onClick={handleRegisterClick}
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              )}
            </div>
          )}
          {isLoginPanelOpen ? (
            <div
              className={`rounded-lg p-2 transition duration-300 cursor-pointer ${
                isDarkMode
                  ? "hover:text-orange-400 "
                  : "hover:text-sky-600 text-black"
              }`}
              onClick={handleWantToRegisterClick}
            >
              Want to Register ?
            </div>
          ) : (
            <div
              className={`rounded-lg p-2 transition duration-300 cursor-pointer ${
                isDarkMode ? "hover:text-orange-400" : "hover:text-sky-600"
              }`}
              onClick={handleClosePanel}
            >
              Back to Login
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
