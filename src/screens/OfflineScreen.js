import React from 'react';
import imageSrc from '../images/offline.png';
import {Link} from "react-router-dom";

export default class OfflineScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="img-container">
                    <img src={imageSrc} alt="No internet connection"/>
                </div>
                <p>The resource you requested has not been cached! It is not viewable offline!</p>
                <br/>
                <ul>
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                </ul>
            </div>
        );
    }
}
