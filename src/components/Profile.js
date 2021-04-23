import '../styles/profile.scss'
import ProfileIcon from './ProfileIcon'

const Profile = (props) => {

    const {
        username,
        name,
        image
    } = props


    return ( 
        <div className="profile">
            <ProfileIcon image={image} />
            {name && (<span>{name}</span>)}
            {username && (<span>{username}</span>)}
        </div>
     );
}
 
export default Profile;