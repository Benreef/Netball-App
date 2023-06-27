import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function GamePage() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedOpposition, setSelectedOpposition] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = () => {
    fetch('/api/teams')
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error('Error fetching teams:', error));
  };

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleOppositionChange = (event) => {
    setSelectedOpposition(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new game in the database
    const gameData = {
      teamId: selectedTeam,
      oppositionId: selectedOpposition === 'opposition' ? null : selectedOpposition,
    };

    fetch('/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameData),
    })
      .then((res) => res.json())
      .then((data) => {
        const gameId = data.gameId;
        // Redirect to the scoring page with the game ID
        history.push(`/scoring/${gameId}`);
      })
      .catch((error) => console.error('Error creating game:', error));
  };

  return (
    <div>
      <h1>Start Game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Your Team:</label>
          <select value={selectedTeam} onChange={handleTeamChange}>
            <option value="">Choose a team</option>
            {teams.map((team) => (
              <option key={team.team_id} value={team.team_id}>
                {team.team_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Opposition:</label>
          <select value={selectedOpposition} onChange={handleOppositionChange}>
            <option value="opposition">Opposition</option>
            {teams.map((team) => (
              <option key={team.team_id} value={team.team_id}>
                {team.team_name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
}

export default GamePage;
