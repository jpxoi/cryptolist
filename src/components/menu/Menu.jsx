import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import "./Menu.css"

const Menu = () => {
    const navigation = useNavigate()

    const user = useContext(UserContext)

    return (
        <nav className="main__menu">
            <div className="logo">
                <NavLink to="/">
                    <img src="/logo.svg" alt="Logo" />
                </NavLink>
            </div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/criptocurrencies">Criptocurrencies</NavLink></li>
                <li><NavLink to="/profile">Hi, {user.firstname}!</NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem("tokenLoginCripto")
                    navigation("/login")
                }}>Sign Out</a></li>
            </ul>
        </nav>
    )
}

export default Menu