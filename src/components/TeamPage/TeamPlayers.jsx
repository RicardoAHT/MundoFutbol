import React from 'react'

const TeamPlayers = ({player}) => {
  return (
    <div className='teamPlayers'>
      {/*<img src={player.player_image} alt="Image" />*/}
      <ul className='teamPlayers__ul'>
        <li className='teamPlayers__ul__li teamPlayers__ul__li__type'>
            {player.player_type}
        </li>
        <li className='teamPlayers__ul__li teamPlayers__ul__li__number'>
            {player.player_number}
        </li>
        <li className='teamPlayers__ul__li teamPlayers__ul__li__name'>
            {player.player_name}
        </li>
        <li className='teamPlayers__ul__li'>
            {player.player_country}
        </li>
        <li className='teamPlayers__ul__li'>
            {player.player_age}
        </li>
        <li className='teamPlayers__ul__li'>
            {player.player_birthday}años
        </li>
      </ul>
    </div>
  )
}

export default TeamPlayers