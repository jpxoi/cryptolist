import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {
    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState()

    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        axios.post(`https://reqres.in/api/login`, user)
            .then(data => {
                setLoading(false)
                localStorage.setItem("tokenLoginCripto", data.data.token)
                navigation('/')
            })
            .catch(e => {
                setLoading(false)
                console.log(e)
                setError(e.response.data.error)
            })
    }

    if (localStorage.getItem("tokenLoginCripto")) return <Navigate to="/" />

    return (
        <div className="main__container">
            <div className="login__container">
                <h1>Sign In to CryptoList</h1>
                <form onSubmit={submit}>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input required onChange={(e) => {
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }} type="email" name="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input required onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }} type="password" name="password" />
                    </div>
                    <div className="submit">
                        <input type="submit" value={loading ? 'Loading' : 'Sign In'} className="link" />
                    </div>
                </form>
                {
                    error && <span className="error">Error: {error}</span>
                }
            </div>
            <div className="login__info__container">
                <h2>Use the following credentials</h2>
                <div className="login__info" id="eve.holt">
                    <p>
                        <span className="label">Email: </span>
                        <span>eve.holt@reqres.in</span>
                    </p>
                    <p>
                        <span className="label">Password: </span>
                        <span>cityslicka</span>
                    </p>
                </div>
            </div>
            <p className="caption" >This project was developed by <a target="_blank" href="https://jpxoi.com">Jean Paul Fernandez</a></p>
        </div>
    )
}

export default Login