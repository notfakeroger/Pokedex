import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";

const typeColors = {
  normal: "#D3D3D3",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#FF0000",
  water: "#6390F0",
  grass: "#00CD00",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705848",
  fairy: "#D685B5",
};

const getTextColor = (bgColor) => {
  const rgb = parseInt(bgColor.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  
  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return brightness > 128 ? "#000000" : "#FFFFFF";
};

const TypeBlock = ({ type }) => {
  const bgColor = useMemo(() => typeColors[type.toLowerCase()] || "#000000", [type]);
  const textColor = useMemo(() => getTextColor(bgColor), [bgColor]);

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "8px 16px",
        borderRadius: "16px",
        display: "inline-block",
        margin: "5px",
        textTransform: "capitalize",
      }}
    >
      <Typography variant="body1">{type}</Typography>
    </Box>
  );
};

export default TypeBlock;
