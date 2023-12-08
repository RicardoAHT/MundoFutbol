import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setCountrySlice } from '../store/slices/country.slice'

const CountrySelect = () => { //! Seleccionar el pais para obtener el countryId

    const apiKey = "49411caa941ba45b9364b4167077bfc65442a7216d3363c52ace8c8a7c267950"
    const countryUrl = `https://apiv3.apifootball.com/?action=get_countries&APIkey=${apiKey}`
    const [countries, getCountries] = useFetch(countryUrl)
    const dispatch = useDispatch()

    useEffect(() => {
      getCountries()
    }, [])

    const handleCountry = (event) => {
      dispatch(setCountrySlice(event.target.value))
    }
    
  return (
    <form>
        <label >Selecciona un pais: </label>
        <select onChange={handleCountry}>
          <option>---</option>
          {
            countries?.map(country => (
              <option value={country.country_id} key={country.country_id}>
                {(country.country_name.length > 1 ) ? country.country_name : null}
              </option>
            ))
          }
        </select>
    </form>
  )
}

export default CountrySelect