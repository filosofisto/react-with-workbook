import React from 'react';
import imageSrc from '../images/horses_medium.jpg';
import {Link} from "react-router-dom";

export default class HorsesScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="img-container">
                    <img src={imageSrc} alt="Horses in a field"/>
                </div>
                <br/>
                <p>
                    <string>Changed/New Version Released 3.0</string>
                </p>
                <p>
                    Bocconcini swiss cut the cheese. Manchego boursin smelly cheese cheesy grin
                    squirty cheese mozzarella cheddar hard cheese. Manchego roquefort camembert
                    de normandie cheese slices mascarpone cow cheesy feet airedale. Port-salut
                    jarlsberg gouda port-salut port-salut cheese on toast.
                </p>
                <br/>
                <p>
                    Manchego cheese strings hard cheese. Say cheese swiss cheese strings squirty
                    cheese mozzarella feta the big cheese halloumi. Cheddar cheese and biscuits
                    cut the cheese queso hard cheese red leicester parmesan st. agur blue cheese.
                    Smelly cheese caerphilly hard cheese cream cheese cream cheese the big cheese
                    feta squirty cheese. Babybel fromage edam lancashire.
                </p>
                <br/>
                <ul>
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                </ul>
            </div>
        );
    }
}
