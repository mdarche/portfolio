import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {
    return (

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid" id="navigation">

          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">
              <div className="logo" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/#about">About</a></li>
              <li className="dropdown">
                <a href="/category-grid" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Work<span className="caret" /></a>
                <ul className="dropdown-menu">
                  <li><Link to={'/work/web-ux-design'}>Web & UX Design</Link></li>
                  <li role="separator" className="divider" />
                  <li><Link to={'/work/identity-design'}>Identity Design</Link></li>
                  <li role="separator" className="divider" />
                  <li><Link to={'/work/print-design'}>Print Design</Link></li>
                  <li role="separator" className="divider" />
                  <li><Link to={'/work/web-ios-development'}>Web & iOS Dev</Link></li>
                </ul>
              </li>
              <li><a href="https://github.com/mdarche" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" /></a></li>
              <li><a href="http://behance.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-behance" /></a></li>
              <li><a href="https://www.linkedin.com/in/mdarche" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>

        </div>
      </nav>

    );
  }
}
