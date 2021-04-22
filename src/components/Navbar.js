import '../styles/navbar.scss'
import {ReactComponent as Search} from '../images/search_icon.svg'
import Profile from './Profile'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">Github Social</div>
            <div className="search">
                <input type="search" placeholder="searching user"/>
                <Search className='icon'/>
            </div>
            <Profile />
        </nav>
     );
}

export default Navbar;