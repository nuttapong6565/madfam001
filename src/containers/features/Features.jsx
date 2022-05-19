import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Investing',
    text: 'We have invested mainly in 3 games: Axie Infinity, Thetan Arena, and Star Atlas, with the most emphasis remaining in Axie Infinity. Thetan Arena and (soon) Star Atlas are an additional perk for our Axie scholars who want to try other types of P2E games.',
  },
  {
    title: 'Enjoyable games',
    text: 'We have made ourselves clear to discourage scholars from relying solely on their gaming income. Instead, P2E games should be viewed as enjoyable games that will allow additional earnings to those who put effort into them.',
  },
  {
    title: 'A safe space',
    text: 'In the end, we strive to provide gamers, either P2E or traditional, a safe space to exchange our experiences in the things we love. We understand that there are an increasing number of bad actors in the area trying to target our newer community members unfamiliar with this blockchain wizardry madness. We will be one of the many reliable communities offering help to those trying to enter the cryptocurrency space',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future of Madfam001</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
