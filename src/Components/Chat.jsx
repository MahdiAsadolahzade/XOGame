// ChatRoom.js
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import SendIcon from "../assets/Icons/SendIcon";
import "./Chat.css";
const socket = io("https://xogame-websocket-mahdiasadolahzade.onrender.com/");

function ChatRoom({ darkMode }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userList, setUserList] = useState([]);
  const username = localStorage.getItem("username") || "Anonymous";

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    socket.emit("joinChat", username);
    socket.on("userJoined", (user) => {
      setUserList((prevList) => [...prevList, user]);
    });

    socket.on("userLeft", (user) => {
      setUserList((prevList) =>
        prevList.filter((existingUser) => existingUser !== user)
      );
    });

    socket.on("messageReceived", ({ user, message }) => {
      setMessages((prevMessages) => [...prevMessages, `${user}: ${message}`]);
    });

    return () => {
      socket.disconnect();
    };
  }, [username]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div className=" flex items-center justify-center  ">
      <div className="">
        <div className="mx-auto">
          <h2 className="mt-6 text-center text-3xl font-extrabold ">
            Chat Room
          </h2>
          <div
            className={`overflow-auto h-[80px] border-[1px] rounded-lg  border-gray-300`}
          >
            <ul className="mt-4 space-y-2 mx-[10px]">
              {userList.map((user) => (
                <li
                  key={user}
                  className={` rounded-lg p-2`}
                  style={{ color: `${getRandomColor()}` }}
                >
                  {user}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="mt-4 w-[60vw] h-[40vh] mx-auto overflow-y-auto border border-gray-300 p-4 rounded-lg">
            {messages.map((msg, index) => (
              <p key={index} className="">
                {msg}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-5 w-full mr-1">
            <input
              type="text"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border text-black border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={sendMessage}
              className="bg-blue-500  text-white py-4 px-4 rounded-full hover:animate-spin "
            >
              <SendIcon></SendIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
