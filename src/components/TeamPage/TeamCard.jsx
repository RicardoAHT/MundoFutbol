import React from 'react'
import TeamPlayers from './TeamPlayers'

const TeamCard = ({team}) => {
  return (
    <div className='teamCard'>
      <div className='teamCard__div'>
        <img className='teamCard__div__img' src={team.team_badge} alt="Escudo" />
        <div className='teamCard__div__div'>
          <h3 className='teamCard__div__div__h3' > {team.team_name}</h3>
          <ul className='teamCard__div__div__ul' >
            <li className='teamCard__div__div__ul__li'>Fundado: {team.team_founded}</li>
            <li className='teamCard__div__div__ul__li'>Ciudad: {team.venue.venue_city}</li>
            <li className='teamCard__div__div__ul__li'>Estadio: {team.venue.venue_name} ({team.venue.venue_capacity})</li>
          </ul>

        </div>
      </div>
      <h4>Jugadores:</h4>
        <article>
        {
          team.players?.map(player => (
            <TeamPlayers
              key={player.player_key}
              player={player}
            />
          ))
        }
        </article> 

    </div>
  )
}

export default TeamCard
