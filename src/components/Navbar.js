import '../styles/navbar.scss'
import {ReactComponent as Search} from '../images/search_icon.svg'
import Profile from './Profile'
import useFetch from './useFetch'


const Navbar = () => {

    const {data: user } = useFetch('https://api.github.com/users/Gr0bs')

    return ( 
        <nav>
            <div className="logo">Github Social</div>
            <div className="search">
                <input type="search" placeholder="searching user"/>
                <Search className='icon'/>
            </div>
            {user && (
                <Profile image={user.avatar_url} username={user.login} />
            )}
        </nav>
     );
}

export default Navbar;