import { useParams } from "react-router-dom";
import Profile from "../Profile";
import useFetch from '../useFetch'
import '../../styles/profilePage.scss'
import Card from "../Card";
import Activity from "../Activity";
import Repo from "../Repo";
import {useState} from 'react'

const ProfilPage = () => {

    const {username} = useParams()
    const {data: userProfil, error} = useFetch(`https://api.github.com/users/${username}`)
    const {data: starredRepo} = useFetch(`https://api.github.com/users/${username}/starred`)
    const {data: suggestion, errorSuggestion} = useFetch(`https://api.github.com/users/${username}/following`)
    // CREATE A RANDOM SUGGESTION

    const [seeActivity, setSeeActivity] = useState(true)
    const [seeRepo, setSeeRepo] = useState(false)

    const handleTab = () => {
        if(seeActivity) {
            setSeeActivity(false)
            setSeeRepo(true)
        } else{
            setSeeActivity(true)
            setSeeRepo(false)
        }
    }

    //Social informations   
    return ( 
        <div className="profilePage">
            <div className="profilePage__banner">
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
                    <em>{userProfil.bio}</em>
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
                        {starredRepo && (
                            <li>Starred Repos <span>{starredRepo.length}</span></li>
                        )}
                    </ul>
                </header>
            )}
            </div>

            <section className="wall">
                <div className="wall__tab">
                    <button onClick={handleTab}>Activity</button>
                    <button onClick={handleTab}>Repo</button>
                </div>
                <div className="wall__events">
                    {seeActivity && (
                        <Activity 
                            username={username}
                            />
                    )}
                    {seeRepo && (
                        <Repo 
                            username={username}
                        />
                    )}
                </div>

                <div className="wall__suggestions">
                    <h2>Suggestions</h2>
                    {errorSuggestion && (<span>{errorSuggestion}</span>)}
                    {suggestion && (
                        suggestion.map(user => (
                            <Card 
                                key={user.id}
                                image={user.avatar_url}
                                size="small"
                                width='__square'
                                username={user.login}
                                link={true}
                            />
                        ))
                    )}
                </div>
            </section>
        </div>        
     );
}
 
export default ProfilPage;