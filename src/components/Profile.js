import '../styles/profile.scss'
import ProfileIcon from './ProfileIcon'

const Profile = (props) => {

    const {
        username,
        name,
        image,
        size
    } = props


    return ( 
        <div className="profile">
            <ProfileIcon image={image} size={size} />
            {username && (<span>@{username}</span>)}
            {name && (<span>{name}</span>)}
        </div>
     );
}
 
export default Profile;