import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ imageAlt, imageUrl, title, description, link, linkText }) => (
    <div className="card medium">
        <div className="card-image">
            <img alt={imageAlt} src={imageUrl} />
        </div>
        <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{description}</p>
        </div>
        <div className="card-action">
            <Link to={link}>{linkText}</Link>
        </div>
    </div>
)

export default Card;