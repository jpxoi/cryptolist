import axios from "axios"
import { useEffect, useState } from "react"

const usePetition = (endpoint) => {
    const API_URL = import.meta.env.VITE_API_URL

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)

        axios.get(`${API_URL}${endpoint}`)
        .then((data) => {
            setData(data.data.data)
            setLoading(false)
        })
        .catch(e => {
            setLoading(false)
            console.log(e)
        })
    }, [])

    return [data, loading]
}

export default usePetition