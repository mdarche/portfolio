import React from 'react';

const portrait = require('../../data/images/vectorportrait.png');

const AboutSection = () => {
  return (
    <div className="container">
      <div className="row" id="about">
        <h3>MKD</h3>
        <h4>About Me</h4>

        <div className="col-md-4 portrait">
          <img src={portrait} alt="Mike Darche" />
        </div>

        <div className="col-md-4">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
        </div>
        
        <div className="col-md-4">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum</p>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
