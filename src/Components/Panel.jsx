import React from "react";
import "./Panel.css";
import SignAnimation from "../../public/SignAnimation.gif";

function Panel({ show, onClose, children, loggedInUsername, isDarkMode }) {
  if (show) {
    return (
      <div
        className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <div className="bg-white p-4 rounded-md  card">
          <div
            className="w-[150px] h-[80px]"
            style={{
              background: `url(${SignAnimation})`,
              backgroundSize: "cover",
            }}
          ></div>
          {children}
          <button
            onClick={onClose}
            className="block mt-4 ml-auto p-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Close
          </button>
          <span className="topc"></span>
          <span className="rightc"></span>
          <span className="bottomc"></span>
          <span className="leftc"></span>
        </div>
      </div>
    );
  }
  return null;
}

export default Panel;
