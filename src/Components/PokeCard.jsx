import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { myTheme } from "./SearchBar";
import TypeBlock from "./Types";
import { Box } from "@mui/material";

export default function PokeCard({ name, sprite, types }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: myTheme.palette.background.main,
        borderRadius: 3,
      }}
    >
      <CardMedia sx={{ height: 300 }} image={sprite} title="Pokémon" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: myTheme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {capitalizeFirstLetter(name)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 1,
          }}
        >
          {types.map((type, index) => (
            <TypeBlock key={index} type={type.type.name} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
