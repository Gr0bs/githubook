import { useEffect, useState } from 'react'
import '../styles/search.scss'
import useFetch from './useFetch'

const Search = ({username}) => {

    console.log('Username : ' + username)
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    const fetchData = async (username) => {

        await fetch(`https://api.github.com/search/users?q=${username}+in:login`)
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
        .catch(err => console.log(err))
        setLoading(false)
    }

    useEffect(() => {
        if(username !== ''){
            fetchData(username)
        } else if(username == ''){
            setLoading(true)
        }
    },[username])
        

    return ( 
        <div className="search">
            <div className="search__modal">
              <>  {loading && (
                    <span>Loading....</span>
                )}
                
                {!loading && (
                    users.items.map( user => (
                        <p key={user.id}>
                            {user.login}
                        </p>
                        )
                    )
                    )
                }
                </>
            </div>
            {/* <div className="search__elt" onClick={handleClick}></div> */}
        </div>
     );
}
 
export default Search;