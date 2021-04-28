import '../../styles/searchPage.scss'
import { useParams } from "react-router-dom";
import useFetch from '../useFetch'
import Card from '../Card'

const Search = () => {

    const {user} = useParams()
    const {data: userList, error} = useFetch(`https://api.github.com/search/users?q=${user}+in:login`)
    
    return ( 
        <div className="userList">
            {error && <span>{error}</span>}
            <ul>
                {userList && userList.items.map( user => (
                    <li key={user.id}>
                        <Card 
                            username={user.login}
                            image={user.avatar_url}
                            size='medium'
                            link={true}
                        />
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Search;