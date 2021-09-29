import React, {Component} from 'react';
import './App.css';
import './Nav.css'
import HomeBody from './Home';
import NavigationBar from './Nav';

class App extends Component{
    render() {
      return (
        <div className="App">
          <NavigationBar/>
          <HomeBody />
        </div>
      );
    }
}
export default App;