import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import TypeColors from "../TypeColors/TypeColors";

export default function PokemonCard({ name, image, types }) {
  const capitalizedFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);

  const typeHandler = () => {
    if (types && types.length > 0) {
      return (
        <>
          {types.map((type, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span>&bull; </span>}
              <TypeColors type={type.type.name} />
            </React.Fragment>
          ))}
        </>
      );
    }
    return "Unknown";
  };

  const header = <img src={image} />;
  const footer = (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
      <Button label="View More" severity="info" text />
    </div>
  );

  const cardStyle = {
    width: "350px",
    borderRadius: "5px",
    padding: "10px",
    margin: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const titleStyle = {
    paddingBottom: "5px",
  };

  return (
    <Card footer={footer} header={header} style={cardStyle}>
      <h2 style={titleStyle}>{capitalizedFirstLetter}</h2>
      <div>{typeHandler()}</div>
    </Card>
  );
}
