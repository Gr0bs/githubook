import '../styles/feed.scss'
import Card from './Card'
import useFetch from './useFetch'

const Feed = () => {


    const username = 'Gr0bs'
    const {data, error: errorOne} = useFetch(`https://api.github.com/users/${username}/received_events`)
    const {data: misc, error: errorTwo} = useFetch(`https://api.github.com/events`)

    return ( 
        <div className="feed">
            <div className="feed__discover">
                {errorTwo && <span>{errorTwo}</span>}
                {misc && misc.map(elt => (
                    <div className="feed__misc" key={elt.id}>
                        <Card 
                            width='__small'
                            username={elt.repo.name}
                            image={elt.actor.avatar_url}
                        />
                    </div>
                ))}
            </div>

            <div className="feed__event" >
            {errorOne && <span> {errorOne}</span>}
            {data && data.map(event => (
                    <Card
                        key={event.id}
                        width='__large'
                        event={event.type} 
                        description={event.payload.description}
                        username={event.actor.login}
                        image={event.actor.avatar_url}
                        subject={event.repo.name}
                        date={event.created_at}
                        />
                        ))
                    }
            </div>
        </div>
     );
}
 
export default Feed;