import useFetch from './useFetch'
import Card from './Card'

const Activity = ({username}) => {

    const {data: events, errorEvent} = useFetch(`https://api.github.com/users/${username}/events`)


    return ( 
        <div className="activity">
            {errorEvent && (<span>{errorEvent}</span>)}
            { events && events.map(event => {
                if(event.type === 'PushEvent'){
                    return(
                        event.payload.commits.map((commit, index) => (
                            <Card
                            key={index}
                            image={event.actor.avatar_url}
                            size="small"
                            subject={event.repo.name.substring(username.length + 1)}
                            date={event.created_at}
                            type='feed'
                            event={"Commit on the repo"}
                            description={commit.message}
                            />
                            ))
                    )
                } else {
                    return (
                        <Card
                        key={event.id}
                        image={event.actor.avatar_url}
                        size="small"
                        subject={event.repo.name.substring(username.length + 1)}
                        date={event.created_at}
                        type='feed'
                        event={event.type}
                        description={event.payload.description}
                    />
                    )
                }
            })
            }
        </div>
    );
}
 
export default Activity;