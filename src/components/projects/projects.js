import React from 'react'
import './projects.css'
import APIWorld from'./APIworld.jpg';
import Cheerio from './cheero.png';
import Scratch from './reactfromscratch.png'

const Projects = () => {
  return (
<div id="3" className="cardContainer">
    <ul class="cards">
    <li class="cards_item"><a href="https://github.com/Fuzzkatt/PicsartChallengeAttempt1" target="_blank">
      <div class="card">
        <div class="card_image"><img src={APIWorld} alt="APIWorld"/></div>
        <div class="card_content">
          <h2 class="card_title">API World Hackathon Winner</h2>
          <p class="card_text">Built an image upscaler web app for blurry sheet music which assisted musicians using Audiveris. </p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div></a>
    </li>
    <li class="cards_item"><a href="https://github.com/Zygomata/Email-Scraper-" target="_blank">
      <div class="card">
        <div class="card_image"><img src={Cheerio} alt="beach"/></div>
        <div class="card_content">
          <h2 class="card_title">Web Scraping Email Bot</h2>
          <p class="card_text">Engineered an Email bot using Cheerio API.Scraped 5,000 emails and sent them to different companies.</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div></a>
    </li>
    <li class="cards_item"><a href="https://github.com/Zygomata/React-From-Scratch" target="_blank">
      <div class="card">
        <div class="card_image"><img src={Scratch} alt="beach"/></div>
        <div class="card_content">
          <h2 class="card_title">Building React from Scratch</h2>
          <p class="card_text">Built React from scratch using Javascript.Includes function components such as createElement.

</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div></a>
    </li>
    </ul>
    </div>
    )
  }
    

export default Projects