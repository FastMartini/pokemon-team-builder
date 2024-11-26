import React, { useState } from "react";
import PokemonSelector from "./components/pokemonSelector";
import TeamDisplay from "./components/teamDisplay";
import { getPokemonData } from "/Users/diegomartinez/Documents/GitHub/pokemon-team-builder/src/services/pokeapi.js";  // Corrected path



function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [team, setTeam] = useState([]);

  const handlePokemonSelection = (pokemon) => {
    setSelectedPokemon(pokemon);
    // Here, you would call the function to generate the team
  };

  return (
    <div className="App">
      <img src="/transparent_poke_logo.png" alt="Pokémon Team Builder Logo" className="app-logo" />
      <PokemonSelector onPokemonSelect={handlePokemonSelection} />
      <TeamDisplay team={team} />
    </div>
  );
}

export default App;


