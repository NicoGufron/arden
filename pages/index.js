import React, { useState, useEffect } from 'react';
import FAQ from '../components/faq';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  function changeMode() {
    setDarkMode(!darkMode);
    if(darkMode) {
      document.body.style = 'background-color: white; color: #161616';

    } else {
      document.body.style = 'background-color: #161616; color: white';
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1000});
  }, []);

  return (
    <>
      <div className='wrapper'>
        <div className='navbar'>
          <nav className='navbar-section' style={{backgroundColor : darkMode ? "#161616" : "white"}}>
            <div className='logo-section'>
              <img className='logo-image' src={darkMode ? "/images/ardent-logo-white-bg.png" : "/images/ardent-logo-black-bg.png"}></img>
              <h1 className='title-logo'>ARDEN</h1>
            </div>
            <ul className='nav-links'>
              <li className='nav-link'><a style= {{color : darkMode ? "white" : "#161616"}}href="">Home</a></li>
              <li className='nav-link'><a style= {{color : darkMode ? "white" : "#161616"}}href="">Features</a></li>
              <li className='nav-link'><a style= {{color : darkMode ? "white" : "#161616"}}href="">Gallery</a></li>
              <li className='nav-link'><a style= {{color : darkMode ? "white" : "#161616"}}href="">FAQ</a></li>
              <li className='nav-link'>
                <button className='dark-mode-button' style={{backgroundColor : darkMode ? "#161616" : "white"}} onClick={changeMode}>
                  <img style={{ width: "16px", height: "16px" }} src={darkMode ? "images/night.png" : "images/day.png"}></img>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className='first-section'>
          <img className='first-section image' src={ darkMode ? "images/big-arden.png" : "images/big-arden-w.png"}></img>
          <h1 data-aos="zoom-out" className='title'>Introducing <br></br><span className='gradient-ardent'>Arden</span></h1>
          <h4 data-aos="zoom-out" className='subtitle'>A simple way where you can find your friend in different activities</h4>
          <a href=""><button className='arden-button' style={{color : darkMode ? "#1c1c1c" : "#f8f8f8"}}>Get Started</button></a>
        </div>
        <div data-aos="fade-in" className='second-section'>
          <div className='box' style={{backgroundColor : darkMode ? "#1c1c1c" : "#f8f8f8"}}>
            <h1 className='title-box'>Enjoy activities with a friend.</h1>
            <p className='subtitle-box'>Why train yourself when you can do with your partner?</p>
            <a href="#">Find your groups →</a>
          </div>
          <div className='row-boxes'>
            <div className='row-box left' style={{backgroundColor : darkMode ? "#1c1c1c" : "#f8f8f8"}}>
              <h1 className='title-box'>0% Management Fees</h1>
              <p className='subtitle-box'>Free of charge, finding your partner in activities is our first priority.</p>
            </div>
            <div className='row-box right' style={{backgroundColor : darkMode ? "#1c1c1c" : "#f8f8f8"}}>
              <h1 className='title-box'>Explore Activities</h1>
              <p className='subtitle-box'>You are free to explore and add activities that you like. Simply add them in our application.</p>
            </div>
          </div>
        </div>
        <FAQ></FAQ>
        <div className='gallery-section'>
          <h1 className='title'><span className='gradient-ardent'>Gallery</span></h1>
          <h4 className='subtitle'>Our recent development in the application</h4>
        </div>
        <div className='footer'>
          <div className='content-footer'>
            <h1 className='title'>Learn More About <span className='gradient-ardent'>Arden</span></h1>
            <h4 className='subtitle'> These are the links to help you more understand about Arden</h4>
            <div className='footer-buttons'>
              <a href=""><div className='footer-button telegram'><img className='icon-logo' src="/images/telegram-white.png" />Join Telegram  ↗</div></a>
              <a href=""><div className='footer-button telegram'><img className='icon-logo' src="/images/twitter-white.png" />Join Twitter  ↗</div></a>
            </div>
          </div>
          <img className='blur' src="/images/blur.png"></img>
        </div>
      </div>
    </>
  )
}
