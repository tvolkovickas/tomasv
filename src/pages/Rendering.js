import React from 'react';

const Rendering = () => (
    <div className='container'>
        <h1 className="center-align">Rendering</h1>
        <div className="divider"></div>
        <div className="section">
            <h5>Volumetric Rendering</h5>
            <p>A couple examples of volumetric rendering I did as part of the university course</p>
            <div className="row">
                <div className="video-container">
                    <iframe title="Volume Deformation using Chain Mail algorithm" width="560" height="315"
                        src="https://www.youtube.com/embed/iptr6vboIYE" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div className="row">
                <div className="video-container">
                    <iframe title="Volumetric Rendering in DirectX11 using RayCasting" width="560" height="315"
                        src="https://www.youtube.com/embed/pUJ6GxcDKr4" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>
)

export default Rendering;