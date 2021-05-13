//Fetch Hooks
import {useState, useEffect} from 'react'

const useFetch = (urlAPI, arg) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        const abortCont = new AbortController() // For stopping the fetch if the component are not call

        fetch(urlAPI, {signal: abortCont.signal})
        .then(res =>{
            if(!res.ok) throw Error('Could not fetch')
            return res.json()
        })
        .then(data => {
            setData(data)
            setError(null)
            setIsLoading(false)
        })
        .catch(err => {
            // If Abort, don't update state and stop running
            if(err.name === 'AbortError') {
                console.log('Fetch Aborted')
            } else {
                console.log('ERR: ' + err.message)
                setError(err.message)
                setIsLoading(false)
            }
        })

        return () => abortCont.abort()

    },[urlAPI, arg])

    return {data, error, isLoading}

}

export default useFetch