import React from 'react';
import madfam from '../../assets/madfam.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's build a great community together</h1>
      <p>All we want is just a great community that everyone can enjoy with friends. Our only mission is to introduce the world of P2E (Play to Earn) gamings to the Thai community.</p>
      <div className="gpt3__header-content__input">
        <a href="#madfam">Learn more</a>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={madfam} alt="madfam"/>
    </div>
  </div>
);

export default Header;
