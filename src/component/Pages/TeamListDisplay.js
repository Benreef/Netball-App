import React from "react";
import TeamList from "./TeamList";

function TeamListDisplay({ teams }) {
  return (
    <div>
      <h2>Teams</h2>
      {teams.map((team, index) => (
        <div key={index}>
          <h3>{team.team_name}</h3>
          <p>Coach: {team.coach_name}</p>
          <p>Players:</p>
          <ul>
            {team.players.map((player, index) => (
              <li key={index}>
                {player.player_name} - {player.preferred_position}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TeamListDisplay;
