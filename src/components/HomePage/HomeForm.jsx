import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserSlice } from '../../store/slices/user.slice'
import { useNavigate } from 'react-router-dom'

const HomeForm = () => {

    const inputUser = useRef() // capturo la ref del input
    const dispatch = useDispatch() // Con el despacho una action
    const navigate = useNavigate()
    

    const handleUser = (event) =>{
      event.preventDefault()
      dispatch(setUserSlice(inputUser.current.value.trim()))
      navigate("/standings")
    }

  return (

    <form className='HomeForm' onSubmit={handleUser}>
      <input className='HomeForm__input' placeholder='Ingresa tu nombre' type="text" ref={inputUser}/>
      <button className='HomeForm__button' >
        Go!
      </button>
    </form>
  )
}

export default HomeForm
