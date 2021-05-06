import { useParams } from "react-router-dom";
import { useSate } from 'react'
import Profile from "../Profile";
import useFetch from '../useFetch'
import '../../styles/profilePage.scss'

const ProfilPage = () => {

    const {username} = useParams()
    const {data: userProfil, error} = useFetch(`https://api.github.com/users/${username}`)
    const {data: starredRepo, error2} = useFetch(`https://api.github.com/users/${username}/starred`)

    //Social informations   


    return ( 
        <div className="profilePage">
            {error && <span>{error}</span>}
            {userProfil && (
                // HEADER BANNER WITH USER INFO
                <header>
                    <Profile 
                        username={userProfil.login}
                        name={userProfil.name}
                        image={userProfil.avatar_url}
                        size='high'
                        />

                    {/* USER SOCIAL LINKS & INFOS */}
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

                    {/* USER GITHUB INFORMATIONS */}
                    <ul className="user__github">
                        <li>Followers <span>{userProfil.followers}</span></li>
                        <li>Following <span>{userProfil.following}</span></li>
                        <li>Repos <span>{userProfil.public_repos}</span></li>
                        <li>Starred Repos <span>{starredRepo.length}</span></li>
                    </ul>
                </header>
            )}
        </div>        
     );
}
 
export default ProfilPage;