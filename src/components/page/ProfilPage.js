import { useParams } from "react-router-dom";
import Profile from "../Profile";
import useFetch from '../useFetch'
import '../../styles/profilePage.scss'
import Card from "../Card";

const ProfilPage = () => {

    const {username} = useParams()
    const {data: userProfil, error} = useFetch(`https://api.github.com/users/${username}`)
    const {data: starredRepo} = useFetch(`https://api.github.com/users/${username}/starred`)
    const {data: events, errorEvent} = useFetch(`https://api.github.com/users/${username}/events`)
    const {data: suggestion, errorSuggestion} = useFetch(`https://api.github.com/users/${username}/following`)
    // CREATE A RANDOM SUGGESTION





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

            <section className="feed">
                <div className="feed__events">
                        {errorEvent && (<span>{errorEvent}</span>)}
                        { events && events.map(event => {
                            if(event.type === 'PushEvent'){
                                return(
                                    event.payload.commits.map((commit, index) => (
                                        <Card
                                        key={index}
                                        image={userProfil.avatar_url}
                                        size="small"
                                        subject={event.repo.name}
                                        date={event.created_at}
                                        width="__large"
                                        event={"Commit on the repo"}
                                        description={commit.message}
                                        />
                                        ))
                                )
                            } else {
                                return (
                                    <Card
                                    key={event.id}
                                    image={userProfil.avatar_url}
                                    size="small"
                                    subject={event.repo.name}
                                    date={event.created_at}
                                    width="__large"
                                    event={event.type}
                                    description={event.payload.description}
                                />
                                )
                            }
                        })
                        }
                </div>

                <div className="feed__suggestions">
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