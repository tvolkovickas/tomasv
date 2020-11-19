import React from 'react';

const SmokeAway = () => (
    <div className="container">
        <h1 className="center-align">Smoke Away</h1>
        <p className="flow-text">Smoke Away is my very first project I have started working on while learning Unity. My learning started
            with 2D games development course on Udemy. This was a great way to covers some basics and learn how to use
            Unity editor. At first I was slightly overwhelmed with all different options and functionality that Unity provides.
            However, a couple weeks in, I was already starting my own project instead of blindly following tutorials.
        </p>
        <p className="flow-text">
            This is a very simple arcade game that has been inspired by classic Breakout and a poster I have seen on social media(hence the weird theme behind it).
            While working on this project I have learnt quite a few basics like: simple menus, object spawning, physics, audio, canvas and so on. One of the
            biggest challenges was my chosen platform - mobile! Tutorials were only covering desktop games development, so anything specific to mobiles I had to
            research and figure out on my own. This was both frustrating and possibly the reason why I remained engaged and continued working on it. This is
            by no means excellent or innovative game, but it is the first game I completed and managed to release to Google Play store! So if I ever mention that one of my
            hobbies is games development...well, I got some proof now!
        </p>
        <p className="flow-text">Get it on <a href="https://play.google.com/store/apps/details?id=com.VolktechStudios.SmokeAway">Google Play store</a></p>
        <div className="row">
            <div className="video-container">
                <iframe title="Smoke Away trailer" width="560" height="315"
                    src="https://www.youtube.com/embed/Vl_ZH9ccVgE" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </div>
    </div>
)

export default SmokeAway;