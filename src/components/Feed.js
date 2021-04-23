import {useEffect, useState} from 'react'
import '../styles/feed.scss'
import Card from './Card'
import useFetch from './useFetch'

const Feed = () => {


    const username = 'Gr0bs'
    const {data, error} = useFetch(`https://api.github.com/users/${username}/received_events`)

    return ( 
        <div className="feed">
            {error && <span> {error}</span>}
            {data && data.map(event => (
                <div className="feed__card">
                    <Card event={event.type} description={event.payload.description}/>
                </div>
            ))
            }
        </div>
     );
}
 
export default Feed;