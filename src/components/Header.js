import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class Header extends Component {

    constructor(props) {
      super(props);
      this.state = {
        toggle: false
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
      if (window.pageYOffset > 100) {
        this.setState({ toggle: true });
      } else {
        this.setState({ toggle: false });
      }
    }


  render() {
    const state = this.state.toggle;

    const navClass = state ? classnames('navbar', 'navbar-default', 'navbar-fixed-top', 'show') : classnames('navbar', 'navbar-default', 'navbar-fixed-top');
    const logoClass = state ? classnames('logo', 'toggle') : 'logo';
    const linkClass = state ? 'toggle' : '';
    const dropClass = state ? classnames('dropdown-toggle', 'toggle') : 'dropdown-toggle';

    return (

      <nav className={navClass}>
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
              <div className={logoClass} />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a className={linkClass} href="/#about">About</a></li>
              <li className="dropdown">
                <a href="/category-grid" className={dropClass} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Work<span className="caret" /></a>
                <ul className="dropdown-menu">
                  <li><Link to={'/work/web-ui-design'}>Web & UI Design</Link></li>
                  <li role="separator" className="divider" />
                  <li><Link to={'/work/identity-design'}>Identity Design</Link></li>
                  <li role="separator" className="divider" />
                  <li><Link className={linkClass} to={'/work/print-design'}>Print Design</Link></li>
                  <li role="separator" className="divider" />
                  <li><Link className={linkClass} to={'/work/web-ios-development'}>Web & iOS Dev</Link></li>
                </ul>
              </li>
              <li><a className={linkClass} href="https://github.com/mdarche" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" /></a></li>
              <li><a className={linkClass} href="https://www.behance.net/MikeDarche" rel="noopener noreferrer" target="_blank"><i className="fa fa-behance" /></a></li>
              <li><a className={linkClass} href="https://www.linkedin.com/in/mdarche" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>

        </div>
      </nav>

    );
  }
}
