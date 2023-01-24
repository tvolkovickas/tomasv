import React from "react";

import me from "../images/me.jpg";

const About = () => (
  <div className="container">
    <h1 className="center-align">About</h1>
    <div className="divider"></div>
    <div className="section">
      <div className="row">
        <div className="col offset-s3 s6">
          <img
            className="responsive-img circle"
            alt="Tomas Volkovickas"
            src={me}
          />
        </div>
      </div>
      <h5>Who is Tomas Volkovickas?</h5>
      <p className="flow-text">
        Let's start with introductions. My name is Tomas Volkovickas and I am a
        software developer. I am based in Nottingham, UK and currently work at
        Capital One. For the most up to date info check my{" "}
        <a href="https://www.linkedin.com/in/tomas-volkovickas">linkedIn</a>{" "}
        profile.
      </p>
      <h5>Experience</h5>
      <p className="flow-text">
        My coding journey started with me joining the Computer Games Programming
        course at the University of Derby. After 2 years I have joined a local
        software development company called PXtech as a placement student.
        During my placement I have met plenty of great developers and will be
        forever grateful for this amazing opportunity. Since then, the course
        has been completed, few jobs changed and many projects created and
        released to customers. Unfortunately, even though I have finished games
        programming course, I am yet to work on anything related to games. That
        particular itch will remain and hopefully I will eventually ship my own
        creation...One day!
      </p>
      <h5>Hobbies</h5>
      <p className="flow-text">
        In my spare time I try to exercise and keep myself busy in general. My
        current passions are cycling and running. Exercise is definitely a great
        way to unwind and is especially important for someone who spend so much
        time sitting and coding. Apart from exercise, I also enjoy a great book,
        film, tv show and of course...video games.
      </p>
      <h5>This website</h5>
      <p className="flow-text">
        About this website. Well...it's not a blog. I won't be adding weekly or
        monthly updates. But I am using it to try out new things. For instance,
        I have recently scrapped my old linux server and this is now served from
        AWS CloudFront CDN as a static S3 site. In the future, I will use it to
        showcase any new things I learn or any interesting projects I am working
        on. Tom
      </p>
    </div>
  </div>
);

export default About;
