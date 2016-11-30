import React, { Component } from 'react';

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
            <a className="navbar-brand" href="/">Custom Mike Logo</a>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/#about">About</a></li>
              <li><a href="/#category-grid">Work</a></li>
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
