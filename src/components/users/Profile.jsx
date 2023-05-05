import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import "./Profile.css"

const Profile = () => {    
    const user = useContext(UserContext)

    return (
        <div className="profile__container">
            <h1>Profile Information</h1>
            <div className="profile__card">
                <div className="profile__picture">
                    <img src={user.avatar} />
                </div>
                <div className="profile__info">
                    <div>
                        <span className="label">Name: </span>
                        <span>{user.firstname} {user.lastname}</span>
                    </div>
                    <div>
                        <span className="label">Email: </span>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <span className="label">User since: </span>
                        <span>{user.registered}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile