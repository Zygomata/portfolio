import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
  return (

<header>
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
      <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </label>
      <label className="logo">Arjun Gupta</label>
      <ul className="navList">
        <li><a className="active" href="#1">Home</a></li>
        <li><a href="#2">About</a></li>
        <li><a href="#3">Projects</a></li>
        <li><a href="#4">Contact</a></li>
  
      </ul>
    </nav>
  </header>
  )
}

export default Nav