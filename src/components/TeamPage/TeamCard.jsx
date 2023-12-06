import React from 'react'

const TeamCard = ({team}) => {
  return (
    <div>
        <img src={team.team_badge} alt="" />
      <h3>{team.team_name}</h3>
      <ul>
        <li>Fundado: {team.team_founded}</li>
        <li>Ciudad: {team.venue.venue_city}</li>
        <li>Estadio: {team.venue.venue_name} ({team.venue.venue_capacity})</li>
        <li></li>

      </ul>
    </div>
  )
}

export default TeamCard
