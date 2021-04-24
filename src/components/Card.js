import '../styles/card.scss'
import Profile from './Profile'
import {useState, useEffect} from 'react'

const Card = (props) => {

    const {event, description, date, image, username, subject} = props

    let time = date // Destructre for having hours or min or days

    const [eventName, setEventName] = useState('')

    useEffect(() => {
        switch(event) {
            case "PublicEvent": 
                setEventName('past public the repo')
                break;
            case "CreateEvent":
                setEventName('create the repo ')
                break;
            default:
                setEventName(event)
            }
    },[event])

    return ( 
            <div className="card">
                <Profile image={image} username={username}/>
                <div className="card__event">
                    <p>{eventName} <strong>{subject}</strong></p>
                    {description && (<cite>"{description}"</cite>)}
                    {time && (<span>{time}</span>)}
                </div>
           </div>
     );
}
 
export default Card;