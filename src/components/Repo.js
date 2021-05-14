import useFetch from './useFetch'
import '../styles/repo.scss'

const Repo = ({username, key}) => {

    const {data: repos, error} = useFetch(`https://api.github.com/users/${username}/repos`)

    return ( 
        <div className="repo">
        {error && (<span>{error}</span>)}
        {repos && (
            repos.map(repo => (
                <div className="repo__card" key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                        <h2>{repo.full_name.substring(username.length + 1)}</h2>
                    </a>
                    <em>{repo.description}</em>
                </div>
            ))
            )}
        </div>
     );
}
 
export default Repo;