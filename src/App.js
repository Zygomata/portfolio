import React from 'react'
import Nav from './components/navbar/nav'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import './App.css'




const App = () => {
  return (
    <div class="container">

      <Nav/> 
      <About/> 
  
      <Projects/>
      <Contact/>
           
    
    </div>
  )
}

export default App


  
