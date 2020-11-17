import React from 'react';

const Website = () => (
    <div className='container'>
        <h1 className="center-align">This Website</h1>
        <div className="divider"></div>
        <div className="section">
            <p className="flow-text">
                On this page I will describe how this website was built. This will be a living document
                and I will try and update it as major changes are implemented.
            </p>
            <h5>HTML</h5>
            <p className="flow-text">
                This website uses a mixture of plain html and React components.
            </p>
            <h5>CSS</h5>
            <p className="flow-text">
                There is no custom CSS added. All of it has been provided by <a
                    href="https://materializecss.com/about.html">Materialize</a>.
                The only other addition was <a href="https://necolas.github.io/normalize.css/">Normalize</a>. This
                is to ensure that we don't have major difference between browsers on how content is displayed to
                user.
            </p>
            <h5>Javascript</h5>
            <p className="flow-text">
                This website is currently built using React and React Router for navigation
            </p>
            <h5>Infrastructure</h5>
            <p className="flow-text">
                This website is served from AWS S3 bucket as static site. In addition to this, CloudFront CDN was
                added to speed up load times.
            </p>
        </div>
    </div>
)

export default Website;