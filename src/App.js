import React, { useState } from "react";
import PokemonSelector from "./components/pokemonSelector";
import TeamDisplay from "./components/teamDisplay";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [team, setTeam] = useState([]);

  const handlePokemonSelection = (pokemon) => {
    setSelectedPokemon(pokemon);
    // Here, you would call the function to generate the team
  };

  return (
    <div className="App">
      <h1>Pokémon Team Builder</h1>
      <PokemonSelector onPokemonSelect={handlePokemonSelection} />
      <TeamDisplay team={team} />
    </div>
  );
}

export default App;


