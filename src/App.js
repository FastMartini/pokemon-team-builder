import React, { useState } from "react";
import PokemonSelector from "./components/pokemonSelector";
import TeamDisplay from "./components/teamDisplay";
import { getTypeData } from "/Users/diegomartinez/Documents/GitHub/pokemon-team-builder/src/services/pokeapi.js";  // Corrected path



function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [team, setTeam] = useState([]);

  const handlePokemonSelection = async (pokemonData) => {
    setSelectedPokemon(pokemonData);

    // Example: Fetch type effectiveness for team-building
    const typeData = await getTypeData(pokemonData.types[0].type.name);
    console.log("Type data:", typeData);
    
    // Call a function to generate a team based on this Pokémon
    const generatedTeam = generateTeam(pokemonData, typeData);
    setTeam(generatedTeam);
  };

  const generateTeam = (pokemonData, typeData) => {
    // Placeholder logic for team generation
    // This will use the selected Pokémon's types, stats, and weaknesses
    return [
      { name: "Placeholder Pokémon 1" },
      { name: "Placeholder Pokémon 2" },
      { name: "Placeholder Pokémon 3" },
      { name: "Placeholder Pokémon 4" },
      { name: "Placeholder Pokémon 5" },
    ];
  };

  return (
    <div className="App">
      <img src="logo.png" alt="Pokémon Team Builder Logo" className="app-logo" />
      <PokemonSelector onPokemonSelect={handlePokemonSelection} />
      <TeamDisplay team={team} />
    </div>
  );
}

export default App;

