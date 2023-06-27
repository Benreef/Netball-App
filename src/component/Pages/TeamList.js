import React, { useState, useEffect } from 'react';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/teams')
      .then(response => response.json())
      .then(data => {
        setTeams(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      {teams.map(team => (
        <div key={team.team_id}>
          <h3>{team.team_name}</h3>
          <p>Coach: {team.coach_name}</p>
          <p>Players:</p>
          <ul>
            {team.players.map(player => (
              <li key={player.player_id}>
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
