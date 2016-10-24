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
              <li><Link>About Me</Link></li>
              <li><Link>Recent Projects</Link></li>
              <li><Link>Blog</Link></li>
              <li><Link>My Tools</Link></li>
            </ul>
          </div>

          <div className="col-sm-6">
            <h3>Connect</h3>
            <div className="divider-light" />
            <ul className="social-links">
              <li><a href="http://linkedin.com/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="http://pinterest.com/"><i className="fa fa-pinterest" /></a></li>
              <li><a href="http://github.com/"><i className="fa fa-github" /></a></li>
              <li><a href="http://behance.com/"><i className="fa fa-behance" /></a></li>
              <li><a href="http://plus.google.com/"><i className="fa fa-google-plus" /></a></li>
              <li><a href="http://facebook.com/"><i className="fa fa-facebook-square" /></a></li>
            </ul>
            <p className="email">
              <a href="mailto:webmaster@example.com">
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
