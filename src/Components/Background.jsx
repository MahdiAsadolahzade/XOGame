import React, { useState, useEffect } from "react";
import "./Background.css";

function Background({ darkMode }) {
  const [shapes, setShapes] = useState([]);

  const possibleSizes = ["small", "medium", "large"];

  const generateRandomPositions = () => {
    const positions = [];

    for (let i = 0; i < 150; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const type = Math.random() < 0.5 ? "X" : "O";
      const size = possibleSizes[Math.floor(Math.random() * possibleSizes.length)];

      positions.push({ x, y, type, size });
    }

    return positions;
  };

  useEffect(() => {
    const randomPositions = generateRandomPositions();
    setShapes(randomPositions);

    const handleResize = () => {
      const updatedPositions = generateRandomPositions();
      setShapes(updatedPositions);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`Background ${darkMode ? "dark-mode" : "light-mode"}`}>
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`shape ${shape.type} ${shape.size}`}
          style={{ left: shape.x, top: shape.y }}
        >
          {shape.type}
        </div>
      ))}
    </div>
  );
}

export default Background;
