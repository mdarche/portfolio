import React from 'react';

const Banner = () => {
  const { image } = this.props.image;

  return (
    <div>
      <img alt="banner" src={image} className="work-banner" />
    </div>
  );
};

export default Banner;
