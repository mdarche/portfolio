import React from 'react';
import Hero from './home/Hero';
import AboutSection from './home/AboutSection';
import CategorySection from './home/CategorySection';
import ToolSection from './home/ToolSection';

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
