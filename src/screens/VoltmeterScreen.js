import React from 'react';
import imageSrc from "../images/volt_medium.jpg";
import {Link} from "react-router-dom";

export default class VoltmeterScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="img-container">
                    <img src={imageSrc} alt="An old voltmeter displaying voltage"/>
                </div>
                <br/>
                <p>
                    Edam parmesan smelly cheese. Dolcelatte say cheese cheesy feet lancashire
                    cow boursin stinking bishop brie. Stilton cheese strings say cheese pecorino
                    cheeseburger fromage frais cauliflower cheese manchego. St. agur blue cheese
                    ricotta stinking bishop queso camembert de normandie manchego cheese triangles
                    fondue. Gouda.
                </p>
                <br/>
                <p>
                    Bocconcini swiss cut the cheese. Manchego boursin smelly cheese cheesy grin
                    squirty cheese mozzarella cheddar hard cheese. Manchego roquefort camembert
                    de normandie cheese slices mascarpone cow cheesy feet airedale. Port-salut
                    jarlsberg gouda port-salut port-salut cheese on toast.
                </p>
                <br/>
                <ul>
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                </ul>
            </div>
        )
    }
}