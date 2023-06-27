// import React, { useState } from 'react';

// const GameComponent = () => {
//   const [gameId, setGameId] = useState('');
//   const [score, setScore] = useState(0);
//   const [intercepts, setIntercepts] = useState([]);
//   const [centerPasses, setCenterPasses] = useState([]);
//   const [shootingStats, setShootingStats] = useState([]);

//   const handleSaveGame = () => {
//     const data = {
//       gameId: gameId,
//       score: score,
//       intercepts: intercepts,
//       centerPasses: centerPasses,
//       shootingStats: shootingStats,
//     };

//     fetch('/games/finish', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Game saved successfully');
 
//         } else {
//           console.error('Failed to save game:', response.status);

//         }
//       })
//       .catch((error) => {
//         console.error('Failed to save game:', error);
//       });
//   };


//   return (
//     <div>

//       <button onClick={handleSaveGame}>Save/Finish Game</button>
//     </div>
//   );
// };

// export default GameComponent;
