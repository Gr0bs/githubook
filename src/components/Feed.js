import '../styles/feed.scss'
import Card from './Card'
import useFetch from './useFetch'

const Feed = () => {

    const username = 'Gr0bs'
    const {data} = useFetch(`https://api.github.com/users/${username}/received_events`)

    

    return ( 
        <div className="feed">
            {data.forEach(events => {
                <div className="feed__card">
                    <p>{events.type}</p>
                    <Card />
                </div>
            })}
        </div>
     );
}
 
export default Feed;