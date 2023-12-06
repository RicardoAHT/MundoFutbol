import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLeagueSlice } from '../../store/slices/league.slice'

const StandingsForm = () => { //! Capturo la info de la liga y la envio a la store

    const inputLeagueId = useRef()
    const dispatch = useDispatch()
    const handleSearch = (event) => {
        event.preventDefault()
        dispatch(setLeagueSlice(inputLeagueId.current.value.trim()))  
    }

  return (
    <form className="standingForm" onSubmit={handleSearch}>
        <label className="standingForm__label" >Ingresa el codigo: </label>
        <input className="standingForm__input" type="text" ref={inputLeagueId} />
        <button className="standingForm__button">Go!</button>
    </form>
  )
}

export default StandingsForm
