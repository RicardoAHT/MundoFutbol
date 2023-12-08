import React from 'react'
import CountrySelect from '../components/CountrySelect'
import Competitions from '../components/Competitions'
import StandingsForm from '../components/StandingPage/StandingsForm'
import Standings from '../components/StandingPage/Standings'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const StandingPage = () => {
  return (
    <section className='standingPage'>
      <NavBar/>
      <Header/>
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