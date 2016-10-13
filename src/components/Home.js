import React, { Component } from 'react';
import Hero from './Hero';
import About from './About';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
      </div>
    );
  }
}
