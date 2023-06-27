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
      const { gameId, playerId, quarter } = userInfo;

      const intercept_data = {
        game_id: gameId,
        player_id: playerId, 
        quarter: quarter, 
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

      const { gameId, playerId, quarter } = userInfo;

      const centerpass_data = {
        game_id: gameId,
        player_id: playerId,
        quarter: quarter,
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

  const handleScoreIncrement = (team, scored) => {

    let homeScoreUpdate = null;
    let homeMissedUpdate = null;
    let oppositionScoreUpdate = null;
    let oppositionMissedUpdate = null;
  
    if (team === 'home') {
      if (scored) {
        homeScoreUpdate = homeScore + 1;
      } else {
        homeMissedUpdate = homeMissed + 1;
      }
    } else if (team === 'opposition') {
      if (scored) {
        oppositionScoreUpdate = oppositionScore + 1;
      } else {
        oppositionMissedUpdate = oppositionMissed + 1;
      }
    }
  
    const { gameId, playerId, quarter } = userInfo;
  
    const data = {
      game_id: gameId,
      player_id: playerId,
      quarter: quarter,
      team: team === 'home' ? 'home' : 'opposition',
      scored: scored
    };
  
    fetch('/api/scoring', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      
  
    // Update state with the new score/missed values
    setHomeScore((prevScore) => homeScoreUpdate || prevScore);
    setHomeMissed((prevMissed) => homeMissedUpdate || prevMissed);
    setOppositionScore((prevScore) => oppositionScoreUpdate || prevScore);
    setOppositionMissed((prevMissed) => oppositionMissedUpdate || prevMissed);
  };

  const handleFinishGame = () => {
    const { gameId, playerId, currentQuarter } = userInfo;
  
    const finishGameData = {
      game_id: gameId,
      player_id: playerId,
      quarter: currentQuarter,
    };
  
    fetch('/api/finish_game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(finishGameData)
    })
      .then(() => {
        console.log('Finish game data stored successfully');
      })
    
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
        <button onClick={() => handleScoreIncrement('home', 'GA', true)}>Home GA Scored</button>
        <button onClick={() => handleScoreIncrement('home', 'GA', false)}>Home GA Missed</button>
        <button onClick={() => handleScoreIncrement('home', 'GS', true)}>Home GS Scored</button>
        <button onClick={() => handleScoreIncrement('home', 'GS', false)}>Home GS Missed</button>
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