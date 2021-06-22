import React from 'react';
import '../App.css';
import { Button } from './Button';
import CurDate from './CurDate';
import Greeting from './Greeting';
// import Weather from './Weather';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <Greeting />
      {/* <Weather /> */}
      <p>What are you waiting for?</p>
      <p>{CurDate()}</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          // onClick={console.log('hey')}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
