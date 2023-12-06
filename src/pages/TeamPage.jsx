import React from 'react'
import NavBar from '../components/NavBar'
import CountrySelect from '../components/CountrySelect'
import StandingsForm from '../components/StandingPage/StandingsForm'
import Teams from '../components/TeamPage/Teams'

const TeamPage = () => {
  return (
    <section className='teamPage'>
      <NavBar/>
      <div className='teamPage__filter'>
        <CountrySelect/>
        <StandingsForm/>
      </div>
      <h2>Equipos</h2>
      <Teams/>
    </section>
  )
}

export default TeamPage
