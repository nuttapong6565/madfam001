import React from 'react';
import './footer.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faTree} from '@fortawesome/free-solid-svg-icons'
 import { faFacebook, faTwitter, faDiscord, faYoutube,  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the best community before others</h1>
    </div>
    <div className="gpt3__footer-links section__padding">
      <div>
        <FontAwesomeIcon icon={faFacebook} color="#3b5998" /><a href="https://web.facebook.com/Madfam001/">&nbsp;Madfam001</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" /><a href="https://twitter.com/Madfish001">&nbsp;Madfish001</a>
      </div>

      <div>
        <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" /><a href="https://twitter.com/Poom_Madcat">&nbsp;Madcat001</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faDiscord} color="#738ADB" /><a href="https://discord.gg/cAc3fsmGVz">&nbsp;Madfam001&nbsp;</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faYoutube} color="#e62117" /><a href="https://www.youtube.com/c/madfish001">&nbsp;Madfish001</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faTree} color="#1DE9B6" /><a href="https://linktr.ee/madfam001">&nbsp;Link&nbsp;Tree</a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Madfam001. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
