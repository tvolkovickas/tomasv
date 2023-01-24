import React from "react";

import smokeaway from "../images/smokeaway.png";
import crushedSkull from "../images/crushedSkull.jpg";
import webdevelopment from "../images/webdevelopment.jpg";
import Card from "../Card";

const Home = () => (
  <div className="container">
    <h1 className="center-align">Welcome!</h1>
    <blockquote>“Talk is cheap. Show me the code.” - Linus Torvalds</blockquote>
    <div className="divider"></div>
    <div className="section">
      <div className="row">
        <div className="col s12 l6">
          <Card
            imageAlt="Smoke Away game"
            imageUrl={smokeaway}
            title="Smoke Away game"
            description="Game inspired by a classic Breakout"
            link="/games/smokeaway"
            linkText="Smoke Away"
          />
        </div>
        <div className="col s12 l6">
          <Card
            imageAlt="Crushed skull during volumetric rendering"
            imageUrl={crushedSkull}
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
            imageUrl={webdevelopment}
            title="This Website"
            description="Description on how this website was built"
            link="/website"
            linkText="This Website"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
