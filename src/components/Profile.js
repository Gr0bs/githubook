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
            {name && (<span>{name}</span>)}
            {username && (<span>{username}</span>)}
        </div>
     );
}
 
export default Profile;