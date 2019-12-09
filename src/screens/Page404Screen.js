import React from 'react';
import imageSrc from '../images/404.jpeg';
import {Link} from "react-router-dom";

export default class Page404Screen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="img-container">
                    <img src={imageSrc} alt="Page not found"/>
                </div>
                <br/>
                <ul>
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                </ul>
            </div>
        );
    }
}
