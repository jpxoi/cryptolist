import { numberWithCommas, parseFloatNumber } from "../../../helpers/numbers"

const CriptoInfo = ({ cripto }) => {
    return (
        <div className="info">
            <div className="main__info">
                <span>Ranking: #{cripto.rank}</span>
                <h1>{cripto.name}</h1>
                <span className="symbol">{cripto.symbol}</span>
            </div>
            <div className="details">
                <ul>
                    <li className="detail">
                        <span className="label">Price: </span>
                        <span>${numberWithCommas(parseFloatNumber(cripto.priceUsd, 3))}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Max Supply: </span>
                        <span>
                            {numberWithCommas(parseFloatNumber(cripto.maxSupply,0))}
                            {(numberWithCommas(parseFloatNumber(cripto.maxSupply,0))) === '-' ? '' : ` ${cripto.symbol}`}
                            </span>
                    </li>
                    <li className="detail">
                        <span className="label">Market Cap: </span>
                        <span>${numberWithCommas(parseFloatNumber(cripto.marketCapUsd, 3))}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Volume (24H): </span>
                        <span>${numberWithCommas(parseFloatNumber(cripto.volumeUsd24Hr, 3))}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Price Change (24H): </span>
                        <span className={ parseFloatNumber(cripto.changePercent24Hr, 3) > 0 ? "positive" : "negative" }>{parseFloatNumber(cripto.changePercent24Hr, 3)}%</span>
                    </li>
                    <li className="detail">
                        <span className="label">Vwap 24H: </span>
                        <span>${numberWithCommas(parseFloatNumber(cripto.vwap24Hr, 3))}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CriptoInfo