import React, { useState, useEffect } from 'react';
import TeamListDisplay from './TeamListDisplay';
// const TeamList = () => {
//   const [teams, setTeams] = useState([]);

//   const fetchTeams = () => {
//     fetch('/api/teams', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(response => response.json())
//       .then(data => setTeams(data))
//   };

//   useState(() => {
//     fetchTeams();
//   }, []);
  
//   return (
//     <div>
//       <h2>Teams</h2>
//       {teams.map(team => (
//         <div key={team.team_id}>
//           <h3>{team.team_name}</h3>
//           <p>Coach: {team.coach_name}</p>
//           <p>Players:</p>
//           <ul>
//             {team.players.map(player => (
//               <li key={player.player_id}>
//                 {player.player_name} - {player.preferred_position}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeamList;



function TeamList() {
  const [teams, setTeams] = useState([]);

  function findAll() {
    fetch('/api/teams')
      .then(res => res.json())
      .then(res => setTeams(res))
  }

  useEffect(findAll, [])

  return (
    <TeamListDisplay 
      teams={teams}
    />
  )
}

export default TeamList;