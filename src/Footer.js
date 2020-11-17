import React from 'react';
import './Footer.css';

const FooterComponent = () => (
    <footer className="page-footer">
        <div className="container">
            <h6>Contact</h6>
            <a className="white-text footerLinks" href="mailto:tvolkovickas@gmail.com">Email</a>
            <a className="white-text footerLinks" href="https://www.linkedin.com/in/tomas-volkovickas">LinkedIn</a>
            <a className="white-text footerLinks" href="https://www.facebook.com/volkovickas">Facebook</a>
            <a className="white-text footerLinks" href="https://www.instagram.com/volkovickas">Instagram</a>
        </div>
        <div className="footer-copyright">
            <div className="container">© 2020 Tomas Volkovickas</div>
        </div>
    </footer>
);

export default FooterComponent;