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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
          </div>

          <div className="col-md-4">
            <h3 className="heading">Interests</h3>
            <div className="divider-dark" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
