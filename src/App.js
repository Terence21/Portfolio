import React, {Component} from 'react';
import './App.css';
import './Nav.css'
import Home from './Home';
import NavigationBar from './Nav';
import { Nav, Navbar, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import './Contact.css'


class App extends Component{
    render() {
      return (
        <div className="App">
          <Router>
                <Navbar  variant="dark">
                    
                      <Navbar.Brand id="mBrand">Terence</Navbar.Brand>
                      <Nav className="ms-auto">
                        <Nav.Link >
                          <Link class="mLink" to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link >
                          <Link class="mLink" to="/resume">Resume</Link>
                        </Nav.Link>
                        <Nav.Link >
                          <Link class="mLink" to="/projects">Projects</Link>
                        </Nav.Link>
                        <Nav.Link >
                          <Link class="mLink" id="right-most-nav" to="/contact">Contact</Link>
                        </Nav.Link>
                      </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/"  component={Home.HomeBody} />      
                    <Route exact path="/resume"  component={Resume}/>  
                    <Route exact path="/projects" component={Projects} />    
                    <Route exact path="/contact" component={Contact} />        
                </Switch>
            </Router>
        </div>
      );
    }
}
export default App;