import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <div className="home__container">
            <h1 className="title">Hey! Welcome to EDMarket</h1>
            <p className="subtitle" >Meet the 100 most used cryptos</p>
            <div className="home__image">
                <img src="/crypto.jpeg" alt="crypto" />
            </div>
            <Link to="/criptocurrencies" className="link">See cryptocurrencies</Link>
        </div>
    )
}

export default Home