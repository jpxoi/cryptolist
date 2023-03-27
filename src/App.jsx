import { useEffect, useState } from "react"
import axios from "axios"
import Card from './Card'
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

      <div class='main__content'>
        {
          criptos.map(({id, name, priceUsd, symbol}) => (
            <Card 
            id = {id}
            name = {name}
            priceUSD = {priceUsd}
            symbol = {symbol}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
