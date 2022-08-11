import React from 'react';
import instagram from '../../../assets/icons/instagram-icon.svg';
import youtube from '../../../assets/icons/youtube-icon.svg';
import twitter from '../../../assets/icons/twitter-icon.svg';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="alignment-container">
        <div className="footer__description">All Rights Reserved © Travel Portal</div>
        <div className="footer__social-networks-links">
          <a href="https://www.instagram.com/" className="link social-network-link">
            <img
              src={instagram}
              alt="instagram icon"
              title="instagram link"
            />

          </a>
          <a href="https://www.youtube.com/" className="link social-network-link">
            <img
              src={youtube}
              alt="youtube icon"
              title="youtube link"
            />

          </a>
          <a href="https://twitter.com" className="link social-network-link">
            <img
              src={twitter}
              alt="twitter icon"
              title="twitter link"
            />

          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
