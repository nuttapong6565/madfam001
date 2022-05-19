import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Fill the form and join our tournament now!</p>
      <h3>Register Today & start exploring the endless P2E (Play to Earn) world.</h3>
    </div>
    <div id="web" className="gpt3__cta-btn">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhU_mpbzGhpA4wqU9zzfURx-ZXsZCXp-nTkRTDGVDR1sFrSw/viewform">Register</a>
      <a href="https://docs.google.com/document/d/1blKY6E1JdDmpe-Q3s706iSjLfCk63CMq3mKsj7mfwuA/edit?usp=sharing">Rules</a>
    </div>
    <div id="mobil">
      <div className="gpt3__cta-btn">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhU_mpbzGhpA4wqU9zzfURx-ZXsZCXp-nTkRTDGVDR1sFrSw/viewform">Register</a>
      </div>
      <div className="gpt3__cta-btn">
        <a href="https://docs.google.com/document/d/1blKY6E1JdDmpe-Q3s706iSjLfCk63CMq3mKsj7mfwuA/edit?usp=sharing">Rules</a>
      </div>
    </div>
   
  </div>
);

export default CTA;
