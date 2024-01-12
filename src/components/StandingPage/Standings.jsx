import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import StandingsCard from './StandingsCard'
import { useSelector } from 'react-redux'
import HasError from '../HasError'

const Standings = () => {//! Renderiza la pagina cuando se cambie el valor del leagueName
    
    const apiKey = "49411caa941ba45b9364b4167077bfc65442a7216d3363c52ace8c8a7c267950"
    const leagueId = useSelector(store => store.league) // Accede al valor de la store
    const stadingsUrl = `https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=${apiKey}`
    const [standings, getStadings, hasError, loading] = useFetch(stadingsUrl)
    
    useEffect(() => {
      getStadings()
    }, [leagueId])

    if(loading){
      return(
        <div>
          <p>Loading...</p>
        </div>
      )
    }

    if(hasError){
      return(
        <div>
          <HasError/>
        </div>
      )
    }


  return (
    <section className='standing'>
        <h2 className='standing__h2'>Clasificacion</h2>
        <article>
            {Array.isArray(standings) 
            ?
              (
                <>
                <h3 className='standing__h3'>
                  {standings?.[0]?.country_name}: {standings?.[0]?.league_name} 
                </h3>
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
        </article>
    </section>
  )
}

export default Standings