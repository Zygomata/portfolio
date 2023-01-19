import React from 'react'
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contactContainer" id="4"> 
    <a href="mailto: arjunigsh@gmail.com" ><div className="email contactCard" >
      <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
      <p>Email</p>
    </div></a>

   <a href="www.linkedin.com/in/arjun-i-gupta" target="_blank"> <div className="linkedin contactCard"> 
      <FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon> 
      <p>Linkedin</p>
    </div></a>

    <a href="https://github.com/Zygomata" target="_blank"><div className="github contactCard">
      <FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon> 
      <p>Github</p>
    </div></a>


    <a href="https://docs.google.com/document/d/1g2QLstXVxqdsUYm-EmmBXnNbWYrHVSOPCu2_y1a6pO4/edit#" target="_blank"><div className="resume contactCard">
    <FontAwesomeIcon className="icon" icon={faFile}></FontAwesomeIcon> 
    <p>Resume</p>
    </div>
      </a>
      
       
 
    </div>
  )
}

export default Contact