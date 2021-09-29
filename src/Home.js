import pfp from './images/pfp.jpg';
import github from './images/icons8-github.svg';
import linkedin from './images/icons8-linkedin.svg';
import gmail from './images/icons8-gmail.svg';

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
        
            <HomeFooter />
        </div>
        

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

export default HomeBody;