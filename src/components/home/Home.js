import React, { Component } from 'react';
import Hero from './Hero';
import AboutSection from './AboutSection';
import CategorySection from './CategorySection';
import ToolSection from './ToolSection';

class Home extends Component {

  componentDidMount() {
    document.title = 'Mike Darche | Portfolio';
  }

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

export default Home;
