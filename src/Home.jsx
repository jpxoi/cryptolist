import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <div className="home__container">
            <h1 className="title">Hey! Welcome to CryptoList</h1>
            <p className="subtitle" >Meet the 100 most used cryptos.</p>
            <Link to="/criptocurrencies" className="link">See cryptocurrencies</Link>
            <p className="caption" >This project was developed by <a target="_blank" href="https://jpxoi.com">Jean Paul Fernandez</a></p>
        </div>
    )
}

export default Home