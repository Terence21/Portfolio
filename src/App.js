import React, {Component} from 'react';
import './App.css';
import './Nav.css'

import Navigation from './Nav';
class App extends Component{
    render() {
      return (
        <div className="App">
          <Navigation.navigationbar />
          <Navigation.HomeBody />
        </div>
      );
    }
}
export default App;