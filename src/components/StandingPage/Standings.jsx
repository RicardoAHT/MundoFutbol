import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import StandingsCard from './StandingsCard'
import { useSelector } from 'react-redux'
import HasError from '../HasError'

const Standings = () => {//! Renderiza la pagina cuando se cambie el valor del leagueName
    
    const apiKey = "49411caa941ba45b9364b4167077bfc65442a7216d3363c52ace8c8a7c267950"
    const leagueId = useSelector(store => store.league) // Accede al valor de la store
    const stadingsUrl = `https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=${apiKey}`
    const [standings, getStadings, hasError] = useFetch(stadingsUrl)
    
    useEffect(() => {
      getStadings()
    }, [leagueId])
    //console.log(leagueId)
    //console.log(standings)

  return (
    <div>
        <h2>Standings</h2>
        {
          hasError 
          ? (<h2>Hay un problema con ese codigo</h2>)
          :(  
          <article>
            {Array.isArray(standings) 
            ?
              (
                <>
                <h3>{standings?.[0]?.country_name}</h3>
                <h3>{standings?.[0]?.league_name}</h3>
                <div className='stadingsCard__container'>
                {
                  standings?.map(standing => (
                    <StandingsCard
                    key={standing.team_id}
                    standing={standing}
                    />
                  ))
                }
                </div>
                </>
              )
            :
              (
                <HasError/>
              )
              }
          </article>)
        }
      
    </div>
  )
}

export default Standings