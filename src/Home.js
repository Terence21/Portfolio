import pfp from './images/pfp.jpg';
import github from './images/icons8-github.svg';
import linkedin from './images/icons8-linkedin.svg';
import gmail from './images/icons8-gmail.svg';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './App.css'
import './Nav.css'
import constants from './Constants';

function HomeBody(){
    return (
        <div class="home-body">

            <div class="home-body-content">
                
                <div class="left">
                    <hr/>
                    <div id="nav-full-name">Terence Peterson</div>
                    <div>Hello, My name is Terence, Aspiring senior computer science
                        student at Temple University in Philadelphia, Pennsylvania.
                    </div>
                    <div >GO OWLS!! 🦉</div>
                </div>

                <img src={pfp} />
            </div>
            <BootStrapFooter />
        </div>
        

    )
}


function BootStrapFooter(){
    return (
        <Navbar>
                <Container>
                <Nav className="mx-auto">
                <Nav.Link className="mLink" href={constants.github} target="_blank"><a> <img class="footer-img" src={github} /> </a></Nav.Link>
                <Nav.Link className="mLink" href={constants.linkedIn} target="_blank"><a> <img class="footer-img" src={linkedin} /></a></Nav.Link>
                <Nav.Link className="mLink" href={constants.gmail} target="_blank"><a> <img class="footer-img" src={gmail} /> </a></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
    )
}

function HomeFooter(){
    return (
        <div class="home-footer">
            <img src={github}/>
            <img src={linkedin}/>
            <img src={gmail}/>
        </div>
    )
}

const Home = {
    HomeBody : HomeBody,
    BootStrapFooter : BootStrapFooter
}
export default Home;