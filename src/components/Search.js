import { useEffect, useState } from 'react'
import '../styles/search.scss'
import useFetch from './useFetch'

const Search = ({showSearch, setShowSearch, username}) => {

    const [data, error] = useFetch(`https://api.github.com/users/${username}`)
    const user = {...data}

        setShowSearch(false)
    }

    return ( 
        <div className="search" style={showSearch ? {display: 'block' } : {display: 'none'}}>
            <div className="search__modal">
                {/* {error && <span>{error}</span>} */}
                {showSearch && data.item.map( user => (
                    <p>{user.login}</p>
                )
                    
                )}
            </div>
            <div className="search__elt" onClick={handleClick}></div>
        </div>
     );
}
 
export default Search;