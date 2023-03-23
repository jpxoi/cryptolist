import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.log('La petición falló')
      })
   }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de Criptomendas</h1>

      <ol>
        {
          criptos.map(({id, name, priceUsd, symbol}) => (
            <>
              <li key={id}>Name: {name} <br/> Price: {priceUsd}</li>
              <br/>
            </>
          ))
        }
      </ol>
    </>
  )
}

export default App
