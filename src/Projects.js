import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import './Projects.css';

export default class Projects extends Component {
    render (){
        return (
        <div class="Projects">
        <Card className="mCard">
            <Card.Header as="h5">Yahoo Sports Internship</Card.Header>
            <Card.Img className="project-img" variant="top" src="https://cdn.mos.cms.futurecdn.net/oNtdYXhb7VW2ZLmn38dFCn.jpg" />
            <Card.Body>
                <Card.Title>Android Intern</Card.Title>
                <Card.Text>
                    <p>Created a carousel view consisting of featured sporting events for the 2021 Tokyo Olympics</p>
                    <p>Researched and contributed to solution for migrating asynchronous background tasks for sports app widgets and application alerts to use new Jetpack Workmanager API. </p>
                    <p>Redesigned sports app's bottom navigation architecture, inheriting
                    responsibility for repurposing UI events and notifications to a
                    reusable render design pattern.</p>
                </Card.Text>
                <Button variant="primary" href="https://github.com/Terence21/Yahoo-Sports-Internship-Summary" target="_blank">See Code</Button>
            </Card.Body>
            </Card>
            <Card className="mCard">
            <Card.Header as="h5">Onit</Card.Header>
            <Card.Img className="project-img" variant="top" src="https://play-lh.googleusercontent.com/Jj0CQhBK7XborBFv-JPGmr2Ovvxs2L-dXDOKSoQ3Q1vktU8JrWou7lvrHqeuwsQz2Yyi" />
            <Card.Body>
                <Card.Title>Android Application</Card.Title>
                <Card.Text>
                    <p>Application to remind users of their tasks, based on current location, alarms, and relativity to others</p>
                </Card.Text>
                <Button variant="primary" href="https://github.com/Terence21/Onit" target="_blank">See Code</Button>
            </Card.Body>
        </Card>
            <Card className="mCard">
            <Card.Header as="h5">Movie-Recommendation-Application</Card.Header>
            <Card.Img className="project-img" variant="top" src="https://beautifulpixels.com/wp-content/uploads/2017/06/popcorn-masthead.png" />
            <Card.Body>
                <Card.Title>Full Stack Mobile Application</Card.Title>
                <Card.Text>
                application to suggest movies based on individual and collection of movies
                </Card.Text>
                <Button variant="primary" href="https://github.com/Terence21/Movie-Recommendation-Application" target="_blank">See Code</Button>
            </Card.Body>
        </Card>
        </div>
        );
    }
}
