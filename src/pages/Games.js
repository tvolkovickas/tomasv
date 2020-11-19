import React from 'react';
import { Link } from "react-router-dom";

const Games = () => (
    <div className="container">
        <h1 className="center-align">My Games</h1>
        <p>This page will list all games I have been working in my spare time. I have started learning unity in the middle of 2020
            while working on a simple project and following tutorials on Udemy. While the beginnings may be humble, hopefully the scope and
            complexity of my creations will increase in the near future. Tom
        </p>
        <div className="divider"></div>
        <h4 className="center-align">Smoke Away</h4>
        <div className="row">
            <div className="col s6 offset-s3">
                <img className="responsive-img" alt="Smoke Away game" src="https://tomasv.co.uk/media/smokeaway.png" />
            </div>
        </div>
        <div className="center-align"><Link to="/games/smokeaway">More info</Link></div>
        <div className="divider"></div>
    </div>
)

export default Games;