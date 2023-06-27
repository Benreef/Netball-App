import React, { useState, useEffect } from 'react';

const Scoring = () => {
  const [counters, setCounters] = useState({
    GS: 0,
    GA: 0,
    WA: 0,
    C: 0,
    GD: 0,
    WD: 0,
    GK: 0
  });

  const [centerPassCounters, setCenterPassCounters] = useState({
    GA: 0,
    GD: 0,
    WA: 0,
    WD: 0
  });

  const [userInfo, setUserInfo] = useState({
    gameId: null,
    playerId: null,
    currentQuarter: null
  });


  const [homeScore, setHomeScore] = useState(0);
  const [homeMissed, setHomeMissed] = useState(0);
  const [oppositionScore, setOppositionScore] = useState(0);
  const [oppositionMissed, setOppositionMissed] = useState(0);

  // useEffect(() => {
  //   // TODO
  //   // need to include auth once log in fixed
  //   const fetchUserInfo = async () => {
  //     try {
  //       // TODO
  //       const response = await fetch('/api/user', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
          
  //       });

  //       if (response.ok) {
  //         const user = await response.json();
  //         const { gameId, playerId, currentQuarter } = user;

  //         setUserInfo({
  //           gameId,
  //           playerId,
  //           currentQuarter
  //         });
  //       } else {
  //         throw new Error('Failed to fetch user information');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user information:', error);
  //     }
  //   };

  //   fetchUserInfo();
  // }, []);


  const handleIncrement = async (position) => {
    try {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [position]: prevCounters[position] + 1
      }));
      const { gameId, playerId, currentQuarter } = userInfo;

      const intercept_data = {
        game_id: gameId,
        player_id: playerId, 
        quarter: currentQuarter, 
        position: position
      };
// TODO
      await fetch('/api/intercepts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(intercept_data)
      });

      console.log('Data stored successfully');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const handleCenterPassIncrement = async (position) => {
    try {
      setCenterPassCounters((prevCounters) => ({
        ...prevCounters,
        [position]: prevCounters[position] + 1
      }));

      const { gameId, playerId, currentQuarter } = userInfo;

      const centerpass_data = {
        game_id: gameId,
        player_id: playerId,
        quarter: currentQuarter,
        position: position
      };
// TODO
      await fetch('api/center_pass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(centerpass_data)
      });

      console.log('Center pass data stored successfully');
    } catch (error) {
      console.error('Error storing center pass data:', error);
    }
  };

  const handleScoreIncrement = async (team, scored) => {
    try {
      if (team === 'home') {
        if (scored) {
          setHomeScore((prevScore) => prevScore + 1);
        } else {
          setHomeMissed((prevMissed) => prevMissed + 1);
        }
      } else if (team === 'opposition') {
        if (scored) {
          setOppositionScore((prevScore) => prevScore + 1);
        } else {
          setOppositionMissed((prevMissed) => prevMissed + 1);
        }
      }

      const { gameId, playerId, currentQuarter } = userInfo;

      const score_data = {
        game_id: gameId,
        player_id: playerId,
        quarter: currentQuarter,
        team: team === 'home' ? 'home' : 'opposition',
        scored: scored
      };
// TODO
      await fetch('/api/scoring', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(score_data)
      });

      console.log('Score data stored successfully');
    } catch (error) {
      console.error('Error storing score data:', error);
    }
  };
  const handleFinishGame = async () => {
    try {
      // TODO: Perform any necessary calculations or validation before sending the data

      const { gameId, playerId, currentQuarter } = userInfo;

      const finishGameData = {
        game_id: gameId,
        player_id: playerId,
        quarter: currentQuarter,
        // Include any other relevant data to represent the end of the game
        // For example, final scores, game duration, etc.
      };

      await fetch('/api/finish_game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(finishGameData)
      });

      console.log('Finish game data stored successfully');
    } catch (error) {
      console.error('Error storing finish game data:', error);
    }
  };

  // TODO
// update Home to {{ userTeamInput }}
// and Oppoisition to {{ userOppInput }}
  return (
    <div>
       <h1>Scoring</h1>
       <div>
        <p>Home Score: {homeScore}</p>
        <p>Home Missed: {homeMissed}</p>
        <button onClick={() => handleScoreIncrement('home', true)}>Scored</button>
        <button onClick={() => handleScoreIncrement('home', false)}>Missed</button>
      </div>
      <div>
        <p>Opposition Score: {oppositionScore}</p>
        <p>Opposition Missed: {oppositionMissed}</p>
        <button onClick={() => handleScoreIncrement('opposition', true)}>Scored</button>
        <button onClick={() => handleScoreIncrement('opposition', false)}>Missed</button>
      </div>
      <h1>Intercepts</h1>
      <div>
        <p>GS: {counters.GS}</p>
        <button onClick={() => handleIncrement('GS')}>GS</button>
      </div>
      <div>
        <p>GA: {counters.GA}</p>
        <button onClick={() => handleIncrement('GA')}>GA</button>
      </div>
      <div>
        <p>WA: {counters.WA}</p>
        <button onClick={() => handleIncrement('WA')}>WA</button>
      </div>
      <div>
        <p>C: {counters.C}</p>
        <button onClick={() => handleIncrement('C')}>C</button>
      </div>
      <div>
        <p>GD: {counters.GD}</p>
        <button onClick={() => handleIncrement('GD')}>GD</button>
      </div>
      <div>
        <p>WD: {counters.WD}</p>
        <button onClick={() => handleIncrement('WD')}>WD</button>
      </div>
      <div>
        <p>GK: {counters.GK}</p>
        <button onClick={() => handleIncrement('GK')}>GK</button>
      </div>

      <h1>Center Passes</h1>
      <div>
        <p>GA: {centerPassCounters.GA}</p>
        <button onClick={() => handleCenterPassIncrement('GA')}>GA</button>
      </div>
      <div>
        <p>GD: {centerPassCounters.GD}</p>
        <button onClick={() => handleCenterPassIncrement('GD')}>GD</button>
      </div>
      <div>
        <p>WA: {centerPassCounters.WA}</p>
        <button onClick={() => handleCenterPassIncrement('WA')}>WA</button>
      </div>
      <div>
        <p>WD: {centerPassCounters.WD}</p>
        <button onClick={() => handleCenterPassIncrement('WD')}>WD</button>
      </div>

      <button onClick={handleFinishGame}>Finish Game</button>
    </div>
  );
};
 
export default Scoring;