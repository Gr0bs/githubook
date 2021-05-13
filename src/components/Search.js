import '../styles/search.scss'

const Search = ({showSearch, setShowSearch}) => {

    const handleClick= () => {
        setShowSearch(false)
    }

    return ( 
        <div className="search" style={showSearch ? {display: 'block' } : {display: 'none'}}>
            <div className="search__modal">
                {showSearch && (
                    <p>Searching...</p>
                )}
            </div>
            <div className="search__elt" onClick={handleClick}></div>
        </div>
     );
}
 
export default Search;