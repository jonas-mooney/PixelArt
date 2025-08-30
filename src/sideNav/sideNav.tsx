import { Link } from "react-router";

function sideNav() {
    return (
        <div className="sideNav">
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/settings">Settings</Link>    
            <span>nav item</span>
            <span>nav item</span>
            <span>nav item</span>
        </div>
    )
}

export default sideNav; 