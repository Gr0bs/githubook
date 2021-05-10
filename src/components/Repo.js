import useFetch from './useFetch'

const Repo = ({username}) => {

    const {data: repos, error} = useFetch(`https://api.github.com/users/${username}/repos`)

    return ( 
        <div className="repo">
        {repos && (
            repos.map(repo => (
                <div className="repo__card">
                    <h2>{repo.full_name}</h2>
                    <em>{repo.description}</em>
                </div>
            ))
            )}
        </div>
     );
}
 
export default Repo;