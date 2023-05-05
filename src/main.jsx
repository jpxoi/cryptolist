import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./main.css"
import App from './components/App'
import Home from './Home'
import Profile from './components/users/Profile'
import Grid from './components/Grid'
import CriptoPage from './components/cripto/CriptoPage'
import Page404 from './components/404'
import { UserContextProvider } from "./context/UserContext"
import Login from './components/users/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='criptocurrencies' element={<App />}>
          <Route index element={<Grid />} />
          <Route path=':id' element={<CriptoPage />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)
