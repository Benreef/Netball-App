// import React, { useState } from 'react';

// const Scoring = () => {
//   const [homeScore, setHomeScore] = useState(0);
//   const [homeMissed, setHomeMissed] = useState(0);
//   const [oppositionScore, setOppositionScore] = useState(0);
//   const [oppositionMissed, setOppositionMissed] = useState(0);
//   const [intercepts, setIntercepts] = useState({
//     GS: 0,
//     GA: 0,
//     WA: 0,
//     C: 0,
//     GD: 0,
//     WD: 0,
//     GK: 0
//   });
//   const [centerPasses, setCenterPasses] = useState({
//     GA: 0,
//     GD: 0,
//     WA: 0,
//     WD: 0
//   });

//   const handleScoreIncrement = (team, scored) => {
//     if (team === 'home') {
//       if (scored) {
//         setHomeScore(prevScore => prevScore + 1);
//       } else {
//         setHomeMissed(prevMissed => prevMissed + 1);
//       }
//     } else if (team === 'opposition') {
//       if (scored) {
//         setOppositionScore(prevScore => prevScore + 1);
//       } else {
//         setOppositionMissed(prevMissed => prevMissed + 1);
//       }
//     }
//   };

//   const handleIncrement = (position) => {
//     setIntercepts(prevIntercepts => ({
//       ...prevIntercepts,
//       [position]: prevIntercepts[position] + 1
//     }));
//   };

//   const handleCenterPassIncrement = (position) => {
//     setCenterPasses(prevCenterPasses => ({
//       ...prevCenterPasses,
//       [position]: prevCenterPasses[position] + 1
//     }));
//   };

//   const handleSubmit = () => {
//     console.log('hello')
//     const data = {
//       game_id: null, // Set the game ID from the database
//       player_id: null, // Set the player ID from the database
//       quarter: null, // Set the current quarter
//       home_score: homeScore,
//       home_missed: homeMissed,
//       opposition_score: oppositionScore,
//       opposition_missed: oppositionMissed,
//       intercepts,
//       center_passes: centerPasses
//     };

//     fetch('/api/submit_data', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//       .then(response => response.json())
//       .then(responseData => {
//         console.log('Data submitted successfully:', responseData);
//       })
//   };

//   return (
//     <div>
//       <h1>Scoring</h1>
//       <div>
//         <p>Home Score: {homeScore}</p>
//         <p>Home Missed: {homeMissed}</p>
//         <button onClick={() => handleScoreIncrement('home', true)}>Home GS Scored</button>
//         <button onClick={() => handleScoreIncrement('home', false)}>Home GS Missed</button>
//       </div>
//       <div>
//         <p>Opposition Score: {oppositionScore}</p>
//         <p>Opposition Missed: {oppositionMissed}</p>
//         <button onClick={() => handleScoreIncrement('opposition', true)}>Scored</button>
//         <button onClick={() => handleScoreIncrement('opposition', false)}>Missed</button>
//       </div>
//       <h1>Intercepts</h1>
//       <div>
//         <p>GS: {intercepts.GS}</p>
//         <button onClick={() => handleIncrement('GS')}>GS</button>
//       </div>
//       <div>
//         <p>GA: {intercepts.GA}</p>
//         <button onClick={() => handleIncrement('GA')}>GA</button>
//       </div>
//       <div>
//         <p>WA: {intercepts.WA}</p>
//         <button onClick={() => handleIncrement('WA')}>WA</button>
//       </div>
//       <div>
//         <p>C: {intercepts.C}</p>
//         <button onClick={() => handleIncrement('C')}>C</button>
//       </div>
//       <div>
//         <p>GD: {intercepts.GD}</p>
//         <button onClick={() => handleIncrement('GD')}>GD</button>
//       </div>
//       <div>
//         <p>WD: {intercepts.WD}</p>
//         <button onClick={() => handleIncrement('WD')}>WD</button>
//       </div>
//       <div>
//         <p>GK: {intercepts.GK}</p>
//         <button onClick={() => handleIncrement('GK')}>GK</button>
//       </div>

//       <h1>Center Passes</h1>
//       <div>
//         <p>GA: {centerPasses.GA}</p>
//         <button onClick={() => handleCenterPassIncrement('GA')}>GA</button>
//       </div>
//       <div>
//         <p>GD: {centerPasses.GD}</p>
//         <button onClick={() => handleCenterPassIncrement('GD')}>GD</button>
//       </div>
//       <div>
//         <p>WA: {centerPasses.WA}</p>
//         <button onClick={() => handleCenterPassIncrement('WA')}>WA</button>
//       </div>
//       <div>
//         <p>WD: {centerPasses.WD}</p>
//         <button onClick={() => handleCenterPassIncrement('WD')}>WD</button>
//       </div>

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Scoring;



import React, { useState, useEffect } from 'react';

const Scoring = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [homeMissed, setHomeMissed] = useState(0);
  const [oppositionScore, setOppositionScore] = useState(0);
  const [oppositionMissed, setOppositionMissed] = useState(0);
  const [intercepts, setIntercepts] = useState({
    GS: 0,
    GA: 0,
    WA: 0,
    C: 0,
    GD: 0,
    WD: 0,
    GK: 0
  });
  const [centerPasses, setCenterPasses] = useState({
    GA: 0,
    GD: 0,
    WA: 0,
    WD: 0
  });
  const [teams, setTeams] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState({});
  const [showSummary, setShowSummary] = useState(false); // State to control showing the summary
  const [winner, setWinner] = useState(''); // State to store the winner

  useEffect(() => {
    // Fetch teams from the server and set them in the state
    fetch('/api/teams')
      .then(response => response.json())
      .then(data => {
        setTeams(data);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  const handleScoreIncrement = (team, scored) => {
    if (team === 'home') {
      if (scored) {
        setHomeScore(prevScore => prevScore + 1);
      } else {
        setHomeMissed(prevMissed => prevMissed + 1);
      }
    } else if (team === 'opposition') {
      if (scored) {
        setOppositionScore(prevScore => prevScore + 1);
      } else {
        setOppositionMissed(prevMissed => prevMissed + 1);
      }
    }
  };

  const handleIncrement = (position) => {
    setIntercepts(prevIntercepts => ({
      ...prevIntercepts,
      [position]: prevIntercepts[position] + 1
    }));
  };

  const handleCenterPassIncrement = (position) => {
    setCenterPasses(prevCenterPasses => ({
      ...prevCenterPasses,
      [position]: prevCenterPasses[position] + 1
    }));
  };

    const handleSubmit = () => {
      const homeTotalScore = homeScore - homeMissed;
      const oppositionTotalScore = oppositionScore - oppositionMissed;
    
      let winner = '';
      if (homeTotalScore > oppositionTotalScore) {
        winner = 'Home';
      } else if (homeTotalScore < oppositionTotalScore) {
        winner = 'Opposition';
      } else {
        winner = 'Draw';
      }
      setWinner(winner);
      setShowSummary(true);

    const data = {
      game_id: null, // Set the game ID from the database
      player_id: null, // Set the player ID from the database
      quarter: null, // Set the current quarter
      home_score: homeScore,
      home_missed: homeMissed,
      opposition_score: oppositionScore,
      opposition_missed: oppositionMissed,
      intercepts,
      center_passes: centerPasses
    };

    fetch('/api/submit_data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Data submitted successfully:', responseData);
      })
  };
  const handleTeamSelect = (teamName, teamType) => {
    setSelectedTeams(prevSelectedTeams => ({
      ...prevSelectedTeams,
      [teamType]: teamName
    }));
  };
  const handleReset = () => {
    setHomeScore(0);
    setHomeMissed(0);
    setOppositionScore(0);
    setOppositionMissed(0);
    setIntercepts({
      GS: 0,
      GA: 0,
      WA: 0,
      C: 0,
      GD: 0,
      WD: 0,
      GK: 0
    });
    setCenterPasses({
      GA: 0,
      GD: 0,
      WA: 0,
      WD: 0
    });
    setShowSummary(false);
    setWinner('');
  };

  return (
    <div>

      <h1>Select Teams</h1>
              <div>
                <label>Home Team:</label>
                <select onChange={(e) => handleTeamSelect(e.target.value, 'home')}>
                  <option value="">Select a team</option>
                  {teams.map((team) => (
                    <option key={team.team_id} value={team.team_name}>{team.team_name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Opposition Team:</label>
                <select onChange={(e) => handleTeamSelect(e.target.value, 'opposition')}>
                  <option value="">Select a team</option>
                  {teams.map((team) => (
                    <option key={team.team_id} value={team.team_name}>{team.team_name}</option>
                  ))}
                </select>
              </div>

              {showSummary ? (
          <>
            <h1>Match Summary</h1>
            <p>Winner: {winner}</p>
            <p>{selectedTeams.home} Score: {homeScore}</p>
            <p>{selectedTeams.home} Missed: {homeMissed}</p>
            <p>{selectedTeams.opposition} Score: {oppositionScore}</p>
            <p>{selectedTeams.opposition} Missed: {oppositionMissed}</p>
            <p>Intercepts:</p>
            <ul>
              {Object.entries(intercepts).map(([position, count]) => (
                <li key={position}>{position}: {count}</li>
              ))}
            </ul>
            <p>Center Passes:</p>
            <ul>
              {Object.entries(centerPasses).map(([position, count]) => (
                <li key={position}>{position}: {count}</li>
              ))}
            </ul>

            <button onClick={handleReset}>New Game</button>
          </>
        ) : (
          <>
            <h1>Scoring</h1>
            <div>
              <p>Home Team: {selectedTeams.home}</p>
              <p>Home Score: {homeScore}</p>
              <p>Home Missed: {homeMissed}</p>
              <button onClick={() => handleScoreIncrement('home', true)}>Home GS Scored</button>
              <button onClick={() => handleScoreIncrement('home', false)}>Home GS Missed</button>
            </div>
            <div>
              <p>Opposition Team: {selectedTeams.opposition}</p>
              <p>Opposition Score: {oppositionScore}</p>
              <p>Opposition Missed: {oppositionMissed}</p>
              <button onClick={() => handleScoreIncrement('opposition', true)}>Scored</button>
              <button onClick={() => handleScoreIncrement('opposition', false)}>Missed</button>
            </div>
          <h1>Intercepts</h1>
          <div>
            <p>GS: {intercepts.GS}</p>
            <button onClick={() => handleIncrement('GS')}>GS</button>
          </div>
          <div>
            <p>GA: {intercepts.GA}</p>
            <button onClick={() => handleIncrement('GA')}>GA</button>
          </div>
          <div>
            <p>WA: {intercepts.WA}</p>
            <button onClick={() => handleIncrement('WA')}>WA</button>
          </div>
          <div>
            <p>C: {intercepts.C}</p>
            <button onClick={() => handleIncrement('C')}>C</button>
          </div>
          <div>
            <p>GD: {intercepts.GD}</p>
            <button onClick={() => handleIncrement('GD')}>GD</button>
          </div>
          <div>
            <p>WD: {intercepts.WD}</p>
            <button onClick={() => handleIncrement('WD')}>WD</button>
          </div>
          <div>
            <p>GK: {intercepts.GK}</p>
            <button onClick={() => handleIncrement('GK')}>GK</button>
          </div>

          <h1>Center Passes</h1>
          <div>
            <p>GA: {centerPasses.GA}</p>
            <button onClick={() => handleCenterPassIncrement('GA')}>GA</button>
          </div>
          <div>
            <p>GD: {centerPasses.GD}</p>
            <button onClick={() => handleCenterPassIncrement('GD')}>GD</button>
          </div>
          <div>
            <p>WA: {centerPasses.WA}</p>
            <button onClick={() => handleCenterPassIncrement('WA')}>WA</button>
          </div>
          <div>
            <p>WD: {centerPasses.WD}</p>
            <button onClick={() => handleCenterPassIncrement('WD')}>WD</button>
          </div>

      
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Scoring;
