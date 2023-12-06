import React from 'react'

const CompetitionsCard = ({leagueName, leagueLogo, leagueId}) => {
  return (
    <div className='competition__article__div'>
      <img src={leagueLogo} alt={`Logo ${leagueName}`} className='competition__article__div__ul__img'/>
      <ul className='competition__article__div__ul'>
        <li className='competition__article__div__ul__li'>
          {leagueName}
        </li>
        <li className='competition__article__div__ul__li'>
          Codigo: {leagueId}
          </li>
      </ul>
    </div>
  )
}

export default CompetitionsCard
