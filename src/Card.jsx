import { useRef } from "react"
import "./Card.css"

const Card = ({ id, name, priceUSD, symbol }) => {
    const myReference = useRef()
    
    return (
    <div class='card__currency' id={id}>
        <h2>{name}</h2>
        <p>Price:<br />${priceUSD}</p>
        <p>Symbol: {symbol}</p>
    </div>
    )
}

export default Card