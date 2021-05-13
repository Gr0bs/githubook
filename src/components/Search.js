import { useEffect, useState } from 'react'
import '../styles/search.scss'
import Profile from './Profile'
import {Link} from 'react-router-dom'

const Search = ({username, setShowSearch}) => {

    console.log('Username : ' + username)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState('')
    const [empty, setEmpty] = useState(false)

    const fetchData = async (username) => {

        await fetch(`https://api.github.com/search/users?q=${username}+in:login`)
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            setError(null)
            setLoading(false)
            setEmpty(false)
        })
        .catch(err => {
            console.log('ERR : ' + err.message)
            setError(err.message)
            setLoading(false)
            setEmpty(true)
        })
    }

    useEffect(() => {
        if(username !== ''){
            fetchData(username)
        } else if(username === ''){
            setLoading(true)
            setEmpty(true)
        }
    },[username])
    

    const handleClick = () => {
        setShowSearch(false)
    }

    return ( 
        <div className="search">
            <div className="search__modal">
                {error && <span>{error}</span>}
                {empty && <span>Searching for an user ?</span>}
                {loading && !empty &&(
                    <span>Loading....</span>
                )}
                {!loading && (
                    users.items.map( user => (
                        <Link key={user.id} to={`/user/${user.login}`} onClick={handleClick}>
                            <Profile
                                username={user.login}
                                image={user.avatar_url}
                                size='small'
                            />
                        </Link>
                        )
                    )
                    )
                }
            </div>
            <div className="search__elt" onClick={handleClick}></div>
        </div>
     );
}
 
export default Search;