import React from 'react';
import './App.css'
import './Nav.css'
import constants from './Constants';


class NavigationBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div class="navbar">
                <div id="website-author">Terence</div>
                <ul class="navbar-labels-list">
                    <li>Home</li>
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }

}

export default NavigationBar;

