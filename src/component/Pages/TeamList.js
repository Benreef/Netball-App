import React, { useState, useEffect } from 'react';
import './teamList.css'

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/api/teams')
      .then(res => res.json())
      .then(data => setTeams(data))
  }, []);

  return (
    <div className="teams-container">
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
};


export default TeamList;