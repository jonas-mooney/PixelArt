import { Link } from "react-router";

function sideNav() {
    return (
        <div className="sideNav">
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/settings">Settings</Link>
        </div>
    )
}

export default sideNav; 