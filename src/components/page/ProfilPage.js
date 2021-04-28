import { useParams } from "react-router-dom";
import Profile from "../Profile";
import useFetch from '../useFetch'


const ProfilPage = () => {

    const {username} = useParams()
    const {data: userProfil, error} = useFetch(`https://api.github.com/users/${username}`)

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
                </header>
            )}
        </div>        
     );
}
 
export default ProfilPage;