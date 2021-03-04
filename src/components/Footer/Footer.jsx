import * as React from 'react';
import logo from '../../assets/img/rs_school_js.svg';
import './footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <span>
          &nbsp;
        <a href="https://github.com/Kulgeyko93" target="_blank" rel="noreferrer">
          Kulgeyko93
        </a>
      </span>
    </div>
    <span>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <img alt="logo" className="logo" src={logo} />
      </a>
      2021
    </span>
  </footer>
);
