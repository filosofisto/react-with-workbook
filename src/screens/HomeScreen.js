import React from 'react';
import imageSrc from '../images/still_life_medium.jpg';
import {Link} from "react-router-dom";

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="img-container">
                    <img src={imageSrc} alt="Kettle, cup and other objects on a cupboard"/>
                </div>
                <h2>Welcome</h2>
                <p>
                    I love cheese, especially manchego swiss. ☺ Fromage queso jarlsberg cheesy
                    feet emmental cottage cheese camembert de normandie bocconcini. Cottage cheese
                    everyone loves cauliflower cheese rubber cheese squirty cheese halloumi cow
                    fondue. Bocconcini cheese and biscuits everyone loves fondue red leicester
                    st. agur blue cheese rubber cheese ricotta. Cheesy grin mozzarella.
                </p>
                <ul>
                    <li><Link to={'/horses'} className="nav-link">Horses in a field</Link></li>
                    <li><Link to={'/voltmeter'} className="nav-link">Old voltmeter</Link></li>
                    <li><Link to={'/geese'} className="nav-link">Geese in the sky</Link></li>
                </ul>
            </div>
        );
    }
}
