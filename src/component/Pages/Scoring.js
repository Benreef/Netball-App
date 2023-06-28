// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const Scoring = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const teamId = searchParams.get('teamId');

//   const [counters, setCounters] = useState({
//     GS: 0,
//     GA: 0,
//     WA: 0,
//     C: 0,
//     GD: 0,
//     WD: 0,
//     GK: 0
//   });

//   const [centerPassCounters, setCenterPassCounters] = useState({
//     GA: 0,
//     GD: 0,
//     WA: 0,
//     WD: 0
//   });

//   // const [userInfo, setUserInfo] = useState({
//   //   gameId: null,
//   //   playerId: null,
//   //   currentQuarter: null
//   // });

//   const [homeScore, setHomeScore] = useState(0);
//   const [homeMissed, setHomeMissed] = useState(0);
//   const [oppositionScore, setOppositionScore] = useState(0);
//   const [oppositionMissed, setOppositionMissed] = useState(0);
//   // const [homeGSScored, setHomeGSScored] = useState(0);
//   // const [homeGSMissed, setHomeGSMissed] = useState(0);
//   // const [homeGAScored, setHomeGAScored] = useState(0);
//   // const [homeGAMissed, setHomeGAMissed] = useState(0);
//   // useEffect(() => {
//   //   const fetchUserInfo = () => {
//   //     try {
//   //       fetch(`/api/user`, {
//   //         method: 'GET',
//   //         headers: {
//   //           'Content-Type': 'application/json'
//   //         }
//   //       })
//   //         .then((response) => {
//   //           if (response.ok) {
//   //             return response.json();
//   //           } else {
//   //             throw new Error('Failed to fetch user information');
//   //           }
//   //         })
//   //         .then((user) => {
//   //           const { gameId, playerId, currentQuarter } = user;

//   //           setUserInfo({
//   //             gameId,
//   //             playerId,
//   //             currentQuarter
//   //           });
//   //         })
//   //         .catch((error) => {
//   //           console.error('Error fetching user information:', error);
//   //         });
//   //     } catch (error) {
//   //       console.error('Error fetching user information:', error);
//   //     }
//   //   };

//   //   fetchUserInfo();
//   // }, [teamId]);

//   const handleIncrement = (position) => {

//       setCounters((prevCounters) => ({
//         ...prevCounters,
//         [position]: prevCounters[position] + 1
//       }));
//     }
//   //     const { gameId, playerId, currentQuarter } = userInfo;

//   //     const interceptData = {
//   //       game_id: gameId,
//   //       player_id: playerId,
//   //       quarter: currentQuarter,
//   //       position: position
//   //     };

//   //     fetch('/api/intercepts', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(interceptData)
//   //     })
//   //       .then(() => {
//   //         console.log('Data stored successfully');
//   //       })
//   //       .catch((error) => {
//   //         console.error('Error storing data:', error);
//   //       });
//   //   } catch (error) {
//   //     console.error('Error storing data:', error);
//   //   }
//   // };

//   const handleCenterPassIncrement = (position) => {
//       setCenterPassCounters((prevCounters) => ({
//         ...prevCounters,
//         [position]: prevCounters[position] + 1
//       }));
//     }
//   //     const { gameId, playerId, currentQuarter } = userInfo;

//   //     const centerPassData = {
//   //       game_id: gameId,
//   //       player_id: playerId,
//   //       quarter: currentQuarter,
//   //       position: position
//   //     };

//   //     fetch('/api/center_passes', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(centerPassData)
//   //     })
//   //       .then(() => {
//   //         console.log('Center pass data stored successfully');
//   //       })
//   //       .catch((error) => {
//   //         console.error('Error storing center pass data:', error);
//   //       });
//   //   } catch (error) {
//   //     console.error('Error storing center pass data:', error);
//   //   }
//   // };

//   const handleScoreIncrement = (team, scored) => {
//     let homeScoreUpdate = null;
//     let homeMissedUpdate = null;
//     let oppositionScoreUpdate = null;
//     let oppositionMissedUpdate = null;

//     if (team === 'home') {
//       if (scored) {
//         homeScoreUpdate = homeScore + 1;
//       } else {
//         homeMissedUpdate = homeMissed + 1;
//       }
//       // } if (team === 'home' && scored) {
//       //   setHomeGSScored((prevScored) => prevScored + 1);
//       // } else if (team === 'home' && !scored) {
//       //   setHomeGSMissed((prevMissed) => prevMissed + 1);
//       // }else if (team === 'home' && !scored) {
//       //   setHomeGAScored((prevScored) => prevScored + 1);
//       // }else if (team === 'home' && !scored) {
//       //   setHomeGAMissed((prevMissed) => prevMissed + 1);
//       // }

//       // if (team === 'home') {
//       //   if (scored) {
//       //     setHomeScore(homeScore + 1);
//       //     setHomeGSScored(homeGSScored + 1);
//       //   } else {
//       //     setHomeMissed(homeMissed + 1);
//       //     setHomeGAMissed(homeGAMissed + 1);
//       //   }

//     } else if (team === 'opposition') {
//       if (scored) {
//         oppositionScoreUpdate = oppositionScore + 1;
//       } else {
//         oppositionMissedUpdate = oppositionMissed + 1;
//       }
//     }

//     // const { gameId, playerId, currentQuarter } = userInfo;

//     // const data = {
//     //   game_id: gameId,
//     //   player_id: playerId,
//     //   quarter: currentQuarter,
//     //   team: team === 'home' ? 'home' : 'opposition',
//     //   scored: scored
//     // };

//     // fetch('/api/scoring', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(data)
//     // })
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     console.log(data);
//     //   })
//     //   .catch((error) => {
//     //     console.error('Error updating score:', error);
//     //   });

//     setHomeScore((prevScore) => homeScoreUpdate || prevScore);
//     setHomeMissed((prevMissed) => homeMissedUpdate || prevMissed);
//     setOppositionScore((prevScore) => oppositionScoreUpdate || prevScore);
//     setOppositionMissed((prevMissed) => oppositionMissedUpdate || prevMissed);
//   };

//   // const handleFinishGame = () => {
//   //   const { gameId, playerId, currentQuarter } = userInfo;

//   //   const finishGameData = {
//   //     game_id: gameId,
//   //     player_id: playerId,
//   //     quarter: currentQuarter
//   //   };

//   //   fetch('/api/finish_game', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify(finishGameData)
//   //   })
//   //     .then(() => {
//   //       console.log('Finish game data stored successfully');
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error storing finish game data:', error);
//   //     });
//   // };


//   const handleSubmit = () => {
//     const { gameId, playerId, currentQuarter } = userInfo;
  
//     const data = {
//       gameId,
//       playerId,
//       currentQuarter,
//       scoring: {
//         homeScore,
//         homeMissed,
//         oppositionScore,
//         oppositionMissed
//       },
//       intercepts: counters,
//       centerPasses: centerPassCounters
//     };
  
//     fetch('/api/submit_data', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
  
//   };
//   return (
//     <div>
//       <h1>Scoring</h1>
//       <div>
//       <p>Home Score: {homeScore}</p>
//         <p>Home Missed: {homeMissed}</p>
//         {/* <p>Home GS Scored: {homeGSScored}</p>
//         <p>Home GS Missed: {homeGSMissed}</p>
//         <p>Home GA Scored: {homeGAScored}</p>
//         <p>Home GA Missed: {homeGAMissed}</p> */}
//         <button onClick={() => handleScoreIncrement('home', true)}>Home GS Scored</button>
//         <button onClick={() => handleScoreIncrement('home', false)}>Home GS Missed</button>
//         <button onClick={() => handleScoreIncrement('home', true)}>Home GA Scored</button>
//         <button onClick={() => handleScoreIncrement('home', false)}>Home GA Missed</button>
//       </div>
//       <div>
//         <p>Opposition Score: {oppositionScore}</p>
//         <p>Opposition Missed: {oppositionMissed}</p>
//         <button onClick={() => handleScoreIncrement('opposition', true)}>Scored</button>
//         <button onClick={() => handleScoreIncrement('opposition', false)}>Missed</button>
//       </div>
//       <h1>Intercepts</h1>
//       <div>
//         <p>GS: {counters.GS}</p>
//         <button onClick={() => handleIncrement('GS')}>GS</button>
//       </div>
//       <div>
//         <p>GA: {counters.GA}</p>
//         <button onClick={() => handleIncrement('GA')}>GA</button>
//       </div>
//       <div>
//         <p>WA: {counters.WA}</p>
//         <button onClick={() => handleIncrement('WA')}>WA</button>
//       </div>
//       <div>
//         <p>C: {counters.C}</p>
//         <button onClick={() => handleIncrement('C')}>C</button>
//       </div>
//       <div>
//         <p>GD: {counters.GD}</p>
//         <button onClick={() => handleIncrement('GD')}>GD</button>
//       </div>
//       <div>
//         <p>WD: {counters.WD}</p>
//         <button onClick={() => handleIncrement('WD')}>WD</button>
//       </div>
//       <div>
//         <p>GK: {counters.GK}</p>
//         <button onClick={() => handleIncrement('GK')}>GK</button>
//       </div>

//       <h1>Center Passes</h1>
//       <div>
//         <p>GA: {centerPassCounters.GA}</p>
//         <button onClick={() => handleCenterPassIncrement('GA')}>GA</button>
//       </div>
//       <div>
//         <p>GD: {centerPassCounters.GD}</p>
//         <button onClick={() => handleCenterPassIncrement('GD')}>GD</button>
//       </div>
//       <div>
//         <p>WA: {centerPassCounters.WA}</p>
//         <button onClick={() => handleCenterPassIncrement('WA')}>WA</button>
//       </div>
//       <div>
//         <p>WD: {centerPassCounters.WD}</p>
//         <button onClick={() => handleCenterPassIncrement('WD')}>WD</button>
//       </div>

//       <button onClick={handleSubmit}>Finish Game</button>
//     </div>
//   );
// };

// export default Scoring;
