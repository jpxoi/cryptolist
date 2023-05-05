import Card from './cripto/Card'
import "./Grid.css"
import usePetition from "../hooks/usePetition"

function Grid() {

  const [criptos] = usePetition(`assets`)

  if (!criptos) return <span>Loading...</span>

  return (
    <div className='grid__container'>
      <h1>Cryptocurrency List</h1>

      <div className='card__container'>
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Card 
            key = {id}
            name = {name}
            priceUSD = {priceUsd}
            symbol = {symbol}
            changePercent24Hr = {changePercent24Hr}
            id = {id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Grid
