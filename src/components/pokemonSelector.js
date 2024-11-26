import React, { useState } from "react";
import { getPokemonData } from "src/services/pokeapi.js";

const PokemonSelector = ({ onPokemonSelect }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    // Fetch Pokémon data
    const pokemonData = await getPokemonData(pokemonName);
    if (pokemonData) {
      onPokemonSelect(pokemonData);
    } else {
      setError("Pokémon not found. Please try again!");
    }
  };

  return (
    <div>
      <h2>Select Your Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pokemonName}
          onChange={handleChange}
          placeholder="Enter Pokémon name"
        />
        <button type="submit">Select</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PokemonSelector;
