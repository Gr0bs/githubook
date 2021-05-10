import '../styles/navbar.scss'
import {ReactComponent as Search} from '../images/search_icon.svg'
import {Link} from 'react-router-dom'
import Profile from './Profile'
import useFetch from './useFetch'
import { useState } from 'react'


const Navbar = () => {

    const [value, setValue] = useState('')
    const {data: user } = useFetch('https://api.github.com/users/Gr0bs')

    return ( 
        <nav>
            <Link to='/'>
                <div className="logo">Github Social</div>
            </Link>

            <div className="search">
                <input type="search" placeholder="searching user" onChange={(e) => setValue(e.target.value)} />
                <Link to={`/search/${value}`}>
                   <Search className='icon'/>
                </Link>
            </div>

            {user && (
                <Profile image={user.avatar_url} username={user.login} size='small'/>
            )}
        </nav>
     );
}

export default Navbar;