import '../styles/navbar.scss'
import {useEffect, useState} from 'react'
import {ReactComponent as Search} from '../images/search_icon.svg'
import Profile from './Profile'

const API = 'https://api.github.com/users/'

const Navbar = () => {

    const [user, setUser] = useState('')

    useEffect(() => {
        fetch(API + 'gr0bs')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    },[])

    return ( 
        <nav>
            <div className="logo">Github Social</div>
            <div className="search">
                <input type="search" placeholder="searching user"/>
                <Search className='icon'/>
            </div>
            <Profile image={user.avatar_url} username={user.login} />
        </nav>
     );
}

export default Navbar;