import React, { Component } from 'react';
import Hero from './Hero';
import About from './About';
import PortfolioList from '../containers/PortfolioList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <PortfolioList />
      </div>
    );
  }
}
