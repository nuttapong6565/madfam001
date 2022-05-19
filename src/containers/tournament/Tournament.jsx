import React from 'react';
import possibilityImage from '../../assets/tournament.png';
import './tournament.css';

const Tournament = () => (
  <div className="gpt3__possibility section__padding" id="tournament">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Let's have fun together</h4>
      <h1 className="gradient__text">Tournament</h1>
      <p>Due to its skill-based, competitive nature, the Axie battle system is a good fit for competitive play and Esports. We believe this is a critical aspect for future growth and we have seen how engaged the players become when there is money on the line.</p>
      <h4>Fill the form and join our tournament now!</h4>
    </div>
  </div>
);

export default Tournament;
