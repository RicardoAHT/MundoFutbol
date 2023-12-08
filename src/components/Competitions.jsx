import React, { useEffect } from 'react'
import useFetch from "../hooks/useFetch.js";
import CompetitionCard from './CompetitionsCard.jsx';
import { useSelector } from 'react-redux';

const Competitions = () => {

    //! Peticion y obtencion desde la API
    const apiKey = "49411caa941ba45b9364b4167077bfc65442a7216d3363c52ace8c8a7c267950"
    const countryId = useSelector(store => store.country)
    const competitionsUrl = `https://apiv3.apifootball.com/?action=get_leagues&country_id=${countryId}&APIkey=${apiKey}`
    const [competitions, getCompetitions] = useFetch(competitionsUrl)
    useEffect(() => {
      getCompetitions()
    }, [countryId])
    //console.log(competitions)
    //console.log(countryId)
  return (
    <section className='competition'>
      <h2 className='competition__h2'>Competiciones de: {competitions?.[0].country_name}</h2>
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
}

export default Competitions