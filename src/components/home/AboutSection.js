import React, { Component } from 'react';
import RetinaImage from 'react-retina-image';

const portrait = require('../../data/images/home/vectorportrait.png');
const retinaPortrait = require('../../data/images/home/vectorportrait@2x.png');

export default class AboutSection extends Component {

  render() {
    return (
      <div className="container">
        <div className="row" id="about">
          <h3 id="nameBG">MKD</h3>
          <h4>About Me</h4>

          <div className="col-md-4 portrait">
            <RetinaImage src={[portrait, retinaPortrait]} alt="Mike Darche" />
          </div>

          <div className="col-md-4">

            <h3 className="heading">Background</h3>
            <div className="divider-dark" />
            <p>Hi, my name is Mike and I love to build things. I'm a designer and entrepreneur as well as a self-taught programmer.</p>

            <p>I graduated from the University of Notre Dame in 2014 with a BBA in Management Entrepreneurship and a concentration in Graphic Design. Since then, I teamed up with a few friends to co-run a small web and marketing agency called <a href="http://catalyzemarketing.com">Catalyze</a>. By helping our clients grow their brands online over the last few years, I've spent countless hours learning web development and today's best digital marketing practices.</p>

            <p>My experiences have transformed my original design interest into a deep appreciation for web technologies and user experience design. In this portfolio, you'll find a few of my favorite recent projects. If you have any questions, feel free to <a href="">contact me.</a></p>

          </div>

          <div className="col-md-4">
            <h3 className="heading">Interests</h3>
            <div className="divider-dark" />
            <p>You can learn plenty by checking out the work pages below, so here's my chance to give you the authentic run-down. Things I love:</p>
            <ul>
              <li>Reading nonfiction</li>
              <li>Early morning workouts</li>
              <li>Cooking or anything kitchen-related</li>
              <li>Vector illustrations</li>
              <li>Red wine</li>
              <li>Pinterest</li>
            </ul>
            <p>Things I don't love:</p>
            <ul>
              <li>Driving behind cyclists</li>
              <li>Losing golf balls</li>
              <li>The latest season of TWD</li>
            </ul>

          </div>

        </div>
      </div>
    );
  }
}
