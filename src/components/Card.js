import '../styles/card.scss'
import Profile from './Profile'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {

    const {event, description, date, image, username, subject, type, size, link} = props

    const [eventName, setEventName] = useState(null)

    useEffect(() => {
        switch(event) {
            case "PublicEvent": 
                setEventName('Past public the repo')
                break;
            case "CreateEvent":
                setEventName('Create the repo ')
                break;
            case "PushEvent":
                setEventName('Push in to repo')
                break;
            default:
                setEventName(event)
            }
    },[event])

    return ( 
            <div className={`card card--${type}`}>
                {type==='feed' && (<div className="card__image">
                    <span className='img'></span>
                </div>)}
                        <div className="card__event">
                            <Profile image={image} username={username} size={size}/>
                            {date && (<span className='time'>{date}</span>)}
                            <p>{eventName} <strong>{subject}</strong></p>
                            {description && (<cite>"{description}"</cite>)}
                        </div>
                    {link && (
                        <Link className="card__link" to={`/user/${username}`}>
                             <span>See</span>
                        </Link>
                    )}
           </div>
     );
}
 
export default Card;