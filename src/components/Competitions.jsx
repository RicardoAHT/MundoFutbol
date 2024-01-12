import React, { useEffect } from 'react'
import useFetch from "../hooks/useFetch.js";
import CompetitionCard from './CompetitionsCard.jsx';
import { useSelector } from 'react-redux';

const Competitions = () => {

    //! Peticion y obtencion desde la API
    const apiKey = "49411caa941ba45b9364b4167077bfc65442a7216d3363c52ace8c8a7c267950"
    const countryId = useSelector(store => store.country)
    const competitionsUrl = `https://apiv3.apifootball.com/?action=get_leagues&country_id=${countryId}&APIkey=${apiKey}`
    const [competitions, getCompetitions, hasError, loading] = useFetch(competitionsUrl)
    useEffect(() => {
      getCompetitions()
    }, [countryId])

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
          <p>Error con los datos de la API</p>
        </div>
      )
    }

    if(Array.isArray(competitions)){
      return (
        <section className='competition'>
          <h2 className='competition__h2'>
            Competiciones de: 
            {
              (competitions?.[0].country_name !== undefined)
              ?
              competitions?.[0].country_name
              :
              "NO se encontro"
            }
    
          </h2>
          <article className='competition__article'>
            {
              competitions?.map(competition => (
                <CompetitionCard
                  key={competition.league_id}
                  leagueId={competition.league_id}
                  leagueName={competition.league_name}
                  leagueLogo={competition.league_logo}
                />
              ))
            }
          </article>
        </section>
      )
    }else{
      return(
        <section className='competition'>
          <h3> No hay informacion de competiciones en este pais.</h3>
        </section>
      )
    }

    }

export default Competitions