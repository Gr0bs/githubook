const ProfileIcon = ({hireBorder, image, size}) => {

    const hire = hireBorder ? 'hire' : ''

    return ( 
        <div className={`profile__avatar ${hire}`}>
            <img className={`avatar ${size}`} src={image} alt="Avatar of Github" />
        </div>
     );
}
 
export default ProfileIcon;