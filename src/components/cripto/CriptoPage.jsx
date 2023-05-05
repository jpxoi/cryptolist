import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistory from "./info/CriptoHistory"

const CriptoPage = () => {
    const params = useParams()

    const [cripto, loadingCripto] = usePetition(`assets/${params.id}`)
    const [history, loadingHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    if (loadingCripto || loadingHistory) return <span>Loading...</span>

    return (
        <div className="cripto__page__container">
            { cripto && <CriptoInfo cripto={cripto}/> }
            { history && <CriptoHistory history={history}/> }
        </div>
    )
}

export default CriptoPage