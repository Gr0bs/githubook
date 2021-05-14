import '../../styles/discover.scss'
import Profile from '../Profile';
import useFetch from "../useFetch";


const query = ['bot', 'react', 'vue', 'node', 'tchat', 'script', 'app']
const rdm = Math.floor(Math.random() * query.length)

const Discover = () => {

    const {data, error, isLoading} = useFetch(`https://api.github.com/search/repositories?q=${query[rdm]}&sort=star&order=desc`)

    return ( 
        <div className="discover">
            {error && <span>{error}</span>}
            {isLoading && <span>{isLoading}</span>}
            {data && data.items.map(repo => (
                <div className="discover__card">
                    <Profile 
                        username={'@' + repo.owner.login}
                        image={repo.owner.avatar_url}
                        size='small'
                        />
                    <h3>{repo.name}</h3>
                    <em>{repo.description}</em>
                    <a href={repo.html_url}>See Repo</a>
                </div>
           
            ))}
        </div>
     );
}
 
export default Discover;