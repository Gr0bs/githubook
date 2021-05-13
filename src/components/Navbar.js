import '../styles/navbar.scss'
import {ReactComponent as SearchIcon} from '../images/search.svg'
import {ReactComponent as Logo} from '../images/Logo.svg'
import {ReactComponent as Discover} from '../images/discover.svg'
import {Link} from 'react-router-dom'
import Profile from './Profile'
import useFetch from './useFetch'
import { useState } from 'react'
import Search from './Search'


const Navbar = () => {

    const [value, setValue] = useState('')
    const {data: user } = useFetch('https://api.github.com/users/Gr0bs')

    const [showSearch, setShowSearch] = useState(false)


    const openSearch = () => {
        setShowSearch(true)
    }

    return ( 
        <nav className='menu'>
            <Link to='/'>
                <Logo className='logo' alt='Logo Gitstagram' />
            </Link>

            <div className="menu__search">
                <input type="search" placeholder="searching user" 
                    onChange={(e) => setValue(e.target.value)} 
                    onClick={openSearch}
                />
                <Search 
                    showSearch={showSearch}
                    setShowSearch={setShowSearch}
                />
                <Link to={`/search/${value}`}>
                   <SearchIcon className='icon'/>
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