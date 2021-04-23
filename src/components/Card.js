import '../styles/card.scss'
import Profile from './Profile'

const Card = ({event, description, date}) => {

    let time = date // Destructre for having hours or min or days

    return ( 
            <div className="card">
                <Profile />
                <div className="card__event">
                    <p>{event}</p>
                    {description && (<cite>{description}</cite>)}
                    {time && (<span>{time}</span>)}
                </div>
           </div>
     );
}
 
export default Card;