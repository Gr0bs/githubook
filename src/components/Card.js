import '../styles/card.scss'
import Profile from './Profile'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {

    const {event, description, date, image, username, subject, width, size, link} = props

    //CREATED DATE
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
                <Profile image={image} username={username} size={size}/>
                <div className="card__event">
                    <p>{eventName} <strong>{subject}</strong></p>
                    {description && (<cite>"{description}"</cite>)}
                    {time && (<span className='time'>{time}</span>)}
                </div>
                {link && (
                    <Link className="card__link" to={`/user/${username}`}>
                    <span>See Github</span>
                </Link>
                )}
           </div>
     );
}
 
export default Card;