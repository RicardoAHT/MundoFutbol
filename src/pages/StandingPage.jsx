import React from 'react'
import CountrySelect from '../components/CountrySelect'
import Competitions from '../components/StandingPage/Competitions'
import StandingsForm from '../components/StandingPage/StandingsForm'
import Standings from '../components/StandingPage/Standings'
import NavBar from '../components/NavBar'

const StandingPage = () => {
  return (
    <section className='standingPage'>
      <NavBar/>
      <div className='standingPage__filter'>
        <CountrySelect/>
        <StandingsForm/>
      </div>
      <Competitions/>
      <Standings/>
    </section>
  )
}

export default StandingPage