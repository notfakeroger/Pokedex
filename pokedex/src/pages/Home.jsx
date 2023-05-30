import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import axios from "axios";
import { Skeleton } from "primereact/skeleton";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [originalPokemons, setOriginalPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPokemons = filteredPokemons.slice(startIndex, endIndex);
    setPokemons(displayedPokemons);
  }, [currentPage, filteredPokemons]);

  const getPokemon = () => {
    let endpoints = [];
    for (let i = 1; i < 650; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    setIsLoading(true);

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((responses) => {
        const updatedPokemons = responses.map((response) => response.data);
        setOriginalPokemons(updatedPokemons);
        setFilteredPokemons(updatedPokemons);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const cardsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "4rem",
  };

  const skeletonStyle = {
    width: "25rem",
    flex: "0 0 calc(33.33% - 1rem)",
  };

  const renderSkeletons = () => {
    const skeletonCount = itemsPerPage;
    const skeletons = [];

    for (let i = 0; i < skeletonCount; i++) {
      skeletons.push(<Skeleton key={i} size="25rem" style={skeletonStyle} />);
    }

    return skeletons;
  };

  const pokemonFilter = (name) => {
    const lowercaseName = name.toLowerCase();

    if (lowercaseName === "") {
      setFilteredPokemons(originalPokemons);
    } else {
      const filteredPokemon = originalPokemons.filter((pokemon) =>
        pokemon.name.startsWith(lowercaseName)
      );
      setFilteredPokemons(filteredPokemon);
    }

    setCurrentPage(0);
  };

  const handlePageChange = (first) => {
    setCurrentPage(first / itemsPerPage);
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <div style={cardsContainerStyle}>
        {isLoading ? (
          renderSkeletons()
        ) : (
          pokemons.map((pokemon, key) => (
            <PokemonCard
              key={key}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              types={pokemon.types}
            />
          ))
        )}
      </div>
      <Pagination
        totalItems={filteredPokemons.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
