import React from 'react'
import './Contact.css'
import sendButton from './images/send-image.svg';

export default function Contact (){
    return (
        <div class="contact">
            <ContactPrompt />
            <ContactForm />
        </div>
            
        )
}

function ContactPrompt () {
    return (
        <div class="contact-prompt">
            <div id="contact-me">Contact Me</div>
            <p id="message-prompt">Hi, What would you like to share.</p>
            <p id="messsage-prompt-talk">Let's Talk!</p>
        </div>
        
    )
}

function ContactForm(){
    return (
        <div class="mForm">
            <form class="contact-form">
                <label >Name</label>
                <input type="text" />
                <label>E-Mail</label>
                <input type="text" />
                <label>Subject</label>
                <input type="text" />
                <label>Message</label>
                <textarea rows="1">Hello...</textarea>
                <input id="send-image" type="image" src={sendButton} />
            </form>
        </div>
    )
}