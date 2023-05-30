import React from "react";
import { MegaMenu } from "primereact/megamenu";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";

export default function Navbar({ pokemonFilter }) {
  const start = (
    <img alt="logo" src="./assets/pokemon-logo.svg" height="50"></img>
  );
  const end = (
    <InputText
      placeholder="Search"
      type="text"
      onChange={(e) => pokemonFilter(e.target.value)}
    />
  );

  const navbarStyle = {
    marginBottom: "3rem",
  };

  return (
    <div style={navbarStyle}>
      <MegaMenu orientation="horizontal" start={start} end={end} />
    </div>
  );
}
