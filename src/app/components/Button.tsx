import React, { useState, useEffect } from "react";

interface IProps {
  color?: string;
  content: string;
  style?: object;
}

const Button: React.FC<IProps> = ({ color, content, style }) => {
  const [btnColor, setBtnColor] = useState("white");
  const [onHoverColor, setOnHoverColor] = useState("#e6e6e6");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (color === "primary") {
      setBtnColor("#00A5EF");
      setOnHoverColor("#008ECE");
    } else if (color === "success") {
      setBtnColor("#3EA142");
      setOnHoverColor("#368D39");
    } else if (color === "warning") {
      setBtnColor("#FFFFFF");
      setOnHoverColor("#DFA300");
    } else if (color === "info") {
      setBtnColor("#008391");
      setOnHoverColor("#006570");
    } else if (color === "danger") {
      setBtnColor("#F75D5D");
      setOnHoverColor("#E45555");
    }
  }, [color]);

  const btnStyle = {
    backgroundColor: btnColor,
    padding: "0.8rem 1.5rem",
    border: "none",
    color: `${btnColor === "white" ? "black" : "white"}`,
    borderRadius: 5,
    fontSize: "1rem",
    boxShadow: "1px 5px 10px 5px #C5CACD",
    transition: "all 0.5s ease",
    cursor: "pointer",
  };

  const btnHover = {
    backgroundColor: onHoverColor,
    transition: "all 0.5s ease",
  };

  return (
    <button
      style={
        hovered
          ? { ...btnStyle, ...btnHover, ...style }
          : { ...btnStyle, ...style }
      }
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {content}
    </button>
  );
};

export default Button;
