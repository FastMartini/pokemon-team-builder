import React from "react";

const TeamCard = ({ pokemon }) => {
  return (
    <div className="team-card">
      <h3>{pokemon.name}</h3>
      {/* You can add more details here, like type, stats, etc. */}
    </div>
  );
};

export default TeamCard;
