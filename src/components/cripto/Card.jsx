import { Link } from "react-router-dom"
import "./Card.css"
import { numberWithCommas, parseFloatNumber } from "../../helpers/numbers"

const Card = ({ id, name, priceUSD, symbol, changePercent24Hr }) => {    
    return (
    <div className='card'>
        <Link to={`/criptocurrencies/${id}`}><h2>{name}</h2></Link>
        <div className="info">
            <p><span className="label">Price: </span>${numberWithCommas(parseFloatNumber(priceUSD, 3))}</p>
            <p><span className="label">Symbol: </span> {symbol}</p>
            <p>
                <span className="label">Price Change (24H): </span>
                <span className={ parseFloatNumber(changePercent24Hr, 3) > 0 ? "positive" : "negative" }>{parseFloatNumber(changePercent24Hr, 3)}%</span>
            </p>
        </div>
    </div>
    )
}

export default Card