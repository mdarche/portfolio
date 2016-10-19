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
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio-grid">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </div>
      </nav>

    );
  }
}
