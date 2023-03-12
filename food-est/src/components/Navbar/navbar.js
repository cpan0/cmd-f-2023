
// import "./navbar.css"
import "../App.css"

function NavBar({}) {
    return(
        <ul>
            <li><a href="google.com">Home</a></li>
            <li><a href="google.com">Additional Food Resources</a></li>
            <li style={{float:'right'}}><a class="active" href="google.com">About</a></li>
        </ul>
    );
}

export default NavBar;