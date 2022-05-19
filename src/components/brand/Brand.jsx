import React from 'react';
import { madfam, axieinfinity, discord } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={madfam} alt="madfam" />
    </div>
    <div>
      <img src={axieinfinity} alt="axieinfinity" />
    </div>
    <div>
      <img src={discord} alt="discord" />
    </div>
  </div>
);

export default Brand;
