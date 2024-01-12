import axios from 'axios'
import { useState } from 'react'


const useFetch = (url) => {
  const [infoApi, setInfoApi] = useState()
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)

  const getApi = () =>{
    setLoading(true)
    axios.get(url)
      .then(res => {
        setInfoApi(res.data)
        setHasError(false)
      })
      .catch(error => { 
        setHasError(true)
        console.log(error)
      })
      .finally(setLoading(false))
  }
  return [infoApi, getApi, hasError, loading]
}

export default useFetch