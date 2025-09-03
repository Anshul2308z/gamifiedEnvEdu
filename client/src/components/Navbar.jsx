
import {useState} from "react"
import {Link} from 'react-router-dom'

export default function Navbar (){
    const [loggedin, toggleLogin] = useState(false)
    return (
        <div>
            <h1>Welcome to #project-name# </h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/login">{loggedin ? "Logout":"Login"}</Link> |{" "}
                <Link to="/dashboard">Dashboard</Link> |{" "}
                <Link to="/leaderboard">Leaderboard</Link>                
            </nav>
        </div>
    )
}


/* 
    remark : 

<Link> → a word (but clickable).

"|" → just a separator, like punctuation.

{ " " } → makes sure there’s a space after the bar so links don’t look squished.

*/