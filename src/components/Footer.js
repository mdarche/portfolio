import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">

          <div className="col-sm-6">
            <h3>Menu</h3>
            <div className="divider-light" />
            <ul>
              <li><a href="/#about">About Me</a></li>
              <li><Link to={'/work/web-ui-design'}>Web & UI Design</Link></li>
              <li><Link to={'/work/identity-design'}>Identity Design</Link></li>
              <li><Link to={'/work/print-design'}>Print Design</Link></li>
              <li><Link to={'/work/web-ios-development'}>Web & iOS Dev</Link></li>
              <li><Link to={'/online-resources'}>My Resources</Link></li>
            </ul>
          </div>

          <div className="col-sm-6">
            <h3>Connect</h3>
            <div className="divider-light" />
            <ul className="social-links">
              <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/mdarche"><i className="fa fa-linkedin" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://www.pinterest.com/mdarshay/"><i className="fa fa-pinterest" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/mdarche"><i className="fa fa-github" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://www.behance.net/MikeDarche"><i className="fa fa-behance" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://medium.com/@mkdarche"><i className="fa fa-medium" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/mdarche"><i className="fa fa-facebook-square" /></a></li>
            </ul>
            <p className="email">
              <a href="mailto:michael@catalyzemarketing.com">
                <i className="fa fa-envelope" />
                Email Me
              </a>
            </p>
          </div>

          <div className="col-sm-12 copyright">
            Designed and built by Mike Darche • 2016
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
