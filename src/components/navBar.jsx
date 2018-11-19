import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Rental Apps</Link>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/movies">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers">Custmers</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;