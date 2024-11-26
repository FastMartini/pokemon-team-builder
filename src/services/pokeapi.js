import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";

// Fetch Pokémon data by name or ID
export const getPokemonData = async (pokemonName) => {
  try {
    const response = await axios.get(`${API_URL}pokemon/${pokemonName.toLowerCase()}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return null;
  }
};

// Fetch Type Effectiveness data
export const getTypeData = async (type) => {
  try {
    const response = await axios.get(`${API_URL}type/${type}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching type data:", error);
    return null;
  }
};
