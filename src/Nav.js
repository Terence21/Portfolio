import React from 'react';
import './App.css'
import './Nav.css'
import constants from './Constants';
import {Navbar, Container, Nav, LinkContainer} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Resume from './Resume';

class NavigationBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            
            <Router>
                <Navbar variant="dark">
                    <Container>
                    <Navbar.Brand className="brand" href="#home">Terence</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link className="home"><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/resume">Resume</Link></Nav.Link>
                    <Nav.Link ><Link to="/projects">Projects</Link></Nav.Link>
                    <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <Switch>
                    <Route path="/home">
                        
                    </Route>
                    <Route path="/resume.html">
                        <Resume />
                    </Route>
                    <Route path="/">
                       
                    </Route>
                    <Route path="/">
                        
                    </Route>
                </Switch>
            </Router>
        )
    }

}

export default NavigationBar;

