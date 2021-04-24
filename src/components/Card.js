import '../styles/card.scss'
import Profile from './Profile'
import {useState, useEffect} from 'react'

const Card = (props) => {

    const {event, description, date, image, username, subject, width} = props

    let time // Destructre for having hours or min or days
    if(date) {time = date.substring(0,10)}

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
            <div className={`card card${width}`}>
                <Profile image={image} username={username} size='medium'/>
                <div className="card__event">
                    <p>{eventName} <strong>{subject}</strong></p>
                    {description && (<cite>"{description}"</cite>)}
                    {time && (<span className='time'>{time}</span>)}
                </div>
           </div>
     );
}
 
export default Card;