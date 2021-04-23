const ProfileIcon = ({hireBorder, image}) => {

    const hire = hireBorder ? 'hire' : ''

    return ( 
        <div className={`profile__avatar ${hire}`}>
            <img className="avatar" src={image} alt="Avatar of Github" />
        </div>
     );
}
 
export default ProfileIcon;