import React from 'react';
import Feature from '../../components/feature/Feature';
import './madfam.css';

const Madfam = () => (
  <div className="gpt3__whatgpt3 section__margin" id="madfam">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Madfam001" text="Madfam001 is one of Thailand’s first Axie Infinity scholarship programs, which welcomed its first scholar in April 2021. We offer our scholars 70% of their earnings, which was unheard of in the Thai community during that time. Our only mission is to introduce the world of P2E (Play to Earn) gamings to the Thai community." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">All we need is a great community</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Our goal" text="To this day, Madfam001 has not gained any profit from the scholarship program. Instead, we have reinvested our earnings not only into providing a selected group of our scholars with meta builds. But also for charity programs across Thailand weather for the hospitals and food banks. We also encourage our members to contribute to community-building by rewarding said scholars in higher shares based on their contributions, such as artworks, Discord bots, or guild managers." />
      <Feature title="No revenue" text="Unlike other guilds with investors seeking a share, Madfam001 is a self-funded organization seeking no revenue. We are essentially a group of university students trying to have fun while providing an alternative income idea for those initially impacted by the Covid-19 situation in Thailand." />
    </div>
  </div>
);

export default Madfam;
