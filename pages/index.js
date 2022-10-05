import React, { useState, useEffect } from 'react';
import FAQ from '../components/faq';
import Aos from 'aos';
import "aos/dist/aos.css";
import Head from 'next/head';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  function changeMode() {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.style = 'background-color: white; color: #161616';
    } else {
      document.body.style = 'background-color: #161616; color: white';
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Arden Labs</title>
      </Head>
      <div className='wrapper'>
        <div className='navbar'>
          <nav className='navbar-section' style={{ backgroundColor: darkMode ? "rgb(22 22 22/.9)" : "white" }}>
            <div className='logo-section'>
              <img className='logo-image' src={darkMode ? "/images/ardent-logo-black-bg.png" : "/images/ardent-logo-white-bg.png"}></img>
              <h1 className='title-logo'>ARDEN</h1>
            </div>
            <div className='cluster-links'>
              <ul className='nav-links'>
                <li className='nav-link'><a style={{ color: darkMode ? "white" : "#161616" }} href="">Home</a></li>
                <li className='nav-link'><a style={{ color: darkMode ? "white" : "#161616" }} href="">Features</a></li>
                <li className='nav-link'><a style={{ color: darkMode ? "white" : "#161616" }} href="">Product</a></li>
                <li className='nav-link'><a style={{ color: darkMode ? "white" : "#161616" }} href="">FAQ</a></li>
              </ul>
            </div>
            <ul className='nav-links'>
              <li className='nav-link' id="darkMode">
                <button className='dark-mode-button' style={{ backgroundColor: darkMode ? "#161616" : "white" }} onClick={changeMode}>
                  <img style={{ width: "16px", height: "16px" }} src={darkMode ? "images/night.png" : "images/day.png"}></img>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className='first-section'>
          <div className='wrap-section'>
            <img className='first-section image' src="/images/blur 1.png"></img>
            <h1 data-aos="zoom-out" className='title'>Welcome to <br></br><span className='gradient-ardent'>ARDEN</span></h1>
            <h4 data-aos="zoom-out" className='subtitle' style={{ color: darkMode ? "#f8f8f8" : "#1c1c1c" }}>Arden is a brand new social platform integrated with blockchain which based on users chosen sports and at the same time rewarding them with crypto coin.</h4>
            <a href="#features"><button data-aos="zoom-out" className='arden-button'>Get Started</button></a>
          </div>
        </div>

        <div data-aos="zoom-out" className='second-section'>
          <h1 className='title second'><span className='gradient-ardent'>No more doing <br></br> sports alone</span></h1>
          <div className='boxes'>
            <div className='first-box' id="features" style={{ backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8" }}>
              <div className='first-box-description'>
                <h1 className='title' style={{ color: darkMode ? "white" : "black" }}>Enjoy activities with your friends</h1>
                <p>Why train yourself when you can do with your partner?</p>
              </div>
              <div className='first-box-image'>
                <img src="/images/two-peeps.png"></img>
              </div>
            </div>
            <div className='second-box'>
              <div className='box-left' style={{ backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8" }}>
                <div className='box-left-description'>
                  <h1 className='title' style={{ color: darkMode ? "white" : "black" }}>0% Management Fees</h1>
                  <p>Free of charge, finding your partner in activities is our first priority.</p>
                </div>
                <div className='box-left-image'>
                  <img src="/images/another-two-peeps.png"></img>
                </div>
              </div>
              <div className='box-right' style={{ backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8" }}>
                <div className='box-right-image'>
                  <img src="/images/bicycle.png"></img>
                </div>
                <div className='box-right-description'>
                  <h1 className='title' style={{ color: darkMode ? "white" : "black" }}>Explore activities</h1>
                  <p>You are free to explore and add activities that you like. Simply add them in our application.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FAQ status={{ darkMode }}></FAQ>
        <div class="video-section">
          <video class="video-display aos-init aos-animate" src="/videos/video.mp4" controls="controls"></video>
        </div>
        <div className='footer'>
          <div className='content-footer'>
            <h1 className='title'>Learn More About <span className='gradient-ardent'>ARDEN</span></h1>
            <h4 className='subtitle' style={{ color: darkMode ? "#f8f8f8" : "#1c1c1c" }}> These are the links to help you more understand about Arden</h4>
            <div className='footer-buttons'>
              <a className='footer-links' href="https://t.me/ardenlabs"><div className='footer-button telegram'><img className='icon-logo' src="/images/telegram-white.png" />Join Telegram  ↗</div></a>
              <a className='footer-links' href="https://twitter.com/arden_labs"><div className='footer-button telegram'><img className='icon-logo' src="/images/twitter-white.png" />Join Twitter  ↗</div></a>
            </div>
          </div>
          <img className='blur' src="/images/blur.png"></img>
        </div>
      </div>
    </>
  )
}
