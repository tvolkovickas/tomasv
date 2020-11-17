import React from 'react';

import Card from '../Card';

const Home = () => (
    <div className='container'>
        <h1 className="center-align">Welcome!</h1>
        <blockquote>“Talk is cheap. Show me the code.” - Linus Torvalds</blockquote>
        <div className="divider"></div>
        <div className="section">
            <div className="row">
                <div className="col s12 l6">
                    <Card
                        imageAlt="Smoke Away game"
                        imageUrl="https://s3-eu-west-1.amazonaws.com/tomasv.co.uk-content/smokeaway.png"
                        title="Smoke Away game"
                        description="Game inspired by a classic Breakout"
                        link="/games/smokeaway"
                        linkText="Smoke Away"
                    />
                </div>
                <div className="col s12 l6">
                    <Card
                        imageAlt="Crushed skull during volumetric rendering"
                        imageUrl="https://s3-eu-west-1.amazonaws.com/tomasv.co.uk-content/crushedSkull.jpg"
                        title="Rendering"
                        description="Volumetric rendering examples"
                        link="/rendering"
                        linkText="Rendering"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col s12 l6">
                    <Card
                        imageAlt="Web Development"
                        imageUrl="https://s3-eu-west-1.amazonaws.com/tomasv.co.uk-content/webdevelopment.jpg"
                        title="This Website"
                        description="Description on how this website was built"
                        link="/website"
                        linkText="This Website"
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Home;