import React from "react";
import TeamCard from "./TeamCard";

const TeamDisplay = ({ team }) => {
  return (
    <div>
      <h2>Your Pokémon Team</h2>
      <div className="team">
        {team.map((pokemon, index) => (
          <TeamCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default TeamDisplay;
