import { useParams } from "react-router-dom";
import { useSate } from 'react'
import Profile from "../Profile";
import useFetch from '../useFetch'
import '../../styles/profilePage.scss'

const ProfilPage = () => {

    const {username} = useParams()
    const {data: userProfil, error} = useFetch(`https://api.github.com/users/${username}`)

    //Social informations


    return ( 
        <div className="profilePage">
            {error && <span>{error}</span>}
            {userProfil && (
                <header>
                    <Profile 
                        username={userProfil.login}
                        name={userProfil.name}
                        image={userProfil.avatar_url}
                        size='medium'
                        />
                    <ul className="user__social">
                        {userProfil.twitter_username && (
                            <li><a href={`https://twitter.com/${userProfil.twitter_username}`}>X</a></li>
                        )}
                        { userProfil.blog && (
                            <li><a href={`https://twitter.com/${userProfil.blog}`}>X</a></li>
                        )}
                        { userProfil.email && (
                            <li><a href={`https://twitter.com/${userProfil.email}`}>X</a></li>
                        )}
                    </ul>
                </header>
            )}
        </div>        
     );
}
 
export default ProfilPage;