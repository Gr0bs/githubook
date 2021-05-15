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

    const user = localStorage.getItem('user')

    const [value, setValue] = useState('')
    const {data: username} = useFetch(`https://api.github.com/users/${user}`)
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
                    onClick={(e) => openSearch()}
                />
                {showSearch && (
                    <Search 
                        username={value}
                        setShowSearch={setShowSearch}
                    />
                    )}
                <SearchIcon  className='icon icon--inactif'/>
            </div>

            <div className='menu__right'>
                <Link to='/discover'>
                    <Discover className='icon' />
                </Link>
                {username && (
                    <Link to={`/user/${username.login}`}>
                        <Profile image={username.avatar_url} username={username.login} size='small'/>
                    </Link>
                )}
            </div>
        </nav>
     );
}

export default Navbar;