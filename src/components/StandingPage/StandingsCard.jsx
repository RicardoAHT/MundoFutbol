import React from 'react'

const StandingsCard = ({standing}) => { 
  return (
    <div className='standingsCard'>
      <div className='standingsCard__div'>
        <img className='standingsCard__div__badge' src={standing.team_badge} alt="Escudo" />
        <h3 className='standingsCard__div__h4'>{standing.team_name}</h3>
      </div>
      <div className='standingsCard__div2'>
        <h4 className='standingsCard__div2__h5'>{standing.overall_promotion}</h4>
        <ul className="standingsCard__stats">
          <li className="standingsCard__stats__li"> 
            <span className="standingsCard__stats__li__span">Position</span> {standing.overall_league_position}</li>
          <li className="standingsCard__stats__li"> 
            <span className="standingsCard__stats__li__span">Payed</span> {standing.overall_league_payed}</li>
          <li className="standingsCard__stats__li"> 
            <span className="standingsCard__stats__li__span">W</span> {standing.overall_league_W}</li>
          <li className="standingsCard__stats__li"> 
            <span className="standingsCard__stats__li__span">D</span> {standing.overall_league_D}</li>
          <li className="standingsCard__stats__li"> 
            <span className="standingsCard__stats__li__span">L</span> {standing.overall_league_L}</li>
          <li className="standingsCard__stats__li"> 
            <span className="standingsCard__stats__li__span">GF</span> {standing.overall_league_GF}</li>
          <li className="standingsCard__stats__li"> 
            <span className="standingsCard__stats__li__span">GA</span> {standing.overall_league_GA}</li>
          <li className="standingsCard__stats__li"> 
            <span className="standingsCard__stats__li__span">PTS</span> {standing.overall_league_PTS}</li>
        </ul>
      </div>

        
    </div>
  )
}

export default StandingsCard

/*
    <h4>Visit games</h4>
      <ul className="standingsCard__stats">
        <li className="standingsCard__stats__li">
          <span className="standingsCard__stats__li__span">Position</span> {standing.home_league_position}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">Payed</span> {standing.home_league_payed}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">W</span> {standing.home_league_W}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">D</span> {standing.home_league_D}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">L</span> {standing.home_league_L}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">GF</span> {standing.home_league_GF}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">GA</span> {standing.home_league_GA}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">PTS</span> {standing.home_league_PTS}</li>
      </ul>
    <h4> Home games</h4>
      <ul className="standingsCard__stats">
      <li className="standingsCard__stats__li"> 
        <span className="standingsCard__stats__li__span">Position</span> {standing.away_league_position}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">Payed</span> {standing.away_league_payed}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">W</span> {standing.away_league_W}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">D</span> {standing.away_league_D}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">L</span> {standing.away_league_L}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">GF</span> {standing.away_league_GF}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">GA</span> {standing.away_league_GA}</li>
        <li className="standingsCard__stats__li"> 
          <span className="standingsCard__stats__li__span">PTS</span> {standing.away_league_PTS}</li>
      </ul>

*/