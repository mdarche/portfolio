import React, { Component } from 'react';
import Hero from './home/Hero';
import AboutSection from './home/AboutSection';
import CategorySection from '../containers/CategorySection';
import ToolSection from '../containers/ToolSection';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <AboutSection />
        <CategorySection />
        <ToolSection />
      </div>
    );
  }
}
