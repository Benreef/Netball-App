import React, {useState, useEffect} from "react";


const [homeScore, setHomeScore] = useState(0);
const [oppositionScore, setOppositionScore] = useState(0);

const [userInfo, setUserInfo] = useState({
  gameId: null,
  playerId: null,
  currentQuarter: null
});


const handleScoreIncrement = async (team) => {
  try {
    if (team === 'home') {
      setHomeScore((prevScore) => prevScore + 1);
    } else if (team === 'opposition') {
      setOppositionScore((prevScore) => prevScore + 1);
    }

    const { gameId, playerId, currentQuarter } = userInfo;

    const payload = {
      game_id: gameId,
      player_id: playerId,
      quarter: currentQuarter,
      team: team === 'home' ? 'home' : 'opposition',
      scored: true
    };

    await fetch('http://localhost:3000/scoring', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    console.log('Score data stored successfully');
  } catch (error) {
    console.error('Error storing score data:', error);
  }
};