import '../styles/navbar.scss'
import {ReactComponent as Search} from '../images/search.svg'
import {ReactComponent as Logo} from '../images/Logo.svg'
import {ReactComponent as Discover} from '../images/discover.svg'
import {Link} from 'react-router-dom'
import Profile from './Profile'
import useFetch from './useFetch'
import { useState } from 'react'


const Navbar = () => {

    const [value, setValue] = useState('')
    const {data: user } = useFetch('https://api.github.com/users/Gr0bs')

    return ( 
        <nav className='menu'>
            <Link to='/'>
                <Logo className='logo' alt='Logo Gitstagram' />
            </Link>

            <div className="menu__search">
                <input type="search" placeholder="searching user" onChange={(e) => setValue(e.target.value)} />
                <Link to={`/search/${value}`}>
                   <Search className='icon'/>
                </Link>
            </div>

            <div className='menu__right'>
                <Discover className='icon' />
                {user && (
                    <Profile image={user.avatar_url} username={user.login} size='small'/>
                )}
            </div>
        </nav>
     );
}

export default Navbar;