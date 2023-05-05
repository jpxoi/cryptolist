import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({
            email: 'eve.holt@reqres.in',
            firstname: 'Eve',
            lastname: 'Holt',
            registered: 'May 4, 2023',
            avatar: '/profile.jpeg'
        })
    }, [])

    return (
        <UserContext.Provider value={user}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }