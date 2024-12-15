import { Container, Grid2 } from "@mui/material";
import PokeCard from "../Components/PokeCard";
import SearchBar from "../Components/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "#121212";
  });

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    let endpoints = [];
    for (let i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    console.log(endpoints);

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        const pokemonsData = res.map((response) => response.data);
        setPokemons(pokemonsData);
        setAllPokemons(pokemonsData);
      })
      .catch((error) => console.error("Erro ao carregar os pokémons:", error));
  };

  const pokemonFilter = (name) => {
    let filteredPokemons = [];

    if (name === "") {
      setPokemons(allPokemons);
      return;
    }

    filteredPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );

    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <SearchBar pokemonFilter={pokemonFilter} />
      <div>
        <Container maxWidth="false">
          <Grid2 container spacing={3} sx={{ paddingTop: 10 }}>
            {pokemons.map((pokemon, key) => (
              <Grid2 sx={{ width: 240 }} key={key}>
                <PokeCard
                  name={pokemon.name}
                  sprite={pokemon.sprites.front_default}
                  types={pokemon.types}
                />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </div>
    </div>
  );
};

export default Home;
