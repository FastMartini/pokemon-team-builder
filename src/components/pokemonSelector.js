import React, { useState } from "react";

const PokemonSelector = ({ onPokemonSelect }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPokemonSelect(pokemonName);
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
    </div>
  );
};

export default PokemonSelector;
