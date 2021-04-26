import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {

    const {user} = useParams()
    const [userList, setUserList] = useState()

    useEffect(() => {
        fetch(`https://api.github.com/search/users?q=${user}+in:login`)
           .then(res => res.json())
           .then(data => {
               setUserList(data)
            })
    },[user])

    console.log(userList)
    

    return ( 
        <div className="userList">
            <h2>This is user list</h2>
            {/* <p>{userList}</p> */}
        </div>
     );
}
 
export default Search;