import React from "react";

const TypeColors = ({ type }) => {
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  const typeStyle = {
    padding: "0.3rem",
    marginRight: "0.3rem",
    borderRadius: "3px",
    fontWeight: "bold",
    textTransform: "capitalize",
  };

  const getTypeColor = () => {
    switch (type) {
      case "fire":
        return { backgroundColor: "#FF7F00", color: "white" };
      case "water":
        return { backgroundColor: "blue", color: "white" };
      case "grass":
        return { backgroundColor: "green", color: "white" };
      case "electric":
        return { backgroundColor: "yellow", color: "black" };
      case "ice":
        return { backgroundColor: "lightblue", color: "black" };
      case "fighting":
        return { backgroundColor: "red", color: "white" };
      case "poison":
        return { backgroundColor: "purple", color: "white" };
      case "ground":
        return { backgroundColor: "#db5", color: "white" };
      case "flying":
        return { backgroundColor: "lightblue", color: "black" };
      case "psychic":
        return { backgroundColor: "hotpink", color: "white" };
      case "bug":
        return { backgroundColor: "#8ac926", color: "white" };
      case "rock":
        return { backgroundColor: "#ba6", color: "white" };
      case "ghost":
        return { backgroundColor: "purple", color: "white" };
      case "dragon":
        return { backgroundColor: "darkblue", color: "white" };
      case "dark":
        return { backgroundColor: "black", color: "white" };
      case "steel":
        return { backgroundColor: "gray", color: "white" };
      case "fairy":
        return { backgroundColor: "pink", color: "black" };
      default:
        return { backgroundColor: "gray", color: "white" };
    }
  };

  return (
    <span style={{ ...typeStyle, ...getTypeColor() }}>{capitalizedType}</span>
  );
};

export default TypeColors;
