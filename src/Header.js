import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    let location = useLocation();
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        window.M.Sidenav.init(elems);
    }, []);

    useEffect(() => {
        var instance = window.M.Sidenav.getInstance(document.querySelector('.sidenav'));
        instance.close();
    }, [location]);

    return (
        <header >
            <ul id="side-menu" className="sidenav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/rendering">Rendering</Link></li>
                <li><Link to="/website">This Website</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <a href="#" data-target="side-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/games">Games</Link></li>
                            <li><Link to="/rendering">Rendering</Link></li>
                            <li><Link to="/website">This Website</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;