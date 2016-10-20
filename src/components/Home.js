import React from 'react';
import Hero from './home/Hero';
import AboutSection from './home/AboutSection';
import CategorySection from '../containers/CategorySection';
import ToolSection from '../containers/ToolSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <CategorySection />
      <ToolSection />
    </div>
  );
};

export default Home;
