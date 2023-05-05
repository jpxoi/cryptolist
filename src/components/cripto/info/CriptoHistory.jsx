import { numberWithCommas, parseFloatNumber } from "../../../helpers/numbers"

const CriptoHistory = ({ history }) => {
    return (
        <div className="history">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(({date, priceUsd, time}) => (
                        <tr key={time}>
                            <td className="label">{new Date(date).toDateString()}</td>
                            <td className="price">${numberWithCommas(parseFloatNumber(priceUsd, 3))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CriptoHistory