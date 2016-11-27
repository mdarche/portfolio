import React, { Component } from 'react';

const portrait = require('../../data/images/home/vectorportrait.png');

export default class AboutSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgSrc: portrait
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_brown.png'
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: portrait
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row" id="about">
          <h3 id="nameBG">MKD</h3>
          <h4>About Me</h4>

          <div className="col-md-4 portrait">
            <img
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              src={this.state.imgSrc}
              alt="Mike Darche"
            />
          </div>

          <div className="col-md-4">

            <h3 className="heading">Background</h3>
            <div className="divider-dark" />
            <p>Hi, my name is Mike and I love to build things. I'm a designer and entrepreneur by formal schooling as well as a self-taught programmer.</p>

            <p>I graduated from the University of Notre Dame in 2014, where I earned a BBA in Mgmt. Entrepreneurship with a concentration in Graphic Design. Since then, I teamed up with a few friends to co-run a small web and marketing agency called <a href="http://catalyzemarketing.com">Catalyze</a>. By helping our clients grow their brands online over the last few years, I've spent countless hours learning web development and today's best digital marketing practices.</p>

            <p>My experiences have transformed my original design interest into a deep appreciation for web and user experience design. In this portfolio, you'll find a few of my favorite recent projects. If you have any questions, feel free to <a href="">contact me.</a></p>

            <p>Thanks for stopping by!</p>
          </div>

          <div className="col-md-4">
            <h3 className="heading">Interests</h3>
            <div className="divider-dark" />
            <p>You can learn plenty by checking out the work pages below, so here's my chance to give you the authentic run-down. <b>Things that I love:</b></p>
            <ul>
              <li>Reading all types of nonfiction</li>
              <li>Early morning workouts</li>
              <li>Cooking and anything kitchen related</li>
              <li>Red wine</li>
              <li>Gradients and vector artwork (obviously)</li>
              <li>Pinterest. Seriously.</li>
            </ul>
            <p><b>Things that I don't love:</b></p>
            <ul>
              <li>Pretty regularly sucking at golf</li>
              <li>Cellphone zombies</li>
              <li>Driving behind cyclists</li>
            </ul>

          </div>

        </div>
      </div>
    );
  }
}
