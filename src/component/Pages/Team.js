import React, { useState } from 'react';

const CreateTeamForm = () => {
  const [teamName, setTeamName] = useState('');
  const [coachName, setCoachName] = useState('');
  const [players, setPlayers] = useState([
    { name: '', position: 'GS' },
    { name: '', position: 'GA' },
    { name: '', position: 'WA' },
    { name: '', position: 'C' },
    { name: '', position: 'GD' },
    { name: '', position: 'WD' },
    { name: '', position: 'GK' }
  ]);

  const handlePlayerChange = (index, field, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index][field] = value;
    setPlayers(updatedPlayers);
  };

  const addPlayer = () => {
    setPlayers([...players, { name: '', position: 'GS' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const teamData = {
      teamName,
      coachName,
      players
    };

    fetch('/api/teams', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(teamData)
    })
      .then(res => res.json())
      .then(data => {
        // Handle success response
        console.log(data);
        // Reset form fields
        setTeamName('');
        setCoachName('');
        setPlayers([
          { name: '', position: 'GS' },
          { name: '', position: 'GA' },
          { name: '', position: 'WA' },
          { name: '', position: 'C' },
          { name: '', position: 'GD' },
          { name: '', position: 'WD' },
          { name: '', position: 'GK' }
        ]);
      })
      .catch(error => {
        // Handle error response
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="coachName">Coach Name:</label>
        <input
          type="text"
          id="coachName"
          value={coachName}
          onChange={(e) => setCoachName(e.target.value)}
        />
      </div>
      {players.map((player, index) => (
        <div key={index}>
          <label htmlFor={`playerName${index}`}>Player Name:</label>
          <input
            type="text"
            id={`playerName${index}`}
            value={player.name}
            onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
          />
          <label htmlFor={`playerPosition${index}`}>Position:</label>
          <select
            id={`playerPosition${index}`}
            value={player.position}
            onChange={(e) => handlePlayerChange(index, 'position', e.target.value)}
          >
            <option value="GS">GS</option>
            <option value="GA">GA</option>
            <option value="WA">WA</option>
            <option value="C">C</option>
            <option value="GD">GD</option>
            <option value="WD">WD</option>
            <option value="GK">GK</option>
          </select>
        </div>
      ))}
      <button type="button" onClick={addPlayer}>Add Player</button>
      <button type="submit">Create Team</button>
    </form>
  );
};

export default CreateTeamForm;
