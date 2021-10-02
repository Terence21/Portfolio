import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './Nav';
import './Nav.css';
import resume from './images/peterson-resume-image.jpg'
import './Resume.css'

function Resume () {
        return (
          <div class="resume">
             <img class="resume-img" src={resume} width="500px" height="725px"/>
          </div>
        );
      }

export default Resume;